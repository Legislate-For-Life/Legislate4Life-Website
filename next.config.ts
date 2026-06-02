import type { NextConfig } from "next";
import path from "path";

// Baseline security headers applied to every response.
// Notes:
//  - HSTS uses a 2-year max-age + preload, which is the de-facto standard
//    for sites operating only over HTTPS. Vercel terminates TLS for us.
//  - X-Frame-Options DENY on HTML routes blocks clickjacking. Policy brief
//    PDFs under /policy-briefs/ use SAMEORIGIN so our pages can embed them.
//  - Permissions-Policy denies sensors / payment / fullscreen we never
//    use, reducing attack surface if a third-party script is ever added.
//  - Content-Security-Policy is intentionally NOT set here yet. Our setup
//    uses inline styles (Tailwind) and self-hosted images via next/image,
//    and a CSP needs careful tuning to avoid breaking those. Adding one
//    is a separate, reviewable change.
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), fullscreen=(self)",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/policy-briefs/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

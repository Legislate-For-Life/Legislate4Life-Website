import type { MetadataRoute } from "next";
import {
  ORG_DESCRIPTION,
  ORG_NAME,
  ORG_SHORT_NAME,
  SITE_URL,
} from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: ORG_NAME,
    short_name: ORG_SHORT_NAME,
    description: ORG_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#121110",
    theme_color: "#c19b3e",
    lang: "en-US",
    id: SITE_URL,
    icons: [
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

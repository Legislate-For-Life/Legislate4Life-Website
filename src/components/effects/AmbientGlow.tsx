interface AmbientGlowProps {
  className?: string;
  variant?: "hero" | "section" | "footer";
}

export default function AmbientGlow({
  className = "",
  variant = "hero",
}: AmbientGlowProps) {
  if (variant === "hero") {
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      >
        {/* Primary gold bloom top-right */}
        <div
          className="absolute"
          style={{
            right: "-10%",
            top: "-15%",
            width: "55%",
            height: "70%",
            background:
              "radial-gradient(ellipse at center, rgba(193,155,62,0.13) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        {/* Secondary bloom bottom-left */}
        <div
          className="absolute"
          style={{
            left: "-5%",
            bottom: "-10%",
            width: "40%",
            height: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(193,155,62,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      >
        <div
          className="absolute"
          style={{
            right: "5%",
            top: "10%",
            width: "35%",
            height: "60%",
            background:
              "radial-gradient(ellipse at center, rgba(193,155,62,0.09) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
      </div>
    );
  }

  // footer
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-x-0 top-0 pointer-events-none h-px ${className}`}
      style={{
        background:
          "linear-gradient(to right, transparent 0%, rgba(193,155,62,0.5) 40%, rgba(193,155,62,0.5) 60%, transparent 100%)",
      }}
    />
  );
}

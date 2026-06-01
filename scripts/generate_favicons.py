"""Generate favicon files from public/images/logo.png for Google and browsers."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
LOGO = ROOT / "public" / "images" / "logo.png"
APP = ROOT / "src" / "app"


def square_logo(size: int) -> Image.Image:
    source = Image.open(LOGO).convert("RGBA")
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    source.thumbnail((size, size), Image.Resampling.LANCZOS)
    offset = ((size - source.width) // 2, (size - source.height) // 2)
    canvas.paste(source, offset, source)
    return canvas


def main() -> None:
    APP.mkdir(parents=True, exist_ok=True)

    square_logo(512).save(APP / "icon.png", format="PNG")
    square_logo(180).save(APP / "apple-icon.png", format="PNG")

    favicon = square_logo(48)
    favicon.save(
        APP / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )

    print("Generated src/app/icon.png (512)")
    print("Generated src/app/apple-icon.png (180)")
    print("Generated src/app/favicon.ico (16/32/48)")


if __name__ == "__main__":
    main()

from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "release" / "x-egpu.zip"
FILES = (
    ROOT / "plugin.json",
    ROOT / "main.py",
    ROOT / "dist" / "index.js",
)

missing = [str(path.relative_to(ROOT)) for path in FILES if not path.is_file()]
if missing:
    raise SystemExit(
        "Cannot package plugin; required build files are missing: "
        + ", ".join(missing)
        + ". Run 'npm run build' first."
    )

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
with ZipFile(OUTPUT, "w", compression=ZIP_DEFLATED) as archive:
    for path in FILES:
        archive.write(path, path.relative_to(ROOT).as_posix())

print(f"Created {OUTPUT.relative_to(ROOT)}")

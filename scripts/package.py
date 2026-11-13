from pathlib import Path
import json
from zipfile import ZIP_DEFLATED, ZipFile

ROOT = Path(__file__).resolve().parents[1]
package = json.loads((ROOT / "package.json").read_text())
version = package.get("version", "0.0.0")
output_name = f"x-egpu-v{version}.zip"
output_path = ROOT / "release" / output_name

files = (
    ROOT / "package.json",
    ROOT / "plugin.json",
    ROOT / "main.py",
    ROOT / "README.md",
    ROOT / "LICENSE",
    ROOT / "dist" / "index.js",
)

missing = [str(path.relative_to(ROOT)) for path in files if not path.is_file()]
if missing:
    raise SystemExit(
        "Cannot package plugin; required build files are missing: "
        + ", ".join(missing)
        + ". Run 'pnpm run build' first."
    )

output_path.parent.mkdir(parents=True, exist_ok=True)
with ZipFile(output_path, "w", compression=ZIP_DEFLATED) as archive:
    for path in files:
        archive.write(path, path.relative_to(ROOT).as_posix())

print(f"Created {output_path.relative_to(ROOT)}")

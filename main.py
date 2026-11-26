#!/usr/bin/env python3
"""Copy the pre-rendered poster to the grader's output directory.

Standard library only. The entry image is entry.png next to this file;
both runs write the same bytes, so the two grader runs are identical.
"""
import os
import shutil
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
SRC = HERE / "entry.png"


def main(argv):
    # --output <path> wins; then $MAKEFUN_OUTPUT_DIR; then /output/entry.png.
    # The copy is byte-for-byte identical every run: no timestamps, no
    # re-encoding, so the grader's two runs always match.
    out = None
    if "--output" in argv:
        i = argv.index("--output")
        if i + 1 < len(argv):
            out = Path(argv[i + 1])
    if out is None:
        d = os.environ.get("MAKEFUN_OUTPUT_DIR")
        out = Path(d) / "entry.png" if d else Path("/output/entry.png")
    out.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(SRC, out)
    os.chmod(out, 0o644)
    print(f"wrote {out}")


if __name__ == "__main__":
    main(sys.argv[1:])

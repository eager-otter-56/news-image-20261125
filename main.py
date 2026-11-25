#!/usr/bin/env python3
"""Copy the bundled entry.png to the competition output location.

Resolution order for the destination:
  1. --output <path> command-line argument
  2. $MAKEFUN_OUTPUT_DIR/entry.png
  3. /output/entry.png

Standard library only, no network. The copy is byte-for-byte, so repeated
runs always produce identical output.
"""

import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SOURCE = os.path.join(HERE, "entry.png")


def destination(argv):
    if "--output" in argv:
        idx = argv.index("--output")
        if idx + 1 < len(argv):
            return argv[idx + 1]
    out_dir = os.environ.get("MAKEFUN_OUTPUT_DIR")
    if out_dir:
        return os.path.join(out_dir, "entry.png")
    return "/output/entry.png"


def main():
    dest = destination(sys.argv[1:])
    parent = os.path.dirname(dest)
    if parent:
        os.makedirs(parent, exist_ok=True)
    shutil.copyfile(SOURCE, dest)
    os.chmod(dest, 0o644)
    print(f"entry.png written to {dest}")


if __name__ == "__main__":
    main()

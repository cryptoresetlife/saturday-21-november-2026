// Saturday 21 November 2026 in one picture.
// The front page is drawn as HTML/SVG in src/page.html and rendered once to entry.png (src/render.mjs);
// this program, run offline by the grader, copies that PNG to the output directory unchanged.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));

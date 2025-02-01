import { build } from 'esbuild';
import path from 'node:path';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

build({
    entryPoints: [path.resolve('./src/index.ts')],
    outdir: path.resolve('./dist'),
    bundle: true,
    plugins: [vanillaExtractPlugin()],
});

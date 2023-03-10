import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/softDelete.js',
    output: [
        {
            file: 'dist/softDelete.cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/softDelete.esm.js',
            format: 'esm',
        },
    ],
    plugins: [resolve(), commonjs()],
};

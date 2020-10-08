import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json';

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' }
  ],
  plugins: [
    external(),
    babel({
      exclude: 'node_modules/**' // Default: undefined
    }),
    del({ targets: ['dist/*'] }),
    nodeResolve({
      browser: true
    }),
    commonjs({
      include: 'node_modules/**', // Default: undefined
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement'
        ],
        'node_modules/react-dom/index.js': ['render', 'hydrate'],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'typeOf',
          'isContextConsumer',
          'ForwardRef'
        ]
      }
    })
  ],
  external: Object.keys(pkg.peerDependencies || {})
};

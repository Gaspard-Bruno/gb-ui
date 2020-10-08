import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import commonjs from 'rollup-plugin-commonjs';
import externals from 'rollup-plugin-node-externals';
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
      exclude: ['node_modules/**', 'src/router.js', 'src/App.js'] // Default: undefined
    }),
    del({ targets: ['dist/*'] }),
    nodeResolve({
      browser: true
    }),
    externals({
      packagePath: './package.json',
      builtins: true,
      deps: false,
      peerDeps: true,
      optDeps: true,
      devDeps: true,
      except: []
    }),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'useContext',
          'useState',
          'useRef',
          'useEffect',
          'useMemo',
          'useCallback',
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

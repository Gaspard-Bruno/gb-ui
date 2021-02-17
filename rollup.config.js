import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import commonjs from 'rollup-plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
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
    json(),
    image(),
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
      deps: true,
      peerDeps: true,
      optDeps: true,
      devDeps: true,
      except: []
    }),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'cloneElement',
          'Component',
          'createContext',
          'createElement',
          'forwardRef',
          'useCallback',
          'useContext',
          'useDebugValue',
          'useEffect',
          'useLayoutEffect',
          'useMemo',
          'useReducer',
          'useRef',
          'useImperativeHandle',
          'PureComponent',
          'useState'
        ],
        'node_modules/react-dom/index.js': [
          'render',
          'hydrate',
          'unstable_batchedUpdates',
          'findDOMNode',
          'createPortal'
        ],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'typeOf',
          'isContextConsumer',
          'ForwardRef'
        ],
        'node_modules/formik/node_modules/scheduler/index.js': [
          'unstable_runWithPriority',
          'unstable_LowPriority'
        ]
      }
    })
  ],
  external: Object.keys(pkg.peerDependencies || {})
};

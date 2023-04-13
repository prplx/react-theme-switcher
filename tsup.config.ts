import type { Options } from 'tsup'
import cssModulesPlugin from 'esbuild-css-modules-plugin'

const config: Options = {
  entry: ['src/index.ts'],
  dts: true,
  splitting: true,
  sourcemap: false,
  clean: true,
  minify: true,
  esbuildPlugins: [
    cssModulesPlugin({
      filter: /\.modules?\.css$/i,
    }),
  ],
}

export default config

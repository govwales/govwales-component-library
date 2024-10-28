import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import { peerDependencies } from './package.json';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    lib: {
      entry: './src/index.ts', // Specifies the entry point for building the library.
      name: 'dev-component-library', // Sets the name of the generated library.
      fileName: format => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name == 'style.css') return 'css/govwales-styles.css';
          return assetInfo.name as string;
        },
      },
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  publicDir: false,
  plugins: [
    dts(), // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
    copy({
      targets: [
        {
          src: ['src/**/*.scss'],
          dest: 'dist',
          expandDirectories: true,
          onlyFiles: true,
        },
      ],
      flatten: false,
      hook: 'writeBundle',
    }),
  ],
});

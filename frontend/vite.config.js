import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      failOnWarning: false,
      failOnError: false,
      emitWarning: true,
      emitError: true,
      enforce: 'pre', // Run eslint before other plugins
      include: ['./src/**/*.js', './src/**/*.jsx'], // Adjust the path if necessary
      exclude: ['./node_modules/**'],
    }),
  ],
  build: {
    outDir: 'dist', // ensure this matches your expected output directory
  },
})

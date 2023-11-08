import path from 'path';
import { defineConfig } from 'vite'

export default defineConfig({
  appType: 'mpa',
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  }
});

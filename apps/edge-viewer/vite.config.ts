import { defineConfig } from 'vite';

// El visor público (HTML/JS/CSS con PSV v5 + Three) se compila aquí y wrangler
// lo sirve como Workers Static Assets (RULES.md §4/§6).
export default defineConfig({
  root: 'viewer',
  build: {
    outDir: '../dist-viewer',
    emptyOutDir: true,
    target: 'es2022',
  },
});

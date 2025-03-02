import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

// Polyfill for __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd(), '');

  // Extract environment variables from the loaded .env files
  const PORT = Number(env.VITE_PORT) || 3000;
  const HOST = env.VITE_HOST === 'true' ? '0.0.0.0' : 'localhost';
  const API_BASE_URL = env.VITE_API_BASE_URL || 'http://localhost:8000'; // Default to localhost if not set
  const BUILD_DIR = env.VITE_BUILD_DIR || 'dist';
  const ENABLE_SOURCEMAP = env.VITE_SOURCEMAP === 'true';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Alias for cleaner imports
      },
    },
    server: {
      port: PORT,
      host: HOST,
      open: env.VITE_OPEN === 'true', // Automatically open browser if specified
      strictPort: true, // Fail if the port is already in use
      proxy: {
        '/api': {
          target: API_BASE_URL, // Proxy API requests to this base URL
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' prefix
        },
      },
    },
    build: {
      outDir: BUILD_DIR,
      sourcemap: ENABLE_SOURCEMAP,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
        },
      },
      minify: mode === 'production' ? 'esbuild' : false, // Minify only in production
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode), // Define NODE_ENV for the app (optional)
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`, // Global SCSS variables
        },
      },
    },
    envDir: './', // Use .env files in the root directory
  };
});

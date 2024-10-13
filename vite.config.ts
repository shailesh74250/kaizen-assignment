import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Example of automatically including global SCSS variables
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  }
});
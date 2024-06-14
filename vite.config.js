import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Add the module or file path that should be externalized
        ,
    ]},
    outDir: 'build' // Specify the output directory
  },
  base: '/hosterr/',  // Ensure this matches your GitHub repository name
  
});


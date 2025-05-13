import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'UOK Robot Battle 2K25 - Electronics And Computer Science Club',
          description: 'UOK Robot Battle 2K25 is a dynamic robotics competition hosted by the Electronics and Computer Science Club of the University of Kelaniya. Open to all, it fosters creativity, technical skills, and innovation through exciting robotic challenges.',
          keywords: 'robot battles, UOK, robotics competition, 2025, ECSC, ecsc',
          author: 'ECSC CLUB - University of Kelaniya',
        },
      },
    }),
  ],
  server: {
    host: true, // <-- This is the magic
    port: 5174, // optional, just to fix the port if you want
  }
});

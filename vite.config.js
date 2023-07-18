import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression';
import react from '@vitejs/plugin-react'

export default () => {
  return {
    plugins: [viteCompression()],
    base: '/cv/'
  };
};
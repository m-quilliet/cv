import { defineConfig } from 'vite'
import  {  ViteMinifyPlugin  } from 'vite-plugin-minify'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
  },
  ViteMinifyPlugin :[( { } )], 
  base: "/cv/"
})

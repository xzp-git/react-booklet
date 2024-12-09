import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 将 '@' 设置为 'src' 目录
      '@components': path.resolve(__dirname, 'src/components'), 
      '@hooks': path.resolve(__dirname, 'src/hooks'), 
    },
  }
})

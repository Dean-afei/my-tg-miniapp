import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
            },
        },
    },
    plugins: [react(), basicSsl()],
    build: {
        outDir: './docs',
    },
    base: './',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true, // 支持内联 JavaScript
                modifyVars: {},
            },
        },
    },
});

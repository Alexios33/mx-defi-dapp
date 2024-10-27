import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      config: path.resolve(__dirname, './src/config'),
      contracts: path.resolve(__dirname, './src/contracts'),
      localConstants: path.resolve(__dirname, './src/localConstants'),
      pages: path.resolve(__dirname, './src/pages'),
      routes: path.resolve(__dirname, './src/routes'),
      wrappers: path.resolve(__dirname, './src/wrappers'),
      types: path.resolve(__dirname, './src/types'),
      hooks: path.resolve(__dirname, './src/hooks'),
      'hooks/sdkDappHooks': path.resolve(__dirname, './src/hooks/sdkDappHooks'),
      utils: path.resolve(__dirname, './src/utils'),
      'utils/getCallbackRoute': path.resolve(__dirname, './src/utils/getCallbackRoute'),
      'utils/sdkDappUtils': path.resolve(__dirname, './src/utils/sdkDappUtils'),
      'utils/sdkDappCore': path.resolve(__dirname, './src/utils/sdkDappCore'),
      'utils/smartContract': path.resolve(__dirname, './src/utils/smartContract'),
      assets: path.resolve(__dirname, './src/assets'),
      helpers: path.resolve(__dirname, './src/helpers'),
      'helpers/sdkDappHelpers': path.resolve(__dirname, './src/helpers/sdkDappHelpers'),
      services: path.resolve(__dirname, './src/services'),
      'services/sdkDappServices': path.resolve(__dirname, './src/services/sdkDappServices')
    }
  },
  plugins: [
      react(),
      svgr(),
      basicSsl()
    ],
    server: {
      port: 3000,
      strictPort: true,
      host: '0.0.0.0',
      https: true,
      watch: {
        usePolling: true
      },
      hmr: {
        clientPort: 443,
        host: '0.0.0.0',
        protocol: 'ws',
        timeout: 120000
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      }
    },
    define: {
      'process.env': process.env
    }
  });
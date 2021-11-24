import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'
import viteCompression from 'vite-plugin-compression'
// import Components from 'unplugin-vue-components/vite'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
      viteSvgIcons({
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      // Components({ /* options */ }),
      viteCompression(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    base: loadEnv(mode, process.cwd()).VITE_PUBLIC_PATH,
    server: {
      port: 8080,
      open: true,
      cors: true,
    },
  })
}

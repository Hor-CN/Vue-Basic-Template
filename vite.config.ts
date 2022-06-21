import { UserConfig, ConfigEnv } from 'vite'
import { createVitePlugins } from './config/vite/plugins'
import path from 'path'
function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir)
}
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  console.log(command, mode)
  return {
    plugins: createVitePlugins(isBuild),
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
  }
}

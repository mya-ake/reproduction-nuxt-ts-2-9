import { Configuration } from '@nuxt/types';

const config: Configuration = {
  srcDir: 'app',
  plugins: [{
    src: '@/plugins/log'
  }],
  buildModule: ['@nuxt/typescript-build'],
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
}

export default config;

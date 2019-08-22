import { Configuration } from '@nuxt/types';

const config: Configuration = {
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

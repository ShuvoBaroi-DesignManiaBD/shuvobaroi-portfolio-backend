import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
      // build: {
      //   rollupOptions: {
      //     maxParallelFileOps: 8,
      //     output: {
      //       manualChunks: undefined
      //     }
      //   }
      // }
    },
  });
};

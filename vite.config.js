import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      root: 'src',
      build: {
        minify: true,
        rollupOptions: {
          output: {
            dir: './dist',
          },
        },
      },
    };
  }
  return {};
});

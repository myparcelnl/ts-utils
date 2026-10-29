import {defineConfig} from 'vitest/config';

const config = defineConfig({
  test: {
    coverage: {
      enabled: false,
      include: ['src/**/*.ts'],
      exclude: ['src/__tests__/**'],
      thresholds: {
        '100': true,
      },
      reporter: ['text', 'lcov'],
    },
  },
});

export default config;

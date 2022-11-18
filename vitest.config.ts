import {UserConfigExport} from 'vitest/config';

const config: UserConfigExport = {
  test: {
    coverage: {
      100: true,
      enabled: false,
      exclude: ['**/types/**', '**/__tests__/**'],
      reporter: ['text', 'clover'],
    },
  },
};

export default config;

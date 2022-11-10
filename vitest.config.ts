import {UserConfigExport} from 'vitest/config';

const config: UserConfigExport = {
  test: {
    coverage: {
      100: true,
      enabled: true,
      exclude: ['**/types/**'],
      reporter: ['text', 'clover'],
    },
  },
};

export default config;

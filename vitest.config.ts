import {type UserConfigExport} from 'vitest/config';

const config: UserConfigExport = {
  test: {
    coverage: {
      enabled: false,
      thresholds: {
        '100': true,
      },
      reporter: ['text', 'clover'],
    },
  },
};

export default config;

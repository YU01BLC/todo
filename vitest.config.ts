import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{tsx,js,ts}'],
      all: true,
      reporter: ['html', 'clover', 'text', 'lcov'],
      reportsDirectory: 'coverage', // Ensure this directory exists
    },
    reporters: ['verbose', ['vitest-sonar-reporter', { outputFile: 'test-report.xml' }]],
  },
});

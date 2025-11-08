import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'axe-scan',
      use: {
        baseURL: 'http://localhost:3000'
      },
      testDir: './tests/a11y'
    }
  ],
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI
  }
});

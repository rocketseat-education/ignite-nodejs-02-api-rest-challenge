import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    reporters: 'verbose',

    // This fix the conflict between tests switches and the single database
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
  },
})

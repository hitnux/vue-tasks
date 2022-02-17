module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`
  ],
  mode: 'jit',
  theme: {
    extend: {
      width: {
        '8' : '8px',
        '32' : '32px'
      },
      height: {
        '8' : '8px',
        '32' : '32px'
      },
      rotate: {
        '270' : '270deg'
      }
    },
    maxWidth: {
      '75': '75%',
    },
    minHeight: {
      '87vh': '87vh',
    }
  },
  plugins: [],
}

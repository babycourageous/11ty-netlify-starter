const twForms = require('@tailwindcss/custom-forms')
const owl = require('tailwindcss-owl')

module.exports = {
  theme: {
    fontFamily: {
      sans: 'Montserrat, sans-serif',
    },
    extend: {},
  },
  variants: {},
  plugins: [twForms, owl],
}

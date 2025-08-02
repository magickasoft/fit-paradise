export default {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-prettier/recommended',
  ],
  customSyntax: 'postcss-styled-syntax',
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'value-keyword-case': null,
    'function-no-unknown': null,
    'declaration-empty-line-before': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'no-descending-specificity': null,
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'function-linear-gradient-no-nonstandard-direction': true,
  },
}

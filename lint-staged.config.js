export default {
  '*.{ts,tsx,css,json}': ['prettier --write'],
  '*.{ts,tsx,json}': ['eslint --fix'],
  '*.css': ['stylelint --fix'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};

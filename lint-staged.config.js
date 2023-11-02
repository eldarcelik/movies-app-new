module.exports = {
  "*.{ts,tsx,css,json}": [
    "prettier --write"
  ],
  "*.{ts,tsx,json}": [
    "eslint --fix"
  ],
  "*.css": [
    "stylelint --fix"
  ]
}

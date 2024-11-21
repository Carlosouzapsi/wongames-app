module.exports = {
  //lint & prettify TS and JS files
  '*{js, jsx, ts, tsx}': (filenames) => [
    `prettier --write ${filenames.join(' --file')}`,
    `npm run lint --fix . ${filenames.join(' ')}`
  ]
}

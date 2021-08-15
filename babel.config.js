module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: 'css'      //true——> css 解决 Error evaluating function `unit`: the first argument to unit must be a number
      }
    ]
  ]
}
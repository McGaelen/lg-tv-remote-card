import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/lg-tv-remote-card.js',
    format: 'umd',
    name: 'lg-tv-remote'
  },
  plugins: [
      nodeResolve()
  ]
}
export default {
  experimentalCodeSplitting: true,
  optimizeChunks: true,
  input: ['main1.js', 'main2.js', 'main3.js'],
  output: { dir: 'dist', format: 'amd' }
}

/**
 * [html 多入口配置]
 */
exports.ENTRIES = {
  webpack: './src/task1/index.js',
  tree: './src/task2/index.js',
  observer: './src/task3/index.js'
}

exports.TEMPLATES = [{
  template: './src/template.html',
  filename: 'task1.html',
  chunks: ['webpack']
},{
  template: './src/template.html',
  filename: 'task2.html',
  chunks: ['tree']
},{
  template: './src/template.html',
  filename: 'task3.html',
  chunks: ['observer']
}]
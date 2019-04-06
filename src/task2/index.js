import '../common.css'
import CreateElement from '../utils/createElement'
import tree from './tree.js'

const json = [
      { "name": "实战训练营", key: 1},
      { "name": "MVVM设计", pid:1, key:2 },
      { "name": "webpack配置", pid:1, key: 3},
      { "name": "递归调用", pid: 1, key: 4},
      { "name": "设计模式实战", pid: 1, key: 5},
      { "name": "订阅发布", pid: 4, key: 6},
      { "name": "原生JS开发", pid: 6, key: 7},
      { "name": "新增测试", key: 10},
    ]

function generateJsonTree() {
  const jsonString = json.reduce(function(acc, curr) {
    acc += '    ' + JSON.stringify(curr) + '\n'
    return acc
  }, '')
  const resource = `
  const json = [\n${jsonString}  ]
  `

  const div = new CreateElement('div')
  const button = new CreateElement('button')
  const p = new CreateElement('p')
  const pre = new CreateElement('pre')

  button.create().insertHTML('打开 console 并点击')
  p.create().append(pre.create().insertHTML(resource).build())
  div.create().append(p.build()).append(button.build())

  button.build().onclick = e => {
    console.log(tree(json))
  }

  return div.build()
}

document.body.appendChild(generateJsonTree())
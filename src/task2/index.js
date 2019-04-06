import '../common.css';
import CreateElement from '../utils/createElement';

function jsonRecursive() {
  const resource = `
    var json = [
        { name: "实战训练营", key: 1},
        { name: "MVVM设计", pid:1, key:2 },
        { name: "webpack配置", pid:1, key: 3},
        { name: "递归调用", pid: 1, key: 4},
        { name: "设计模式实战", pid: 1, key: 5},
        { name: "订阅发布", pid: 4, key: 6},
        { name: "原生JS开发", pid: 6, key: 7},
      ]
  `

  let div = new CreateElement('div');
  let button = new CreateElement('button');
  let p = new CreateElement('p');
  let pre = new CreateElement('pre');

  button.create().insertHTML('生成树形目录，请看 console');
  p.create().append(pre.create().insertHTML(resource).build());
  div.create().append(p.build()).append(button.build());
  return div.build();
}

document.body.appendChild(jsonRecursive());
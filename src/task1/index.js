import './style.css'
import ICON from './panda.png'
import CreateElement from '../utils/createElement'

let clickCount = 0
function component() {
  let div = new CreateElement('div')
  let button = new CreateElement('button')

  let icon = new Image()
  icon.src = ICON

  button.create().insertHTML('打开 console 并点击我')
  div.create().insertHTML('hello webpack').addClass('hello').append(button.build()).append(icon)

  button.build().onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default
    print(clickCount)
    clickCount++
  })

  return div.build()
}

document.body.appendChild(component())
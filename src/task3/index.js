import '../common.css'
import CreateElement from '../utils/createElement'
import Observer from './observer'
import {isObject, isString, has} from '../utils/_';

// 约会（消息）发布器
class DateClient extends Observer {
  constructor(users) {
    super()
    this.users = {}
    this.user = {}
  }

  register(user) {
    if (!isObject(user) || !isString(user.name) || !isString(user.password)) {
      console.error('register failed')
      return false
    }
    this.users[user.name] = user
  }

  login(username, password) {
    const user = this.users[username]
    if (!user) {
      console.error('user does not exist')
      return false
    }
    if (user.password !== password) {
      console.error('incorrect password')
      return false
    }
    console.info(`${username} login success`)
    this.user = {username, password}
  }

  // 载入用户列表
  load(users) {
    try {
      for (let i = 0; i < users.length; i ++) {
        console.info(`载入 ${users[i].name} 完毕`)
        this.update(users[i].name, users[i].handle)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 读取约会列表
  list() {
    return this.handlers
  }

  // 发布订阅
  update(name, handle) {
    this.on(name, handle)
  }

  // 向目标用户发出邀请
  invite(user, invitation) {
    console.info(`向 ${user} 发出了邀请`)
    this.emit(user, invitation)
  }
} 

const userlist = [{
  name: 'Mary',
  handle: function(evt) {
    console.info("得到了"+evt.name+"的" + evt.date + "的邀请！")
    console.info("在" + evt.year + "年" + evt.month + "月" + evt.date + "日，在" + evt.where + evt.todo)
  }
},{
  name: 'Lily',
  handle: function(params) {
    console.info(params)
  }
}]

const Tom = {
  name:"Tom",
  password: '123456',
  date:"约会",
  year:"2019",
  month:"2",
  where:"老门框卤煮店",
  todo:"共进晚餐"
}

const dateClient = new DateClient()
// 注册
dateClient.register(Tom)
// 登陆
dateClient.login(Tom.name, Tom.password)
// 载入用户列表
dateClient.load(userlist)
// 读取约会列表
const datable = dateClient.list()
// 约会 Mary
dateClient.invite('Mary', {
  name:"男朋友",
  date:"约会",
  year:"2019",
  month:"2",
  where:"老门框卤煮店",
  todo:"共进晚餐"
})

const describe = `
  通过发布订阅模式实现 Boy 对 Girl 的邀请。
`

function generateStory() {
  const div = new CreateElement('div').create()
  const p = new CreateElement('p').create()
  const pre = new CreateElement('pre').create()

  p.append(pre.insertHTML(describe).build())
  div.append(p.build())

  return div.build()
}

document.body.appendChild(generateStory())


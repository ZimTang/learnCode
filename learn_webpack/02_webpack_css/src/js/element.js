import '../css/style.css'
import '../css/title.less'

const divEl = document.createElement('div')

divEl.className = 'title'
divEl.innerHTML = 'hello webpack'

document.body.appendChild(divEl)

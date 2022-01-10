import '../css/style.css'
import '../css/title.less'
import '../css/image.css'
import bgImg from '../img/avatar.png'

const divEl = document.createElement('div')

divEl.className = 'title'
divEl.innerHTML = 'hello webpack'

const bgDivEl = document.createElement('img')
bgDivEl.src = bgImg

const imgDivEl = document.createElement('div')
imgDivEl.className = 'image-bg'

document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgDivEl)

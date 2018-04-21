function writeCode(prevCode, code, fn) {
  let codeArea = document.querySelector('#code')
  codeArea.innerHTML = prevCode || ''
  let n = 0
  let timer = setInterval(() => {
    n += 1
    codeArea.innerHTML = Prism.highlight( (prevCode + code.substring(0, n)) , Prism.languages.css, 'css')
    styleTag.innerHTML = prevCode + code.substring(0, n)
    codeArea.scrollTop = codeArea.scrollHeight
    if (n >= code.length) {
      clearInterval(timer)
      fn && fn.call()
    }
  },50)
}
function createPaper(fn) {
  let paper = document.createElement('div')
  paper.id = 'paper'
  let markdownArea = document.createElement('pre')
  markdownArea.className = 'markdown'
  paper.appendChild(markdownArea)
  document.body.appendChild(paper)
  fn && fn.call()
}
function writeMarkdown(markdown, fn) {
  let markdownArea = document.querySelector('.markdown')
  let n = 0
  let timer = setInterval(() => {
    n += 1
    markdownArea.innerHTML = markdown.substring(0, n)
    markdownArea.scrollTop = markdownArea.scrollHeight
    if (n >= markdown.length) {
      clearInterval(timer)
      fn && fn.call()
    }
  },50)
}
function markdownToHtml(fn){
  var div = document.createElement('div')  
  div.className = 'markdown markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('.markdown')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}

let css1 = `/*
* 面试官你好，我是施翔
* 我将以动画的形式来介绍我自己
* 只用文字介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/

/* 给页面加上一些好看的效果 */
html{
  background: rgb(0,43,54);
  color: rgb(222,222,222);
}

/* 给所有元素加上过度效果 */
*{
  transition: all 0.5s;
}

/* 给文字加一些样式吧 */
#code-wrapper{
  height: 100vh;
  padding: 16px;
  display: flex;
}
#code{
  font-size: 14px;
  border: 1px solid #aaa;
  padding: 16px;
  width: 100%;
  height: 100%;
  overflow: auto;
}

/* 现在需要给代码高亮一下 */
.token.selector{
  color: #690;
}
.token.property{
  color: rgb(187,137,0);
}
.token.punctuation{
  color: yellow;
}
.token.function{
  color: rgb(42,161,152);
}

/* 加一些3D效果 */
html{
  perspective: 1000px;
}
#code-wrapper{
  position: fixed;
  top: 0;
  left: 16px;
  width: 50%;
  transform: rotateY(10deg) translateZ(-100px);
}

/* 现在我需要一张白纸 */
#paper{
  position: fixed;
  right: 0;
  height: 100vh;
  width: 50%;
  padding: 16px;
  display: flex;
  background: grey;
}
`

let css2 = `
.markdown{
  width: 100%;
  height: 100%;
  background: white;
  color: black;
  padding: 16px;
}

/* 给简历页面也加一下3D效果 */
#paper{
  transform: rotateY(-10deg) translateZ(-100px);
}

/* 好了，现在开始写简历了，请看右边 */
`

let css3 = `
/* 我需要把markdown语法转变为html格式页面 */
`

let css4 = `
/* 好了，这就是我的会动的简历，感谢看完 */
`
let md = `
## 自我介绍
渴望成为一个合格的码农，2017年年中开始学习前端开发，
熟悉HTML, CSS, JavaScript和Web开发的基础知识，
掌握Git代码管理工具，熟练掌握Vue和React两个框架的使用。

## 联系方式
- 手机：177xxxxxxxx
- 邮箱：xxxxx@xxx.com
- QQ：xxxxxxxx

## 技能
HTML、CSS、JavaScript、Vue、React、Git、Node

## 项目经历
1. [画板](https://github.com/MccSx/sketchpad-canvas)
2. [键盘导航](https://github.com/MccSx/nav-demo)
3. [苹果风格轮播](https://github.com/MccSx/apple-round-sowing)

## 链接
[我的GitHub](https://github.com/MccSx)  
[我的博客](https://mccsx.github.io/)
`

writeCode('', css1, () => {
  createPaper(() => {
    writeCode(css1, css2, () => {
      writeMarkdown(md, () => {
        writeCode(css1+css2, css3, () => {
          markdownToHtml(() => {
            writeCode(css1+css2+css3, css4)
          })
        })
      })
    })
  })
})
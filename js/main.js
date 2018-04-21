function writeCode(prevCode, code, fn) {
    let codeArea = document.querySelector('#code')
    codeArea.innerHTML = prevCode || ''
    let n = 0
    let timer = setInterval(() => {
        n += 1
        codeArea.innerHTML = Prism.highlight( (prevCode + code.substring(0, n)) , Prism.languages.css, 'css')
        styleTag.innerHTML = prevCode + code.substring(0, n)
        codeArea.scrollTop = 10000
        if (n >= code.length) {
            clearInterval(timer)
            fn()
        }
    },10)
}
function createPaper(fn) {
    let paper = document.createElement('div')
    paper.id = 'paper'
    let markdownArea = document.createElement('pre')
    markdownArea.className = 'markdown'
    paper.appendChild(markdownArea)
    document.body.appendChild(paper)
    fn()
}

let css1 = `/*
* 面试官你好，我是施翔
* 我将以动画的形式来介绍我自己
* 只用文字介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/

*{
    transition: all 1s;
}
html{
    background: #eee;
    font-size: 16px;
}
#code{
    border: 1px solid #aaa;
    padding: 16px;
}

/* 现在需要给代码高亮一下 */
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}

/* 加一个呼吸的效果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* 现在我需要一张白纸 */
#code-wrapper{
    position: fixed;
    left: 0;
    width: 50%;
}
#paper{
    position: fixed;
    right: 0;
    height: 100vh;
    width: 50%;
    padding: 10px;
    display: flex;
}
`

let css2 = `
.markdown{
    width: 100%;
    height: 100%;
    background: white;
}
`

writeCode('', css1, () => {
    createPaper(() => {
        writeCode(css1, css2, () => {
            console.log('css2完成')
        })
    })
})
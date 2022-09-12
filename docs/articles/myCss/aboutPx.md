## 20220912

今天记点前端尺寸相关的东西

干到现在最常用的尺寸：

常用： rem（也不见得多好用） ，px， vh ， vw，

不常用：em，pt（谁还用这啊 ，不记了），**vmin**，**vmax**（新学的好东西，很适合移动端适配）



***px***：像素( Pixel )，相对长度单位，像素px是针对于显示器屏幕分辨率而言的。



***em***：相对长度单位，相对于当前对象内文本的字体尺寸。如果当前对象行内文本的尺寸未设置，则相对浏览器的默认字体尺寸。

特点：

	1. em会继续父级元素的字体大小 
 	2. 计算公式：1 ÷ 父元素的字体大小 × 需要转换的像素值 = em值

```js
// 10px = 1em = 1 / 16px * 10px = 62.5%，申明 font-size = 62.5% 即可
```



***rem***：root em，css3新增相对单位，只相对于HTML根元素，可以只通过修改根元素从而调整整个项目字体的大小，当然还包括所有以rem为单位的元素大小。

特点：

1. 只相对于根元素（html）
2. 通过修改根元素可成比例的调整页面字体大小
3. 其适配方案通过js脚本设置像素点来实现

我的配置：

```js
// rem等比适配配置文件
// 基准大小
const baseSize = 14
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
  const scale = window.screen.availWidth / 1920
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  const fontsize = baseSize * Math.min(scale, 4)
  document.documentElement.style.fontSize =
    (fontsize >= 12 ? fontsize : 12) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem()
}

// 在main.js中引入
import '@utils/init/rem'
```

​			

***vh、vw、vmin、vmax***：css3新引入的衡量单位

- vw:1vw 等于视口宽度的1%
- Vh:1vh 等于视口高度的1%
- vmin: 选取 vw 和 vh 中最小的那个,即在手机竖屏时，1vmin=1vw
- vmax:选取 vw 和 vh 中最大的那个 ,即在手机竖屏时，1vmax=1vh

注：IE9这个弟弟用vm代替vmin且不支持vmax！

由于使用vw、vh依赖于视图窗口，故当屏幕分辨率变大或者缩小，尺寸会进行相应的放大或者缩小，当页面足够大，或者足够小时，尺寸会变得很大或者很小，从而导致用户体验差，不过只要不是智能手表打开应用问题都不大（手动狗头）

知乎上看到的rem与vh、vw的转换

```js
// 可通过rem，对根元素设置最大最小值，配合body加上最大宽度和最小宽度
// rem 单位换算：定为 75px 只是方便运算，750px-75px、640-64px、1080px-108px，如此类推
$vw_fontsize: 75; // iPhone 6尺寸的根元素大小基准值
@function rem($px) {
     @return ($px / $vw_fontsize ) * 1rem;
}

// 根元素大小使用 vw 单位
$vw_design: 750;
html {
    font-size: ($vw_fontsize / ($vw_design / 2)) * 100vw; 
    // 同时，通过Media Queries 限制根元素最大最小值
    @media screen and (max-width: 320px) {
        font-size: 64px;
    }
    @media screen and (min-width: 540px) {
        font-size: 108px;
    }
}

// body 也增加最大最小宽度限制，避免默认100%宽度的 block 元素跟随 body 而过大过小
body {
    max-width: 540px;
    min-width: 320px;
}
```

根据基本单位引出的设配问题以后再记吧，还有，别再用flexiblejs了！




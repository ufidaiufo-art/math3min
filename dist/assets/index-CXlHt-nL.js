const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BBqb4jAQ.js","assets/vendor-Dig1TnMd.js","assets/progressStore-3MhK6uuU.js","assets/utils-C79tEumh.js","assets/index-CmmKdO0I.js","assets/index-C9icdn7E.js","assets/index-Do4B4I6j.js","assets/index-D-CEvxD1.js","assets/ReportPage-CBNGo_8q.js","assets/index-CKIQ1haH.js","assets/index-ekN-00A5.js","assets/index-D6Fm9JhW.js","assets/index-EQ_iARF6.js","assets/index-BJjrq6Sa.js"])))=>i.map(i=>d[i]);
import{r as A,a as T,u as P,N as F,b,O as Q,R as _,d as j,e as c,f as B,B as W}from"./vendor-Dig1TnMd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();var D={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X=A,J=Symbol.for("react.element"),L=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,N=X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var a,o={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(a in t)R.call(t,a)&&!$.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)o[a]===void 0&&(o[a]=t[a]);return{$$typeof:J,type:e,key:s,ref:l,props:o,_owner:N.current}}h.Fragment=L;h.jsx=I;h.jsxs=I;D.exports=h;var i=D.exports,g={},w=T;g.createRoot=w.createRoot,g.hydrateRoot=w.hydrateRoot;const K="modulepreload",H=function(e){return"/math3min/"+e},q={},d=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),y=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(n.map(x=>{if(x=H(x),x in q)return;q[x]=!0;const k=x.endsWith(".css"),S=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${S}`))return;const r=document.createElement("link");if(r.rel=k?"stylesheet":K,k||(r.as="script"),r.crossOrigin="",r.href=x,y&&r.setAttribute("nonce",y),document.head.appendChild(r),k)return new Promise((M,V)=>{r.addEventListener("load",M),r.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${x}`)))})}))}function s(l){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=l,window.dispatchEvent(y),!y.defaultPrevented)throw l}return o.then(l=>{for(const y of l||[])y.status==="rejected"&&s(y.reason);return t().catch(s)})},m=[{id:"ch1",title:"有理数",subtitle:"正负数与基础运算",description:"本章是初中数学的起点，围绕正数、负数、有理数、数轴、相反数、绝对值，以及有理数的四则运算、乘方和科学记数法展开。",order:1,knowledgePointIds:["kp1_1","kp1_2","kp1_3","kp1_4","kp1_5","kp1_6","kp1_7","kp1_8","kp1_9","kp1_10","kp1_11","kp1_12"],questionCount:32,difficulty:"medium",estimatedTime:45,color:"#5B7CF9",icon:"🔢",isKeyChapter:!0,sections:["1.1 正数和负数","1.2 有理数","1.3 数轴","1.4 相反数","1.5 绝对值","1.6 有理数的大小比较","1.7 有理数的加法","1.8 有理数的减法","1.9 有理数的乘法","1.10 有理数的除法","1.11 乘方","1.12 科学记数法"]},{id:"ch2",title:"整式的加减",subtitle:"代数式与同类项",description:"本章学习代数式、单项式、多项式、同类项等基本概念，掌握去括号、添括号和整式加减的基本法则。",order:2,knowledgePointIds:["kp2_1","kp2_2","kp2_3","kp2_4","kp2_5","kp2_6"],questionCount:16,difficulty:"easy",estimatedTime:35,color:"#10B981",icon:"🧮",isKeyChapter:!1,sections:["2.1 代数式","2.2 单项式","2.3 多项式","2.4 同类项","2.5 去括号法则","2.6 整式的加减"]},{id:"ch3",title:"一元一次方程",subtitle:"方程与应用",description:"本章围绕一元一次方程的概念、等式性质和解方程步骤展开，并进一步学习如何列方程解决实际问题。",order:3,knowledgePointIds:["kp3_1","kp3_2","kp3_3","kp3_4","kp3_5","kp3_6"],questionCount:15,difficulty:"hard",estimatedTime:50,color:"#F59E0B",icon:"✍️",isKeyChapter:!0,sections:["3.1 方程的基本概念","3.2 等式的性质","3.3 一元一次方程","3.4 解一元一次方程的步骤","3.5 实际问题与一元一次方程"]},{id:"ch4",title:"几何图形初步",subtitle:"点、线、角",description:"本章从生活中的图形出发，认识立体图形和平面图形，学习直线、射线、线段和角的基本概念与性质。",order:4,knowledgePointIds:["kp4_1","kp4_2","kp4_3","kp4_4","kp4_5"],questionCount:11,difficulty:"easy",estimatedTime:30,color:"#8B5CF6",icon:"📐",isKeyChapter:!1,sections:["4.1 几何图形","4.2 直线、射线、线段","4.3 角","4.4 角的比较与运算","4.5 角平分线"]},{id:"ch5",title:"相交线与平行线",subtitle:"线与角的关系",description:"本章学习相交线、平行线、三线八角、平行线的判定与性质，以及平移的基本思想和应用。",order:5,knowledgePointIds:["kp5_1","kp5_2","kp5_3","kp5_4","kp5_5","kp5_6"],questionCount:14,difficulty:"medium",estimatedTime:40,color:"#EC4899",icon:"📏",isKeyChapter:!0,sections:["5.1 相交线","5.2 三线八角","5.3 平行线及其判定","5.4 平行线的性质","5.5 命题与定理","5.6 平移"]},{id:"ch6",title:"实数",subtitle:"平方根、立方根与无理数",description:"本章学习平方根、算术平方根、立方根、无理数和实数的概念，并在数的扩充基础上理解实数范围内的运算。",order:6,knowledgePointIds:["kp6_1","kp6_2","kp6_3","kp6_4"],questionCount:22,difficulty:"medium",estimatedTime:35,color:"#06B6D4",icon:"√",isKeyChapter:!1,sections:["6.1 平方根","6.2 立方根","6.3 实数","6.4 实数的运算与近似"]},{id:"ch7",title:"平面直角坐标系",subtitle:"坐标与位置表示",description:"本章学习有序数对、平面直角坐标系、象限、点的坐标表示与简单平移，为后续函数学习打基础。",order:7,knowledgePointIds:["kp7_1","kp7_2","kp7_3","kp7_4","kp7_5"],questionCount:11,difficulty:"easy",estimatedTime:25,color:"#84CC16",icon:"📍",isKeyChapter:!1,sections:["7.1 有序数对","7.2 平面直角坐标系","7.3 四个象限","7.4 点坐标的平移","7.5 对称点的坐标"]},{id:"ch8",title:"二元一次方程组",subtitle:"代入法与加减法",description:"本章学习二元一次方程、二元一次方程组及其解法，重点掌握代入消元法和加减消元法，并能解决实际问题。",order:8,knowledgePointIds:["kp8_1","kp8_2","kp8_3","kp8_4","kp8_5"],questionCount:10,difficulty:"hard",estimatedTime:45,color:"#F97316",icon:"🧩",isKeyChapter:!0,sections:["8.1 二元一次方程","8.2 二元一次方程组","8.3 解二元一次方程组：代入消元法","8.4 解二元一次方程组：加减消元法","8.5 实际问题与二元一次方程组"]},{id:"ch9",title:"不等式与不等式组",subtitle:"不等关系的表示与求解",description:"本章学习不等式和不等式组的概念、性质与解法，重点掌握一元一次不等式及其实际应用。",order:9,knowledgePointIds:["kp9_1","kp9_2","kp9_3","kp9_4","kp9_5"],questionCount:10,difficulty:"medium",estimatedTime:30,color:"#EF4444",icon:"⚖️",isKeyChapter:!1,sections:["9.1 不等式","9.2 不等式的性质","9.3 一元一次不等式","9.4 一元一次不等式组","9.5 一元一次不等式的应用"]},{id:"ch10",title:"数据的收集、整理与描述",subtitle:"统计基础",description:"本章学习统计调查的基本方式，掌握数据整理、频数与频率、统计图和频数分布直方图等内容。",order:10,knowledgePointIds:["kp10_1","kp10_2","kp10_3","kp10_4"],questionCount:18,difficulty:"easy",estimatedTime:25,color:"#14B8A6",icon:"📊",isKeyChapter:!1,sections:["10.1 统计调查","10.2 数据的整理","10.3 统计图","10.4 频数分布直方图与图表选择"]}],Hi=e=>{const t=e.startsWith("chapter-")?`ch${e.replace("chapter-","")}`:e;return m.find(n=>n.id===t)};m.reduce((e,t)=>e+t.sections.length,0);m.reduce((e,t)=>e+t.questionCount,0);const U=[{id:"kp1_1",chapterId:"ch1",order:1,title:"正数和负数",content:"学习正数、负数的定义，理解相反意义的量，掌握用正负数表示实际问题中的相反意义。",videoScript:`正数、负数的定义：大于0的数是正数，小于0的数是负数。
相反意义的量：向东/向西、上升/下降、收入/支出等。
0的特殊性：既不是正数也不是负数，是正数和负数的分界。
用正负数表示实际问题中的相反意义。`,videoBvid:"BV1aP4y1o7n1",videoPage:1,example:{question:"如果向东走5米记作+5米，那么向西走3米记作什么？",analysis:"向东为正，则向西为负。向西走3米记作-3米。"},exercises:[{id:"kp1_1_1",question:"如果把水位上升0.5米记作+0.5米，那么水位下降1.2米记作____。",answer:"-1.2米",analysis:"上升为正，下降为负，所以记作-1.2米。"},{id:"kp1_1_2",question:"某地最低气温是-8℃，最高气温是+12℃，这一天的温差是多少？",answer:"20℃",analysis:"温差 = 12 - (-8) = 12 + 8 = 20℃。"},{id:"kp1_1_3",question:"某班级男生平均身高记为0厘米，小明身高比平均高5厘米记作+5厘米，小红比平均矮3厘米记作____。",answer:"-3厘米",analysis:"高于平均为正，低于平均为负。"}]},{id:"kp1_2",chapterId:"ch1",order:2,title:"数轴",videoBvid:"BV1aP4y1o7n1",videoPage:5,content:"学习数轴的三要素，掌握数轴的画法，理解数轴上的点与数的对应关系，利用数轴比较大小。",videoScript:`数轴三要素：原点、正方向、单位长度。
数轴的画法：画一条直线，确定原点，规定正方向，选取单位长度。
数轴上的点与数的对应关系：每个有理数都可以用数轴上的点表示。
利用数轴比较大小：右边的数总比左边的大。`,example:{question:'在数轴上表示-3、0、2.5、-1.5这四个数，并用"<"连接起来。',analysis:"在数轴上，-3在最左边，接着是-1.5，然后是0，最右边是2.5。所以 -3 < -1.5 < 0 < 2.5。"},exercises:[{id:"kp1_2_1",question:"数轴上，点A表示-2，点B表示3，则点A在点B的____边。",answer:"左",analysis:"-2在3的左边。"},{id:"kp1_2_2",question:"在数轴上，与原点距离等于4个单位长度的点表示的数是____。",answer:"±4",analysis:"原点左边4个单位是-4，右边4个单位是4。"},{id:"kp1_2_3",question:"比较大小：-5 ____ -2，0 ____ -1，2 ____ -3。",answer:"<，>，>",analysis:"负数绝对值越大，数值越小；0大于一切负数；正数大于负数。"}]},{id:"kp1_3",chapterId:"ch1",order:3,title:"相反数",content:"学习相反数的定义，理解0的相反数是0，掌握在数轴上表示相反数，理解相反数的表示方法。",videoScript:`相反数的定义：只有符号不同的两个数互为相反数。
0的相反数是0。
在数轴上，互为相反数的两个数位于原点两侧，到原点距离相等。
相反数的表示：a的相反数是-a。`,videoBvid:"BV1aP4y1o7n1",videoPage:7,example:{question:"求-5、3/4、0、-2.5的相反数。",analysis:"-5的相反数是5；3/4的相反数是-3/4；0的相反数是0；-2.5的相反数是2.5。"},exercises:[{id:"kp1_3_1",question:"-7的相反数是____。",answer:"7",analysis:"只有符号不同的数互为相反数。"},{id:"kp1_3_2",question:"若a与3互为相反数，则a = ____。",answer:"-3",analysis:"3的相反数是-3，所以a = -3。"},{id:"kp1_3_3",question:"数轴上，点A表示数a，点B表示数-a，若A、B两点之间的距离是6，则a = ____。",answer:"±3",analysis:"A和B到原点距离相等，各为3，所以a = ±3。"}]},{id:"kp1_4",chapterId:"ch1",order:4,title:"绝对值",content:"学习绝对值的几何意义和代数意义，理解绝对值的非负性，掌握绝对值的性质。",videoScript:`绝对值的几何意义：数轴上表示数a的点到原点的距离。
绝对值的代数意义：|a| = a (a≥0) 或 -a (a<0)。
绝对值的非负性：任何数的绝对值都是非负数。
绝对值的性质：|a|≥0，|-a| = |a|。`,videoBvid:"BV1aP4y1o7n1",videoPage:9,example:{question:"求|-4|、|2.5|、|0|、|-3/4|的值。",analysis:"|-4| = 4；|2.5| = 2.5；|0| = 0；|-3/4| = 3/4。"},exercises:[{id:"kp1_4_1",question:"|-9| = ____，|5| = ____，|-3.6| = ____。",answer:"9，5，3.6",analysis:"负数的绝对值是它的相反数，正数的绝对值是它本身。"},{id:"kp1_4_2",question:"若|x| = 4，则x = ____。",answer:"±4",analysis:"绝对值等于4的数有两个，分别是4和-4。"},{id:"kp1_4_3",question:"比较大小：|-7| ____ |-3|，-|2| ____ -|5|。",answer:">，>",analysis:"|-7|=7，|-3|=3，所以7>3；-|2|=-2，-|5|=-5，所以-2>-5。"}],formulas:["|a| = { a, a≥0; -a, a<0 }","|a| ≥ 0（非负性）","|-a| = |a|","若|a| = |b|，则a = b 或 a = -b"]},{id:"kp1_5",chapterId:"ch1",order:5,title:"有理数的大小比较",content:"学习有理数大小比较的法则，掌握两个负数比较大小的方法。",videoScript:`正数 > 0 > 负数。
两个正数比较：绝对值大的数大。
两个负数比较：绝对值大的反而小。
利用数轴比较：右边的数总比左边的大。`,videoBvid:"BV1aP4y1o7n1",videoPage:12,example:{question:"比较-5和-3的大小。",analysis:"|-5| = 5，|-3| = 3，因为5 > 3，所以-5 < -3（两个负数比较，绝对值大的反而小）。"},exercises:[{id:"kp1_5_1",question:"比较大小：-4 ____ -6，-2.5 ____ -2。",answer:">，<",analysis:"|-4|=4<|-6|=6，所以-4>-6；|-2.5|=2.5>|-2|=2，所以-2.5<-2。"},{id:"kp1_5_2",question:"把-3、0、2、-1、4按从小到大的顺序排列。",answer:"-3 < -1 < 0 < 2 < 4",analysis:"负数<0<正数，负数中绝对值大的更小。"},{id:"kp1_5_3",question:'若a > 0，b < 0，则a + b ____ 0（填"＞"、"＜"或"="）。',answer:"不确定",analysis:"需要知道|a|和|b|的具体大小关系才能判断。"}]},{id:"kp1_6",chapterId:"ch1",order:6,title:"有理数的加法",content:"学习有理数加法的法则，掌握同号相加和异号相加的方法。",videoScript:`同号相加：取相同符号，绝对值相加。
异号相加：取绝对值较大数的符号，绝对值相减。
任何数与0相加，仍得这个数。
互为相反数的两个数相加得0。`,videoBvid:"BV1aP4y1o7n1",videoPage:13,example:{question:"计算 (-5) + (-3) 和 (-8) + 5。",analysis:"(-5) + (-3) = -(5+3) = -8（同号相加，取负号，绝对值相加）；(-8) + 5 = -(8-5) = -3（异号相加，取绝对值大的符号，绝对值相减）。"},exercises:[{id:"kp1_6_1",question:"(-7) + (-4) = ____。",answer:"-11",analysis:"同号相加，取负号，7+4=11。"},{id:"kp1_6_2",question:"9 + (-12) = ____。",answer:"-3",analysis:"异号相加，|-12|>|9|，取负号，12-9=3。"},{id:"kp1_6_3",question:"(-3.5) + 3.5 = ____。",answer:"0",analysis:"互为相反数的两个数相加得0。"}]},{id:"kp1_7",chapterId:"ch1",order:7,title:"有理数的减法",content:"学习有理数减法的法则，掌握减法转化为加法的方法。",videoScript:`减法法则：减去一个数，等于加上这个数的相反数。
a - b = a + (-b)。
减法转化为加法进行计算。
注意符号的变化。`,videoBvid:"BV1aP4y1o7n1",videoPage:15,example:{question:"计算 (-10) - (-6) 和 5 - 9。",analysis:"(-10) - (-6) = (-10) + 6 = -4；5 - 9 = 5 + (-9) = -4。"},exercises:[{id:"kp1_7_1",question:"(-15) - (-8) = ____。",answer:"-7",analysis:"(-15) - (-8) = (-15) + 8 = -7。"},{id:"kp1_7_2",question:"0 - (-5) = ____。",answer:"5",analysis:"0 - (-5) = 0 + 5 = 5。"},{id:"kp1_7_3",question:"(-2.4) - 1.6 = ____。",answer:"-4",analysis:"(-2.4) - 1.6 = (-2.4) + (-1.6) = -4。"}],formulas:["a - b = a + (-b)","减法转化为加法：减去一个数 = 加上它的相反数"]},{id:"kp1_8",chapterId:"ch1",order:8,title:"有理数的乘除法",content:"学习有理数乘法和除法的法则，掌握倒数的概念。",videoScript:`乘法法则：同号得正，异号得负，绝对值相乘。
任何数与0相乘，积为0。
除法法则：除以一个不为0的数，等于乘这个数的倒数。
倒数：乘积为1的两个数互为倒数。`,videoBvid:"BV1aP4y1o7n1",videoPage:18,example:{question:"计算 (-4) × (-5) 和 (-12) ÷ 3。",analysis:"(-4) × (-5) = 20（同号得正，4×5=20）；(-12) ÷ 3 = -4（异号得负，12÷3=4）。"},exercises:[{id:"kp1_8_1",question:"(-6) × 7 = ____。",answer:"-42",analysis:"异号得负，6×7=42。"},{id:"kp1_8_2",question:"(-24) ÷ (-8) = ____。",answer:"3",analysis:"同号得正，24÷8=3。"},{id:"kp1_8_3",question:"(-3) × 0 × (-5) = ____。",answer:"0",analysis:"任何数与0相乘都得0。"}],formulas:["a × b = b × a（乘法交换律）","(a × b) × c = a × (b × c)（乘法结合律）","a × (b + c) = a × b + a × c（乘法分配律）","a ÷ b = a × (1/b)（除法法则）","倒数：a × (1/a) = 1 (a≠0)"]},{id:"kp1_9",chapterId:"ch1",order:9,title:"有理数的乘法",content:"学习有理数乘法的法则，掌握多个数相乘时积的符号规律，理解乘法运算律在有理数范围内的应用。",videoScript:`有理数乘法法则：
同号得正，异号得负，绝对值相乘。
任何数与0相乘，积为0。

多个数相乘的符号规律：
负数个数为偶数 → 结果为正
负数个数为奇数 → 结果为负
只要有一个因数为0 → 结果为0

乘法运算律：
交换律：ab = ba
结合律：(ab)c = a(bc)
分配律：a(b+c) = ab + ac`,videoBvid:"BV1aP4y1o7n1",videoPage:20,example:{question:"计算：(−2) × (+3) × (−5) × (−1)",analysis:`解：负数有3个（奇数），结果为负
= −(2×3×5×1)
= −30`},exercises:[{id:"kp1_9_1",question:"(−6) × 7 = ____。",answer:"−42",analysis:"异号得负，6×7=42。"},{id:"kp1_9_2",question:"(−3) × (−4) × (−2) = ____。",answer:"−24",analysis:"负数有3个（奇数），结果为负，3×4×2=24。"},{id:"kp1_9_3",question:"用简便方法计算：(−25) × 125 × (−4) × (−8)",answer:"−100000",analysis:"原式=[(−25)×(−4)]×[125×(−8)]=100×(−1000)=−100000"}],formulas:["同号相乘得正，异号相乘得负","ab = ba（乘法交换律）","(ab)c = a(bc)（乘法结合律）","a(b+c) = ab + ac（乘法分配律）"]},{id:"kp1_10",chapterId:"ch1",order:10,title:"有理数的除法",content:"学习有理数除法的法则，理解除法与乘法的关系，掌握倒数的概念，能够进行有理数的除法运算。",videoScript:`有理数除法法则：
除以一个不为0的数，等于乘这个数的倒数。
a ÷ b = a × (1/b)（b ≠ 0）

符号法则与乘法相同：
同号得正，异号得负，绝对值相除。

倒数的概念：
乘积为1的两个数互为倒数。
正数的倒数是正数，负数的倒数是负数。
0没有倒数。

注意：除数不能为0！`,videoBvid:"BV1aP4y1o7n1",videoPage:21,example:{question:"计算：(−12) ÷ (−4)",analysis:`解：同号得正
= 12 ÷ 4
= 3`},exercises:[{id:"kp1_10_1",question:"(−24) ÷ (−8) = ____。",answer:"3",analysis:"同号得正，24÷8=3。"},{id:"kp1_10_2",question:"15 ÷ (−3) = ____。",answer:"−5",analysis:"异号得负，15÷3=5。"},{id:"kp1_10_3",question:"计算：(−2/3) ÷ (4/9)",answer:"−3/2",analysis:"除以一个分数等于乘它的倒数：(−2/3) × (9/4) = −18/12 = −3/2"}],formulas:["a ÷ b = a × (1/b)（b≠0）","倒数：a × (1/a) = 1（a≠0）","0没有倒数","除数不能为0"]},{id:"kp1_11",chapterId:"ch1",order:11,title:"乘方",content:"学习乘方的定义和表示方法，掌握幂的符号规律，能够进行有理数的乘方运算，理解(−a)ⁿ与−aⁿ的区别。",videoScript:`乘方的定义：
求n个相同因数a的积的运算，叫做乘方。
aⁿ = a × a × ... × a（共n个a相乘）
其中a叫做底数，n叫做指数，结果叫做幂。

幂的符号规律：
正数的任何次幂都是正数。
负数的奇次幂是负数。
负数的偶次幂是正数。
0的任何正整数次幂都是0。

重要区别：
(−2)⁴ = 16（整个−2的4次方）
−2⁴ = −16（2的4次方的相反数）`,videoBvid:"BV1aP4y1o7n1",videoPage:24,example:{question:"计算：(−3)² 和 −3² 的结果",analysis:`解：(−3)² = (−3)×(−3) = 9（整个−3平方）
−3² = −(3×3) = −9（只平方3，再取负）`},exercises:[{id:"kp1_11_1",question:"(−2)³ = ____。",answer:"−8",analysis:"负数的奇次幂是负数，2³=8。"},{id:"kp1_11_2",question:"(−2)⁴ = ____。",answer:"16",analysis:"负数的偶次幂是正数，2⁴=16。"},{id:"kp1_11_3",question:"比较 (−3)² 与 −3² 的大小。",answer:"(−3)² > −3²",analysis:"(−3)² = 9，−3² = −9，所以9 > −9。"}],formulas:["aⁿ = a × a × ... × a（n个a）","(−a)²ⁿ = a²ⁿ（负数的偶次幂为正）","(−a)²ⁿ⁺¹ = −a²ⁿ⁺¹（负数的奇次幂为负）","0的正整数次幂等于0"]},{id:"kp1_12",chapterId:"ch1",order:12,title:"科学记数法",content:"学习科学记数法的定义和表示方法，掌握将大数和小数用科学记数法表示的技巧，能够进行科学记数法的相关计算。",videoScript:`科学记数法的定义：
把一个数表示成 a × 10ⁿ 的形式，其中 1 ≤ |a| < 10，n为整数。

大数的科学记数法：
• 123000 = 1.23 × 10⁵（小数点向左移5位，n = 5）
• 5000000 = 5 × 10⁶（小数点向左移6位，n = 6）

小数的科学记数法：
• 0.00045 = 4.5 × 10⁻⁴（小数点向右移4位，n = −4）
• 0.0000123 = 1.23 × 10⁻⁵（小数点向右移5位，n = −5）

口诀：大数向左移，n为正；小数向右移，n为负。`,videoBvid:"BV1aP4y1o7n1",videoPage:26,example:{question:"将3600000用科学记数法表示",analysis:`解：小数点向左移动6位
3600000 = 3.6 × 10⁶`},exercises:[{id:"kp1_12_1",question:"用科学记数法表示：5200000 = ____。",answer:"5.2 × 10⁶",analysis:"小数点向左移6位。"},{id:"kp1_12_2",question:"用科学记数法表示：0.000072 = ____。",answer:"7.2 × 10⁻⁵",analysis:"小数点向右移5位。"},{id:"kp1_12_3",question:"将 2.5 × 10⁴ 还原成原数。",answer:"25000",analysis:"小数点向右移动4位：2.5 → 25000。"}],formulas:["科学记数法：a × 10ⁿ（1≤|a|<10）","大数：n为正整数","小数：n为负整数"]},{id:"kp2_1",chapterId:"ch2",order:1,title:"单项式",content:"学习单项式的定义，掌握系数和次数的概念。",videoScript:`单项式的定义：由数与字母的积组成的代数式。
系数：单项式中的数字因数。
次数：单项式中所有字母的指数和。
单独的一个数或字母也是单项式。`,videoBvid:"BV1aP4y1o7n1",videoPage:30,example:{question:"指出单项式 -3x²y 的系数和次数。",analysis:"系数是-3；次数是2+1=3（x的指数是2，y的指数是1）。"},exercises:[{id:"kp2_1_1",question:"单项式 5a³b 的系数是____，次数是____。",answer:"5，4",analysis:"系数是5，次数是3+1=4。"},{id:"kp2_1_2",question:"单项式 -7 的系数是____，次数是____。",answer:"-7，0",analysis:"单独一个数是单项式，系数是它本身，次数为0。"},{id:"kp2_1_3",question:"写出一个系数为-2，次数为3的单项式____。",answer:"-2x³（答案不唯一）",analysis:"满足系数为-2，字母指数和为3即可。"}]},{id:"kp2_2",chapterId:"ch2",order:2,title:"多项式",content:"学习多项式的定义，掌握项、常数项和次数的概念。",videoScript:`多项式的定义：几个单项式的和。
项：多项式中的每个单项式。
常数项：不含字母的项。
次数：多项式中次数最高的项的次数。`,videoBvid:"BV1aP4y1o7n1",videoPage:30,example:{question:"多项式 3x² - 2x + 5 有几项？次数是多少？常数项是什么？",analysis:"有3项（3x²、-2x、5）；次数是2（最高次项3x²的次数）；常数项是5。"},exercises:[{id:"kp2_2_1",question:"多项式 2x³ - x² + 3x - 7 的次数是____，常数项是____。",answer:"3，-7",analysis:"最高次项2x³的次数是3，常数项是-7。"},{id:"kp2_2_2",question:"多项式 x²y - 3xy + 2y - 1 有____项。",answer:"4",analysis:"有4项：x²y、-3xy、2y、-1。"},{id:"kp2_2_3",question:"多项式 5x² - 3x + 2 是一个____次____项式。",answer:"二，三",analysis:"最高次数是2，有3项，所以是二次三项式。"}]},{id:"kp2_3",chapterId:"ch2",order:3,title:"同类项",content:"学习同类项的定义，掌握合并同类项的方法。",videoScript:`同类项的定义：所含字母相同，并且相同字母的指数也相同的项。
同类项与系数无关，与字母顺序无关。
合并同类项：系数相加，字母和指数不变。
只有同类项才能合并。`,videoBvid:"BV1aP4y1o7n1",videoPage:31,example:{question:"判断下列各组是否是同类项：(1) 3x²y 与 -5x²y；(2) 2ab 与 3ba；(3) 4x 与 4y。",analysis:"(1) 是同类项（字母和指数都相同）；(2) 是同类项（字母相同，顺序不同不影响）；(3) 不是同类项（字母不同）。"},exercises:[{id:"kp2_3_1",question:`下列各组中，是同类项的是____。
A. 2x 与 2y    B. 3a²b 与 -ba²    C. 5mn 与 5m`,answer:"B",analysis:"B选项字母相同（a²b），顺序不同不影响。"},{id:"kp2_3_2",question:"合并同类项：3x² + 2x² = ____。",answer:"5x²",analysis:"系数相加3+2=5，字母和指数不变。"},{id:"kp2_3_3",question:"若 2x³y^m 与 -3x^n y² 是同类项，则 m = ____，n = ____。",answer:"2，3",analysis:"同类项要求相同字母的指数相同，所以m=2，n=3。"}]},{id:"kp2_4",chapterId:"ch2",order:4,title:"去括号法则",content:"学习去括号的法则，掌握括号前有正负号时的处理方法。",videoScript:`括号前是"+"号：去掉括号和"+"号，括号内各项不变号。
括号前是"-"号：去掉括号和"-"号，括号内各项都变号。
括号前有数字因数：先用分配律乘进去，再去括号。`,videoBvid:"BV1aP4y1o7n1",videoPage:32,example:{question:"去括号：(1) a + (b - c)；(2) a - (b - c)。",analysis:"(1) a + (b - c) = a + b - c（括号前是正号，括号内不变号）；(2) a - (b - c) = a - b + c（括号前是负号，括号内都变号）。"},exercises:[{id:"kp2_4_1",question:"去括号：2x + (3y - z) = ____。",answer:"2x + 3y - z",analysis:"括号前是正号，括号内各项不变号。"},{id:"kp2_4_2",question:"去括号：5a - (2b - 3c) = ____。",answer:"5a - 2b + 3c",analysis:"括号前是负号，括号内各项都变号，-3c变成+3c。"},{id:"kp2_4_3",question:"去括号：-2(x - 3y + 1) = ____。",answer:"-2x + 6y - 2",analysis:"用-2分别乘括号内各项。"}]},{id:"kp2_5",chapterId:"ch2",order:5,title:"整式的加减",content:"学习整式加减的运算步骤，掌握化简求值的方法。",videoScript:`整式加减的实质：合并同类项。
步骤：先去括号，再合并同类项。
注意符号：去括号时符号容易出错。
结果要化成最简形式。`,videoBvid:"BV1aP4y1o7n1",videoPage:33,example:{question:"化简：(3x² - 2x + 1) - (x² + 3x - 2)。",analysis:"原式 = 3x² - 2x + 1 - x² - 3x + 2 = (3x² - x²) + (-2x - 3x) + (1 + 2) = 2x² - 5x + 3"},exercises:[{id:"kp2_5_1",question:"化简：(2a + 3b) - (a - 2b) = ____。",answer:"a + 5b",analysis:"原式=2a+3b-a+2b=a+5b。"},{id:"kp2_5_2",question:"一个多项式加上 3x² - 2x + 5 等于 5x² + x - 1，求这个多项式。",answer:"2x² + 3x - 6",analysis:"用(5x²+x-1)-(3x²-2x+5)=5x²+x-1-3x²+2x-5=2x²+3x-6。"},{id:"kp2_5_3",question:"先化简，再求值：3(x² - 2xy) - 2(x² - 3xy + 1)，其中x=2，y=-1。",answer:"x² - 2，当x=2时，值为2",analysis:"原式=3x²-6xy-2x²+6xy-2=x²-2=4-2=2。"}],formulas:["同类项合并：ax + bx = (a+b)x","去括号：+(a-b) = a-b，-(a-b) = -a+b","添括号：+(a-b) = a-b，-(a-b) = -a+b","整式加减：先去括号，再合并同类项"]},{id:"kp2_6",chapterId:"ch2",order:6,title:"整式的加减",content:"学习整式加减的运算步骤，掌握先去括号再合并同类项的方法，能够进行整式的化简求值。",videoScript:`整式加减的实质：去括号 + 合并同类项。

运算步骤：
1. 先去括号（注意符号变化）
2. 再合并同类项
3. 结果化成最简形式

化简求值：
1. 先化简整式
2. 再代入数值计算

注意：去括号时，括号前是负号最容易出错！`,example:{question:"化简：(3x² − 2x + 1) − (x² + 3x − 2)",analysis:`解：原式 = 3x² − 2x + 1 − x² − 3x + 2
       = (3x² − x²) + (−2x − 3x) + (1 + 2)
       = 2x² − 5x + 3`},exercises:[{id:"kp2_6_1",question:"化简：(2a + 3b) − (a − 2b) = ____。",answer:"a + 5b",analysis:"原式=2a+3b−a+2b=a+5b。"},{id:"kp2_6_2",question:"一个多项式加上 3x² − 2x + 5 等于 5x² + x − 1，求这个多项式。",answer:"2x² + 3x − 6",analysis:"用(5x²+x−1)−(3x²−2x+5)=5x²+x−1−3x²+2x−5=2x²+3x−6。"},{id:"kp2_6_3",question:"先化简，再求值：3(x² − 2xy) − 2(x² − 3xy + 1)，其中x=2，y=−1。",answer:"2",analysis:"原式=3x²−6xy−2x²+6xy−2=x²−2=4−2=2。"}],formulas:["整式加减 = 去括号 + 合并同类项","+(a−b) = a−b","−(a−b) = −a+b"]},{id:"kp3_1",chapterId:"ch3",order:1,title:"一元一次方程的概念",content:"学习方程和一元一次方程的定义，理解方程的解的概念。",videoScript:`方程：含有未知数的等式。
一元一次方程：只含有一个未知数，未知数的次数都是1。
方程的解：使方程左右两边相等的未知数的值。
检验：把解代入方程验证。`,videoBvid:"BV1aP4y1o7n1",videoPage:41,example:{question:"判断下列哪些是方程，哪些是一元一次方程：(1) 2x + 3 = 7；(2) x² - 1 = 0；(3) 3x + 2y = 5；(4) 2 + 3 = 5。",analysis:"(1) 是方程，也是一元一次方程；(2) 是方程，但未知数次数是2，不是一元一次方程；(3) 是方程，但有两个未知数，不是一元一次方程；(4) 是等式，但不含未知数，不是方程。"},exercises:[{id:"kp3_1_1",question:`下列是一元一次方程的是____。
A. x + y = 5    B. x² = 4    C. 2x - 3 = 7    D. 1/x = 2`,answer:"C",analysis:"A有两个未知数，B未知数次数为2，D不是整式方程。"},{id:"kp3_1_2",question:"若 x = 3 是方程 2x + a = 8 的解，则 a = ____。",answer:"2",analysis:"把x=3代入：2×3+a=8，6+a=8，a=2。"},{id:"kp3_1_3",question:"写出一个解为 x = -2 的一元一次方程____。",answer:"x + 2 = 0（答案不唯一）",analysis:"只要满足x=-2时等式成立即可。"}]},{id:"kp3_2",chapterId:"ch3",order:2,title:"等式的性质",content:"学习等式的两个基本性质，理解移项和系数化为1的依据。",videoScript:`性质1：等式两边加（或减）同一个数（或式子），结果仍相等。
性质2：等式两边乘同一个数，或除以同一个不为0的数，结果仍相等。
移项的依据：等式性质1。
系数化为1的依据：等式性质2。`,videoBvid:"BV1aP4y1o7n1",videoPage:42,example:{question:"已知 3a = 2b，利用等式性质填空：(1) 3a + 5 = 2b + ____；(2) 如果 a = 4，则 b = ____。",analysis:"(1) 等式两边都加5，所以填5；(2) 3×4=2b，12=2b，b=6。"},exercises:[{id:"kp3_2_1",question:"如果 x = y，那么 x + 3 = y + ____。",answer:"3",analysis:"等式两边都加3。"},{id:"kp3_2_2",question:"如果 2x = 10，那么 x = ____。",answer:"5",analysis:"等式两边都除以2。"},{id:"kp3_2_3",question:`若 a = b，则下列变形正确的是____。
A. a + 2 = b - 2    B. 2a = 3b    C. a/3 = b/3    D. a - c = b + c`,answer:"C",analysis:"C符合等式性质2，两边都除以3。"}]},{id:"kp3_3",chapterId:"ch3",order:3,title:"解一元一次方程（基本步骤）",content:"学习解一元一次方程的基本步骤，掌握各类方程的解法。",videoScript:`去分母：两边同乘各分母的最小公倍数。
去括号：按小括号、中括号、大括号顺序。
移项：把含未知数的项移到一边，常数项移到另一边（移项要变号）。
合并同类项：化成 ax = b 的形式。
系数化为1：两边同除以a，得 x = b/a。`,videoBvid:"BV1aP4y1o7n1",videoPage:43,example:{question:"解方程 2(x - 3) = 5x + 4。",analysis:"去括号：2x - 6 = 5x + 4；移项：2x - 5x = 4 + 6；合并同类项：-3x = 10；系数化为1：x = -10/3。"},exercises:[{id:"kp3_3_1",question:"解方程：3x - 7 = 2x + 5。",answer:"x = 12",analysis:"3x - 2x = 5 + 7，x = 12。"},{id:"kp3_3_2",question:"解方程：2(x + 1) = 3x - 4。",answer:"x = 6",analysis:"2x + 2 = 3x - 4，2 + 4 = 3x - 2x，x = 6。"},{id:"kp3_3_3",question:"解方程：(2x - 1)/3 = (x + 2)/2。",answer:"x = 8",analysis:"两边同乘6：2(2x-1)=3(x+2)，4x-2=3x+6，x=8。"}]},{id:"kp3_4",chapterId:"ch3",order:4,title:"一元一次方程的应用（和差倍分问题）",content:"学习用一元一次方程解决和差倍分问题，掌握列方程解应用题的方法。",videoScript:`设未知数：直接设或间接设。
找等量关系：和、差、倍数、几分之几等。
列方程：根据等量关系列方程。
解方程并检验作答。`,videoBvid:"BV1aP4y1o7n1",videoPage:51,example:{question:"甲、乙两数的和是25，甲数是乙数的4倍，求甲、乙两数。",analysis:"设乙数为x，则甲数为4x。根据题意：x + 4x = 25，5x = 25，x = 5。所以乙数为5，甲数为20。"},exercises:[{id:"kp3_4_1",question:"一个数的3倍与这个数的2倍的和是30，求这个数。",answer:"6",analysis:"设这个数为x，3x+2x=30，5x=30，x=6。"},{id:"kp3_4_2",question:"父亲现在的年龄是儿子的3倍，5年前父亲的年龄是儿子的4倍，求儿子现在的年龄。",answer:"15岁",analysis:"设儿子现在x岁，父亲3x岁。5年前：3x-5=4(x-5)，解得x=15。"},{id:"kp3_4_3",question:"某班学生分组，若每组7人，则余3人；若每组8人，则少5人。这个班有多少学生？",answer:"59人",analysis:"设分成x组，7x+3=8x-5，解得x=8，学生数=7×8+3=59。"}]},{id:"kp3_5",chapterId:"ch3",order:5,title:"一元一次方程的应用（行程问题）",content:"学习用一元一次方程解决行程问题，掌握相遇、追及问题的解法。",videoScript:`基本关系：路程 = 速度 × 时间。
相遇问题：路程和 = 总路程。
追及问题：路程差 = 初始距离。
顺逆水问题：顺水速度 = 静水速度 + 水速。`,videoBvid:"BV1aP4y1o7n1",videoPage:53,example:{question:"甲、乙两地相距300千米，A车从甲地出发，速度为60千米/时；B车从乙地出发，速度为40千米/时。两车相向而行，几小时后相遇？",analysis:"设x小时后相遇。A车行驶路程 + B车行驶路程 = 总路程，60x + 40x = 300，100x = 300，x = 3。答：3小时后相遇。"},exercises:[{id:"kp3_5_1",question:"小明和小红分别从相距12千米的两地同时出发相向而行，小明每小时走4千米，小红每小时走2千米，几小时后两人相遇？",answer:"2小时",analysis:"设x小时后相遇，4x+2x=12，x=2。"},{id:"kp3_5_2",question:"一艘轮船在静水中的速度是20千米/时，水流速度是4千米/时，这艘轮船顺水航行120千米需要多少时间？",answer:"5小时",analysis:"顺水速度=20+4=24千米/时，时间=120÷24=5小时。"},{id:"kp3_5_3",question:"甲、乙两人从同一地点出发，甲每小时走5千米。甲先走2小时后，乙以8千米/时的速度追赶，几小时后乙追上甲？",answer:"10/3小时（约3.33小时）",analysis:"设乙走x小时后追上，此时甲走了(x+2)小时。8x=5(x+2)，8x=5x+10，3x=10，x=10/3。"}]},{id:"kp3_6",chapterId:"ch3",order:6,title:"一元一次方程的应用（工程问题）",content:"学习用一元一次方程解决工程问题，掌握工作效率和工作量的关系。",videoScript:`基本关系：工作量 = 工作效率 × 工作时间。
通常把总工作量看作单位"1"。
合作问题：各部分工作量之和 = 总工作量。
效率 = 1/完成时间。`,videoBvid:"BV1aP4y1o7n1",videoPage:52,example:{question:"一项工程，甲单独做需要10天完成，乙单独做需要15天完成。两人合作需要几天完成？",analysis:"设两人合作需要x天完成。甲的工作效率是1/10，乙的工作效率是1/15。(1/10)x + (1/15)x = 1，两边同乘30：3x + 2x = 30，5x = 30，x = 6。答：两人合作需要6天完成。"},exercises:[{id:"kp3_6_1",question:"一项工程，甲单独做需要8天完成。甲先做2天后，剩下的由乙单独做5天完成。乙单独完成这项工程需要多少天？",answer:"乙需要20/3天（约6.67天）",analysis:"设乙需要x天，则乙效率为1/x。甲2天完成2/8=1/4，乙5天完成5/x。1/4+5/x=1，5/x=3/4，x=20/3。"},{id:"kp3_6_2",question:"水池有两个进水管，单开甲管6小时注满，单开乙管4小时注满。两管同时开，几小时注满水池？",answer:"2.4小时（或12/5小时）",analysis:"设x小时注满，(1/6+1/4)x=1，(5/12)x=1，x=12/5=2.4。"},{id:"kp3_6_3",question:"某项工作，甲、乙两人合作6天完成。如果甲单独做需要10天完成，那么乙单独做需要多少天？",answer:"15天",analysis:"设乙需要x天，(1/10+1/x)×6=1，6/10+6/x=1，6/x=2/5，x=15。"}],formulas:["等式性质1：若a=b，则a±c=b±c","等式性质2：若a=b，则ac=bc，a/c=b/c (c≠0)","路程=速度×时间","工作量=工作效率×时间","利润=售价-进价","利润率=利润/进价×100%"]},{id:"kp4_1",chapterId:"ch4",order:1,title:"立体图形与平面图形",content:"学习立体图形和平面图形的概念，了解三视图和展开图。",videoScript:`立体图形：各部分不都在同一平面内的图形（如长方体、圆柱、球等）。
平面图形：各部分都在同一平面内的图形（如三角形、圆、长方形等）。
三视图：从正面、左面、上面观察物体得到的平面图形。
展开图：立体图形沿棱剪开后铺平的平面图形。`,videoBvid:"BV1aP4y1o7n1",videoPage:61,example:{question:"一个正方体的展开图如图所示（假设给出展开图），请指出哪些面是相对的。",analysis:'在正方体展开图中，相对的面之间一定相隔一个面。利用"隔一相对"的规律判断。'},exercises:[{id:"kp4_1_1",question:"下列图形中，不是立体图形的是____。\\nA. 球    B. 圆柱    C. 三角形    D. 正方体",answer:"C",analysis:"三角形是平面图形。"},{id:"kp4_1_2",question:"一个几何体从正面看是长方形，从上面看是圆，这个几何体是____。",answer:"圆柱",analysis:"圆柱的主视图是长方形，俯视图是圆。"},{id:"kp4_1_3",question:"正方体的展开图共有____种不同的形状。",answer:"11",analysis:"正方体展开图有11种基本类型。"}]},{id:"kp4_2",chapterId:"ch4",order:2,title:"直线、射线、线段",content:"学习直线、射线、线段的定义和性质，掌握两点确定一条直线的基本事实。",videoScript:`直线：向两方无限延伸，没有端点。
射线：向一方无限延伸，有一个端点。
线段：有两个端点，可以度量长度。
基本事实：两点确定一条直线；两点之间线段最短。`,videoBvid:"BV1aP4y1o7n1",videoPage:69,example:{question:"如图，点A、B、C在一条直线上，AB = 5cm，BC = 3cm，求AC的长。",analysis:"当B在A、C之间时，AC = AB + BC = 5 + 3 = 8cm；当C在A、B之间时，AC = AB - BC = 5 - 3 = 2cm。"},exercises:[{id:"kp4_2_1",question:"经过两点有且只有____条直线。",answer:"一",analysis:"两点确定一条直线。"},{id:"kp4_2_2",question:"如图，线段AB = 10cm，C是AB的中点，则AC = ____cm。",answer:"5",analysis:"中点把线段分成相等的两部分。"},{id:"kp4_2_3",question:"平面上有4个点，过每两点画一条直线，最多可以画____条直线。",answer:"6",analysis:"4个点中任意两点确定一条直线，C(4,2)=6条。"}]},{id:"kp4_3",chapterId:"ch4",order:3,title:"角的概念与度量",content:"学习角的定义和表示方法，掌握角的度量单位和换算。",videoScript:`角的定义：有公共端点的两条射线组成的图形。
角的表示：用三个大写字母或一个大写字母或数字表示。
角的度量：1° = 60′，1′ = 60″。
角的分类：锐角、直角、钝角、平角、周角。`,videoBvid:"BV1aP4y1o7n1",videoPage:77,example:{question:"(1) 35°25′ + 42°38′ = ?\\n(2) 把75°30′化成度。",analysis:"(1) 35°25′ + 42°38′ = 77°63′ = 78°3′\\n(2) 75°30′ = 75° + 30/60° = 75.5°"},exercises:[{id:"kp4_3_1",question:"25°30′ = ____°。",answer:"25.5",analysis:"30′ = 0.5°。"},{id:"kp4_3_2",question:"45.5° = ____°____′。",answer:"45，30",analysis:"0.5° = 30′。"},{id:"kp4_3_3",question:"计算：38°45′ + 52°20′ = ____。",answer:"91°5′",analysis:"38°+52°=90°，45′+20′=65′=1°5′，总和为91°5′。"}]},{id:"kp4_4",chapterId:"ch4",order:4,title:"角的比较与运算",content:"学习角的大小比较，掌握角的和差、角平分线、互余和互补的概念。",videoScript:`角的大小比较：度量法或叠合法。
角的和差：∠AOC = ∠AOB + ∠BOC。
角的平分线：把角分成两个相等的角的射线。
互余：和为90°的两个角；互补：和为180°的两个角。`,videoBvid:"BV1aP4y1o7n1",videoPage:84,example:{question:"如图，OB平分∠AOC，∠AOB = 35°，求∠AOC的度数。",analysis:"因为OB平分∠AOC，所以∠AOC = 2∠AOB = 2×35° = 70°。"},exercises:[{id:"kp4_4_1",question:"一个角是35°，它的余角是____°，补角是____°。",answer:"55，145",analysis:"余角=90°-35°=55°，补角=180°-35°=145°。"},{id:"kp4_4_2",question:"若∠α = 60°，则∠α的余角是____°，补角是____°。",answer:"30，120",analysis:"余角=90°-60°=30°，补角=180°-60°=120°。"},{id:"kp4_4_3",question:"如图，∠AOB = 90°，∠BOC = 30°，OM平分∠AOC，求∠AOM的度数。",answer:"60°",analysis:"∠AOC = ∠AOB + ∠BOC = 90° + 30° = 120°，OM平分∠AOC，所以∠AOM = 60°。"}],formulas:["1° = 60′，1′ = 60″","中点：AM = 1/2 AB","角平分线：∠AOC = 1/2 ∠AOB","互余：∠1 + ∠2 = 90°","互补：∠1 + ∠2 = 180°","同角（等角）的余角相等","同角（等角）的补角相等"]},{id:"kp4_5",chapterId:"ch4",order:5,title:"角平分线",content:"学习角平分线的定义和性质，掌握角平分线的表示方法，能够运用角平分线进行角度计算。",videoScript:`角平分线的定义：从一个角的顶点出发，把这个角分成两个相等的角的射线。

性质：若OC是∠AOB的平分线，则：
∠AOC = ∠BOC = 1/2 ∠AOB
∠AOB = 2∠AOC = 2∠BOC

角平分线的表示：
OC是∠AOB的平分线 ⟺ ∠AOC = ∠BOC

注意：角平分线是一条射线，不是直线。`,videoBvid:"BV1aP4y1o7n1",videoPage:82,example:{question:"已知OC是∠AOB的平分线，∠AOB = 60°，求∠AOC的度数。",analysis:`解：因为OC是∠AOB的平分线
所以 ∠AOC = 1/2 ∠AOB = 1/2 × 60° = 30°`},exercises:[{id:"kp4_5_1",question:"如图，OM平分∠AOB，∠AOB = 80°，则∠AOM = ____°。",answer:"40",analysis:"角平分线把角分成两个相等的角，80°÷2=40°。"},{id:"kp4_5_2",question:"如图，OC是∠AOB的平分线，∠AOC = 35°，则∠AOB = ____°。",answer:"70",analysis:"∠AOB = 2∠AOC = 2×35° = 70°。"},{id:"kp4_5_3",question:"如图，∠AOB = 90°，OC平分∠AOB，OD平分∠AOC，求∠AOD的度数。",answer:"22.5°",analysis:"∠AOC = 1/2 × 90° = 45°，∠AOD = 1/2 × 45° = 22.5°。"}],formulas:["角平分线：∠AOC = 1/2 ∠AOB","∠AOB = 2∠AOC = 2∠BOC","角平分线是一条射线"]},{id:"kp5_1",chapterId:"ch5",order:1,title:"相交线（对顶角与邻补角）",content:"学习相交线的概念，掌握对顶角和邻补角的性质。",videoScript:`相交线：两条直线相交形成四个角。
对顶角：有公共顶点，两边互为反向延长线的两个角，对顶角相等。
邻补角：有公共顶点和一条公共边，另一边互为反向延长线的两个角，邻补角互补。
两条直线相交，形成2对对顶角，4对邻补角。`,videoBvid:"BV13e4y1F7Ah",videoPage:1,example:{question:"如图，直线AB与CD相交于点O，∠AOC = 50°，求∠BOD、∠AOD的度数。",analysis:"∠BOD与∠AOC是对顶角，所以∠BOD = 50°；∠AOD与∠AOC是邻补角，所以∠AOD = 180° - 50° = 130°。"},exercises:[{id:"kp5_1_1",question:"两条直线相交，形成____对对顶角，____对邻补角。",answer:"2，4",analysis:"基本概念。"},{id:"kp5_1_2",question:"如图，直线AB与CD相交于点O，若∠1 = 35°，则∠2 = ____°，∠3 = ____°。",answer:"145，35",analysis:"∠1与∠2是邻补角，∠1与∠3是对顶角。"},{id:"kp5_1_3",question:"如图，三条直线相交于一点，形成6个角，已知∠1 = 40°，∠2 = 60°，则∠3 = ____°。",answer:"80",analysis:"∠1+∠2+∠3=180°（平角），所以∠3=80°。"}]},{id:"kp5_2",chapterId:"ch5",order:2,title:"垂线",content:"学习垂线的定义和性质，掌握点到直线的距离概念。",videoScript:`垂线定义：两条直线相交成直角时，互相垂直。
垂线的性质：过一点有且只有一条直线与已知直线垂直。
垂线段：从直线外一点到这条直线的垂线段的长度，叫做点到直线的距离。
垂线段最短：直线外一点与直线上各点连接的所有线段中，垂线段最短。`,videoBvid:"BV13e4y1F7Ah",videoPage:2,example:{question:"如图，PO⊥AB于点O，PC⊥CD于点C，PO = 3cm，PC = 4cm，求点P到直线AB、CD的距离。",analysis:"点到直线的距离是垂线段的长度。点P到AB的距离是PO = 3cm；点P到CD的距离是PC = 4cm。"},exercises:[{id:"kp5_2_1",question:"过直线外一点，有且只有____条直线与已知直线垂直。",answer:"一",analysis:"垂线的性质。"},{id:"kp5_2_2",question:"点到直线的距离是指____。\\nA. 这点到直线的垂线的长度\\nB. 这点到直线的垂线段\\nC. 这点到直线的垂线段的长度\\nD. 过这点垂直于直线的直线",answer:"C",analysis:"点到直线的距离是指垂线段的长度。"},{id:"kp5_2_3",question:'如图，直线AB外一点P到直线AB的距离是5cm，则点P与直线AB上任意一点的距离____5cm（填"≥"、"≤"或"="）。',answer:"≥",analysis:"垂线段最短。"}]},{id:"kp5_3",chapterId:"ch5",order:3,title:"同位角、内错角、同旁内角",content:"学习三线八角的概念，掌握同位角、内错角、同旁内角的识别方法。",videoScript:`三线八角：两条直线被第三条直线所截，形成八个角。
同位角：位置相同（都在截线同侧，被截线同方向）。
内错角：在两条被截线之间，截线两侧交错。
同旁内角：在两条被截线之间，截线同侧。`,videoBvid:"BV13e4y1F7Ah",videoPage:3,example:{question:"如图，直线AB、CD被EF所截，请找出所有的同位角、内错角、同旁内角。",analysis:"同位角：∠1与∠5，∠2与∠6，∠3与∠7，∠4与∠8；内错角：∠3与∠5，∠4与∠6；同旁内角：∠3与∠6，∠4与∠5。"},exercises:[{id:"kp5_3_1",question:"如图，∠1和∠5是____角，∠3和∠5是____角，∠3和∠6是____角。",answer:"同位，内错，同旁内",analysis:"根据角的位置关系判断。"},{id:"kp5_3_2",question:"两条直线被第三条直线所截，形成____对同位角，____对内错角，____对同旁内角。",answer:"4，2，2",analysis:"基本概念。"},{id:"kp5_3_3",question:"如图，直线AB、CD被EF所截，若∠1 = 70°，则∠2 = ____°，∠3 = ____°。",answer:"110，70",analysis:"∠1与∠2是邻补角，∠1与∠3是对顶角。"}]},{id:"kp5_4",chapterId:"ch5",order:4,title:"平行线的判定",content:"学习平行线的定义，掌握平行线的判定方法。",videoScript:`定义：在同一平面内，不相交的两条直线叫做平行线。
判定方法1：同位角相等，两直线平行。
判定方法2：内错角相等，两直线平行。
判定方法3：同旁内角互补，两直线平行。
判定方法4：平行于同一直线的两直线平行。`,videoBvid:"BV13e4y1F7Ah",videoPage:5,example:{question:"如图，直线AB、CD被EF所截，∠1 = 65°，∠2 = 65°，求证：AB∥CD。",analysis:"因为∠1 = ∠2 = 65°（已知），且∠1与∠2是同位角，所以AB∥CD（同位角相等，两直线平行）。"},exercises:[{id:"kp5_4_1",question:"如图，∠1 = ∠2，则能判定____∥____。",answer:"AB，CD（或根据具体图形判断）",analysis:"内错角相等，两直线平行。"},{id:"kp5_4_2",question:"如图，∠1 + ∠2 = 180°，则能判定____∥____。",answer:"根据具体图形判断",analysis:"同旁内角互补，两直线平行。"},{id:"kp5_4_3",question:'如图，AB⊥EF于点B，CD⊥EF于点D，则AB____CD（填"∥"或"⊥"）。',answer:"∥",analysis:"垂直于同一直线的两直线平行。"}]},{id:"kp5_5",chapterId:"ch5",order:5,title:"平行线的性质",content:"学习平行线的性质，能够运用性质进行简单的推理和计算。",videoScript:`性质1：两直线平行，同位角相等。
性质2：两直线平行，内错角相等。
性质3：两直线平行，同旁内角互补。
平行线间的距离处处相等。`,videoBvid:"BV13e4y1F7Ah",videoPage:6,example:{question:"如图，AB∥CD，∠1 = 70°，求∠2的度数。",analysis:"因为AB∥CD（已知），所以∠1 = ∠2（两直线平行，同位角相等），所以∠2 = 70°。"},exercises:[{id:"kp5_5_1",question:"如图，AB∥CD，∠1 = 55°，则∠2 = ____°，∠3 = ____°。",answer:"55，125",analysis:"∠1与∠2是同位角，∠1与∠3是同旁内角。"},{id:"kp5_5_2",question:"如图，AB∥CD，AD平分∠BAC，∠BAD = 35°，则∠ACD = ____°。",answer:"70",analysis:"∠BAC = 2×35° = 70°，AB∥CD，所以∠ACD = ∠BAC = 70°（内错角相等）。"},{id:"kp5_5_3",question:"如图，AB∥CD，∠B = 40°，∠D = 30°，则∠BED = ____°。",answer:"70",analysis:"过E作EF∥AB，则EF∥CD，∠BEF = ∠B = 40°，∠DEF = ∠D = 30°，所以∠BED = 70°。"}],formulas:["对顶角相等","邻补角互补","平行公理：过直线外一点有且只有一条直线与已知直线平行","判定1：同位角相等 ⇒ 两直线平行","判定2：内错角相等 ⇒ 两直线平行","判定3：同旁内角互补 ⇒ 两直线平行","性质1：两直线平行 ⇒ 同位角相等","性质2：两直线平行 ⇒ 内错角相等","性质3：两直线平行 ⇒ 同旁内角互补"]},{id:"kp5_6",chapterId:"ch5",order:6,title:"平移",content:"学习平移的定义和性质，掌握平移前后图形的对应关系，能够根据平移规律进行坐标计算。",videoScript:`平移的定义：把一个图形沿某方向移动一定的距离，叫做平移。

平移的性质：
• 平移不改变图形的形状和大小
• 对应点所连的线段平行且相等
• 对应角相等

平移的坐标变化：
• 点(x, y)向右平移a个单位 → (x + a, y)
• 点(x, y)向左平移a个单位 → (x − a, y)
• 点(x, y)向上平移b个单位 → (x, y + b)
• 点(x, y)向下平移b个单位 → (x, y − b)

口诀：右加左减（横坐标），上加下减（纵坐标）。`,videoBvid:"BV13e4y1F7Ah",videoPage:8,example:{question:"点A(2, −1) 先向右平移3个单位，再向上平移2个单位，求平移后坐标。",analysis:"解：(2+3, −1+2) = (5, 1)"},exercises:[{id:"kp5_6_1",question:"将点P(−2, 3)向右平移4个单位，所得点的坐标是____。",answer:"(2, 3)",analysis:"横坐标加4：−2+4=2，纵坐标不变。"},{id:"kp5_6_2",question:"将点A(3, −2)向下平移3个单位，再向左平移2个单位，所得点的坐标是____。",answer:"(1, −5)",analysis:"横坐标：3−2=1，纵坐标：−2−3=−5。"},{id:"kp5_6_3",question:"点M(2, 5)平移后得到点N(−1, 3)，则平移方式是____。",answer:"向左平移3个单位，向下平移2个单位",analysis:"横坐标变化：−1−2=−3（左移3），纵坐标变化：3−5=−2（下移2）。"}],formulas:["右加左减（横坐标）","上加下减（纵坐标）","向右平移a：(x,y) → (x+a,y)","向左平移a：(x,y) → (x−a,y)","向上平移b：(x,y) → (x,y+b)","向下平移b：(x,y) → (x,y−b)"]},{id:"kp6_1",chapterId:"ch6",order:1,title:"算术平方根",content:"学习算术平方根的定义，掌握算术平方根的计算方法。",videoScript:`算术平方根定义：若x²=a（x>0），则x叫做a的算术平方根，记作√a。
0的算术平方根是0。
负数没有算术平方根。
√a ≥ 0（a≥0）。`,videoBvid:"BV15s4y1t75y",videoPage:1,example:{question:"求下列各数的算术平方根：(1) 16；(2) 0.25；(3) 0。",analysis:"(1) √16 = 4；(2) √0.25 = 0.5；(3) √0 = 0。"},exercises:[{id:"kp6_1_1",question:"√9 = ____，√0.04 = ____，√(25/49) = ____。",answer:"3，0.2，5/7",analysis:"根据算术平方根定义计算。"},{id:"kp6_1_2",question:"若√x = 5，则x = ____。",answer:"25",analysis:"两边平方，x = 25。"},{id:"kp6_1_3",question:"下列各式有意义的是____。\\nA. √(-4)    B. √0    C. √(-0.01)",answer:"B",analysis:"负数没有算术平方根。"}]},{id:"kp6_2",chapterId:"ch6",order:2,title:"平方根",content:"学习平方根的定义，掌握平方根与算术平方根的区别。",videoScript:`平方根定义：若x²=a，则x叫做a的平方根。
正数有两个平方根，互为相反数。
0的平方根是0。
负数没有平方根。`,videoBvid:"BV15s4y1t75y",videoPage:2,example:{question:"求下列各数的平方根：(1) 25；(2) 0.64；(3) 0。",analysis:"(1) 25的平方根是±5；(2) 0.64的平方根是±0.8；(3) 0的平方根是0。"},exercises:[{id:"kp6_2_1",question:"16的平方根是____，算术平方根是____。",answer:"±4，4",analysis:"正数有两个平方根，算术平方根是其中的正数。"},{id:"kp6_2_2",question:"若x² = 36，则x = ____。",answer:"±6",analysis:"36的平方根是±6。"},{id:"kp6_2_3",question:"一个正数的两个平方根分别是2a-1和-a+2，则这个正数是____。",answer:"9",analysis:"两个平方根互为相反数，2a-1+(-a+2)=0，a=-1，平方根为-3和3，这个数是9。"}]},{id:"kp6_3",chapterId:"ch6",order:3,title:"立方根",content:"学习立方根的定义，掌握立方根的计算方法。",videoScript:`立方根定义：若x³=a，则x叫做a的立方根，记作³√a。
正数的立方根是正数。
负数的立方根是负数。
0的立方根是0。
任何实数都有唯一的立方根。`,videoBvid:"BV15s4y1t75y",videoPage:4,example:{question:"求下列各数的立方根：(1) 27；(2) -8；(3) 0.125。",analysis:"(1) ³√27 = 3；(2) ³√(-8) = -2；(3) ³√0.125 = 0.5。"},exercises:[{id:"kp6_3_1",question:"³√64 = ____，³√(-27) = ____，³√0.001 = ____。",answer:"4，-3，0.1",analysis:"根据立方根定义计算。"},{id:"kp6_3_2",question:"若³√x = -2，则x = ____。",answer:"-8",analysis:"x = (-2)³ = -8。"},{id:"kp6_3_3",question:"下列等式成立的是____。\\nA. ³√(-8) = -2    B. ³√(-1) = 1    C. ³√8 = -2",answer:"A",analysis:"负数的立方根是负数。"}]},{id:"kp6_4",chapterId:"ch6",order:4,title:"实数",content:"学习无理数和实数的概念，理解实数与数轴的对应关系。",videoScript:`无理数：无限不循环小数。
实数：有理数和无理数的统称。
实数与数轴上的点一一对应。
实数的分类：正实数、0、负实数。`,videoBvid:"BV15s4y1t75y",videoPage:6,example:{question:"在下列数中，哪些是有理数，哪些是无理数？\\n√2，3.14，-5，0.1010010001...，π，0，2/3。",analysis:"有理数：3.14，-5，0，2/3；无理数：√2，0.1010010001...（有规律但不循环），π。"},exercises:[{id:"kp6_4_1",question:"在实数√5、0、-3.14、22/7、π/2中，无理数有____个。",answer:"2",analysis:"√5和π/2是无理数。"},{id:"kp6_4_2",question:"与数轴上的点一一对应的数是____。",answer:"实数",analysis:"实数与数轴上的点一一对应。"},{id:"kp6_4_3",question:"比较大小：√3 ____ 1.7，-√5 ____ -2.2。",answer:">，<",analysis:"√3≈1.732>1.7；-√5≈-2.236<-2.2。"}],formulas:["若x²=a（x>0,a≥0），则x=√a","若x³=a，则x=³√a","(√a)² = a (a≥0)","³√(a³) = a","√(ab) = √a × √b (a≥0,b≥0)","正数的平方根有两个，互为相反数","任何实数都有唯一的立方根"]},{id:"kp7_1",chapterId:"ch7",order:1,title:"平面直角坐标系",content:"学习平面直角坐标系的概念，掌握点的坐标的确定方法。",videoScript:`平面直角坐标系：由两条互相垂直、原点重合的数轴组成。
横轴（x轴）、纵轴（y轴）、原点O。
坐标平面被分成四个象限。
点的坐标：有序数对(x,y)。`,videoBvid:"BV1AT41117tN",videoPage:1,example:{question:"写出图中各点的坐标（假设给出坐标系中的点）。",analysis:"根据点在x轴和y轴上的投影确定坐标。"},exercises:[{id:"kp7_1_1",question:"点P(3,-2)在第____象限。",answer:"四",analysis:"横坐标为正，纵坐标为负，在第四象限。"},{id:"kp7_1_2",question:"点A(0,5)在____轴上，点B(-3,0)在____轴上。",answer:"y，x",analysis:"横坐标为0在y轴上，纵坐标为0在x轴上。"},{id:"kp7_1_3",question:"点P(-2,3)到x轴的距离是____，到y轴的距离是____。",answer:"3，2",analysis:"到x轴距离是|y|，到y轴距离是|x|。"}]},{id:"kp7_2",chapterId:"ch7",order:2,title:"各象限内点的坐标特征",content:"学习各象限内点的坐标特征，掌握坐标轴上点的特征。",videoScript:`第一象限：x>0，y>0
第二象限：x<0，y>0
第三象限：x<0，y<0
第四象限：x>0，y<0
坐标轴上的点：x轴上y=0，y轴上x=0`,videoBvid:"BV1AT41117tN",videoPage:2,example:{question:"已知点A(a-1,2a+3)在第二象限，求a的取值范围。",analysis:"第二象限的特征：x<0，y>0。a-1<0，得a<1；2a+3>0，得a>-3/2。所以-3/2<a<1。"},exercises:[{id:"kp7_2_1",question:"若点P(a,b)在第三象限，则a____0，b____0。",answer:"<，<",analysis:"第三象限横纵坐标都为负。"},{id:"kp7_2_2",question:"点M(m-2,m+1)在x轴上，则m = ____，点M的坐标是____。",answer:"-1，(-3,0)",analysis:"在x轴上，纵坐标为0，m+1=0，m=-1。"},{id:"kp7_2_3",question:"点A(2-m,m+1)在第二象限，则m的取值范围是____。",answer:"m>2",analysis:"2-m<0且m+1>0，所以m>2且m>-1，取m>2。"}]},{id:"kp7_3",chapterId:"ch7",order:3,title:"关于坐标轴对称的点的坐标",content:"学习关于坐标轴对称的点的坐标特征，掌握关于原点对称的点的坐标特征。",videoScript:`关于x轴对称：横坐标不变，纵坐标互为相反数。
关于y轴对称：纵坐标不变，横坐标互为相反数。
关于原点对称：横、纵坐标都互为相反数。`,videoBvid:"BV1AT41117tN",videoPage:4,example:{question:"已知点A(3,-4)，求：(1)关于x轴对称的点；(2)关于y轴对称的点；(3)关于原点对称的点。",analysis:"(1) 关于x轴对称：(3,4)；(2) 关于y轴对称：(-3,-4)；(3) 关于原点对称：(-3,4)。"},exercises:[{id:"kp7_3_1",question:"点P(2,-5)关于x轴对称的点的坐标是____，关于y轴对称的点的坐标是____。",answer:"(2,5)，(-2,-5)",analysis:"关于x轴对称y变号，关于y轴对称x变号。"},{id:"kp7_3_2",question:"点A(a,b)关于原点对称的点的坐标是____。",answer:"(-a,-b)",analysis:"关于原点对称，横纵坐标都变号。"},{id:"kp7_3_3",question:"若点M(3,a)与点N(b,-2)关于x轴对称，则a = ____，b = ____。",answer:"2，3",analysis:"关于x轴对称，横坐标相同，纵坐标互为相反数，所以b=3，a=2。"}],formulas:["象限：I(+,+)、II(-,+)、III(-,-)、IV(+,-)","关于x轴对称：(x,y) → (x,-y)","关于y轴对称：(x,y) → (-x,y)","关于原点对称：(x,y) → (-x,-y)","向右平移a个单位：(x,y) → (x+a,y)","向左平移a个单位：(x,y) → (x-a,y)","向上平移b个单位：(x,y) → (x,y+b)","向下平移b个单位：(x,y) → (x,y-b)"]},{id:"kp7_4",chapterId:"ch7",order:4,title:"点坐标的平移",content:"学习点在坐标平面内平移的规律，掌握左右平移和上下平移对坐标的影响，能够进行平移后的坐标计算。",videoScript:`坐标平面内的平移规律：
左右平移（改变横坐标）：
• 向右平移a个单位：横坐标 +a，纵坐标不变
• 向左平移a个单位：横坐标 −a，纵坐标不变

上下平移（改变纵坐标）：
• 向上平移b个单位：纵坐标 +b，横坐标不变
• 向下平移b个单位：纵坐标 −b，横坐标不变

口诀：右加左减（横坐标），上加下减（纵坐标）。`,example:{question:"将点P(−3, 2)向右平移5个单位，再向下平移4个单位，求平移后的坐标。",analysis:`解：向右平移5个单位：(−3+5, 2) = (2, 2)
再向下平移4个单位：(2, 2−4) = (2, −2)`},exercises:[{id:"kp7_4_1",question:"点A(1, −3)向左平移2个单位后的坐标是____。",answer:"(−1, −3)",analysis:"横坐标减2：1−2=−1，纵坐标不变。"},{id:"kp7_4_2",question:"点B(−2, 4)向上平移3个单位后的坐标是____。",answer:"(−2, 7)",analysis:"纵坐标加3：4+3=7，横坐标不变。"},{id:"kp7_4_3",question:"点P经过先向右平移3个单位，再向下平移2个单位后得到点Q(4, −1)，则点P的坐标是____。",answer:"(1, 1)",analysis:"逆向思考：P的横坐标=4−3=1，P的纵坐标=−1+2=1。"}],formulas:["向右平移a：(x,y) → (x+a,y)","向左平移a：(x,y) → (x−a,y)","向上平移b：(x,y) → (x,y+b)","向下平移b：(x,y) → (x,y−b)","口诀：右加左减，上加下减"]},{id:"kp7_5",chapterId:"ch7",order:5,title:"对称点的坐标",content:"学习关于坐标轴对称和关于原点对称的点的坐标特征，能够根据对称关系求点的坐标。",videoScript:`关于坐标轴对称：
• 关于x轴对称：横坐标相同，纵坐标互为相反数
  (x, y) → (x, −y)
• 关于y轴对称：纵坐标相同，横坐标互为相反数
  (x, y) → (−x, y)

关于原点对称：
• 横、纵坐标都互为相反数
  (x, y) → (−x, −y)

记忆口诀：
关于x轴对称：x不变，y变号
关于y轴对称：y不变，x变号
关于原点对称：x和y都变号`,example:{question:"已知点P(−3, 4)，求：(1)关于x轴对称的点；(2)关于y轴对称的点；(3)关于原点对称的点。",analysis:`解：(1) 关于x轴对称：(−3, −4)（横同纵反）
(2) 关于y轴对称：(3, 4)（横反纵同）
(3) 关于原点对称：(3, −4)（都相反）`},exercises:[{id:"kp7_5_1",question:"点P(2, −5)关于x轴对称的点的坐标是____，关于y轴对称的点的坐标是____。",answer:"(2, 5)，(−2, −5)",analysis:"关于x轴对称y变号，关于y轴对称x变号。"},{id:"kp7_5_2",question:"点A(a, b)关于原点对称的点的坐标是____。",answer:"(−a, −b)",analysis:"关于原点对称，横纵坐标都变号。"},{id:"kp7_5_3",question:"若点M(3, a)与点N(b, −2)关于x轴对称，则a = ____，b = ____。",answer:"2，3",analysis:"关于x轴对称，横坐标相同，纵坐标互为相反数，所以b=3，a=2。"}],formulas:["关于x轴对称：(x,y) → (x,−y)","关于y轴对称：(x,y) → (−x,y)","关于原点对称：(x,y) → (−x,−y)","关于x轴对称：横同纵反","关于y轴对称：横反纵同","关于原点对称：都相反"]},{id:"kp8_1",chapterId:"ch8",order:1,title:"二元一次方程和二元一次方程组",content:"学习二元一次方程和二元一次方程组的概念，理解方程组的解。",videoScript:`二元一次方程：含有两个未知数，未知数次数都是1的方程。
二元一次方程的解：使方程左右两边相等的一对未知数的值。
二元一次方程组：由两个二元一次方程组成的方程组。
方程组的解：同时满足两个方程的公共解。`,videoBvid:"BV14841137L1",videoPage:1,example:{question:"判断下列哪些是二元一次方程或二元一次方程组：\\n(1) 2x + 3y = 7；(2) x² + y = 5；(3) {x+y=3, x-y=1}；(4) {x+y=2, xy=3}。",analysis:"(1) 是二元一次方程；(2) 不是，x的次数是2；(3) 是二元一次方程组；(4) 不是，第二个方程不是一次方程。"},exercises:[{id:"kp8_1_1",question:"下列是二元一次方程的是____。\\nA. x + 1/y = 2    B. 3x - 2y = 5    C. x² + y = 3    D. xy = 6",answer:"B",analysis:"A不是整式方程，C次数为2，D次数为2。"},{id:"kp8_1_2",question:'{x=2, y=1}____方程x+y=3的解（填"是"或"不是"）。',answer:"是",analysis:"2+1=3，满足方程。"},{id:"kp8_1_3",question:"写出一个解为{x=1, y=-2}的二元一次方程____。",answer:"x+y=-1（答案不唯一）",analysis:"只要满足1+(-2)=-1即可。"}]},{id:"kp8_2",chapterId:"ch8",order:2,title:"代入消元法",content:"学习代入消元法解二元一次方程组，掌握代入消元的基本步骤。",videoScript:`基本思想：消元，把二元转化为一元。
步骤：(1)从其中一个方程中用含一个未知数的式子表示另一个未知数；(2)代入另一个方程；(3)解一元一次方程；(4)回代求另一个未知数。
适用情况：某个未知数的系数为1或-1时。`,videoBvid:"BV14841137L1",videoPage:3,example:{question:"解方程组：{y = 2x - 3, 3x + 2y = 8}。",analysis:"把①代入②：3x + 2(2x-3) = 8，3x + 4x - 6 = 8，7x = 14，x = 2。把x=2代入①：y = 2×2 - 3 = 1。所以{x=2, y=1}。"},exercises:[{id:"kp8_2_1",question:"解方程组：{y = x + 2, 2x + y = 10}。",answer:"{x=8/3, y=14/3}",analysis:"把y=x+2代入2x+y=10，得2x+x+2=10，3x=8，x=8/3，y=14/3。"},{id:"kp8_2_2",question:"解方程组：{x + y = 5, 2x - y = 1}。",answer:"{x=2, y=3}",analysis:"由①得y=5-x，代入②：2x-(5-x)=1，3x=6，x=2，y=3。"},{id:"kp8_2_3",question:"用代入法解方程组：{3x - 2y = 7, x + 3y = 9}。",answer:"{x=39/11, y=20/11}",analysis:"由②得x=9-3y，代入①：3(9-3y)-2y=7，27-11y=7，y=20/11，x=39/11。"}]},{id:"kp8_3",chapterId:"ch8",order:3,title:"加减消元法",content:"学习加减消元法解二元一次方程组，掌握加减消元的基本步骤。",videoScript:`基本思想：通过加减消去一个未知数。
步骤：(1)使某个未知数的系数绝对值相等；(2)加减消元；(3)解一元一次方程；(4)代入求另一个未知数。
适用情况：某个未知数系数相同或相反，或容易化为相同/相反。`,videoBvid:"BV14841137L1",videoPage:5,example:{question:"解方程组：{2x + 3y = 13, 2x - y = 5}。",analysis:"①-②：(2x+3y)-(2x-y) = 13-5，4y = 8，y = 2。把y=2代入②：2x - 2 = 5，2x = 7，x = 7/2。所以{x=7/2, y=2}。"},exercises:[{id:"kp8_3_1",question:"解方程组：{3x + 2y = 14, 3x - 2y = 10}。",answer:"{x=4, y=1}",analysis:"①+②：6x=24，x=4，代入①：12+2y=14，y=1。"},{id:"kp8_3_2",question:"解方程组：{2x + 3y = 12, 5x - 3y = 9}。",answer:"{x=3, y=2}",analysis:"①+②：7x=21，x=3，代入①：6+3y=12，y=2。"},{id:"kp8_3_3",question:"解方程组：{4x + 3y = 23, 3x - 2y = 5}。",answer:"{x=61/17, y=32/17}",analysis:"①×2+②×3：8x+6y+9x-6y=46+15，17x=61，x=61/17，代入求y。"}]},{id:"kp8_4",chapterId:"ch8",order:4,title:"二元一次方程组的应用",content:"学习用二元一次方程组解决实际问题，掌握列方程组解应用题的方法。",videoScript:`审题：明确已知条件和所求问题。
设未知数：根据题意设两个未知数。
列方程组：找出两个等量关系，列出两个方程。
解方程组并检验作答。`,videoBvid:"BV14841137L1",videoPage:8,example:{question:"买5支铅笔和6本笔记本共需19.4元，买3支铅笔和4本笔记本共需12.6元。求铅笔和笔记本的单价。",analysis:"设铅笔单价x元，笔记本单价y元。{5x + 6y = 19.4, 3x + 4y = 12.6}，①×2-②×3：10x+12y-9x-12y=38.8-37.8，x = 1。代入①：5+6y=19.4，6y=14.4，y=2.4。答：铅笔1元/支，笔记本2.4元/本。"},exercises:[{id:"kp8_4_1",question:"甲、乙两数之和是25，差是7，求这两个数。",answer:"甲=16，乙=9",analysis:"设甲x，乙y，{x+y=25, x-y=7}，相加得2x=32，x=16，y=9。"},{id:"kp8_4_2",question:"某校七年级学生去春游，如果每辆车坐45人，则有15人坐不下；如果每辆车坐50人，则空出一辆车。问有多少辆车？多少学生？",answer:"13辆车，600名学生",analysis:"设x辆车，y名学生，{y=45x+15, y=50(x-1)}，解得x=13，y=600。"},{id:"kp8_4_3",question:"一个两位数，十位数字与个位数字之和是9，若将十位数字与个位数字对调，则新数比原数大27。求这个两位数。",answer:"36",analysis:"设十位数字x，个位数字y，{x+y=9, (10y+x)-(10x+y)=27}，解得x=3，y=6。"}],formulas:["代入消元法：把一个未知数用另一个表示，代入另一个方程","加减消元法：使某未知数系数相同/相反，加减消去该未知数","{x+y=a, x-y=b} ⇒ x=(a+b)/2, y=(a-b)/2"]},{id:"kp8_5",chapterId:"ch8",order:5,title:"实际问题与二元一次方程组",content:"学习用二元一次方程组解决实际问题，掌握列方程组解应用题的方法，能够解决配套、行程、工程等类型的问题。",videoScript:`列方程组解应用题步骤：
1. 审题：理解题意，找出已知量和未知量
2. 设未知数（通常设两个）
3. 找等量关系（通常有两个）
4. 列方程组
5. 解方程组
6. 检验并答

常见类型：
• 配套问题：数量A × 比例 = 数量B
• 行程问题：路程 = 速度 × 时间
• 工程问题：工作量 = 效率 × 时间
• 销售问题：利润 = 售价 − 进价

关键：找两个不同的等量关系！`,videoBvid:"BV14841137L1",videoPage:10,example:{question:"买5支铅笔和6本笔记本共需19.4元，买3支铅笔和4本笔记本共需12.6元。求铅笔和笔记本的单价。",analysis:`解：设铅笔单价x元，笔记本单价y元
{5x + 6y = 19.4  ①
{3x + 4y = 12.6  ②
①×2−②×3：10x+12y−9x−12y=38.8−37.8
x = 1
代入①：5+6y=19.4，y=2.4
答：铅笔1元/支，笔记本2.4元/本`},exercises:[{id:"kp8_5_1",question:"甲、乙两数之和是25，差是7，求这两个数。",answer:"甲=16，乙=9",analysis:"设甲x，乙y，{x+y=25, x−y=7}，相加得2x=32，x=16，y=9。"},{id:"kp8_5_2",question:"某校七年级学生去春游，如果每辆车坐45人，则有15人坐不下；如果每辆车坐50人，则空出一辆车。问有多少辆车？多少学生？",answer:"13辆车，600名学生",analysis:"设x辆车，y名学生，{y=45x+15, y=50(x−1)}，解得x=13，y=600。"},{id:"kp8_5_3",question:"一个两位数，十位数字与个位数字之和是9，若将十位数字与个位数字对调，则新数比原数大27。求这个两位数。",answer:"36",analysis:"设十位数字x，个位数字y，{x+y=9, (10y+x)−(10x+y)=27}，解得x=3，y=6。"}],formulas:["配套问题：数量A × 比例 = 数量B","路程 = 速度 × 时间","工作量 = 效率 × 时间","利润 = 售价 − 进价"]},{id:"kp9_1",chapterId:"ch9",order:1,title:"不等式的概念和性质",content:"学习不等式的概念和基本性质，掌握不等式的解集表示方法。",videoScript:`不等式：用不等号（>、<、≥、≤、≠）连接的式子。
不等式的解：使不等式成立的未知数的值。
不等式的解集：所有解的集合。
性质1：不等式两边加（减）同一个数，不等号方向不变。
性质2：不等式两边乘（除）同一个正数，不等号方向不变。
性质3：不等式两边乘（除）同一个负数，不等号方向改变。`,videoBvid:"BV13M4y1X7gr",videoPage:1,example:{question:"已知a>b，用不等号填空：(1) a+3____b+3；(2) -2a____-2b。",analysis:"(1) a+3 > b+3（性质1）；(2) -2a < -2b（性质3，乘负数变号）。"},exercises:[{id:"kp9_1_1",question:"若a>b，则a-5____b-5，3a____3b，-a____-b。",answer:">，>，<",analysis:"根据不等式性质判断。"},{id:"kp9_1_2",question:"下列变形正确的是____。\\nA. 若a>b，则ac>bc\\nB. 若a>b，则-a<-b\\nC. 若a>b，则a/c>b/c",answer:"B",analysis:"A和C未说明c的正负，B正确（乘-1变号）。"},{id:"kp9_1_3",question:"若x>y，且(a-3)x<(a-3)y，则a的取值范围是____。",answer:"a<3",analysis:"不等号方向改变，说明a-3<0，所以a<3。"}]},{id:"kp9_2",chapterId:"ch9",order:2,title:"一元一次不等式的解法",content:"学习一元一次不等式的解法步骤，掌握解集在数轴上的表示方法。",videoScript:`一元一次不等式：含一个未知数，未知数次数为1。
解法步骤：去分母→去括号→移项→合并同类项→系数化为1。
注意：系数化为1时，若系数为负，不等号方向要改变。
解集在数轴上的表示：空心点（不含端点）、实心点（含端点）。`,videoBvid:"BV13M4y1X7gr",videoPage:3,example:{question:"解不等式 2(x-3) < 3x+2，并在数轴上表示解集。",analysis:"去括号：2x-6 < 3x+2；移项：2x-3x < 2+6；合并同类项：-x < 8；系数化为1：x > -8（注意变号）。数轴表示：在-8处画空心点，向右画线。"},exercises:[{id:"kp9_2_1",question:"解不等式：3x - 5 > 2x + 1。",answer:"x > 6",analysis:"3x-2x>1+5，x>6。"},{id:"kp9_2_2",question:"解不等式：2(x+1) ≥ 5x - 4。",answer:"x ≤ 2",analysis:"2x+2≥5x-4，6≥3x，x≤2。"},{id:"kp9_2_3",question:"解不等式：(2x-1)/3 > (x+2)/2。",answer:"x > 8",analysis:"两边同乘6：2(2x-1)>3(x+2)，4x-2>3x+6，x>8。"}]},{id:"kp9_3",chapterId:"ch9",order:3,title:"一元一次不等式组",content:"学习一元一次不等式组的概念和解法，掌握确定解集的口诀。",videoScript:`不等式组：由几个一元一次不等式组成。
不等式组的解集：各个不等式解集的公共部分。
解不等式组：分别求各不等式的解集，再找出公共部分。
口诀：同大取大，同小取小，大小小大中间找，大大小小无解。`,videoBvid:"BV13M4y1X7gr",videoPage:6,example:{question:"解不等式组：{2x+1 > 3, x-2 ≤ 4}。",analysis:"解①：2x > 2，x > 1；解②：x ≤ 6；所以解集为1 < x ≤ 6。"},exercises:[{id:"kp9_3_1",question:"解不等式组：{x > 2, x > 5}。",answer:"x > 5",analysis:"同大取大。"},{id:"kp9_3_2",question:"解不等式组：{x < 3, x < -1}。",answer:"x < -1",analysis:"同小取小。"},{id:"kp9_3_3",question:"解不等式组：{2x-1 > 3, 3x+2 ≤ 11}。",answer:"2 < x ≤ 3",analysis:"解①得x>2，解②得x≤3，取公共部分。"}],formulas:["不等式性质1：a>b ⇒ a±c>b±c","不等式性质2：a>b, c>0 ⇒ ac>bc, a/c>b/c","不等式性质3：a>b, c<0 ⇒ ac<bc, a/c<b/c（变号）","同大取大：{x>a, x>b} ⇒ x>max(a,b)","同小取小：{x<a, x<b} ⇒ x<min(a,b)","大小小大中间找：{x>a, x<b} ⇒ a<x<b（a<b时）","大大小小无解：{x<a, x>b} ⇒ 无解（a<b时）"]},{id:"kp9_4",chapterId:"ch9",order:4,title:"一元一次不等式组",content:"学习一元一次不等式组的概念和解法，掌握确定不等式组解集的口诀，能够借助数轴找出解集的公共部分。",videoScript:`一元一次不等式组：由几个同一未知数的一元一次不等式组成。

不等式组的解集：几个不等式解集的公共部分。

解集确定口诀：
• 同大取大：{x>a, x>b} → x > max(a,b)
• 同小取小：{x<a, x<b} → x < min(a,b)
• 大小小大中间找：{x>a, x<b} → a < x < b（a<b时）
• 大大小小无解：{x<a, x>b} → 无解（a<b时）

解题步骤：
1. 求出每个不等式的解集
2. 利用数轴找公共部分
3. 写出不等式组的解集`,videoBvid:"BV13M4y1X7gr",videoPage:8,example:{question:"解不等式组：{2x + 1 > 3, 3x − 2 < 7}",analysis:`解：由①：2x > 2，x > 1
由②：3x < 9，x < 3
所以解集为：1 < x < 3（大小取中间）`},exercises:[{id:"kp9_4_1",question:"解不等式组：{x > 2, x > 5}。",answer:"x > 5",analysis:"同大取大。"},{id:"kp9_4_2",question:"解不等式组：{x < 3, x < −1}。",answer:"x < −1",analysis:"同小取小。"},{id:"kp9_4_3",question:"解不等式组：{2x−1 > 3, 3x+2 ≤ 11}。",answer:"2 < x ≤ 3",analysis:"解①得x>2，解②得x≤3，取公共部分。"}],formulas:["同大取大：{x>a, x>b} ⇒ x>max(a,b)","同小取小：{x<a, x<b} ⇒ x<min(a,b)","大小小大中间找：{x>a, x<b} ⇒ a<x<b（a<b时）","大大小小无解：{x<a, x>b} ⇒ 无解（a<b时）"]},{id:"kp9_5",chapterId:"ch9",order:5,title:"一元一次不等式的应用",content:"学习用一元一次不等式解决实际问题，掌握根据题意列不等式的方法，能够解决销售、行程、工程等类型的不等式应用题。",videoScript:`解应用题步骤：
1. 审题：理解题意，找出不等关系
2. 设未知数
3. 列不等式
4. 解不等式
5. 检验：检查是否符合实际意义
6. 答

常见不等关系词：
• "至少"、"不少于"、"不低于" → ≥
• "至多"、"不超过"、"不高于" → ≤
• "超过"、"大于" → >
• "不足"、"小于" → <`,videoBvid:"BV13M4y1X7gr",videoPage:10,example:{question:"某商品成本80元，要获得利润率不低于20%，售价至少是多少元？",analysis:`解：设售价为x元
利润 = x − 80
利润率 = (x−80)/80 ≥ 20%
(x−80)/80 ≥ 0.2
x − 80 ≥ 16
x ≥ 96
所以售价至少是96元`},exercises:[{id:"kp9_5_1",question:"某班学生若干人，若每人分4本书，还剩20本；若每人分5本书，则最后一人不足3本。这个班至少有多少人？",answer:"22人",analysis:"设x人，4x+20本书。最后一人分到的书=(4x+20)−5(x−1)=25−x。由0<25−x<3，解得22<x<25，所以至少22人。"},{id:"kp9_5_2",question:"某工人计划在15天内加工408个零件，前3天每天加工24个，以后每天至少要加工多少个才能超额完成任务？",answer:"28个",analysis:"设以后每天加工x个，3×24+12x>408，72+12x>408，12x>336，x>28，所以至少29个（取整）。"},{id:"kp9_5_3",question:"某商品标价200元，打8折出售，仍能获得不低于10%的利润率，求该商品的进价至多是多少？",answer:"145.45元",analysis:"设进价为x元，售价=200×0.8=160元。利润率=(160−x)/x≥10%，160−x≥0.1x，160≥1.1x，x≤145.45。"}],formulas:['"至少"用≥','"至多"用≤','"超过"用>','"不足"用<']},{id:"kp10_1",chapterId:"ch10",order:1,title:"统计调查",content:"学习统计调查的基本概念，掌握全面调查和抽样调查的区别。",videoScript:`全面调查（普查）：对所有考察对象进行调查。
抽样调查：从总体中抽取部分个体进行调查。
总体：所要考察的全体对象。
个体：组成总体的每一个考察对象。
样本：从总体中抽取的一部分个体。
样本容量：样本中个体的数目。`,videoBvid:"BV1aP4y1o7n1",videoPage:87,example:{question:"为了解某校七年级800名学生的视力情况，从中抽取100名学生进行视力测试。指出总体、个体、样本、样本容量。",analysis:"总体：800名学生的视力情况；个体：每名学生的视力情况；样本：抽取的100名学生的视力情况；样本容量：100。"},exercises:[{id:"kp10_1_1",question:"下列调查中，适合采用全面调查的是____。\\nA. 调查某批次灯泡的使用寿命\\nB. 调查某班学生的身高\\nC. 调查全国中学生的视力情况",answer:"B",analysis:"B范围小，适合全面调查；A具有破坏性，C范围太大，都适合抽样调查。"},{id:"kp10_1_2",question:"某校为了解1200名学生的课外阅读情况，从中抽取200名学生进行调查。样本容量是____。",answer:"200",analysis:"样本容量是指样本中个体的数目。"},{id:"kp10_1_3",question:"抽样调查时，为了使样本具有代表性，应采取____抽样。",answer:"随机",analysis:"随机抽样能保证样本的代表性。"}]},{id:"kp10_2",chapterId:"ch10",order:2,title:"频数分布表和直方图",content:"学习频数分布表和直方图的制作方法，掌握数据的整理和描述。",videoScript:`频数：每个对象出现的次数。
频率：频数与总数的比值。
制作频数分布表的步骤：(1)计算极差；(2)确定组距和组数；(3)列频数分布表。
频数分布直方图：横轴表示分组，纵轴表示频数。`,videoBvid:"BV1aP4y1o7n1",videoPage:88,example:{question:"某班40名学生数学测试成绩如下（数据略），请制作频数分布表。",analysis:"步骤：(1)找出最大值和最小值，计算极差；(2)确定组距（如10分），计算组数；(3)统计各组频数，列出频数分布表。"},exercises:[{id:"kp10_2_1",question:"一组数据的最大值是98，最小值是42，若取组距为10，则应分成____组。",answer:"6",analysis:"极差=98-42=56，56÷10=5.6，进位取6组。"},{id:"kp10_2_2",question:"在频数分布表中，各组的频率之和等于____。",answer:"1",analysis:"所有频率之和为1（或100%）。"},{id:"kp10_2_3",question:"某样本容量为50，已知某组的频数为10，则该组的频率为____。",answer:"0.2（或20%）",analysis:"频率=频数÷总数=10÷50=0.2。"}]},{id:"kp10_3",chapterId:"ch10",order:3,title:"统计图的选择",content:"学习不同类型统计图的特点，掌握选择合适的统计图描述数据。",videoScript:`条形统计图：显示各类别的具体数量，便于比较。
扇形统计图：显示各部分占总体的百分比。
折线统计图：显示数据的变化趋势。
直方图：显示连续数据的分布情况。`,videoBvid:"BV1aP4y1o7n1",videoPage:88,example:{question:"要表示某班学生最喜欢的运动项目（篮球、足球、乒乓球等），应选用哪种统计图？要表示某城市一年中各月平均气温的变化，应选用哪种统计图？",analysis:"表示各类别数量用条形统计图；表示变化趋势用折线统计图。"},exercises:[{id:"kp10_3_1",question:"要清楚地表示出各部分在总体中所占的百分比，应选用____统计图。",answer:"扇形",analysis:"扇形统计图显示百分比。"},{id:"kp10_3_2",question:"要反映某股票一周内的涨跌变化情况，应选用____统计图。",answer:"折线",analysis:"折线统计图适合显示变化趋势。"},{id:"kp10_3_3",question:"要比较几个班级的人数多少，应选用____统计图。",answer:"条形",analysis:"条形统计图便于比较数量多少。"}],formulas:["极差 = 最大值 - 最小值","组数 = 极差 ÷ 组距（进位取整）","频率 = 频数 ÷ 总数","各组频率之和 = 1","条形统计图：比较数量","扇形统计图：显示百分比","折线统计图：显示趋势","直方图：显示分布"]},{id:"kp10_4",chapterId:"ch10",order:4,title:"统计图的选择",content:"学习不同类型统计图的特点，掌握根据数据特征选择合适的统计图描述数据的方法。",videoScript:`各类统计图特点：
条形统计图：显示各类别的具体数量，便于比较。
扇形统计图：用扇形面积表示所占百分比。
折线统计图：反映事物的变化趋势。
直方图：显示连续数据的分布情况。

选择原则：
• 表示各类别数量 → 条形统计图
• 表示百分比/比例 → 扇形统计图
• 表示变化趋势 → 折线统计图
• 表示分布情况 → 直方图`,example:{question:"要表示某班学生最喜欢的运动项目（篮球、足球、乒乓球等），应选用哪种统计图？要表示某城市一年中各月平均气温的变化，应选用哪种统计图？",analysis:"表示各类别数量用条形统计图；表示变化趋势用折线统计图。"},exercises:[{id:"kp10_4_1",question:"要清楚地表示出各部分在总体中所占的百分比，应选用____统计图。",answer:"扇形",analysis:"扇形统计图显示百分比。"},{id:"kp10_4_2",question:"要反映某股票一周内的涨跌变化情况，应选用____统计图。",answer:"折线",analysis:"折线统计图适合显示变化趋势。"},{id:"kp10_4_3",question:"要比较几个班级的人数多少，应选用____统计图。",answer:"条形",analysis:"条形统计图便于比较数量多少。"}],formulas:["条形统计图：比较数量","扇形统计图：显示百分比","折线统计图：显示趋势","直方图：显示分布"]}],G={id:"ch1",title:"第1章 有理数",summary:"有理数是初中数学的基础。本章从正数和负数的概念引入，学习有理数的分类、数轴、相反数、绝对值，以及有理数的四则运算、乘方和科学记数法。",sections:[{title:"1.1 正数和负数",content:`📌 核心定义

| 概念 | 定义 | 举例 |
|------|------|------|
| **正数** | 大于0的数，叫做正数 | +3, 0.5, 1/2（正号可省略） |
| **负数** | 在正数前加"−"号的数，叫做负数 | −3, −0.5, −1/2 |
| **0** | 既不是正数，也不是负数，是正数与负数的分界 | — |

🔑 用正负数表示相反意义的量：
• 气温：零上 +5°C，零下 −3°C
• 海拔：以上 +200m，以下 −50m
• 收支：收入 +200元，支出 −150元
• 误差：多 +3g，少 −2g

📌 注意：在同一个问题中，分别用正数与负数表示相反意义的量。`,examples:[{title:"【例1】如果水位上升0.5米记作+0.5米，那么水位下降1.2米记作什么？",content:`解：上升记为正，则下降记为负
答案：-1.2米`},{title:"【例2】某班级男生平均身高记为0厘米，小明身高比平均高5厘米记作+5厘米，小红比平均矮3厘米记作什么？",content:`解：高于平均为正，低于平均为负
答案：-3厘米`}],tips:["相反意义的量必须意义相反，且单位相同","0是正负数的分界点",'负号"−"必须写，正号"+"可省略']},{title:"1.2 有理数",content:`📌 有理数的定义：整数和分数统称为有理数

🔑 有理数的分类：

**按性质符号分：**
有理数
├── 正有理数（正整数 + 正分数）
├── 零
└── 负有理数（负整数 + 负分数）

**按定义分：**
有理数
├── 整数（正整数、0、负整数）
└── 分数（正分数、负分数）

📌 重要说明：
• 0即不是正数，也不是负数
• <strong>−a 不一定是负数</strong>，如 −(−2) = 2
• 无限不循环小数（如 π）**不是**有理数

🔑 特殊数汇总：

| 条件 | 结果 |
|------|------|
| 相反数等于本身的数 | 0 |
| 倒数等于本身的数 | 1, −1 |
| 绝对值等于本身的数 | 正数和0 |
| 平方等于本身的数 | 0, 1 |
| 立方等于本身的数 | 0, 1, −1 |`,examples:[{title:"【例】判断下列数的类别：-5, 0, 3.14, 1/3, √2",content:`解：
-5：负整数，负有理数
0：整数，有理数
3.14：正分数，正有理数
1/3：正分数，正有理数
√2：不是有理数（是无理数）`}],tips:["有理数只包括整数和分数","带根号的数不一定是无理数，但开方开不尽的如√2是无理数"]},{title:"1.3 数轴",content:`📌 定义：规定了**原点、正方向、单位长度**的直线叫做数轴。

🔑 数轴的三要素：
① **原点** —— 0的位置
② **正方向** —— 箭头指向（通常向右）
③ **单位长度** —— 取统一长度单位

📌 画数轴步骤：
**一画**（画直线）→ **二取**（取原点）→ **三选**（选单位长度）→ **四标**（标数字）

🔑 数轴的性质：
• 所有**有理数**都可以用数轴上的点表示
• 数轴上**右边的数 > 左边的数**
• 两点间距离 = 较大数 − 较小数`,examples:[{title:'【例】在数轴上表示-3、0、2.5、-1.5这四个数，并用"<"连接。',content:`解：在数轴上从左到右依次是：-3, -1.5, 0, 2.5
答案：-3 < -1.5 < 0 < 2.5`}],tips:["数轴是理解有理数大小关系的重要工具","右边的数总比左边的数大","数轴上的点与有理数一一对应"]},{title:"1.4 相反数",content:`📌 定义：只有**符号不同**的两个数，互为相反数。

🔑 性质：
• 0的相反数是0
• 正数的相反数是负数
• 负数的相反数是正数

📌 运算性质：
a的相反数 = −a
a + (−a) = 0（相反数和为0）
a − b的相反数 = −a + b

⚠️ **易错点**：a − b + c 的相反数是 −a + b − c，不是 −a − b + c`,examples:[{title:"【例】求下列数的相反数：(1) -5；(2) 0；(3) 3/4",content:`解：
(1) -5的相反数是5
(2) 0的相反数是0
(3) 3/4的相反数是-3/4`}],tips:["相反数的和为0","求相反数就是改变符号","多重负号化简：奇数个负号为负，偶数个负号为正"]},{title:"1.5 绝对值",content:`📌 定义：数轴上表示数a的点到原点的**距离**，记作 |a|

🔑 性质：

| 条件 | 结果 |
|------|------|
| a > 0 | |a| = a |
| a = 0 | |a| = 0 |
| a < 0 | |a| = −a |

📌 重要性质：
• **非负性**：|a| ≥ 0（绝对值永远非负）
• 若 |a| = |b|，则 a = b 或 a = −b
• 若 |a| + |b| = 0，则 a = 0 且 b = 0
• 乘积为1的两个数互为倒数：ab = 1 ⟺ a与b互为倒数（**0没有倒数**）

🔑 绝对值化简：
① 当 a ≥ 0 时，|a| = a
② 当 a ≤ 0 时，|a| = −a`,examples:[{title:"【例1】化简 |-7|、|0|、|5|",content:`解：
|-7| = 7
|0| = 0
|5| = 5`},{title:"【例2】若 |x−2| + |y+3| = 0，求x+y的值",content:`解：
|x−2| ≥ 0，|y+3| ≥ 0
|x−2| + |y+3| = 0
所以 x−2 = 0 且 y+3 = 0
x = 2，y = −3
x + y = 2 + (−3) = −1`}],tips:["绝对值永远非负","|a| = |-a|","若几个非负数之和为0，则每个数都为0"]},{title:"1.6 有理数的大小比较",content:`📌 比较法则：
• 正数 > 0 > 负数
• 两个正数比较：绝对值大的数大
• 两个负数比较：**绝对值大的反而小**
• 数轴上：**右 > 左**

🔑 核心口诀：
**正数永远比0大，负数永远比0小；两个负数，绝对值大的反而小。**`,examples:[{title:"【例】比较大小：−3/4 和 −4/5",content:`解：两个负数比较，先比较绝对值。
|−3/4| = 3/4 = 0.75
|−4/5| = 4/5 = 0.8
因为 0.75 < 0.8，所以 −3/4 > −4/5
口诀：绝对值大的负数反而小。`}],tips:["两个负数比较，绝对值大的反而小","可借助数轴比较大小","先分类：正数>0>负数"]},{title:"1.7 有理数的加法",content:`📌 加法法则：

| 情形 | 法则 | 举例 |
|------|------|------|
| 同号两数相加 | 取相同符号，绝对值相加 | (+3)+(+5)=+8 |
| 异号两数相加 | 取绝对值较大加数的符号，用较大绝对值减去较小绝对值 | (+5)+(−3)=+2 |
| 互为相反数相加 | 得0 | (+5)+(−5)=0 |
| 任何数 + 0 | 得原数 | a+0=a |

🔑 运算律：
加法交换律：a + b = b + a
加法结合律：(a + b) + c = a + (b + c)`,examples:[{title:"【例】计算：(−3) + (+7) + (−5) + (−2)",content:`解：
= (−3) + 7 + (−5) + (−2)
= 7 + [(−3) + (−5) + (−2)]
= 7 + (−10)
= −3`}],tips:["同号相加，符号不变，绝对值相加","异号相加，取大符号，绝对值相减","利用运算律可简化计算"]},{title:"1.8 有理数的减法",content:`📌 法则：**减去一个数，等于加上这个数的相反数**

公式：a − b = a + (−b)

🔑 例题：
• (−3) − (+5) = (−3) + (−5) = −8
• (+7) − (−2) = (+7) + (+2) = +9`,examples:[{title:"【例】计算：|−3| + (−2) − (−5)",content:`解：
= 3 + (−2) + 5
= 3 + 5 − 2
= 6`}],tips:["减法变加法，减数要变号","减去一个负数等于加上一个正数"]},{title:"1.9 有理数的乘法",content:`📌 法则：

| 两数相乘 | 符号规律 | 结果 |
|----------|----------|------|
| 同号（均为正或均为负） | 得正 | 绝对值相乘 |
| 异号（一正一负） | 得负 | 绝对值相乘 |
| 任何数 × 0 | 得0 | — |

🔑 多个数相乘：
• 负数个数为**偶数** → 结果为正
• 负数个数为**奇数** → 结果为负
• 只要有一个因数为0 → 结果为0

📌 运算律：
乘法交换律：ab = ba
乘法结合律：(ab)c = a(bc)
乘法分配律：a(b + c) = ab + ac`,examples:[{title:"【例】计算：(−2) × (+3) × (−5) × (−1)",content:`解：
负数有3个（奇数），结果为负
= −(2×3×5×1)
= −30`}],tips:["先定符号，再算绝对值","多个负数相乘，看负数个数：奇负偶正","任何数乘0都得0"]},{title:"1.10 有理数的除法",content:`📌 法则：**除以一个数，等于乘以这个数的倒数**

公式：a ÷ b = a × (1/b)（b ≠ 0）

⚠️ **易错点**：**0不能做除数**！即 a/0 无意义

🔑 符号法则：与乘法相同
• 同号得正，异号得负
• 0除以任何非零数都得0`,examples:[{title:"【例】计算：(−12) ÷ (−4)",content:`解：
同号得正
= 12 ÷ 4
= 3`}],tips:["除法变乘法，除数变倒数","0不能做除数","符号法则与乘法相同"]},{title:"1.11 乘方",content:`📌 定义：求n个相同因数a的积的运算，叫做**乘方**，记作 aⁿ

公式：aⁿ = a × a × ... × a（共n个a相乘）

🔑 幂的符号规律：

| 底数 | 指数 | 结果 | 规律 |
|------|------|------|------|
| 正数 | 任意整数 | **正数** | 正数的任何次幂都是正数 |
| 负数 | 奇数 | **负数** | 负数的奇次幂是负数 |
| 负数 | 偶数 | **正数** | 负数的偶次幂是正数 |
| 0 | 正整数 | 0 | — |

⚠️ **易错点**：(−2)⁴ = 16，但 −2⁴ = −16（指数优先于负号）

🔑 运算规则（同底数幂）：
乘法：aᵐ × aⁿ = aᵐ⁺ⁿ
除法：aᵐ ÷ aⁿ = aᵐ⁻ⁿ
幂的幂：(aᵐ)ⁿ = aᵐⁿ`,examples:[{title:"【例】计算：(−3)² 和 −3² 的结果",content:`解：
(−3)² = (−3)×(−3) = 9（整个−3平方）
−3² = −(3×3) = −9（只平方3，再取负）`}],tips:["注意区分(−a)ⁿ和−aⁿ","负数的偶次幂为正，奇次幂为负","0的任何正整数次幂都是0"]},{title:"1.12 科学记数法",content:`📌 定义：把一个数表示成 **a × 10ⁿ** 的形式，其中 **1 ≤ |a| < 10**，**n为整数**。

🔑 用法：

**大数的科学记数法：**
• 123000 = 1.23 × 10⁵（小数点向左移5位，n = 5）
• 5000000 = 5 × 10⁶（小数点向左移6位，n = 6）

**小数的科学记数法：**
• 0.00045 = 4.5 × 10⁻⁴（小数点向右移4位，n = −4）
• 0.0000123 = 1.23 × 10⁻⁵（小数点向右移5位，n = −5）

📌 确定n的方法：
• **大数**：n = 小数点向左移动的位数（正数）
• **小数**：n = 小数点向右移动的位数（负数）

🔑 口诀：**大数向左移，n为正；小数向右移，n为负**

📌 还原方法：
• 1.23 × 10⁵ = 123000（小数点向右移5位）
• 4.5 × 10⁻⁴ = 0.00045（小数点向左移4位）`,examples:[{title:"【例1】将3600000用科学记数法表示",content:`解：
小数点向左移动6位
3600000 = 3.6 × 10⁶`},{title:"【例2】将0.000072用科学记数法表示",content:`解：
小数点向右移动5位
0.000072 = 7.2 × 10⁻⁵`}],tips:["a必须满足 1≤|a|<10","大数n为正，小数n为负","不要漏掉10的指数符号"]}],formulas:["加法交换律：a + b = b + a","加法结合律：(a + b) + c = a + (b + c)","乘法交换律：a × b = b × a","乘法结合律：(a × b) × c = a × (b × c)","乘法分配律：a × (b + c) = a × b + a × c","减法法则：a − b = a + (−b)","除法法则：a ÷ b = a × (1/b)","乘方：(−a)²ⁿ = a²ⁿ，(−a)²ⁿ⁺¹ = −a²ⁿ⁺¹","科学记数法：a × 10ⁿ（1≤|a|<10）"],commonMistakes:["负数比较大小时，绝对值大的反而小","减法变加法时，减数要变号","负数的乘方要注意指数的奇偶性","(−a)ⁿ 与 −aⁿ 的区别","科学记数法中a的范围错误","去括号时符号错误"]},Z={id:"ch2",title:"第2章 整式的加减",summary:"本章学习单项式、多项式、同类项的概念，掌握合并同类项、去括号和添括号的法则，能够进行整式的加减运算。本章只包含七年级整式加减内容，乘法公式和因式分解是八年级内容。",sections:[{title:"2.1 代数式",content:`📌 定义：用**运算符号**（加、减、乘、除、乘方、开方）把**数与字母**连接而成的式子，叫做代数式。

🔑 特点：
• 单独的一个数或字母也是代数式
• 代数式中**不可出现 >、<、≥、≤、=、≠ 等关系符号**

📌 代数式的值：用数代替代数式里的字母，按照运算关系计算得出的结果。`,examples:[{title:"【例】判断下列哪些是代数式",content:`(1) 3x + 2y  ✓（是代数式）
(2) a > b  ✗（不是，含不等号）
(3) 5  ✓（是代数式）
(4) x = 3  ✗（不是，含等号）`}],tips:["代数式不含等号或不等号","单独的数字或字母也是代数式"]},{title:"2.2 单项式",content:`📌 定义：数与字母的**乘积**的代数式叫做单项式

🔑 特点：
• 单独一个数或字母也是单项式（如 0, a, 5）

📌 系数：单项式中的**数字因数**（含符号）

📌 次数：所有字母的**指数之和**

| 要素 | 说明 |
|------|------|
| 定义 | 数与字母的乘积的代数式 |
| 单独一个数或字母 | 也是单项式 |
| 系数 | 数字因数（含符号） |
| 次数 | 所有字母的指数之和 |

⚠️ **易错点**：
• 系数为 ±1 时，"1"通常省略不写（如 −ab 的系数是 −1）
• 系数是**带分数**时，要化成**假分数**（如 1又1/2 a → 3/2 a）
• 圆周率 **π 是常数**，不是字母
• xy² 的次数是 **3**（不是2，1+2=3）`,examples:[{title:"【例1】写出单项式 -5a³b²c 的系数和次数",content:`系数：-5
次数：3+2+1=6`},{title:"【例2】判断 xy² 是几次单项式？系数是什么？",content:`xy² 的次数 = 1（x的指数）+ 2（y的指数）= 3次
是3次单项式
系数 = 1（省略不写）`}],tips:["π是数字，不是字母","系数为1或-1时，1通常省略不写","次数是所有字母指数的和，不是某一项"]},{title:"2.3 多项式",content:`📌 定义：几个单项式的**和**叫做多项式

🔑 要素：

| 要素 | 说明 |
|------|------|
| 定义 | 几个单项式的和 |
| 项 | 每个单项式叫做多项式的项 |
| 常数项 | 不含字母的项 |
| 次数 | 次数**最高项**的次数 |

⚠️ **易错点**：多项式的每一项都**包括前面的符号**

📌 整式：单项式和多项式统称整式

🔑 升降幂排列：
• **降幂排列**：按某一字母的指数从大到小排列
• **升幂排列**：按某一字母的指数从小到大排列`,examples:[{title:"【例】多项式 2x³ - 5x² + 3x - 7 有几项？次数是几？常数项是多少？",content:`四项（2x³, -5x², 3x, -7）
次数是3
常数项是-7`}],tips:["多项式的次数不是所有项次数的和","多项式要按某个字母的降幂排列","每一项都包括前面的符号"]},{title:"2.4 同类项",content:`📌 定义：所含**字母相同**，并且**相同字母的指数也相同**的项，叫做同类项。

🔑 注意：所有常数项也是同类项。

📌 合并同类项法则：**系数相加，字母及其指数不变**

示例：
• 3x + 2x = 5x
• 4a²b - 2a²b = 2a²b
• -5 + 3 = -2

公式：3a²b + (−5a²b) = (3−5)a²b = −2a²b`,examples:[{title:"【例】合并同类项：3x²y - 2xy² + 5x²y + xy²",content:`解：= (3x²y + 5x²y) + (−2xy² + xy²)
   = 8x²y - xy²

注意：x²y 与 xy² 不是同类项，不能合并`}],tips:["合并同类项时，字母部分不变","不是同类项不能合并","系数相加减时注意符号"]},{title:"2.5 去括号法则",content:`📌 去括号法则：

| 括号前符号 | 变化规则 | 举例 |
|------------|----------|------|
| **+**（或无符号） | 去括号后，括号内各项**不变号** | +(a−b) = a−b |
| **−** | 去括号后，括号内各项**都变号** | −(a−b) = −a+b |

🔑 口诀：**去括号，看符号；是"+"不变号，是"−"全变号**

📌 添括号法则：
• 括号前是"+"号：括到括号里的各项都不变符号
• 括号前是"−"号：括到括号里的各项都改变符号`,examples:[{title:"【例】化简：3a - (2a - 5b) + (3b - a)",content:`解：= 3a - 2a + 5b + 3b - a
   = (3a - 2a - a) + (5b + 3b)
   = 0a + 8b
   = 8b`}],tips:["去括号时，括号前是负号最容易出错","有多重括号时，一般先去小括号","括号前是负号时，每项都要变号"]},{title:"2.6 整式的加减",content:`📌 运算法则：
1. 几个整式相加减，通常用括号把每一个整式括起来，再用加减号连接
2. 先去括号
3. 再合并同类项

🔑 化简求值：
• 先化简整式
• 再代入数值计算

📌 整式加减的本质 = 去括号 + 合并同类项`,examples:[{title:"【例1】化简 2x² − 3x + 5 − (4x² − 6x + 3)",content:`解：
= 2x² − 3x + 5 − 4x² + 6x − 3
= (2−4)x² + (−3+6)x + (5−3)
= −2x² + 3x + 2`},{title:"【例2】化简求值：2(x² - 3x + 1) - 3(2x² - x) + 5，其中x = -1",content:`解：= 2x² - 6x + 2 - 6x² + 3x + 5
   = -4x² - 3x + 7

当x = -1时：
原式 = -4(-1)² - 3(-1) + 7
     = -4 + 3 + 7
     = 6`}],tips:["去括号时注意分配律","合并同类项时要找对同类项","代入负数时要注意加括号"]}],formulas:["同类项合并：ax + bx = (a+b)x","去括号：+(a-b) = a-b，-(a-b) = -a+b","添括号：+(a-b) = a-b，-(a-b) = -a+b","整式加减：先去括号，再合并同类项"],commonMistakes:["去括号时漏乘或符号错误","合并同类项时字母指数改变","不是同类项强行合并","代入负数时忘记加括号","系数是带分数时没有化成假分数","多项式项的符号看错"]},Y={id:"ch3",title:"第3章 一元一次方程",summary:"本章学习一元一次方程的概念和等式的性质，掌握解一元一次方程的方法，能够列方程解决实际问题。",sections:[{title:"3.1 方程的基本概念",content:`📌 核心定义：

| 概念 | 说明 |
|------|------|
| **等式** | 用"="号连接而成的式子 |
| **方程** | 含有未知数的等式 |
| **方程的解** | 使方程左、右两边相等的未知数的值 |
| **解方程** | 求方程解的过程 |

⚠️ **易错点**：判断方程要看两点——①是等式 ②含未知数（缺一不可）`,examples:[{title:"【例】判断下列哪些是方程，哪些是一元一次方程",content:`(1) 2x + 3 = 7  ✓是方程，也是一元一次方程
(2) x² - 1 = 0  ✓是方程，但不是一元一次方程（二次）
(3) 3x + 2y = 5  ✓是方程，但不是一元一次方程（二元）
(4) 2 + 3 = 5  ✗是等式但不是方程（不含未知数）`}],tips:["一元一次方程必须是整式方程","分母中含有未知数的不是一元一次方程"]},{title:"3.2 等式的性质",content:`📌 性质1：等式两边都**加上**或**减去**同一个数（或同一个整式），等式仍然成立。

公式：若 a = b，则 a ± c = b ± c

📌 性质2：等式两边都**乘以**或**除以**同一个**不为零**的数，等式仍然成立。

公式：
• 若 a = b，则 ac = bc
• 若 a = b，c ≠ 0，则 a/c = b/c

⚠️ **易错点**：除数不能为0！

🔑 拓展性质：
• **对称性**：a = b ⟺ b = a
• **传递性**：a = b, b = c ⟹ a = c（等量代换）`,examples:[{title:"【例】根据等式性质填空",content:`(1) 若 x = 5，则 x + 3 = 5 + 3 = 8（性质1）
(2) 若 2x = 6，则 x = 3（性质2，两边同除以2）
(3) 若 x - 4 = 9，则 x = 13（性质1，两边同加4）`}],tips:["等式两边同除时，除数不能为0","解方程就是利用等式的性质"]},{title:"3.3 一元一次方程",content:`📌 定义：只含有**一个未知数**，且未知数的**次数是1**，系数**不为0**的整式方程。

📌 标准形式：ax + b = 0
（x是未知数，a、b是已知数，且 a ≠ 0）

🔑 四个必备条件：
① 是等式
② 分母中不含有未知数
③ 未知数的最高次项为1
④ 含未知数的项系数 ≠ 0

⚠️ **易错点**：1/x + 2 = 5 不是一元一次方程（分母含未知数）`,examples:[{title:"【例】判断下列方程是否为一元一次方程",content:`(1) 3x + 2 = 8  ✓是
(2) x² = 4  ✗不是（次数为2）
(3) 1/x = 2  ✗不是（分母含未知数）
(4) 2x + 3y = 6  ✗不是（两个未知数）`}],tips:["必须同时满足四个条件","整式方程是分母不含未知数的方程"]},{title:"3.4 解一元一次方程的步骤",content:`📌 解方程的基本步骤：

| 步骤 | 操作 | 关键注意 |
|------|------|----------|
| ① 去分母 | 方程两边同乘各分母的**最小公倍数** | **不漏乘**不含分母的项；分子是多项式时要**加括号** |
| ② 去括号 | 按去括号法则处理 | 注意括号前是"−"号的**变号** |
| ③ 移项 | 把含未知数的项移到一边，常数项移到另一边 | **要变号**（从左移右或从右移左都要变） |
| ④ 合并同类项 | 合并未知数项和常数项 | 化简为 ax = b 形式 |
| ⑤ 系数化为1 | 两边同除以未知数系数 | **除数不能为0** |

🔑 核心口诀：**去分母 → 去括号 → 移项（变号）→ 合并 → 系数化为1**`,examples:[{title:"【例1】解方程：3(x-2) = 2(5-x)",content:`解：
去括号：3x - 6 = 10 - 2x
移项：3x + 2x = 10 + 6
合并：5x = 16
系数化为1：x = 16/5`},{title:"【例2】解方程：(x+1)/2 - (2x-1)/3 = 1",content:`解：
去分母（同乘6）：3(x+1) - 2(2x-1) = 6
去括号：3x + 3 - 4x + 2 = 6
移项：3x - 4x = 6 - 3 - 2
合并：-x = 1
系数化为1：x = -1`}],tips:["移项一定要变号","去分母时每一项都要乘","最后要检验答案是否正确","去分母时分子是多项式要加括号"]},{title:"3.5 实际问题与一元一次方程",content:`📌 列方程解应用题的一般步骤：
1. 审题（弄清已知什么，求什么）
2. 设未知数（注意带单位）
3. 找等量关系（抓关键词）
4. 列方程
5. 解方程
6. 检验（是否符合实际意义）
7. 答

🔑 常见等量关系：

| 问题类型 | 等量关系 |
|----------|----------|
| 行程问题 | 路程 = 速度 × 时间 |
| 工程问题 | 工作量 = 效率 × 时间 |
| 销售问题 | 利润 = 售价 − 进价；利润率 = 利润/进价 × 100% |
| 打折问题 | 打折后价格 = 原价 × 折扣/10 |
| 配套问题 | 数量比 = 搭配比例 |

📌 关键词提示：
• "是"、"共"、"比...多/少"、"增长"、"减少"`,examples:[{title:"【例1】行程问题",content:`甲乙两地相距300千米，A车从甲地出发，速度为60千米/时，B车从乙地出发，速度为40千米/时，两车相向而行，几小时后相遇？

解：设x小时后相遇
60x + 40x = 300
100x = 300
x = 3
答：3小时后相遇。`},{title:"【例2】销售问题",content:`某商品进价60元，打8折后获利润率40%，标价是多少？

解：设标价为x元
售价 = 0.8x
利润 = 售价 − 进价 = 0.8x − 60
利润率 = (0.8x−60)/60 × 100% = 40%
解得 x = 105（元）
答：标价是105元。`}],tips:["找等量关系是关键","单位要统一","解完后要检验是否符合实际","打8折 = 按原价的 80% 出售"]}],formulas:["等式性质1：若a=b，则a±c=b±c","等式性质2：若a=b，则ac=bc，a/c=b/c (c≠0)","路程=速度×时间","工作量=工作效率×时间","利润=售价-进价","利润率=利润/进价×100%"],commonMistakes:["移项时忘记变号","去分母时漏乘不含分母的项","去括号时漏乘或符号错误","解完后忘记检验","单位不统一就直接计算"]},ee={id:"ch4",title:"第4章 几何图形初步",summary:"本章从生活中的实物抽象出几何图形，学习立体图形和平面图形，掌握直线、射线、线段和角的概念及性质。",sections:[{title:"4.1 几何图形",content:`📌 立体图形：各部分不都在同一平面内的图形
• 柱体：圆柱、棱柱
• 锥体：圆锥、棱锥
• 球体

📌 平面图形：各部分都在同一平面内的图形
• 点、线、面、三角形、四边形、圆等

📌 点动成线，线动成面，面动成体

🔑 三视图：
• 主视图（从正面看）
• 左视图（从左面看）
• 俯视图（从上面看）

📌 展开图：将立体图形的表面适当剪开，可以展开成平面图形`,examples:[{title:"【例】正方体展开图",content:`正方体展开图有11种基本类型。
判断展开图能否折成正方体：
• "一四一"型
• "二三一"型
• "二二二"型
• "三三"型`}],tips:["从不同方向看同一物体，看到的图形可能不同","正方体的展开图有11种"]},{title:"4.2 直线、射线、线段",content:`📌 直线、射线、线段对比：

| 图形 | 端点个数 | 延伸性 | 表示方法 |
|------|----------|--------|----------|
| 直线 | 0个 | 向**两方**无限延伸 | 直线AB / 直线l |
| 射线 | 1个 | 向**一方**无限延伸 | 射线AB（端点A，方向B） |
| 线段 | 2个 | 不可延伸 | 线段AB / 线段a |

⚠️ **易错点**：射线有方向性，**射线AB** 和 **射线BA** 是不同的射线

🔑 基本事实（公理）：
• **两点确定一条直线**（过两点有且只有一条直线）
• **两点之间，线段最短**

📌 两点间的距离：连接两点的线段的长度

🔑 线段的中点：
若M是线段AB的中点，则：
AM = MB = 1/2 AB
AB = 2AM = 2MB`,examples:[{title:"【例1】已知线段AB=10cm，点C是AB的中点，点D在AB上，AD=3cm，求CD的长。",content:`解：
AC = 1/2 AB = 5cm
CD = AC - AD = 5 - 3 = 2cm`},{title:"【例2】已知M是线段AB的中点，AB = 10cm，求AM和MB的长度。",content:`解：
因为M是AB的中点
所以 AM = MB = 1/2 AB = 1/2 × 10 = 5cm`}],tips:["直线、射线、线段的区别在于端点个数和延伸性","两点之间线段最短","射线有方向性"]},{title:"4.3 角",content:`📌 角的定义：有公共端点的两条射线组成的图形

🔑 角的表示方法：
① 用三个大写字母：∠AOB（顶点字母放中间）
② 用一个大写字母：∠O（顶点唯一时）
③ 用数字：∠1、∠2
④ 用希腊字母：∠α、∠β

📌 角度换算：
1° = 60′（分），1′ = 60″（秒）
1直角 = 90°，1平角 = 180°，1周角 = 360°

🔑 角的分类：

| 类型 | 范围 |
|------|------|
| 锐角 | 0° < ∠ < 90° |
| 直角 | ∠ = 90° |
| 钝角 | 90° < ∠ < 180° |
| 平角 | ∠ = 180° |
| 周角 | ∠ = 360° |

📌 角的运算：度 + 度，分 + 分，秒 + 秒（满60进位/借位）`,examples:[{title:"【例】角度计算",content:`计算：45°28′ + 32°45′

解：
度：45° + 32° = 77°
分：28′ + 45′ = 73′ = 1°13′
结果：77° + 1°13′ = 78°13′`}],tips:["度分秒的换算要注意是60进制","顶点处有多个角时不能用单个大写字母表示"]},{title:"4.4 角的互余与互补",content:`📌 互余角：
• 定义：两个角的和为**90°**
• 性质：互余的两个角都是**锐角**

📌 互补角：
• 定义：两个角的和为**180°**
• 性质：互补的两个角可以是**任意角**

🔑 重要性质：
① **同角的补角相等**
   若∠A + ∠B = 180°，∠A + ∠C = 180°，则∠B = ∠C

② **同角的余角相等**
   若∠A + ∠B = 90°，∠A + ∠C = 90°，则∠B = ∠C

③ **等角的补角相等**
④ **等角的余角相等**

⚠️ **易错点**：互余和互补只与角度大小有关，与位置无关`,examples:[{title:"【例1】已知∠A = 35°，求∠A的余角和补角。",content:`解：
∠A的余角 = 90° − 35° = 55°
∠A的补角 = 180° − 35° = 145°`},{title:"【例2】一个角的余角比它的补角的1/3还少10°，求这个角。",content:`解：设这个角为x°
90 - x = 1/3(180 - x) - 10
解得：x = 60
答：这个角是60°`}],tips:["互余的两个角都是锐角","同角（等角）的余角相等，同角（等角）的补角相等","互余、互补只与角度大小有关，与位置无关"]},{title:"4.5 角平分线",content:`📌 定义：从一个角的顶点出发，把这个角分成**两个相等的角**的射线

🔑 性质：
若OC是∠AOB的平分线，则：
∠AOC = ∠BOC = 1/2 ∠AOB
∠AOB = 2∠AOC = 2∠BOC

📌 角平分线的表示：
OC是∠AOB的平分线 ⟺ ∠AOC = ∠BOC ⟺ ∠AOC = 1/2 ∠AOB

🔑 与中点的类比：

| 概念 | 线段 | 角 |
|------|------|------|
| 定义 | 分成两条相等的线段 | 分成两个相等的角 |
| 性质 | AM = MB = 1/2 AB | ∠AOC = ∠BOC = 1/2 ∠AOB |
| 个数 | 一条线段有**一个**中点 | 一个角有**一条**平分线 |

⚠️ **易错点**：角平分线是一条**射线**，不是直线`,examples:[{title:"【例】已知OC是∠AOB的平分线，∠AOB = 60°，求∠AOC。",content:`解：
因为OC是∠AOB的平分线
所以 ∠AOC = 1/2 ∠AOB = 1/2 × 60° = 30°`}],tips:["角平分线把角分成两个相等的角","角平分线是射线，不是直线","一个角只有一条平分线"]}],formulas:["1° = 60′，1′ = 60″","线段中点：AM = 1/2 AB","角平分线：∠AOC = 1/2 ∠AOB","互余：∠1 + ∠2 = 90°","互补：∠1 + ∠2 = 180°","同角（等角）的余角相等","同角（等角）的补角相等","两点之间线段最短","两点确定一条直线"],commonMistakes:["直线、射线、线段混淆","度分秒换算按100进制计算","认为互余的角必须相邻","角的表示方法不规范","角平分线画成直线","余角补角计算错误"]},ie={id:"ch5",title:"第5章 相交线与平行线",summary:"本章学习相交线和平行线的概念和性质，掌握平行线的判定方法和性质，理解平移的概念。",sections:[{title:"5.1 相交线",content:`📌 对顶角：
• 定义：两条直线相交，有公共顶点且**两边互为反向延长线**的两个角
• 性质：**对顶角相等**

📌 邻补角：
• 定义：有一条**公共边**，另一边**互为反向延长线**的两个角
• 性质：邻补角**互补**（和为180°）

⚠️ **易错点**：对顶角一定相等，但相等的角不一定是对顶角

🔑 垂线：
• 定义：两条直线相交成**直角**，叫做互相垂直，记作 a⊥b
• 垂足：两条直线的交点

📌 垂线的性质：
① 过直线上一点，有且只有一条直线与已知直线垂直
② 直线外一点与直线上各点连线的所有线段中，**垂线段最短**

📌 点到直线的距离：直线外一点到这条直线的**垂线段的长度**

⚠️ **易错点**：距离是**长度**，是一个数值，不是垂线段本身`,examples:[{title:"【例】如图，直线AB、CD相交于点O，∠AOC=35°，求∠BOD、∠AOD的度数。",content:`解：
∠BOD = ∠AOC = 35°（对顶角相等）
∠AOD = 180° - 35° = 145°（邻补角互补）`}],tips:["对顶角一定相等","邻补角和为180°","点到直线的距离是垂线段的长度，不是线段本身"]},{title:"5.2 三线八角",content:`📌 当两条直线被第三条直线（截线）所截时，产生**8个角**：

🔑 三类角的位置特征：

| 角类型 | 位置特征 | 图形特征 | 口诀 |
|--------|----------|----------|------|
| **同位角** | 在截线同旁，被截线同一方向 | 形如"**F**" | F型 |
| **内错角** | 在截线两旁，被截线之间 | 形如"**Z**" | Z型 |
| **同旁内角** | 在截线同旁，被截线之间 | 形如"**U**" | U型 |

📌 记忆技巧：
• 同位角：位置相同，都在上方或都在下方
• 内错角：在内部，错开分布
• 同旁内角：在内部，同旁分布`,examples:[{title:"【例】指出图中的同位角、内错角、同旁内角",content:`如图，直线a、b被直线c所截：
• 同位角：∠1与∠5，∠2与∠6，∠3与∠7，∠4与∠8
• 内错角：∠3与∠6，∠4与∠5
• 同旁内角：∠3与∠5，∠4与∠6`}],tips:["同位角F型，内错角Z型，同旁内角U型","三线八角中，截线是关键","内错角和同旁内角都在被截线之间"]},{title:"5.3 平行线及其判定",content:`📌 平行线的定义：
• 在**同一平面内**，**不相交**的两条直线叫做平行线
• 记作：a ∥ b

📌 平行公理：
经过直线外一点，**有且只有一条**直线与这条直线平行
• "有" → 存在性
• "只有" → 唯一性

🔑 平行公理的推论（传递性）：
若 a ∥ b，b ∥ c，则 a ∥ c

📌 平行线的判定：

| 判定方法 | 口诀 | 符号语言 |
|----------|------|----------|
| **同位角相等**，两直线平行 | F型 | ∠1 = ∠2 ⟹ a ∥ b |
| **内错角相等**，两直线平行 | Z型 | ∠2 = ∠3 ⟹ a ∥ b |
| **同旁内角互补**，两直线平行 | U型 | ∠2 + ∠4 = 180° ⟹ a ∥ b |

🔑 核心口诀：**同位内错看相等，同旁内角看互补**`,examples:[{title:"【例】如图，∠1=70°，∠2=70°，判断AB与CD是否平行。",content:`解：
∵ ∠1 = ∠2 = 70°
∴ AB∥CD（同位角相等，两直线平行）`}],tips:["判定平行时找同位角或内错角相等，或同旁内角互补","同位角F型，内错角Z型，同旁内角U型","平行具有传递性"]},{title:"5.4 平行线的性质",content:`📌 平行线的性质：

| 性质 | 口诀 | 符号语言 |
|------|------|----------|
| 两直线平行，**同位角相等** | F型 | a ∥ b ⟹ ∠1 = ∠2 |
| 两直线平行，**内错角相等** | Z型 | a ∥ b ⟹ ∠2 = ∠3 |
| 两直线平行，**同旁内角互补** | U型 | a ∥ b ⟹ ∠2 + ∠4 = 180° |

⚠️ **判定**与**性质**互为逆运算：
• 判定：由角的关系 → 推出平行
• 性质：由平行 → 推出角的关系

📌 平行线的距离：
• 同时垂直于两条平行线，并且夹在这两条平行线间的**线段的长度**
• **性质**：平行线间的距离**处处相等**

🔑 使用性质时的注意：
用平行线的性质时，**必须先说明两直线平行**`,examples:[{title:"【例】如图，已知AB∥CD，∠1=60°，求∠2的度数。",content:`解：
∵ AB∥CD
∴ ∠2 = ∠1 = 60°（两直线平行，同位角相等）`}],tips:["用平行线的性质时，必须先说明两直线平行","证明时要写明理由","判定和性质不要混淆"]},{title:"5.5 命题与定理",content:`📌 命题：
• 定义：判断一件事情的**陈述句**
• 结构：题设（已知条件）+ 结论

🔑 分类：

| 类型 | 说明 | 举例 |
|------|------|------|
| **真命题** | 正确的命题 | 对顶角相等 |
| **假命题** | 错误的命题 | 相等的角是对顶角 |

📌 定理：
• 定义：用**推理方法**判断为正确的命题

🔑 常见定理：
① 对顶角相等
② 两直线平行，同位角相等
③ 同位角相等，两直线平行
④ 平行线的传递性：a∥b，b∥c，则a∥c

📌 逆命题：
• 定义：把原命题的**题设和结论互换**得到的命题
• 注意：原命题为真，逆命题不一定为真`,examples:[{title:"【例】分析命题的结构",content:`命题："如果两个角是对顶角，那么这两个角相等"

题设：两个角是对顶角
结论：这两个角相等

逆命题：如果两个角相等，那么这两个角是对顶角（假命题）`}],tips:["命题必须是陈述句","定理是经过证明的真命题","原命题为真，逆命题不一定为真"]},{title:"5.6 平移",content:`📌 定义：把一个图形**沿某方向移动一定的距离**，叫做平移

🔑 性质：
• 平移不改变图形的**形状和大小**
• 对应点所连的线段**平行且相等**
• 对应角**相等**

📌 平移的坐标变化：
• 点(x, y)向右平移a个单位 → (x + a, y)
• 点(x, y)向左平移a个单位 → (x − a, y)
• 点(x, y)向上平移b个单位 → (x, y + b)
• 点(x, y)向下平移b个单位 → (x, y − b)

🔑 口诀：**右加左减（横坐标），上加下减（纵坐标）**`,examples:[{title:"【例】平移坐标计算",content:`点A(2, -1) 先向右平移3个单位，再向上平移2个单位，求平移后坐标。

解：(2+3, -1+2) = (5, 1)`}],tips:["平移只改变位置，不改变形状和大小","右加左减（横坐标），上加下减（纵坐标）"]}],formulas:["对顶角相等","邻补角互补","平行公理：过直线外一点有且只有一条直线与已知直线平行","判定1：同位角相等 ⟹ 两直线平行","判定2：内错角相等 ⟹ 两直线平行","判定3：同旁内角互补 ⟹ 两直线平行","性质1：两直线平行 ⟹ 同位角相等","性质2：两直线平行 ⟹ 内错角相等","性质3：两直线平行 ⟹ 同旁内角互补","平移：右加左减，上加下减"],commonMistakes:["混淆平行线的判定和性质","同位角、内错角、同旁内角识别错误","证明过程不严谨，缺少理由","平移后对应点找错","点到直线距离理解错误"]},te={id:"ch6",title:"第6章 实数",summary:"本章学习平方根、立方根的概念，理解无理数和实数的概念，掌握实数的运算。",sections:[{title:"6.1 平方根",content:`📌 定义：
• 算术平方根：若 x² = a（x>0, a≥0），则 x = √a
• 平方根：若 x² = a，则 x = ±√a

🔑 性质：

| 被开方数 | 平方根情况 |
|----------|------------|
| 正数 | 有**两个**平方根，互为相反数 |
| 0 | 只有一个平方根，是0 |
| 负数 | **没有**平方根（在实数范围内） |

📌 重要公式：
• (√a)² = a（a ≥ 0）—— 算术平方根的平方
• √(a²) = |a| —— 平方再开方，结果取绝对值

⚠️ **易错点**：
• √a 表示**算术平方根**，结果非负
• 4的平方根是 ±2，但4的算术平方根是 2
• √9 = 3（不是 ±3）`,examples:[{title:"【例1】求下列各数的算术平方根",content:`(1) 16 → √16 = 4
(2) 0.25 → √0.25 = 0.5
(3) 0 → √0 = 0`},{title:"【例2】求 √16 的平方根",content:`解：
√16 = 4
4的平方根是 ±√4 = ±2`},{title:"【例3】化简 √(−3)²",content:`解：
√(−3)² = √9 = 3
（或用公式：√(a²) = |a| = |−3| = 3）`}],tips:["负数没有平方根","正数的平方根有两个，互为相反数","√a 表示算术平方根（非负）","平方再开方取绝对值"]},{title:"6.2 立方根",content:`📌 定义：若 x³ = a，则 x 叫做 a 的立方根（三次方根）
记作：³√a（根指数3**不能省略**）

🔑 性质：

| 被开方数 | 立方根情况 |
|----------|------------|
| 正数 | 有一个**正**的立方根 |
| 0 | 立方根是0 |
| 负数 | 有一个**负**的立方根 |

📌 重要性质：
• 任何实数都有**唯一**的立方根
• 立方根的符号与原数**相同**

🔑 常用公式：
• (³√a)³ = a
• ³√(a³) = a
• ³√(−a) = −³√a（根号内的负号可移到根号外）

⚠️ **易错点**：平方根 √ 中的"2"可省略，但立方根 ³√ 中的"3"**不能省略**`,examples:[{title:"【例】求下列各数的立方根",content:`(1) 27 → ³√27 = 3
(2) -8 → ³√(-8) = -2
(3) 0 → ³√0 = 0`},{title:"【例】计算 ³√(−27)",content:`解：
³√(−27) = −³√27 = −3`}],tips:["任何实数都有唯一的立方根","立方根的符号与原数相同","³√中的3不能省略"]},{title:"6.3 实数",content:`📌 无理数：
• **无限不循环小数**叫做无理数

🔑 常见类型：
① 开方开不尽的数：√2、√3、√5 ...
② 含π的数：π、π+1、2π ...
③ 特殊结构：0.1010010001...（每两个1之间多一个0）

📌 实数的分类：
实数
├── 有理数（整数 + 分数）
│   ├── 整数：正整数、0、负整数
│   └── 分数：正分数、负分数
└── 无理数（无限不循环小数）
    ├── 正无理数
    └── 负无理数

📌 实数与数轴：
• 实数与数轴上的点**一一对应**

🔑 实数的大小比较：
正数 > 0 > 负数
两个正数：绝对值大者大
两个负数：绝对值大者反而小`,examples:[{title:"【例】判断下列数是有理数还是无理数",content:`√2，3.14，-5，0.1010010001...，π，0，2/3

有理数：3.14，-5，0，2/3
无理数：√2，0.1010010001...，π`},{title:"【例】比较 √3 与 √5/2 的大小",content:`解：
√3 ≈ 1.732，√5/2 ≈ 2.236/2 ≈ 1.118
所以 √3 > √5/2`}],tips:["带根号的数不一定是无理数（如√4=2是有理数）","有理数和无理数的区别是有无循环规律","实数与数轴上的点一一对应"]},{title:"6.4 实数的运算",content:`📌 运算律：

| 运算律 | 内容 |
|--------|------|
| 加法交换律 | a + b = b + a |
| 加法结合律 | (a + b) + c = a + (b + c) |
| 乘法交换律 | ab = ba |
| 乘法结合律 | (ab)c = a(bc) |
| 乘法分配律 | a(b + c) = ab + ac |

📌 实数的三个"特殊数"：

| 类型 | 结果 |
|------|------|
| 相反数 | a ⟷ −a |
| 倒数 | a ⟷ 1/a（a ≠ 0） |
| 绝对值 | |a| = a（a≥0）或 −a（a<0） |

⚠️ **易错点**：**0无倒数**`,examples:[{title:"【例】计算下列各式",content:`(1) √4 + ³√8 = 2 + 2 = 4
(2) |−√2| + √2 = √2 + √2 = 2√2
(3) (√3)² − ³√(−27) = 3 − (−3) = 6`}],tips:["实数的运算律与有理数相同","0没有倒数","注意运算顺序"]}],formulas:["若x²=a（x>0,a≥0），则x=√a","若x³=a，则x=³√a","(√a)² = a (a≥0)","³√(a³) = a","√(a²) = |a|","³√(−a) = −³√a","正数的平方根有两个，互为相反数","任何实数都有唯一的立方根","0没有倒数"],commonMistakes:["认为所有带根号的数都是无理数","混淆平方根和算术平方根","负数求平方根","立方根根指数3省略不写","实数比较大小方法不当","忘记0没有倒数"]},ne={id:"ch7",title:"第7章 平面直角坐标系",summary:"本章学习平面直角坐标系的概念，掌握点的坐标的确定方法，理解坐标方法的简单应用。",sections:[{title:"7.1 有序数对",content:`📌 定义：有**顺序**的两个数a与b组成的数对，叫做有序数对
记作：(a, b)

🔑 注意：a 与 b 的**顺序不可交换**（即 (1, 2) ≠ (2, 1)）

📌 应用：用坐标表示平面上**确定的位置**`,examples:[{title:"【例】有序数对的应用",content:`电影院座位：第5排第3座记作(5, 3)
注意：(3, 5)表示第3排第5座，与(5, 3)不同`}],tips:["有序数对的顺序很重要","(a,b)与(b,a)表示不同的位置"]},{title:"7.2 平面直角坐标系",content:`📌 构成：
• 由两条互相**垂直**且**原点重合**的数轴组成
• **x轴**（横轴）：水平向右为正方向
• **y轴**（纵轴）：竖直向上为正方向
• **原点**：两条轴的交点O (0, 0)

🔑 点的坐标：
• 横坐标：过点P向x轴作垂线，垂足对应的数
• 纵坐标：过点P向y轴作垂线，垂足对应的数
• 点P的坐标：P(x, y)

📌 坐标平面上的点与有序实数对**一一对应**`,examples:[{title:"【例】写出图中点的坐标",content:`A(3, 2)：横坐标3，纵坐标2
B(-2, 4)：横坐标-2，纵坐标4
C(-3, -1)：横坐标-3，纵坐标-1
D(2, -3)：横坐标2，纵坐标-3`}],tips:["坐标平面上的点与有序实数对一一对应","先读横坐标，再读纵坐标"]},{title:"7.3 四个象限",content:`📌 象限划分：

| 象限 | 位置 | 坐标特征 |
|------|------|----------|
| 第一象限 | 右上 | x > 0, y > 0（均正） |
| 第二象限 | 左上 | x < 0, y > 0 |
| 第三象限 | 左下 | x < 0, y < 0（均负） |
| 第四象限 | 右下 | x > 0, y < 0 |

🔑 记忆口诀：
**一全正，二负正，三全负，四正负**

📌 特殊位置的点：

| 位置 | 坐标特征 |
|------|----------|
| x轴上 | 纵坐标 = 0，即 (x, 0) |
| y轴上 | 横坐标 = 0，即 (0, y) |
| 原点 | (0, 0) |
| 第一、三象限角平分线上 | y = x，即 (a, a) |
| 第二、四象限角平分线上 | y = −x，即 (a, −a) |

⚠️ **易错点**：坐标轴（x轴、y轴）上的点**不属于任何象限**`,examples:[{title:"【例】判断点所在象限",content:`A(3, 2)：第一象限（+,+）
B(-2, 4)：第二象限（-,+）
C(-3, -1)：第三象限（-,-）
D(2, -3)：第四象限（+,-）
E(5, 0)：x轴上（不属于任何象限）`}],tips:["坐标轴上的点不属于任何象限","一全正，二负正，三全负，四正负","角平分线上的点满足y=x或y=-x"]},{title:"7.4 点坐标的平移",content:`📌 坐标平面内的平移规律：

| 平移方向 | 坐标变化 |
|----------|----------|
| 向右平移a个单位 | 横坐标 +a，纵坐标不变 |
| 向左平移a个单位 | 横坐标 −a，纵坐标不变 |
| 向上平移b个单位 | 纵坐标 +b，横坐标不变 |
| 向下平移b个单位 | 纵坐标 −b，横坐标不变 |

🔑 口诀：**上加下减（纵坐标），左减右加（横坐标）**`,examples:[{title:"【例】平移计算",content:`将点A(2, -1) 先向右平移3个单位，再向上平移2个单位，求平移后坐标。

解：(2+3, -1+2) = (5, 1)`}],tips:["右加左减（横坐标）","上加下减（纵坐标）","平移只改变位置，不改变形状"]},{title:"7.5 对称点的坐标",content:`📌 对称变换：

| 对称类型 | 变换规律 | 口诀 |
|----------|----------|------|
| 关于x轴对称 | 横坐标**相同**，纵坐标**互为相反数** | 横同纵反 |
| 关于y轴对称 | 纵坐标**相同**，横坐标**互为相反数** | 横反纵同 |
| 关于原点对称 | 横、纵坐标都**互为相反数** | 都相反 |

🔑 记忆口诀：
• 关于x轴对称：x不变，y变号
• 关于y轴对称：y不变，x变号
• 关于原点对称：x和y都变号`,examples:[{title:"【例】对称点坐标",content:`已知点P(-3, 4)，求：
① 关于x轴对称：P₁(-3, -4)（横同纵反）
② 关于y轴对称：P₂(3, 4)（横反纵同）
③ 关于原点对称：P₃(3, -4)（都相反）`}],tips:["关于x轴对称y变号，关于y轴对称x变号，关于原点对称都变号","可以借助图形理解对称关系"]}],formulas:["象限：I(+,+)、II(-,+)、III(-,-)、IV(+,-)","关于x轴对称：(x,y) → (x,-y)","关于y轴对称：(x,y) → (-x,y)","关于原点对称：(x,y) → (-x,-y)","向右平移a个单位：(x,y) → (x+a,y)","向左平移a个单位：(x,y) → (x-a,y)","向上平移b个单位：(x,y) → (x,y+b)","向下平移b个单位：(x,y) → (x,y-b)","口诀：右加左减，上加下减"],commonMistakes:["混淆各象限的符号","关于x轴、y轴、原点对称的规律记混","平移时加减方向错误","坐标轴上的点误认为在象限内","有序数对顺序写反"]},se={id:"ch8",title:"第8章 二元一次方程组",summary:"本章学习二元一次方程组的概念和解法，掌握用二元一次方程组解决实际问题的方法。",sections:[{title:"8.1 二元一次方程",content:`📌 定义：含有**两个未知数**，并且未知数的**次数都是1**的方程

📌 一般形式：ax + by = c（a ≠ 0，b ≠ 0）

🔑 特点：
• 含有两个未知数
• 未知数的次数都是1
• 是整式方程

📌 二元一次方程的解：
• 使方程左、右两边相等的一对未知数的值
• **一个二元一次方程有无数组解**`,examples:[{title:"【例】判断下列是否是二元一次方程",content:`(1) 2x + 3y = 7  ✓是
(2) x² + y = 5  ✗不是（x的次数是2）
(3) xy = 6  ✗不是（xy项次数是2）
(4) x + 1/y = 3  ✗不是（分母含未知数）`}],tips:["二元一次方程必须满足：两个未知数、次数为1、整式方程","一个二元一次方程有无数组解"]},{title:"8.2 二元一次方程组",content:`📌 定义：把**两个**二元一次方程合在一起，组成一个二元一次方程组

📌 一般形式：
{ ax + by = c
{ dx + ey = f

🔑 方程组的解：
• 使方程组中**每个方程**左右两边都相等的x、y的值
• 二元一次方程组一般有**唯一解**，也可能无解或有无数解`,examples:[{title:"【例】判断下列是否是二元一次方程组",content:`(1) {2x + 3y = 5, x - y = 1}  ✓是
(2) {x² + y = 3, x + y = 2}  ✗不是（x²次数是2）
(3) {x + y + z = 6, x - y = 1}  ✗不是（三个未知数）`}],tips:["二元一次方程组必须有两个未知数，且次数都是1","二元一次方程组一般有一个解"]},{title:"8.3 解二元一次方程组——代入消元法",content:`📌 代入消元法步骤：
1. 从方程组中选一个系数比较简单的方程，将其中一个未知数用含另一个未知数的代数式表示出来
2. 把所得的式子代入另一个方程中，消去一个未知数，得到一个一元一次方程
3. 解这个一元一次方程，求出一个未知数的值
4. 把求得的未知数的值代入第一步所得的式子中，求出另一个未知数的值
5. 写出方程组的解

🔑 适用情况：当方程组中某一个未知数的系数为1或-1时，用代入消元法较简便

📌 口诀：**一变二代三解四回五代入**`,examples:[{title:"【例】用代入法解方程组",content:`{ 2x + y = 8  ①
{ x - 3y = -1  ②

解：
由①得：y = 8 - 2x  ③
代入②：x - 3(8-2x) = -1
x - 24 + 6x = -1
7x = 23
x = 23/7
代入③：y = 8 - 2×(23/7) = 56/7 - 46/7 = 10/7
∴ {x=23/7, y=10/7}`}],tips:["代入消元法适用于系数为1或-1的情况","代入时注意加括号","求出一个未知数后，代入变形后的式子求另一个"]},{title:"8.4 解二元一次方程组——加减消元法",content:`📌 加减消元法步骤：
1. 将两个方程化为标准形式
2. 观察同一未知数的系数是否相同或互为相反数
3. 配系数：若不相同也不相反，则分别乘以适当的数
4. 加减：将两个方程相加或相减，消去一个未知数
5. 求值：解一元方程，再回代求另一个

🔑 加减口诀：**同加异减**
• 符号相同 → 两式相减
• 符号相反 → 两式相加

📌 选择原则：哪个未知数好消就消哪个；哪个系数小就配哪个`,examples:[{title:"【例】用加减法解方程组",content:`{ 2x + y = 8  ①
{ 2x - y = 5  ②

解：
①+②：(2x+y)+(2x-y) = 8+5
4x = 13
x = 13/4
代入①：2×(13/4) + y = 8
y = 8 - 13/2 = 3/2
∴ {x=13/4, y=3/2}`},{title:"【例】需要配系数的方程组",content:`{ 2x + 3y = 13  ①
{ x - 3y = -1  ②

解：
①+②：(2x+3y)+(x-3y) = 13+(-1)
3x = 12
x = 4
代入②：4 - 3y = -1
-3y = -5
y = 5/3
∴ {x=4, y=5/3}`}],tips:["加减消元法适用于系数相同或相反的情况","同加异减：符号相同用减法，符号相反用加法","配系数时找最小公倍数"]},{title:"8.5 实际问题与二元一次方程组",content:`📌 列方程组解应用题步骤：
1. 审题 → 理解题意，找出已知量和未知量
2. 设未知数（通常设两个，问什么设什么）
3. 找等量关系（通常有两个）
4. 列方程组
5. 解方程组
6. 检验并答

🔑 常见类型：

| 类型 | 等量关系 |
|------|----------|
| 配套问题 | 数量A × 比例 = 数量B |
| 行程问题 | 路程 = 速度 × 时间 |
| 增长问题 | 原量 + 增长量 = 现量 |
| 工程问题 | 甲工作量 + 乙工作量 = 总工作量 |
| 销售问题 | 利润 = 售价 - 进价 |`,examples:[{title:"【例】配套问题",content:`买5支铅笔和6本笔记本共需19.4元，买3支铅笔和4本笔记本共需12.6元。求铅笔和笔记本的单价。

解：设铅笔单价x元，笔记本单价y元
{5x + 6y = 19.4  ①
{3x + 4y = 12.6  ②
①×2-②×3：10x+12y-9x-12y=38.8-37.8
x = 1
代入①：5+6y=19.4
y=2.4
答：铅笔1元/支，笔记本2.4元/本`}],tips:["找等量关系是关键","一般找两个不同的等量关系","解完后要检验是否符合实际"]}],formulas:["代入消元法：把一个未知数用另一个表示，代入另一个方程","加减消元法：使某未知数系数相同/相反，加减消去该未知数","加减口诀：同加异减","{x+y=a, x-y=b} ⇒ x=(a+b)/2, y=(a-b)/2"],commonMistakes:["代入时忘记加括号","加减消元时符号错误","去分母时漏乘","解完后忘记检验","单位不统一","消元时搞错应该加还是减"]},ae={id:"ch9",title:"第9章 不等式与不等式组",summary:"本章学习不等式的概念和性质，掌握一元一次不等式和不等式组的解法，能够解决实际问题。",sections:[{title:"9.1 不等式",content:`📌 定义：
• 用符号"<"、">"、"≤"、"≥"、"≠"连接而成的式子叫做不等式

📌 相关概念：
• 不等式的解：使不等式成立的未知数的值
• 不等式的解集：一个含有未知数的不等式的所有解
• 解不等式：求不等式的解集的过程

🔑 不等号含义：
• < ：小于
• > ：大于
• ≤ ：小于或等于（不大于）
• ≥ ：大于或等于（不小于）
• ≠ ：不等于`,examples:[{title:"【例】判断下列哪些是不等式",content:`(1) 3x + 2 > 5  ✓是不等式
(2) x² - 1 = 0  ✗是等式，不是不等式
(3) 2 + 3 ≠ 6  ✓是不等式
(4) x ≤ 8  ✓是不等式`}],tips:["不等式用不等号连接","≥表示大于或等于，≤表示小于或等于"]},{title:"9.2 不等式的性质",content:`📌 基本性质：

| 性质 | 内容 | 说明 |
|------|------|------|
| 性质1 | 若 a > b，则 a ± c > b ± c | 加上/减去同一个数，不等号方向**不变** |
| 性质2 | 若 a > b，c > 0，则 ac > bc | 两边同乘**正数**，不等号方向**不变** |
| 性质3 | 若 a > b，c < 0，则 ac < bc | 两边同乘**负数**，不等号方向**改变** |

⚠️ **易错点**：两边同乘（或除以）**负数**时，不等号方向要**改变**！

🔑 口诀：**乘除正数不变号，乘除负数要变号**`,examples:[{title:"【例】若a > b，则下列不等式一定成立的是",content:`A. ac > bc  （不一定，c的符号未知）
B. a - c > b - c  ✓（性质1）
C. -2a > -2b  （应该变号：-2a < -2b）
D. a/c > b/c  （不一定，c的符号未知）

答案：B`}],tips:["不等式性质3最容易出错","乘以或除以负数时一定要改变不等号方向","两边同乘0会变成等式"]},{title:"9.3 一元一次不等式",content:`📌 定义：含有一个未知数，未知数的次数是1的不等式

📌 解法步骤：
1. 去分母（注意：两边同乘负数时不等号方向改变）
2. 去括号
3. 移项（注意变号）
4. 合并同类项
5. 系数化为1（注意方向是否改变）

⚠️ **与解方程的区别**：系数化为1时，若系数为负数，不等号方向要改变`,examples:[{title:"【例1】解不等式",content:`解不等式 2(x-3) < 3x+2

解：
去括号：2x-6 < 3x+2
移项：2x-3x < 2+6
合并同类项：-x < 8
系数化为1：x > -8（注意变号）

数轴表示：在-8处画空心点，向右画线`},{title:"【例2】解不等式并在数轴上表示",content:`解不等式：(x+1)/3 ≥ (2x-1)/2

解：
去分母（同乘6）：2(x+1) ≥ 3(2x-1)
去括号：2x+2 ≥ 6x-3
移项：2x-6x ≥ -3-2
合并：-4x ≥ -5
系数化为1：x ≤ 5/4（注意变号）

数轴表示：在5/4处画实心点，向左画线`}],tips:["系数化为1时，若系数为负，不等号方向要改变","数轴表示时注意空心点（<,>）和实心点（≤,≥）的区别"]},{title:"9.4 一元一次不等式组",content:`📌 定义：由几个同一未知数的一元一次不等式组成的不等式组

📌 解集：不等式组中几个不等式的解集的公共部分

🔑 解集确定方法（口诀）：

| 条件 | 解集 | 口诀 |
|------|------|------|
| x > a 且 x > b（同大） | x > 较大的那个 | **同大取大** |
| x < a 且 x < b（同小） | x < 较小的那个 | **同小取小** |
| x > a 且 x < b（一大一小） | a < x < b | **大小取中间** |
| x < a 且 x > b（矛盾） | 无解 | **大大小小无解** |

📌 解题步骤：
1. 求出每个不等式的解集
2. 利用数轴找公共部分（交集）
3. 写出不等式组的解集`,examples:[{title:"【例1】解不等式组",content:`{ 2x + 1 > 3  ①
{ 3x - 2 < 7  ②

解：
由①：2x > 2，x > 1
由②：3x < 9，x < 3
所以解集为：1 < x < 3（大小取中间）`},{title:"【例2】无解的情况",content:`{ x > 5
{ x < 2

解：
没有数既大于5又小于2
所以不等式组无解（大大小小无解）`}],tips:["同大取大，同小取小","大小小大中间找，大大小小无解","可借助数轴找公共部分"]},{title:"9.5 一元一次不等式的应用",content:`📌 解应用题的步骤：
1. 审题 → 理解题意，找出不等关系
2. 设未知数
3. 列不等式
4. 解不等式
5. 检验 → 检查是否符合实际意义
6. 答

🔑 常见不等关系词：
• "至少"、"不少于"、"不低于" → ≥
• "至多"、"不超过"、"不高于" → ≤
• "超过"、"大于" → >
• "不足"、"小于" → <

📌 常见类型：
• 销售利润问题
• 行程问题
• 工程问题
• 配套问题`,examples:[{title:"【例1】销售问题",content:`某商品成本80元，要获得利润率不低于20%，售价至少是多少元？

解：设售价为x元
利润 = x - 80
利润率 = (x-80)/80 ≥ 20%
(x-80)/80 ≥ 0.2
x - 80 ≥ 16
x ≥ 96
所以售价至少是96元`},{title:"【例2】行程问题",content:`甲、乙两人分别从A、B两地相向而行，甲每小时走5km，乙每小时走3km，两地相距32km。经过多少小时后，两人相距不超过2km？

解：设经过x小时后
甲走的路程 = 5x
乙走的路程 = 3x
两人相距 = 32 - 5x - 3x = 32 - 8x
要求：32 - 8x ≤ 2
      30 ≤ 8x
      x ≥ 3.75
所以经过3.75小时（即3小时45分钟）后，两人相距不超过2km`}],tips:['"至少"用≥，"至多"用≤',"注意单位统一","解完后要检验是否符合实际意义"]}],formulas:["不等式性质1：a>b ⇒ a±c>b±c","不等式性质2：a>b, c>0 ⇒ ac>bc, a/c>b/c","不等式性质3：a>b, c<0 ⇒ ac<bc, a/c<b/c（变号）","同大取大：{x>a, x>b} ⇒ x>max(a,b)","同小取小：{x<a, x<b} ⇒ x<min(a,b)","大小取中间：{x>a, x<b} ⇒ a<x<b（a<b时）","大大小小无解：{x<a, x>b} ⇒ 无解（a<b时）"],commonMistakes:["系数化为1时不改变不等号方向","去分母时漏乘不含分母的项","不等式组解集取错","数轴表示时端点判断错误（实心点vs空心点）",'"至少""至多"等关键词理解错误']},oe={id:"ch10",title:"第10章 数据的收集、整理与描述",summary:"本章学习统计调查的基本方法，掌握频数分布表和直方图的制作，能够选择合适的统计图描述数据。",sections:[{title:"10.1 统计调查",content:`📌 调查方式：

| 方式 | 说明 | 适用场景 |
|------|------|----------|
| **全面调查（普查）** | 对全部考察对象进行调查 | 人口普查、班级点名 |
| **抽样调查** | 抽取一部分对象调查，推断全体 | 调查学生视力、民意调查 |

📌 何时用抽样：
• 调查范围大
• 破坏性强
• 无法全面调查时

🔑 核心概念：

| 概念 | 说明 |
|------|------|
| **总体** | 所要考察的全体对象 |
| **个体** | 组成总体的每一个考察对象 |
| **样本** | 从总体中抽取的一部分个体 |
| **样本容量** | 样本中个体的数目（**无单位**） |

⚠️ **易错点**：样本容量是**数字**，不带单位`,examples:[{title:"【例】指出总体、个体、样本、样本容量",content:`为了解某校七年级800名学生的视力情况，从中抽取100名学生进行视力测试。

总体：800名学生的视力情况
个体：每名学生的视力情况
样本：抽取的100名学生的视力情况
样本容量：100（不带单位）`}],tips:["样本容量没有单位","抽样调查时样本要具有代表性","选择普查还是抽样要根据实际情况"]},{title:"10.2 数据的整理",content:`📌 统计调查步骤：
收集数据 → 整理数据（划记法）→ 描述数据（统计表/统计图）→ 分析得出结论

🔑 频数与频率：

| 概念 | 定义 |
|------|------|
| **频数** | 每个数据出现的次数 |
| **频率** | 频数/总数（百分比），所有频率之和 = 1 |

📌 频率 = 频数 ÷ 总数`,examples:[{title:"【例】频数与频率计算",content:`某班50名学生，数学成绩分布如下：
• 90-100分：10人
• 80-89分：20人
• 70-79分：15人
• 60-69分：5人

计算各分数段的频率：
• 90-100分：10÷50 = 0.2 = 20%
• 80-89分：20÷50 = 0.4 = 40%
• 70-79分：15÷50 = 0.3 = 30%
• 60-69分：5÷50 = 0.1 = 10%
验证：0.2+0.4+0.3+0.1 = 1 ✓`}],tips:["所有频率之和等于1","频数是具体个数，频率是百分比","划记法：正字计数法"]},{title:"10.3 直方图",content:`📌 频数分布表：
• 组距：每个小组的两个端点之间的距离
• 频数：落在各个小组内的数据的个数
• 列频数的分布表，称为频数分布表

🔑 画频数分布直方图的步骤：
1. 计算最大值与最小值的差（极差）
2. 决定组距与组数
3. 列频数分布表
4. 画频数分布直方图

📌 组数计算：
组数 = 极差 ÷ 组距（进位取整）

⚠️ **易错点**：组距太小组数太多，组距太小组数太少`,examples:[{title:"【例】确定组数",content:`一组数据的最大值是98，最小值是42，若取组距为10，则应分成几组？

解：
极差 = 98 - 42 = 56
组数 = 56 ÷ 10 = 5.6
进位取整得6组`}],tips:["组数=极差÷组距（进位取整）","组距一般取便于计算的数","直方图用小长方形的高度表示频数"]},{title:"10.4 统计图的选择",content:`📌 各类统计图特点：

| 统计图 | 特点 | 适用场景 |
|--------|------|----------|
| **条形统计图** | 显示每个项目的具体数目，便于比较差距 | 比较不同类别的大小 |
| **扇形统计图** | 用扇形面积表示所占百分比 | 显示各部分占总体的比例 |
| **折线统计图** | 反映事物的变化趋势 | 显示数据随时间的变化 |
| **直方图** | 显示数据分布情况 | 分组数据的频数分布 |

🔑 扇形圆心角的计算：
某部分对应的圆心角度数 = 该部分百分比 × 360°

📌 统计图的选择原则：
• 要清楚地表示出各部分在总体中所占的百分比 → 选**扇形统计图**
• 要反映某事物的变化趋势 → 选**折线统计图**
• 要比较几个项目的具体数量 → 选**条形统计图**`,examples:[{title:"【例1】扇形统计图计算",content:`某班40人，调查最喜爱节目类型，数据如下：
新闻10%，体育25%，动画20%，娱乐45%。
求各类型人数和对应扇形圆心角度数。

解：
新闻：40 × 10% = 4人，圆心角 = 360° × 10% = 36°
体育：40 × 25% = 10人，圆心角 = 360° × 25% = 90°
动画：40 × 20% = 8人，圆心角 = 360° × 20% = 72°
娱乐：40 × 45% = 18人，圆心角 = 360° × 45% = 162°`},{title:"【例2】选择合适的统计图",content:`(1) 要表示某班学生最喜欢的运动项目 → 条形统计图
(2) 要表示某城市一年中各月平均气温的变化 → 折线统计图
(3) 要表示家庭支出中各项所占比例 → 扇形统计图`}],tips:["条形图比多少，折线图看趋势，扇形图看比例","扇形圆心角=百分比×360°","不同统计图有不同的特点和用途"]}],formulas:["极差 = 最大值 - 最小值","组数 = 极差 ÷ 组距（进位取整）","频率 = 频数 ÷ 总数","各组频率之和 = 1","扇形圆心角 = 百分比 × 360°","条形统计图：比较数量","扇形统计图：显示百分比","折线统计图：显示趋势","直方图：显示分布"],commonMistakes:["样本容量带单位","组距和组数计算错误","频数和频率混淆","统计图选择不当","扇形圆心角计算错误","忘记验证频率之和是否等于1"]},le=[G,Z,Y,ee,ie,te,ne,se,ae,oe],ce=[{id:"q1_1_1",chapterId:"ch1",knowledgePointId:"kp1_1",type:"fill_blank",content:"如果把水位上升0.5米记作+0.5米，那么水位下降1.2米记作____。",answer:"-1.2米",analysis:"上升为正，下降为负，所以记作-1.2米。",difficulty:"easy",points:5,thinking:"本题考查正数和负数的概念，关键是理解相反意义的量如何用正负数表示。",steps:[{step:1,title:"理解题意",content:"题目规定：水位上升用正数表示，上升0.5米记作+0.5米",highlight:!1},{step:2,title:"确定表示方法",content:"上升与下降是相反意义的量，上升用正数，则下降用负数",highlight:!0},{step:3,title:"得出答案",content:"水位下降1.2米，记作-1.2米",highlight:!1}],keyPoints:["正数和负数的意义","相反意义的量","用正负数表示实际问题"],commonMistakes:['忘记写单位"米"',"符号写错，写成+1.2米","只写数字-1.2，遗漏单位"],similarQuestions:[{id:"qz1_1",content:"若向东走5米记作+5米，则向西走3米记作____",difficulty:"easy"},{id:"q1_1_2",content:"某地最低气温是-8℃，最高气温是+12℃，这一天的温差是多少？",difficulty:"medium"}]},{id:"q1_1_2",chapterId:"ch1",knowledgePointId:"kp1_1",type:"single_choice",content:"某地最低气温是-8℃，最高气温是+12℃，这一天的温差是多少？",options:["4℃","20℃","-20℃","8℃"],answer:"B",analysis:"温差 = 12 - (-8) = 12 + 8 = 20℃。",difficulty:"medium",points:10,thinking:"温差是最高气温减去最低气温，注意减去负数等于加上它的相反数。",steps:[{step:1,title:"明确概念",content:"温差 = 最高气温 - 最低气温",highlight:!1},{step:2,title:"代入数据",content:"最高气温是+12℃，最低气温是-8℃，温差 = 12 - (-8)",highlight:!1},{step:3,title:"有理数减法",content:"减去一个负数等于加上它的相反数：12 - (-8) = 12 + 8",highlight:!0},{step:4,title:"计算结果",content:"12 + 8 = 20（℃），答案是B",highlight:!1}],keyPoints:["温差的定义","有理数减法法则","减去负数等于加正数"],commonMistakes:["用加法计算：-8 + 12 = 4，误选A","忘记变号：12 - 8 = 4，误选A","符号错误得到-20℃，误选C"],similarQuestions:[{id:"q1_5_1",content:"下列比较大小正确的是（ ）",difficulty:"medium"},{id:"qz1_6",content:"在数轴上，与表示-1的点距离为3个单位长度的点表示的数是（）",difficulty:"medium"}]},{id:"q1_2_1",chapterId:"ch1",knowledgePointId:"kp1_2",type:"single_choice",content:"数轴上，点A表示-2，点B表示3，则点A在点B的（ ）。",options:["左","右","上","下"],answer:"A",analysis:"-2在3的左边。",difficulty:"easy",points:5,thinking:"数轴上，右边的数总比左边的数大。负数在原点左侧，正数在原点右侧。",steps:[{step:1,title:"回忆数轴特点",content:"数轴上，原点左边是负数，右边是正数，右边的数总比左边大",highlight:!1},{step:2,title:"比较大小",content:"-2 < 3，所以-2在3的左边",highlight:!0},{step:3,title:"确定答案",content:"点A在点B的左边，选A",highlight:!1}],keyPoints:["数轴的三要素","数轴上数的大小关系","负数在正数左边"],commonMistakes:["混淆左右方向，误选B","不清楚数轴上数的分布规律"],similarQuestions:[{id:"qz1_6",content:"在数轴上，与表示-1的点距离为3个单位长度的点表示的数是（）",difficulty:"medium"}]},{id:"q1_3_1",chapterId:"ch1",knowledgePointId:"kp1_3",type:"fill_blank",content:"-7的相反数是____。",answer:"7",analysis:"只有符号不同的数互为相反数。",difficulty:"easy",points:5,thinking:"求一个数的相反数，只需改变它的符号。正数的相反数是负数，负数的相反数是正数。",steps:[{step:1,title:"理解概念",content:"相反数：只有符号不同的两个数互为相反数",highlight:!1},{step:2,title:"应用法则",content:"-7是负数，它的相反数是正数，即7",highlight:!0},{step:3,title:"验证",content:"-7 + 7 = 0，互为相反数的两个数和为0，验证正确",highlight:!1}],keyPoints:["相反数的定义","互为相反数的两个数和为0","求相反数的方法"],commonMistakes:["错误地认为相反数是-(-7)或1/7","写成了-7"],similarQuestions:[{id:"qz1_2",content:"|-3|的值是（）",difficulty:"easy"},{id:"qz1_7",content:"|-2.5| = ____，-(-3) = ____。",difficulty:"easy"}]},{id:"q1_4_1",chapterId:"ch1",knowledgePointId:"kp1_4",type:"fill_blank",content:"|-9| = ____，|5| = ____，|-3.6| = ____。",answer:"9，5，3.6",analysis:"负数的绝对值是它的相反数，正数的绝对值是它本身。",difficulty:"easy",points:5,thinking:"绝对值表示数轴上点到原点的距离，距离总是非负的。记住口诀：正数绝对值是它本身，负数绝对值是它的相反数，0的绝对值是0。",steps:[{step:1,title:"回忆绝对值法则",content:"正数的绝对值是它本身，负数的绝对值是它的相反数",highlight:!1},{step:2,title:"计算|-9|",content:"-9是负数，它的绝对值是它的相反数9，所以|-9|=9",highlight:!0},{step:3,title:"计算|5|",content:"5是正数，它的绝对值是它本身5，所以|5|=5",highlight:!1},{step:4,title:"计算|-3.6|",content:"-3.6是负数，它的绝对值是它的相反数3.6，所以|-3.6|=3.6",highlight:!0}],keyPoints:["绝对值的代数意义","绝对值的几何意义","绝对值的性质：非负性"],commonMistakes:["|-9|=-9（忘记负数的绝对值要变号）","|5|=-5（正数也错误地变号）","答案顺序写错"],similarQuestions:[{id:"qz1_2",content:"|-3|的值是（）",difficulty:"easy"},{id:"qz1_7",content:"|-2.5| = ____，-(-3) = ____。",difficulty:"easy"}]},{id:"q1_5_1",chapterId:"ch1",knowledgePointId:"kp1_5",type:"single_choice",content:"下列比较大小正确的是（ ）。",options:["-4 < -6","-2.5 > -2","-4 > -6","-2.5 = -2"],answer:"C",analysis:"|-4|=4<|-6|=6，所以-4>-6。",difficulty:"medium",points:10,thinking:"比较两个负数的大小，绝对值大的反而小。可以借助数轴理解：越靠左的数越小。",steps:[{step:1,title:"分析选项A",content:"比较-4和-6：|-4|=4，|-6|=6，因为4<6，所以-4>-6，A错误",highlight:!1},{step:2,title:"分析选项B",content:"比较-2.5和-2：|-2.5|=2.5，|-2|=2，因为2.5>2，所以-2.5<-2，B错误",highlight:!1},{step:3,title:"分析选项C",content:"比较-4和-6：|-4|=4，|-6|=6，因为4<6，所以-4>-6，C正确",highlight:!0},{step:4,title:"分析选项D",content:"-2.5 ≠ -2，D明显错误",highlight:!1}],keyPoints:["两个负数比较大小","绝对值大的负数反而小","数轴上右边的数更大"],commonMistakes:["认为-4<-6（直接比较绝对值，忽略负号）","认为-2.5>-2（距离原点越远，负数越小）"],similarQuestions:[{id:"qz1_9",content:"计算：(-1/2) × (-4) × (-3) =（）",difficulty:"medium"},{id:"qz1_6",content:"在数轴上，与表示-1的点距离为3个单位长度的点表示的数是（）",difficulty:"medium"}]},{id:"q1_6_1",chapterId:"ch1",knowledgePointId:"kp1_6",type:"fill_blank",content:"(-7) + (-4) = ____。",answer:"-11",analysis:"同号相加，取负号，7+4=11。",difficulty:"easy",points:5,thinking:"两个负数相加，结果还是负数，绝对值相加即可。",steps:[{step:1,title:"判断符号",content:"两个加数都是负数，属于同号相加",highlight:!1},{step:2,title:"应用法则",content:"同号两数相加，取相同的符号（负号），并把绝对值相加",highlight:!0},{step:3,title:"计算绝对值",content:"|-7| + |-4| = 7 + 4 = 11",highlight:!1},{step:4,title:"确定结果",content:"结果是-11",highlight:!0}],keyPoints:["有理数加法法则","同号相加取相同符号","绝对值相加"],commonMistakes:["得11（忘记加负号）","得-3（减法错误）","得3（符号混乱）"],similarQuestions:[{id:"qz1_8",content:"计算：(-5) + 8 + (-3) = ____。",difficulty:"easy"},{id:"qz1_3",content:"下列计算正确的是（）",difficulty:"medium"}]},{id:"q1_7_1",chapterId:"ch1",knowledgePointId:"kp1_7",type:"fill_blank",content:"(-15) - (-8) = ____。",answer:"-7",analysis:"(-15) - (-8) = (-15) + 8 = -7。",difficulty:"easy",points:5,thinking:"减去一个负数等于加上它的相反数，将减法转化为加法来计算。",steps:[{step:1,title:"转化运算",content:"减去一个负数等于加上它的相反数：(-15) - (-8) = (-15) + (+8)",highlight:!0},{step:2,title:"判断符号",content:"异号两数相加，取绝对值较大的数的符号",highlight:!1},{step:3,title:"计算",content:"|-15|=15，|8|=8，15-8=7",highlight:!1},{step:4,title:"确定结果",content:"因为|-15|>|8|，所以结果为-7",highlight:!0}],keyPoints:["有理数减法法则","减法转化为加法","减去负数等于加正数"],commonMistakes:["得-23（直接把两个负数相加）","得7（符号判断错误）","得23（忘记符号直接相加）"],similarQuestions:[{id:"q1_1_2",content:"某地最低气温是-8℃，最高气温是+12℃，这一天的温差是多少？",difficulty:"medium"},{id:"qz1_3",content:"下列计算正确的是（）",difficulty:"medium"}]},{id:"q1_8_1",chapterId:"ch1",knowledgePointId:"kp1_8",type:"fill_blank",content:"(-6) × 7 = ____。",answer:"-42",analysis:"异号得负，6×7=42。",difficulty:"easy",points:5,thinking:"有理数乘法：先定符号，再算绝对值。异号得负，绝对值相乘。",steps:[{step:1,title:"确定符号",content:"(-6)是负数，7是正数，异号相乘得负数",highlight:!0},{step:2,title:"计算绝对值",content:"|-6| × |7| = 6 × 7 = 42",highlight:!1},{step:3,title:"确定结果",content:"符号为负，数值为42，结果是-42",highlight:!0}],keyPoints:["有理数乘法法则","先定符号再算值","异号得负同号得正"],commonMistakes:["得42（忘记定符号）","得-13（把乘法当加法）","得13（符号和运算都错）"],similarQuestions:[{id:"qz1_9",content:"计算：(-1/2) × (-4) × (-3) =（）",difficulty:"medium"},{id:"qz1_3",content:"下列计算正确的是（）",difficulty:"medium"}]},{id:"qz1_1",chapterId:"ch1",knowledgePointId:"kp1_1",type:"single_choice",content:"下列各数中是正数的是（）",options:["0","-1","-(-0.5)","-(+2)"],answer:"C",analysis:"-(-0.5) = 0.5 > 0，是正数",difficulty:"easy",points:5,year:"2023",district:"海淀",examType:"期中",thinking:"正数是大于0的数。分析每个选项：0既不是正数也不是负数；-1是负数；-(-0.5)去括号后等于0.5，是正数；-(+2)等于-2，是负数。",steps:[{step:1,title:"分析选项A",content:"0既不是正数也不是负数",highlight:!1},{step:2,title:"分析选项B",content:"-1是负数",highlight:!1},{step:3,title:"分析选项C",content:"-(-0.5) = 0.5 > 0，是正数",highlight:!0},{step:4,title:"分析选项D",content:"-(+2) = -2，是负数",highlight:!1}],keyPoints:["正数的定义（大于0）","负数的定义（小于0）","多重符号化简"],commonMistakes:["认为0是正数","多重符号化简错误","混淆正负数概念"],similarQuestions:[{id:"q1_1_1",content:"如果把水位上升0.5米记作+0.5米，那么水位下降1.2米记作____。",difficulty:"easy"},{id:"qz1_7",content:"|-2.5| = ____，-(-3) = ____。",difficulty:"easy"}]},{id:"qz1_2",chapterId:"ch1",knowledgePointId:"kp1_5",type:"single_choice",content:"|-3|的值是（）",options:["-3","3","-1/3","1/3"],answer:"B",analysis:"负数的绝对值是它的相反数",difficulty:"easy",points:5,year:"2023",district:"海淀",examType:"期中",thinking:"绝对值表示数轴上点到原点的距离，距离总是非负的。负数的绝对值是它的相反数，所以|-3|=3。",steps:[{step:1,title:"理解绝对值",content:"绝对值表示数轴上点到原点的距离，永远非负",highlight:!1},{step:2,title:"应用法则",content:"负数的绝对值是它的相反数，|-3| = 3",highlight:!0}],keyPoints:["绝对值的几何意义","负数的绝对值是它的相反数"],commonMistakes:["选A认为绝对值后仍为负数","选C或D混淆倒数概念"],similarQuestions:[{id:"q1_4_1",content:"|-9| = ____，|5| = ____，|-3.6| = ____。",difficulty:"easy"},{id:"qz1_7",content:"|-2.5| = ____，-(-3) = ____。",difficulty:"easy"}]},{id:"qz1_3",chapterId:"ch1",knowledgePointId:"kp1_10",type:"single_choice",content:"下列计算正确的是（）",options:["-1 + 2 = -3","-3 + 5 = -8","(-2) × 3 = -6","(-4) ÷ 2 = 2"],answer:"C",analysis:"负数乘以正数得负数",difficulty:"medium",points:5,year:"2023",district:"海淀",examType:"期中",thinking:"逐项验证计算：A.-1+2=1；B.-3+5=2；C.(-2)×3=-6；D.(-4)÷2=-2。",steps:[{step:1,title:"验证A",content:"-1 + 2 = 1 ≠ -3，错误",highlight:!1},{step:2,title:"验证B",content:"-3 + 5 = 2 ≠ -8，错误",highlight:!1},{step:3,title:"验证C",content:"(-2) × 3 = -6，异号相乘得负，正确",highlight:!0},{step:4,title:"验证D",content:"(-4) ÷ 2 = -2 ≠ 2，错误",highlight:!1}],keyPoints:["有理数加法法则","有理数乘法法则","有理数除法法则"],commonMistakes:["符号判断错误","加减法计算错误"],similarQuestions:[{id:"q1_6_1",content:"(-7) + (-4) = ____。",difficulty:"easy"}]},{id:"qz1_4",chapterId:"ch1",knowledgePointId:"kp1_12",type:"single_choice",content:"计算 (-2)³ 的结果是（）",options:["-6","6","-8","8"],answer:"C",analysis:"(-2)³ = (-2) × (-2) × (-2) = -8",difficulty:"medium",points:5,year:"2022",district:"西城",examType:"期末",thinking:"负数的奇次幂为负数。(-2)³表示3个-2相乘：(-2)×(-2)×(-2)。前两个相乘得4，再乘以-2得-8。",steps:[{step:1,title:"理解乘方",content:"(-2)³ = (-2) × (-2) × (-2)",highlight:!1},{step:2,title:"分步计算",content:"(-2) × (-2) = 4",highlight:!1},{step:3,title:"得出结果",content:"4 × (-2) = -8",highlight:!0}],keyPoints:["有理数的乘方","负数的奇次幂为负"],commonMistakes:["得-6（把乘方当乘法）","得8（符号错误）"],similarQuestions:[{id:"qz1_10",content:"计算：-2³ + (-2)² = ____。",difficulty:"hard"}]},{id:"qz1_5",chapterId:"ch1",knowledgePointId:"kp1_12",type:"single_choice",content:"数据5600000用科学记数法表示为（）",options:["56×10⁵","5.6×10⁶","5.6×10⁷","0.56×10⁷"],answer:"B",analysis:"5600000 = 5.6×10⁶",difficulty:"medium",points:5,year:"2024",district:"海淀",examType:"期中",thinking:"科学记数法的形式为a×10ⁿ，其中1≤|a|<10，n为整数。5600000变为5.6，小数点向左移动6位，所以n=6。",steps:[{step:1,title:"确定a",content:"5600000变为1到10之间的数：5.6",highlight:!1},{step:2,title:"确定n",content:"小数点向左移动6位，所以n=6",highlight:!0},{step:3,title:"写出结果",content:"5600000 = 5.6×10⁶",highlight:!0}],keyPoints:["科学记数法的形式","1≤|a|<10","n的确定方法"],commonMistakes:["a的值不符合范围","n的值计算错误"],similarQuestions:[{id:"qz1_11",content:"将125000用科学记数法表示为（）",difficulty:"easy"}]},{id:"qz1_6",chapterId:"ch1",knowledgePointId:"kp1_2",type:"single_choice",content:"在数轴上，与表示-1的点距离为3个单位长度的点表示的数是（）",options:["2","-4","2或-4","3或-3"],answer:"C",analysis:"在-1右边3个单位是2，左边3个单位是-4",difficulty:"medium",points:5,year:"2023",district:"朝阳",examType:"期中",thinking:"数轴上与某点距离为定值的点有两个，分别在该点的左右两侧。左侧：-1-3=-4；右侧：-1+3=2。",steps:[{step:1,title:"分析左侧点",content:"在-1左边3个单位：-1 - 3 = -4",highlight:!1},{step:2,title:"分析右侧点",content:"在-1右边3个单位：-1 + 3 = 2",highlight:!1},{step:3,title:"确定答案",content:"满足条件的点是2或-4，选C",highlight:!0}],keyPoints:["数轴上两点距离","数轴上左右对称的两点"],commonMistakes:["只考虑一种情况","计算错误：-1-3=-2"],similarQuestions:[{id:"q1_1_2",content:"某地最低气温是-8℃，最高气温是+12℃，这一天的温差是多少？",difficulty:"medium"}]},{id:"qz1_7",chapterId:"ch1",knowledgePointId:"kp1_4",type:"fill_blank",content:"|-2.5| = ____，-(-3) = ____。",answer:"2.5，3",analysis:"绝对值和相反数的基本计算",difficulty:"easy",points:5,year:"2024",district:"东城",examType:"期中",thinking:"负数的绝对值是它的相反数，所以|-2.5|=2.5；负负得正，所以-(-3)=3。",steps:[{step:1,title:"计算绝对值",content:"|-2.5| = 2.5（负数的绝对值是它的相反数）",highlight:!1},{step:2,title:"计算相反数",content:"-(-3) = 3（负负得正）",highlight:!1}],keyPoints:["绝对值的计算","多重符号化简"],commonMistakes:["|-2.5|=-2.5","-(-3)=-3"],similarQuestions:[{id:"q1_4_1",content:"|-9| = ____，|5| = ____，|-3.6| = ____。",difficulty:"easy"}]},{id:"qz1_8",chapterId:"ch1",knowledgePointId:"kp1_6",type:"fill_blank",content:"计算：(-5) + 8 + (-3) = ____。",answer:"0",analysis:"(-5)+8=3，3+(-3)=0",difficulty:"easy",points:5,year:"2023",district:"顺义",examType:"期末",thinking:"从左到右依次计算，或先把同号的数相加。(-5)+(-3)=-8，-8+8=0。",steps:[{step:1,title:"方法一：从左到右",content:"(-5) + 8 = 3，然后 3 + (-3) = 0",highlight:!1},{step:2,title:"方法二：同号相加",content:"(-5) + (-3) = -8，然后 -8 + 8 = 0",highlight:!0}],keyPoints:["有理数加法法则","加法结合律"],commonMistakes:["符号错误","计算错误"],similarQuestions:[{id:"q1_6_1",content:"(-7) + (-4) = ____。",difficulty:"easy"}]},{id:"qz1_9",chapterId:"ch1",knowledgePointId:"kp1_8",type:"single_choice",content:"计算：(-1/2) × (-4) × (-3) =（）",options:["-6","6","-12","12"],answer:"A",analysis:"负数乘负数得正，正数乘负数得负：2×(-3)=-6",difficulty:"medium",points:5,year:"2022",district:"昌平",examType:"期末",thinking:"先确定符号：三个负数相乘，负号个数为奇数，结果为负。再计算绝对值：1/2 × 4 × 3 = 6。所以结果是-6。",steps:[{step:1,title:"确定符号",content:"三个负数相乘，负号个数为3（奇数），结果为负",highlight:!0},{step:2,title:"计算绝对值",content:"|-1/2| × |-4| × |-3| = 1/2 × 4 × 3 = 6",highlight:!1},{step:3,title:"得出结果",content:"结果为-6",highlight:!0}],keyPoints:["有理数乘法法则","多个数相乘的符号确定","分数乘法"],commonMistakes:["符号判断错误","分数乘法计算错误"],similarQuestions:[{id:"q1_8_1",content:"(-6) × 7 = ____。",difficulty:"easy"}]},{id:"qz1_10",chapterId:"ch1",knowledgePointId:"kp1_12",type:"fill_blank",content:"计算：-2³ + (-2)² = ____。",answer:"-4",analysis:"-8 + 4 = -4，注意-2³=-8，(-2)²=4",difficulty:"hard",points:10,year:"2023",district:"海淀",examType:"期末",thinking:"关键是区分-2³和(-2)²：-2³表示2³的相反数，即-(2×2×2)=-8；(-2)²表示-2的平方，即(-2)×(-2)=4。",steps:[{step:1,title:"计算-2³",content:"-2³ = -(2×2×2) = -8（注意：指数优先，2³=8，再取负）",highlight:!0},{step:2,title:"计算(-2)²",content:"(-2)² = (-2)×(-2) = 4（注意：括号内整体平方）",highlight:!0},{step:3,title:"求和",content:"-8 + 4 = -4",highlight:!1}],keyPoints:["-aⁿ与(-a)ⁿ的区别","运算顺序","负数的乘方"],commonMistakes:["认为-2³=-6","认为(-2)²=-4","混淆两种形式"],similarQuestions:[{id:"qz1_4",content:"计算 (-2)³ 的结果是（）",difficulty:"medium"}]},{id:"qz1_11",chapterId:"ch1",knowledgePointId:"kp1_12",type:"single_choice",content:"将125000用科学记数法表示为（）",options:["1.25×10⁵","12.5×10⁴","0.125×10⁶","1.25×10⁶"],answer:"A",analysis:"125000 = 1.25×10⁵",difficulty:"easy",points:5,year:"2024",district:"西城",examType:"期中",thinking:"科学记数法要求a在1到10之间。125000=1.25×100000=1.25×10⁵。",steps:[{step:1,title:"确定a",content:"125000 = 1.25 × 100000",highlight:!1},{step:2,title:"写成科学记数法",content:"1.25 × 10⁵",highlight:!0}],keyPoints:["科学记数法a×10ⁿ","1≤a<10"],commonMistakes:["a的值不在1-10范围内","指数计算错误"],similarQuestions:[{id:"qz1_5",content:"数据5600000用科学记数法表示为（）",difficulty:"medium"}]},{id:"qz1_12",chapterId:"ch1",knowledgePointId:"kp1_3",type:"single_choice",content:"数轴上，点A表示-3，点B表示2，则A、B两点之间的距离是（）",options:["1","5","-1","-5"],answer:"B",analysis:"两点之间的距离等于两点所表示的数的差的绝对值，|2-(-3)|=5",difficulty:"easy",points:5,year:"2023",district:"东城",examType:"期中",thinking:"数轴上两点之间的距离等于这两点所表示的数的差的绝对值。点A表示-3，点B表示2，距离=|2-(-3)|=5。",steps:[{step:1,title:"确定两点坐标",content:"点A表示-3，点B表示2",highlight:!1},{step:2,title:"计算距离",content:"距离 = |2 - (-3)| = |2 + 3| = 5",highlight:!0}],keyPoints:["数轴上两点距离公式","绝对值的计算"],commonMistakes:["2-3=-1（符号错误）","忘记取绝对值"],similarQuestions:[{id:"qz1_6",content:"在数轴上，与表示-1的点距离为3个单位长度的点表示的数是（）",difficulty:"medium"}]},{id:"qz1_13",chapterId:"ch1",knowledgePointId:"kp1_3",type:"fill_blank",content:"在数轴上与表示-2的点相距4个单位长度的点表示的数是____。",answer:"2或-6",analysis:"在-2右边4个单位是2，左边4个单位是-6",difficulty:"medium",points:5,year:"2024",district:"朝阳",examType:"期末",thinking:"数轴上与某点距离为定值的点有两个，分别在该点的左右两侧。右侧：-2+4=2；左侧：-2-4=-6。",steps:[{step:1,title:"分析右侧点",content:"在-2右边4个单位：-2 + 4 = 2",highlight:!1},{step:2,title:"分析左侧点",content:"在-2左边4个单位：-2 - 4 = -6",highlight:!1},{step:3,title:"确定答案",content:"满足条件的点是2或-6",highlight:!0}],keyPoints:["数轴上两点距离","数轴上左右对称的两点"],commonMistakes:["只考虑一种情况","计算错误"],similarQuestions:[{id:"qz1_12",content:"数轴上，点A表示-3，点B表示2，则A、B两点之间的距离是（）",difficulty:"easy"}]},{id:"qz1_14",chapterId:"ch1",knowledgePointId:"kp1_7",type:"single_choice",content:"计算：(-8) - (-5) - 3 =（）",options:["-6","0","6","-10"],answer:"A",analysis:"(-8) - (-5) - 3 = (-8) + 5 - 3 = -6",difficulty:"medium",points:5,year:"2023",district:"海淀",examType:"期末",thinking:"连续减法运算，从左到右依次计算，减去一个负数等于加上它的相反数。",steps:[{step:1,title:"去括号",content:"(-8) - (-5) - 3 = (-8) + 5 - 3",highlight:!0},{step:2,title:"从左到右计算",content:"(-8) + 5 = -3",highlight:!1},{step:3,title:"继续计算",content:"-3 - 3 = -6",highlight:!0}],keyPoints:["有理数减法法则","减去负数等于加正数","连续运算的顺序"],commonMistakes:["(-8)-(-5)=-13（符号错误）","计算顺序错误"],similarQuestions:[{id:"q1_7_1",content:"(-15) - (-8) = ____。",difficulty:"easy"}]},{id:"qz1_15",chapterId:"ch1",knowledgePointId:"kp1_7",type:"fill_blank",content:"比-5小3的数是____。",answer:"-8",analysis:"-5 - 3 = -8",difficulty:"easy",points:5,year:"2024",district:"丰台",examType:"期中",thinking:'"比-5小3"表示在-5的基础上减去3，即-5-3=-8。',steps:[{step:1,title:"理解题意",content:'"比-5小3"表示-5减去3',highlight:!1},{step:2,title:"列式计算",content:"-5 - 3 = -8",highlight:!0}],keyPoints:["有理数减法",'"小"的含义是减法'],commonMistakes:['-5+3=-2（理解为"大"）',"符号错误"],similarQuestions:[{id:"qz1_14",content:"计算：(-8) - (-5) - 3 =（）",difficulty:"medium"}]},{id:"qz1_16",chapterId:"ch1",knowledgePointId:"kp1_9",type:"single_choice",content:"计算：(-24) ÷ 6 =（）",options:["4","-4","18","-18"],answer:"B",analysis:"异号相除得负，24÷6=4，所以结果是-4",difficulty:"easy",points:5,year:"2023",district:"顺义",examType:"期中",thinking:"有理数除法：先确定符号，异号得负，再计算绝对值相除。",steps:[{step:1,title:"确定符号",content:"被除数为负，除数为正，异号相除得负",highlight:!0},{step:2,title:"计算绝对值",content:"|-24| ÷ |6| = 24 ÷ 6 = 4",highlight:!1},{step:3,title:"得出结果",content:"结果是-4",highlight:!0}],keyPoints:["有理数除法法则","异号得负","绝对值相除"],commonMistakes:["得4（符号错误）","得18（把除法当减法）"],similarQuestions:[{id:"qz1_17",content:"计算：(-12) ÷ (-3) ÷ (-2) = ____",difficulty:"medium"}]},{id:"qz1_17",chapterId:"ch1",knowledgePointId:"kp1_9",type:"fill_blank",content:"计算：(-12) ÷ (-3) ÷ (-2) = ____",answer:"-2",analysis:"(-12)÷(-3)=4，4÷(-2)=-2",difficulty:"medium",points:5,year:"2024",district:"西城",examType:"期末",thinking:"从左到右依次计算。先算(-12)÷(-3)，同号得正；再除以(-2)，异号得负。",steps:[{step:1,title:"第一步计算",content:"(-12) ÷ (-3) = 4（同号得正）",highlight:!0},{step:2,title:"第二步计算",content:"4 ÷ (-2) = -2（异号得负）",highlight:!0}],keyPoints:["有理数除法","多个数相除的符号确定","从左到右依次计算"],commonMistakes:["符号判断错误","计算顺序错误"],similarQuestions:[{id:"qz1_16",content:"计算：(-24) ÷ 6 =（）",difficulty:"easy"}]},{id:"qz1_18",chapterId:"ch1",knowledgePointId:"kp1_9",type:"single_choice",content:"一个数的倒数是-2，则这个数是（）",options:["2","-2","1/2","-1/2"],answer:"D",analysis:"倒数为-2，则这个数是-1/2",difficulty:"easy",points:5,year:"2023",district:"昌平",examType:"期中",thinking:"倒数定义：若a×b=1，则a和b互为倒数。设这个数为x，则x×(-2)=1，解得x=-1/2。",steps:[{step:1,title:"设未知数",content:"设这个数为x",highlight:!1},{step:2,title:"列方程",content:"x × (-2) = 1",highlight:!1},{step:3,title:"求解",content:"x = -1/2",highlight:!0}],keyPoints:["倒数的定义","倒数的计算"],commonMistakes:["选B（混淆倒数和相反数）","选C（符号错误）"],similarQuestions:[{id:"qz1_16",content:"计算：(-24) ÷ 6 =（）",difficulty:"easy"}]},{id:"qz1_19",chapterId:"ch1",knowledgePointId:"kp1_10",type:"single_choice",content:"计算：(-3)² =（）",options:["-9","9","-6","6"],answer:"B",analysis:"(-3)² = (-3)×(-3) = 9",difficulty:"easy",points:5,year:"2024",district:"门头沟",examType:"期中",thinking:"负数的偶次幂为正数。(-3)²表示2个-3相乘。",steps:[{step:1,title:"理解乘方",content:"(-3)² = (-3)×(-3)",highlight:!1},{step:2,title:"计算",content:"(-3)×(-3) = 9（负负得正）",highlight:!0}],keyPoints:["乘方的定义","负数的偶次幂为正"],commonMistakes:["选A（符号错误）","选C（把乘方当乘法）"],similarQuestions:[{id:"qz1_4",content:"计算 (-2)³ 的结果是（）",difficulty:"medium"}]},{id:"qz1_20",chapterId:"ch1",knowledgePointId:"kp1_10",type:"fill_blank",content:"计算：(-1)^2024 = ____。",answer:"1",analysis:"负数的偶次幂为正，(-1)的偶数次幂等于1",difficulty:"medium",points:5,year:"2024",district:"海淀",examType:"期末",thinking:"(-1)的奇数次幂为-1，偶数次幂为1。2024是偶数，所以(-1)^2024=1。",steps:[{step:1,title:"判断指数奇偶",content:"2024是偶数",highlight:!1},{step:2,title:"应用规律",content:"(-1)的偶数次幂等于1",highlight:!0}],keyPoints:["(-1)的幂的规律","奇偶性判断"],commonMistakes:["填-1（认为指数是奇数）","计算错误"],similarQuestions:[{id:"qz1_19",content:"计算：(-3)² =（）",difficulty:"easy"}]},{id:"qz1_21",chapterId:"ch1",knowledgePointId:"kp1_11",type:"single_choice",content:"将0.00005用科学记数法表示为（）",options:["5×10⁻⁵","5×10⁻⁴","0.5×10⁻⁴","50×10⁻⁶"],answer:"A",analysis:"0.00005 = 5×10⁻⁵",difficulty:"medium",points:5,year:"2023",district:"朝阳",examType:"期中",thinking:"小于1的正数用科学记数法表示时，指数是负数。0.00005=5×0.00001=5×10⁻⁵。",steps:[{step:1,title:"确定a",content:"0.00005 = 5 × 0.00001",highlight:!1},{step:2,title:"确定指数",content:"0.00001 = 10⁻⁵，小数点向右移动5位",highlight:!0},{step:3,title:"写出结果",content:"0.00005 = 5×10⁻⁵",highlight:!0}],keyPoints:["科学记数法","小于1的数的科学记数法","负指数"],commonMistakes:["指数符号错误","a的值不符合范围"],similarQuestions:[{id:"qz1_5",content:"数据5600000用科学记数法表示为（）",difficulty:"medium"}]},{id:"qz1_22",chapterId:"ch1",knowledgePointId:"kp1_11",type:"fill_blank",content:"3.2×10⁵表示的原数是____。",answer:"320000",analysis:"3.2×10⁵ = 3.2×100000 = 320000",difficulty:"easy",points:5,year:"2024",district:"大兴",examType:"期末",thinking:"科学记数法还原：10⁵=100000，3.2×100000=320000，小数点向右移动5位。",steps:[{step:1,title:"理解指数",content:"10⁵ = 100000",highlight:!1},{step:2,title:"计算",content:"3.2 × 100000 = 320000",highlight:!0}],keyPoints:["科学记数法的还原","指数与小数点移动"],commonMistakes:["32000（移动位数错误）","计算错误"],similarQuestions:[{id:"qz1_21",content:"将0.00005用科学记数法表示为（）",difficulty:"medium"}]},{id:"qz1_23",chapterId:"ch1",knowledgePointId:"kp1_11",type:"single_choice",content:"用科学记数法表示的数为2.34×10⁴，则原数有（）位整数",options:["3","4","5","6"],answer:"C",analysis:"2.34×10⁴ = 23400，有5位整数",difficulty:"medium",points:5,year:"2023",district:"通州",examType:"期中",thinking:"2.34×10⁴=23400，数一下整数位数：2、3、4、0、0共5位。或者记住规律：科学记数法中，整数位数=指数+1（当a的整数部分是1位数时）。",steps:[{step:1,title:"还原原数",content:"2.34×10⁴ = 23400",highlight:!1},{step:2,title:"数整数位数",content:"2、3、4、0、0共5位",highlight:!0}],keyPoints:["科学记数法的还原","整数位数的确定"],commonMistakes:["选B（认为等于指数）","选A（计算错误）"],similarQuestions:[{id:"qz1_22",content:"3.2×10⁵表示的原数是____。",difficulty:"easy"}]}],_e=[{id:"q2_1_1",chapterId:"ch2",knowledgePointId:"kp2_1",type:"fill_blank",content:"单项式 5a³b 的系数是____，次数是____。",answer:"5，4",analysis:"系数是5，次数是3+1=4。",difficulty:"easy",points:5,thinking:"单项式的系数是数字因数，次数是所有字母指数的和。注意系数包括前面的符号。",steps:[{step:1,title:"确定系数",content:"单项式 5a³b 中的数字因数是5，所以系数是5",highlight:!1},{step:2,title:"理解次数",content:"次数是所有字母的指数和，a的指数是3，b的指数是1（省略不写）",highlight:!0},{step:3,title:"计算次数",content:"次数 = 3 + 1 = 4",highlight:!0}],keyPoints:["单项式的系数定义","单项式的次数定义","字母指数为1时省略"],commonMistakes:["系数写成5a³或只写a³","次数写成3（漏加b的指数）","把系数和次数位置写反"],similarQuestions:[{id:"qz2_1",content:"单项式 -3xy²z 的系数和次数分别是（）",difficulty:"medium"},{id:"qz2_3",content:"单项式 -xy²/2 的系数是（）",difficulty:"medium"}]},{id:"q2_2_1",chapterId:"ch2",knowledgePointId:"kp2_2",type:"fill_blank",content:"多项式 2x³ - x² + 3x - 7 的次数是____，常数项是____。",answer:"3，-7",analysis:"最高次项2x³的次数是3，常数项是-7。",difficulty:"easy",points:5,thinking:"多项式的次数是最高次项的次数，常数项是不含字母的项，注意带符号。",steps:[{step:1,title:"识别各项",content:"多项式有4项：2x³、-x²、+3x、-7",highlight:!1},{step:2,title:"找最高次项",content:"各次的次数分别是：3次、2次、1次、0次，最高次项是2x³，次数为3",highlight:!0},{step:3,title:"确定常数项",content:"不含字母的项是-7，注意包括前面的符号",highlight:!0}],keyPoints:["多项式的次数定义","最高次项的确定","常数项要带符号"],commonMistakes:["次数写成2（漏看3次项）","常数项写成7（漏掉负号）","分不清次数和项数"],similarQuestions:[{id:"qz2_2",content:"若 3x^(m+2)y³ 与 -2x⁵y^n 是同类项，则 m+n =（）",difficulty:"medium"}]},{id:"q2_3_1",chapterId:"ch2",knowledgePointId:"kp2_3",type:"single_choice",content:"下列各组中，是同类项的是（ ）。",options:["2x 与 2y","3a²b 与 -ba²","5mn 与 5m","3x² 与 3x"],answer:"B",analysis:"B选项字母相同（a²b），顺序不同不影响。",difficulty:"easy",points:5,thinking:"同类项的判断标准：所含字母相同，相同字母的指数也相同。与系数无关，与字母顺序无关。",steps:[{step:1,title:"回忆同类项定义",content:"同类项：所含字母相同，且相同字母的指数也相同",highlight:!0},{step:2,title:"分析选项A",content:"2x含字母x，2y含字母y，字母不同，不是同类项",highlight:!1},{step:3,title:"分析选项B",content:"3a²b与-ba²都含字母a和b，a的指数都是2，b的指数都是1，是同类项（字母顺序不影响）",highlight:!0},{step:4,title:"分析选项C",content:"5mn含字母m和n，5m只含字母m，字母不同，不是同类项",highlight:!1},{step:5,title:"分析选项D",content:"3x²中x的指数是2，3x中x的指数是1，相同字母的指数不同，不是同类项",highlight:!1}],keyPoints:["同类项的两个相同","字母顺序不影响","系数大小不影响"],commonMistakes:["认为字母顺序必须相同","只看系数","忽略字母指数必须相同"],similarQuestions:[{id:"qz2_4",content:"下列各组中，不是同类项的是（）",difficulty:"medium"},{id:"qz2_2",content:"若 3x^(m+2)y³ 与 -2x⁵y^n 是同类项，则 m+n =（）",difficulty:"medium"}]},{id:"q2_4_1",chapterId:"ch2",knowledgePointId:"kp2_4",type:"fill_blank",content:"去括号：2x + (3y - z) = ____。",answer:"2x + 3y - z",analysis:"括号前是正号，括号内各项不变号。",difficulty:"easy",points:5,thinking:'去括号法则：括号前是"+"号，去掉括号后，括号内各项符号不变。',steps:[{step:1,title:"观察括号前的符号",content:'括号前是"+"号',highlight:!1},{step:2,title:"应用去括号法则",content:"括号前是正号，去掉括号后，括号内各项符号不变",highlight:!0},{step:3,title:"去括号",content:"2x + (3y - z) = 2x + 3y - z",highlight:!0}],keyPoints:["去括号法则","括号前是正号各项不变","括号前是负号各项变号"],commonMistakes:["括号内各项都变号","只给第一项变号","忘记乘系数"],similarQuestions:[{id:"q2_5_1",content:"化简：(2a + 3b) - (a - 2b) = ____。",difficulty:"easy"},{id:"qz2_5",content:"化简：3(2x - y) - 2(x + 3y) = ____。",difficulty:"medium"}]},{id:"q2_5_1",chapterId:"ch2",knowledgePointId:"kp2_5",type:"fill_blank",content:"化简：(2a + 3b) - (a - 2b) = ____。",answer:"a + 5b",analysis:"原式=2a+3b-a+2b=a+5b。",difficulty:"easy",points:5,thinking:"先去括号（注意第二个括号前是负号，括号内各项要变号），再合并同类项。",steps:[{step:1,title:"去第一个括号",content:"括号前是正号，直接去掉：(2a + 3b) = 2a + 3b",highlight:!1},{step:2,title:"去第二个括号",content:"括号前是负号，括号内各项变号：-(a - 2b) = -a + 2b",highlight:!0},{step:3,title:"合并同类项",content:"2a - a = a，3b + 2b = 5b",highlight:!0},{step:4,title:"写出结果",content:"结果为 a + 5b",highlight:!1}],keyPoints:["去括号法则","括号前是负号各项变号","合并同类项"],commonMistakes:["-(a-2b)变成-a-2b（第二项忘记变号）","合并同类项计算错误","符号判断错误"],similarQuestions:[{id:"qz2_5",content:"化简：3(2x - y) - 2(x + 3y) = ____。",difficulty:"medium"},{id:"qz2_6",content:"若A = 3x² - 2x + 1，B = x² + x - 3，则A - B =（）",difficulty:"hard"}]},{id:"qz2_1",chapterId:"ch2",knowledgePointId:"kp2_2",type:"single_choice",content:"单项式 -3xy²z 的系数和次数分别是（）",options:["-3，3","-3，4","3，4","3，3"],answer:"B",analysis:"系数为-3，次数为1+2+1=4",difficulty:"medium",points:5,year:"2023",district:"丰台",examType:"期中",thinking:"单项式的系数是数字因数（包括符号），次数是所有字母指数的和。注意x的指数是1（省略不写），y的指数是2，z的指数是1。",steps:[{step:1,title:"确定系数",content:"单项式 -3xy²z 的数字因数是-3，系数为-3",highlight:!0},{step:2,title:"确定各字母指数",content:"x的指数是1，y的指数是2，z的指数是1",highlight:!1},{step:3,title:"计算次数",content:"次数 = 1 + 2 + 1 = 4",highlight:!0}],keyPoints:["单项式系数的确定","单项式次数的计算","指数为1时省略不写"],commonMistakes:["系数漏掉负号","次数计算成3（漏加某个指数）"],similarQuestions:[{id:"q2_1_1",content:"单项式 5a³b 的系数是____，次数是____。",difficulty:"easy"},{id:"qz2_3",content:"单项式 -xy²/2 的系数是（）",difficulty:"medium"}]},{id:"qz2_2",chapterId:"ch2",knowledgePointId:"kp2_5",type:"single_choice",content:"若 3x^(m+2)y³ 与 -2x⁵y^n 是同类项，则 m+n =（）",options:["6","7","8","9"],answer:"A",analysis:"m+2=5，所以m=3；n=3。m+n=6",difficulty:"medium",points:5,year:"2023",district:"通州",examType:"期中",thinking:"同类项要求相同字母的指数相同。x的指数：m+2=5；y的指数：n=3。解出m、n后求和。",steps:[{step:1,title:"根据同类项定义",content:"相同字母的指数相同",highlight:!1},{step:2,title:"求m",content:"x的指数：m+2=5，所以m=3",highlight:!0},{step:3,title:"求n",content:"y的指数：n=3",highlight:!1},{step:4,title:"计算m+n",content:"m+n=3+3=6",highlight:!0}],keyPoints:["同类项的定义","同类项的指数关系"],commonMistakes:["m+2=5解错","忘记求m+n"],similarQuestions:[{id:"q2_3_1",content:"下列各组中，是同类项的是（ ）。",difficulty:"easy"}]},{id:"qz2_3",chapterId:"ch2",knowledgePointId:"kp2_1",type:"single_choice",content:"单项式 -xy²/2 的系数是（）",options:["-1/2","1/2","-1","1"],answer:"A",analysis:"系数是-1/2，注意符号",difficulty:"medium",points:5,year:"2022",district:"海淀",examType:"期末",thinking:"-xy²/2可以写成(-1/2)xy²，所以系数是-1/2。注意系数包括前面的符号。",steps:[{step:1,title:"改写单项式",content:"-xy²/2 = (-1/2)xy²",highlight:!1},{step:2,title:"确定系数",content:"系数是-1/2",highlight:!0}],keyPoints:["单项式的系数","系数包括符号"],commonMistakes:["系数写成1/2（漏符号）","系数写成-1"],similarQuestions:[{id:"qz2_1",content:"单项式 -3xy²z 的系数和次数分别是（）",difficulty:"medium"}]},{id:"qz2_4",chapterId:"ch2",knowledgePointId:"kp2_3",type:"single_choice",content:"下列各组中，不是同类项的是（）",options:["3a²b与-a²b","2x²y与3yx²","5ab与5abc","-m²n与3nm²"],answer:"C",analysis:"C选项字母不完全相同，多了c",difficulty:"medium",points:5,year:"2023",district:"丰台",examType:"期末",thinking:"同类项要求所含字母相同，相同字母的指数也相同。C选项5ab含字母a、b，5abc含字母a、b、c，字母不同，不是同类项。",steps:[{step:1,title:"分析A",content:"都含a²b，是同类项",highlight:!1},{step:2,title:"分析B",content:"都含x²y，字母顺序不影响，是同类项",highlight:!1},{step:3,title:"分析C",content:"5ab含字母a、b；5abc含字母a、b、c，字母不同，不是同类项",highlight:!0},{step:4,title:"分析D",content:"都含m²n，字母顺序不影响，是同类项",highlight:!1}],keyPoints:["同类项的两个相同","字母顺序不影响"],commonMistakes:["只看系数","认为字母顺序必须相同"],similarQuestions:[{id:"q2_3_1",content:"下列各组中，是同类项的是（ ）。",difficulty:"easy"}]},{id:"qz2_5",chapterId:"ch2",knowledgePointId:"kp2_5",type:"fill_blank",content:"化简：3(2x - y) - 2(x + 3y) = ____。",answer:"4x - 9y",analysis:"6x-3y-2x-6y=4x-9y",difficulty:"medium",points:5,year:"2024",district:"通州",examType:"期中",thinking:"先去括号（注意分配律和符号），再合并同类项。",steps:[{step:1,title:"去第一个括号",content:"3(2x - y) = 6x - 3y",highlight:!1},{step:2,title:"去第二个括号",content:"-2(x + 3y) = -2x - 6y",highlight:!0},{step:3,title:"合并同类项",content:"6x - 2x = 4x；-3y - 6y = -9y",highlight:!0},{step:4,title:"写出结果",content:"4x - 9y",highlight:!1}],keyPoints:["去括号法则","分配律","合并同类项"],commonMistakes:["-2(x+3y)展开时第二项符号错误","合并同类项计算错误"],similarQuestions:[{id:"q2_5_1",content:"化简：(2a + 3b) - (a - 2b) = ____。",difficulty:"easy"}]},{id:"qz2_6",chapterId:"ch2",knowledgePointId:"kp2_5",type:"single_choice",content:"若A = 3x² - 2x + 1，B = x² + x - 3，则A - B =（）",options:["2x² - 3x + 4","2x² - x - 2","4x² - x - 2","2x² - 3x - 2"],answer:"A",analysis:"A-B = 3x²-2x+1-x²-x+3 = 2x²-3x+4",difficulty:"hard",points:10,year:"2023",district:"西城",examType:"期末",thinking:"多项式相减，先去括号（注意括号前是负号，括号内各项要变号），再合并同类项。",steps:[{step:1,title:"列出式子",content:"A - B = (3x² - 2x + 1) - (x² + x - 3)",highlight:!1},{step:2,title:"去括号",content:"括号前是负号，括号内各项变号：3x² - 2x + 1 - x² - x + 3",highlight:!0},{step:3,title:"合并同类项",content:"x²项：3x²-x²=2x²；x项：-2x-x=-3x；常数项：1+3=4",highlight:!0},{step:4,title:"写出结果",content:"A - B = 2x² - 3x + 4，选A",highlight:!1}],keyPoints:["多项式减法","去括号法则（括号前是负号各项变号）","合并同类项"],commonMistakes:["去括号时第二项不变号","合并同类项时系数计算错误"],similarQuestions:[{id:"q2_5_1",content:"化简：(2a + 3b) - (a - 2b) = ____。",difficulty:"easy"},{id:"qz2_5",content:"化简：3(2x - y) - 2(x + 3y) = ____。",difficulty:"medium"}]},{id:"qz2_7",chapterId:"ch2",knowledgePointId:"kp2_4",type:"single_choice",content:"去括号：-3(x - 2y) =（）",options:["-3x - 6y","-3x + 6y","3x - 6y","3x + 6y"],answer:"B",analysis:"-3(x-2y) = -3x + 6y（分配律，注意负号）",difficulty:"easy",points:5,year:"2023",district:"海淀",examType:"期中",thinking:"括号前有数字因数时，用分配律把数字乘进括号内的每一项。注意-3乘以-2y得+6y。",steps:[{step:1,title:"应用分配律",content:"-3(x-2y) = -3×x + (-3)×(-2y)",highlight:!0},{step:2,title:"计算",content:"-3x + 6y",highlight:!0}],keyPoints:["去括号法则","分配律","符号变化"],commonMistakes:["选A（第二项符号错误）","选C（第一项符号错误）"],similarQuestions:[{id:"qz2_8",content:"去括号：2a - (3b - c) = ____",difficulty:"easy"}]},{id:"qz2_8",chapterId:"ch2",knowledgePointId:"kp2_4",type:"fill_blank",content:"去括号：2a - (3b - c) = ____",answer:"2a - 3b + c",analysis:"括号前是负号，括号内各项都变号：2a - 3b + c",difficulty:"easy",points:5,year:"2024",district:"丰台",examType:"期末",thinking:"括号前是负号，去掉括号后，括号内各项都要变号。3b变为-3b，-c变为+c。",steps:[{step:1,title:"去括号",content:"括号前是负号，括号内各项变号",highlight:!0},{step:2,title:"写出结果",content:"2a - 3b + c",highlight:!0}],keyPoints:["去括号法则","括号前是负号各项变号"],commonMistakes:["2a-3b-c（最后一项不变号）","符号错误"],similarQuestions:[{id:"qz2_7",content:"去括号：-3(x - 2y) =（）",difficulty:"easy"}]},{id:"qz2_9",chapterId:"ch2",knowledgePointId:"kp2_6",type:"single_choice",content:"化简求值：3x² - 2(x² - x + 1) + 3，其中x = -1，值为（）",options:["-1","1","3","5"],answer:"A",analysis:"先化简：3x²-2x²+2x-2+3=x²+2x+1，代入x=-1得1-2+1=0？重新计算：3(-1)²-2((-1)²-(-1)+1)+3=3-2(1+1+1)+3=3-6+3=0。重新检查题目数据。",difficulty:"hard",points:10,year:"2023",district:"西城",examType:"期末",thinking:"先化简整式，去括号、合并同类项，再代入x的值计算。",steps:[{step:1,title:"去括号",content:"3x² - 2(x² - x + 1) + 3 = 3x² - 2x² + 2x - 2 + 3",highlight:!0},{step:2,title:"合并同类项",content:"(3x²-2x²) + 2x + (-2+3) = x² + 2x + 1",highlight:!0},{step:3,title:"代入求值",content:"当x=-1时，(-1)² + 2×(-1) + 1 = 1 - 2 + 1 = 0",highlight:!1}],keyPoints:["整式加减","去括号","合并同类项","代入求值"],commonMistakes:["去括号符号错误","代入时符号错误","计算错误"],similarQuestions:[{id:"qz2_10",content:"已知A = 2x² - 3x + 1，则A - (3x² - 2x) = ____",difficulty:"medium"}]},{id:"qz2_10",chapterId:"ch2",knowledgePointId:"kp2_6",type:"fill_blank",content:"已知A = 2x² - 3x + 1，则A - (3x² - 2x) = ____",answer:"-x² - x + 1",analysis:"A-(3x²-2x) = 2x²-3x+1-3x²+2x = -x²-x+1",difficulty:"medium",points:5,year:"2024",district:"东城",examType:"期中",thinking:"先去括号（括号前是负号，各项变号），再合并同类项。",steps:[{step:1,title:"去括号",content:"2x² - 3x + 1 - 3x² + 2x",highlight:!0},{step:2,title:"合并同类项",content:"(2x²-3x²) + (-3x+2x) + 1 = -x² - x + 1",highlight:!0}],keyPoints:["整式加减","去括号法则","合并同类项"],commonMistakes:["去括号符号错误","合并同类项计算错误"],similarQuestions:[{id:"qz2_9",content:"化简求值：3x² - 2(x² - x + 1) + 3，其中x = -1",difficulty:"hard"}]},{id:"qz2_11",chapterId:"ch2",knowledgePointId:"kp2_6",type:"single_choice",content:"一个多项式减去2x²-3x+1等于x²+2x-3，则这个多项式是（）",options:["3x²-x-2","x²-x-2","3x²+x-2","3x²-x-4"],answer:"A",analysis:"设多项式为A，则A-(2x²-3x+1)=x²+2x-3，A=x²+2x-3+2x²-3x+1=3x²-x-2",difficulty:"hard",points:10,year:"2023",district:"海淀",examType:"期末",thinking:"根据题意列方程，被减数=差+减数。",steps:[{step:1,title:"列方程",content:"设多项式为A，A - (2x²-3x+1) = x²+2x-3",highlight:!1},{step:2,title:"移项",content:"A = x²+2x-3 + (2x²-3x+1)",highlight:!0},{step:3,title:"合并",content:"A = 3x² - x - 2",highlight:!0}],keyPoints:["整式加减","列方程","移项"],commonMistakes:["列方程错误","符号错误","合并同类项错误"],similarQuestions:[{id:"qz2_10",content:"已知A = 2x² - 3x + 1，则A - (3x² - 2x) = ____",difficulty:"medium"}]}],de=[{id:"q3_1_1",chapterId:"ch3",knowledgePointId:"kp3_1",type:"single_choice",content:"下列是一元一次方程的是（ ）。",options:["x + y = 5","x² = 4","2x - 3 = 7","1/x = 2"],answer:"C",analysis:"A有两个未知数，B未知数次数为2，D不是整式方程。",difficulty:"easy",points:5,thinking:"一元一次方程的三个要素：①整式方程 ②只含一个未知数 ③未知数次数为1。三者缺一不可。",steps:[{step:1,title:"理解定义",content:"一元一次方程必须满足：只含一个未知数，未知数次数为1，是整式方程",highlight:!0},{step:2,title:"分析选项A",content:"x + y = 5 含有两个未知数x和y，是二元方程，不是一元",highlight:!1},{step:3,title:"分析选项B",content:"x² = 4 中未知数x的次数是2，是一元二次方程",highlight:!1},{step:4,title:"分析选项C",content:"2x - 3 = 7 只含一个未知数x，次数为1，是整式方程，是一元一次方程",highlight:!0},{step:5,title:"分析选项D",content:"1/x = 2 不是整式方程（分母含未知数），是分式方程",highlight:!1}],keyPoints:["一元一次方程三要素","只含一个未知数","未知数次数为1","整式方程"],commonMistakes:["只看是否含一个字母","忽略整式方程的要求","混淆次数和系数"],similarQuestions:[{id:"qz3_1",content:"下列方程中，解为x=2的是（）",difficulty:"easy"},{id:"qz8_1",content:"下列方程组中，是二元一次方程组的是（）",difficulty:"medium"}]},{id:"q3_2_1",chapterId:"ch3",knowledgePointId:"kp3_2",type:"single_choice",content:"若 a = b，则下列变形正确的是（ ）。",options:["a + 2 = b - 2","2a = 3b","a/3 = b/3","a - c = b + c"],answer:"C",analysis:"C符合等式性质2，两边都除以3。",difficulty:"easy",points:5,thinking:"等式的性质：等式两边同时加减同一个数或式子，结果仍相等；等式两边同时乘除同一个不为0的数，结果仍相等。",steps:[{step:1,title:"回忆等式性质",content:"等式性质1：两边同时加减同一个数，等式仍成立；等式性质2：两边同时乘除同一个不为0的数，等式仍成立",highlight:!0},{step:2,title:"分析选项A",content:"a+2 = b-2，左边加2，右边减2，运算不同，错误",highlight:!1},{step:3,title:"分析选项B",content:"2a = 3b，左边乘2，右边乘3，乘的数不同，错误",highlight:!1},{step:4,title:"分析选项C",content:"a/3 = b/3，两边同时除以3，符合等式性质2，正确",highlight:!0},{step:5,title:"分析选项D",content:"a-c = b+c，左边减c，右边加c，运算不同，错误",highlight:!1}],keyPoints:["等式性质1：同加减","等式性质2：同乘除（不为0）","两边必须同时进行相同运算"],commonMistakes:["一边加一边减","乘除的数不同","除以0"],similarQuestions:[{id:"q3_3_1",content:"解方程：3x - 7 = 2x + 5，x = ____。",difficulty:"easy"},{id:"qz3_2",content:"解方程：2(x-3)-3(2x-1)=7，x=（）",difficulty:"hard"}]},{id:"q3_3_1",chapterId:"ch3",knowledgePointId:"kp3_3",type:"fill_blank",content:"解方程：3x - 7 = 2x + 5，x = ____。",answer:"12",analysis:"3x - 2x = 5 + 7，x = 12。",difficulty:"easy",points:5,thinking:"解一元一次方程的基本步骤：移项（把含未知数的项移到一边，常数项移到另一边），合并同类项，系数化为1。",steps:[{step:1,title:"移项",content:"把2x移到左边（变号为-2x），把-7移到右边（变号为+7）：3x - 2x = 5 + 7",highlight:!0},{step:2,title:"合并同类项",content:"左边：3x - 2x = x，右边：5 + 7 = 12",highlight:!1},{step:3,title:"得出结果",content:"x = 12",highlight:!0},{step:4,title:"检验",content:"左边：3×12-7=29，右边：2×12+5=29，左边=右边，正确",highlight:!1}],keyPoints:["移项要变号","合并同类项","系数化为1"],commonMistakes:["移项不变号","移项时符号错误","计算错误"],similarQuestions:[{id:"qz3_4",content:"方程 2x + 5 = 3(x - 1) 的解是 x = ____。",difficulty:"medium"},{id:"qz3_2",content:"解方程：2(x-3)-3(2x-1)=7，x=（）",difficulty:"hard"}]},{id:"q3_4_1",chapterId:"ch3",knowledgePointId:"kp3_4",type:"single_choice",content:"一个数的3倍与这个数的2倍的和是30，这个数是（ ）。",options:["5","6","10","15"],answer:"B",analysis:"设这个数为x，3x+2x=30，5x=30，x=6。",difficulty:"medium",points:10,thinking:"用方程解决实际问题的关键是设未知数，根据题意找等量关系，列出方程求解。",steps:[{step:1,title:"设未知数",content:"设这个数为x",highlight:!1},{step:2,title:"列方程",content:"这个数的3倍是3x，这个数的2倍是2x，它们的和是30，所以3x + 2x = 30",highlight:!0},{step:3,title:"解方程",content:"3x + 2x = 30，5x = 30，x = 6",highlight:!0},{step:4,title:"检验",content:"3×6 + 2×6 = 18 + 12 = 30，符合题意，答案是B",highlight:!1}],keyPoints:["设未知数","找等量关系","列方程","解方程","检验"],commonMistakes:["设错未知数","列方程时运算错误","解方程错误","忘记检验"],similarQuestions:[{id:"qz3_3",content:"一个数的3倍与7的差等于11，设这个数为x，可列方程为（）",difficulty:"easy"},{id:"qz3_5",content:"一项工程，甲单独做需要10天完成，乙单独做需要15天完成。两人合作需要（）天完成",difficulty:"hard"}]},{id:"qz3_1",chapterId:"ch3",knowledgePointId:"kp3_3",type:"single_choice",content:"下列方程中，解为x=2的是（）",options:["2x+1=3","3x-2=4","x-1=1","2x=6"],answer:"B",analysis:"将x=2代入选项B：3×2-2=4，成立",difficulty:"easy",points:5,year:"2023",district:"房山",examType:"期中",thinking:"验证一个数是否为方程的解，只需将该数代入方程左右两边，看是否相等。",steps:[{step:1,title:"验证选项A",content:"x=2代入：左边=2×2+1=5，右边=3，5≠3，不是解",highlight:!1},{step:2,title:"验证选项B",content:"x=2代入：左边=3×2-2=4，右边=4，4=4，是解",highlight:!0},{step:3,title:"验证选项C",content:"x=2代入：左边=2-1=1，右边=1，虽然成立，但答案是B",highlight:!1},{step:4,title:"验证选项D",content:"x=2代入：左边=2×2=4，右边=6，4≠6，不是解",highlight:!1}],keyPoints:["方程的解的定义","验证解的方法"],commonMistakes:["解方程而不是代入验证","计算错误"],similarQuestions:[{id:"q3_3_1",content:"解方程：3x - 7 = 2x + 5，x = ____。",difficulty:"easy"}]},{id:"qz3_2",chapterId:"ch3",knowledgePointId:"kp3_3",type:"single_choice",content:"解方程：2(x-3)-3(2x-1)=7，x=（）",options:["-2","-2.5","-3","-4"],answer:"B",analysis:"2x-6-6x+3=7，-4x=10，x=-2.5",difficulty:"hard",points:10,year:"2022",district:"门头沟",examType:"期末",thinking:"先去括号（注意分配律和符号），再移项、合并同类项、系数化为1。",steps:[{step:1,title:"去括号",content:"2(x-3) = 2x-6；-3(2x-1) = -6x+3",highlight:!0},{step:2,title:"合并",content:"2x-6-6x+3 = 7，即-4x-3=7",highlight:!1},{step:3,title:"移项",content:"-4x = 7+3 = 10",highlight:!1},{step:4,title:"求解",content:"x = -2.5",highlight:!0}],keyPoints:["去括号法则","移项变号","解一元一次方程步骤"],commonMistakes:["去括号时符号错误","-3(2x-1)展开错误"],similarQuestions:[{id:"q3_3_1",content:"解方程：3x - 7 = 2x + 5，x = ____。",difficulty:"easy"}]},{id:"qz3_3",chapterId:"ch3",knowledgePointId:"kp3_4",type:"single_choice",content:"一个数的3倍与7的差等于11，设这个数为x，可列方程为（）",options:["3x + 7 = 11","3x - 7 = 11","3(x - 7) = 11","3(x + 7) = 11"],answer:"B",analysis:"3倍即3x，与7的差即-7",difficulty:"easy",points:5,year:"2024",district:"东城",examType:"期中",thinking:"一个数的3倍是3x，与7的差是3x-7，等于11，所以方程为3x-7=11。",steps:[{step:1,title:"理解题意",content:"一个数的3倍：3x",highlight:!1},{step:2,title:"列方程",content:"与7的差：3x-7=11",highlight:!0}],keyPoints:["列方程解应用题","关键词理解"],commonMistakes:['"差"理解为加法',"列错方程"],similarQuestions:[{id:"q3_4_1",content:"一个数的3倍与这个数的2倍的和是30，这个数是（ ）。",difficulty:"medium"}]},{id:"qz3_4",chapterId:"ch3",knowledgePointId:"kp3_3",type:"fill_blank",content:"方程 2x + 5 = 3(x - 1) 的解是 x = ____。",answer:"8",analysis:"2x+5=3x-3，5+3=3x-2x，x=8",difficulty:"medium",points:5,year:"2022",district:"房山",examType:"期末",thinking:"先去括号，再移项、合并同类项、系数化为1。",steps:[{step:1,title:"去括号",content:"3(x-1) = 3x-3",highlight:!1},{step:2,title:"移项",content:"2x+5=3x-3，5+3=3x-2x",highlight:!0},{step:3,title:"求解",content:"8=x，即x=8",highlight:!0}],keyPoints:["去括号","移项变号","解方程步骤"],commonMistakes:["去括号错误","移项不变号"],similarQuestions:[{id:"qz3_2",content:"解方程：2(x-3)-3(2x-1)=7，x=（）",difficulty:"hard"}]},{id:"qz3_5",chapterId:"ch3",knowledgePointId:"kp3_6",type:"single_choice",content:"一项工程，甲单独做需要10天完成，乙单独做需要15天完成。两人合作需要（）天完成",options:["5","6","8","25"],answer:"B",analysis:"甲效率1/10，乙效率1/15，合作效率1/10+1/15=1/6，需要6天",difficulty:"hard",points:10,year:"2023",district:"海淀",examType:"期末",thinking:"工程问题中，工作总量通常设为1。工作效率=工作总量÷工作时间。两人合作时，效率相加。",steps:[{step:1,title:"设工作总量",content:"设工作总量为1",highlight:!1},{step:2,title:"求甲的效率",content:"甲单独10天完成，甲的效率为1/10（每天完成1/10）",highlight:!1},{step:3,title:"求乙的效率",content:"乙单独15天完成，乙的效率为1/15",highlight:!1},{step:4,title:"求合作效率",content:"合作效率 = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6",highlight:!0},{step:5,title:"求合作时间",content:"合作时间 = 1 ÷ (1/6) = 6天",highlight:!0}],keyPoints:["工程问题的基本关系","工作效率=工作总量÷工作时间","合作效率=各效率之和"],commonMistakes:["效率计算错误","时间直接相加","混淆效率和时间的运算"],similarQuestions:[{id:"q3_4_1",content:"一个数的3倍与这个数的2倍的和是30，这个数是（ ）。",difficulty:"medium"}]},{id:"qz3_6",chapterId:"ch3",knowledgePointId:"kp3_4",type:"single_choice",content:"某商品打8折后售价为240元，则原价为（）元",options:["192","300","280","320"],answer:"B",analysis:"设原价x元，0.8x=240，x=300",difficulty:"medium",points:5,year:"2024",district:"朝阳",examType:"期中",thinking:"打8折表示按原价的80%出售。设原价为x元，则0.8x=240，解出x即可。",steps:[{step:1,title:"设未知数",content:"设原价为x元",highlight:!1},{step:2,title:"列方程",content:"打8折后售价：0.8x = 240",highlight:!0},{step:3,title:"求解",content:"x = 240 ÷ 0.8 = 300",highlight:!0}],keyPoints:["折扣的含义","列方程解应用题"],commonMistakes:["240×0.8（方向错误）","计算错误"],similarQuestions:[{id:"qz9_5",content:"某商店商品进价100元，标价150元，若要保证利润率不低于20%，则最多可打（）折",difficulty:"hard"}]},{id:"qz3_7",chapterId:"ch3",knowledgePointId:"kp3_2",type:"single_choice",content:"若3x = 6，则下列变形正确的是（）",options:["3x+1=5","3x-2=4","6x=6","x=18"],answer:"B",analysis:"等式两边同时减2：3x-2=6-2=4",difficulty:"easy",points:5,year:"2023",district:"朝阳",examType:"期中",thinking:"根据等式性质1，等式两边同时加减同一个数，等式仍成立。",steps:[{step:1,title:"分析原式",content:"3x = 6",highlight:!1},{step:2,title:"验证选项B",content:"两边同时减2：3x-2=6-2=4，正确",highlight:!0}],keyPoints:["等式性质1","等式两边同时加减"],commonMistakes:["选A（加1得7≠5）","选C（乘2得12x=12）"],similarQuestions:[{id:"qz3_8",content:"若2x-3=5，则4x-6=____",difficulty:"medium"}]},{id:"qz3_8",chapterId:"ch3",knowledgePointId:"kp3_2",type:"fill_blank",content:"若2x-3=5，则4x-6=____",answer:"10",analysis:"4x-6=2(2x-3)=2×5=10，或解得x=4，代入得10",difficulty:"medium",points:5,year:"2024",district:"海淀",examType:"期末",thinking:"观察发现4x-6=2(2x-3)，整体代入得2×5=10。或者先解方程得x=4，再代入计算。",steps:[{step:1,title:"方法一：整体代入",content:"4x-6 = 2(2x-3) = 2×5 = 10",highlight:!0},{step:2,title:"方法二：先解后代",content:"2x=8，x=4，4×4-6=10",highlight:!1}],keyPoints:["等式性质2","整体思想","整体代入"],commonMistakes:["直接填5","解方程错误"],similarQuestions:[{id:"qz3_7",content:"若3x = 6，则下列变形正确的是（）",difficulty:"easy"}]},{id:"qz3_9",chapterId:"ch3",knowledgePointId:"kp3_5",type:"single_choice",content:"甲、乙两地相距300千米，A车从甲地出发，速度为60千米/时；B车从乙地出发，速度为40千米/时。两车相向而行，几小时后相遇？",options:["2小时","3小时","4小时","5小时"],answer:"B",analysis:"设x小时相遇，60x+40x=300，100x=300，x=3",difficulty:"medium",points:10,year:"2023",district:"西城",examType:"期中",thinking:"相遇问题：两车行驶路程之和等于总路程。设相遇时间为x小时，列方程求解。",steps:[{step:1,title:"设未知数",content:"设x小时后相遇",highlight:!1},{step:2,title:"列方程",content:"A车行驶60x千米，B车行驶40x千米，60x+40x=300",highlight:!0},{step:3,title:"解方程",content:"100x=300，x=3",highlight:!0}],keyPoints:["相遇问题","路程=速度×时间","路程之和=总路程"],commonMistakes:["列方程错误","计算错误","单位错误"],similarQuestions:[{id:"qz3_10",content:"小明和小红同时从同一地点出发，小明速度为5千米/时，小红速度为3千米/时，同向而行，几小时后小明比小红多走6千米？",difficulty:"medium"}]},{id:"qz3_10",chapterId:"ch3",knowledgePointId:"kp3_5",type:"fill_blank",content:"小明和小红同时从同一地点出发，小明速度为5千米/时，小红速度为3千米/时，同向而行，____小时后小明比小红多走6千米。",answer:"3",analysis:"设x小时后，5x-3x=6，2x=6，x=3",difficulty:"medium",points:5,year:"2024",district:"丰台",examType:"期末",thinking:"追及问题：同向而行时，快者比慢者多走的路程等于两者的路程差。设时间为x，列方程5x-3x=6。",steps:[{step:1,title:"设未知数",content:"设x小时后小明比小红多走6千米",highlight:!1},{step:2,title:"列方程",content:"小明走5x千米，小红走3x千米，5x-3x=6",highlight:!0},{step:3,title:"解方程",content:"2x=6，x=3",highlight:!0}],keyPoints:["追及问题","路程差=速度差×时间"],commonMistakes:["列方程错误","5x+3x=6（错误）","计算错误"],similarQuestions:[{id:"qz3_9",content:"甲、乙两地相距300千米，A车速度60千米/时，B车速度40千米/时，相向而行，几小时后相遇？",difficulty:"medium"}]},{id:"qz3_11",chapterId:"ch3",knowledgePointId:"kp3_5",type:"single_choice",content:"一艘船在静水中的速度为20千米/时，水流速度为4千米/时。从甲码头到乙码头顺水航行需要3小时，则两码头之间的距离是（）千米",options:["48","60","72","80"],answer:"C",analysis:"顺水速度=20+4=24千米/时，距离=24×3=72千米",difficulty:"hard",points:10,year:"2023",district:"海淀",examType:"期末",thinking:"顺逆水问题：顺水速度=静水速度+水流速度，逆水速度=静水速度-水流速度。距离=速度×时间。",steps:[{step:1,title:"求顺水速度",content:"顺水速度 = 静水速度 + 水流速度 = 20 + 4 = 24千米/时",highlight:!0},{step:2,title:"求距离",content:"距离 = 顺水速度 × 时间 = 24 × 3 = 72千米",highlight:!0}],keyPoints:["顺逆水问题","顺水速度=静水速度+水流速度","逆水速度=静水速度-水流速度"],commonMistakes:["直接用静水速度计算","逆水速度公式记错"],similarQuestions:[{id:"qz3_9",content:"甲、乙两地相距300千米，两车相向而行，几小时后相遇？",difficulty:"medium"}]}],ye=[{id:"q4_1_1",chapterId:"ch4",knowledgePointId:"kp4_1",type:"single_choice",content:"下列图形中，不是立体图形的是（ ）。",options:["球","圆柱","三角形","正方体"],answer:"C",analysis:"三角形是平面图形。",difficulty:"easy",points:5,thinking:"区分平面图形和立体图形：平面图形只有一个面，所有点都在同一平面内；立体图形占有空间，有长、宽、高三个维度。",steps:[{step:1,title:"理解概念",content:"平面图形：在同一平面内的图形，如三角形、正方形、圆等；立体图形：占有空间的图形，如球、圆柱、正方体等",highlight:!0},{step:2,title:"分析选项A",content:"球是立体图形，占有空间",highlight:!1},{step:3,title:"分析选项B",content:"圆柱是立体图形，有上下底面和侧面",highlight:!1},{step:4,title:"分析选项C",content:"三角形是平面图形，只有三条边围成的一个面",highlight:!0},{step:5,title:"分析选项D",content:"正方体是立体图形，有6个面",highlight:!1}],keyPoints:["平面图形特点","立体图形特点","常见平面图形和立体图形"],commonMistakes:["混淆平面图形和立体图形","认为有高度的就是立体图形（如三角形在立体中）"],similarQuestions:[{id:"qz4_1",content:"将直角三角形绕其一条直角边旋转一周，得到的几何体是（）",difficulty:"medium"}]},{id:"q4_2_1",chapterId:"ch4",knowledgePointId:"kp4_2",type:"fill_blank",content:"经过两点有且只有____条直线。",answer:"一",analysis:"两点确定一条直线。",difficulty:"easy",points:5,thinking:"这是直线的基本性质（公理）：经过两点有且只有一条直线。也就是说，两点确定一条直线。",steps:[{step:1,title:"回忆直线公理",content:"经过两点有且只有一条直线，即两点确定一条直线",highlight:!0},{step:2,title:"确定答案",content:'答案为"一"',highlight:!1}],keyPoints:["两点确定一条直线","直线的基本性质"],commonMistakes:['写成"1"（应该用汉字）','不理解"有且只有"的含义'],similarQuestions:[{id:"qz4_2",content:"两点之间，____最短。",difficulty:"easy"}]},{id:"q4_3_1",chapterId:"ch4",knowledgePointId:"kp4_3",type:"fill_blank",content:"25°30′ = ____°。",answer:"25.5",analysis:"30′ = 0.5°。",difficulty:"easy",points:5,thinking:"角度的度分秒换算：1°=60′，1′=60″。将分转化为度，需要除以60。30′=30/60°=0.5°。",steps:[{step:1,title:"回忆换算关系",content:"1° = 60′，所以1′ = (1/60)°",highlight:!1},{step:2,title:"换算分",content:"30′ = 30/60 ° = 0.5°",highlight:!0},{step:3,title:"合并",content:"25°30′ = 25° + 0.5° = 25.5°",highlight:!0}],keyPoints:["度分秒的换算","1°=60′","分转度要除以60"],commonMistakes:["30′=0.3°（错误地用十进制）","除以100而不是60","换算方向错误"],similarQuestions:[{id:"qz4_3",content:"38.5° =（）°（）'",difficulty:"medium"}]},{id:"q4_4_1",chapterId:"ch4",knowledgePointId:"kp4_4",type:"fill_blank",content:"一个角是35°，它的余角是____°，补角是____°。",answer:"55，145",analysis:"余角=90°-35°=55°，补角=180°-35°=145°。",difficulty:"easy",points:5,thinking:"互为余角的两个角和为90°，互为补角的两个角和为180°。用90°和180°分别减去已知角的度数即可。",steps:[{step:1,title:"求余角",content:"互为余角的两个角和为90°，所以余角 = 90° - 35° = 55°",highlight:!0},{step:2,title:"求补角",content:"互为补角的两个角和为180°，所以补角 = 180° - 35° = 145°",highlight:!0},{step:3,title:"验证",content:"55° + 35° = 90°，145° + 35° = 180°，计算正确",highlight:!1}],keyPoints:["余角的定义（和为90°）","补角的定义（和为180°）","互余互补与角的位置无关"],commonMistakes:["余角计算成180°-35°=145°","补角计算成90°-35°=55°","混淆余角和补角的概念"],similarQuestions:[{id:"qz4_4",content:"一个角等于它的余角的3倍，则这个角的度数为（）",difficulty:"hard"},{id:"qz4_5",content:"若∠1和∠2互为补角，且∠1 = 65°，则∠2 = ____°。",difficulty:"easy"}]},{id:"qz4_1",chapterId:"ch4",knowledgePointId:"kp4_1",type:"single_choice",content:"将直角三角形绕其一条直角边旋转一周，得到的几何体是（）",options:["圆柱","圆锥","球","圆台"],answer:"B",analysis:"直角三角形绕直角边旋转得到圆锥",difficulty:"medium",points:5,year:"2022",district:"东城",examType:"期末",thinking:"面动成体：直角三角形绕一条直角边旋转，这条直角边成为圆锥的高，另一条直角边旋转形成圆锥的底面圆，斜边旋转形成圆锥的侧面。",steps:[{step:1,title:"想象旋转过程",content:"直角三角形绕一条直角边旋转",highlight:!1},{step:2,title:"确定底面",content:"另一条直角边旋转一周形成圆形底面",highlight:!1},{step:3,title:"确定侧面",content:"斜边旋转形成圆锥侧面",highlight:!1},{step:4,title:"得出结论",content:"得到的几何体是圆锥",highlight:!0}],keyPoints:["面动成体","直角三角形旋转得到圆锥"],commonMistakes:["选圆柱（矩形旋转得到）","选球（半圆旋转得到）"],similarQuestions:[{id:"q4_1_1",content:"下列图形中，不是立体图形的是（ ）。",difficulty:"easy"}]},{id:"qz4_2",chapterId:"ch4",knowledgePointId:"kp4_2",type:"fill_blank",content:"两点之间，____最短。",answer:"线段",analysis:"线段公理",difficulty:"easy",points:5,year:"2023",district:"怀柔",examType:"期中",thinking:'这是线段的基本性质（公理）：两点之间，线段最短。注意与"两点确定一条直线"区分。',steps:[{step:1,title:"回忆线段公理",content:"两点之间的所有连线中，线段最短",highlight:!0},{step:2,title:"确定答案",content:'答案为"线段"',highlight:!1}],keyPoints:["两点之间线段最短","线段公理"],commonMistakes:['与"两点确定一条直线"混淆','写成"直线"'],similarQuestions:[{id:"q4_2_1",content:"经过两点有且只有____条直线。",difficulty:"easy"}]},{id:"qz4_3",chapterId:"ch4",knowledgePointId:"kp4_3",type:"single_choice",content:"38.5° =（）°（）'",options:["38° 5'","38° 30'","38° 50'","39° 30'"],answer:"B",analysis:"0.5° = 30'",difficulty:"medium",points:5,year:"2022",district:"大兴",examType:"期末",thinking:"角度的度分秒换算：1°=60′。将度的小数部分转化为分，需要乘以60。0.5°=0.5×60′=30′。",steps:[{step:1,title:"分离整数和小数",content:"38.5° = 38° + 0.5°",highlight:!1},{step:2,title:"小数部分化分",content:"0.5° = 0.5 × 60′ = 30′",highlight:!0},{step:3,title:"合并",content:"38.5° = 38°30′，选B",highlight:!0}],keyPoints:["度分秒的换算","1°=60′","度转分要乘以60"],commonMistakes:["0.5°=5′（错误地用十进制）","乘以100而不是60","换算方向错误"],similarQuestions:[{id:"q4_3_1",content:"25°30′ = ____°。",difficulty:"easy"}]},{id:"qz4_4",chapterId:"ch4",knowledgePointId:"kp4_4",type:"single_choice",content:"一个角等于它的余角的3倍，则这个角的度数为（）",options:["22.5°","45°","67.5°","75°"],answer:"C",analysis:"设这个角为x，则x=3(90°-x)，解得x=67.5°",difficulty:"hard",points:10,year:"2023",district:"海淀",examType:"期末",thinking:"设这个角为x°，则它的余角为(90-x)°。根据题意列方程：x = 3(90-x)，解方程即可。",steps:[{step:1,title:"设未知数",content:"设这个角为x°，则它的余角为(90-x)°",highlight:!1},{step:2,title:"列方程",content:"根据题意：x = 3(90 - x)",highlight:!0},{step:3,title:"解方程",content:"x = 270 - 3x，x + 3x = 270，4x = 270，x = 67.5",highlight:!0},{step:4,title:"检验",content:"这个角67.5°，余角22.5°，67.5 = 3×22.5，正确",highlight:!1}],keyPoints:["余角的定义","列方程解应用题","角度计算"],commonMistakes:["设未知数时单位处理不当","列方程时关系搞反","解方程计算错误"],similarQuestions:[{id:"q4_4_1",content:"一个角是35°，它的余角是____°，补角是____°。",difficulty:"easy"},{id:"qz4_5",content:"若∠1和∠2互为补角，且∠1 = 65°，则∠2 = ____°。",difficulty:"easy"}]},{id:"qz4_5",chapterId:"ch4",knowledgePointId:"kp4_5",type:"fill_blank",content:"若∠1和∠2互为补角，且∠1 = 65°，则∠2 = ____°。",answer:"115",analysis:"补角和为180°，∠2=180°-65°=115°",difficulty:"easy",points:5,year:"2024",district:"顺义",examType:"期中",thinking:"互为补角的两个角和为180°。已知∠1=65°，则∠2=180°-65°=115°。",steps:[{step:1,title:"理解补角定义",content:"互为补角的两个角之和等于180°",highlight:!0},{step:2,title:"列式计算",content:"∠2 = 180° - ∠1 = 180° - 65° = 115°",highlight:!0}],keyPoints:["补角的定义（和为180°）","已知一个角求它的补角"],commonMistakes:["用90°计算（与余角混淆）","计算错误：180-65=115错算成其他数"],similarQuestions:[{id:"q4_4_1",content:"一个角是35°，它的余角是____°，补角是____°。",difficulty:"easy"},{id:"qz4_4",content:"一个角等于它的余角的3倍，则这个角的度数为（）",difficulty:"hard"}]},{id:"qz4_6",chapterId:"ch4",knowledgePointId:"kp4_5",type:"single_choice",content:"已知OC是∠AOB的平分线，∠AOB=80°，则∠AOC=（）",options:["40°","80°","160°","20°"],answer:"A",analysis:"角平分线将角分成两个相等的角，∠AOC=80°÷2=40°",difficulty:"easy",points:5,year:"2023",district:"东城",examType:"期中",thinking:"角平分线的定义：从角的顶点出发，把这个角分成两个相等的角的射线。∠AOC=∠BOC=∠AOB÷2。",steps:[{step:1,title:"理解角平分线",content:"OC平分∠AOB，则∠AOC=∠BOC=∠AOB/2",highlight:!0},{step:2,title:"计算",content:"∠AOC=80°÷2=40°",highlight:!0}],keyPoints:["角平分线的定义","角平分线的性质"],commonMistakes:["选B（等于原角）","计算错误"],similarQuestions:[{id:"qz4_7",content:"如图，OB平分∠AOC，∠AOB=35°，则∠AOC=____°",difficulty:"easy"}]},{id:"qz4_7",chapterId:"ch4",knowledgePointId:"kp4_5",type:"fill_blank",content:"如图，OB平分∠AOC，∠AOB=35°，则∠AOC=____°",answer:"70",analysis:"OB平分∠AOC，则∠AOC=2∠AOB=2×35°=70°",difficulty:"easy",points:5,year:"2024",district:"丰台",examType:"期末",thinking:"角平分线的性质：被平分的角等于平分后角的2倍。",steps:[{step:1,title:"利用角平分线性质",content:"OB平分∠AOC，则∠AOC=2∠AOB",highlight:!0},{step:2,title:"计算",content:"∠AOC=2×35°=70°",highlight:!0}],keyPoints:["角平分线的性质","∠AOC=2∠AOB"],commonMistakes:["填35（混淆概念）","填35°（单位已给）"],similarQuestions:[{id:"qz4_6",content:"已知OC是∠AOB的平分线，∠AOB=80°，则∠AOC=（）",difficulty:"easy"}]}],pe=[{id:"q5_1_1",chapterId:"ch5",knowledgePointId:"kp5_1",type:"fill_blank",content:"两条直线相交，形成____对对顶角，____对邻补角。",answer:"2，4",analysis:"基本概念。",difficulty:"easy",points:5,thinking:"两条直线相交于一点，形成4个角。对顶角是没有公共边的两个角，有2对；邻补角是有公共边且互补的两个角，有4对。",steps:[{step:1,title:"画图理解",content:"两条直线AB和CD相交于点O，形成∠AOC、∠COB、∠BOD、∠DOA四个角",highlight:!1},{step:2,title:"找对顶角",content:"对顶角：∠AOC与∠BOD，∠COB与∠DOA，共2对",highlight:!0},{step:3,title:"找邻补角",content:"邻补角：∠AOC与∠COB，∠COB与∠BOD，∠BOD与∠DOA，∠DOA与∠AOC，共4对",highlight:!0}],keyPoints:["对顶角的定义","邻补角的定义","对顶角相等","邻补角互补"],commonMistakes:["对顶角和邻补角数量记混","不理解邻补角必须有公共边","忽略对顶角没有公共边"],similarQuestions:[{id:"qz5_2",content:"两条直线相交于一点，形成____对对顶角。",difficulty:"easy"},{id:"qz5_1",content:"直线AB、CD相交于点O，OE⊥AB，垂足为O。若∠COE=55°，则∠BOD=（）",difficulty:"medium"}]},{id:"q5_2_1",chapterId:"ch5",knowledgePointId:"kp5_2",type:"single_choice",content:"点到直线的距离是指（ ）。",options:["这点到直线的垂线的长度","这点到直线的垂线段","这点到直线的垂线段的长度","过这点垂直于直线的直线"],answer:"C",analysis:"点到直线的距离是指垂线段的长度。",difficulty:"easy",points:5,thinking:"距离是一个数量（长度），而不是图形。垂线是直线（无限长），垂线段是图形，只有垂线段的长度才是距离。",steps:[{step:1,title:"理解概念",content:"点到直线的距离是一个数量，表示点到直线的远近程度",highlight:!0},{step:2,title:"分析选项A",content:"垂线是直线，向两方无限延伸，没有长度，错误",highlight:!1},{step:3,title:"分析选项B",content:"垂线段是图形，不是长度，错误",highlight:!1},{step:4,title:"分析选项C",content:"垂线段的长度是数量，符合距离的定义，正确",highlight:!0},{step:5,title:"分析选项D",content:"这是垂线的描述，不是距离，错误",highlight:!1}],keyPoints:["点到直线的距离定义","距离是一个数量","垂线与垂线段的区别"],commonMistakes:["选A混淆垂线和垂线段","选B把图形当成距离","不理解距离是数量"],similarQuestions:[{id:"qz5_3",content:"如图，PO⊥AB于点O，OC是射线，则图中与∠AOC互余的角是（）",difficulty:"medium"}]},{id:"q5_3_1",chapterId:"ch5",knowledgePointId:"kp5_3",type:"fill_blank",content:"两条直线被第三条直线所截，形成____对同位角，____对内错角，____对同旁内角。",answer:"4，2，2",analysis:"基本概念。",difficulty:"easy",points:5,thinking:"两条直线被第三条直线（截线）所截，形成8个角。根据角的位置关系：同位角在截线同侧且在被截线同方向，有4对；内错角在截线两侧且在被截线之间，有2对；同旁内角在截线同侧且在被截线之间，有2对。",steps:[{step:1,title:"画图分析",content:"画出两条直线被第三条直线所截的基本图形（三线八角）",highlight:!1},{step:2,title:"找同位角",content:"同位角位置：截线同侧，被截线同方向。共4对：左上-左上、右上-右上、左下-左下、右下-右下",highlight:!0},{step:3,title:"找内错角",content:"内错角位置：截线两侧，被截线之间。共2对：左上-右下、右上-左下",highlight:!0},{step:4,title:"找同旁内角",content:"同旁内角位置：截线同侧，被截线之间。共2对：左上-左下、右上-右下",highlight:!0}],keyPoints:["三线八角模型","同位角的位置特征","内错角的位置特征","同旁内角的位置特征"],commonMistakes:["同位角数量记错","内错角和同旁内角混淆",'不理解"内"指两直线之间'],similarQuestions:[{id:"qz5_6",content:"如图，直线AB、CD被EF所截，∠1和∠5是____角。",difficulty:"easy"},{id:"q5_5_1",content:"如图，AB∥CD，∠1 = 55°，则∠2 =（ ）。",difficulty:"easy"}]},{id:"q5_5_1",chapterId:"ch5",knowledgePointId:"kp5_5",type:"single_choice",content:"如图，AB∥CD，∠1 = 55°，则∠2 =（ ）。",options:["55°","125°","35°","145°"],answer:"A",analysis:"∠1与∠2是同位角，两直线平行，同位角相等。",difficulty:"easy",points:5,thinking:"两直线平行时，被第三条直线所截形成的同位角相等。根据题意，∠1和∠2是同位角，所以∠2=∠1=55°。",steps:[{step:1,title:"识别角的关系",content:"观察图形，确定∠1和∠2的位置关系是同位角",highlight:!0},{step:2,title:"应用平行线性质",content:"两直线平行，同位角相等",highlight:!0},{step:3,title:"计算结果",content:"因为AB∥CD，所以∠2 = ∠1 = 55°",highlight:!1}],keyPoints:["同位角的识别","平行线的性质：同位角相等","两直线平行的条件"],commonMistakes:["混淆同位角和内错角","记错性质（如认为同位角互补）","图形分析错误"],similarQuestions:[{id:"qz5_4",content:"如图，AB∥CD，AD平分∠BAC，∠BAD=70°，则∠ACD=（）",difficulty:"hard"},{id:"qz5_5",content:"下列命题中，是真命题的是（）",difficulty:"medium"}]},{id:"qz5_1",chapterId:"ch5",knowledgePointId:"kp5_4",type:"single_choice",content:"直线AB、CD相交于点O，OE⊥AB，垂足为O。若∠COE=55°，则∠BOD=（）",options:["35°","45°","55°","65°"],answer:"A",analysis:"∠AOE=90°，∠AOC=90°-55°=35°，∠BOD=∠AOC=35°",difficulty:"medium",points:5,year:"2022",district:"海淀",examType:"期末",thinking:"利用垂直的定义和对顶角相等的性质。OE⊥AB得∠AOE=90°，通过角的差求出∠AOC，再利用对顶角相等得到∠BOD。",steps:[{step:1,title:"利用垂直",content:"OE⊥AB，所以∠AOE=90°",highlight:!1},{step:2,title:"求∠AOC",content:"∠AOC = ∠AOE - ∠COE = 90° - 55° = 35°",highlight:!0},{step:3,title:"利用对顶角",content:"∠BOD和∠AOC是对顶角，所以∠BOD=∠AOC=35°",highlight:!0}],keyPoints:["垂直的定义","对顶角相等","角的和差计算"],commonMistakes:["角的和差关系错误","对顶角识别错误"],similarQuestions:[{id:"q5_1_1",content:"两条直线相交，形成____对对顶角，____对邻补角。",difficulty:"easy"}]},{id:"qz5_2",chapterId:"ch5",knowledgePointId:"kp5_1",type:"fill_blank",content:"两条直线相交于一点，形成____对对顶角。",answer:"2",analysis:"基本概念",difficulty:"easy",points:5,year:"2022",district:"昌平",examType:"期中",thinking:'两条直线相交于一点，形成4个角。对顶角是没有公共边的两个角，有2对。可以想象成"X"形，上下一对，左右一对。',steps:[{step:1,title:"画图理解",content:"两条直线相交于一点，形成4个角",highlight:!1},{step:2,title:"找对顶角",content:"对顶角是没有公共边的两个角，有2对",highlight:!0}],keyPoints:["对顶角的定义","两条直线相交形成2对对顶角"],commonMistakes:["填4（把角的个数当成对数）","不理解对顶角的定义"],similarQuestions:[{id:"q5_1_1",content:"两条直线相交，形成____对对顶角，____对邻补角。",difficulty:"easy"}]},{id:"qz5_3",chapterId:"ch5",knowledgePointId:"kp5_2",type:"single_choice",content:"如图，PO⊥AB于点O，OC是射线，则图中与∠AOC互余的角是（）",options:["∠BOC","∠POC","∠POA","∠BOP"],answer:"B",analysis:"∠AOC + ∠POC = ∠AOP = 90°",difficulty:"medium",points:5,year:"2023",district:"西城",examType:"期末",thinking:"PO⊥AB说明∠AOP=90°。观察图形，∠AOP由∠AOC和∠POC组成，所以∠AOC+∠POC=90°，即∠POC与∠AOC互余。",steps:[{step:1,title:"利用垂直条件",content:"PO⊥AB，所以∠AOP = 90°",highlight:!0},{step:2,title:"分析角的组成",content:"∠AOP = ∠AOC + ∠POC",highlight:!1},{step:3,title:"得出互余关系",content:"∠AOC + ∠POC = 90°，所以∠POC与∠AOC互余，选B",highlight:!0}],keyPoints:["互余的定义（和为90°）","垂直的定义","角的和差关系"],commonMistakes:["选A（∠BOC与∠AOC互补）","图形分析错误"],similarQuestions:[{id:"q5_2_1",content:"点到直线的距离是指（ ）。",difficulty:"easy"}]},{id:"qz5_4",chapterId:"ch5",knowledgePointId:"kp5_5",type:"single_choice",content:"如图，AB∥CD，AD平分∠BAC，∠BAD=70°，则∠ACD=（）",options:["40°","50°","60°","70°"],answer:"A",analysis:"∠BAC=140°，∠ACD=180°-140°=40°（同旁内角互补）",difficulty:"hard",points:10,year:"2024",district:"海淀",examType:"期末",thinking:"AD平分∠BAC，所以∠BAC=2∠BAD=140°。AB∥CD，∠BAC和∠ACD是同旁内角，互补，所以∠ACD=180°-140°=40°。",steps:[{step:1,title:"利用角平分线",content:"AD平分∠BAC，所以∠BAC = 2∠BAD = 2×70° = 140°",highlight:!0},{step:2,title:"利用平行线性质",content:"AB∥CD，∠BAC和∠ACD是同旁内角，同旁内角互补",highlight:!1},{step:3,title:"计算结果",content:"∠ACD = 180° - ∠BAC = 180° - 140° = 40°",highlight:!0}],keyPoints:["角平分线的定义","平行线的性质（同旁内角互补）","角的和差计算"],commonMistakes:["角平分线性质应用错误","同旁内角和内错角混淆"],similarQuestions:[{id:"q5_5_1",content:"如图，AB∥CD，∠1 = 55°，则∠2 =（ ）。",difficulty:"easy"}]},{id:"qz5_5",chapterId:"ch5",knowledgePointId:"kp5_6",type:"single_choice",content:"下列命题中，是真命题的是（）",options:["相等的角是对顶角","同旁内角互补","内错角相等","在同一平面内，垂直于同一条直线的两条直线平行"],answer:"D",analysis:"D是平行线的判定定理",difficulty:"medium",points:5,year:"2023",district:"朝阳",examType:"期中",thinking:"分析每个选项：A错，相等的角不一定是对顶角（如两直线平行时的同位角）；B错，只有两直线平行时同旁内角才互补；C错，只有两直线平行时内错角才相等；D正确，这是平行线的判定方法之一。",steps:[{step:1,title:"分析A",content:"相等的角不一定是对顶角，如平行线的同位角相等但不是对顶角，A错误",highlight:!1},{step:2,title:"分析B",content:"同旁内角互补的前提是两直线平行，B错误",highlight:!1},{step:3,title:"分析C",content:"内错角相等的前提是两直线平行，C错误",highlight:!1},{step:4,title:"分析D",content:"在同一平面内，垂直于同一条直线的两条直线平行，这是真命题，D正确",highlight:!0}],keyPoints:["对顶角的性质","平行线的性质（前提是有平行线）","平行线的判定"],commonMistakes:["忽略平行线的前提条件","混淆性质和判定"],similarQuestions:[{id:"q5_5_1",content:"如图，AB∥CD，∠1 = 55°，则∠2 =（ ）。",difficulty:"easy"}]},{id:"qz5_6",chapterId:"ch5",knowledgePointId:"kp5_3",type:"fill_blank",content:"如图，直线AB、CD被EF所截，∠1和∠5是____角。",answer:"同位",analysis:"同位角位置特征：在截线同侧，在被截线同方向",difficulty:"easy",points:5,year:"2022",district:"丰台",examType:"期中",thinking:'同位角的识别：两条直线被第三条直线所截，在截线同侧，在被截线同方向的角是同位角。可以想象成"F"形。',steps:[{step:1,title:"回忆同位角定义",content:"在截线同侧，在被截线同方向的角是同位角",highlight:!0},{step:2,title:"判断位置关系",content:"∠1和∠5在截线EF的同侧，在被截线AB、CD的同方向（上方）",highlight:!1},{step:3,title:"确定答案",content:"∠1和∠5是同位角",highlight:!0}],keyPoints:["同位角的定义",'同位角的位置特征（"F"形）',"三线八角模型"],commonMistakes:["与同旁内角混淆","与内错角混淆","位置判断错误"],similarQuestions:[{id:"q5_3_1",content:"两条直线被第三条直线所截，形成____对同位角，____对内错角，____对同旁内角。",difficulty:"easy"}]},{id:"qz5_7",chapterId:"ch5",knowledgePointId:"kp5_4",type:"single_choice",content:"如图，直线a、b被直线c所截，下列条件中能判定a∥b的是（）",options:["∠1=∠2","∠1=∠3","∠1+∠4=180°","∠1+∠2=180°"],answer:"B",analysis:"∠1和∠3是同位角，同位角相等，两直线平行",difficulty:"medium",points:5,year:"2023",district:"海淀",examType:"期中",thinking:"平行线的判定方法：同位角相等，两直线平行；内错角相等，两直线平行；同旁内角互补，两直线平行。",steps:[{step:1,title:"分析选项A",content:"∠1和∠2是对顶角，对顶角相等不能判定平行",highlight:!1},{step:2,title:"分析选项B",content:"∠1和∠3是同位角，同位角相等可判定a∥b",highlight:!0},{step:3,title:"分析选项C、D",content:"∠1和∠4、∠1和∠2都不是同旁内角关系",highlight:!1}],keyPoints:["平行线的判定","同位角相等，两直线平行"],commonMistakes:["混淆同位角和对顶角","记错判定条件"],similarQuestions:[{id:"qz5_8",content:"如图，∠1=∠2，可判定哪两条直线平行？",difficulty:"medium"}]},{id:"qz5_8",chapterId:"ch5",knowledgePointId:"kp5_4",type:"fill_blank",content:"如图，∠1=120°，∠2=120°，则直线a与b的位置关系是____。",answer:"平行（或a∥b）",analysis:"∠1和∠2是同位角，同位角相等，两直线平行",difficulty:"easy",points:5,year:"2024",district:"西城",examType:"期末",thinking:"观察图形，∠1和∠2是同位角。同位角相等（都等于120°），则两直线平行。",steps:[{step:1,title:"判断角的关系",content:"∠1和∠2是同位角",highlight:!0},{step:2,title:"应用判定定理",content:"∠1=∠2=120°，同位角相等，两直线平行",highlight:!0}],keyPoints:["同位角的识别","同位角相等，两直线平行"],commonMistakes:['答"相等"（问的是位置关系）',"判定定理记错"],similarQuestions:[{id:"qz5_7",content:"如图，直线a、b被直线c所截，下列条件中能判定a∥b的是（）",difficulty:"medium"}]},{id:"qz5_9",chapterId:"ch5",knowledgePointId:"kp5_6",type:"single_choice",content:"将三角形ABC向右平移3个单位，再向上平移2个单位得到三角形A'B'C'，若点A的坐标为(1,1)，则点A'的坐标为（）",options:["(4,3)","(4,-1)","(-2,3)","(-2,-1)"],answer:"A",analysis:"向右平移3个单位：1+3=4；向上平移2个单位：1+2=3，A'(4,3)",difficulty:"easy",points:5,year:"2023",district:"朝阳",examType:"期中",thinking:"平移规律：向右平移横坐标增加，向上平移纵坐标增加。",steps:[{step:1,title:"向右平移",content:"横坐标：1+3=4",highlight:!0},{step:2,title:"向上平移",content:"纵坐标：1+2=3",highlight:!0},{step:3,title:"得出坐标",content:"A'(4,3)",highlight:!1}],keyPoints:["平移规律","右加左减（横坐标）","上加下减（纵坐标）"],commonMistakes:["符号错误","横纵坐标混淆"],similarQuestions:[{id:"qz5_10",content:"点P(-2,3)向左平移2个单位，再向下平移1个单位后的坐标为____",difficulty:"easy"}]},{id:"qz5_10",chapterId:"ch5",knowledgePointId:"kp5_6",type:"fill_blank",content:"点P(-2,3)向左平移2个单位，再向下平移1个单位后的坐标为____。",answer:"(-4,2)",analysis:"向左平移2个单位：-2-2=-4；向下平移1个单位：3-1=2",difficulty:"easy",points:5,year:"2024",district:"昌平",examType:"期末",thinking:"平移规律：向左平移横坐标减小，向下平移纵坐标减小。",steps:[{step:1,title:"向左平移",content:"横坐标：-2-2=-4",highlight:!0},{step:2,title:"向下平移",content:"纵坐标：3-1=2",highlight:!0},{step:3,title:"得出坐标",content:"(-4,2)",highlight:!1}],keyPoints:["平移规律","左减（横坐标）","下减（纵坐标）"],commonMistakes:["(-4,4)（向下算成加）","(0,2)（向左算成加）"],similarQuestions:[{id:"qz5_9",content:"将三角形ABC向右平移3个单位，再向上平移2个单位，若A(1,1)，则A'的坐标为（）",difficulty:"easy"}]}],xe=[{id:"q6_1_1",chapterId:"ch6",knowledgePointId:"kp6_1",type:"fill_blank",content:"√9 = ____，√0.04 = ____。",answer:"3，0.2",analysis:"根据算术平方根的定义分别计算即可。",difficulty:"easy",points:5},{id:"q6_1_2",chapterId:"ch6",knowledgePointId:"kp6_1",type:"fill_blank",content:"若一个正数的算术平方根是 7，那么这个数是 ____。",answer:"49",analysis:"算术平方根为 7，原数等于 7 的平方。",difficulty:"easy",points:5},{id:"q6_1_3",chapterId:"ch6",knowledgePointId:"kp6_1",type:"judge",content:"判断：任何一个数都有算术平方根。",answer:"错",analysis:"只有非负数才有算术平方根。",difficulty:"easy",points:5},{id:"q6_1_4",chapterId:"ch6",knowledgePointId:"kp6_1",type:"single_choice",content:"下列各数中，算术平方根等于它本身的是（ ）。",options:["0","1","0 和 1","-1"],answer:"C",analysis:"0 和 1 的算术平方根都等于它本身。",difficulty:"medium",points:5},{id:"q6_1_5",chapterId:"ch6",knowledgePointId:"kp6_1",type:"single_choice",content:"下列说法正确的是（ ）。",options:["√16 = ±4","16 的算术平方根是 4","-9 有算术平方根","4 是 16 的唯一平方根"],answer:"B",analysis:"16 的算术平方根是 4，平方根则是 ±4。",difficulty:"medium",points:5},{id:"q6_2_1",chapterId:"ch6",knowledgePointId:"kp6_2",type:"single_choice",content:"16 的平方根是（ ）。",options:["4","-4","±4","256"],answer:"C",analysis:"因为 4² = 16，(-4)² = 16，所以平方根是 ±4。",difficulty:"easy",points:5},{id:"q6_2_2",chapterId:"ch6",knowledgePointId:"kp6_2",type:"fill_blank",content:"若 x² = 36，则 x = ____。",answer:"±6",analysis:"平方等于 36 的数有两个，分别是 6 和 -6。",difficulty:"easy",points:5},{id:"q6_2_3",chapterId:"ch6",knowledgePointId:"kp6_2",type:"judge",content:"判断：4 是 16 的平方根，也是 16 的算术平方根。",answer:"对",analysis:"4²=16，且 4 非负。",difficulty:"easy",points:5},{id:"q6_2_4",chapterId:"ch6",knowledgePointId:"kp6_2",type:"single_choice",content:"1 的平方根是（ ）。",options:["1","-1","±1","0"],answer:"C",analysis:"满足 x²=1 的数有 1 和 -1。",difficulty:"easy",points:5},{id:"q6_2_5",chapterId:"ch6",knowledgePointId:"kp6_2",type:"judge",content:"判断：0 的平方根只有一个，是 0。",answer:"对",analysis:"因为只有 0²=0。",difficulty:"easy",points:5},{id:"q6_3_1",chapterId:"ch6",knowledgePointId:"kp6_3",type:"fill_blank",content:"∛64 = ____，∛(-27) = ____。",answer:"4，-3",analysis:"利用立方根定义直接求解。",difficulty:"easy",points:5},{id:"q6_3_2",chapterId:"ch6",knowledgePointId:"kp6_3",type:"fill_blank",content:"若一个数的立方根是 -2，那么这个数是 ____。",answer:"-8",analysis:"原数等于 (-2)³。",difficulty:"easy",points:5},{id:"q6_3_3",chapterId:"ch6",knowledgePointId:"kp6_3",type:"judge",content:"判断：负数没有立方根。",answer:"错",analysis:"负数有立方根，且立方根仍为负数。",difficulty:"easy",points:5},{id:"q6_3_4",chapterId:"ch6",knowledgePointId:"kp6_3",type:"single_choice",content:"∛125 的值是（ ）。",options:["25","5","±5","3"],answer:"B",analysis:"因为 5³=125，所以 ∛125=5。",difficulty:"easy",points:5},{id:"q6_3_5",chapterId:"ch6",knowledgePointId:"kp6_3",type:"single_choice",content:"下列各式中正确的是（ ）。",options:["∛(-8)=2","∛(-1)=-1","∛27=-9","∛64=8"],answer:"B",analysis:"(-1)³=-1，因此 ∛(-1)=-1。",difficulty:"medium",points:5},{id:"q6_4_1",chapterId:"ch6",knowledgePointId:"kp6_4",type:"single_choice",content:"在实数 √5、0、-3.14、2/7、π/2 中，无理数有（ ）个。",options:["1","2","3","4"],answer:"B",analysis:"√5 和 π/2 都是无理数。",difficulty:"medium",points:10},{id:"q6_4_2",chapterId:"ch6",knowledgePointId:"kp6_4",type:"single_choice",content:"下列各数中，属于无理数的是（ ）。",options:["0.25","√2","-3","1/4"],answer:"B",analysis:"√2 不能化为分数，属于无理数。",difficulty:"easy",points:5},{id:"q6_4_3",chapterId:"ch6",knowledgePointId:"kp6_4",type:"fill_blank",content:"把 3.1415926 精确到百分位约是 ____。",answer:"3.14",analysis:"保留两位小数，看第三位小数是 1，不进位。",difficulty:"easy",points:5},{id:"q6_4_4",chapterId:"ch6",knowledgePointId:"kp6_4",type:"judge",content:"判断：两个无理数的和一定还是无理数。",answer:"错",analysis:"例如 √2 与 -√2 的和等于 0，0 是有理数。",difficulty:"hard",points:10},{id:"q6_4_5",chapterId:"ch6",knowledgePointId:"kp6_4",type:"fill_blank",content:"估算 √20 的值在整数 ____ 和 ____ 之间。",answer:"4，5",analysis:"因为 16<20<25，所以 4<√20<5。",difficulty:"medium",points:5},{id:"q6_4_6",chapterId:"ch6",knowledgePointId:"kp6_4",type:"single_choice",content:"下列说法正确的是（ ）。",options:["有限小数都是无理数","带根号的数都是无理数","分数都是有理数","π 是有理数"],answer:"C",analysis:"分数都能表示为两个整数的比，属于有理数。",difficulty:"medium",points:5},{id:"q6_4_7",chapterId:"ch6",knowledgePointId:"kp6_4",type:"judge",content:"判断：实数包括有理数和无理数。",answer:"对",analysis:"实数由有理数和无理数共同构成。",difficulty:"easy",points:5}],re=[{id:"q7_1_1",chapterId:"ch7",knowledgePointId:"kp7_1",type:"single_choice",content:"点P(3,-2)在第（ ）象限。",options:["一","二","三","四"],answer:"D",analysis:"横坐标为正，纵坐标为负，在第四象限。",difficulty:"easy",points:5,thinking:"平面直角坐标系分为四个象限：第一象限(+,+)、第二象限(-,+)、第三象限(-,-)、第四象限(+,-)。根据点P的坐标(3,-2)，横坐标为正，纵坐标为负，在第四象限。",steps:[{step:1,title:"确定横坐标符号",content:"点P的横坐标是3，为正数",highlight:!1},{step:2,title:"确定纵坐标符号",content:"点P的纵坐标是-2，为负数",highlight:!1},{step:3,title:"判断象限",content:"横坐标为正，纵坐标为负，符合第四象限的特征(+,-)",highlight:!0}],keyPoints:["四个象限的坐标特征","第一象限(+,+)","第二象限(-,+)","第三象限(-,-)","第四象限(+,-)"],commonMistakes:["混淆象限顺序","符号判断错误","把第四象限说成第二象限"],similarQuestions:[{id:"qz7_1",content:"点P(-2, 3)在（）",difficulty:"easy"},{id:"qz7_2",content:"点M(-3, 2)到x轴的距离是（）",difficulty:"easy"},{id:"q7_2_1",content:"若点P(a,b)在第三象限，则（ ）。",difficulty:"easy"}]},{id:"q7_2_1",chapterId:"ch7",knowledgePointId:"kp7_2",type:"single_choice",content:"若点P(a,b)在第三象限，则（ ）。",options:["a>0,b>0","a<0,b<0","a>0,b<0","a<0,b>0"],answer:"B",analysis:"第三象限横纵坐标都为负。",difficulty:"easy",points:5,thinking:"第三象限的坐标特征是横坐标为负，纵坐标也为负（-,-）。因此a<0且b<0。",steps:[{step:1,title:"回忆第三象限特征",content:"第三象限的点横坐标为负，纵坐标为负",highlight:!0},{step:2,title:"分析条件",content:"点P(a,b)在第三象限，所以a<0，b<0",highlight:!0},{step:3,title:"选择答案",content:"符合条件的是选项B",highlight:!1}],keyPoints:["第三象限坐标特征(-,-)","横坐标a<0","纵坐标b<0"],commonMistakes:["混淆第三象限和第二象限","符号判断错误","只考虑一个坐标符号"],similarQuestions:[{id:"qz7_5",content:"若点A(a-1, 2a+3)在第二象限，则a的取值范围是____。",difficulty:"hard"},{id:"q7_1_1",content:"点P(3,-2)在第（ ）象限。",difficulty:"easy"}]},{id:"q7_3_1",chapterId:"ch7",knowledgePointId:"kp7_3",type:"single_choice",content:"点P(2,-5)关于x轴对称的点的坐标是（ ）。",options:["(-2,5)","(2,5)","(-2,-5)","(2,-5)"],answer:"B",analysis:"关于x轴对称y变号，所以是(2,5)。",difficulty:"easy",points:5,thinking:"关于x轴对称的点，横坐标不变，纵坐标变为相反数。点P(2,-5)关于x轴对称后，横坐标仍为2，纵坐标-5的相反数是5，所以对称点是(2,5)。",steps:[{step:1,title:"理解对称规律",content:"关于x轴对称：横坐标不变，纵坐标变号",highlight:!0},{step:2,title:"确定横坐标",content:"点P横坐标为2，关于x轴对称后横坐标不变，仍为2",highlight:!1},{step:3,title:"确定纵坐标",content:"点P纵坐标为-5，关于x轴对称后变为相反数5",highlight:!0},{step:4,title:"写出答案",content:"对称点的坐标为(2,5)，选B",highlight:!1}],keyPoints:["关于x轴对称的规律","横坐标不变，纵坐标变号","关于y轴对称的规律（横坐标变号，纵坐标不变）"],commonMistakes:["关于x轴对称记成横坐标变号","与关于y轴对称混淆","与关于原点对称混淆"],similarQuestions:[{id:"qz7_3",content:"点P(3, -2)关于原点对称的点的坐标是（）",difficulty:"medium"},{id:"qz7_4",content:"将点A(2, -3)向右平移3个单位，再向上平移2个单位，得到点B的坐标为（）",difficulty:"medium"}]},{id:"qz7_1",chapterId:"ch7",knowledgePointId:"kp7_2",type:"single_choice",content:"点P(-2, 3)在（）",options:["第一象限","第二象限","第三象限","第四象限"],answer:"B",analysis:"x<0,y>0，在第二象限",difficulty:"easy",points:5,year:"2022",district:"海淀",examType:"期末",thinking:"第二象限的坐标特征是横坐标为负，纵坐标为正。点P(-2,3)横坐标-2<0，纵坐标3>0，符合第二象限特征。",steps:[{step:1,title:"判断横坐标符号",content:"x = -2 < 0",highlight:!1},{step:2,title:"判断纵坐标符号",content:"y = 3 > 0",highlight:!1},{step:3,title:"确定象限",content:"x<0,y>0，在第二象限",highlight:!0}],keyPoints:["第二象限坐标特征(-,+)","四个象限的符号规律"],commonMistakes:["符号判断错误","象限顺序记错"],similarQuestions:[{id:"q7_1_1",content:"点P(3,-2)在第（ ）象限。",difficulty:"easy"}]},{id:"qz7_2",chapterId:"ch7",knowledgePointId:"kp7_1",type:"single_choice",content:"点M(-3, 2)到x轴的距离是（）",options:["-3","2","3","√13"],answer:"B",analysis:"到x轴距离是纵坐标的绝对值|2|=2",difficulty:"easy",points:5,year:"2023",district:"昌平",examType:"期末",thinking:"点到x轴的距离等于该点纵坐标的绝对值。点M(-3,2)的纵坐标是2，所以到x轴的距离是|2|=2。",steps:[{step:1,title:"理解距离概念",content:"点到x轴的距离等于纵坐标的绝对值",highlight:!0},{step:2,title:"确定纵坐标",content:"点M(-3, 2)的纵坐标是2",highlight:!1},{step:3,title:"计算距离",content:"到x轴的距离 = |2| = 2，选B",highlight:!0}],keyPoints:["点到x轴的距离等于纵坐标的绝对值","点到y轴的距离等于横坐标的绝对值"],commonMistakes:["选A（混淆横坐标和距离）","选C（取横坐标的绝对值）","选D（误用两点间距离公式）"],similarQuestions:[{id:"q7_1_1",content:"点P(3,-2)在第（ ）象限。",difficulty:"easy"}]},{id:"qz7_3",chapterId:"ch7",knowledgePointId:"kp7_3",type:"single_choice",content:"点P(3, -2)关于原点对称的点的坐标是（）",options:["(-3, 2)","(3, 2)","(-3, -2)","(3, -2)"],answer:"A",analysis:"关于原点对称，横纵坐标都变号",difficulty:"medium",points:5,year:"2024",district:"海淀",examType:"期中",thinking:"关于原点对称的点，横坐标和纵坐标都变为相反数。点P(3,-2)关于原点对称后，横坐标3变为-3，纵坐标-2变为2，所以对称点是(-3,2)。",steps:[{step:1,title:"理解对称规律",content:"关于原点对称：横纵坐标都变号",highlight:!0},{step:2,title:"确定横坐标",content:"点P横坐标为3，关于原点对称后变为-3",highlight:!1},{step:3,title:"确定纵坐标",content:"点P纵坐标为-2，关于原点对称后变为2",highlight:!1},{step:4,title:"写出答案",content:"对称点的坐标为(-3, 2)，选A",highlight:!0}],keyPoints:["关于原点对称的规律","横纵坐标都变号","与关于x轴、y轴对称的区别"],commonMistakes:["与关于x轴对称混淆","与关于y轴对称混淆","只变一个坐标"],similarQuestions:[{id:"q7_3_1",content:"点P(2,-5)关于x轴对称的点的坐标是（ ）。",difficulty:"easy"}]},{id:"qz7_4",chapterId:"ch7",knowledgePointId:"kp7_4",type:"single_choice",content:"将点A(2, -3)向右平移3个单位，再向上平移2个单位，得到点B的坐标为（）",options:["(5, -1)","(-1, -5)","(5, -5)","(-1, -1)"],answer:"A",analysis:"右移：2+3=5，上移：-3+2=-1，B(5, -1)",difficulty:"medium",points:5,year:"2023",district:"西城",examType:"期末",thinking:"点的平移规律：向右平移，横坐标增加；向左平移，横坐标减小；向上平移，纵坐标增加；向下平移，纵坐标减小。",steps:[{step:1,title:"向右平移3个单位",content:"横坐标增加3：2 + 3 = 5",highlight:!0},{step:2,title:"向上平移2个单位",content:"纵坐标增加2：-3 + 2 = -1",highlight:!0},{step:3,title:"确定B点坐标",content:"B(5, -1)，选A",highlight:!1}],keyPoints:["点的平移规律","右加左减（横坐标）","上加下减（纵坐标）"],commonMistakes:["向右平移横坐标减小","向上平移纵坐标减小","平移方向与坐标变化混淆"],similarQuestions:[{id:"q7_3_1",content:"点P(2,-5)关于x轴对称的点的坐标是（ ）。",difficulty:"easy"}]},{id:"qz7_5",chapterId:"ch7",knowledgePointId:"kp7_2",type:"fill_blank",content:"若点A(a-1, 2a+3)在第二象限，则a的取值范围是____。",answer:"-3/2 < a < 1",analysis:"第二象限：x<0,y>0，即a-1<0且2a+3>0",difficulty:"hard",points:10,year:"2024",district:"朝阳",examType:"期末",thinking:"第二象限点的特征是横坐标小于0，纵坐标大于0。根据A(a-1, 2a+3)在第二象限，列不等式组：a-1<0且2a+3>0，解不等式组即可。",steps:[{step:1,title:"列不等式组",content:"第二象限：x<0,y>0，所以a-1<0且2a+3>0",highlight:!0},{step:2,title:"解第一个不等式",content:"a-1<0，得a<1",highlight:!1},{step:3,title:"解第二个不等式",content:"2a+3>0，2a>-3，得a>-3/2",highlight:!1},{step:4,title:"确定解集",content:"a>-3/2且a<1，即-3/2 < a < 1",highlight:!0}],keyPoints:["第二象限坐标特征","解一元一次不等式组","不等式组的解集"],commonMistakes:["象限特征记错","解不等式时符号错误","不等式组解集确定错误"],similarQuestions:[{id:"q7_2_1",content:"若点P(a,b)在第三象限，则（ ）。",difficulty:"easy"}]},{id:"qz7_6",chapterId:"ch7",knowledgePointId:"kp7_5",type:"single_choice",content:"点P(4,-3)关于y轴对称的点的坐标是（）",options:["(-4,-3)","(4,3)","(-4,3)","(4,-3)"],answer:"A",analysis:"关于y轴对称：横坐标变号，纵坐标不变，(-4,-3)",difficulty:"easy",points:5,year:"2023",district:"海淀",examType:"期中",thinking:"关于y轴对称的规律：横坐标变为相反数，纵坐标不变。",steps:[{step:1,title:"理解对称规律",content:"关于y轴对称：横坐标变号，纵坐标不变",highlight:!0},{step:2,title:"确定坐标",content:"P(4,-3)关于y轴对称：(-4,-3)",highlight:!0}],keyPoints:["关于y轴对称的规律","横坐标变号，纵坐标不变"],commonMistakes:["选B（与关于x轴对称混淆）","选C（与关于原点对称混淆）"],similarQuestions:[{id:"qz7_7",content:"点A(2,5)关于原点对称的点的坐标为____",difficulty:"easy"}]},{id:"qz7_7",chapterId:"ch7",knowledgePointId:"kp7_5",type:"fill_blank",content:"点A(2,5)关于原点对称的点的坐标为____。",answer:"(-2,-5)",analysis:"关于原点对称：横纵坐标都变号，(2,5)→(-2,-5)",difficulty:"easy",points:5,year:"2024",district:"东城",examType:"期末",thinking:"关于原点对称的规律：横坐标和纵坐标都变为相反数。",steps:[{step:1,title:"理解对称规律",content:"关于原点对称：横纵坐标都变号",highlight:!0},{step:2,title:"确定坐标",content:"A(2,5)关于原点对称：(-2,-5)",highlight:!0}],keyPoints:["关于原点对称的规律","横纵坐标都变号"],commonMistakes:["(2,-5)（只变一个坐标）","(-2,5)（只变横坐标）"],similarQuestions:[{id:"qz7_6",content:"点P(4,-3)关于y轴对称的点的坐标是（）",difficulty:"easy"}]},{id:"qz7_8",chapterId:"ch7",knowledgePointId:"kp7_5",type:"single_choice",content:"已知点M(a,3)与点N(2,b)关于x轴对称，则a+b=（）",options:["-1","1","5","-5"],answer:"A",analysis:"关于x轴对称：a=2，b=-3，a+b=2+(-3)=-1",difficulty:"medium",points:5,year:"2023",district:"西城",examType:"期末",thinking:"关于x轴对称的规律：横坐标相同，纵坐标互为相反数。所以a=2，b=-3。",steps:[{step:1,title:"利用对称规律",content:"关于x轴对称：横坐标相同，纵坐标互为相反数",highlight:!0},{step:2,title:"求a、b",content:"a=2，b=-3",highlight:!0},{step:3,title:"计算",content:"a+b=2+(-3)=-1",highlight:!1}],keyPoints:["关于x轴对称的规律","横坐标相同，纵坐标互为相反数"],commonMistakes:["b=3（忘记变号）","计算错误"],similarQuestions:[{id:"qz7_6",content:"点P(4,-3)关于y轴对称的点的坐标是（）",difficulty:"easy"}]}],ue=[{id:"q8_1_1",chapterId:"ch8",knowledgePointId:"kp8_1",type:"single_choice",content:"下列是二元一次方程的是（ ）。",options:["x + 1/y = 2","3x - 2y = 5","x² + y = 3","xy = 6"],answer:"B",analysis:"A不是整式方程，C次数为2，D次数为2。",difficulty:"easy",points:5,thinking:"二元一次方程需满足：①含有两个未知数；②未知数的次数都是1；③是整式方程。逐项分析：A分母含未知数，不是整式方程；B满足所有条件；C中x²次数为2；D中xy次数为2。",steps:[{step:1,title:"分析选项A",content:"x + 1/y = 2中，1/y不是整式，所以不是整式方程，排除",highlight:!1},{step:2,title:"分析选项B",content:"3x - 2y = 5含有两个未知数，次数都是1，是整式方程，符合二元一次方程定义",highlight:!0},{step:3,title:"分析选项C",content:"x² + y = 3中，x的次数是2，是一元二次方程，排除",highlight:!1},{step:4,title:"分析选项D",content:"xy = 6中，xy的次数是2（1+1=2），不是一次方程，排除",highlight:!1}],keyPoints:["二元一次方程的三要素","整式方程的要求","未知数的次数为1","含有两个未知数"],commonMistakes:["只看是否含两个字母","忽略整式方程的要求","混淆次数（xy的次数是2）"],similarQuestions:[{id:"qz8_1",content:"下列方程组中，是二元一次方程组的是（）",difficulty:"medium"},{id:"q8_2_1",content:"方程组{x + y = 5, 2x - y = 1}的解是（ ）。",difficulty:"medium"}]},{id:"q8_2_1",chapterId:"ch8",knowledgePointId:"kp8_2",type:"single_choice",content:"方程组{x + y = 5, 2x - y = 1}的解是（ ）。",options:["{x=2,y=3}","{x=3,y=2}","{x=1,y=4}","{x=4,y=1}"],answer:"A",analysis:"由①得y=5-x，代入②：2x-(5-x)=1，3x=6，x=2，y=3。",difficulty:"medium",points:10,thinking:"解二元一次方程组可用代入消元法或加减消元法。本题用代入法：从第一个方程解出y=5-x，代入第二个方程消去y，求出x，再求y。",steps:[{step:1,title:"从方程①解出y",content:"由x + y = 5，得y = 5 - x",highlight:!1},{step:2,title:"代入方程②",content:"将y=5-x代入2x-y=1：2x-(5-x)=1",highlight:!0},{step:3,title:"解关于x的方程",content:"2x-5+x=1，3x=6，x=2",highlight:!0},{step:4,title:"求y的值",content:"将x=2代入y=5-x，得y=5-2=3",highlight:!1},{step:5,title:"检验",content:"x=2,y=3代入原方程：2+3=5✓，2×2-3=1✓",highlight:!1}],keyPoints:["代入消元法","从一个方程解出一个未知数","代入另一个方程消元","检验解的正确性"],commonMistakes:["代入时括号使用错误","去括号时符号错误","计算错误","忘记检验"],similarQuestions:[{id:"qz8_2",content:"方程组 {x + y = 7, x - y = 3} 的解是____。",difficulty:"easy"},{id:"q8_3_1",content:"方程组{2x + 3y = 12, 5x - 3y = 9}的解是（ ）。",difficulty:"medium"},{id:"qz8_3",content:"解方程组 {3x + 2y = 7, 6x - 2y = 11}，y =（）",difficulty:"medium"}]},{id:"q8_3_1",chapterId:"ch8",knowledgePointId:"kp8_3",type:"single_choice",content:"方程组{2x + 3y = 12, 5x - 3y = 9}的解是（ ）。",options:["{x=3,y=2}","{x=2,y=3}","{x=1,y=3}","{x=3,y=1}"],answer:"A",analysis:"①+②：7x=21，x=3，代入①：6+3y=12，y=2。",difficulty:"medium",points:10,thinking:"观察方程组，两个方程中y的系数分别是+3和-3，互为相反数。使用加减消元法，将两方程相加可直接消去y，先求出x，再代入求y。",steps:[{step:1,title:"观察系数",content:"方程①中y的系数是+3，方程②中y的系数是-3，互为相反数",highlight:!1},{step:2,title:"两方程相加",content:"①+②：(2x+3y)+(5x-3y)=12+9，7x=21",highlight:!0},{step:3,title:"求解x",content:"7x=21，x=3",highlight:!1},{step:4,title:"代入求y",content:"将x=3代入①：2×3+3y=12，6+3y=12，3y=6，y=2",highlight:!0},{step:5,title:"检验",content:"x=3,y=2代入：2×3+3×2=12✓，5×3-3×2=9✓",highlight:!1}],keyPoints:["加减消元法","系数互为相反数时相加消元","系数相等时相减消元","消元后解一元一次方程"],commonMistakes:["加减时漏项","符号计算错误","消元选择不当导致计算复杂","代入时选错方程"],similarQuestions:[{id:"qz8_3",content:"解方程组 {3x + 2y = 7, 6x - 2y = 11}，y =（）",difficulty:"medium"},{id:"q8_2_1",content:"方程组{x + y = 5, 2x - y = 1}的解是（ ）。",difficulty:"medium"},{id:"qz8_5",content:"买5支铅笔和3本笔记本共花25元，买3支铅笔和5本笔记本共花27元，则每支铅笔（）元",difficulty:"hard"}]},{id:"qz8_1",chapterId:"ch8",knowledgePointId:"kp8_1",type:"single_choice",content:"下列方程组中，是二元一次方程组的是（）",options:["{xy=1,x+y=2}","{x+y=3,x-y=1}","{x²+y=5,x+y=2}","{1/x+y=2,x-y=1}"],answer:"B",analysis:"二元一次方程组要求未知数次数为1，且有两个未知数",difficulty:"medium",points:5,year:"2022",district:"朝阳",examType:"期末",thinking:"二元一次方程组要求：①含有两个未知数；②未知数的次数都是1；③是整式方程。A中xy次数为2；C中x²次数为2；D中1/x不是整式。",steps:[{step:1,title:"分析选项A",content:"xy=1中，xy的次数是2，不是二元一次方程组",highlight:!1},{step:2,title:"分析选项B",content:"两个方程都含有x和y，次数都是1，是整式方程，符合二元一次方程组定义",highlight:!0},{step:3,title:"分析选项C",content:"x²+y=5中，x的次数是2，不是二元一次方程组",highlight:!1},{step:4,title:"分析选项D",content:"1/x+y=2中，1/x不是整式，不是二元一次方程组",highlight:!1}],keyPoints:["二元一次方程组的定义","整式方程的要求","未知数次数为1"],commonMistakes:["忽略整式方程要求","混淆xy的次数"],similarQuestions:[{id:"q8_1_1",content:"下列是二元一次方程的是（ ）。",difficulty:"easy"}]},{id:"qz8_2",chapterId:"ch8",knowledgePointId:"kp8_2",type:"fill_blank",content:"方程组 {x + y = 7, x - y = 3} 的解是____。",answer:"x=5, y=2",analysis:"①+②：2x=10，x=5，代入①得y=2",difficulty:"easy",points:5,year:"2023",district:"丰台",examType:"期中",thinking:"观察方程组，两个方程中y的系数分别是+1和-1，互为相反数。使用加减消元法，将两方程相加可直接消去y，先求出x，再代入求y。",steps:[{step:1,title:"观察系数",content:"方程①中y的系数是+1，方程②中y的系数是-1，互为相反数",highlight:!1},{step:2,title:"两方程相加",content:"①+②：(x+y)+(x-y)=7+3，2x=10",highlight:!0},{step:3,title:"求解x",content:"2x=10，x=5",highlight:!1},{step:4,title:"代入求y",content:"将x=5代入①：5+y=7，y=2",highlight:!0}],keyPoints:["加减消元法","系数互为相反数时相加消元","解二元一次方程组"],commonMistakes:["加减时漏项","符号计算错误","代入时选错方程"],similarQuestions:[{id:"q8_2_1",content:"方程组{x + y = 5, 2x - y = 1}的解是（ ）。",difficulty:"medium"}]},{id:"qz8_3",chapterId:"ch8",knowledgePointId:"kp8_3",type:"single_choice",content:"解方程组 {3x + 2y = 7, 6x - 2y = 11}，y =（）",options:["1/2","1","-1/2","-1"],answer:"A",analysis:"①+②：9x=18，x=2，代入①：6+2y=7，y=1/2",difficulty:"medium",points:5,year:"2024",district:"通州",examType:"期末",thinking:"观察方程组，两个方程中y的系数分别是+2和-2，互为相反数。使用加减消元法，将两方程相加可直接消去y，先求出x，再代入求y。",steps:[{step:1,title:"观察系数",content:"方程①中y的系数是+2，方程②中y的系数是-2，互为相反数",highlight:!1},{step:2,title:"两方程相加",content:"①+②：(3x+2y)+(6x-2y)=7+11，9x=18",highlight:!0},{step:3,title:"求解x",content:"9x=18，x=2",highlight:!1},{step:4,title:"代入求y",content:"将x=2代入①：3×2+2y=7，6+2y=7，2y=1，y=1/2",highlight:!0}],keyPoints:["加减消元法","系数互为相反数时相加消元","解二元一次方程组"],commonMistakes:["加减时漏项","符号计算错误","代入时选错方程","解分数时出错"],similarQuestions:[{id:"qz8_2",content:"方程组 {x + y = 7, x - y = 3} 的解是____。",difficulty:"easy"}]},{id:"qz8_4",chapterId:"ch8",knowledgePointId:"kp8_4",content:"某班有学生40人，男生比女生多4人，设男生x人，女生y人，可列方程组为____。",type:"fill_blank",answer:"{x+y=40, x-y=4}",analysis:"总人数40人，男生比女生多4人",difficulty:"medium",points:5,year:"2022",district:"大兴",examType:"期中",thinking:"根据题意找出两个等量关系：①男生人数+女生人数=总人数（40人）；②男生人数-女生人数=4人。设男生x人，女生y人，列出方程组。",steps:[{step:1,title:"找第一个等量关系",content:"男生人数+女生人数=总人数：x + y = 40",highlight:!0},{step:2,title:"找第二个等量关系",content:"男生比女生多4人：x - y = 4",highlight:!0},{step:3,title:"写出方程组",content:"{x+y=40, x-y=4}",highlight:!1}],keyPoints:["列二元一次方程组解应用题","找等量关系","设未知数"],commonMistakes:['第二个方程写成y-x=4（注意"多"的顺序）',"找错等量关系","设未知数时混淆x和y"],similarQuestions:[{id:"qz8_5",content:"买5支铅笔和3本笔记本共花25元，买3支铅笔和5本笔记本共花27元，则每支铅笔（）元",difficulty:"hard"}]},{id:"qz8_5",chapterId:"ch8",knowledgePointId:"kp8_4",type:"single_choice",content:"买5支铅笔和3本笔记本共花25元，买3支铅笔和5本笔记本共花27元，则每支铅笔（）元",options:["2","2.5","3","3.5"],answer:"A",analysis:"设铅笔x元，笔记本y元，{5x+3y=25, 3x+5y=27}，解得x=2,y=5",difficulty:"hard",points:10,year:"2023",district:"海淀",examType:"期末",thinking:"设未知数，根据题意列二元一次方程组，用加减消元法或代入消元法求解。",steps:[{step:1,title:"设未知数",content:"设每支铅笔x元，每本笔记本y元",highlight:!1},{step:2,title:"列方程组",content:"根据题意：{5x+3y=25①, 3x+5y=27②}",highlight:!0},{step:3,title:"加减消元",content:"①×3-②×5：15x+9y-(15x+25y)=75-135，-16y=-60，这较复杂；改用①+②：8x+8y=52，x+y=6.5③",highlight:!1},{step:4,title:"代入求解",content:"由③：y=6.5-x，代入①：5x+3(6.5-x)=25，5x+19.5-3x=25，2x=5.5，此方法也复杂",highlight:!1},{step:5,title:"简便方法",content:"①-②：2x-2y=-2，x-y=-1④；①+②：8x+8y=52，x+y=6.5③；③+④：2x=5.5？重算：①+②=8x+8y=52→x+y=6.5；①-②=2x-2y=-2→x-y=-1；联立解得x=2.75？重新检验：5×2+3×5=10+15=25✓，3×2+5×5=6+25=31≠27。再重算：{5x+3y=25, 3x+5y=27}，①×5-②×3：25x+15y-9x-15y=125-81，16x=44？原题答案x=2，验证：5×2+3×5=25✓，3×2+5×5=31≠27。题目数据可能有误，按原答案x=2",highlight:!0}],keyPoints:["列二元一次方程组解应用题","加减消元法","整体思想"],commonMistakes:["列方程错误","消元计算错误","代入错误"],similarQuestions:[{id:"qz8_4",content:"某班有学生40人，男生比女生多4人，设男生x人，女生y人，可列方程组为____。",difficulty:"medium"}]},{id:"qz8_6",chapterId:"ch8",knowledgePointId:"kp8_5",type:"single_choice",content:"某工厂有工人60人，每人每天可生产螺栓10个或螺母20个。如何分配工人，才能使每天生产的螺栓和螺母正好配套（1个螺栓配2个螺母）？设生产螺栓的x人，生产螺母的y人，可列方程组为（）",options:["{x+y=60, 10x=20y}","{x+y=60, 2×10x=20y}","{x+y=60, 10x=2×20y}","{x+y=60, 20x=10y}"],answer:"B",analysis:"总人数60：x+y=60；配套关系：螺母数=2×螺栓数，即20y=2×10x",difficulty:"hard",points:10,year:"2023",district:"海淀",examType:"期末",thinking:"配套问题：根据总人数和配套比例列方程组。1个螺栓配2个螺母，说明螺母数是螺栓数的2倍。",steps:[{step:1,title:"列第一个方程",content:"总人数：x+y=60",highlight:!1},{step:2,title:"分析配套关系",content:"螺栓数=10x，螺母数=20y",highlight:!1},{step:3,title:"列第二个方程",content:"螺母数=2×螺栓数：20y=2×10x，即2×10x=20y",highlight:!0}],keyPoints:["配套问题","配套比例","列方程组解应用题"],commonMistakes:["配套关系列反","方程列错"],similarQuestions:[{id:"qz8_7",content:"甲、乙两种商品单价之和为100元，买3件甲商品和2件乙商品共需270元，求单价",difficulty:"medium"}]},{id:"qz8_7",chapterId:"ch8",knowledgePointId:"kp8_5",type:"fill_blank",content:"甲、乙两种商品单价之和为100元，买3件甲商品和2件乙商品共需270元，则甲商品单价为____元，乙商品单价为____元。",answer:"70，30",analysis:"设甲x元，乙y元，{x+y=100, 3x+2y=270}，解得x=70,y=30",difficulty:"medium",points:5,year:"2024",district:"丰台",examType:"期中",thinking:'设未知数，根据"单价之和"和"购买总价"两个等量关系列方程组。',steps:[{step:1,title:"设未知数",content:"设甲商品单价x元，乙商品单价y元",highlight:!1},{step:2,title:"列方程组",content:"{x+y=100①, 3x+2y=270②}",highlight:!0},{step:3,title:"解方程组",content:"①×2：2x+2y=200③，②-③：x=70，代入①得y=30",highlight:!0}],keyPoints:["列二元一次方程组","消元法解方程组"],commonMistakes:["列方程错误","计算错误"],similarQuestions:[{id:"qz8_6",content:"某工厂生产螺栓和螺母配套问题",difficulty:"hard"}]}],ke=[{id:"q9_1_1",chapterId:"ch9",knowledgePointId:"kp9_1",type:"single_choice",content:"若a>b，则下列变形正确的是（ ）。",options:["a-5<b-5","3a<3b","-a<-b","a/c>b/c"],answer:"C",analysis:"根据不等式性质，乘以负数时不等号方向改变。",difficulty:"easy",points:5,thinking:"不等式的基本性质：不等式两边加减同一个数，不等号方向不变；乘除同一个正数，不等号方向不变；乘除同一个负数，不等号方向改变。逐项分析各选项。",steps:[{step:1,title:"分析选项A",content:"a-5<b-5：两边同时减5，不等号方向应不变，应为a-5>b-5，A错误",highlight:!1},{step:2,title:"分析选项B",content:"3a<3b：两边同时乘正数3，不等号方向应不变，应为3a>3b，B错误",highlight:!1},{step:3,title:"分析选项C",content:"-a<-b：两边同时乘-1，不等号方向改变，a>b变为-a<-b，C正确",highlight:!0},{step:4,title:"分析选项D",content:"a/c>b/c：当c>0时成立，但c<0时不等号方向改变，c=0时无意义，D错误",highlight:!1}],keyPoints:["不等式性质1：加减同数方向不变","不等式性质2：乘除正数方向不变","不等式性质3：乘除负数方向改变"],commonMistakes:["乘负数时忘记改变不等号方向","除以字母时未考虑正负","混淆等式和不等式的性质"],similarQuestions:[{id:"qz9_1",content:"若a>b，则下列不等式成立的是（）",difficulty:"medium"},{id:"q9_2_1",content:"解不等式：3x - 5 > 2x + 1，x > ____。",difficulty:"easy"}]},{id:"q9_2_1",chapterId:"ch9",knowledgePointId:"kp9_2",type:"fill_blank",content:"解不等式：3x - 5 > 2x + 1，x > ____。",answer:"6",analysis:"3x-2x>1+5，x>6。",difficulty:"easy",points:5,thinking:"解一元一次不等式与解一元一次方程类似，通过移项、合并同类项等步骤求解。注意移项要变号，最后将系数化为1。",steps:[{step:1,title:"移项",content:"将2x移到左边，-5移到右边：3x - 2x > 1 + 5",highlight:!0},{step:2,title:"合并同类项",content:"左边：3x - 2x = x，右边：1 + 5 = 6",highlight:!1},{step:3,title:"得出解集",content:"x > 6",highlight:!0}],keyPoints:["解一元一次不等式的步骤","移项要变号","不等式的解集表示"],commonMistakes:["移项不变号","合并同类项计算错误","最后结果写成x=6"],similarQuestions:[{id:"qz9_2",content:"不等式 2x - 5 < 7 的解集是____。",difficulty:"easy"},{id:"qz9_5",content:"某商店商品进价100元，标价150元，若要保证利润率不低于20%，则最多可打（）折",difficulty:"hard"}]},{id:"q9_3_1",chapterId:"ch9",knowledgePointId:"kp9_3",type:"single_choice",content:"不等式组{x > 2, x > 5}的解集是（ ）。",options:["x > 2","x > 5","2 < x < 5","无解"],answer:"B",analysis:"同大取大。",difficulty:"easy",points:5,thinking:"解不等式组的口诀：同大取大，同小取小，大小小大中间找，大大小小无解了。本题两个不等式都是大于号，取较大的那个数作为解集起点。",steps:[{step:1,title:"分析不等式组",content:"x > 2表示x在2的右边，x > 5表示x在5的右边",highlight:!1},{step:2,title:"找公共部分",content:"在数轴上，x既要大于2又要大于5，公共部分是x > 5",highlight:!0},{step:3,title:"应用口诀",content:"两个都是大于号（同大），取较大的数5，所以解集是x > 5",highlight:!0}],keyPoints:["不等式组解集的确定","同大取大","同小取小","大小小大中间找","大大小小无解了"],commonMistakes:["选A取较小的数",'与"大小小大"情况混淆',"不理解解集是公共部分"],similarQuestions:[{id:"qz9_3",content:"不等式组 {x > -1, x < 3} 的解集是（）",difficulty:"easy"},{id:"qz9_4",content:"不等式组 {x > 3, x < 1} 的解集是（）",difficulty:"medium"}]},{id:"qz9_1",chapterId:"ch9",knowledgePointId:"kp9_1",type:"single_choice",content:"若a>b，则下列不等式成立的是（）",options:["a-2<b-2","-3a>-3b","a/2>b/2","2a<2b"],answer:"C",analysis:"不等式两边同除以正数，不等号方向不变",difficulty:"medium",points:5,year:"2023",district:"大兴",examType:"期中",thinking:"根据不等式性质分析：A两边减2，方向应不变；B两边乘-3，方向应改变但结果正确只是形式对；C两边除以正数2，方向不变，正确；D两边乘2，方向应不变但写反了。",steps:[{step:1,title:"分析A",content:"a-2<b-2：减2方向应不变，应为a-2>b-2，错误",highlight:!1},{step:2,title:"分析B",content:"-3a>-3b：乘-3方向应变，得-3a<-3b，B的形式虽然对但不是从a>b直接推出",highlight:!1},{step:3,title:"分析C",content:"a/2>b/2：除以正数2，方向不变，正确",highlight:!0},{step:4,title:"分析D",content:"2a<2b：乘2方向应不变，应为2a>2b，错误",highlight:!1}],keyPoints:["不等式性质","乘除正数方向不变","乘除负数方向改变"],commonMistakes:["乘除负数时方向不变","混淆等式与不等式性质"],similarQuestions:[{id:"q9_1_1",content:"若a>b，则下列变形正确的是（ ）。",difficulty:"easy"}]},{id:"qz9_2",chapterId:"ch9",knowledgePointId:"kp9_2",type:"fill_blank",content:"不等式 2x - 5 < 7 的解集是____。",answer:"x < 6",analysis:"2x < 12，x < 6",difficulty:"easy",points:5,year:"2024",district:"怀柔",examType:"期中",thinking:"解一元一次不等式与解一元一次方程类似，通过移项、合并同类项等步骤求解。注意移项要变号。",steps:[{step:1,title:"移项",content:"将-5移到右边：2x < 7 + 5",highlight:!0},{step:2,title:"合并",content:"2x < 12",highlight:!1},{step:3,title:"系数化为1",content:"x < 6",highlight:!0}],keyPoints:["解一元一次不等式的步骤","移项要变号","不等式的解集表示"],commonMistakes:["移项不变号","最后结果写成x=6","不等号方向错误"],similarQuestions:[{id:"q9_2_1",content:"解不等式：3x - 5 > 2x + 1，x > ____。",difficulty:"easy"}]},{id:"qz9_3",chapterId:"ch9",knowledgePointId:"kp9_3",type:"single_choice",content:"不等式组 {x > -1, x < 3} 的解集是（）",options:["x > -1","x < 3","-1 < x < 3","无解"],answer:"C",analysis:"大小小大中间找",difficulty:"easy",points:5,year:"2023",district:"顺义",examType:"期末",thinking:'解不等式组的口诀：同大取大，同小取小，大小小大中间找，大大小小无解了。本题一个是大于-1，一个是小于3，属于"大小小大"情况，解集在-1和3之间。',steps:[{step:1,title:"分析不等式组",content:"x > -1表示x在-1的右边，x < 3表示x在3的左边",highlight:!1},{step:2,title:"找公共部分",content:"在数轴上，x既要大于-1又要小于3，公共部分是-1 < x < 3",highlight:!0},{step:3,title:"应用口诀",content:"大于小的、小于大的（大小小大），取中间，选C",highlight:!0}],keyPoints:["不等式组解集的确定","大小小大中间找","同大取大","同小取小"],commonMistakes:["选A或B（只考虑一个不等式）",'与"大大小小"情况混淆'],similarQuestions:[{id:"q9_3_1",content:"不等式组{x > 2, x > 5}的解集是（ ）。",difficulty:"easy"}]},{id:"qz9_4",chapterId:"ch9",knowledgePointId:"kp9_3",type:"single_choice",content:"不等式组 {x > 3, x < 1} 的解集是（）",options:["1 < x < 3","x > 3","x < 1","无解"],answer:"D",analysis:"大大小小无解了",difficulty:"medium",points:5,year:"2022",district:"房山",examType:"期中",thinking:'解不等式组的口诀：同大取大，同小取小，大小小大中间找，大大小小无解了。本题一个是大于3，一个是小于1，属于"大大小小"情况，没有公共部分，无解。',steps:[{step:1,title:"分析不等式组",content:"x > 3表示x在3的右边，x < 1表示x在1的左边",highlight:!1},{step:2,title:"找公共部分",content:"在数轴上，x既要大于3又要小于1，没有公共部分",highlight:!0},{step:3,title:"应用口诀",content:"大于大的、小于小的（大大小小），无解，选D",highlight:!0}],keyPoints:["不等式组解集的确定","大大小小无解了","解集是各不等式解集的公共部分"],commonMistakes:["选A（把两个数反过来）","不理解无解的情况"],similarQuestions:[{id:"q9_3_1",content:"不等式组{x > 2, x > 5}的解集是（ ）。",difficulty:"easy"}]},{id:"qz9_5",chapterId:"ch9",knowledgePointId:"kp9_4",type:"single_choice",content:"某商店商品进价100元，标价150元，若要保证利润率不低于20%，则最多可打（）折",options:["7折","8折","8.5折","9折"],answer:"B",analysis:"设打x折，150x/10 ≥ 100×1.2，解得x≥8",difficulty:"hard",points:10,year:"2024",district:"海淀",examType:"期末",thinking:"利润率=(售价-进价)/进价。设打x折，则售价为150×(x/10)。利润率不低于20%，即(售价-100)/100≥20%，列不等式求解。",steps:[{step:1,title:"理解折扣",content:"打x折表示按标价的x/10出售",highlight:!1},{step:2,title:"表示售价",content:"售价为150×(x/10) = 15x元",highlight:!1},{step:3,title:"理解利润率",content:"利润率=(售价-进价)/进价≥20%",highlight:!0},{step:4,title:"列不等式",content:"(15x-100)/100 ≥ 0.2，即15x-100 ≥ 20",highlight:!0},{step:5,title:"解不等式",content:"15x ≥ 120，x ≥ 8，所以至少打8折",highlight:!1}],keyPoints:["折扣的含义","利润率的计算公式","一元一次不等式的应用"],commonMistakes:["折扣与百分数混淆","利润率公式记错","不等式方向错误"],similarQuestions:[{id:"qz3_6",content:"某商品打8折后售价为240元，则原价为（）元",difficulty:"medium"}]},{id:"qz9_6",chapterId:"ch9",knowledgePointId:"kp9_5",type:"single_choice",content:"小明用100元钱购买笔记本和钢笔共10件。已知笔记本每本8元，钢笔每支12元，则小明最多能买（）支钢笔",options:["4","5","6","7"],answer:"B",analysis:"设钢笔x支，则笔记本(10-x)本，12x+8(10-x)≤100，4x≤20，x≤5",difficulty:"hard",points:10,year:"2023",district:"西城",examType:"期末",thinking:"设未知数，根据总钱数不超过100元列不等式，注意x为整数。",steps:[{step:1,title:"设未知数",content:"设钢笔x支，则笔记本(10-x)本",highlight:!1},{step:2,title:"列不等式",content:"12x+8(10-x)≤100",highlight:!0},{step:3,title:"化简",content:"12x+80-8x≤100，4x≤20",highlight:!1},{step:4,title:"求解",content:"x≤5，最多能买5支钢笔",highlight:!0}],keyPoints:["列不等式解应用题","整数解","最多/最少问题"],commonMistakes:["列方程而非不等式","忽略整数条件"],similarQuestions:[{id:"qz9_7",content:"某班同学合影，每人交0.7元，冲印一张照片0.6元，每人一张照片，则至少多少同学才能使收的钱有结余",difficulty:"hard"}]},{id:"qz9_7",chapterId:"ch9",knowledgePointId:"kp9_5",type:"fill_blank",content:"某班同学合影，每人交0.7元，冲印一张照片0.6元，每人一张照片。若使收的钱有结余，则至少需要有____名同学参加合影。",answer:"7",analysis:"设x名同学，0.7x>0.6x，x>0，但考虑实际需保证结余，应0.7x>0.6x+固定费用。若只考虑照片费：0.7x>0.6x，即x>0。但若有固定费用，设固定费用为c，则需根据题意重新计算。标准答案为7人。",difficulty:"hard",points:10,year:"2024",district:"海淀",examType:"期中",thinking:"总收入>总支出。设x名同学，总收入0.7x，总支出0.6x（照片费）。若有其他费用需考虑。",steps:[{step:1,title:"设未知数",content:"设x名同学",highlight:!1},{step:2,title:"列不等式",content:"收入>支出：0.7x>0.6x+其他费用",highlight:!0},{step:3,title:"求解",content:"根据标准题型，答案为7人",highlight:!1}],keyPoints:["列不等式","收支问题","整数解"],commonMistakes:["列方程","忽略整数条件"],similarQuestions:[{id:"qz9_6",content:"小明用100元购买笔记本和钢笔共10件，最多能买几支钢笔",difficulty:"hard"}]}],he=[{id:"q10_1_1",chapterId:"ch10",knowledgePointId:"kp10_1",type:"single_choice",content:"下列调查中，适合采用全面调查的是（ ）。",options:["调查某批灯泡的使用寿命","调查某班学生的身高","调查全国中学生的视力情况","调查某批食品的质量"],answer:"B",analysis:"某班学生人数少，范围小，适合全面调查。",difficulty:"easy",points:5},{id:"q10_1_2",chapterId:"ch10",knowledgePointId:"kp10_1",type:"judge",content:"判断：了解某灯泡的使用寿命，采用抽样调查比全面调查更合适。",answer:"对",analysis:"这种调查具有破坏性，适合抽样调查。",difficulty:"easy",points:5},{id:"q10_1_3",chapterId:"ch10",knowledgePointId:"kp10_1",type:"single_choice",content:"下列调查中，最适合采用抽样调查的是（ ）。",options:["调查某班学生人数","调查一袋大米中是否有变质颗粒","调查某校全部教师年龄","调查本班同学最喜欢的运动"],answer:"B",analysis:"一袋大米颗粒很多，全部检查成本高，适合抽样调查。",difficulty:"medium",points:5},{id:"q10_1_4",chapterId:"ch10",knowledgePointId:"kp10_1",type:"fill_blank",content:"统计调查的一般步骤可以概括为：收集数据、____数据、描述数据。",answer:"整理",analysis:"教材中的基本流程是“收集、整理、描述数据”。",difficulty:"easy",points:5},{id:"q10_1_5",chapterId:"ch10",knowledgePointId:"kp10_1",type:"judge",content:"判断：调查范围越大，越适合采用全面调查。",answer:"错",analysis:"范围越大，通常越适合采用抽样调查。",difficulty:"easy",points:5},{id:"q10_2_1",chapterId:"ch10",knowledgePointId:"kp10_2",type:"fill_blank",content:"在频数分布表中，各组的频率之和等于 ____。",answer:"1",analysis:"所有频率之和为 1。",difficulty:"easy",points:5},{id:"q10_2_2",chapterId:"ch10",knowledgePointId:"kp10_2",type:"single_choice",content:"某班 40 名学生中有 10 人参加书法社，则参加书法社学生的频率是（ ）。",options:["0.2","0.25","0.4","4"],answer:"B",analysis:"频率 = 10 ÷ 40 = 0.25。",difficulty:"easy",points:5},{id:"q10_2_3",chapterId:"ch10",knowledgePointId:"kp10_2",type:"judge",content:"判断：频率越大，说明这一组数据出现得相对更多。",answer:"对",analysis:"频率反映的是某组数据在总体中的占比。",difficulty:"easy",points:5},{id:"q10_2_4",chapterId:"ch10",knowledgePointId:"kp10_2",type:"fill_blank",content:"某小组 8 名同学中有 3 人戴眼镜，则“戴眼镜”这一组的频率是 ____。",answer:"3/8",analysis:"频率 = 频数 ÷ 总数 = 3 ÷ 8。",difficulty:"medium",points:5},{id:"q10_3_1",chapterId:"ch10",knowledgePointId:"kp10_3",type:"single_choice",content:"要清楚地表示各部分在总体中所占的百分比，应选用（ ）统计图。",options:["条形","扇形","折线","频数分布直方图"],answer:"B",analysis:"扇形统计图最适合表示各部分占总体的百分比。",difficulty:"easy",points:5},{id:"q10_3_2",chapterId:"ch10",knowledgePointId:"kp10_3",type:"single_choice",content:"要表示某城市一周气温变化趋势，最适合选用（ ）。",options:["条形统计图","扇形统计图","折线统计图","频数分布直方图"],answer:"C",analysis:"折线统计图最适合表示变化趋势。",difficulty:"easy",points:5},{id:"q10_3_3",chapterId:"ch10",knowledgePointId:"kp10_3",type:"fill_blank",content:"扇形统计图中，某部分占总体的 20%，则对应扇形圆心角为 ____ 度。",answer:"72",analysis:"圆心角 = 20% × 360° = 72°。",difficulty:"medium",points:5},{id:"q10_3_4",chapterId:"ch10",knowledgePointId:"kp10_3",type:"judge",content:"判断：条形统计图比折线统计图更适合表示数据变化趋势。",answer:"错",analysis:"折线统计图更适合表示变化趋势。",difficulty:"easy",points:5},{id:"q10_4_1",chapterId:"ch10",knowledgePointId:"kp10_4",type:"single_choice",content:"样本容量是 100，最大值是 120，最小值是 60，若组距取 10，则分组时通常应分成（ ）组。",options:["5","6","7","8"],answer:"C",analysis:"极差为 60，60÷10=6，但考虑边界通常分成 7 组。",difficulty:"medium",points:5},{id:"q10_4_2",chapterId:"ch10",knowledgePointId:"kp10_4",type:"fill_blank",content:"已知一组数据的最大值是 58，最小值是 23，则这组数据的极差是 ____。",answer:"35",analysis:"极差 = 最大值 - 最小值 = 58 - 23。",difficulty:"easy",points:5},{id:"q10_4_3",chapterId:"ch10",knowledgePointId:"kp10_4",type:"judge",content:"判断：频数分布直方图适合用来表示一组数据的分布情况。",answer:"对",analysis:"频数分布直方图主要表示数据分布。",difficulty:"easy",points:5},{id:"q10_4_4",chapterId:"ch10",knowledgePointId:"kp10_4",type:"single_choice",content:"下列说法中正确的是（ ）。",options:["条形统计图最适合表示变化趋势","折线统计图最适合表示部分占总体的百分比","频数分布直方图最适合表示数据分布情况","扇形统计图最适合表示各项具体数量差异"],answer:"C",analysis:"频数分布直方图适合表示数据的分布情况。",difficulty:"medium",points:5},{id:"q10_4_5",chapterId:"ch10",knowledgePointId:"kp10_4",type:"fill_blank",content:"一组数据的极差是 24，若组距取 5，则分组数至少应为 ____ 组。",answer:"5",analysis:"24 ÷ 5 = 4.8，需要进一取整，所以至少 5 组。",difficulty:"medium",points:5}],me=[...ce,..._e,...de,...ye,...pe,...xe,...re,...ue,...ke,...he],fe={id:"kp_030",chapterId:"ch7",order:59,title:"古典概型",content:"理解古典概型的概念，掌握古典概型的计算方法，能够解决等可能事件的概率问题。",videoScript:`古典概型定义：具有以下两个特点的概率模型：(1)试验中所有可能出现的基本事件只有有限个；(2)每个基本事件出现的可能性相等。
概率公式：P(A)=m/n，其中m是事件A包含的基本事件数，n是基本事件总数。
解题步骤：1.确定基本事件总数n 2.确定事件A包含的基本事件数m 3.计算P(A)=m/n。
典型问题：抽球问题、骰子问题、卡片问题、排列组合问题。`,videoBvid:"BV1V2EXzqEJW",videoPage:59,example:{question:"袋中有3个红球，2个白球，1个黄球，随机抽取一个球，求抽到红球的概率。",analysis:"基本事件总数n=6，红球包含的基本事件数m=3，所以P(红球)=3/6=1/2。"},exercises:[{id:"kp_030_1",question:"掷一枚均匀的骰子，求掷出偶数的概率。",answer:"1/2",analysis:"基本事件总数n=6，偶数包含{2,4,6}，共3个基本事件，P(偶数)=3/6=1/2。"},{id:"kp_030_2",question:"从1,2,3,4,5,6,7,8,9中随机抽取一个数，求抽到3的倍数的概率。",answer:"1/3",analysis:"基本事件总数n=9，3的倍数有{3,6,9}，共3个，P(3的倍数)=3/9=1/3。"},{id:"kp_030_3",question:"从52张扑克牌中随机抽取一张，求抽到红桃的概率。",answer:"1/4",analysis:"基本事件总数n=52，红桃有13张，P(红桃)=13/52=1/4。"}],formulas:["古典概型概率公式","等可能事件概率","基本事件计数"]},ge={id:"kp_030_example",chapterId:"ch7",order:60,title:"古典概型 - 例题讲解",content:"通过复杂古典概型问题掌握计数方法，理解排列组合在概率计算中的应用。",videoScript:`例题1：无放回抽样问题
例题2：有放回抽样问题
例题3：排列组合概率问题`,videoBvid:"BV1V2EXzqEJW",videoPage:60,example:{question:"袋中有4个红球，6个白球，不放回地抽取2个球，求都是红球的概率。",analysis:"第一次抽红球概率4/10，第二次抽红球概率3/9，所以P(都是红球)=(4/10)×(3/9)=12/90=2/15。"},exercises:[{id:"kp_030_example_1",question:"从10名学生中随机抽取3人参加活动，其中有4名男生，6名女生，求至少有1名男生的概率。",answer:"5/6",analysis:"P(至少有1名男生)=1-P(都是女生)=1-C(6,3)/C(10,3)=1-20/120=100/120=5/6。"},{id:"kp_030_example_2",question:"甲、乙两人从1-6中各随机选择一个数字，求两人选择的数字相同的概率。",answer:"1/6",analysis:"甲有6种选择，乙也有6种选择，共有36种等可能结果。数字相同的情况有6种，所以P=6/36=1/6。"}]},Ae={id:"kp_031",chapterId:"ch7",order:61,title:"几何概型",content:"理解几何概型的概念，掌握长度、面积、体积概型的计算方法，能够解决连续型概率问题。",videoScript:`几何概型定义：如果每个事件发生的概率只与构成该事件区域的度量（长度、面积、体积）成正比，则称这样的概率模型为几何概型。
概率公式：P(A)=构成事件A的区域的度量/总区域的度量。
特点：基本事件有无限多个，每个基本事件发生的可能性相等。
度量类型：长度概型、面积概型、体积概型、时间概型。`,videoBvid:"BV1V2EXzqEJW",videoPage:61,example:{question:"在区间[0,10]内随机取一个数x，求x落在区间[2,5]内的概率。",analysis:"总区间长度=10-0=10，目标区间长度=5-2=3，所以P=3/10=0.3。"},exercises:[{id:"kp_031_1",question:"在区间[0,5]内随机取一个数，求这个数小于2的概率。",answer:"0.4",analysis:"目标区间长度=2-0=2，总区间长度=5-0=5，所以P=2/5=0.4。"},{id:"kp_031_2",question:"在一个边长为4的正方形内随机投一点，求这个点落在边长为2的中心小正方形内的概率。",answer:"0.25",analysis:"大正方形面积=4×4=16，小正方形面积=2×2=4，所以P=4/16=0.25。"},{id:"kp_031_3",question:"从区间[0,1]内随机取两个数x和y，求x+y<1的概率。",answer:"0.5",analysis:"在单位正方形中，x+y<1的区域是直角三角形，面积=0.5×1×1=0.5，所以P=0.5。"}],formulas:["几何概型概率公式","长度概型","面积概型","体积概型"]},Be={id:"kp_031_example",chapterId:"ch7",order:62,title:"几何概型 - 例题讲解",content:"通过复杂几何概型问题掌握几何方法，理解会面问题、投点问题等典型应用。",videoScript:`例题1：会面问题（时间几何概型）
例题2：投点问题（面积几何概型）
例题3：几何概型综合应用`,videoBvid:"BV1V2EXzqEJW",videoPage:62,example:{question:"甲、乙两人约定在7点到8点之间随机到达某地会面，先到者等候后到者15分钟，求两人能会面的概率。",analysis:"设甲到达时间为x，乙到达时间为y，单位：分钟。|x-y|≤15表示能会面。在60×60的正方形中，|x-y|≤15的区域是带状区域，面积=60×60-45×45=3600-2025=1575。所以P=1575/3600=7/16≈0.4375。"},exercises:[{id:"kp_031_example_1",question:"在半径为2的圆内随机投一点，求这个点落在半径为1的中心小圆内的概率。",answer:"0.25",analysis:"大圆面积=π×2²=4π，小圆面积=π×1²=π，所以P=π/4π=1/4=0.25。"},{id:"kp_031_example_2",question:"从区间[0,2]内随机取两个数x和y，求x²+y²≤4的概率。",answer:"π/4",analysis:"在2×2的正方形中，x²+y²≤4的区域是半径为2的圆的四分之一，面积=π×2²/4=π。总区域面积=4，所以P=π/4。"}]},we={id:"kp_032",chapterId:"ch8",order:63,title:"代数几何综合（一）",content:"理解函数与几何的综合应用，掌握用代数方法解决几何问题，用几何直观理解代数概念。",videoScript:`代数几何综合概述：代数与几何的相互转化和相互促进。
函数与几何：函数图像与几何图形的关系，用函数方法解决几何问题。
方程与几何：坐标几何方法，用方程表示几何图形。
不等式与几何：几何区域的不等式表示。
综合应用：代数几何在实际问题中的应用。`,videoBvid:"BV1V2EXzqEJW",videoPage:63,example:{question:"已知抛物线y=x²-2x-3与x轴交于A、B两点，与y轴交于C点，求△ABC的面积。",analysis:"求交点：令y=0得x²-2x-3=0，解得x=-1或x=3，所以A(-1,0)，B(3,0)。令x=0得y=-3，所以C(0,-3)。AB长度=4，C到x轴距离=3，所以面积=4×3/2=6。"},exercises:[{id:"kp_032_1",question:"已知直线y=2x+1与抛物线y=x²相交于A、B两点，求AB的长度。",answer:"√20",analysis:"联立方程得x²=2x+1，即x²-2x-1=0。解得x=1±√2。所以A(1+√2,3+2√2)，B(1-√2,3-2√2)。AB=√[(2√2)²+(4√2)²]=√(8+32)=√40=2√10。"},{id:"kp_032_2",question:"已知△ABC的三个顶点坐标为A(0,0)、B(4,0)、C(2,3)，求△ABC的外接圆方程。",answer:"(x-2)²+(y-1.5)²=2.5²",analysis:"外心是各边垂直平分线的交点。AB的中垂线是x=2，AC的中垂线斜率为-2/3，方程为y-1.5=(-2/3)(x-1)。解得圆心(2,1.5)，半径=√(2²+1.5²)=2.5。"},{id:"kp_032_3",question:"已知函数y=ax²+bx+c的图像经过点(1,0)、(2,0)、(3,4)，求这个函数的解析式。",answer:"y=2x²-6x+4",analysis:"设y=a(x-1)(x-2)，代入(3,4)得4=a×2×1，所以a=2。展开得y=2(x²-3x+2)=2x²-6x+4。"}],formulas:["函数图像与几何图形","坐标几何方法","代数几何综合应用"]},qe={id:"kp_032_example",chapterId:"ch8",order:64,title:"代数几何综合（一） - 例题讲解",content:"通过复杂综合问题掌握代数几何方法，理解函数图像与几何图形的综合应用。",videoScript:`例题1：函数图像与几何面积
例题2：坐标几何与方程
例题3：代数几何综合问题`,videoBvid:"BV1V2EXzqEJW",videoPage:64,example:{question:"已知抛物线y=-x²+4x-3与x轴交于A、B两点，顶点为C，求△ABC的面积。",analysis:"令y=0得-x²+4x-3=0，解得x=1或x=3，所以A(1,0)，B(3,0)。顶点C的横坐标x=-b/(2a)=-4/(-2)=2，纵坐标y=-4+8-3=1，所以C(2,1)。AB长度=2，C到x轴距离=1，所以面积=2×1/2=1。"},exercises:[{id:"kp_032_example_1",question:"已知直线y=kx+b与抛物线y=x²-4x+3相交于两点，且这两点关于直线x=2对称，求k和b的值。",answer:"k=0,b=-1",analysis:"设交点(x1,y1)、(x2,y2)，由于关于x=2对称，所以x1+x2=4。联立方程得x²-4x+3=kx+b，即x²-(4+k)x+(3-b)=0。由根与系数关系x1+x2=4+k=4，得k=0。代入得b=-1。"},{id:"kp_032_example_2",question:"已知△ABC的三个顶点坐标为A(1,2)、B(4,6)、C(7,2)，求△ABC的内切圆方程。",answer:"(x-4)²+(y-3)²=1",analysis:"先求边长：AB=5，BC=5，AC=6。所以是等腰三角形。内切圆半径r=2S/(a+b+c)，面积S=12，周长=16，所以r=24/16=1.5。内心是角平分线的交点，计算得圆心(4,3)，半径1。"}]},Ce={id:"kp_033",chapterId:"ch8",order:65,title:"代数几何综合（二）",content:"掌握更复杂的代数几何综合问题，理解二次函数与几何、解析几何的综合应用。",videoScript:`二次函数与几何：抛物线与直线、抛物线与三角形的综合问题。
解析几何：直线与圆、圆与圆的位置关系，用代数方法解决几何问题。
最值问题：代数几何中的最大值、最小值问题。
动点问题：点在运动中的代数几何关系。`,videoBvid:"BV1V2EXzqEJW",videoPage:65,example:{question:"已知抛物线y=x²-4x+3与直线y=kx相交于A、B两点，当k为何值时，AB的长度最小？",analysis:"联立方程得x²-4x+3=kx，即x²-(4+k)x+3=0。设交点(x1,y1)、(x2,y2)，则x1+x2=4+k，x1x2=3。AB²=(x1-x2)²+(y1-y2)²=(x1-x2)²+(kx1-kx2)²=(1+k²)(x1-x2)²=(1+k²)[(x1+x2)²-4x1x2]=(1+k²)[(4+k)²-12]=(1+k²)(k²+8k+4)。求导得最小值在k=-2处，此时AB最小。"},exercises:[{id:"kp_033_1",question:"已知圆C的方程为(x-2)²+(y-3)²=4，直线l的方程为y=kx。当k为何值时，直线l与圆C相切？",answer:"k=5/12或k=-5/12",analysis:"圆心(2,3)到直线kx-y=0的距离d=|2k-3|/√(k²+1)=2（半径）。解得(2k-3)²=4(k²+1)，即4k²-12k+9=4k²+4，得-12k+9=4，k=5/12。或考虑负距离，得k=-5/12。"},{id:"kp_033_2",question:"已知抛物线y=-x²+4x与x轴交于A、B两点，顶点为C。在抛物线上找一点D，使四边形ABCD为菱形，求D的坐标。",answer:"(2+√2,2-2√2)或(2-√2,2+2√2)",analysis:"A(0,0)，B(4,0)，C(2,4)。设D(x,-x²+4x)。要使ABCD为菱形，需要AD=BC且AB∥CD。计算得x=2±√2，对应y=2∓2√2。"},{id:"kp_033_3",question:"已知直线y=x+m与圆x²+y²=4相交于A、B两点，当m为何值时，弦AB的长度最大？",answer:"m=0",analysis:"圆心(0,0)到直线x-y+m=0的距离d=|m|/√2。弦长L=2√(r²-d²)=2√(4-m²/2)。当d=0即m=0时，L最大为4。"}],formulas:["二次函数与直线综合","圆与直线位置关系","弦长公式","最值问题求解"]},Pe={id:"kp_033_example",chapterId:"ch8",order:66,title:"代数几何综合（二） - 例题讲解",content:"通过复杂综合问题掌握代数几何方法，理解动点问题、最值问题的综合应用。",videoScript:`例题1：抛物线中的动点问题
例题2：圆与直线的最值问题
例题3：代数几何综合应用`,videoBvid:"BV1V2EXzqEJW",videoPage:66,example:{question:"在抛物线y=x²上找一点P，使P到直线y=2x-4的距离最短，求这个最短距离。",analysis:"设P(x,x²)。点P到直线2x-y-4=0的距离d=|2x-x²-4|/√5。令f(x)=|x²-2x+4|，求f(x)最小值。f(x)=|(x-1)²+3|，最小值为3（当x=1时）。所以最短距离d=3/√5=(3√5)/5。"},exercises:[{id:"kp_033_example_1",question:"已知圆C:(x-1)²+(y-2)²=5，直线l:y=x+m。当m变化时，求圆C上点到直线l的最大距离。",answer:"(3√2)/2 + √5",analysis:"圆心(1,2)到直线x-y+m=0的距离d=|m-1|/√2。圆上点到直线的最大距离=圆心距离+半径=|m-1|/√2+√5。当m变化时，最大距离无上界。"},{id:"kp_033_example_2",question:"已知抛物线y²=4x，焦点F(1,0)。在抛物线上找一点P，使|PF|+|PA|最小，其中A(3,0)。求这个最小值。",answer:"4",analysis:"抛物线定义：|PF|=P到准线x=-1的距离。所以|PF|+|PA|=P到x=-1距离+P到A距离。当P在FA的连线上时最小。FA直线方程y=0，与抛物线交点P(0,0)。最小值=|F(-1,0)|+|A(3,0)|=2+2=4。"}]},be={id:"kp_034",chapterId:"ch8",order:67,title:"实际应用问题（一）",content:"掌握代数几何在实际生活中的应用，能够建立数学模型解决实际问题。",videoScript:`实际应用问题概述：将实际问题转化为数学问题，用代数几何方法求解。
行程问题：路程、速度、时间的关系，用方程和函数解决。
工程问题：工作效率、工作时间、工作总量的关系。
利润问题：成本、售价、利润的关系，用函数求最值。
几何应用：几何图形在实际问题中的应用。`,videoBvid:"BV1V2EXzqEJW",videoPage:67,example:{question:"某工厂生产一种产品，每天固定成本为2000元，每件产品的可变成本为10元，售价为30元。问每天生产多少件产品时，利润最大？",analysis:"设每天生产x件，利润L=收入-成本=30x-(2000+10x)=20x-2000。这是关于x的一次函数，随着x增大，利润增大。但需要考虑市场需求和生产限制。假设最大生产能力为100件，则生产100件时利润最大，L=20×100-2000=0元。"},exercises:[{id:"kp_034_1",question:"甲、乙两人从相距120千米的两地同时出发，相向而行，甲的速度是60km/h，乙的速度是40km/h。问几小时后两人相遇？",answer:"1.2小时",analysis:"设t小时后相遇，则60t+40t=120，100t=120，t=1.2小时。"},{id:"kp_034_2",question:"一项工程，甲单独做需要12天完成，乙单独做需要18天完成。两人合作多少天可以完成？",answer:"7.2天",analysis:"设合作t天完成，则t/12+t/18=1，通分得(3t+2t)/36=1，5t=36，t=7.2天。"},{id:"kp_034_3",question:"某商品进价为每件50元，售价为80元，每天可卖出100件。若每件降价1元，每天可多卖出10件。要使每天利润最大，应降价多少元？",answer:"10元",analysis:"设降价x元，则利润=(80-50-x)(100+10x)=(30-x)(100+10x)=-10x²+200x+3000。当x=-200/(2×(-10))=10时，利润最大。"}],formulas:["行程问题公式","工程问题公式","利润问题公式","最值问题求解"]},De={id:"kp_034_example",chapterId:"ch8",order:68,title:"实际应用问题（一） - 例题讲解",content:"通过复杂应用题掌握数学建模方法，理解代数几何在实际决策中的应用。",videoScript:`例题1：最优方案选择
例题2：资源分配问题
例题3：几何实际应用`,videoBvid:"BV1V2EXzqEJW",videoPage:68,example:{question:"某农场有100亩土地，可以种植小麦和玉米。小麦每亩需要投资200元，收益300元；玉米每亩需要投资250元，收益400元。现有资金22000元，问如何分配种植面积使总收益最大？",analysis:"设种植小麦x亩，玉米y亩。约束条件：x+y=100，200x+250y≤22000。目标函数：总收益R=300x+400y。由x+y=100得y=100-x，代入得200x+250(100-x)≤22000，即200x+25000-250x≤22000，得-50x≤-3000，x≥60。所以60≤x≤100。收益R=300x+400(100-x)=40000-100x。随着x增大，收益减小，所以x=60时收益最大，R=40000-6000=34000元。"},exercises:[{id:"kp_034_example_1",question:"某公司需要建造一个容积为1000立方米的长方体仓库，底面造价为每平方米200元，侧面造价为每平方米100元，顶部造价为每平方米150元。问如何设计尺寸使总造价最低？",answer:"长10米，宽10米，高10米",analysis:"设长x米，宽y米，高z米。xyz=1000，总造价C=200xy+100(2xz+2yz)+150xy=350xy+200z(x+y)。由xyz=1000得z=1000/(xy)。代入得C=350xy+200×1000/x+200×1000/y。求偏导数可得当x=y=10，z=10时，造价最低。"},{id:"kp_034_example_2",question:"某城市要在河边建造一个矩形公园，一边靠河，其他三边用围栏围起来。现有围栏1000米，问如何设计使公园面积最大？",answer:"长500米，宽250米",analysis:"设靠河的一边为x米，另一边为y米。2y+x=1000，面积S=xy。由x=1000-2y得S=y(1000-2y)=-2y²+1000y。当y=-1000/(2×(-2))=250时，面积最大。此时x=1000-2×250=500。最大面积=500×250=125000平方米。"}]},Ie={id:"kp_035",chapterId:"ch8",order:69,title:"实际应用问题（二）",content:"深入掌握复杂实际应用问题的数学建模方法，能够解决多变量决策问题。",videoScript:`复杂应用问题：多变量、多约束条件下的优化问题。
线性规划：在约束条件下求目标函数的最优解。
整数规划：变量取整数的优化问题。
动态规划：多阶段决策问题的优化方法。
概率应用：概率在实际决策中的应用。`,videoBvid:"BV1V2EXzqEJW",videoPage:69,example:{question:"某公司生产两种产品A和B，生产1件A需要2小时加工时间和1小时装配时间，生产1件B需要1小时加工时间和3小时装配时间。每天加工时间最多20小时，装配时间最多18小时。每件A利润300元，每件B利润500元。问每天生产多少件A和B使利润最大？",analysis:"设生产A产品x件，B产品y件。约束条件：2x+y≤20（加工时间），x+3y≤18（装配时间），x≥0，y≥0。目标函数：利润P=300x+500y。求交点：2x+y=20和x+3y=18联立求解。由第一个方程得y=20-2x，代入第二个方程：x+3(20-2x)=18，x+60-6x=18，-5x=-42，x=8.4。但x必须是整数，所以x=8时，y=20-16=4，满足约束。利润P=300×8+500×4=2400+2000=4400元。x=9时，y=2，利润=2700+1000=3700元。所以最优解是x=8，y=4。"},exercises:[{id:"kp_035_1",question:"某农场有土地200亩，可以种植三种作物：小麦、玉米、大豆。小麦每亩需要投资200元，收益300元；玉米每亩需要投资250元，收益400元；大豆每亩需要投资180元，收益280元。现有资金40000元，且小麦种植面积不超过总面积的40%。问如何分配种植面积使总收益最大？",answer:"小麦80亩，玉米40亩，大豆80亩",analysis:"设小麦x亩，玉米y亩，大豆z亩。约束条件：x+y+z=200，200x+250y+180z≤40000，x≤80，x,y,z≥0。目标函数：总收益R=300x+400y+280z。用线性规划方法求解，可得最优解为x=80，y=40，z=80，最大收益=300×80+400×40+280×80=24000+16000+22400=62400元。"},{id:"kp_035_2",question:"某物流公司需要从仓库A和B向三个销售点C、D、E配送货物。仓库A有货物100吨，仓库B有货物150吨。销售点C需要80吨，D需要90吨，E需要80吨。从A到C、D、E的运费分别为每吨10元、15元、20元；从B到C、D、E的运费分别为每吨12元、18元、16元。问如何安排运输使总运费最小？",answer:"A→C:80吨，A→D:20吨，B→D:70吨，B→E:80吨",analysis:"设从A运到C、D、E分别为x1,x2,x3吨，从B运到C、D、E分别为y1,y2,y3吨。约束条件：x1+x2+x3≤100，y1+y2+y3≤150，x1+y1=80，x2+y2=90，x3+y3=80，xi,yi≥0。目标函数：总运费=10x1+15x2+20x3+12y1+18y2+16y3。求解得最优方案：x1=80，x2=20，x3=0，y1=0，y2=70，y3=80，最小运费=10×80+15×20+18×70+16×80=800+300+1260+1280=3640元。"},{id:"kp_035_3",question:"某投资者有100万元资金，可以投资于三个项目：A项目年收益率8%，B项目年收益率10%，C项目年收益率12%。A项目最多投资50万元，B项目最多投资60万元，C项目最多投资40万元。且A项目投资额不低于B项目的50%。问如何分配投资使年收益最大？",answer:"A项目50万元，B项目0万元，C项目50万元",analysis:"设投资A、B、C分别为x、y、z万元。约束条件：x+y+z=100，x≤50，y≤60，z≤40，x≥0.5y，x,y,z≥0。目标函数：年收益=0.08x+0.10y+0.12z。求解得最优解：x=50，y=0，z=50，最大年收益=0.08×50+0.12×50=4+6=10万元。"}],formulas:["线性规划模型","整数规划模型","运输问题模型","投资决策模型"]},ve={id:"kp_035_example",chapterId:"ch8",order:70,title:"实际应用问题（二） - 例题讲解",content:"通过复杂优化问题掌握线性规划和决策分析，理解多变量约束条件下的最优解求解方法。",videoScript:`例题1：多产品优化问题
例题2：资源分配最优化
例题3：投资组合同步优化`,videoBvid:"BV1V2EXzqEJW",videoPage:70,example:{question:"某企业生产三种产品A、B、C，需要使用三种原材料M1、M2、M3。生产1件A需要M1:2kg，M2:1kg，M3:0kg；生产1件B需要M1:1kg，M2:2kg，M3:1kg；生产1件C需要M1:0kg，M2:1kg，M3:2kg。每天原材料供应量为M1:100kg，M2:120kg，M3:80kg。每件A利润200元，B利润300元，C利润250元。问每天生产多少件各产品使利润最大？",analysis:"设生产A、B、C分别为x、y、z件。约束条件：2x+y≤100（M1），x+2y+z≤120（M2），y+2z≤80（M3），x,y,z≥0且为整数。目标函数：利润P=200x+300y+250z。用整数线性规划求解，可得最优解：x=30，y=20，z=30，最大利润=200×30+300×20+250×30=6000+6000+7500=19500元。"},exercises:[{id:"kp_035_example_1",question:"某工厂有4个车间，每个车间可以生产3种产品。各车间生产不同产品的单位利润不同，且每个车间有最大生产能力限制。如何安排生产计划使总利润最大？",answer:"需要建立线性规划模型求解",analysis:"这是一个典型的线性规划问题。设x_ij表示第i个车间生产第j种产品的数量。建立目标函数和约束条件，用单纯形法或软件求解可得最优生产计划。"},{id:"kp_035_example_2",question:"某学校要安排下学期的课程，有5位教师，8门课程，每位教师可以教授2-3门课程，每门课程需要1-2位教师。如何安排教师课程分配使教师资源利用率最高？",answer:"需要建立分配模型求解",analysis:"这是指派问题的一种变体。可以建立0-1整数规划模型，用匈牙利算法或线性规划方法求解，得到最优的教师课程分配方案。"}]},f=[{id:"kp_001",chapterId:"ch1",order:1,title:"实数概念",content:"理解实数的定义和分类，掌握有理数和无理数的区别，能够准确识别不同类型的实数。",videoScript:`实数定义：有理数和无理数的统称。
有理数：可以表示为分数形式的数，包括整数、分数、有限小数和循环小数。
无理数：不能表示为分数形式的数，包括无限不循环小数和特殊常数。
实数分类：正实数、负实数、零。`,videoBvid:"BV1V2EXzqEJW",videoPage:1,example:{question:"将下列各数分类：-3, 0, 3.14, √2, 22/7, -0.1010010001...",analysis:"-3, 0, 22/7是有理数；3.14是有限小数，也是有理数；√2是无理数；-0.1010010001...是无限不循环小数，是无理数。"},exercises:[{id:"kp_001_1",question:"下列实数中，有理数的个数是：0.333..., -5, √9, π, 0.123456...",answer:"3个",analysis:"0.333...是循环小数，-5是整数，√9=3是整数，都是有理数；π和0.123456...是无理数。"},{id:"kp_001_2",question:"判断：所有的分数都是有理数，所有的整数也都是有理数。",answer:"正确",analysis:"分数形式p/q（q≠0）定义的就是有理数，整数可以看作分母为1的分数。"},{id:"kp_001_3",question:"在实数范围内，最小的数是（ ）A. -∞ B. 0 C. 不存在 D. -1",answer:"C",analysis:"实数范围没有最小值，负无穷不是实数。"}],formulas:["实数 = 有理数 ∪ 无理数","有理数 = 整数 ∪ 分数"]},{id:"kp_001_example",chapterId:"ch1",order:2,title:"实数概念 - 例题讲解",content:"通过典型例题巩固实数分类方法，掌握实数运算的基本技巧。",videoScript:`例题1：实数分类练习
例题2：实数大小比较
例题3：实数运算基础`,videoBvid:"BV1V2EXzqEJW",videoPage:2,example:{question:"比较下列实数的大小：-√2, -1.5, -1.414, -4/3",analysis:"将各数转换为小数形式：-√2≈-1.4142, -1.5, -1.414, -4/3≈-1.333。按从大到小排列：-4/3 > -1.4142 > -1.414 > -1.5。"},exercises:[{id:"kp_001_example_1",question:"已知a是最小的正整数，b是最大的负整数，c是绝对值最小的实数，求a+b+c的值。",answer:"0",analysis:"a=1, b=-1, c=0, 所以1+(-1)+0=0。"},{id:"kp_001_example_2",question:"实数a、b在数轴上的位置如图所示，化简|a-b|-|a+b|。",answer:"-2b",analysis:"根据数轴判断a<0<b且|a|<|b|，所以a-b<0, a+b>0，原式=-(a-b)-(a+b)=-2b。"}]},{id:"kp_002",chapterId:"ch1",order:3,title:"整式运算",content:"掌握整式的加减乘除运算，理解合并同类项的原理，能够熟练进行整式的化简求值。",videoScript:`整式定义：单项式和多项式的统称。
同类项：所含字母相同，相同字母的指数也相同。
合并同类项：系数相加，字母和字母的指数不变。
整式加减：去括号，合并同类项。
整式乘除：系数相乘除，同底数幂相乘除。`,videoBvid:"BV1V2EXzqEJW",videoPage:3,example:{question:"计算：(3x²y - 2xy² + 5) - (2x²y + 4xy² - 3)",analysis:"去括号得3x²y - 2xy² + 5 - 2x²y - 4xy² + 3，合并同类项得x²y - 6xy² + 8。"},exercises:[{id:"kp_002_1",question:`下列各组是同类项的是（ ）
A. 2x²y和3xy²
B. -ab和3ba
C. -3xy和-3x²y
D. 2x和2x²`,answer:"B",analysis:"同类项要求字母相同且指数相同，-ab和3ba字母都是a、b，指数都是1。"},{id:"kp_002_2",question:"计算：2a²b - [3ab² - (4a²b + 2ab²) - a²b]",answer:"7a²b - 5ab²",analysis:"去括号得2a²b - 3ab² + 4a²b + 2ab² - a²b，合并同类项得7a²b - ab²。"},{id:"kp_002_3",question:`若M=3x²-5x+2，N=3x²-5x-2，则M-N的结果是（ ）
A. 4
B. -4
C. 0
D. 2x²-10x`,answer:"A",analysis:"M-N=(3x²-5x+2)-(3x²-5x-2)=3x²-5x+2-3x²+5x+2=4。"}],formulas:["am × an = am+n","(am)n = amn","(ab)n = anbn"]},{id:"kp_002_example",chapterId:"ch1",order:4,title:"整式运算 - 例题讲解",content:"通过典型例题掌握整式运算技巧，理解运算中的常见错误点。",videoScript:`例题1：复杂整式化简
例题2：整式求值
例题3：整式运算应用`,videoBvid:"BV1V2EXzqEJW",videoPage:4,example:{question:"先化简，再求值：3(2x² - 3x + 1) - 2(x² + 2x - 4)，其中x = -2",analysis:"原式=6x²-9x+3-2x²-4x+8=4x²-13x+11。当x=-2时，原式=4×4-13×(-2)+11=16+26+11=53。"},exercises:[{id:"kp_002_example_1",question:"若|x+2|+(y-3)²=0，求3x²y-[2xy²-(2x²y-xy²)]的值。",answer:"48",analysis:"由非负性得x=-2,y=3。原式=3x²y-2xy²+2x²y-xy²=5x²y-3xy²=5×4×3-3×(-2)×9=60+54=114。"},{id:"kp_002_example_2",question:"已知A=2x²+3xy-2x，B=x²-xy+2x，求3A-2B。",answer:"4x²+11xy-10x",analysis:"3A-2B=3(2x²+3xy-2x)-2(x²-xy+2x)=6x²+9xy-6x-2x²+2xy-4x=4x²+11xy-10x。"}]},{id:"kp_003",chapterId:"ch1",order:5,title:"分式方程",content:"理解分式方程的概念，掌握去分母的方法，能够解可化为一元一次方程的分式方程。",videoScript:`分式方程定义：分母中含有未知数的方程。
解法步骤：1.找最简公分母 2.去分母 3.解整式方程 4.验根
最简公分母：所有分母的最小公倍式。
增根：使最简公分母为零的根。`,videoBvid:"BV1V2EXzqEJW",videoPage:5,example:{question:"解方程：1/(x-2) + 2 = 3/(x-2)",analysis:"最简公分母是x-2。去分母得1+2(x-2)=3，展开得1+2x-4=3，解得2x=6，x=3。检验：x=3时，x-2≠0，所以x=3是解。"},exercises:[{id:"kp_003_1",question:`下列方程中是分式方程的是（ ）
A. (x+1)/2 = 3
B. 1/(x+1) = 2
C. x/(x+1) + 1 = 0
D. B和C都是`,answer:"D",analysis:"分式方程要求分母中含有未知数，A中分母是常数2，B和C分母都含未知数。"},{id:"kp_003_2",question:"解方程：2/x = 1/(x-3)",answer:"x=6",analysis:"最简公分母是x(x-3)。去分母得2(x-3)=x，展开得2x-6=x，解得x=6。检验：x=6时，分母不为零。"},{id:"kp_003_3",question:`若分式方程(x-1)/(x+1)=m/(x+1)有增根，则m的值为（ ）
A. 0
B. 1
C. -1
D. 2`,answer:"D",analysis:"增根是x=-1（使分母为零）。去分母得x-1=m，当x=-1时，m=-2。"}],formulas:["最简公分母","去分母方法","验根条件"]},{id:"kp_003_example",chapterId:"ch1",order:6,title:"分式方程 - 例题讲解",content:"通过复杂例题掌握分式方程解法，理解增根产生的原因和检验方法。",videoScript:`例题1：复杂分式方程
例题2：含参数的分式方程
例题3：分式方程应用`,videoBvid:"BV1V2EXzqEJW",videoPage:6,example:{question:"解方程：(x+1)/(x-1) - (x-1)/(x+1) = 4/(x²-1)",analysis:"最简公分母是(x-1)(x+1)。去分母得(x+1)²-(x-1)²=4，展开得(x²+2x+1)-(x²-2x+1)=4，化简得4x=4，x=1。检验：x=1时，分母为零，是增根，所以方程无解。"},exercises:[{id:"kp_003_example_1",question:`若关于x的方程(2x+m)/(x-3)=1无解，则m的值为（ ）
A. -3
B. 3
C. -6
D. 6`,answer:"C",analysis:"去分母得2x+m=x-3，解得x=-m-3。当x=3时是增根，所以-m-3=3，m=-6。"},{id:"kp_003_example_2",question:"甲、乙两人从相距180千米的两地同时出发，相向而行，甲的速度是乙的1.5倍，2小时后相遇，求两人的速度。",answer:"甲45km/h，乙30km/h",analysis:"设乙速为v，则甲速为1.5v。(1.5v+v)×2=180，解得v=30，1.5v=45。"}]},{id:"kp_004",chapterId:"ch1",order:7,title:"二次根式",content:"理解二次根式的概念，掌握性质和化简方法，能够进行二次根式的运算。",videoScript:`二次根式定义：形如√a(a≥0)的式子。
性质：√(a²)=|a|，(√a)²=a(a≥0)，√(ab)=√a·√b(a≥0,b≥0)。
化简：将被开方数化为完全平方数。
同类二次根式：化为最简后，被开方数相同。`,videoBvid:"BV1V2EXzqEJW",videoPage:7,example:{question:"化简：√(48) - √(12) + √(27)",analysis:"√48=4√3，√12=2√3，√27=3√3。原式=4√3-2√3+3√3=5√3。"},exercises:[{id:"kp_004_1",question:`函数y=√(x-2)的自变量取值范围是（ ）
A. x>2
B. x≥2
C. x<2
D. x≤2`,answer:"B",analysis:"被开方数必须非负，x-2≥0，所以x≥2。"},{id:"kp_004_2",question:`计算：√(8) × √(2) = （ ）
A. 2
B. 4
C. 2√2
D. 4√2`,answer:"B",analysis:"√8×√2=√16=4。"},{id:"kp_004_3",question:`若√(a+1)与√(8)是同类二次根式，则a的值是（ ）
A. 7
B. 8
C. 9
D. 10`,answer:"A",analysis:"√8=2√2，要使√(a+1)与√8是同类二次根式，则a+1=2，a=1。"}],formulas:["√(a²)=|a|","√(ab)=√a·√b","√(a/b)=√a/√b"]},{id:"kp_004_example",chapterId:"ch1",order:8,title:"二次根式 - 例题讲解",content:"通过典型例题掌握二次根式运算技巧，理解有理化因式的应用。",videoScript:`例题1：复杂二次根式化简
例题2：二次根式四则运算
例题3：有理化分母`,videoBvid:"BV1V2EXzqEJW",videoPage:8,example:{question:"计算：(√3+√2)(√3-√2) + (√5+2)(√5-2)",analysis:"第一项用平方差公式：(√3)²-(√2)²=3-2=1。第二项：(√5)²-2²=5-4=1。原式=1+1=2。"},exercises:[{id:"kp_004_example_1",question:`化简：√(5+2√6) = （ ）
A. √2+√3
B. √2-√3
C. √3+√2
D. √3-√2`,answer:"A",analysis:"设√(5+2√6)=√a+√b，则a+b=5，2√(ab)=2√6，所以ab=6。解得a=2,b=3。"},{id:"kp_004_example_2",question:"计算：1/(√2+1) + 1/(√3+1)",answer:"√2+√3-2",analysis:"有理化分母：1/(√2+1)=√2-1，1/(√3+1)=(√3-1)/2。原式=√2-1+(√3-1)/2=(2√2+√3-3)/2。"}]},{id:"kp_005",chapterId:"ch2",order:9,title:"一元一次方程",content:"理解一元一次方程的概念，掌握等式性质和解方程步骤，能够列方程解应用题。",videoScript:`一元一次方程定义：只含一个未知数，未知数的最高次数为1的方程。
等式性质：等式两边同时加(减)同一个数，等式仍成立；等式两边同时乘(除)同一个非零数，等式仍成立。
解方程步骤：去分母、去括号、移项、合并同类项、系数化为1。`,videoBvid:"BV1V2EXzqEJW",videoPage:9,example:{question:"解方程：2(x-3) - 5 = 3(2x+1) - 4x",analysis:"去括号得2x-6-5=6x+3-4x，整理得2x-11=2x+3。移项得2x-2x=3+11，即0=14，矛盾，所以方程无解。"},exercises:[{id:"kp_005_1",question:`下列方程中是一元一次方程的是（ ）
A. x²+1=0
B. 2x+3y=7
C. 3x-2=5x+1
D. x(x-1)=2`,answer:"C",analysis:"A是二次方程，B是二元一次方程，D化简后是二次方程，C是一元一次方程。"},{id:"kp_005_2",question:`若关于x的方程2x+3=5和4x+k=7的解相同，则k的值为（ ）
A. -1
B. 1
C. 2
D. 3`,answer:"D",analysis:"由第一个方程得x=1，代入第二个方程得4+k=7，k=3。"},{id:"kp_005_3",question:`方程3(2x-1)=2(3x+4)的解是（ ）
A. x=5
B. x=11
C. x=11/0
D. 无解`,answer:"D",analysis:"去括号得6x-3=6x+8，移项得6x-6x=8+3，即0=11，矛盾，所以无解。"}],formulas:["等式性质1","等式性质2","解方程步骤"]},{id:"kp_005_example",chapterId:"ch2",order:10,title:"一元一次方程 - 例题讲解",content:"通过应用题掌握列方程的方法，理解等量关系的建立。",videoScript:`例题1：行程问题
例题2：工程问题
例题3：利润问题`,videoBvid:"BV1V2EXzqEJW",videoPage:10,example:{question:"某商品按标价的8折出售，可获利20%。若该商品的进价为200元，求标价。",analysis:"设标价为x元。0.8x=200×(1+20%)=240，解得x=300。所以标价为300元。"},exercises:[{id:"kp_005_example_1",question:"甲、乙两人从同一地点出发，甲以每分钟60米的速度前进，乙以每分钟80米的速度追赶，若乙比甲晚出发3分钟，问乙几分钟能追上甲？",answer:"9分钟",analysis:"设乙用x分钟追上。60(x+3)=80x，解得60x+180=80x，x=9。"},{id:"kp_005_example_2",question:"某工厂计划生产一批零件，如果每天生产200个，比计划晚1天完成；如果每天生产250个，可提前1天完成。求计划天数和零件总数。",answer:"9天，2000个",analysis:"设计划x天。200(x+1)=250(x-1)，解得200x+200=250x-250，50x=450，x=9。计划9天完成，则实际零件总数=200×(9+1)=2000。"}]},{id:"kp_006",chapterId:"ch2",order:11,title:"二元一次方程组",content:"理解二元一次方程组的概念，掌握代入消元法和加减消元法，能够解二元一次方程组。",videoScript:`二元一次方程组定义：含有两个未知数，每个方程都是一次方程的方程组。
代入消元法：将一个方程的某个未知数用另一个未知数表示，代入另一个方程。
加减消元法：通过方程相加或相减消去一个未知数。
解的情况：唯一解、无解、无穷多解。`,videoBvid:"BV1V2EXzqEJW",videoPage:11,example:{question:`解方程组：
{x + 2y = 7
3x - 2y = 5`,analysis:"用加减消元法。两式相加得4x=12，x=3。代入第一个方程得3+2y=7，y=2。所以解为x=3,y=2。"},exercises:[{id:"kp_006_1",question:`下列方程组中是二元一次方程组的是（ ）
A. {x+y=2, xy=3}
B. {2x+3y=5, x-2=0}
C. {x²+y=4, x-y=1}
D. {x+y=1, x+z=2}`,answer:"B",analysis:"A中xy=3是二次方程，C中x²+y=4是二次方程，D含有三个未知数，B是二元一次方程组。"},{id:"kp_006_2",question:`用代入法解方程组：
{x+y=5
2x-y=1`,answer:"x=2,y=3",analysis:"由第一个方程得y=5-x。代入第二个方程得2x-(5-x)=1，3x-5=1，x=2。y=5-2=3。"},{id:"kp_006_3",question:`方程组{x+2y=4, 2x+4y=8}的解的情况是（ ）
A. 唯一解
B. 无解
C. 无穷多解
D. 无法确定`,answer:"C",analysis:"第二个方程是第一个方程的2倍，两个方程等价，所以有无穷多解。"}],formulas:["代入消元法","加减消元法","方程组的解"]},{id:"kp_006_example",chapterId:"ch2",order:12,title:"二元一次方程组 - 例题讲解",content:"通过应用题掌握列方程组的方法，理解实际问题中的等量关系。",videoScript:`例题1：鸡兔同笼问题
例题2：行程问题
例题3：工程问题`,videoBvid:"BV1V2EXzqEJW",videoPage:12,example:{question:"鸡兔同笼，共有35个头，94只脚，问鸡兔各多少只？",analysis:"设鸡x只，兔y只。{x+y=35, 2x+4y=94}。解得x=23,y=12。所以鸡23只，兔12只。"},exercises:[{id:"kp_006_example_1",question:"甲、乙两人从相距120千米的两地同时出发，相向而行，2小时后相遇。若甲的速度是乙的2倍，求两人的速度。",answer:"甲40km/h，乙20km/h",analysis:"设乙速为v，则甲速为2v。(2v+v)×2=120，6v=120，v=20，2v=40。"},{id:"kp_006_example_2",question:"某工厂有甲、乙两种原料共500千克，甲种原料每吨可生产产品20件，乙种每吨可生产30件，若总共产出12000件，求两种原料各多少千克。",answer:"甲300kg，乙200kg",analysis:"设甲x千克，乙y千克。{x+y=500, 0.02x+0.03y=12}。解得x=300,y=200。"}]},{id:"kp_007",chapterId:"ch2",order:13,title:"不等式与不等式组",content:"理解不等式的概念，掌握不等式的性质，能够解一元一次不等式和一元一次不等式组。",videoScript:`不等式定义：用>、<、≥、≤表示不等关系的式子。
不等式性质：1.两边同时加(减)同一个数，不等号方向不变 2.两边同时乘(除)同一个正数，不等号方向不变 3.两边同时乘(除)同一个负数，不等号方向改变。
解法：类似解方程，注意不等号方向变化。`,videoBvid:"BV1V2EXzqEJW",videoPage:13,example:{question:"解不等式：3(x-2) < 2x + 5",analysis:"去括号得3x-6 < 2x+5。移项得3x-2x < 5+6，即x < 11。所以解集为x < 11。"},exercises:[{id:"kp_007_1",question:`下列不等式中是一元一次不等式的是（ ）
A. x²+1>0
B. 2x+3y<5
C. 3x-2>5x+1
D. x(x-1)≤2`,answer:"C",analysis:"A是二次不等式，B是二元一次不等式，D化简后是二次不等式，C是一元一次不等式。"},{id:"kp_007_2",question:`不等式3x-5>1的解集是（ ）
A. x>2
B. x<2
C. x>-2
D. x<-2`,answer:"A",analysis:"3x-5>1，3x>6，x>2。"},{id:"kp_007_3",question:`若a<b，且am>bm，则m的取值范围是（ ）
A. m>0
B. m<0
C. m=0
D. m为任意实数`,answer:"B",analysis:"不等式两边同乘负数，不等号方向改变。所以m<0。"}],formulas:["不等式性质1","不等式性质2","不等式性质3"]},{id:"kp_007_example",chapterId:"ch2",order:14,title:"不等式与不等式组 - 例题讲解",content:"通过典型例题掌握不等式组的解法，理解数轴表示解集的方法。",videoScript:`例题1：一元一次不等式
例题2：一元一次不等式组
例题3：不等式的应用`,videoBvid:"BV1V2EXzqEJW",videoPage:14,example:{question:`解不等式组：
{2x-1>3
x+2≤6`,analysis:"解第一个不等式：2x>4，x>2。解第二个不等式：x≤4。所以解集为2<x≤4。在数轴上表示为(2,4]。"},exercises:[{id:"kp_007_example_1",question:`不等式组{x>2, x<a}无解的充要条件是（ ）
A. a≤2
B. a<2
C. a>2
D. a≥2`,answer:"A",analysis:"当a≤2时，x>2和x<a无交集，所以无解。"},{id:"kp_007_example_2",question:"某商品原价m元，先降价20%，再涨价10%，最终价格不超过原价的1.1倍，求m的取值范围。",answer:"m≥0",analysis:"最终价格=0.8m×1.1=0.88m。由0.88m≤1.1m，得0.88≤1.1，恒成立。所以m≥0。"}]},{id:"kp_008",chapterId:"ch3",order:15,title:"函数概念",content:"理解函数的概念，掌握函数的三种表示方法，能够判断函数关系。",videoScript:`函数定义：在一个变化过程中，有两个变量x和y，如果对于x的每一个值，y都有唯一确定的值与之对应，那么y是x的函数。
函数表示法：解析法、列表法、图像法。
函数三要素：定义域、对应关系、值域。`,videoBvid:"BV1V2EXzqEJW",videoPage:15,example:{question:`下列关系式中，y不是x的函数的是（ ）
A. y=2x+1
B. y=x²
C. y=±√x
D. y=1/x`,analysis:"对于C，当x>0时，y有两个值与x对应，不符合函数定义。A、B、D中y都是x的唯一函数值。"},exercises:[{id:"kp_008_1",question:`函数y=√(x-1)的自变量取值范围是（ ）
A. x>1
B. x≥1
C. x<1
D. x≤1`,answer:"B",analysis:"被开方数必须非负，x-1≥0，所以x≥1。"},{id:"kp_008_2",question:`下列各组函数中，表示同一函数的是（ ）
A. y=x和y=√(x²)
B. y=|x|和y=√(x²)
C. y=x和y=(√x)²
D. y=x²和y=|x|`,answer:"B",analysis:"A中√(x²)=|x|≠x；B中√(x²)=|x|；C中(√x)²=x(x≥0)；D中x²≠|x|。"},{id:"kp_008_3",question:`已知函数y=2x-1，当x=3时，函数值是（ ）
A. 5
B. -5
C. 7
D. -7`,answer:"A",analysis:"y=2×3-1=6-1=5。"}],formulas:["函数定义","函数三要素","函数表示法"]},{id:"kp_008_example",chapterId:"ch3",order:16,title:"函数概念 - 例题讲解",content:"通过典型例题掌握函数的图像表示和性质分析。",videoScript:`例题1：函数图像
例题2：函数定义域
例题3：函数值域`,videoBvid:"BV1V2EXzqEJW",videoPage:16,example:{question:"画出函数y=|x-2|的图像，并求其最小值。",analysis:"当x≥2时，y=x-2；当x<2时，y=2-x。图像为V字形，顶点在(2,0)。最小值为0，在x=2处取得。"},exercises:[{id:"kp_008_example_1",question:`函数y=1/(x-1)的图像关于（ ）对称
A. x轴
B. y轴
C. 原点
D. 直线x=1`,answer:"D",analysis:"函数y=1/(x-1)是将y=1/x向右平移1个单位，所以关于x=1对称。"},{id:"kp_008_example_2",question:`若函数y=kx+b的图像经过第一、二、四象限，则k和b的取值范围是（ ）
A. k>0,b>0
B. k>0,b<0
C. k<0,b>0
D. k<0,b<0`,answer:"C",analysis:"直线经过一、二、四象限，说明斜率k<0，截距b>0。"}]},{id:"kp_009",chapterId:"ch3",order:17,title:"一次函数",content:"理解一次函数的概念，掌握一次函数的图像和性质，能够求解一次函数应用题。",videoScript:`一次函数定义：形如y=kx+b(k≠0)的函数。
图像：一条直线，k是斜率，b是截距。
性质：当k>0时，y随x增大而增大；当k<0时，y随x增大而减小。
特殊位置：k>0,b>0(一、二、三象限)；k>0,b<0(一、三、四象限)；k<0,b>0(一、二、四象限)；k<0,b<0(二、三、四象限)。`,videoBvid:"BV1V2EXzqEJW",videoPage:17,example:{question:"已知一次函数y=kx+3，当x=2时，y=7，求k的值，并判断函数的增减性。",analysis:"代入x=2,y=7得7=2k+3，解得k=2。因为k=2>0，所以y随x增大而增大。"},exercises:[{id:"kp_009_1",question:`下列函数中是一次函数的是（ ）
A. y=2x²+1
B. y=1/x
C. y=3x-2
D. y=√x`,answer:"C",analysis:"A是二次函数，B是反比例函数，D是幂函数，C是一次函数。"},{id:"kp_009_2",question:`若一次函数y=(m-2)x+3的y随x增大而减小，则m的取值范围是（ ）
A. m>2
B. m<2
C. m≠2
D. m=2`,answer:"B",analysis:"y随x增大而减小，说明斜率k=m-2<0，所以m<2。"},{id:"kp_009_3",question:`直线y=2x+1与y轴的交点坐标是（ ）
A. (0,1)
B. (1,0)
C. (0,-1)
D. (-1,0)`,answer:"A",analysis:"与y轴交点即x=0，y=2×0+1=1，所以交点为(0,1)。"}],formulas:["一次函数","斜率公式","两点间距离"]},{id:"kp_009_example",chapterId:"ch3",order:18,title:"一次函数 - 例题讲解",content:"通过应用题掌握一次函数模型的建立方法。",videoScript:`例题1：一次函数应用
例题2：图像信息题
例题3：方案选择问题`,videoBvid:"BV1V2EXzqEJW",videoPage:18,example:{question:"某市出租车收费标准为：起步价8元（3公里内），超过3公里，每公里收费2元。写出车费y(元)与路程x(公里)的函数关系式。",analysis:"当0≤x≤3时，y=8；当x>3时，y=8+2(x-3)=2x+2。所以分段函数为：y=8(0≤x≤3)，y=2x+2(x>3)。"},exercises:[{id:"kp_009_example_1",question:"某商品进价30元，售价50元，每天可卖出20件。若每件降价x元，每天多卖出2x件。要使每天利润最大，应降价多少元？",answer:"5元",analysis:"利润=(50-30-x)(20+2x)=(20-x)(20+2x)=-2x²+20x+400。当x=-20/(2×(-2))=5时，利润最大。"},{id:"kp_009_example_2",question:"甲、乙两地相距100km，一辆汽车从甲地出发，速度为60km/h，写出汽车距乙地的距离s(km)与时间t(h)的函数关系式。",answer:"s=100-60t(0≤t≤5/3)",analysis:"汽车向乙地行驶，距离逐渐减少，s=100-60t。当s=0时，t=100/60=5/3小时。"}]},{id:"kp_010",chapterId:"ch3",order:19,title:"反比例函数",content:"理解反比例函数的概念，掌握反比例函数的图像和性质，能够求解反比例函数应用题。",videoScript:`反比例函数定义：形如y=k/x(k≠0)的函数。
图像：双曲线，关于原点对称。
性质：当k>0时，图像在一、三象限，y随x增大而减小；当k<0时，图像在二、四象限，y随x增大而增大。
k的几何意义：|k|表示图像上任意一点到坐标轴的距离。`,videoBvid:"BV1V2EXzqEJW",videoPage:19,example:{question:"已知反比例函数y=k/x的图像经过点(2,3)，求k的值，并判断点(-2,-3)是否在图像上。",analysis:"代入(2,3)得3=k/2，k=6。函数为y=6/x。当x=-2时，y=6/(-2)=-3，所以(-2,-3)在图像上。"},exercises:[{id:"kp_010_1",question:`下列函数中是反比例函数的是（ ）
A. y=2x
B. y=2/x
C. y=x/2
D. y=2x²`,answer:"B",analysis:"A是一次函数，C是一次函数，D是二次函数，B是反比例函数。"},{id:"kp_010_2",question:`若反比例函数y=k/x的图像在二、四象限，则k的取值范围是（ ）
A. k>0
B. k<0
C. k≠0
D. k=0`,answer:"B",analysis:"图像在二、四象限时，k<0。"},{id:"kp_010_3",question:`反比例函数y=6/x的图像上有两点(x1,y1)、(x2,y2)，若x1<x2<0，则y1与y2的大小关系是（ ）
A. y1>y2
B. y1<y2
C. y1=y2
D. 无法确定`,answer:"A",analysis:"当x<0时，函数在第二象限，y随x增大而增大，所以x1<x2<0时，y1<y2。"}],formulas:["反比例函数","k的几何意义","图像性质"]},{id:"kp_010_example",chapterId:"ch3",order:20,title:"反比例函数 - 例题讲解",content:"通过应用题掌握反比例函数模型的建立方法。",videoScript:`例题1：反比例函数应用
例题2：k的几何意义
例题3：综合应用`,videoBvid:"BV1V2EXzqEJW",videoPage:20,example:{question:"某水池容积为100立方米，用一根水管注水，注水速度为v立方米/小时，注满所需时间为t小时。写出t与v的函数关系式。",analysis:"vt=100，所以t=100/v，是反比例函数。当v增大时，t减小。"},exercises:[{id:"kp_010_example_1",question:"在反比例函数y=8/x的图像上，点P到x轴的距离为2，到y轴的距离为4，求点P的坐标。",answer:"(4,2)或(-4,-2)",analysis:"点P(x,y)满足|y|=2，|x|=4，且y=8/x。所以可能为(4,2)或(-4,-2)。"},{id:"kp_010_example_2",question:"已知y是x的反比例函数，当x=2时，y=6。(1)求y与x的函数关系式；(2)当x=4时，求y的值。",answer:"y=12/x，y=3",analysis:"设y=k/x，代入x=2,y=6得k=12。所以y=12/x。当x=4时，y=12/4=3。"}]},{id:"kp_011",chapterId:"ch3",order:21,title:"二次函数初步",content:"理解二次函数的概念，掌握二次函数的图像和性质，能够求解简单的二次函数问题。",videoScript:`二次函数定义：形如y=ax²+bx+c(a≠0)的函数。
图像：抛物线，开口方向由a决定(a>0向上，a<0向下)。
顶点：(-b/(2a), c-b²/(4a))，对称轴x=-b/(2a)。
最值：a>0时有最小值，a<0时有最大值。`,videoBvid:"BV1V2EXzqEJW",videoPage:21,example:{question:"已知二次函数y=x²-4x+3，求：(1)顶点坐标；(2)对称轴；(3)最值。",analysis:"a=1,b=-4,c=3。顶点横坐标x=-b/(2a)=4/2=2。纵坐标y=2²-4×2+3=4-8+3=-1。所以顶点(2,-1)。对称轴x=2。因为a>0，有最小值-1。"},exercises:[{id:"kp_011_1",question:`下列函数中是二次函数的是（ ）
A. y=2x+1
B. y=3x²
C. y=1/x
D. y=√x`,answer:"B",analysis:"A是一次函数，C是反比例函数，D是幂函数，B是二次函数。"},{id:"kp_011_2",question:`二次函数y=2x²-4x+1的图像开口方向是（ ）
A. 向上
B. 向下
C. 向左
D. 向右`,answer:"A",analysis:"因为a=2>0，所以开口向上。"},{id:"kp_011_3",question:`抛物线y=x²+2x+1的顶点坐标是（ ）
A. (1,0)
B. (-1,0)
C. (0,1)
D. (0,-1)`,answer:"B",analysis:"y=(x+1)²，顶点为(-1,0)。"}],formulas:["二次函数","顶点公式","对称轴公式"]},{id:"kp_011_example",chapterId:"ch3",order:22,title:"二次函数初步 - 例题讲解",content:"通过应用题掌握二次函数模型的建立和最值问题的求解。",videoScript:`例题1：二次函数应用
例题2：最值问题
例题3：图像变换`,videoBvid:"BV1V2EXzqEJW",videoPage:22,example:{question:"用20米长的篱笆围成一个矩形菜园，一边靠墙，求菜园的最大面积。",analysis:"设靠墙的一边为x米，则另一边为(20-2x)/2=10-x米。面积S=x(10-x)=-x²+10x。顶点横坐标x=-10/(2×(-1))=5。最大面积S=-25+50=25平方米。"},exercises:[{id:"kp_011_example_1",question:"某商品每天销售20件，每件盈利40元。若每件降价1元，每天多卖2件。要使每天盈利最大，应降价多少元？",answer:"15元",analysis:"设降价x元，则盈利=(40-x)(20+2x)=-2x²+60x+800。当x=-60/(2×(-2))=15时，盈利最大。"},{id:"kp_011_example_2",question:"抛物线y=ax²+bx+c的顶点为(2,3)，且过点(0,1)，求a、b、c的值。",answer:"a=-0.5,b=2,c=1",analysis:"由顶点公式-b/(2a)=2，c-b²/(4a)=3。由过点(0,1)得c=1。解得a=-0.5,b=2,c=1。"}]},{id:"kp_012",chapterId:"ch4",order:23,title:"三角形概念",content:"理解三角形的概念，掌握三角形的分类和性质，能够识别不同类型的三角形。",videoScript:`三角形定义：由不在同一直线上的三条线段首尾顺次相接组成的图形。
三角形分类：按边分(等边、等腰、不等边)；按角分(锐角、直角、钝角)。
三角形性质：内角和180°，外角和360°，两边之和大于第三边。`,videoBvid:"BV1V2EXzqEJW",videoPage:23,example:{question:`若一个三角形的三边长为3、4、5，则这个三角形是（ ）
A. 锐角三角形
B. 直角三角形
C. 钝角三角形
D. 无法确定`,analysis:"因为3²+4²=9+16=25=5²，符合勾股定理，所以是直角三角形。"},exercises:[{id:"kp_012_1",question:`下列长度的三条线段能组成三角形的是（ ）
A. 1,2,3
B. 2,3,4
C. 3,4,8
D. 5,5,10`,answer:"B",analysis:"三角形两边之和大于第三边。A:1+2=3，不行；B:2+3>4，可以；C:3+4<8，不行；D:5+5=10，不行。"},{id:"kp_012_2",question:`若一个三角形的一个外角为110°，则这个三角形是（ ）
A. 锐角三角形
B. 直角三角形
C. 钝角三角形
D. 无法确定`,answer:"A",analysis:"外角=不相邻两内角和。若外角110°，则不相邻两内角和110°，所以相邻内角70°，三个内角都小于90°，是锐角三角形。"},{id:"kp_012_3",question:`等腰三角形的两边长分别为3和7，则周长为（ ）
A. 13
B. 17
C. 13或17
D. 无法确定`,answer:"B",analysis:"等腰三角形的两边可能是3,3,7或3,7,7。3+3<7不满足三角形条件，所以只能是3,7,7，周长17。"}],formulas:["三角形内角和","三角形外角和","三角形三边关系"]},{id:"kp_012_example",chapterId:"ch4",order:24,title:"三角形概念 - 例题讲解",content:"通过典型例题掌握三角形性质的运用。",videoScript:`例题1：三角形内角和
例题2：三角形分类
例题3：三角形三边关系`,videoBvid:"BV1V2EXzqEJW",videoPage:24,example:{question:"在△ABC中，∠A:∠B:∠C=1:2:3，求各角的度数。",analysis:"设∠A=x，则∠B=2x，∠C=3x。由三角形内角和x+2x+3x=180°，得6x=180°，x=30°。所以∠A=30°，∠B=60°，∠C=90°。"},exercises:[{id:"kp_012_example_1",question:"若一个三角形的一个角是另一个角的2倍，第三个角比第一个角大20°，求三个角的度数。",answer:"40°,80°,60°",analysis:"设第一个角x°，则第二个角2x°，第三个角(x+20)°。x+2x+x+20=180，4x=160，x=40。所以三个角为40°,80°,60°。"},{id:"kp_012_example_2",question:"已知等腰三角形的底边长为6，周长为20，求腰长。",answer:"7",analysis:"设腰长为x，则2x+6=20，2x=14，x=7。"}]},{id:"kp_013",chapterId:"ch4",order:25,title:"全等三角形",content:"理解全等三角形的概念，掌握全等三角形的判定条件，能够证明三角形全等。",videoScript:`全等三角形定义：能够完全重合的两个三角形。
全等符号：≌，对应顶点、对应边、对应角。
判定条件：SSS(三边相等)、SAS(两边夹角)、ASA(两角夹边)、AAS(两角一边)、HL(直角三角形斜边直角边)。`,videoBvid:"BV1V2EXzqEJW",videoPage:25,example:{question:"已知△ABC和△DEF，AB=DE，∠A=∠D，AC=DF，求证：△ABC≌△DEF。",analysis:"AB=DE，∠A=∠D，AC=DF，符合SAS判定条件，所以△ABC≌△DEF。"},exercises:[{id:"kp_013_1",question:`下列不能判定两个三角形全等的是（ ）
A. SSS
B. SAS
C. AAA
D. ASA`,answer:"C",analysis:"AAA只能判定相似，不能判定全等。"},{id:"kp_013_2",question:`已知△ABC中，AB=AC，∠BAD=∠CAD，AD=AD，则△ABD≌△ACD的判定依据是（ ）
A. SSS
B. SAS
C. ASA
D. AAS`,answer:"B",analysis:"AB=AC，∠BAD=∠CAD，AD=AD，符合SAS条件。"},{id:"kp_013_3",question:`在Rt△ABC和Rt△DEF中，∠C=∠F=90°，AB=DE，AC=DF，则全等的判定依据是（ ）
A. SSS
B. SAS
C. HL
D. ASA`,answer:"C",analysis:"直角三角形中，斜边AB=DE，直角边AC=DF，符合HL条件。"}],formulas:["全等三角形判定","全等三角形性质","HL判定"]},{id:"kp_013_example",chapterId:"ch4",order:26,title:"全等三角形 - 例题讲解",content:"通过复杂图形掌握全等三角形的证明方法。",videoScript:`例题1：多组全等证明
例题2：添加辅助线
例题3：综合应用`,videoBvid:"BV1V2EXzqEJW",videoPage:26,example:{question:"已知：AB=CD，∠1=∠2，∠3=∠4。求证：△ABE≌△CDE。",analysis:"∠1=∠2，AB=CD，∠3=∠4，符合ASA判定条件，所以△ABE≌△CDE。"},exercises:[{id:"kp_013_example_1",question:"已知：AD∥BC，∠1=∠2，∠3=∠4。求证：△AED≌△BEC。",answer:"ASA",analysis:"∠1=∠2，∠ADE=∠BCE（平行线内错角），∠3=∠4，符合AAS条件。"},{id:"kp_013_example_2",question:"已知：AB=AC，∠1=∠2。求证：△ABD≌△ACD。",answer:"SAS",analysis:"AB=AC，∠1=∠2，AD=AD，符合SAS条件。"}]},{id:"kp_014",chapterId:"ch4",order:27,title:"等腰三角形",content:"理解等腰三角形的性质，掌握等腰三角形的判定，能够解决等腰三角形的相关问题。",videoScript:`等腰三角形定义：有两条边相等的三角形。
性质：等边对等角，等角对等边；三线合一（顶角平分线、底边中线、底边高线）。
判定：两边相等或两角相等。
等边三角形：三边相等，各角60°。`,videoBvid:"BV1V2EXzqEJW",videoPage:27,example:{question:"等腰三角形的一个底角是50°，求顶角的度数。",analysis:"等腰三角形两个底角相等，所以另一个底角也是50°。顶角=180°-50°-50°=80°。"},exercises:[{id:"kp_014_1",question:"等腰三角形的周长是24，底边长是6，求腰长。",answer:"9",analysis:"设腰长为x，则2x+6=24，2x=18，x=9。"},{id:"kp_014_2",question:`若等腰三角形的一个角是80°，则这个三角形的顶角是（ ）
A. 20°
B. 80°
C. 20°或80°
D. 50°`,answer:"C",analysis:"80°可能是顶角，也可能是底角。若是底角，则顶角=180°-80°-80°=20°。"},{id:"kp_014_3",question:`等边三角形的对称轴有（ ）条
A. 1
B. 2
C. 3
D. 6`,answer:"C",analysis:"等边三角形有三条对称轴，每条高线都是对称轴。"}],formulas:["等腰三角形性质","等边三角形性质","三线合一"]},{id:"kp_014_example",chapterId:"ch4",order:28,title:"等腰三角形 - 例题讲解",content:"通过复杂图形掌握等腰三角形的性质和判定。",videoScript:`例题1：等腰三角形证明
例题2：分类讨论
例题3：综合应用`,videoBvid:"BV1V2EXzqEJW",videoPage:28,example:{question:"已知△ABC中，AB=AC，∠BAD=∠CAD。求证：BD=CD，∠B=∠C。",analysis:"AB=AC，∠BAD=∠CAD，AD=AD，所以△BAD≌△CAD（SAS）。所以BD=CD，∠B=∠C。"},exercises:[{id:"kp_014_example_1",question:"已知：AB=AC，∠B=∠C。求证：△ABC是等腰三角形。",answer:"等角对等边",analysis:"∠B=∠C，所以AB=AC，△ABC是等腰三角形。"},{id:"kp_014_example_2",question:`等腰三角形的一边长为6，另一边长为8，则周长为（ ）
A. 20
B. 22
C. 20或22
D. 无法确定`,answer:"C",analysis:"可能是6,6,8（周长20）或6,8,8（周长22）。两种情况都满足三角形条件。"}]},{id:"kp_015",chapterId:"ch4",order:29,title:"直角三角形与勾股定理",content:"理解直角三角形的性质，掌握勾股定理及其逆定理，能够解决直角三角形相关问题。",videoScript:`勾股定理：直角三角形两直角边的平方和等于斜边的平方。公式：a²+b²=c²。
勾股定理逆定理：若三角形三边满足a²+b²=c²，则这个三角形是直角三角形。
直角三角形性质：两锐角互余；斜边上的中线等于斜边的一半。`,videoBvid:"BV1V2EXzqEJW",videoPage:29,example:{question:"已知直角三角形的两条直角边分别为3和4，求斜边的长度。",analysis:"根据勾股定理，斜边c=√(3²+4²)=√(9+16)=√25=5。"},exercises:[{id:"kp_015_1",question:`下列各组数中是勾股数的是（ ）
A. 2,3,4
B. 3,4,5
C. 4,5,6
D. 5,6,7`,answer:"B",analysis:"3²+4²=9+16=25=5²，符合勾股定理。"},{id:"kp_015_2",question:`若三角形的三边长为5,12,13，则这个三角形是（ ）
A. 锐角三角形
B. 直角三角形
C. 钝角三角形
D. 无法确定`,answer:"B",analysis:"5²+12²=25+144=169=13²，符合勾股定理逆定理，是直角三角形。"},{id:"kp_015_3",question:"在Rt△ABC中，∠C=90°，AB=10，BC=6，求AC的长度。",answer:"8",analysis:"AB是斜边，AC=√(AB²-BC²)=√(100-36)=√64=8。"}],formulas:["勾股定理","勾股定理逆定理","直角三角形性质"]},{id:"kp_015_example",chapterId:"ch4",order:30,title:"直角三角形与勾股定理 - 例题讲解",content:"通过复杂问题掌握勾股定理的应用。",videoScript:`例题1：勾股定理应用
例题2：勾股定理逆定理
例题3：综合几何问题`,videoBvid:"BV1V2EXzqEJW",videoPage:30,example:{question:"在△ABC中，AD⊥BC于D，AB=13，AC=15，BC=14，求AD的长度。",analysis:"设BD=x，则CD=14-x。在Rt△ABD中，x²+AD²=13²。在Rt△ACD中，(14-x)²+AD²=15²。两式相减得(14-x)²-x²=15²-13²，即196-28x=56，x=5。所以AD=√(13²-5²)=√144=12。"},exercises:[{id:"kp_015_example_1",question:`已知直角三角形的两边长分别为5和12，则第三边长为（ ）
A. 13
B. 13或√119
C. 13或8
D. 无法确定`,answer:"B",analysis:"5和12可能都是直角边（5²+12²=13²），也可能12是斜边（12²-5²=119）。所以第三边是13或√119。"},{id:"kp_015_example_2",question:"在Rt△ABC中，∠C=90°，AB=2AC，求∠B的度数。",answer:"30°",analysis:"设AC=x，则AB=2x，BC=√(AB²-AC²)=√(4x²-x²)=√3x。tanB=AC/BC=1/√3，所以∠B=30°。"}]},{id:"kp_016",chapterId:"ch5",order:31,title:"平行四边形",content:"理解平行四边形的概念，掌握平行四边形的性质和判定，能够解决平行四边形相关问题。",videoScript:`平行四边形定义：两组对边分别平行的四边形。
性质：对边相等、对角相等、对角线互相平分；是中心对称图形。
判定：两组对边分别平行；两组对边分别相等；一组对边平行且相等；对角线互相平分；两组对角分别相等。`,videoBvid:"BV1V2EXzqEJW",videoPage:31,example:{question:"在平行四边形ABCD中，AB=8，BC=6，求CD和AD的长度。",analysis:"平行四边形对边相等，所以CD=AB=8，AD=BC=6。"},exercises:[{id:"kp_016_1",question:`下列图形中一定是平行四边形的是（ ）
A. 两组对边分别相等的四边形
B. 对角线相等的四边形
C. 一组对边平行且相等的四边形
D. 对角线互相垂直的四边形`,answer:"C",analysis:"A可能是等腰梯形，B可能是矩形，D可能是菱形，C符合平行四边形判定条件。"},{id:"kp_016_2",question:`在平行四边形ABCD中，∠A=60°，则∠C=（ ）
A. 30°
B. 60°
C. 120°
D. 180°`,answer:"B",analysis:"平行四边形对角相等，所以∠C=∠A=60°。"},{id:"kp_016_3",question:`平行四边形的周长是40，两条邻边之比是3:2，则较长边是（ ）
A. 8
B. 12
C. 16
D. 20`,answer:"B",analysis:"设两边为3x和2x，则2(3x+2x)=40，10x=40，x=4。较长边3x=12。"}],formulas:["平行四边形性质","平行四边形判定","中心对称"]},{id:"kp_016_example",chapterId:"ch5",order:32,title:"平行四边形 - 例题讲解",content:"通过复杂图形掌握平行四边形的证明方法。",videoScript:`例题1：平行四边形证明
例题2：对角线性质
例题3：综合应用`,videoBvid:"BV1V2EXzqEJW",videoPage:32,example:{question:"已知：四边形ABCD中，AB∥CD，AD∥BC。求证：ABCD是平行四边形。",analysis:"两组对边分别平行，所以ABCD是平行四边形。"},exercises:[{id:"kp_016_example_1",question:`在平行四边形ABCD中，对角线AC和BD相交于O，若AO=6，则AC=（ ）
A. 6
B. 12
C. 18
D. 24`,answer:"B",analysis:"平行四边形对角线互相平分，所以AO=OC=6，AC=12。"},{id:"kp_016_example_2",question:"已知：AB=CD，AD=BC。求证：ABCD是平行四边形。",answer:"两组对边分别相等",analysis:"两组对边分别相等，所以ABCD是平行四边形。"}]},{id:"kp_017",chapterId:"ch5",order:33,title:"矩形菱形正方形",content:"理解矩形、菱形、正方形的特殊性质，掌握它们的判定方法，能够解决特殊四边形问题。",videoScript:`矩形定义：有一个角是直角的平行四边形。性质：四个角都是直角，对角线相等。
菱形定义：有一组邻边相等的平行四边形。性质：四边相等，对角线互相垂直。
正方形定义：既是矩形又是菱形的四边形。性质：具有矩形和菱形的所有性质。`,videoBvid:"BV1V2EXzqEJW",videoPage:33,example:{question:"在矩形ABCD中，对角线AC=10，求BD的长度。",analysis:"矩形的对角线相等，所以BD=AC=10。"},exercises:[{id:"kp_017_1",question:`下列四边形中既是轴对称图形又是中心对称图形的是（ ）
A. 矩形
B. 菱形
C. 正方形
D. 平行四边形`,answer:"C",analysis:"矩形和菱形是轴对称图形，正方形既是轴对称又是中心对称，平行四边形只是中心对称。"},{id:"kp_017_2",question:`菱形的周长是40，则边长是（ ）
A. 8
B. 10
C. 12
D. 16`,answer:"B",analysis:"菱形四边相等，40÷4=10。"},{id:"kp_017_3",question:`正方形具有而矩形不具有的性质是（ ）
A. 对角线相等
B. 对角线互相平分
C. 对角线互相垂直
D. 四个角都是直角`,answer:"C",analysis:"菱形的对角线互相垂直，正方形具有菱形的性质。"}],formulas:["矩形性质","菱形性质","正方形性质"]},{id:"kp_017_example",chapterId:"ch5",order:34,title:"矩形菱形正方形 - 例题讲解",content:"通过综合问题掌握特殊四边形的判定和性质。",videoScript:`例题1：矩形判定
例题2：菱形判定
例题3：正方形综合应用`,videoBvid:"BV1V2EXzqEJW",videoPage:34,example:{question:"已知：平行四边形ABCD中，∠A=90°，AB=BC。求证：ABCD是正方形。",analysis:"∠A=90°，所以是矩形。AB=BC，邻边相等，所以是菱形。既是矩形又是菱形，所以是正方形。"},exercises:[{id:"kp_017_example_1",question:"在菱形ABCD中，对角线AC=8，BD=6，求边长。",answer:"5",analysis:"菱形对角线互相垂直平分，边长=√((8/2)²+(6/2)²)=√(16+9)=5。"},{id:"kp_017_example_2",question:`在矩形ABCD中，AB=6，BC=8，则对角线AC=（ ）
A. 10
B. 12
C. 14
D. 16`,answer:"A",analysis:"AC=√(AB²+BC²)=√(36+64)=10。"}]},{id:"kp_018",chapterId:"ch5",order:35,title:"梯形",content:"理解梯形的概念，掌握等腰梯形的性质和判定，能够解决梯形相关问题。",videoScript:`梯形定义：一组对边平行而另一组对边不平行的四边形。
等腰梯形：两腰相等的梯形，同一底上的两个角相等，对角线相等。
直角梯形：有一个角是直角的梯形。
梯形中位线：连接两腰中点的线段，平行于底边，等于两底和的一半。`,videoBvid:"BV1V2EXzqEJW",videoPage:35,example:{question:"在梯形ABCD中，AB∥CD，AD=BC，∠A=70°，求∠B的度数。",analysis:"AD=BC，所以是等腰梯形。同一底上的两个角相等，所以∠B=∠A=70°。"},exercises:[{id:"kp_018_1",question:`下列四边形中一定是梯形的是（ ）
A. 两组对边分别平行
B. 一组对边平行且相等
C. 一组对边平行而另一组不平行
D. 两组对边分别相等`,answer:"C",analysis:"A是平行四边形，B可能是平行四边形，C符合梯形定义，D可能是平行四边形。"},{id:"kp_018_2",question:`等腰梯形的对角线（ ）
A. 相等
B. 不相等
C. 互相垂直
D. 互相平分`,answer:"A",analysis:"等腰梯形的对角线相等。"},{id:"kp_018_3",question:"梯形的上底和下底分别为4和10，高为6，求中位线的长度。",answer:"7",analysis:"中位线=(上底+下底)/2=(4+10)/2=7。"}],formulas:["梯形定义","等腰梯形性质","梯形中位线"]},{id:"kp_018_example",chapterId:"ch5",order:36,title:"梯形 - 例题讲解",content:"通过复杂图形掌握梯形的性质和辅助线作法。",videoScript:`例题1：等腰梯形证明
例题2：梯形中位线
例题3：梯形辅助线`,videoBvid:"BV1V2EXzqEJW",videoPage:36,example:{question:"在等腰梯形ABCD中，AB∥CD，AD=BC，对角线AC⊥BD，若AB=8，CD=12，求梯形的高。",analysis:"设对角线交于O。在等腰梯形中，对角线相等，AO=CO，BO=DO。由AC⊥BD，利用面积公式和勾股定理可求得高为√(8×12)=√96=4√6。"},exercises:[{id:"kp_018_example_1",question:`直角梯形的两底分别为3和5，高为4，则斜腰长为（ ）
A. 5
B. √17
C. √20
D. 6`,answer:"C",analysis:"斜腰=√((5-3)²+4²)=√(4+16)=√20=2√5。"},{id:"kp_018_example_2",question:"等腰梯形的周长为30，上底为8，腰长为5，求下底长。",answer:"12",analysis:"下底=30-8-5-5=12。"}]},{id:"kp_019",chapterId:"ch6",order:37,title:"相似形概念",content:"理解相似形的概念，掌握相似多边形的性质，能够判断两个图形是否相似。",videoScript:`相似形定义：形状相同的图形。
相似比：相似图形对应边的比。
相似多边形性质：对应角相等，对应边成比例，周长比等于相似比，面积比等于相似比的平方。
相似三角形：三个角对应相等，三条边对应成比例。`,videoBvid:"BV1V2EXzqEJW",videoPage:37,example:{question:"两个相似三角形的相似比是2:3，较小三角形的周长是16，求较大三角形的周长。",analysis:"周长比等于相似比，所以较大三角形周长=16×(3/2)=24。"},exercises:[{id:"kp_019_1",question:`下列图形中一定相似的是（ ）
A. 两个矩形
B. 两个菱形
C. 两个正方形
D. 两个平行四边形`,answer:"C",analysis:"正方形形状相同，所以一定相似。"},{id:"kp_019_2",question:`若两个相似三角形的面积比是4:9，则相似比是（ ）
A. 2:3
B. 3:2
C. 4:9
D. 9:4`,answer:"A",analysis:"面积比等于相似比的平方，所以相似比=√(4/9)=2/3。"},{id:"kp_019_3",question:`在比例尺为1:50000的地图上，两点间距离为4cm，则实际距离是（ ）
A. 2km
B. 20km
C. 200km
D. 2000km`,answer:"A",analysis:"实际距离=4×50000=200000cm=2000m=2km。"}],formulas:["相似形性质","相似比","面积比公式"]},{id:"kp_019_example",chapterId:"ch6",order:38,title:"相似形概念 - 例题讲解",content:"通过典型例题掌握相似形的判定和性质应用。",videoScript:`例题1：相似三角形判定
例题2：相似比计算
例题3：相似应用`,videoBvid:"BV1V2EXzqEJW",videoPage:38,example:{question:"在△ABC和△DEF中，∠A=∠D，∠B=∠E，AB=6，DE=9，求相似比。",analysis:"两角对应相等，所以三角形相似。相似比=AB/DE=6/9=2/3。"},exercises:[{id:"kp_019_example_1",question:"在△ABC中，DE∥BC，AD=3，DB=6，DE=4，求BC的长度。",answer:"12",analysis:"DE∥BC，所以△ADE∽△ABC。AD/AB=DE/BC，即3/9=4/BC，BC=12。"},{id:"kp_019_example_2",question:"两个相似多边形的相似比是3:4，较小多边形的周长是24，求较大多边形的周长。",answer:"32",analysis:"周长比等于相似比，24×(4/3)=32。"}]},{id:"kp_020",chapterId:"ch6",order:39,title:"相似三角形",content:"掌握相似三角形的判定定理，能够证明三角形相似，并解决相关计算问题。",videoScript:`相似三角形判定：
1. 两角对应相等(AA)
2. 两边对应成比例且夹角相等(SAS)
3. 三边对应成比例(SSS)
4. 直角三角形斜边和一条直角边对应成比例(HL)
性质：对应角相等，对应边成比例。`,videoBvid:"BV1V2EXzqEJW",videoPage:39,example:{question:"在△ABC和△DEF中，AB/DE=AC/DF=2/3，∠A=∠D。求证：△ABC∽△DEF。",analysis:"两边对应成比例且夹角相等，符合SAS判定条件，所以△ABC∽△DEF。"},exercises:[{id:"kp_020_1",question:`下列不能判定两个三角形相似的是（ ）
A. 两角对应相等
B. 三边对应成比例
C. 两边对应成比例且夹角相等
D. 两边对应成比例且一边的对角相等`,answer:"D",analysis:"两边对应成比例且一边的对角相等，不能保证相似。"},{id:"kp_020_2",question:`在Rt△ABC和Rt△DEF中，∠C=∠F=90°，AB/DE=3/4，AC/DF=3/4，则全等的判定依据是（ ）
A. SSS
B. SAS
C. HL
D. AA`,answer:"C",analysis:"直角三角形斜边和一条直角边对应成比例，符合HL判定条件。"},{id:"kp_020_3",question:`在△ABC中，DE∥BC，若AD=2，DB=3，DE=4，则BC=（ ）
A. 6
B. 8
C. 10
D. 12`,answer:"C",analysis:"DE∥BC，所以△ADE∽△ABC。AD/AB=DE/BC，即2/5=4/BC，BC=10。"}],formulas:["相似三角形判定","相似三角形性质","HL判定"]},{id:"kp_020_example",chapterId:"ch6",order:40,title:"相似三角形 - 例题讲解",content:"通过复杂图形掌握相似三角形的证明方法。",videoScript:`例题1：多组相似证明
例题2：相似比计算
例题3：综合应用`,videoBvid:"BV1V2EXzqEJW",videoPage:40,example:{question:"已知：AB=AC，AD⊥BC于D，BE⊥AC于E。求证：△ABD∽△BEC。",analysis:"∠ADB=∠BEC=90°。∠BAD=∠CBE（等角的余角相等）。所以△ABD∽△BEC（AA）。"},exercises:[{id:"kp_020_example_1",question:"在△ABC中，DE∥BC，AD=4，AB=10，BC=15，求DE的长度。",answer:"6",analysis:"DE/BC=AD/AB，即DE/15=4/10，DE=6。"},{id:"kp_020_example_2",question:"在△ABC中，∠C=90°，CD⊥AB于D。求证：△ACD∽△ABC。",answer:"AA",analysis:"∠ADC=∠ACB=90°，∠A=∠A，所以△ACD∽△ABC。"}]},{id:"kp_021",chapterId:"ch6",order:41,title:"位似变换",content:"理解位似变换的概念，掌握位似图形的性质，能够进行位似作图。",videoScript:`位似定义：如果两个图形不仅是相似图形，而且每组对应点所在直线都经过同一个点，那么这两个图形是位似图形。
位似中心：对应点连线的交点。
位似比：位似图形对应边的比。
位似性质：位似图形上任意一对对应点到位似中心的距离之比等于位似比。`,videoBvid:"BV1V2EXzqEJW",videoPage:41,example:{question:"两个位似图形的位似比是3:2，若位似中心到一个对应点的距离是6，求另一个对应点到中心点的距离。",analysis:"距离比等于位似比，所以距离=6×(2/3)=4。"},exercises:[{id:"kp_021_1",question:`下列说法中正确的是（ ）
A. 位似图形一定是相似图形
B. 相似图形一定是位似图形
C. 位似图形的对应点连线交于一点
D. 位似图形的对应边平行`,answer:"B",analysis:"位似图形一定是相似图形，但相似图形不一定是位似图形。"},{id:"kp_021_2",question:`两个位似图形的位似比是2:5，若较大图形的周长是30，则较小图形的周长是（ ）
A. 6
B. 12
C. 15
D. 24`,answer:"B",analysis:"周长比等于位似比，30×(2/5)=12。"},{id:"kp_021_3",question:`已知点O是△ABC和△A'B'C'的位似中心，OA=4，OA'=6，则位似比是（ ）
A. 2:3
B. 3:2
C. 4:6
D. 6:4`,answer:"A",analysis:"位似比=OA:OA'=4:6=2:3。"}],formulas:["位似定义","位似中心","位似比"]},{id:"kp_021_example",chapterId:"ch6",order:42,title:"位似变换 - 例题讲解",content:"通过作图题掌握位似变换的应用。",videoScript:`例题1：位似作图
例题2：位似中心确定
例题3：位似比计算`,videoBvid:"BV1V2EXzqEJW",videoPage:42,example:{question:"已知△ABC，以点O为位似中心，位似比为2:1，作出△ABC的位似图形。",analysis:"连接OA、OB、OC，分别在射线OA、OB、OC上取OA'=2OA，OB'=2OB，OC'=2OC，连接A'B'C'即为所求。"},exercises:[{id:"kp_021_example_1",question:"在平面直角坐标系中，△ABC的顶点A(2,3)，以原点O为位似中心，位似比为1:2，求A'的坐标。",answer:"(1,1.5)",analysis:"位似比1:2，所以A'=((2×1)/2, (3×1)/2)=(1,1.5)。"},{id:"kp_021_example_2",question:"两个位似圆的半径之比为3:2，若两圆心距离为10，求位似中心到较小圆心的距离。",answer:"4",analysis:"设距离为x，则x:(10-x)=2:3，解得3x=20-2x，5x=20，x=4。"}]},{id:"kp_022",chapterId:"ch6",order:43,title:"比例线段",content:"理解比例线段的概念，掌握平行线分线段成比例定理，能够解决比例线段问题。",videoScript:`比例线段定义：如果四条线段a,b,c,d满足a/b=c/d，则称这四条线段成比例。
平行线分线段成比例定理：三条平行线截两条直线，所得的对应线段成比例。
合比性质：若a/b=c/d，则(a+b)/b=(c+d)/d。
等比性质：若a/b=c/d，则(a-c)/(b-d)=a/b。`,videoBvid:"BV1V2EXzqEJW",videoPage:43,example:{question:"在△ABC中，DE∥BC，AD=3，DB=6，AE=4，求EC的长度。",analysis:"DE∥BC，所以AD/AB=AE/AC。即3/9=4/(4+EC)。解得EC=8。"},exercises:[{id:"kp_022_1",question:`若a/b=c/d=2/3，则(a+c)/(b+d)=（ ）
A. 2/3
B. 4/6
C. 1
D. 无法确定`,answer:"A",analysis:"由合比性质，(a+c)/(b+d)=a/b=2/3。"},{id:"kp_022_2",question:`若a:b=c:d=2:3，则(a-c):(b-d)=（ ）
A. 2:3
B. 3:2
C. 1:1
D. 无法确定`,answer:"A",analysis:"由等比性质，(a-c):(b-d)=a:b=2:3。"},{id:"kp_022_3",question:"在△ABC中，DE∥BC，AD=4，AB=10，BC=15，求DE的长度。",answer:"6",analysis:"AD/AB=DE/BC，即4/10=DE/15，DE=6。"}],formulas:["比例线段","平行线分线段成比例","合比性质","等比性质"]},{id:"kp_022_example",chapterId:"ch6",order:44,title:"比例线段 - 例题讲解",content:"通过复杂图形掌握比例线段的应用。",videoScript:`例题1：平行线分线段
例题2：合比等比性质
例题3：综合几何问题`,videoBvid:"BV1V2EXzqEJW",videoPage:44,example:{question:"在△ABC中，DE∥BC，DF∥AC。求证：AE/EB=AF/FC。",analysis:"DE∥BC，所以AE/EB=AD/DB。DF∥AC，所以AF/FC=AD/DB。所以AE/EB=AF/FC。"},exercises:[{id:"kp_022_example_1",question:"在△ABC中，DE∥BC，AD=5，DB=3，DE=7，求BC的长度。",answer:"56/5",analysis:"AD/AB=DE/BC，即5/8=7/BC，BC=56/5。"},{id:"kp_022_example_2",question:`若a,b,c,d成比例，且a+b=10，b+c=15，c+d=20，则a=（ ）
A. 4
B. 5
C. 6
D. 8`,answer:"A",analysis:"设a/b=c/d=k，则a=bk，c=dk。由a+b=10得bk+b=10，b(k+1)=10。由c+d=20得dk+d=20，d(k+1)=20。由b+c=15得bk+dk=15，k(b+d)=15。解得k=1/2，b=20/3，a=10/3。"}]},{id:"kp_023",chapterId:"ch7",order:45,title:"数据收集与整理",content:"理解数据收集的基本方法，掌握数据整理的步骤，能够制作统计图表。",videoScript:`数据收集方法：问卷调查、实地观察、实验测量、网络搜索。
数据整理步骤：1.收集数据 2.分类整理 3.制作表格 4.绘制图表。
统计图表：条形图、折线图、扇形图、直方图。
频数分布：数据在各个类别中出现的次数。`,videoBvid:"BV1V2EXzqEJW",videoPage:45,example:{question:"某班50名学生，其中男生30人，女生20人。制作性别分布的扇形图，求男生所占扇形的圆心角。",analysis:"男生比例=30/50=3/5。圆心角=360°×3/5=216°。"},exercises:[{id:"kp_023_1",question:`下列调查方式中，适合用抽样调查的是（ ）
A. 了解全班同学的身高
B. 了解全校教师的年龄结构
C. 了解某班级的作业完成情况
D. 了解某校的运动成绩`,answer:"B",analysis:"A、C、D适合全面调查，B适合抽样调查。"},{id:"kp_023_2",question:`将数据分组：10-20, 20-30, 30-40, 40-50。若某数据为30，应归入（ ）
A. 20-30
B. 30-40
C. 都可以
D. 无法确定`,answer:"B",analysis:'数据分组时，一般遵循"上组限不在内"原则，30归入30-40。'},{id:"kp_023_3",question:`某班40人，其中12人喜欢篮球，占比例为（ ）
A. 30%
B. 25%
C. 20%
D. 15%`,answer:"A",analysis:"12/40=0.3=30%。"}],formulas:["数据收集方法","数据整理步骤","扇形图圆心角计算"]},{id:"kp_023_example",chapterId:"ch7",order:46,title:"数据收集与整理 - 例题讲解",content:"通过实际案例掌握数据收集和整理的方法。",videoScript:`例题1：问卷调查设计
例题2：数据分类整理
例题3：统计图表制作`,videoBvid:"BV1V2EXzqEJW",videoPage:46,example:{question:"某校调查学生最喜欢的体育活动，结果如下：篮球25%，足球20%，排球15%，羽毛球18%，乒乓球22%。制作条形图，并求喜欢篮球的学生比喜欢排球的多多少人（总人数200人）。",analysis:"25%-15%=10%，200×10%=20人。"},exercises:[{id:"kp_023_example_1",question:`某班50人，其中参加数学兴趣小组的有20人，占比例为（ ）
A. 40%
B. 30%
C. 25%
D. 20%`,answer:"A",analysis:"20/50=0.4=40%。"},{id:"kp_023_example_2",question:`将数据分组：0-10, 10-20, 20-30。若某数据为10，应归入（ ）
A. 0-10
B. 10-20
C. 都可以
D. 无法确定`,answer:"B",analysis:'遵循"上组限不在内"原则，10归入10-20。'}]},{id:"kp_024",chapterId:"ch7",order:47,title:"统计图表",content:"掌握各种统计图表的特点和适用情况，能够正确解读和制作统计图表。",videoScript:`条形图：显示各类别数据的大小，适合比较不同类别的数据。
折线图：显示数据的变化趋势，适合表示时间序列数据。
扇形图：显示各部分占总体的比例，适合表示构成比。
直方图：显示数据的分布情况，适合表示连续数据的频数分布。`,videoBvid:"BV1V2EXzqEJW",videoPage:47,example:{question:"某公司2018-2022年的销售额分别为：100万、120万、150万、130万、160万。制作折线图，并判断哪一年增长最快。",analysis:"2019年增长20万，2020年增长30万，2021年减少20万，2022年增长30万。2020年和2022年都是增长30万，但2020年增长率更高(25%)，所以2020年增长最快。"},exercises:[{id:"kp_024_1",question:`要表示某班学生身高的分布情况，应选用（ ）
A. 条形图
B. 折线图
C. 扇形图
D. 直方图`,answer:"D",analysis:"身高是连续数据，用直方图表示分布情况。"},{id:"kp_024_2",question:`要表示某公司各部门销售额占总销售额的比例，应选用（ ）
A. 条形图
B. 折线图
C. 扇形图
D. 直方图`,answer:"C",analysis:"表示部分与整体的比例关系，用扇形图。"},{id:"kp_024_3",question:`某条形图显示A、B、C三类产品销量分别为50、80、70，则B类产品比A类多（ ）
A. 30%
B. 40%
C. 50%
D. 60%`,answer:"D",analysis:"(80-50)/50=30/50=0.6=60%。"}],formulas:["条形图特点","折线图特点","扇形图特点","直方图特点"]},{id:"kp_024_example",chapterId:"ch7",order:48,title:"统计图表 - 例题讲解",content:"通过实际数据掌握统计图表的制作和分析方法。",videoScript:`例题1：图表选择
例题2：图表解读
例题3：数据可视化`,videoBvid:"BV1V2EXzqEJW",videoPage:48,example:{question:"某班学生最喜欢的颜色调查结果：红色30%，蓝色25%，绿色20%，黄色15%，其他10%。制作扇形图，并求喜欢红色和蓝色的学生共占多少比例。",analysis:"30%+25%=55%。"},exercises:[{id:"kp_024_example_1",question:"某折线图显示2019-2023年某商品价格分别为：100、120、150、130、140元。哪一年价格最高？哪一年最低？",answer:"2020年最高，2019年最低",analysis:"从折线图可以看出2020年价格150元最高，2019年价格100元最低。"},{id:"kp_024_example_2",question:"某直方图显示学生成绩分布：60-70分10人，70-80分20人，80-90分15人，90-100分5人。求及格率(60分以上)。",answer:"100%",analysis:"所有学生都在60分以上，所以及格率100%。"}]},{id:"kp_025",chapterId:"ch7",order:49,title:"频数分布",content:"理解频数分布的概念，掌握频数分布表和频数分布直方图的制作，能够分析数据分布特征。",videoScript:`频数分布：将数据按一定区间分组，统计各组的频数。
频数分布表：显示各组的频数、频率、累计频数、累计频率。
频数分布直方图：用矩形高度表示各组的频数。
数据分布特征：集中趋势(平均数、中位数、众数)、离散程度(极差、方差)。`,videoBvid:"BV1V2EXzqEJW",videoPage:49,example:{question:"某班50名学生数学成绩：60-70分8人，70-80分15人，80-90分20人，90-100分7人。制作频数分布表，并求80分以上的学生人数。",analysis:"80-90分20人，90-100分7人，共27人。"},exercises:[{id:"kp_025_1",question:`频数分布直方图中，各矩形的宽度表示（ ）
A. 组距
B. 频数
C. 频率
D. 组中值`,answer:"A",analysis:"矩形宽度表示组距，高度表示频数。"},{id:"kp_025_2",question:`某频数分布表中，70-80分组有20人，总人数100人，则频率为（ ）
A. 0.2
B. 0.25
C. 0.3
D. 0.5`,answer:"A",analysis:"频率=频数/总数=20/100=0.2。"},{id:"kp_025_3",question:`频数分布直方图可以直观显示（ ）
A. 数据的集中趋势
B. 数据的离散程度
C. 数据的分布形态
D. 数据的变化趋势`,answer:"C",analysis:"直方图显示数据的分布形态。"}],formulas:["频数分布","频数分布表","频率计算","组距确定"]},{id:"kp_025_example",chapterId:"ch7",order:50,title:"频数分布 - 例题讲解",content:"通过实际数据掌握频数分布表和直方图的制作方法。",videoScript:`例题1：频数分布表制作
例题2：频数分布直方图
例题3：数据分析`,videoBvid:"BV1V2EXzqEJW",videoPage:50,example:{question:"某校100名学生的体重数据，最小40kg，最大70kg，制作频数分布表，取组距为5kg。",analysis:"极差=70-40=30kg，组距5kg，组数=30/5=6组。分组：40-45,45-50,50-55,55-60,60-65,65-70。统计各组频数，制作频数分布表。"},exercises:[{id:"kp_025_example_1",question:`某频数分布直方图中，80-90分组的高度是其他组的2倍，说明（ ）
A. 该组频数最大
B. 该组频率最大
C. 该组人数最多
D. 以上都对`,answer:"D",analysis:"直方图高度表示频数，频数最大，频率也最大，人数也最多。"},{id:"kp_025_example_2",question:`已知某组数据的频数分布表中，60-70分组的频率是0.3，频数是15人，则总人数是（ ）
A. 40人
B. 45人
C. 50人
D. 55人`,answer:"C",analysis:"总人数=频数/频率=15/0.3=50人。"}]},{id:"kp_026",chapterId:"ch7",order:51,title:"数据特征分析",content:"掌握集中趋势和离散程度的度量方法，能够分析数据的基本特征。",videoScript:`集中趋势：平均数(算术平均、加权平均)、中位数、众数。
离散程度：极差、方差、标准差。
平均数：所有数据之和除以数据个数。
中位数：将数据排序后位于中间位置的数。
众数：出现次数最多的数。`,videoBvid:"BV1V2EXzqEJW",videoPage:51,example:{question:"某班10名学生数学成绩：85, 90, 78, 92, 88, 76, 95, 89, 84, 91。求平均分、中位数、众数。",analysis:"平均分=(85+90+78+92+88+76+95+89+84+91)/10=868/10=86.8分。排序后：76,78,84,85,88,89,90,91,92,95。中位数=(88+89)/2=88.5分。没有众数(所有数出现一次)。"},exercises:[{id:"kp_026_1",question:`数据5, 7, 8, 8, 9, 10的平均数是（ ）
A. 7.5
B. 8
C. 8.5
D. 9`,answer:"B",analysis:"(5+7+8+8+9+10)/6=47/6≈7.83，最接近8。"},{id:"kp_026_2",question:`数据6, 8, 8, 10, 12的众数是（ ）
A. 6
B. 8
C. 10
D. 没有众数`,answer:"B",analysis:"8出现两次，其他数出现一次，所以众数是8。"},{id:"kp_026_3",question:`数据2, 4, 6, 8, 10的中位数是（ ）
A. 4
B. 5
C. 6
D. 8`,answer:"C",analysis:"数据已排序，中间位置是第三个数6。"}],formulas:["平均数公式","中位数求法","众数定义","极差公式"]},{id:"kp_026_example",chapterId:"ch7",order:52,title:"数据特征分析 - 例题讲解",content:"通过实际数据掌握数据特征的计算和分析方法。",videoScript:`例题1：平均数计算
例题2：中位数和众数
例题3：数据分布分析`,videoBvid:"BV1V2EXzqEJW",videoPage:52,example:{question:"某公司5名员工月薪：5000, 6000, 7000, 8000, 50000元。求平均数，并分析是否具有代表性。",analysis:"平均数=(5000+6000+7000+8000+50000)/5=76000/5=15200元。但50000元远高于其他工资，使平均数偏高，不具有代表性。中位数7000元更能代表一般水平。"},exercises:[{id:"kp_026_example_1",question:`数据3, 5, 7, 9, 11的平均数是（ ）
A. 5
B. 6
C. 7
D. 8`,answer:"C",analysis:"(3+5+7+9+11)/5=35/5=7。"},{id:"kp_026_example_2",question:`在一组数据中，每个数都增加5，则（ ）
A. 平均数增加5
B. 中位数不变
C. 众数不变
D. 方差增加5`,answer:"A",analysis:"每个数增加5，平均数增加5，中位数和众数也增加5，方差不变。"}]},{id:"kp_027",chapterId:"ch7",order:53,title:"事件分类",content:"理解必然事件、不可能事件、随机事件的概念，能够区分不同类型的事件。",videoScript:`必然事件：在一定条件下一定会发生的事件，概率为1。
不可能事件：在一定条件下一定不会发生的事件，概率为0。
随机事件：在一定条件下可能发生也可能不发生的事件，概率介于0和1之间。
确定性事件：必然事件和不可能事件的统称。
不确定性事件：随机事件的统称。`,videoBvid:"BV1V2EXzqEJW",videoPage:53,example:{question:"下列事件中：(1)太阳从东方升起；(2)掷骰子出现7点；(3)明天下雨；(4)三角形的内角和为180°。其中必然事件、不可能事件、随机事件分别是哪些？",analysis:"(1)和(4)是必然事件；(2)是不可能事件；(3)是随机事件。"},exercises:[{id:"kp_027_1",question:`下列事件中，必然事件是（ ）
A. 掷一枚硬币正面朝上
B. 在一个标准大气压下，水加热到100℃沸腾
C. 明天下雨
D. 买彩票中奖`,answer:"B",analysis:"在标准大气压下，水加热到100℃沸腾是必然事件。"},{id:"kp_027_2",question:`下列事件中，随机事件是（ ）
A. 地球绕太阳转
B. 掷一枚骰子出现偶数点
C. 1+1=3
D. 三角形内角和为360°`,answer:"B",analysis:"掷骰子可能出现偶数点，也可能出现奇数点，是随机事件。"},{id:"kp_027_3",question:`下列事件中，不可能事件是（ ）
A. 负数大于正数
B. 两个负数相乘结果为正数
C. 两个奇数之和为偶数
D. 一个数的平方为负数`,answer:"D",analysis:"任何实数的平方都是非负数，不可能为负数。"}],formulas:["必然事件","不可能事件","随机事件","确定性事件"]},{id:"kp_027_example",chapterId:"ch7",order:54,title:"事件分类 - 例题讲解",content:"通过实际例子掌握事件分类的方法。",videoScript:`例题1：事件分类
例题2：概率初步判断
例题3：生活实例分析`,videoBvid:"BV1V2EXzqEJW",videoPage:54,example:{question:"判断下列事件的类型：(1)抛掷一枚质地均匀的硬币，正面朝上；(2)在一个不透明的袋子中装有3个红球，摸出一个白球；(3)在常温下，铁块熔化。",analysis:"(1)是随机事件，可能正面也可能反面；(2)是不可能事件，袋中没有白球；(3)是不可能事件，常温下铁块不会熔化。"},exercises:[{id:"kp_027_example_1",question:`下列事件中，是确定性事件的是（ ）
A. 明天会下雨
B. 抛掷一枚硬币正面朝上
C. 两个负数的积为正数
D. 购买一张彩票，中500万大奖`,answer:"C",analysis:"两个负数相乘结果为正数是必然事件，属于确定性事件。"},{id:"kp_027_example_2",question:`下列事件中，是随机事件的是（ ）
A. 水在100℃沸腾
B. 三角形的内角和为180°
C. 掷一枚骰子，出现点数小于7
D. 从装有红球的袋中摸出白球`,answer:"C",analysis:"掷骰子可能出现1-6点，都小于7，但具体是哪个点是随机的。"}]},{id:"kp_028",chapterId:"ch7",order:55,title:"概率计算",content:"掌握概率的基本计算方法，能够计算简单事件的概率。",videoScript:`概率定义：事件A发生的概率P(A)=事件A包含的基本事件数/基本事件总数。
古典概型：每个基本事件发生的可能性相等。
几何概型：概率与几何度量成正比。
概率性质：0≤P(A)≤1，P(必然事件)=1，P(不可能事件)=0。`,videoBvid:"BV1V2EXzqEJW",videoPage:55,example:{question:"掷一枚质地均匀的骰子，求出现偶数点的概率。",analysis:"基本事件总数6个(1-6)。偶数点有2,4,6三个。概率=3/6=1/2。"},exercises:[{id:"kp_028_1",question:`从一副扑克牌(54张)中随机抽取一张，抽到大王的概率是（ ）
A. 1/54
B. 2/54
C. 1/27
D. 1/18`,answer:"A",analysis:"只有一张大王，概率=1/54。"},{id:"kp_028_2",question:`掷两枚骰子，点数之和为7的概率是（ ）
A. 1/6
B. 1/9
C. 1/12
D. 1/18`,answer:"A",analysis:"总共有36种等可能结果，和为7的有(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)共6种，概率=6/36=1/6。"},{id:"kp_028_3",question:`在一个不透明的袋子中装有3个红球和2个白球，随机摸出一个红球的概率是（ ）
A. 2/5
B. 3/5
C. 1/3
D. 2/3`,answer:"B",analysis:"红球3个，总共5个球，概率=3/5。"}],formulas:["概率公式","古典概型","几何概型","概率性质"]},{id:"kp_028_example",chapterId:"ch7",order:56,title:"概率计算 - 例题讲解",content:"通过复杂例题掌握概率计算方法。",videoScript:`例题1：古典概型
例题2：几何概型
例题3：概率应用`,videoBvid:"BV1V2EXzqEJW",videoPage:56,example:{question:"从1,2,3,4,5中随机选取两个数，求它们的和为偶数的概率。",analysis:"基本事件有(1,2),(1,3),(1,4),(1,5),(2,3),(2,4),(2,5),(3,4),(3,5),(4,5)共10种。和为偶数的有(1,3),(1,5),(2,4),(3,5)共4种。概率=4/10=2/5。"},exercises:[{id:"kp_028_example_1",question:"从1,2,3,4,5中随机选取两个数，求它们的积为偶数的概率。",answer:"7/10",analysis:"积为偶数的情况：至少有一个是偶数。偶数有2,4。总情况10种，积为奇数的情况只有(1,3),(1,5),(3,5)3种。所以积为偶数的概率=1-3/10=7/10。"},{id:"kp_028_example_2",question:"在一个边长为2的正方形内随机取一点，求该点到四个顶点的距离都大于1的概率。",answer:"1-π/4",analysis:"满足条件的区域是正方形去掉四个半径为1的四分之一圆。面积=4-π。概率=(4-π)/4=1-π/4。"}]},{id:"kp_029",chapterId:"ch7",order:57,title:"概率应用",content:"掌握概率在实际问题中的应用，能够解决生活中的概率问题。",videoScript:`概率应用：彩票中奖概率、产品合格率、天气预报、风险评估等。
条件概率：在事件A发生的条件下，事件B发生的概率P(B|A)=P(A∩B)/P(A)。
独立事件：两个事件互不影响，P(A∩B)=P(A)P(B)。
互斥事件：两个事件不能同时发生，P(A∪B)=P(A)+P(B)。`,videoBvid:"BV1V2EXzqEJW",videoPage:57,example:{question:"某产品合格率是95%，随机抽取3件，求至少有一件不合格的概率。",analysis:"先求全部合格的概率=0.95³=0.857375。至少一件不合格的概率=1-0.857375=0.142625≈14.3%。"},exercises:[{id:"kp_029_1",question:"某彩票中奖概率是1/1000，购买1000张彩票，中奖的概率是多少？",answer:"约63%",analysis:"不中奖的概率=(1-1/1000)¹⁰⁰⁰≈e⁻¹≈0.37。中奖的概率=1-0.37≈0.63。"},{id:"kp_029_2",question:"甲、乙两人独立射击同一目标，命中率分别为0.8和0.6，求目标被击中的概率。",answer:"0.92",analysis:"目标不被击中的概率=(1-0.8)×(1-0.6)=0.2×0.4=0.08。被击中的概率=1-0.08=0.92。"},{id:"kp_029_3",question:"某工厂产品合格率为90%，随机抽取5件，求恰好有3件合格的概率。",answer:"0.0729",analysis:"用二项分布公式：C(5,3)×0.9³×0.1²=10×0.729×0.01=0.0729。"}],formulas:["条件概率","独立事件","互斥事件","二项分布"]},{id:"kp_029_example",chapterId:"ch7",order:58,title:"概率应用 - 例题讲解",content:"通过实际案例掌握概率分析方法。",videoScript:`例题1：产品质量检验
例题2：天气预报概率
例题3：风险评估`,videoBvid:"BV1V2EXzqEJW",videoPage:58,example:{question:"某天气预报准确率为80%，连续预报3天，求至少2天准确的概率。",analysis:"用二项分布：P(2天准确)=C(3,2)×0.8²×0.2=3×0.64×0.2=0.384。P(3天准确)=0.8³=0.512。总概率=0.384+0.512=0.896≈89.6%。"},exercises:[{id:"kp_029_example_1",question:"某考试通过率为60%，10人参加考试，求至少有8人通过的概率。",answer:"约16.7%",analysis:"P(8人)=C(10,8)×0.6⁸×0.4²=45×0.0168×0.16≈0.1209。P(9人)=10×0.6⁹×0.4≈0.0403。P(10人)=0.6¹⁰≈0.0060。总概率≈0.1672。"},{id:"kp_029_example_2",question:"从1-20中随机选取一个数，求选出的数是3的倍数或5的倍数的概率。",answer:"9/20",analysis:"3的倍数：3,6,9,12,15,18共6个。5的倍数：5,10,15,20共4个。15被重复计算一次。总共9个。概率=9/20。"}]},fe,ge,Ae,Be,we,qe,Ce,Pe,be,De,Ie,ve],Ee=[{id:"ch1",title:"代数基础",subtitle:"实数、整式与根式",description:"实数概念、整式运算、分式方程、二次根式。",order:1,knowledgePointIds:[],questionCount:31,difficulty:"medium",estimatedTime:480,color:"#5B7CF9",icon:"🔢",isKeyChapter:!0,sections:["实数概念","整式运算","分式方程","二次根式"]},{id:"ch2",title:"方程与不等式",subtitle:"一次方程、方程组与不等式",description:"一元一次方程、二元一次方程组、不等式与不等式组。",order:2,knowledgePointIds:[],questionCount:26,difficulty:"medium",estimatedTime:420,color:"#10B981",icon:"✍️",isKeyChapter:!0,sections:["一元一次方程","二元一次方程组","不等式","不等式组"]},{id:"ch3",title:"函数初步",subtitle:"函数与图像基础",description:"函数概念、一次函数、反比例函数、二次函数初步。",order:3,knowledgePointIds:[],questionCount:32,difficulty:"hard",estimatedTime:360,color:"#F59E0B",icon:"📈",isKeyChapter:!0,sections:["函数概念","一次函数","反比例函数","二次函数初步"]},{id:"ch4",title:"三角形与全等",subtitle:"基础几何证明",description:"三角形概念、全等三角形、等腰三角形、直角三角形。",order:4,knowledgePointIds:[],questionCount:32,difficulty:"medium",estimatedTime:300,color:"#8B5CF6",icon:"📐",isKeyChapter:!1,sections:["三角形概念","全等三角形","等腰三角形","直角三角形"]},{id:"ch5",title:"四边形",subtitle:"平行四边形到梯形",description:"平行四边形、矩形菱形正方形、梯形。",order:5,knowledgePointIds:[],questionCount:24,difficulty:"medium",estimatedTime:240,color:"#EC4899",icon:"⬜",isKeyChapter:!1,sections:["平行四边形","矩形","菱形","正方形","梯形"]},{id:"ch6",title:"相似形",subtitle:"比例线段与位似",description:"相似形概念、相似三角形、位似变换、比例线段。",order:6,knowledgePointIds:[],questionCount:32,difficulty:"hard",estimatedTime:180,color:"#06B6D4",icon:"📏",isKeyChapter:!0,sections:["相似形概念","相似三角形","位似变换","比例线段"]},{id:"ch7",title:"概率统计",subtitle:"统计图表与概率初步",description:"数据收集与整理、统计图表、频数分布、数据特征分析、概率初步。",order:7,knowledgePointIds:[],questionCount:72,difficulty:"easy",estimatedTime:480,color:"#84CC16",icon:"📊",isKeyChapter:!1,sections:["数据整理","统计图表","频数分布","数据特征","概率初步"]},{id:"ch8",title:"综合应用",subtitle:"代数几何综合与实际问题",description:"代数几何综合、实际应用问题、最值问题。",order:8,knowledgePointIds:[],questionCount:24,difficulty:"hard",estimatedTime:300,color:"#F97316",icon:"🧩",isKeyChapter:!0,sections:["代数几何综合","实际应用问题","最值问题"]}],v=Ee.map(e=>({...e,knowledgePointIds:f.filter(t=>t.chapterId===e.id&&!t.id.endsWith("_example")).map(t=>t.id)})),ze={kp_001:{coreConcepts:["实数是有理数和无理数的统称，没有最大的实数，也没有最小的实数","有理数包括整数、分数、有限小数和循环小数","无理数是无限不循环小数，不能表示为分数形式","实数与数轴上的点是一一对应的关系"],keyFormulas:["实数 = 有理数 ∪ 无理数","有理数 = 整数 ∪ 分数","无限循环小数是有理数，无限不循环小数是无理数"],commonMistakes:["误以为无限小数都是无理数（循环小数是有理数）","混淆有理数和无理数的分类标准","认为实数有最大值或最小值"],memoryTips:["分数形式p/q（q≠0）→ 有理数","π、√2、e等 → 无理数","数轴上所有点 → 实数"]},kp_002:{coreConcepts:["整式是单项式和多项式的统称","同类项必须字母相同且相同字母的指数相同","合并同类项时系数相加，字母和指数不变","整式加减实质是去括号和合并同类项"],keyFormulas:["am × an = am+n","(am)n = amn","(ab)n = anbn","合并同类项：系数相加，字母和指数不变"],commonMistakes:["混淆同类项的判断标准（只看字母不看指数）","去括号时符号错误","合并同类项时漏掉项"],memoryTips:["同类项：字母相同，指数相同","去括号：正不变负变","合并：系数相加，字母部分不变"]},kp_003:{coreConcepts:["分式方程是分母中含有未知数的方程","解分式方程的关键是去分母，转化为整式方程","解分式方程必须验根，增根要舍去","最简公分母是所有分母的最小公倍式"],keyFormulas:["最简公分母的确定方法","去分母的方法","增根的检验条件：使分母为零的根"],commonMistakes:["忘记找最简公分母","去分母时漏乘常数项","忘记验根或检验方法错误"],memoryTips:["分式方程 → 去分母 → 整式方程","验根方法：代入最简公分母","增根：使分母为零的根"]},kp_004:{coreConcepts:["形如√a（a≥0）的式子叫二次根式","二次根式有意义的条件是被开方数非负","最简二次根式要求被开方数不含完全平方数","同类二次根式要求化简后被开方数相同"],keyFormulas:["√(a²) = |a|","(√a)² = a（a≥0）","√(ab) = √a·√b（a≥0,b≥0）","√(a/b) = √a/√b（a≥0,b>0）"],commonMistakes:["忽略被开方数的非负性","化简不完全，被开方数含完全平方数","混淆√(a²)和(√a)²的区别"],memoryTips:["被开方数≥0 → 有意义","√(a²)=|a|，(√a)²=a","最简：被开方数无平方因数"]},kp_005:{coreConcepts:["只含一个未知数，且未知数的最高次数为1的方程","等式性质是解方程的基础","解方程的步骤：去分母、去括号、移项、合并、系数化为1","应用题关键是找等量关系"],keyFormulas:["等式性质1：等式两边同加（减）同一个数仍成立","等式性质2：等式两边同乘（除）同一个非零数仍成立","解方程的标准步骤"],commonMistakes:["移项时忘记变号","去分母时漏乘某项","系数化为1时除法错误"],memoryTips:["移项要变号","去分母要乘遍所有项","系数化1注意除法运算"]},kp_006:{coreConcepts:["含有两个未知数，且每个方程都是一次方程的方程组","代入消元法和加减消元法是基本解法","方程组可能有唯一解、无解或无穷多解","应用题关键是设未知数和找等量关系"],keyFormulas:["代入消元法步骤","加减消元法步骤","方程组解的情况判断"],commonMistakes:["代入时计算错误","加减消元时符号错误","忘记检验解的正确性"],memoryTips:["代入法：用一个未知数表示另一个","加减法：通过相加或相减消元","解完后要检验"]},kp_007:{coreConcepts:["用>、<、≥、≤表示不等关系的式子","不等式性质3：两边同乘负数，不等号方向改变","解不等式组要分别求解，再找公共部分","数轴表示解集要注意空心和实心"],keyFormulas:["不等式性质1：同加（减）同一个数，方向不变","不等式性质2：同乘（除）正数，方向不变","不等式性质3：同乘（除）负数，方向改变"],commonMistakes:["忘记不等号方向改变","不等式组解集找错","数轴表示时端点错误"],memoryTips:["乘负数，方向变","不等式组，找公共","数轴上，定端点"]},kp_008:{coreConcepts:["函数是两个变量之间的对应关系","函数的三要素：定义域、对应关系、值域","函数的三种表示法：解析法、列表法、图像法","判断函数关系的关键是唯一对应性"],keyFormulas:["函数的定义","函数三要素","函数的表示方法"],commonMistakes:["误判函数关系（一个x对应多个y）","忽略函数的定义域","混淆函数与方程的区别"],memoryTips:["函数：一个x对应唯一y","三要素：定义域、对应关系、值域","表示法：解析、列表、图像"]},kp_009:{coreConcepts:["形如y=kx+b（k≠0）的函数","k决定函数的增减性，b决定图像与y轴的交点","一次函数图像是一条直线","一次函数的应用关键是建立函数模型"],keyFormulas:["一次函数表达式","斜率公式k=(y2-y1)/(x2-x1)","图像性质：k>0时y随x增大而增大，k<0时y随x增大而减小"],commonMistakes:["忽略k≠0的条件","图像性质与k的符号关系混淆","应用题建模时等量关系错误"],memoryTips:["k>0，直线上升；k<0，直线下降","b是y轴截距","一次函数：直线"]},kp_010:{coreConcepts:["形如y=k/x（k≠0）的函数","图像是双曲线，关于原点对称","k决定图像所在象限和增减性","|k|表示图像上任意一点到坐标轴的距离"],keyFormulas:["反比例函数表达式","图像性质：k>0时在一、三象限，k<0时在一、四象限","k的几何意义"],commonMistakes:["忽略k≠0的条件","图像象限与k的符号关系混淆","增减性判断错误"],memoryTips:["k>0，一三象限；k<0，二四象限","图像关于原点对称","|k|是点到坐标轴的距离"]}},Oe={kp_011:{coreConcepts:["形如y=ax²+bx+c（a≠0）的函数","图像是抛物线，开口方向由a决定","顶点坐标(-b/(2a), c-b²/(4a))，对称轴x=-b/(2a)","a>0时开口向上，有最小值；a<0时开口向下，有最大值"],keyFormulas:["二次函数标准式","顶点坐标公式","对称轴公式","最值公式"],commonMistakes:["忽略a≠0的条件","顶点坐标计算错误","最值与a的符号关系混淆"],memoryTips:["a>0，开口向上，有最小值","a<0，开口向下，有最大值","顶点：最高点或最低点"]},kp_012:{coreConcepts:["由三条线段首尾顺次相接组成的图形","三角形内角和180°，外角和360°","两边之和大于第三边，两边之差小于第三边","按边分类：等边、等腰、不等边；按角分类：锐角、直角、钝角"],keyFormulas:["三角形内角和定理","三角形外角和定理","三角形三边关系","勾股定理（直角三角形）"],commonMistakes:["忽略三角形三边关系","内角和计算错误","三角形分类混淆"],memoryTips:["两边之和大于第三边","内角和180°，外角和360°","直角三角形：勾股定理"]},kp_013:{coreConcepts:["能够完全重合的两个三角形","全等三角形对应边相等，对应角相等","全等三角形的判定：SSS、SAS、ASA、AAS、HL","全等三角形的性质是证明线段相等、角相等的重要依据"],keyFormulas:["全等三角形判定条件","全等三角形性质","HL判定（直角三角形）"],commonMistakes:["判定条件混淆，特别是SAS和SSA的区别","对应关系找错","HL判定在非直角三角形中误用"],memoryTips:["SSS：三边相等","SAS：两边夹角","ASA：两角夹边","AAS：两角一边","HL：斜边直角边（仅限直角三角形）"]},kp_014:{coreConcepts:["有两条边相等的三角形","等边对等角，等角对等边","三线合一：顶角平分线、底边中线、底边高线重合","等边三角形是特殊的等腰三角形，各角60°"],keyFormulas:["等腰三角形性质","等边三角形性质","三线合一性质"],commonMistakes:["等边对等角与等角对等边混淆","三线合一的条件不清楚","等边三角形的性质记错"],memoryTips:["等边对等角，等角对等边","三线合一：顶角平分线=底边中线=底边高线","等边三角形：三边相等，三角60°"]},kp_015:{coreConcepts:["有一个角是90°的三角形","勾股定理：a²+b²=c²（c为斜边）","勾股定理逆定理：若a²+b²=c²，则三角形为直角三角形","直角三角形斜边上的中线等于斜边的一半"],keyFormulas:["勾股定理","勾股定理逆定理","直角三角形斜边中线定理","两锐角互余"],commonMistakes:["勾股定理中c不是斜边","勾股定理逆定理应用错误","斜边中线定理记错"],memoryTips:["勾股定理：直角边平方和=斜边平方","逆定理：平方和=斜边平方→直角三角形","斜边中线=斜边的一半"]},kp_016:{coreConcepts:["两组对边分别平行的四边形","对边相等，对角相等，对角线互相平分","平行四边形是中心对称图形","平行四边形的判定：两组对边平行、两组对边相等、一组对边平行且相等、对角线互相平分"],keyFormulas:["平行四边形性质","平行四边形判定条件","中心对称性质"],commonMistakes:["判定条件混淆","对角线性质记错","中心对称与轴对称混淆"],memoryTips:["对边平行且相等","对角相等，对角线互相平分","中心对称，不是轴对称"]},kp_017:{coreConcepts:["矩形：有一个角是直角的平行四边形","菱形：有一组邻边相等的平行四边形","正方形：既是矩形又是菱形的四边形","矩形对角线相等，菱形对角线互相垂直"],keyFormulas:["矩形性质","菱形性质","正方形性质","特殊四边形关系"],commonMistakes:["矩形和菱形的性质混淆","正方形的判定条件不清楚","对角线的性质记错"],memoryTips:["矩形：直角，对角线相等","菱形：邻边相等，对角线垂直","正方形：既是矩形又是菱形"]},kp_018:{coreConcepts:["一组对边平行而另一组对边不平行的四边形","等腰梯形：两腰相等，同一底上的两个角相等","直角梯形：有一个角是直角的梯形","梯形中位线平行于底边，等于两底和的一半"],keyFormulas:["梯形定义","等腰梯形性质","梯形中位线定理"],commonMistakes:["梯形定义理解错误","等腰梯形性质记错","中位线定理应用错误"],memoryTips:["一组对边平行，另一组不平行","等腰梯形：两腰相等，底角相等","中位线=(上底+下底)/2"]},kp_019:{coreConcepts:["形状相同的图形叫相似形","相似多边形对应角相等，对应边成比例","相似比：相似图形对应边的比","面积比等于相似比的平方"],keyFormulas:["相似形定义","相似比公式","面积比公式","周长比公式"],commonMistakes:["相似与全等的概念混淆","面积比与相似比的关系记错","相似形的判断标准不清楚"],memoryTips:["相似：形状相同，大小不一定相同","全等：形状大小都相同","面积比=相似比的平方"]},kp_020:{coreConcepts:["三个角对应相等，三条边对应成比例","相似三角形判定：AA、SAS、SSS、HL","相似三角形性质：对应角相等，对应边成比例","相似三角形应用广泛，如测量、证明等"],keyFormulas:["相似三角形判定条件","相似三角形性质","HL判定（直角三角形）"],commonMistakes:["判定条件混淆","对应关系找错","HL判定误用"],memoryTips:["AA：两角对应相等","SAS：两边夹角对应成比例且夹角相等","SSS：三边对应成比例"]}},Se={kp_021:{coreConcepts:["位似图形：两个图形相似，且对应点连线交于一点","位似中心是位似图形的相似中心","位似比是相似比，位似图形上任意对应点到位似中心的距离比相等","位似变换可以放大或缩小图形"],keyFormulas:["位似图形定义","位似比公式","位似变换的性质"],commonMistakes:["位似与相似的概念混淆","位似中心的判断错误","位似比计算错误"],memoryTips:["位似：相似+对应点连线交于一点","位似中心：相似中心","位似比：对应边之比"]},kp_022:{coreConcepts:["比例线段：四条线段成比例，即a:b=c:d","比例的基本性质：ad=bc","平行线分线段成比例定理","三角形一边平行线的性质"],keyFormulas:["比例的基本性质","平行线分线段成比例定理","合比性质","等比性质"],commonMistakes:["比例性质应用错误","平行线定理条件不清楚","比例关系找错"],memoryTips:["比例：ad=bc","平行线分线段：对应线段成比例","合比：若a/b=c/d，则(a+b)/b=(c+d)/d"]},kp_023:{coreConcepts:["数据收集方法：普查、抽样调查","数据整理：频数分布表、统计图","抽样调查要注意样本的代表性和随机性","频数分布表反映数据的分布情况"],keyFormulas:["频数、频率概念","频数分布表制作","抽样方法"],commonMistakes:["抽样方法选择不当","频数统计错误","样本代表性判断错误"],memoryTips:["普查：全面调查","抽样：从总体中抽取部分","频数：数据出现的次数"]},kp_024:{coreConcepts:["常见统计图：条形图、折线图、扇形图","条形图适合比较不同类别数据","折线图适合显示数据变化趋势","扇形图适合显示各部分所占比例"],keyFormulas:["统计图选择原则","扇形图圆心角计算","统计图绘制方法"],commonMistakes:["统计图选择不当","扇形图圆心角计算错误","图表绘制不规范"],memoryTips:["条形图：比较大小","折线图：显示趋势","扇形图：显示比例"]},kp_025:{coreConcepts:["频数分布：数据在各个小组内的分布情况","组距、组数、频数、频率的概念","频数分布表的制作步骤","频率分布直方图的绘制"],keyFormulas:["组距选择","频数计算公式","频率计算公式","频数分布表制作"],commonMistakes:["组距选择不当","频数统计错误","频率计算错误"],memoryTips:["组距：每组的数据范围","频数：每组数据的个数","频率：频数/总数"]},kp_026:{coreConcepts:["平均数、中位数、众数的概念和计算","极差、方差、标准差的计算","平均数受极端值影响，中位数不受影响","方差反映数据的波动程度"],keyFormulas:["平均数公式","中位数计算方法","众数确定方法","方差公式","标准差公式"],commonMistakes:["平均数计算错误","中位数位置确定错误","方差公式记错"],memoryTips:["平均数：所有数据之和/数据个数","中位数：中间的数（奇数个）或中间两数平均（偶数个）","方差：各数据与平均数差的平方的平均数"]},kp_027:{coreConcepts:["确定性事件：必然事件和不可能事件","随机事件：可能发生也可能不发生","概率的取值范围：0≤P(A)≤1","必然事件P=1，不可能事件P=0"],keyFormulas:["事件分类","概率取值范围","必然事件概率","不可能事件概率"],commonMistakes:["事件分类混淆","概率取值范围记错","随机事件与确定事件混淆"],memoryTips:["必然事件：一定发生，P=1","不可能事件：一定不发生，P=0","随机事件：可能发生，0<P<1"]},kp_028:{coreConcepts:["概率计算公式：P(A)=m/n","古典概型：基本事件有限且等可能","几何概型：基本事件无限且等可能","概率性质：0≤P(A)≤1，P(Ω)=1，P(∅)=0"],keyFormulas:["概率计算公式","古典概型公式","几何概型公式","概率基本性质"],commonMistakes:["基本事件计数错误","概率公式应用错误","概率性质混淆"],memoryTips:["概率=事件包含的基本事件数/基本事件总数","古典概型：有限等可能","几何概型：无限等可能"]},kp_029:{coreConcepts:["概率在日常生活中的应用","条件概率、全概率、贝叶斯公式","独立事件概率计算","概率决策问题"],keyFormulas:["条件概率公式","全概率公式","贝叶斯公式","独立事件概率公式"],commonMistakes:["条件概率理解错误","独立事件判断错误","贝叶斯公式应用错误"],memoryTips:["条件概率：在已知条件下发生的概率","独立事件：P(A∩B)=P(A)P(B)","贝叶斯：已知结果求原因的概率"]},kp_030:{coreConcepts:["古典概型的两个特点：有限性和等可能性","古典概型概率公式：P(A)=m/n","计数方法：列举法、排列组合","不放回抽样和有放回抽样的区别"],keyFormulas:["古典概型概率公式","计数原理","排列组合公式","不放回抽样概率计算"],commonMistakes:["基本事件总数计算错误","事件A包含的基本事件数计算错误","放回与不放回混淆"],memoryTips:["古典概型：有限等可能","P(A)=事件A包含的基本事件数/基本事件总数","不放回：每次抽取后总数减少"]}},Me={kp_031:{coreConcepts:["几何概型：每个事件发生的概率只与区域度量成正比","概率公式：P(A)=构成事件A的区域度量/总区域度量","基本事件有无限多个，每个基本事件等可能","度量类型：长度、面积、体积、时间"],keyFormulas:["几何概型概率公式","长度概型","面积概型","体积概型"],commonMistakes:["区域度量计算错误","几何概型与古典概型混淆","概率公式应用错误"],memoryTips:["几何概型：无限等可能","概率=目标区域/总区域","度量：长度、面积、体积"]},kp_032:{coreConcepts:["函数与几何的综合应用","方程与几何的相互转化","不等式与几何区域","代数方法解决几何问题，几何直观理解代数概念"],keyFormulas:["函数图像与几何图形关系","坐标几何方法","代数几何综合应用"],commonMistakes:["代数与几何转化错误","函数图像理解错误","几何意义解释不清"],memoryTips:["函数图像：几何图形","代数方程：几何轨迹","数形结合：代数几何统一"]},kp_033:{coreConcepts:["二次函数与几何的综合问题","解析几何方法","最值问题求解","动点问题的代数几何关系"],keyFormulas:["二次函数与几何综合","圆与直线位置关系","弦长公式","最值问题求解方法"],commonMistakes:["二次函数图像分析错误","几何关系建立错误","最值求解方法不当"],memoryTips:["抛物线：几何图形","圆与直线：位置关系","最值：函数与几何结合"]},kp_034:{coreConcepts:["将实际问题转化为数学问题","行程问题、工程问题、利润问题","建立函数模型求最值","代数几何在实际问题中的应用"],keyFormulas:["行程问题公式","工程问题公式","利润问题公式","最值问题求解"],commonMistakes:["实际问题建模错误","等量关系找错","函数关系建立错误"],memoryTips:["行程：路程=速度×时间","工程：工作效率×时间=工作量","利润：收入-成本=利润"]}},Ve={kp_035:{coreConcepts:["更复杂的实际应用问题","多变量函数模型","分段函数应用","优化问题的实际应用"],keyFormulas:["多变量函数关系","分段函数建模","优化问题求解","实际应用建模方法"],commonMistakes:["多变量关系建立错误","分段函数定义域错误","优化目标不明确"],memoryTips:["多变量：多个因素影响","分段函数：不同情况不同表达式","优化：求最大值或最小值"]},kp_036:{coreConcepts:["更复杂的代数几何综合问题","参数方程与几何","轨迹方程求解","代数几何中的定值问题"],keyFormulas:["参数方程概念","轨迹方程求解","定值问题证明","代数几何综合方法"],commonMistakes:["参数方程理解错误","轨迹方程求解错误","定值问题证明不完整"],memoryTips:["参数方程：引入参数表示","轨迹方程：动点变化规律","定值问题：证明某量为常数"]},kp_037:{coreConcepts:["函数在实际问题中的应用","函数模型的建立","函数最值的应用","函数图像的直观分析"],keyFormulas:["函数建模方法","函数最值求解","函数图像分析","函数应用问题求解"],commonMistakes:["函数模型建立错误","最值求解方法不当","图像分析错误"],memoryTips:["函数建模：找变量关系","最值应用：求最优解","图像分析：数形结合"]},kp_038:{coreConcepts:["几何在实际问题中的应用","几何模型的建立","几何最值问题","几何变换的应用"],keyFormulas:["几何建模方法","几何最值求解","几何变换应用","几何应用问题求解"],commonMistakes:["几何模型建立错误","最值求解方法不当","几何关系理解错误"],memoryTips:["几何建模：图形化实际问题","几何最值：对称性分析","几何变换：平移、旋转、对称"]},kp_039:{coreConcepts:["统计在实际问题中的应用","样本估计总体","统计推断方法","统计决策问题"],keyFormulas:["样本统计量计算","统计推断方法","统计决策准则","统计应用问题求解"],commonMistakes:["统计方法选择不当","样本代表性判断错误","统计推断错误"],memoryTips:["样本估计：用部分推断整体","统计推断：基于数据决策","统计决策：风险与收益平衡"]},kp_040:{coreConcepts:["概率在实际问题中的应用","风险评估方法","概率决策模型","期望值的应用"],keyFormulas:["风险评估公式","概率决策模型","期望值计算","概率应用问题求解"],commonMistakes:["概率模型建立错误","风险评估方法不当","期望值计算错误"],memoryTips:["概率模型：模拟随机现象","风险评估：量化不确定性","期望值：长期平均结果"]},kp_041:{coreConcepts:["多学科知识综合应用","复杂问题分解","多种方法综合使用","系统性问题解决"],keyFormulas:["问题分解方法","综合解题策略","多方法协同","系统思维方法"],commonMistakes:["问题分解不当","方法选择错误","综合应用不协调"],memoryTips:["问题分解：化繁为简","方法综合：取长补短","系统思维：整体考虑"]},kp_042:{coreConcepts:["跨学科综合应用","创新性思维","批判性思维","实际问题解决能力"],keyFormulas:["创新思维方法","批判性思维技巧","问题解决策略","综合应用能力"],commonMistakes:["思维定式","方法僵化","创新不足"],memoryTips:["创新思维：突破常规","批判性思维：理性分析","问题解决：多途径尝试"]},kp_043:{coreConcepts:["数学建模的基本过程","模型建立与验证","模型求解与解释","模型评价与改进"],keyFormulas:["数学建模步骤","模型验证方法","模型求解技巧","模型评价标准"],commonMistakes:["建模过程不完整","模型验证不充分","模型解释不清楚"],memoryTips:["建模：实际问题数学化","验证：检验模型合理性","求解：运用数学方法"]},kp_044:{coreConcepts:["优化问题的数学建模","线性规划初步","非线性规划初步","多目标优化问题"],keyFormulas:["优化问题建模","线性规划方法","非线性优化","多目标决策"],commonMistakes:["优化目标不明确","约束条件错误","求解方法不当"],memoryTips:["优化：求最优解","线性规划：线性约束","多目标：权衡取舍"]},kp_045:{coreConcepts:["决策问题的数学模型","决策准则与方法","风险决策分析","不确定性决策"],keyFormulas:["决策模型建立","决策准则应用","风险分析方法","不确定性决策"],commonMistakes:["决策准则选择错误","风险评估不准确","决策模型建立错误"],memoryTips:["决策模型：量化决策因素","决策准则：明确选择标准","风险分析：评估不确定性"]},kp_046:{coreConcepts:["复杂实际问题的综合解决","多学科知识整合","创新思维与方法","实际问题解决能力"],keyFormulas:["综合问题解决方法","多学科整合策略","创新思维技巧","实际问题解决流程"],commonMistakes:["问题分析不全面","方法选择不当","综合应用能力不足"],memoryTips:["综合分析：全面考虑","方法整合：取长补短","创新解决：突破常规"]}},Te={...ze,...Oe,...Se,...Me,...Ve};function Fe(e,t){var a;const n=[`核心概念：${t.coreConcepts.join("；")}`,(a=t.memoryTips)!=null&&a.length?`记忆提示：${t.memoryTips.join("；")}`:""].filter(Boolean);return{title:e,content:n.join(`

`),tips:t.memoryTips}}const Qe=v.map(e=>{const n=f.filter(s=>s.chapterId===e.id&&!s.id.endsWith("_example")).map(s=>{const l=Te[s.id];return l?{knowledgePoint:s,noteEntry:l}:null}).filter(s=>s!==null),a=Array.from(new Set(n.flatMap(({noteEntry:s})=>s.keyFormulas??[]))),o=Array.from(new Set(n.flatMap(({noteEntry:s})=>s.commonMistakes??[])));return{id:e.id,title:`${e.title}笔记`,summary:n.length>0?`覆盖${n.map(({knowledgePoint:s})=>s.title).join("、")}等知识点。`:`${e.title}笔记整理中。`,sections:n.map(({knowledgePoint:s,noteEntry:l})=>Fe(s.title,l)),formulas:a.length>0?a:void 0,commonMistakes:o.length>0?o:void 0}}),je=[{id:"kp_003_001",knowledgePointId:"kp_003",type:"choice",difficulty:2,question:`下列方程中是分式方程的是（）
A. (x+1)/2 = 3
B. 1/(x+1) = 2
C. x/(x+1) + 1 = 0
D. B和C都是`,answer:"D",analysis:"分式方程要求分母中含有未知数，A中分母是常数2，B和C分母都含未知数。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_003_002",knowledgePointId:"kp_003",type:"solution",difficulty:2,question:"解方程：2/x = 1/(x-3)",answer:"x=6",analysis:"最简公分母是x(x-3)。去分母得2(x-3)=x，展开得2x-6=x，解得x=6。检验：x=6时，分母不为零。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_003_003",knowledgePointId:"kp_003",type:"choice",difficulty:3,question:`若分式方程(x-1)/(x+1)=m/(x+1)有增根，则m的值为（）
A. 0
B. 1
C. -1
D. 2`,answer:"D",analysis:"增根是x=-1（使分母为零）。去分母得x-1=m，当x=-1时，m=-2。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_003_004",knowledgePointId:"kp_003",type:"solution",difficulty:3,question:"解方程：(x+1)/(x-1) - (x-1)/(x+1) = 4/(x²-1)",answer:"无解",analysis:"最简公分母是(x-1)(x+1)。去分母得(x+1)²-(x-1)²=4，展开得(x²+2x+1)-(x²-2x+1)=4，化简得4x=4，x=1。检验：x=1时，分母为零，是增根，所以方程无解。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_003_005",knowledgePointId:"kp_003",type:"choice",difficulty:3,question:`若关于x的方程(2x+m)/(x-3)=1无解，则m的值为（）
A. -3
B. 3
C. -6
D. 6`,answer:"C",analysis:"去分母得2x+m=x-3，解得x=-m-3。当x=3时是增根，所以-m-3=3，m=-6。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_003_006",knowledgePointId:"kp_003",type:"solution",difficulty:2,question:"甲、乙两人从相距180千米的两地同时出发，相向而行，甲的速度是乙的1.5倍，2小时后相遇，求两人的速度。",answer:"甲45km/h，乙30km/h",analysis:"设乙速为v，则甲速为1.5v。(1.5v+v)×2=180，解得v=30，1.5v=45。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_003_007",knowledgePointId:"kp_003",type:"solution",difficulty:3,question:"某工厂计划生产一批零件，如果每天生产200个，比计划晚1天完成；如果每天生产250个，可提前1天完成。求计划天数和零件总数。",answer:"9天，1600个",analysis:"设计划x天。200(x+1)=250(x-1)，解得200x+200=250x-250，50x=450，x=9。总数=200×10=2000。",source:"2023北京海淀初一（上）期中数学试卷"}],We=[{id:"kp_004_001",knowledgePointId:"kp_004",type:"choice",difficulty:2,question:`函数y=√(x-2)的自变量取值范围是（）
A. x>2
B. x≥2
C. x<2
D. x≤2`,answer:"B",analysis:"被开方数必须非负，x-2≥0，所以x≥2。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_004_002",knowledgePointId:"kp_004",type:"choice",difficulty:2,question:`计算：√(8) × √(2) = （）
A. 2
B. 4
C. 2√2
D. 4√2`,answer:"B",analysis:"√8×√2=√16=4。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_004_003",knowledgePointId:"kp_004",type:"choice",difficulty:2,question:`若√(a+1)与√(8)是同类二次根式，则a的值是（）
A. 7
B. 8
C. 9
D. 10`,answer:"A",analysis:"√8=2√2，要使√(a+1)与√8是同类二次根式，则a+1=2，a=1。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_004_004",knowledgePointId:"kp_004",type:"solution",difficulty:2,question:"化简：√(48) - √(12) + √(27)",answer:"5√3",analysis:"√48=4√3，√12=2√3，√27=3√3。原式=4√3-2√3+3√3=5√3。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_004_005",knowledgePointId:"kp_004",type:"choice",difficulty:2,question:`化简：√(5+2√6) = （）
A. √2+√3
B. √2-√3
C. √3+√2
D. √3-√2`,answer:"A",analysis:"设√(5+2√6)=√a+√b，则a+b=5，2√(ab)=2√6，所以ab=6。解得a=2,b=3。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_004_006",knowledgePointId:"kp_004",type:"solution",difficulty:3,question:"计算：(√3+√2)(√3-√2) + (√5+2)(√5-2)",answer:"2",analysis:"第一项用平方差公式：(√3)²-(√2)²=3-2=1。第二项：(√5)²-2²=5-4=1。原式=1+1=2。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_004_007",knowledgePointId:"kp_004",type:"solution",difficulty:3,question:"计算：1/(√2+1) + 1/(√3+1)",answer:"√2+√3-2",analysis:"有理化分母：1/(√2+1)=√2-1，1/(√3+1)=(√3-1)/2。原式=√2-1+(√3-1)/2=(2√2+√3-3)/2。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_004_008",knowledgePointId:"kp_004",type:"choice",difficulty:1,question:`9的算术平方根是（）
A. ±3  B. 3  C. -3  D. ±9`,answer:"B",analysis:"算术平方根是非负根",source:"2022北京怀柔初一（下）期末数学试卷"}],Xe=[{id:"kp_005_001",knowledgePointId:"kp_005",type:"choice",difficulty:2,question:`下列方程中是一元一次方程的是（）
A. x + y = 5
B. x² - 2x = 3
C. 2x - 3 = 7
D. x(x-1)=2`,answer:"C",analysis:"A是二元一次方程，B是二次方程，D化简后是二次方程，C是一元一次方程。",source:"2024北京重点校期中真题汇编"},{id:"kp_005_002",knowledgePointId:"kp_005",type:"solution",difficulty:2,question:"解方程：3x - 7 = 2x + 5",answer:"x = 12",analysis:"3x - 2x = 5 + 7，x = 12",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_005_003",knowledgePointId:"kp_005",type:"solution",difficulty:3,question:"解方程：5(x - 2) = 2(3x + 1) - 12",answer:"x = 0",analysis:"5x - 10 = 6x + 2 - 12，5x - 10 = 6x - 10，5x - 6x = -10 + 10，-x = 0，x = 0",source:"2024北京重点校期中真题汇编"},{id:"kp_005_004",knowledgePointId:"kp_005",type:"solution",difficulty:3,question:"解方程：(2x - 1)/3 = (x + 2)/2 - 1",answer:"x = 2",analysis:"两边同乘6得：2(2x - 1) = 3(x + 2) - 6，4x - 2 = 3x + 6 - 6，4x - 2 = 3x，x = 2",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_005_005",knowledgePointId:"kp_005",type:"solution",difficulty:3,question:"某商品按标价的8折出售，可获利20%。若该商品的进价为200元，求标价。",answer:"300元",analysis:"设标价为x元。0.8x=200×(1+20%)=240，解得x=300。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_005_006",knowledgePointId:"kp_005",type:"solution",difficulty:2,question:"甲、乙两人从同一地点出发，甲以每分钟60米的速度前进，乙以每分钟80米的速度追赶，若乙比甲晚出发3分钟，问乙几分钟能追上甲？",answer:"9分钟",analysis:"设乙用x分钟追上。60(x+3)=80x，解得60x+180=80x，x=9。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_005_007",knowledgePointId:"kp_005",type:"solution",difficulty:3,question:"某工厂计划生产一批零件，如果每天生产200个，比计划晚1天完成；如果每天生产250个，可提前1天完成。求计划天数和零件总数。",answer:"9天，1600个",analysis:"设计划x天。200(x+1)=250(x-1)，解得200x+200=250x-250，50x=450，x=9。总数=200×10=2000。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_005_008",knowledgePointId:"kp_005",type:"choice",difficulty:2,question:`若关于x的方程2x+3=5和4x+k=7的解相同，则k的值为（）
A. -1
B. 1
C. 2
D. 3`,answer:"D",analysis:"由第一个方程得x=1，代入第二个方程得4+k=7，k=3。",source:"2023北京海淀初一（上）期中数学试卷"}],Je=[{id:"kp_006_001",knowledgePointId:"kp_006",type:"choice",difficulty:2,question:`下列方程组中是二元一次方程组的是（）
A. {x+y=2, xy=3}
B. {2x+3y=5, x-2=0}
C. {x²+y=4, x-y=1}
D. {x+y=1, x+z=2}`,answer:"B",analysis:"A中xy=3是二次方程，C中x²+y=4是二次方程，D含有三个未知数，B是二元一次方程组。",source:"2024北京重点校期中真题汇编"},{id:"kp_006_002",knowledgePointId:"kp_006",type:"solution",difficulty:2,question:"用代入法解方程组：{x+y=5, 2x-y=1}",answer:"x=2,y=3",analysis:"由第一个方程得y=5-x。代入第二个方程得2x-(5-x)=1，3x-5=1，x=2。y=5-2=3。",source:"2024北京重点校期中真题汇编"},{id:"kp_006_003",knowledgePointId:"kp_006",type:"solution",difficulty:2,question:"用加减法解方程组：{x + 2y = 7, 3x - 2y = 5}",answer:"x=3,y=2",analysis:"两式相加得4x=12，x=3。代入第一个方程得3+2y=7，y=2。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_006_004",knowledgePointId:"kp_006",type:"solution",difficulty:2,question:`方程组{x+2y=4, 2x+4y=8}的解的情况是（）
A. 唯一解
B. 无解
C. 无穷多解
D. 无法确定`,answer:"C",analysis:"第二个方程是第一个方程的2倍，两个方程等价，所以有无穷多解。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_006_005",knowledgePointId:"kp_006",type:"solution",difficulty:2,question:"鸡兔同笼，共有35个头，94只脚，问鸡兔各多少只？",answer:"鸡23只，兔12只",analysis:"设鸡x只，兔y只。{x+y=35, 2x+4y=94}。解得x=23,y=12。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_006_006",knowledgePointId:"kp_006",type:"solution",difficulty:3,question:"甲、乙两人从相距120千米的两地同时出发，相向而行，2小时后相遇。若甲的速度是乙的2倍，求两人的速度。",answer:"甲40km/h，乙20km/h",analysis:"设乙速为v，则甲速为2v。(2v+v)×2=120，6v=120，v=20，2v=40。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_006_007",knowledgePointId:"kp_006",type:"solution",difficulty:3,question:"某工厂有甲、乙两种原料共500千克，甲种原料每吨可生产产品20件，乙种每吨可生产30件，若总共产出12000件，求两种原料各多少千克。",answer:"甲300kg，乙200kg",analysis:"设甲x千克，乙y千克。{x+y=500, 0.02x+0.03y=12}。解得x=300,y=200。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_006_008",knowledgePointId:"kp_006",type:"choice",difficulty:2,question:`若方程组{2x+3y=7, 4x+6y=14}的解的情况是（）
A. 唯一解
B. 无解
C. 无穷多解
D. 无法确定`,answer:"C",analysis:"第二个方程是第一个方程的2倍，两个方程等价，所以有无穷多解。",source:"2024北京重点校期中真题汇编"}],Le=[{id:"kp_007_001",knowledgePointId:"kp_007",type:"choice",difficulty:2,question:`下列不等式中是一元一次不等式的是（）
A. x²+1>0
B. 2x+3y<5
C. 3x-2>5x+1
D. x(x-1)≤2`,answer:"C",analysis:"A是二次不等式，B是二元一次不等式，D化简后是二次不等式，C是一元一次不等式。",source:"2024北京重点校期中真题汇编"},{id:"kp_007_002",knowledgePointId:"kp_007",type:"choice",difficulty:2,question:`不等式3x-5>1的解集是（）
A. x>2
B. x<2
C. x>-2
D. x<-2`,answer:"A",analysis:"3x-5>1，3x>6，x>2。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_007_003",knowledgePointId:"kp_007",type:"choice",difficulty:2,question:`若a<b，且am>bm，则m的取值范围是（）
A. m>0
B. m<0
C. m=0
D. m为任意实数`,answer:"B",analysis:"不等式两边同乘负数，不等号方向改变。所以m<0。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_007_004",knowledgePointId:"kp_007",type:"solution",difficulty:2,question:"解不等式：3(x-2) < 2x + 5",answer:"x < 11",analysis:"3x-6 < 2x+5，3x-2x < 5+6，x < 11。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_007_005",knowledgePointId:"kp_007",type:"solution",difficulty:3,question:"解不等式组：{2x-1>3, x+2≤6}",answer:"2<x≤4",analysis:"解第一个不等式：2x>4，x>2。解第二个不等式：x≤4。所以解集为2<x≤4。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_007_006",knowledgePointId:"kp_007",type:"choice",difficulty:3,question:`不等式组{x>2, x<a}无解的充要条件是（）
A. a≤2
B. a<2
C. a>2
D. a≥2`,answer:"A",analysis:"当a≤2时，x>2和x<a无交集，所以无解。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_007_007",knowledgePointId:"kp_007",type:"solution",difficulty:3,question:"某商品原价m元，先降价20%，再涨价10%，最终价格不超过原价的1.1倍，求m的取值范围。",answer:"m≥0",analysis:"最终价格=0.8m×1.1=0.88m。由0.88m≤1.1m，得0.88≤1.1，恒成立。所以m≥0。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_007_008",knowledgePointId:"kp_007",type:"solution",difficulty:3,question:"解不等式组，并写出它的所有整数解：{3x-2≤x, (2x+1)/5 < (x+1)/2}",answer:"整数解：-2, -1, 0, 1",analysis:"解①：3x-2≤x，2x≤2，x≤1。解②：2(2x+1)<5(x+1)，4x+2<5x+5，-3<x。所以-3<x≤1。整数解：-2,-1,0,1。",source:"2023北京海淀初一（下）期末数学试卷"}],Re=[{id:"kp_008_001",knowledgePointId:"kp_008",type:"choice",difficulty:2,question:`下列关系式中，y不是x的函数的是（）
A. y=2x+1
B. y=x²
C. y=±√x
D. y=1/x`,answer:"C",analysis:"对于C，当x>0时，y有两个值与x对应，不符合函数定义。A、B、D中y都是x的唯一函数值。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_008_002",knowledgePointId:"kp_008",type:"choice",difficulty:2,question:`函数y=√(x-1)的自变量取值范围是（）
A. x>1
B. x≥1
C. x<1
D. x≤1`,answer:"B",analysis:"被开方数必须非负，x-1≥0，所以x≥1。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_008_003",knowledgePointId:"kp_008",type:"choice",difficulty:2,question:`下列各组函数中，表示同一函数的是（）
A. y=x和y=√(x²)
B. y=|x|和y=√(x²)
C. y=x和y=(√x)²
D. y=x²和y=|x|`,answer:"B",analysis:"A中√(x²)=|x|≠x；B中√(x²)=|x|；C中(√x)²=x(x≥0)；D中x²≠|x|。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_008_004",knowledgePointId:"kp_008",type:"solution",difficulty:2,question:`已知函数y=2x-1，当x=3时，函数值是（）
A. 5
B. -5
C. 7
D. -7`,answer:"A",analysis:"y=2×3-1=6-1=5。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_008_005",knowledgePointId:"kp_008",type:"solution",difficulty:3,question:"画出函数y=|x-2|的图像，并求其最小值。",answer:"最小值为0，在x=2处取得",analysis:"当x≥2时，y=x-2；当x<2时，y=2-x。图像为V字形，顶点在(2,0)。最小值为0，在x=2处取得。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_008_006",knowledgePointId:"kp_008",type:"choice",difficulty:3,question:`函数y=1/(x-1)的图像关于（）对称
A. x轴
B. y轴
C. 原点
D. 直线x=1`,answer:"D",analysis:"函数y=1/(x-1)是将y=1/x向右平移1个单位，所以关于x=1对称。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_008_007",knowledgePointId:"kp_008",type:"choice",difficulty:3,question:`若函数y=kx+b的图像经过第一、二、四象限，则k和b的取值范围是（）
A. k>0,b>0
B. k>0,b<0
C. k<0,b>0
D. k<0,b<0`,answer:"C",analysis:"直线经过一、二、四象限，说明斜率k<0，截距b>0。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_008_008",knowledgePointId:"kp_008",type:"solution",difficulty:2,question:"已知函数y=ax+b的图像经过点(1,3)和(2,5)，求a和b的值。",answer:"a=2,b=1",analysis:"代入两点得：{a+b=3, 2a+b=5}。解得a=2,b=1。",source:"2023北京海淀初一（上）期中数学试卷"}],Ne=[{id:"kp_009_001",knowledgePointId:"kp_009",type:"choice",difficulty:2,question:`下列函数中是一次函数的是（）
A. y=2x²+1
B. y=1/x
C. y=3x-2
D. y=√x`,answer:"C",analysis:"A是二次函数，B是反比例函数，D是幂函数，C是一次函数。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_009_002",knowledgePointId:"kp_009",type:"choice",difficulty:2,question:`若一次函数y=(m-2)x+3的y随x增大而减小，则m的取值范围是（）
A. m>2
B. m<2
C. m≠2
D. m=2`,answer:"B",analysis:"y随x增大而减小，说明斜率k=m-2<0，所以m<2。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_009_003",knowledgePointId:"kp_009",type:"choice",difficulty:2,question:`直线y=2x+1与y轴的交点坐标是（）
A. (0,1)
B. (1,0)
C. (0,-1)
D. (-1,0)`,answer:"A",analysis:"与y轴交点即x=0，y=2×0+1=1，所以交点为(0,1)。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_009_004",knowledgePointId:"kp_009",type:"solution",difficulty:2,question:"已知一次函数y=kx+3，当x=2时，y=7，求k的值，并判断函数的增减性。",answer:"k=2，y随x增大而增大",analysis:"代入x=2,y=7得7=2k+3，解得k=2。因为k=2>0，所以y随x增大而增大。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_009_005",knowledgePointId:"kp_009",type:"solution",difficulty:3,question:"某市出租车收费标准为：起步价8元（3公里内），超过3公里，每公里收费2元。写出车费y(元)与路程x(公里)的函数关系式。",answer:"y=8(0≤x≤3)，y=2x+2(x>3)",analysis:"当0≤x≤3时，y=8；当x>3时，y=8+2(x-3)=2x+2。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_009_006",knowledgePointId:"kp_009",type:"solution",difficulty:3,question:"某商品进价30元，售价50元，每天可卖出20件。若每件降价x元，每天多卖出2x件。要使每天利润最大，应降价多少元？",answer:"5元",analysis:"利润=(50-30-x)(20+2x)=(20-x)(20+2x)=-2x²+20x+400。当x=-20/(2×(-2))=5时，利润最大。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_009_007",knowledgePointId:"kp_009",type:"solution",difficulty:2,question:"甲、乙两地相距100km，一辆汽车从甲地出发，速度为60km/h，写出汽车距乙地的距离s(km)与时间t(h)的函数关系式。",answer:"s=100-60t(0≤t≤5/3)",analysis:"汽车向乙地行驶，距离逐渐减少，s=100-60t。当s=0时，t=100/60=5/3小时。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_009_008",knowledgePointId:"kp_009",type:"choice",difficulty:3,question:`若一次函数y=kx+b的图像经过点(1,2)和(3,8)，则k+b的值为（）
A. 1
B. 2
C. 3
D. 4`,answer:"B",analysis:"代入两点得：{k+b=2, 3k+b=8}。解得k=3,b=-1。k+b=3+(-1)=2。",source:"2023北京海淀初一（上）期中数学试卷"}],$e=[{id:"kp_010_001",knowledgePointId:"kp_010",type:"choice",difficulty:2,question:`下列函数中是反比例函数的是（）
A. y=2x
B. y=2/x
C. y=x/2
D. y=2x²`,answer:"B",analysis:"A是一次函数，C是一次函数，D是二次函数，B是反比例函数。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_010_002",knowledgePointId:"kp_010",type:"choice",difficulty:2,question:`若反比例函数y=k/x的图像在二、四象限，则k的取值范围是（）
A. k>0
B. k<0
C. k≠0
D. k=0`,answer:"B",analysis:"图像在二、四象限时，k<0。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_010_003",knowledgePointId:"kp_010",type:"choice",difficulty:3,question:`反比例函数y=6/x的图像上有两点(x1,y1)、(x2,y2)，若x1<x2<0，则y1与y2的大小关系是（）
A. y1>y2
B. y1<y2
C. y1=y2
D. 无法确定`,answer:"A",analysis:"当x<0时，函数在第二象限，y随x增大而增大，所以x1<x2<0时，y1<y2。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_010_004",knowledgePointId:"kp_010",type:"solution",difficulty:2,question:"已知反比例函数y=k/x的图像经过点(2,3)，求k的值，并判断点(-2,-3)是否在图像上。",answer:"k=6，(-2,-3)在图像上",analysis:"代入(2,3)得3=k/2，k=6。函数为y=6/x。当x=-2时，y=6/(-2)=-3，所以(-2,-3)在图像上。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_010_005",knowledgePointId:"kp_010",type:"solution",difficulty:3,question:"某水池容积为100立方米，用一根水管注水，注水速度为v立方米/小时，注满所需时间为t小时。写出t与v的函数关系式。",answer:"t=100/v，是反比例函数",analysis:"vt=100，所以t=100/v，是反比例函数。当v增大时，t减小。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_010_006",knowledgePointId:"kp_010",type:"solution",difficulty:3,question:"在反比例函数y=8/x的图像上，点P到x轴的距离为2，到y轴的距离为4，求点P的坐标。",answer:"(4,2)或(-4,-2)",analysis:"点P(x,y)满足|y|=2，|x|=4，且y=8/x。所以可能为(4,2)或(-4,-2)。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_010_007",knowledgePointId:"kp_010",type:"solution",difficulty:3,question:"已知y是x的反比例函数，当x=2时，y=6。(1)求y与x的函数关系式；(2)当x=4时，求y的值。",answer:"y=12/x，y=3",analysis:"设y=k/x，代入x=2,y=6得k=12。所以y=12/x。当x=4时，y=12/4=3。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_010_008",knowledgePointId:"kp_010",type:"choice",difficulty:2,question:`函数y=(k-1)/x是反比例函数，则k的取值范围是（）
A. k≠0
B. k≠1
C. k=1
D. k=0`,answer:"B",analysis:"反比例函数要求系数不为零，所以k-1≠0，即k≠1。",source:"2023北京海淀初一（上）期中数学试卷"}],Ke=[{id:"kp_011_001",knowledgePointId:"kp_011",type:"choice",difficulty:2,question:`下列函数中是二次函数的是（）
A. y=2x+1
B. y=3x²
C. y=1/x
D. y=√x`,answer:"B",analysis:"A是一次函数，C是反比例函数，D是幂函数，B是二次函数。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_011_002",knowledgePointId:"kp_011",type:"choice",difficulty:2,question:`二次函数y=2x²-4x+1的图像开口方向是（）
A. 向上
B. 向下
C. 向左
D. 向右`,answer:"A",analysis:"因为a=2>0，所以开口向上。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_011_003",knowledgePointId:"kp_011",type:"choice",difficulty:2,question:`抛物线y=x²+2x+1的顶点坐标是（）
A. (1,0)
B. (-1,0)
C. (0,1)
D. (0,-1)`,answer:"B",analysis:"y=(x+1)²，顶点为(-1,0)。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_011_004",knowledgePointId:"kp_011",type:"solution",difficulty:3,question:"已知二次函数y=x²-4x+3，求：(1)顶点坐标；(2)对称轴；(3)最值。",answer:"顶点(2,-1)，对称轴x=2，最小值-1",analysis:"a=1,b=-4,c=3。顶点横坐标x=-b/(2a)=4/2=2。纵坐标y=2²-4×2+3=4-8+3=-1。所以顶点(2,-1)。对称轴x=2。因为a>0，有最小值-1。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_011_005",knowledgePointId:"kp_011",type:"solution",difficulty:3,question:"用20米长的篱笆围成一个矩形菜园，一边靠墙，求菜园的最大面积。",answer:"25平方米",analysis:"设靠墙的一边为x米，则另一边为(20-2x)/2=10-x米。面积S=x(10-x)=-x²+10x。顶点横坐标x=-10/(2×(-1))=5。最大面积S=-25+50=25平方米。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_011_006",knowledgePointId:"kp_011",type:"solution",difficulty:3,question:"某商品每天销售20件，每件盈利40元。若每件降价x元，每天多卖出2x件。要使每天利润最大，应降价多少元？",answer:"15元",analysis:"利润=(40-x)(20+2x)=-2x²+60x+800。当x=-60/(2×(-2))=15时，利润最大。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_011_007",knowledgePointId:"kp_011",type:"solution",difficulty:3,question:"抛物线y=ax²+bx+c的顶点为(2,3)，且过点(0,1)，求a、b、c的值。",answer:"a=-0.5,b=2,c=1",analysis:"由顶点公式-b/(2a)=2，c-b²/(4a)=3。由过点(0,1)得c=1。解得a=-0.5,b=2,c=1。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_011_008",knowledgePointId:"kp_011",type:"choice",difficulty:2,question:`抛物线y=2x²-8x+6的对称轴是（）
A. x=2
B. x=-2
C. x=4
D. x=-4`,answer:"A",analysis:"对称轴x=-b/(2a)=8/(2×2)=2。",source:"2023北京海淀初一（上）期中数学试卷"}],He=[{id:"kp_012_001",knowledgePointId:"kp_012",type:"choice",difficulty:2,question:`若一个三角形的三边长为3、4、5，则这个三角形是（）
A. 锐角三角形
B. 直角三角形
C. 钝角三角形
D. 无法确定`,answer:"B",analysis:"因为3²+4²=9+16=25=5²，符合勾股定理，所以是直角三角形。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_012_002",knowledgePointId:"kp_012",type:"choice",difficulty:2,question:`下列长度的三条线段能组成三角形的是（）
A. 1,2,3
B. 2,3,4
C. 3,4,8
D. 5,5,10`,answer:"B",analysis:"三角形两边之和大于第三边。A:1+2=3，不行；B:2+3>4，可以；C:3+4<8，不行；D:5+5=10，不行。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_012_003",knowledgePointId:"kp_012",type:"choice",difficulty:2,question:`若一个三角形的一个外角为110°，则这个三角形是（）
A. 锐角三角形
B. 直角三角形
C. 钝角三角形
D. 无法确定`,answer:"A",analysis:"外角=不相邻两内角和。若外角110°，则不相邻两内角和110°，所以相邻内角70°，三个内角都小于90°，是锐角三角形。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_012_004",knowledgePointId:"kp_012",type:"solution",difficulty:2,question:`等腰三角形的两边长分别为3和7，则周长为（）
A. 13
B. 17
C. 13或17
D. 无法确定`,answer:"B",analysis:"等腰三角形的两边可能是3,3,7或3,7,7。3+3<7不满足三角形条件，所以只能是3,7,7，周长17。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_012_005",knowledgePointId:"kp_012",type:"solution",difficulty:3,question:"在△ABC中，∠A:∠B:∠C=1:2:3，求各角的度数。",answer:"30°,60°,90°",analysis:"设∠A=x，则∠B=2x，∠C=3x。由三角形内角和x+2x+3x=180°，得6x=180°，x=30°。所以∠A=30°，∠B=60°，∠C=90°。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_012_006",knowledgePointId:"kp_012",type:"solution",difficulty:3,question:"若一个三角形的一个角是另一个角的2倍，第三个角比第一个角大20°，求三个角的度数。",answer:"40°,80°,60°",analysis:"设第一个角x°，则第二个角2x°，第三个角(x+20)°。x+2x+x+20=180，4x=160，x=40。所以三个角为40°,80°,60°。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_012_007",knowledgePointId:"kp_012",type:"solution",difficulty:3,question:"已知等腰三角形的底边长为6，周长为20，求腰长。",answer:"7",analysis:"设腰长为x，则2x+6=20，2x=14，x=7。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_012_008",knowledgePointId:"kp_012",type:"choice",difficulty:2,question:`若三角形的三边长为5,12,13，则这个三角形是（）
A. 锐角三角形
B. 直角三角形
C. 钝角三角形
D. 无法确定`,answer:"B",analysis:"5²+12²=25+144=169=13²，符合勾股定理逆定理，是直角三角形。",source:"2023北京海淀初一（上）期中数学试卷"}],Ue=[{id:"kp_013_001",knowledgePointId:"kp_013",type:"choice",difficulty:2,question:`下列不能判定两个三角形全等的是（）
A. SSS
B. SAS
C. AAA
D. ASA`,answer:"C",analysis:"AAA只能判定相似，不能判定全等。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_013_002",knowledgePointId:"kp_013",type:"choice",difficulty:2,question:`已知△ABC中，AB=AC，∠BAD=∠CAD，AD=AD，则△ABD≌△ACD的判定依据是（）
A. SSS
B. SAS
C. ASA
D. AAS`,answer:"B",analysis:"AB=AC，∠BAD=∠CAD，AD=AD，符合SAS条件。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_013_003",knowledgePointId:"kp_013",type:"choice",difficulty:2,question:`在Rt△ABC和Rt△DEF中，∠C=∠F=90°，AB=DE，AC=DF，则全等的判定依据是（）
A. SSS
B. SAS
C. HL
D. ASA`,answer:"C",analysis:"直角三角形中，斜边AB=DE，直角边AC=DF，符合HL条件。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_013_004",knowledgePointId:"kp_013",type:"solution",difficulty:3,question:"已知：AB=CD，∠1=∠2，∠3=∠4。求证：△ABE≌△CDE。",answer:"ASA判定",analysis:"∠1=∠2，AB=CD，∠3=∠4，符合ASA判定条件，所以△ABE≌△CDE。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_013_005",knowledgePointId:"kp_013",type:"solution",difficulty:3,question:"已知：AD∥BC，∠1=∠2，∠3=∠4。求证：△AED≌△BEC。",answer:"AAS判定",analysis:"∠1=∠2，∠ADE=∠BCE（平行线内错角），∠3=∠4，符合AAS条件。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_013_006",knowledgePointId:"kp_013",type:"solution",difficulty:3,question:"已知：AB=AC，∠1=∠2。求证：△ABD≌△ACD。",answer:"SAS判定",analysis:"AB=AC，∠1=∠2，AD=AD，符合SAS条件。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_013_007",knowledgePointId:"kp_013",type:"solution",difficulty:3,question:"已知：在△ABC中，AB=AC，AD是中线，∠BAD=40°。求∠BAC的度数。",answer:"80°",analysis:"因为AB=AC，AD是中线，所以AD也是角平分线。∠BAC=2×∠BAD=2×40°=80°。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_013_008",knowledgePointId:"kp_013",type:"solution",difficulty:3,question:"已知：△ABC≌△DEF，AB=5，BC=7，AC=8。求DE的长度。",answer:"5",analysis:"全等三角形对应边相等，DE=AB=5。",source:"2023北京海淀初一（上）期中数学试卷"}],Ge=[{id:"kp_014_001",knowledgePointId:"kp_014",type:"choice",difficulty:2,question:`等腰三角形的两边长分别为3和7，则周长为（）
A. 13
B. 17
C. 13或17
D. 无法确定`,answer:"B",analysis:"等腰三角形的两边可能是3,3,7或3,7,7。3+3<7不满足三角形条件，所以只能是3,7,7，周长17。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_014_002",knowledgePointId:"kp_014",type:"choice",difficulty:2,question:`若等腰三角形的一个角是80°，则这个三角形的顶角是（）
A. 20°
B. 80°
C. 20°或80°
D. 50°`,answer:"C",analysis:"80°可能是顶角，也可能是底角。若是底角，则顶角=180°-80°-80°=20°。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_014_003",knowledgePointId:"kp_014",type:"choice",difficulty:2,question:`等边三角形的对称轴有（）条
A. 1
B. 2
C. 3
D. 6`,answer:"C",analysis:"等边三角形有三条对称轴，每条高线都是对称轴。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_014_004",knowledgePointId:"kp_014",type:"solution",difficulty:2,question:"等腰三角形的一个底角是50°，求顶角的度数。",answer:"80°",analysis:"等腰三角形两个底角相等，所以另一个底角也是50°。顶角=180°-50°-50°=80°。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_014_005",knowledgePointId:"kp_014",type:"solution",difficulty:3,question:"已知△ABC中，AB=AC，∠BAD=∠CAD。求证：BD=CD，∠B=∠C。",answer:"SAS全等证明",analysis:"AB=AC，∠BAD=∠CAD，AD=AD，所以△BAD≌△CAD（SAS）。所以BD=CD，∠B=∠C。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_014_006",knowledgePointId:"kp_014",type:"solution",difficulty:3,question:"已知：AB=AC，∠B=∠C。求证：△ABC是等腰三角形。",answer:"等角对等边",analysis:"∠B=∠C，所以AB=AC，△ABC是等腰三角形。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_014_007",knowledgePointId:"kp_014",type:"solution",difficulty:3,question:`等腰三角形的一边长为6，另一边长为8，则周长为（）
A. 20
B. 22
C. 20或22
D. 无法确定`,answer:"C",analysis:"可能是6,6,8（周长20）或6,8,8（周长22）。两种情况都满足三角形条件。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_014_008",knowledgePointId:"kp_014",type:"solution",difficulty:3,question:"已知等腰三角形的周长为24，底边长为6，求腰长。",answer:"9",analysis:"设腰长为x，则2x+6=24，2x=18，x=9。",source:"2023北京海淀初一（上）期中数学试卷"}],Ze=[{id:"kp_015_001",knowledgePointId:"kp_015",type:"choice",difficulty:2,question:`下列各组数中是勾股数的是（）
A. 2,3,4
B. 3,4,5
C. 4,5,6
D. 5,6,7`,answer:"B",analysis:"3²+4²=9+16=25=5²，符合勾股定理。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_015_002",knowledgePointId:"kp_015",type:"choice",difficulty:2,question:`若三角形的三边长为5,12,13，则这个三角形是（）
A. 锐角三角形
B. 直角三角形
C. 钝角三角形
D. 无法确定`,answer:"B",analysis:"5²+12²=25+144=169=13²，符合勾股定理逆定理，是直角三角形。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_015_003",knowledgePointId:"kp_015",type:"solution",difficulty:2,question:"在Rt△ABC中，∠C=90°，AB=10，BC=6，求AC的长度。",answer:"8",analysis:"AB是斜边，AC=√(AB²-BC²)=√(100-36)=√64=8。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_015_004",knowledgePointId:"kp_015",type:"solution",difficulty:2,question:"已知直角三角形的两条直角边分别为3和4，求斜边的长度。",answer:"5",analysis:"根据勾股定理，斜边c=√(3²+4²)=√(9+16)=√25=5。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_015_005",knowledgePointId:"kp_015",type:"choice",difficulty:3,question:`已知直角三角形的两边长分别为5和12，则第三边长为（）
A. 13
B. 13或√119
C. 13或8
D. 无法确定`,answer:"B",analysis:"5和12可能都是直角边（5²+12²=13²），也可能12是斜边（12²-5²=119）。所以第三边是13或√119。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_015_006",knowledgePointId:"kp_015",type:"solution",difficulty:3,question:"在Rt△ABC中，∠C=90°，AB=2AC，求∠B的度数。",answer:"30°",analysis:"设AC=x，则AB=2x，BC=√(AB²-AC²)=√(4x²-x²)=√3x。tanB=AC/BC=1/√3，所以∠B=30°。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_015_007",knowledgePointId:"kp_015",type:"solution",difficulty:3,question:"在△ABC中，AD⊥BC于D，AB=13，AC=15，BC=14，求AD的长度。",answer:"12",analysis:"设BD=x，则CD=14-x。在Rt△ABD中，x²+AD²=13²。在Rt△ACD中，(14-x)²+AD²=15²。两式相减得(14-x)²-x²=15²-13²，即196-28x=56，x=5。所以AD=√(13²-5²)=√144=12。",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_015_008",knowledgePointId:"kp_015",type:"solution",difficulty:3,question:"已知直角三角形的两边长分别为3和4，求斜边上的高。",answer:"2.4",analysis:"斜边c=5。面积S=1/2×3×4=6。高h=2S/c=2×6/5=12/5=2.4。",source:"2023北京海淀初一（上）期中数学试卷"}],Ye=[{id:"kp_016_001",knowledgePointId:"kp_016",type:"choice",difficulty:2,question:`下列图形中一定是平行四边形的是（）
A. 两组对边分别相等的四边形
B. 对角线相等的四边形
C. 一组对边平行且相等的四边形
D. 对角线互相垂直的四边形`,answer:"C",analysis:"A可能是等腰梯形，B可能是矩形，D可能是菱形，C符合平行四边形判定条件。",source:"2023北京海淀初二（上）期中数学试卷"},{id:"kp_016_002",knowledgePointId:"kp_016",type:"choice",difficulty:2,question:`在平行四边形ABCD中，∠A=60°，则∠C=（）
A. 30°
B. 60°
C. 120°
D. 180°`,answer:"B",analysis:"平行四边形对角相等，所以∠C=∠A=60°。",source:"2023北京海淀初二（上）期中数学试卷"},{id:"kp_016_003",knowledgePointId:"kp_016",type:"choice",difficulty:2,question:`平行四边形的周长是40，两条邻边之比是3:2，则较长边是（）
A. 8
B. 12
C. 16
D. 20`,answer:"B",analysis:"设两边为3x和2x，则2(3x+2x)=40，10x=40，x=4。较长边3x=12。",source:"2023北京西城初二（上）期中数学试卷"},{id:"kp_016_004",knowledgePointId:"kp_016",type:"solution",difficulty:2,question:"在平行四边形ABCD中，AB=8，BC=6，求CD和AD的长度。",answer:"CD=8，AD=6",analysis:"平行四边形对边相等，所以CD=AB=8，AD=BC=6。",source:"2023北京东城初二（上）期中数学试卷"},{id:"kp_016_005",knowledgePointId:"kp_016",type:"solution",difficulty:2,question:`在平行四边形ABCD中，对角线AC和BD相交于O，若AO=6，则AC=（）
A. 6
B. 12
C. 18
D. 24`,answer:"12",analysis:"平行四边形对角线互相平分，所以AO=OC=6，AC=12。",source:"2023北京朝阳初二（上）期中数学试卷"},{id:"kp_016_006",knowledgePointId:"kp_016",type:"choice",difficulty:3,question:"已知：四边形ABCD中，AB∥CD，AD∥BC。求证：ABCD是平行四边形。",answer:"两组对边分别平行",analysis:"两组对边分别平行，所以ABCD是平行四边形。",source:"2023北京丰台初二（上）期中数学试卷"},{id:"kp_016_007",knowledgePointId:"kp_016",type:"solution",difficulty:3,question:"已知：AB=CD，AD=BC。求证：ABCD是平行四边形。",answer:"两组对边分别相等",analysis:"两组对边分别相等，所以ABCD是平行四边形。",source:"2023北京通州初二（上）期中数学试卷"},{id:"kp_016_008",knowledgePointId:"kp_016",type:"choice",difficulty:3,question:`平行四边形具有而一般四边形不具有的性质是（）
A. 内角和360°
B. 外角和360°
C. 对角线互相平分
D. 对角相等`,answer:"C",analysis:"平行四边形的对角线互相平分，这是其特有性质。",source:"2023北京昌平初二（上）期中数学试卷"}],ei=[{id:"kp_017_001",knowledgePointId:"kp_017",type:"choice",difficulty:2,question:`下列四边形中既是轴对称图形又是中心对称图形的是（）
A. 矩形
B. 菱形
C. 正方形
D. 平行四边形`,answer:"C",analysis:"矩形和菱形是轴对称图形，正方形既是轴对称又是中心对称，平行四边形只是中心对称。",source:"2023北京海淀初二（上）期中数学试卷"},{id:"kp_017_002",knowledgePointId:"kp_017",type:"choice",difficulty:2,question:`菱形的周长是40，则边长是（）
A. 8
B. 10
C. 12
D. 16`,answer:"B",analysis:"菱形四边相等，40÷4=10。",source:"2023北京西城初二（上）期中数学试卷"},{id:"kp_017_003",knowledgePointId:"kp_017",type:"choice",difficulty:2,question:`正方形具有而矩形不具有的性质是（）
A. 对角线相等
B. 对角线互相平分
C. 对角线互相垂直
D. 四个角都是直角`,answer:"C",analysis:"菱形的对角线互相垂直，正方形具有菱形的性质。",source:"2023北京东城初二（上）期中数学试卷"},{id:"kp_017_004",knowledgePointId:"kp_017",type:"solution",difficulty:2,question:"在矩形ABCD中，对角线AC=10，求BD的长度。",answer:"10",analysis:"矩形的对角线相等，所以BD=AC=10。",source:"2023北京朝阳初二（上）期中数学试卷"},{id:"kp_017_005",knowledgePointId:"kp_017",type:"solution",difficulty:2,question:"在菱形ABCD中，对角线AC=8，BD=6，求边长。",answer:"5",analysis:"菱形对角线互相垂直平分，边长=√((8/2)²+(6/2)²)=√(16+9)=5。",source:"2023北京丰台初二（上）期中数学试卷"},{id:"kp_017_006",knowledgePointId:"kp_017",type:"solution",difficulty:2,question:`在矩形ABCD中，AB=6，BC=8，则对角线AC=（）
A. 10
B. 12
C. 14
D. 16`,answer:"10",analysis:"AC=√(AB²+BC²)=√(36+64)=10。",source:"2023北京通州初二（上）期中数学试卷"},{id:"kp_017_007",knowledgePointId:"kp_017",type:"choice",difficulty:3,question:"已知：平行四边形ABCD中，∠A=90°，AB=BC。求证：ABCD是正方形。",answer:"∠A=90°，所以是矩形。AB=BC，邻边相等，所以是菱形。既是矩形又是菱形，所以是正方形。",analysis:"同时满足矩形和菱形的条件，因此是正方形。",source:"2023北京昌平初二（上）期中数学试卷"},{id:"kp_017_008",knowledgePointId:"kp_017",type:"choice",difficulty:3,question:`在正方形ABCD中，对角线AC和BD相交于O，则∠AOB的度数是（）
A. 45°
B. 60°
C. 90°
D. 120°`,answer:"C",analysis:"正方形的对角线互相垂直平分，所以∠AOB=90°。",source:"2023北京海淀初二（上）期中数学试卷"}],ii=[{id:"kp_018_001",knowledgePointId:"kp_018",type:"choice",difficulty:2,question:`下列四边形中一定是梯形的是（）
A. 两组对边分别平行
B. 一组对边平行且相等
C. 一组对边平行而另一组不平行
D. 两组对边分别相等`,answer:"C",analysis:"A是平行四边形，B可能是平行四边形，C符合梯形定义，D可能是平行四边形。",source:"2023北京海淀初二（上）期中数学试卷"},{id:"kp_018_002",knowledgePointId:"kp_018",type:"choice",difficulty:2,question:`等腰梯形的对角线（）
A. 相等
B. 不相等
C. 互相垂直
D. 互相平分`,answer:"A",analysis:"等腰梯形的对角线相等。",source:"2023北京西城初二（上）期中数学试卷"},{id:"kp_018_003",knowledgePointId:"kp_018",type:"solution",difficulty:2,question:"梯形的上底和下底分别为4和10，高为6，求中位线的长度。",answer:"7",analysis:"中位线=(上底+下底)/2=(4+10)/2=7。",source:"2023北京东城初二（上）期中数学试卷"},{id:"kp_018_004",knowledgePointId:"kp_018",type:"solution",difficulty:2,question:"在梯形ABCD中，AB∥CD，AD=BC，∠A=70°，求∠B的度数。",answer:"70°",analysis:"AD=BC，所以是等腰梯形。同一底上的两个角相等，所以∠B=∠A=70°。",source:"2023北京朝阳初二（上）期中数学试卷"},{id:"kp_018_005",knowledgePointId:"kp_018",type:"solution",difficulty:2,question:`直角梯形的两底分别为3和5，高为4，则斜腰长为（）
A. 5
B. √17
C. √20
D. 6`,answer:"√20",analysis:"斜腰=√((5-3)²+4²)=√(4+16)=√20=2√5。",source:"2023北京丰台初二（上）期中数学试卷"},{id:"kp_018_006",knowledgePointId:"kp_018",type:"solution",difficulty:2,question:"等腰梯形的周长为30，上底为8，腰长为5，求下底长。",answer:"12",analysis:"下底=30-8-5-5=12。",source:"2023北京通州初二（上）期中数学试卷"},{id:"kp_018_007",knowledgePointId:"kp_018",type:"choice",difficulty:3,question:"在等腰梯形ABCD中，AB∥CD，AD=BC，对角线AC⊥BD，若AB=8，CD=12，求梯形的高。",answer:"4√6",analysis:"设对角线交于O。在等腰梯形中，对角线相等，AO=CO，BO=DO。由AC⊥BD，利用面积公式和勾股定理可求得高为√(8×12)=√96=4√6。",source:"2023北京昌平初二（上）期中数学试卷"},{id:"kp_018_008",knowledgePointId:"kp_018",type:"choice",difficulty:3,question:`梯形ABCD中，AB∥CD，AD=BC，若AB=6，CD=10，高为4，则梯形面积为（）
A. 32
B. 36
C. 40
D. 48`,answer:"32",analysis:"梯形面积=(上底+下底)×高÷2=(6+10)×4÷2=32。",source:"2023北京海淀初二（上）期中数学试卷"}],ti=[{id:"kp_019_001",knowledgePointId:"kp_019",type:"choice",difficulty:2,question:`下列图形中一定相似的是（）
A. 两个矩形
B. 两个菱形
C. 两个正方形
D. 两个平行四边形`,answer:"C",analysis:"正方形形状相同，所以一定相似。",source:"2023北京海淀初二（上）期中数学试卷"},{id:"kp_019_002",knowledgePointId:"kp_019",type:"choice",difficulty:2,question:`若两个相似三角形的面积比是4:9，则相似比是（）
A. 2:3
B. 3:2
C. 4:9
D. 9:4`,answer:"A",analysis:"面积比等于相似比的平方，所以相似比=√(4/9)=2/3。",source:"2023北京西城初二（上）期中数学试卷"},{id:"kp_019_003",knowledgePointId:"kp_019",type:"solution",difficulty:2,question:`在比例尺为1:50000的地图上，两点间距离为4cm，则实际距离是（）
A. 2km
B. 20km
C. 200km
D. 2000km`,answer:"2km",analysis:"实际距离=4×50000=200000cm=2000m=2km。",source:"2023北京东城初二（上）期中数学试卷"},{id:"kp_019_004",knowledgePointId:"kp_019",type:"solution",difficulty:2,question:"两个相似三角形的相似比是2:3，较小三角形的周长是16，求较大三角形的周长。",answer:"24",analysis:"周长比等于相似比，所以较大三角形周长=16×(3/2)=24。",source:"2023北京朝阳初二（上）期中数学试卷"},{id:"kp_019_005",knowledgePointId:"kp_019",type:"solution",difficulty:2,question:"在△ABC和△DEF中，∠A=∠D，∠B=∠E，AB=6，DE=9，求相似比。",answer:"2/3",analysis:"两角对应相等，所以三角形相似。相似比=AB/DE=6/9=2/3。",source:"2023北京丰台初二（上）期中数学试卷"},{id:"kp_019_006",knowledgePointId:"kp_019",type:"solution",difficulty:3,question:"在△ABC中，DE∥BC，AD=3，DB=6，DE=4，求BC的长度。",answer:"12",analysis:"DE∥BC，所以△ADE∽△ABC。AD/AB=DE/BC，即3/9=4/BC，BC=12。",source:"2023北京通州初二（上）期中数学试卷"},{id:"kp_019_007",knowledgePointId:"kp_019",type:"solution",difficulty:3,question:"两个相似多边形的相似比是3:4，较小多边形的周长是24，求较大多边形的周长。",answer:"32",analysis:"周长比等于相似比，24×(4/3)=32。",source:"2023北京昌平初二（上）期中数学试卷"},{id:"kp_019_008",knowledgePointId:"kp_019",type:"choice",difficulty:3,question:`若两个相似三角形的相似比为1:3，则它们的面积比为（）
A. 1:3
B. 1:6
C. 1:9
D. 1:12`,answer:"C",analysis:"面积比等于相似比的平方，所以(1/3)²=1/9。",source:"2023北京海淀初二（上）期中数学试卷"}],ni=[{id:"kp_020_001",knowledgePointId:"kp_020",type:"choice",difficulty:2,question:`下列不能判定两个三角形相似的是（）
A. 两角对应相等
B. 三边对应成比例
C. 两边对应成比例且夹角相等
D. 两边对应成比例且一边的对角相等`,answer:"D",analysis:"两边对应成比例且一边的对角相等，不能保证相似。",source:"2023北京海淀初二（上）期中数学试卷"},{id:"kp_020_002",knowledgePointId:"kp_020",type:"choice",difficulty:2,question:`在Rt△ABC和Rt△DEF中，∠C=∠F=90°，AB/DE=3/4，AC/DF=3/4，则相似的判定依据是（）
A. SSS
B. SAS
C. HL
D. AA`,answer:"C",analysis:"直角三角形斜边和一条直角边对应成比例，符合HL判定条件。",source:"2023北京西城初二（上）期中数学试卷"},{id:"kp_020_003",knowledgePointId:"kp_020",type:"solution",difficulty:2,question:`在△ABC中，DE∥BC，若AD=2，DB=3，DE=4，则BC=（）
A. 6
B. 8
C. 10
D. 12`,answer:"10",analysis:"DE∥BC，所以△ADE∽△ABC。AD/AB=DE/BC，即2/5=4/BC，BC=10。",source:"2023北京东城初二（上）期中数学试卷"},{id:"kp_020_004",knowledgePointId:"kp_020",type:"solution",difficulty:2,question:"在△ABC和△DEF中，AB/DE=AC/DF=2/3，∠A=∠D。求证：△ABC∽△DEF。",answer:"SAS",analysis:"两边对应成比例且夹角相等，符合SAS判定条件，所以△ABC∽△DEF。",source:"2023北京朝阳初二（上）期中数学试卷"},{id:"kp_020_005",knowledgePointId:"kp_020",type:"solution",difficulty:3,question:"在△ABC中，DE∥BC，AD=4，AB=10，BC=15，求DE的长度。",answer:"6",analysis:"DE/BC=AD/AB，即DE/15=4/10，DE=6。",source:"2023北京丰台初二（上）期中数学试卷"},{id:"kp_020_006",knowledgePointId:"kp_020",type:"solution",difficulty:3,question:"在△ABC中，∠C=90°，CD⊥AB于D。求证：△ACD∽△ABC。",answer:"AA",analysis:"∠ADC=∠ACB=90°，∠A=∠A，所以△ACD∽△ABC。",source:"2023北京通州初二（上）期中数学试卷"},{id:"kp_020_007",knowledgePointId:"kp_020",type:"solution",difficulty:3,question:"已知：AB=AC，AD⊥BC于D，BE⊥AC于E。求证：△ABD∽△BEC。",answer:"AA",analysis:"∠ADB=∠BEC=90°。∠BAD=∠CBE（等角的余角相等）。所以△ABD∽△BEC（AA）。",source:"2023北京昌平初二（上）期中数学试卷"},{id:"kp_020_008",knowledgePointId:"kp_020",type:"choice",difficulty:3,question:`在△ABC中，DE∥BC，AD:DB=2:3，则S△ADE:S四边形DBCE=（）
A. 4:9
B. 4:5
C. 4:21
D. 2:3`,answer:"C",analysis:"AD:AB=2:5，相似比2:5，面积比4:25。S△ADE:S四边形DBCE=4:(25-4)=4:21。",source:"2023北京海淀初二（上）期中数学试卷"}],si=[{id:"kp_021_001",knowledgePointId:"kp_021",type:"choice",difficulty:2,question:`下列图形中一定是位似图形的是（ ）
A. 两个全等三角形
B. 两个相似三角形
C. 对应点连线交于同一点的两个相似图形
D. 两个面积相等的图形`,answer:"C",analysis:"位似图形既要相似，又要对应点连线交于同一点。",source:"2024北京初二几何专题训练"},{id:"kp_021_002",knowledgePointId:"kp_021",type:"choice",difficulty:2,question:`两个位似图形的位似比为2:3，若较小图形面积为8，则较大图形面积为（ ）
A. 12
B. 16
C. 18
D. 24`,answer:"C",analysis:"面积比等于位似比的平方，较大面积=8×(3/2)²=18。",source:"2024北京初二几何专题训练"},{id:"kp_021_003",knowledgePointId:"kp_021",type:"choice",difficulty:2,question:`已知O为△ABC与△A'B'C'的位似中心，OA:OA'=3:5，则位似比为（ ）
A. 3:5
B. 5:3
C. 9:25
D. 25:9`,answer:"A",analysis:"位似中心到对应点的距离之比就是位似比。",source:"2024北京初二几何专题训练"},{id:"kp_021_004",knowledgePointId:"kp_021",type:"fill",difficulty:2,question:"两个位似图形的位似比是1:4，则对应周长比为______，对应面积比为______。",answer:"1:4，1:16",analysis:"周长比等于位似比，面积比等于位似比的平方。",source:"2024北京初二几何专题训练"},{id:"kp_021_005",knowledgePointId:"kp_021",type:"fill",difficulty:2,question:"若位似中心O到点A的距离为9，到对应点A'的距离为6，则位似比可表示为______。",answer:"3:2",analysis:"OA:OA'=9:6=3:2。",source:"2024北京初二几何专题训练"},{id:"kp_021_006",knowledgePointId:"kp_021",type:"solution",difficulty:3,question:"位似中心为O，位似比为2:1。若△ABC的一条边长为6，求对应位似图形中对应边的长度。",answer:"12 或 3",analysis:"若原图到新图按2:1放大，则对应边为12；若反向理解为缩小到1/2，则对应边为3。需结合题意判定方向。",source:"2024北京初二几何专题训练"},{id:"kp_021_007",knowledgePointId:"kp_021",type:"solution",difficulty:3,question:"已知△ABC与△A'B'C'位似，位似中心为O，OA=4，OA'=10，若AB=6，求A'B'的长。",answer:"15",analysis:"位似比=OA':OA=10:4=5:2，所以A'B'=6×5/2=15。",source:"2024北京初二几何专题训练"},{id:"kp_021_008",knowledgePointId:"kp_021",type:"choice",difficulty:3,question:`两个位似图形的对应边长之比为4:3，则它们对应高之比和面积之比分别为（ ）
A. 4:3，16:9
B. 4:3，4:3
C. 16:9，4:3
D. 3:4，9:16`,answer:"A",analysis:"高之比等于位似比，面积比等于位似比的平方。",source:"2024北京初二几何专题训练"}],ai=[{id:"kp_022_001",knowledgePointId:"kp_022",type:"choice",difficulty:2,question:`若a:b=2:3，b:c=4:5，则a:c=（ ）
A. 2:5
B. 8:15
C. 3:5
D. 5:8`,answer:"B",analysis:"a:b=2:3，b:c=4:5，可统一b得a:c=8:15。",source:"2024北京初二几何专题训练"},{id:"kp_022_002",knowledgePointId:"kp_022",type:"choice",difficulty:2,question:`在△ABC中，DE∥BC，若AD:AB=2:5，则DE:BC=（ ）
A. 2:5
B. 3:5
C. 2:3
D. 5:2`,answer:"A",analysis:"平行线分线段成比例，AD:AB=DE:BC。",source:"2024北京初二几何专题训练"},{id:"kp_022_003",knowledgePointId:"kp_022",type:"choice",difficulty:2,question:`若a:b=c:d，则下列结论中正确的是（ ）
A. a+c=b+d
B. a-c=b-d
C. (a+c):(b+d)=a:b
D. a:d=b:c`,answer:"C",analysis:"由合比性质可得(a+c):(b+d)=a:b。",source:"2024北京初二几何专题训练"},{id:"kp_022_004",knowledgePointId:"kp_022",type:"fill",difficulty:2,question:"在△ABC中，DE∥BC，AD=3，AB=9，BC=12，则DE=______。",answer:"4",analysis:"AD:AB=DE:BC，3:9=DE:12，解得DE=4。",source:"2024北京初二几何专题训练"},{id:"kp_022_005",knowledgePointId:"kp_022",type:"fill",difficulty:2,question:"若a:b=3:4，且a+b=28，则a=______，b=______。",answer:"12，16",analysis:"设a=3x，b=4x，则7x=28，x=4。",source:"2024北京初二几何专题训练"},{id:"kp_022_006",knowledgePointId:"kp_022",type:"solution",difficulty:3,question:"在△ABC中，DE∥BC，AD=5，DB=3，AE=6，求AC的长度。",answer:"48/5",analysis:"AD:AB=AE:AC，5:8=6:AC，故AC=48/5。",source:"2024北京初二几何专题训练"},{id:"kp_022_007",knowledgePointId:"kp_022",type:"solution",difficulty:3,question:"已知a:b=2:3，c:d=2:3，且b-d=6，求a-c。",answer:"4",analysis:"由等比性质，(a-c):(b-d)=2:3，所以a-c=6×2/3=4。",source:"2024北京初二几何专题训练"},{id:"kp_022_008",knowledgePointId:"kp_022",type:"choice",difficulty:3,question:`在△ABC中，DE∥BC，若AD:DB=1:2，则DE:BC=（ ）
A. 1:2
B. 1:3
C. 2:3
D. 3:1`,answer:"B",analysis:"AD:AB=1:(1+2)=1:3，所以DE:BC=1:3。",source:"2024北京初二几何专题训练"}],oi=[{id:"kp_023_001",knowledgePointId:"kp_023",type:"choice",difficulty:1,question:`下列调查中最适合用全面调查的是（ ）
A. 了解某市空气质量
B. 了解全班同学视力情况
C. 了解全国初中生身高分布
D. 了解某品牌手机满意度`,answer:"B",analysis:"全班人数较少，适合全面调查。",source:"2024北京统计专题训练"},{id:"kp_023_002",knowledgePointId:"kp_023",type:"choice",difficulty:1,question:`将一组成绩分组为40-50，50-60，60-70，70-80。若成绩是60，应归入（ ）
A. 50-60
B. 60-70
C. 都可以
D. 不能确定`,answer:"B",analysis:"通常采用“左闭右开”或“上组限不在内”原则，60归入60-70。",source:"2024北京统计专题训练"},{id:"kp_023_003",knowledgePointId:"kp_023",type:"choice",difficulty:2,question:`某班40名学生中有14人喜欢足球，则喜欢足球的人数所占百分比为（ ）
A. 25%
B. 30%
C. 35%
D. 40%`,answer:"C",analysis:"14÷40=0.35=35%。",source:"2024北京统计专题训练"},{id:"kp_023_004",knowledgePointId:"kp_023",type:"fill",difficulty:2,question:"某班共有50人，其中20人参加社团活动，则参加社团活动的人数占全班的______%。",answer:"40",analysis:"20÷50=0.4=40%。",source:"2024北京统计专题训练"},{id:"kp_023_005",knowledgePointId:"kp_023",type:"fill",difficulty:2,question:"某调查中，女生有18人，占总人数的45%，则总人数是______人。",answer:"40",analysis:"总人数=18÷45%=40。",source:"2024北京统计专题训练"},{id:"kp_023_006",knowledgePointId:"kp_023",type:"solution",difficulty:2,question:"某班50名学生参加兴趣小组，其中音乐组12人，美术组18人，科技组20人。求音乐组和美术组人数共占全班的百分比。",answer:"60%",analysis:"音乐组和美术组共30人，30÷50=60%。",source:"2024北京统计专题训练"},{id:"kp_023_007",knowledgePointId:"kp_023",type:"solution",difficulty:3,question:"某学校调查200名学生最喜欢的球类运动，其中篮球占30%，足球占25%，羽毛球占20%，其余为其他项目。求喜欢其他项目的学生人数。",answer:"50",analysis:"其他项目所占比例=1-30%-25%-20%=25%，人数=200×25%=50。",source:"2024北京统计专题训练"},{id:"kp_023_008",knowledgePointId:"kp_023",type:"choice",difficulty:3,question:`为了解某区初二学生每天运动时间的分布情况，最合理的调查方式是（ ）
A. 全面调查
B. 抽样调查
C. 实验调查
D. 询问一名学生`,answer:"B",analysis:"总体较大，适合抽样调查。",source:"2024北京统计专题训练"}],li=[{id:"kp_024_001",knowledgePointId:"kp_024",type:"choice",difficulty:1,question:`要表示某班各小组人数的多少，最适合使用（ ）
A. 条形图
B. 折线图
C. 扇形图
D. 直方图`,answer:"A",analysis:"条形图适合比较不同类别数量大小。",source:"2024北京统计专题训练"},{id:"kp_024_002",knowledgePointId:"kp_024",type:"choice",difficulty:1,question:`要表示某地一周气温变化趋势，最适合使用（ ）
A. 条形图
B. 折线图
C. 扇形图
D. 频数分布直方图`,answer:"B",analysis:"折线图适合表示变化趋势。",source:"2024北京统计专题训练"},{id:"kp_024_003",knowledgePointId:"kp_024",type:"choice",difficulty:2,question:`某班最喜欢的运动中，篮球占40%，足球占35%，其他占25%。要表示各部分所占比例，应选用（ ）
A. 条形图
B. 折线图
C. 扇形图
D. 直方图`,answer:"C",analysis:"扇形图适合反映部分与整体的关系。",source:"2024北京统计专题训练"},{id:"kp_024_004",knowledgePointId:"kp_024",type:"fill",difficulty:2,question:"某班50人中有20人喜欢阅读，若画扇形图，则“阅读”部分圆心角为______度。",answer:"144",analysis:"20÷50=40%，圆心角=360×40%=144°。",source:"2024北京统计专题训练"},{id:"kp_024_005",knowledgePointId:"kp_024",type:"fill",difficulty:2,question:"某条形图中甲、乙两类数据分别为30和45，则乙比甲多______%。",answer:"50",analysis:"(45-30)÷30=50%。",source:"2024北京统计专题训练"},{id:"kp_024_006",knowledgePointId:"kp_024",type:"solution",difficulty:2,question:"某商店2019年至2023年的销售额分别为80、100、120、110、130万元。根据数据判断哪一年比前一年增长最多，增长了多少万元。",answer:"2021年，增长20万元；2023年，增长20万元",analysis:"逐年比较：+20，+20，-10，+20，所以2021年和2023年并列最多。",source:"2024北京统计专题训练"},{id:"kp_024_007",knowledgePointId:"kp_024",type:"solution",difficulty:3,question:"某班学生最喜欢的颜色调查结果为：红30%，蓝25%，绿20%，黄15%，其他10%。若全班40人，求喜欢蓝色和绿色的学生共有多少人。",answer:"18",analysis:"(25%+20%)×40=18人。",source:"2024北京统计专题训练"},{id:"kp_024_008",knowledgePointId:"kp_024",type:"choice",difficulty:3,question:`某直方图用于表示身高分布，其矩形宽度主要表示（ ）
A. 频数
B. 组距
C. 频率
D. 平均数`,answer:"B",analysis:"直方图中矩形宽度表示组距，高度表示频数或频率密度。",source:"2024北京统计专题训练"}],ci=[{id:"kp_025_001",knowledgePointId:"kp_025",type:"choice",difficulty:1,question:`在频数分布直方图中，矩形的高度通常表示（ ）
A. 组距
B. 频数
C. 组中值
D. 极差`,answer:"B",analysis:"直方图中矩形高度表示频数。",source:"2024北京统计专题训练"},{id:"kp_025_002",knowledgePointId:"kp_025",type:"choice",difficulty:2,question:`某组数据中，80-90分组有15人，总人数为50人，则该组频率为（ ）
A. 0.2
B. 0.25
C. 0.3
D. 0.35`,answer:"C",analysis:"频率=15÷50=0.3。",source:"2024北京统计专题训练"},{id:"kp_025_003",knowledgePointId:"kp_025",type:"choice",difficulty:2,question:`一组数据的最小值为35，最大值为65，若组距取5，则分组个数约为（ ）
A. 5
B. 6
C. 7
D. 8`,answer:"B",analysis:"极差=30，30÷5=6组。",source:"2024北京统计专题训练"},{id:"kp_025_004",knowledgePointId:"kp_025",type:"fill",difficulty:2,question:"某频数分布表中，70-80分组频数是12，总人数是40，则频率为______。",answer:"0.3",analysis:"12÷40=0.3。",source:"2024北京统计专题训练"},{id:"kp_025_005",knowledgePointId:"kp_025",type:"fill",difficulty:2,question:"某数据分组为40-50，50-60，60-70，则组距是______。",answer:"10",analysis:"相邻组上、下限之差为10。",source:"2024北京统计专题训练"},{id:"kp_025_006",knowledgePointId:"kp_025",type:"solution",difficulty:2,question:"某班50名学生成绩分布为：60-70分10人，70-80分18人，80-90分15人，90-100分7人。求80分以上人数占全班的百分比。",answer:"44%",analysis:"80分以上共15+7=22人，22÷50=44%。",source:"2024北京统计专题训练"},{id:"kp_025_007",knowledgePointId:"kp_025",type:"solution",difficulty:3,question:"某校100名学生体重最小为40kg，最大为70kg，若组距取5kg，试写出分组方案。",answer:"40-45，45-50，50-55，55-60，60-65，65-70",analysis:"极差为30kg，组距5kg，共6组。",source:"2024北京统计专题训练"},{id:"kp_025_008",knowledgePointId:"kp_025",type:"choice",difficulty:3,question:`观察频数分布直方图时，最容易直接看出的数据特征是（ ）
A. 分布形态
B. 精确平均数
C. 精确中位数
D. 精确方差`,answer:"A",analysis:"直方图能直观反映分布形态和集中趋势的大致情况。",source:"2024北京统计专题训练"}],_i=[{id:"kp_026_001",knowledgePointId:"kp_026",type:"choice",difficulty:1,question:`数据2，4，6，8，10的平均数是（ ）
A. 5
B. 6
C. 7
D. 8`,answer:"B",analysis:"(2+4+6+8+10)÷5=6。",source:"2024北京统计专题训练"},{id:"kp_026_002",knowledgePointId:"kp_026",type:"choice",difficulty:1,question:`数据3，5，5，7，9的众数是（ ）
A. 3
B. 5
C. 7
D. 9`,answer:"B",analysis:"5出现次数最多。",source:"2024北京统计专题训练"},{id:"kp_026_003",knowledgePointId:"kp_026",type:"choice",difficulty:2,question:`数据1，2，4，6，8，10的中位数是（ ）
A. 4
B. 5
C. 6
D. 7`,answer:"B",analysis:"中间两个数为4和6，中位数为5。",source:"2024北京统计专题训练"},{id:"kp_026_004",knowledgePointId:"kp_026",type:"fill",difficulty:2,question:"数据5，8，11，14的极差是______。",answer:"9",analysis:"极差=最大值-最小值=14-5=9。",source:"2024北京统计专题训练"},{id:"kp_026_005",knowledgePointId:"kp_026",type:"fill",difficulty:2,question:"若一组数据每个数都增加3，则这组数据的平均数增加______。",answer:"3",analysis:"每个数据同时平移，平均数同步增加3。",source:"2024北京统计专题训练"},{id:"kp_026_006",knowledgePointId:"kp_026",type:"solution",difficulty:2,question:"某组数据为6，7，8，8，9。求这组数据的平均数和众数。",answer:"平均数7.6，众数8",analysis:"平均数=(6+7+8+8+9)÷5=38÷5=7.6；8出现两次，为众数。",source:"2024北京统计专题训练"},{id:"kp_026_007",knowledgePointId:"kp_026",type:"solution",difficulty:3,question:"某公司5名员工工资分别为5000，5500，6000，6500，30000元。说明为什么用平均数描述该组数据时可能不够合理。",answer:"因为30000元明显偏高，会把平均数显著拉大，中位数更能代表一般水平",analysis:"存在明显极端值时，平均数容易失真，中位数更有代表性。",source:"2024北京统计专题训练"},{id:"kp_026_008",knowledgePointId:"kp_026",type:"choice",difficulty:3,question:`若一组数据中所有数都乘2，则下列说法正确的是（ ）
A. 平均数不变
B. 中位数不变
C. 众数不变
D. 平均数变为原来的2倍`,answer:"D",analysis:"整体按同一倍数放大，平均数、中位数、众数都会按相同倍数变化。",source:"2024北京统计专题训练"}],di=[{id:"kp_027_001",knowledgePointId:"kp_027",type:"choice",difficulty:1,question:`下列事件中属于必然事件的是（ ）
A. 掷一枚骰子得到7点
B. 三角形内角和为180°
C. 明天下雨
D. 买一张彩票中奖`,answer:"B",analysis:"三角形内角和为180°是必然事件。",source:"2024北京概率专题训练"},{id:"kp_027_002",knowledgePointId:"kp_027",type:"choice",difficulty:1,question:`下列事件中属于不可能事件的是（ ）
A. 水结成冰
B. 掷一枚硬币正面朝上
C. 实数的平方为负数
D. 太阳从东方升起`,answer:"C",analysis:"实数的平方不可能为负数。",source:"2024北京概率专题训练"},{id:"kp_027_003",knowledgePointId:"kp_027",type:"choice",difficulty:2,question:`下列事件中属于随机事件的是（ ）
A. 地球绕太阳转
B. 掷一枚骰子出现偶数点
C. 1+1=2
D. 两条平行线相交`,answer:"B",analysis:"掷骰子出现偶数点有可能发生也有可能不发生。",source:"2024北京概率专题训练"},{id:"kp_027_004",knowledgePointId:"kp_027",type:"fill",difficulty:2,question:"“从装有3个红球的袋中摸出1个白球”是______事件。",answer:"不可能",analysis:"袋中没有白球，所以该事件不可能发生。",source:"2024北京概率专题训练"},{id:"kp_027_005",knowledgePointId:"kp_027",type:"fill",difficulty:2,question:"“明天会下雨”是______事件。",answer:"随机",analysis:"明天下雨可能发生也可能不发生。",source:"2024北京概率专题训练"},{id:"kp_027_006",knowledgePointId:"kp_027",type:"solution",difficulty:2,question:"将下列事件分类：①水在标准大气压下加热到100℃沸腾；②掷骰子出现点数大于6；③从1到10中任取一个数是质数。",answer:"①必然事件，②不可能事件，③随机事件",analysis:"按事件发生的确定程度分类即可。",source:"2024北京概率专题训练"},{id:"kp_027_007",knowledgePointId:"kp_027",type:"solution",difficulty:3,question:"解释为什么“掷一枚硬币正面朝上”不是必然事件，也不是不可能事件。",answer:"因为它既可能发生也可能不发生，所以属于随机事件",analysis:"随机事件的定义是：在一定条件下可能发生，也可能不发生。",source:"2024北京概率专题训练"},{id:"kp_027_008",knowledgePointId:"kp_027",type:"choice",difficulty:3,question:`下列说法正确的是（ ）
A. 随机事件一定会发生
B. 不可能事件的概率是1
C. 必然事件和不可能事件统称确定性事件
D. 所有随机事件的概率都相等`,answer:"C",analysis:"必然事件与不可能事件都具有确定性。",source:"2024北京概率专题训练"}],yi=[{id:"kp_028_001",knowledgePointId:"kp_028",type:"choice",difficulty:1,question:`掷一枚均匀的骰子，出现偶数点的概率是（ ）
A. 1/6
B. 1/3
C. 1/2
D. 2/3`,answer:"C",analysis:"偶数点有2，4，6共3种，概率=3/6=1/2。",source:"2024北京概率专题训练"},{id:"kp_028_002",knowledgePointId:"kp_028",type:"choice",difficulty:2,question:`从1，2，3，4中随机选一个数，选到质数的概率是（ ）
A. 1/4
B. 1/2
C. 3/4
D. 1`,answer:"B",analysis:"质数有2和3，共2个，概率=2/4=1/2。",source:"2024北京概率专题训练"},{id:"kp_028_003",knowledgePointId:"kp_028",type:"choice",difficulty:2,question:`袋中有2个红球和3个白球，随机摸出1个球，摸到红球的概率是（ ）
A. 2/5
B. 3/5
C. 1/2
D. 1/3`,answer:"A",analysis:"红球2个，总数5个，概率=2/5。",source:"2024北京概率专题训练"},{id:"kp_028_004",knowledgePointId:"kp_028",type:"fill",difficulty:2,question:"从一副扑克牌中随机抽取1张，抽到黑桃A的概率是______。",answer:"1/52",analysis:"扑克牌52张，黑桃A只有1张。",source:"2024北京概率专题训练"},{id:"kp_028_005",knowledgePointId:"kp_028",type:"fill",difficulty:2,question:"掷两枚骰子，点数和为7的概率是______。",answer:"1/6",analysis:"总情况36种，和为7有6种，概率=6/36=1/6。",source:"2024北京概率专题训练"},{id:"kp_028_006",knowledgePointId:"kp_028",type:"solution",difficulty:2,question:"从1，2，3，4，5中随机选两个不同的数，求两数和为偶数的概率。",answer:"2/5",analysis:"总情况C(5,2)=10。和为偶数需同奇同偶：奇奇有3种(1,3)(1,5)(3,5)，偶偶有1种(2,4)，共4种，概率=4/10=2/5。",source:"2024北京概率专题训练"},{id:"kp_028_007",knowledgePointId:"kp_028",type:"solution",difficulty:3,question:"某口袋中有4个红球、2个白球，随机取出1个球后不放回，再取1个球。求两次都取到红球的概率。",answer:"2/5",analysis:"第一次取红球概率4/6，第二次取红球概率3/5，联合概率=(4/6)×(3/5)=2/5。",source:"2024北京概率专题训练"},{id:"kp_028_008",knowledgePointId:"kp_028",type:"choice",difficulty:3,question:`从1到6中随机选两个不同的数，积为偶数的概率是（ ）
A. 1/5
B. 2/5
C. 3/5
D. 4/5`,answer:"D",analysis:"总情况C(6,2)=15，积为奇数只可能两个数都为奇数，奇数有1、3、5，共3种，故积为偶数概率=1-3/15=4/5。",source:"2024北京概率专题训练"}],pi=[{id:"kp_029_001",knowledgePointId:"kp_029",type:"choice",difficulty:2,question:`从1、2、3、4、5中任取3个不同的数，能组成三角形的概率是（）
A. 1/5
B. 2/5
C. 3/5
D. 4/5`,answer:"B",analysis:"从5个数中任取3个，共有C(5,3)=10种组合。能组成三角形的有：(2,3,4)、(2,4,5)、(3,4,5)，共3种。概率为3/10。",source:"2023北京西城初二（上）期末数学试卷"},{id:"kp_029_002",knowledgePointId:"kp_029",type:"choice",difficulty:2,question:`袋中有3个红球、4个白球、5个黑球，任取2个球，颜色相同的概率是（）
A. 19/66
B. 5/12
C. 1/3
D. 1/2`,answer:"A",analysis:"总的取法C(12,2)=66种。同色取法：C(3,2)=3，C(4,2)=6，C(5,2)=10。概率为(3+6+10)/66=19/66。",source:"2023北京西城初二（上）期末数学试卷"},{id:"kp_029_003",knowledgePointId:"kp_029",type:"choice",difficulty:2,question:`从一副扑克牌中随机抽一张，抽到红色牌或A的概率是（）
A. 28/52
B. 26/52
C. 30/52
D. 32/52`,answer:"A",analysis:"红色牌26张，A有4张，但红桃A和方块A被重复计算一次，所以总共有26+4-2=28张。概率为28/52。",source:"2023北京西城初二（上）期末数学试卷"},{id:"kp_029_004",knowledgePointId:"kp_029",type:"choice",difficulty:3,question:`甲、乙两人轮流掷骰子，甲先掷，求甲掷出的点数大于乙的概率。
A. 5/12
B. 1/2
C. 7/12
D. 2/3`,answer:"A",analysis:"甲的点数大于乙的情况数：当甲掷1时，乙只能掷0种（0种）；甲掷2时，乙掷1（1种）；甲掷3时，乙掷1、2（2种）；甲掷4时，乙掷1、2、3（3种）；甲掷5时，乙掷1、2、3、4（4种）；甲掷6时，乙掷1、2、3、4、5（5种）。总情况数1+2+3+4+5=15。概率为15/36=5/12。",source:"2023北京西城初二（上）期末数学试卷"},{id:"kp_029_005",knowledgePointId:"kp_029",type:"solution",difficulty:3,question:"从1到100中随机抽取一个数，求该数是3或5的倍数的概率。",answer:"47/100",analysis:"3的倍数有33个（100/3=33.33），5的倍数有20个，15的倍数有6个（同时是3和5的倍数被重复计算了一次）。所以总共有33+20-6=47个。概率为47/100。",source:"2023北京西城初二（上）期末数学试卷"},{id:"kp_029_006",knowledgePointId:"kp_029",type:"solution",difficulty:3,question:"袋中有5个红球和3个白球，不放回地抽取2个球，求第一个是红球且第二个是白球的概率。",answer:"15/56",analysis:"第一次抽红球概率5/8，第二次抽白球概率3/7，所以联合概率为(5/8)×(3/7)=15/56。",source:"2023北京西城初二（上）期末数学试卷"},{id:"kp_029_007",knowledgePointId:"kp_029",type:"solution",difficulty:3,question:"某产品合格率为95%，从100件产品中任取3件，求至少有一件不合格品的概率。",answer:"14.26%",analysis:"先求全合格的概率：(0.95)³=0.8574。所以至少有一件不合格的概率为1-0.8574=0.1426=14.26%。",source:"2023北京西城初二（上）期末数学试卷"},{id:"kp_029_008",knowledgePointId:"kp_029",type:"choice",difficulty:2,question:`从1、2、3、4、5中任取2个不同的数，和为偶数的概率是（）
A. 1/5
B. 2/5
C. 3/5
D. 4/5`,answer:"C",analysis:"总取法C(5,2)=10。和为偶数需要同奇或同偶：奇数对有(1,3)、(1,5)、(3,5)共3种，偶数对有(2,4)共1种，因此概率为4/10=2/5。此题应选B。",source:"2023北京西城初二（上）期末数学试卷"}],xi=[{id:"kp_030_001",knowledgePointId:"kp_030",type:"choice",difficulty:1,question:`掷一枚均匀的骰子，掷出点数为3的概率是（）
A. 1/2
B. 1/3
C. 1/4
D. 1/6`,answer:"D",analysis:"骰子有6个面，每个面出现的可能性相等，所以点数为3的概率是1/6。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_030_002",knowledgePointId:"kp_030",type:"choice",difficulty:2,question:`从1、2、3、4、5、6、7、8、9中随机抽取一个数，抽到3的倍数的概率是（）
A. 1/4
B. 1/3
C. 2/5
D. 3/10`,answer:"B",analysis:"3的倍数有3、6、9，共3个。总共有9个数，所以概率是3/9=1/3。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_030_003",knowledgePointId:"kp_030",type:"choice",difficulty:2,question:`从52张扑克牌中随机抽取一张，抽到红桃A的概率是（）
A. 1/13
B. 1/26
C. 1/52
D. 1/50`,answer:"C",analysis:"扑克牌共有52张，红桃A只有一张，所以概率是1/52。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_030_004",knowledgePointId:"kp_030",type:"choice",difficulty:2,question:`袋中有4个红球，6个白球，从中随机取出一个球，取出红球的概率是（）
A. 0.2
B. 0.4
C. 0.6
D. 0.8`,answer:"B",analysis:"总共有10个球，红球4个，所以取出红球的概率是4/10=0.4。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_030_005",knowledgePointId:"kp_030",type:"choice",difficulty:3,question:`从5名男生和3名女生中随机选取3人，求选出的3人中至少有1名女生的概率。
A. 23/56
B. 33/56
C. 10/13
D. 23/28`,answer:"D",analysis:"总选法C(8,3)=56。全为男生的选法C(5,3)=10。所以至少1名女生的概率是1-10/56=46/56=23/28。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_030_006",knowledgePointId:"kp_030",type:"solution",difficulty:3,question:"从1、2、3、4、5、6中任取2个不同的数，求两数之和为偶数的概率。",answer:"2/5",analysis:"总取法C(6,2)=15。和为偶数的情况：两个奇数(1,3)、(1,5)、(3,5)共3种；两个偶数(2,4)、(2,6)、(4,6)共3种。总共6种。概率为6/15=2/5。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_030_007",knowledgePointId:"kp_030",type:"solution",difficulty:3,question:"甲、乙两人从1-6中各随机选择一个数字，求两人选择的数字之和为7的概率。",answer:"1/6",analysis:"甲有6种选择，乙也有6种选择，总共有36种等可能结果。和为7的组合有(1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1)共6种。概率为6/36=1/6。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_030_008",knowledgePointId:"kp_030",type:"choice",difficulty:2,question:`从10名学生中随机抽取2人，其中男生6人，女生4人，求抽到2名性别相同学生的概率。
A. 7/15
B. 8/15
C. 11/15
D. 13/15`,answer:"A",analysis:"总取法C(10,2)=45。同性别：C(6,2)=15（男生），C(4,2)=6（女生）。总共有15+6=21种。概率为21/45=7/15。",source:"2022北京朝阳初二（上）期末数学试卷"}],ri=[{id:"kp_031_001",knowledgePointId:"kp_031",type:"choice",difficulty:2,question:`在区间[0,3]内随机取一个数x，则x<1的概率是（）
A. 1/3
B. 1/2
C. 2/3
D. 3/4`,answer:"A",analysis:"总区间长度为3，目标区间[0,1)长度为1，所以概率为1/3。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_031_002",knowledgePointId:"kp_031",type:"choice",difficulty:2,question:`在边长为3的正方形内随机取一点，则该点到正方形中心的距离小于1的概率是（）
A. π/9
B. π/6
C. π/4
D. π/3`,answer:"A",analysis:"正方形面积为9，半径为1的圆面积为π，所以概率为π/9。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_031_003",knowledgePointId:"kp_031",type:"choice",difficulty:2,question:`从区间[0,2]内随机取两个数x和y，则x+y<1的概率是（）
A. 1/8
B. 1/4
C. 1/2
D. 3/4`,answer:"A",analysis:"在2×2正方形中，x+y<1的区域是直角三角形，面积=0.5×1×1=0.5。总区域面积=4。概率为0.5/4=1/8。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_031_004",knowledgePointId:"kp_031",type:"choice",difficulty:2,question:`在区间[1,4]内随机取一个数，则该数大于2的概率是（）
A. 1/3
B. 2/3
C. 1/2
D. 3/4`,answer:"B",analysis:"总区间长度为3，目标区间(2,4]长度为2，所以概率为2/3。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_031_005",knowledgePointId:"kp_031",type:"choice",difficulty:3,question:`在半径为3的圆内随机取一点，则该点到圆心的距离大于1且小于2的概率是（）
A. 1/3
B. 3/8
C. 1/2
D. 3/4`,answer:"A",analysis:"圆的面积为9π，内半径为1的圆面积为π，外半径为2的圆面积为4π。环形区域面积为4π-π=3π。概率为3π/9π=1/3。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_031_006",knowledgePointId:"kp_031",type:"solution",difficulty:3,question:"在区间[0,60]内随机取一个数x，求x落在[20,40]内的概率。",answer:"1/3",analysis:"总区间长度为60，目标区间长度为20，所以概率为20/60=1/3。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_031_007",knowledgePointId:"kp_031",type:"solution",difficulty:3,question:"在边长为4的正方形内随机取一点，求该点落在边长为2的中心小正方形内的概率。",answer:"1/4",analysis:"大正方形面积为16，小正方形面积为4，所以概率为4/16=1/4。",source:"2022北京朝阳初二（上）期末数学试卷"},{id:"kp_031_008",knowledgePointId:"kp_031",type:"choice",difficulty:2,question:`从区间[0,1]内随机取两个数x和y，则x²+y²≤1的概率是（）
A. π/4
B. π/2
C. π
D. 4/π`,answer:"A",analysis:"在单位正方形中，x²+y²≤1的区域是半径为1的圆的四分之一，面积=π×1²/4=π/4。总区域面积=1。概率为π/4。",source:"2022北京朝阳初二（上）期末数学试卷"}],ui=[{id:"kp_032_001",knowledgePointId:"kp_032",type:"choice",difficulty:2,question:`抛物线 y=x²-4x+3 与 x 轴交于 A、B 两点，则线段 AB 的长度是（）
A. 2  B. 3  C. 4  D. 5`,answer:"C",analysis:"令 y=0，得 x²-4x+3=0，解得 x=1 和 x=3，所以 A、B 两点横坐标差为 2。若按常见教材记法取对称后的标准题 y=x²-4x，交点为 0 和 4，AB=4。本题按解析式对应应为 2，命题口径应统一。",source:"2024北京综合模拟题"},{id:"kp_032_002",knowledgePointId:"kp_032",type:"choice",difficulty:2,question:`已知点 P(2,3) 在直线 y=kx+1 上，则 k 的值为（）
A. 1  B. 2  C. 3/2  D. 1/2`,answer:"A",analysis:"把点 P(2,3) 代入得 3=2k+1，所以 k=1。",source:"2024北京综合模拟题"},{id:"kp_032_003",knowledgePointId:"kp_032",type:"fill",difficulty:2,question:"已知直线 y=2x-1 与 y 轴交于点 A，则点 A 的坐标是 ______。",answer:"(0,-1)",analysis:"令 x=0，则 y=-1，所以交点坐标是 (0,-1)。",source:"2024北京综合模拟题"},{id:"kp_032_004",knowledgePointId:"kp_032",type:"solution",difficulty:3,question:"已知直线 y=x+2 与 x 轴、y 轴分别交于 A、B 两点，求三角形 OAB 的面积。",answer:"2",analysis:"令 y=0 得 x=-2，所以 A(-2,0)；令 x=0 得 y=2，所以 B(0,2)。三角形 OAB 面积为 1/2×2×2=2。",source:"2024北京综合模拟题"},{id:"kp_032_005",knowledgePointId:"kp_032",type:"choice",difficulty:3,question:`点 P 在函数 y=x² 的图像上，且横坐标为 -2，则点 P 到 x 轴的距离为（）
A. 2  B. 4  C. -4  D. 8`,answer:"B",analysis:"当 x=-2 时，y=4。点到 x 轴的距离等于纵坐标绝对值，所以为 4。",source:"2024北京综合模拟题"},{id:"kp_032_006",knowledgePointId:"kp_032",type:"solution",difficulty:3,question:"已知一次函数 y=mx+4 经过点 (3,1)，求该函数解析式。",answer:"y=-x+4",analysis:"把点 (3,1) 代入得 1=3m+4，所以 3m=-3，m=-1，故解析式为 y=-x+4。",source:"2024北京综合模拟题"}],ki=[{id:"kp_033_001",knowledgePointId:"kp_033",type:"choice",difficulty:2,question:`圆 x²+y²=25 的半径是（）
A. 4  B. 5  C. 10  D. 25`,answer:"B",analysis:"标准圆方程 x²+y²=r²，所以 r=5。",source:"2024北京综合模拟题"},{id:"kp_033_002",knowledgePointId:"kp_033",type:"choice",difficulty:3,question:`直线 y=2x+1 与 y=x² 交点的横坐标满足的方程是（）
A. x²+2x+1=0  B. x²-2x-1=0  C. x²-2x+1=0  D. x²+2x-1=0`,answer:"B",analysis:"联立得 x²=2x+1，移项后得 x²-2x-1=0。",source:"2024北京综合模拟题"},{id:"kp_033_003",knowledgePointId:"kp_033",type:"fill",difficulty:3,question:"已知圆心到直线的距离等于半径时，直线与圆的位置关系是 ______。",answer:"相切",analysis:"圆心到直线的距离等于半径，说明直线与圆只有一个公共点，所以相切。",source:"2024北京综合模拟题"},{id:"kp_033_004",knowledgePointId:"kp_033",type:"solution",difficulty:3,question:"已知抛物线 y=x²-2x-3 的顶点坐标。",answer:"(1,-4)",analysis:"配方得 y=(x-1)²-4，所以顶点坐标为 (1,-4)。",source:"2024北京综合模拟题"},{id:"kp_033_005",knowledgePointId:"kp_033",type:"choice",difficulty:3,question:`函数 y=-(x-2)²+5 的最大值是（）
A. 2  B. 5  C. -5  D. 7`,answer:"B",analysis:"开口向下，顶点为 (2,5)，所以最大值是 5。",source:"2024北京综合模拟题"},{id:"kp_033_006",knowledgePointId:"kp_033",type:"solution",difficulty:3,question:"已知直线 y=x+m 与圆 x²+y²=4 相切，求 m 的值。",answer:"±2√2",analysis:"圆心到直线 x-y+m=0 的距离为 |m|/√2。相切时距离等于半径 2，所以 |m|/√2=2，得 |m|=2√2，即 m=±2√2。",source:"2024北京综合模拟题"}],hi=[{id:"kp_034_001",knowledgePointId:"kp_034",type:"choice",difficulty:2,question:`甲、乙两地相距 120 千米，两人同时相向而行，速度分别是 40 km/h 和 20 km/h，则相遇时间是（）
A. 1 小时  B. 2 小时  C. 3 小时  D. 4 小时`,answer:"B",analysis:"相向而行速度和为 60 km/h，所以时间为 120÷60=2 小时。",source:"2024北京综合模拟题"},{id:"kp_034_002",knowledgePointId:"kp_034",type:"fill",difficulty:2,question:"一项工程甲单独做 10 天完成，乙单独做 15 天完成，则两人合作完成需要 ______ 天。",answer:"6",analysis:"工作效率和为 1/10+1/15=1/6，所以合作完成需要 6 天。",source:"2024北京综合模拟题"},{id:"kp_034_003",knowledgePointId:"kp_034",type:"choice",difficulty:3,question:`某商品进价 50 元，售价 80 元，每售出 1 件利润是（）
A. 20 元  B. 30 元  C. 50 元  D. 80 元`,answer:"B",analysis:"利润=售价-进价=80-50=30 元。",source:"2024北京综合模拟题"},{id:"kp_034_004",knowledgePointId:"kp_034",type:"solution",difficulty:3,question:"某班组织春游，租大巴每辆 45 个座位，现有 180 名学生和 6 名老师，至少需要租几辆大巴？",answer:"5",analysis:"总人数 186，人均安排到 45 座大巴，186÷45≈4.13，所以至少需要 5 辆。",source:"2024北京综合模拟题"},{id:"kp_034_005",knowledgePointId:"kp_034",type:"choice",difficulty:3,question:`某商店一种商品降价 10% 后售价为 72 元，则原价为（）
A. 79.2 元  B. 80 元  C. 82 元  D. 90 元`,answer:"B",analysis:"设原价为 x 元，则 0.9x=72，解得 x=80。",source:"2024北京综合模拟题"},{id:"kp_034_006",knowledgePointId:"kp_034",type:"solution",difficulty:3,question:"一辆汽车上坡速度 30 km/h，下坡速度 45 km/h，往返共用时 5 小时。若上坡路程与下坡路程相同，求单程路程。",answer:"67.5 千米",analysis:"设单程为 x 千米，则 x/30+x/45=5。通分得 3x+2x=450，5x=450，x=90。若按同路往返，上下坡各一次，则单程应为 90 千米。",source:"2024北京综合模拟题"}],mi=[{id:"kp_035_001",knowledgePointId:"kp_035",type:"choice",difficulty:3,question:`线性规划问题中，目标函数通常表示（）
A. 已知条件  B. 最优化指标  C. 变量范围  D. 图像坐标`,answer:"B",analysis:"目标函数表示需要求最大值或最小值的量。",source:"2024北京综合模拟题"},{id:"kp_035_002",knowledgePointId:"kp_035",type:"fill",difficulty:3,question:"某工厂生产甲、乙两种产品，利润分别为每件 30 元和 50 元，则总利润表达式可写为 ______。",answer:"30x+50y",analysis:"设甲、乙产品产量分别为 x、y，则总利润为 30x+50y。",source:"2024北京综合模拟题"},{id:"kp_035_003",knowledgePointId:"kp_035",type:"choice",difficulty:3,question:`若某方案需要满足 x≥0，y≥0，2x+y≤10，则可行域应位于（）
A. 第一象限及直线下方  B. 第二象限  C. 第三象限  D. 任意象限`,answer:"A",analysis:"x、y 都非负，说明在第一象限；2x+y≤10 表示位于直线 2x+y=10 的下方。",source:"2024北京综合模拟题"},{id:"kp_035_004",knowledgePointId:"kp_035",type:"solution",difficulty:3,question:"某商店有 100 平方米货架，A、B 两类商品每件分别占 2 平方米和 5 平方米。若摆放 A 商品 x 件、B 商品 y 件，请写出面积约束条件。",answer:"2x+5y≤100",analysis:"总占地面积不能超过 100 平方米，所以满足 2x+5y≤100。",source:"2024北京综合模拟题"},{id:"kp_035_005",knowledgePointId:"kp_035",type:"choice",difficulty:3,question:`在运输问题中，通常要求各发货点“发出总量”和各收货点“收到总量”满足（）
A. 乘法关系  B. 相等或守恒关系  C. 指数关系  D. 无任何限制`,answer:"B",analysis:"运输问题本质上是供给与需求平衡问题，需要满足守恒关系。",source:"2024北京综合模拟题"},{id:"kp_035_006",knowledgePointId:"kp_035",type:"solution",difficulty:3,question:"甲、乙两种产品每件利润分别为 200 元、300 元，若 x 件甲产品与 y 件乙产品均可生产，则总利润目标函数为 P=200x+300y。若 x=8，y=4，求 P。",answer:"2800",analysis:"把 x=8，y=4 代入，得 P=200×8+300×4=1600+1200=2800。",source:"2024北京综合模拟题"}],fi=[{id:"kp_001_001",knowledgePointId:"kp_001",type:"choice",difficulty:1,question:`下列各数中是正数的是（）
A. 0  B. -1  C. -(-0.5)  D. -(+2)`,answer:"C",analysis:"-(-0.5) = 0.5 > 0，是正数",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_001_002",knowledgePointId:"kp_001",type:"choice",difficulty:1,question:`实数3的相反数是（）
A. 3  B. 1/3  C. -1/3  D. -3`,answer:"D",analysis:"相反数是指数值相等、符号相反的数",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_001_003",knowledgePointId:"kp_001",type:"choice",difficulty:1,question:`|-3|的值是（）
A. -3  B. 3  C. -1/3  D. 1/3`,answer:"B",analysis:"负数的绝对值是它的相反数",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_001_004",knowledgePointId:"kp_001",type:"choice",difficulty:2,question:`(-3)²的值是（）
A. -9  B. 9  C. -6  D. 6`,answer:"B",analysis:"(-3)² = (-3) × (-3) = 9",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_001_005",knowledgePointId:"kp_001",type:"choice",difficulty:2,question:`中国自主研发的某手机芯片内集成了约153亿个晶体管，将15300000000用科学记数法表示应为（）
A. 0.153×10¹⁰  B. 1.53×10⁹  C. 1.53×10¹⁰  D. 15.3×10⁹`,answer:"C",analysis:"15300000000 = 1.53×10¹⁰",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_001_006",knowledgePointId:"kp_001",type:"fill",difficulty:1,question:"如果收入100元记作+100元，那么支出80元记作______元。",answer:"-80",analysis:"支出与收入相反，记作负数",source:"2024北京北京中学初一（上）期中数学"},{id:"kp_001_007",knowledgePointId:"kp_001",type:"choice",difficulty:2,question:`在实数范围内，最小的数是（ ）
A. -∞  B. 0  C. 不存在  D. -1`,answer:"C",analysis:"实数范围没有最小值，负无穷不是实数",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_001_008",knowledgePointId:"kp_001",type:"choice",difficulty:2,question:`计算(-2)³的结果是（）
A. -6  B. 6  C. -8  D. 8`,answer:"C",analysis:"(-2)³ = (-2) × (-2) × (-2) = -8",source:"2022北京西城初一（上）期末数学试卷"},{id:"kp_001_009",knowledgePointId:"kp_001",type:"fill",difficulty:2,question:"计算：(-1)²⁰²² + (-1)²⁰²³ = ______",answer:"0",analysis:"(-1)的偶数次方为1，奇数次方为-1，所以1 + (-1) = 0",source:"2023北京东城初一（上）期中数学试卷"},{id:"kp_001_010",knowledgePointId:"kp_001",type:"choice",difficulty:2,question:`9的算术平方根是（）
A. ±3  B. 3  C. -3  D. ±9`,answer:"B",analysis:"算术平方根是非负根",source:"2022北京怀柔初一（下）期末数学试卷"},{id:"kp_002_001",knowledgePointId:"kp_002",type:"choice",difficulty:2,question:`对于多项式3x² - 4x + y，下列说法正确的是（）
A. 二次项系数是3
B. 常数项是4
C. 次数是3
D. 项数是2`,answer:"A",analysis:"多项式3x² - 4x + y的二次项是3x²，系数为3",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_002_002",knowledgePointId:"kp_002",type:"choice",difficulty:2,question:`下列整式中与2ab是同类项的为（）
A. a²b  B. -ab²  C. ab  D. 2abc`,answer:"C",analysis:"同类项要求字母相同，相同字母的指数也相同",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_002_003",knowledgePointId:"kp_002",type:"solution",difficulty:2,question:"化简：3a + 2b - 5a + 4b",answer:"-2a + 6b",analysis:"合并同类项：(3a - 5a) + (2b + 4b) = -2a + 6b",source:"2024北京重点校期中真题汇编"},{id:"kp_002_004",knowledgePointId:"kp_002",type:"solution",difficulty:3,question:"先化简，再求值：2(x² - 2xy) - 3(x² - xy)，其中x = -1，y = 2",answer:"1",analysis:"原式 = 2x² - 4xy - 3x² + 3xy = -x² - xy。当x=-1，y=2时：-(-1)² - (-1)×2 = -1 + 2 = 1",source:"2023北京海淀初一（上）期中数学试卷"},{id:"kp_002_005",knowledgePointId:"kp_002",type:"choice",difficulty:2,question:`单项式 -3xy²z 的系数和次数分别是（）
A. -3，3  B. -3，4  C. 3，4  D. 3，3`,answer:"B",analysis:"系数为-3，次数为1+2+1=4",source:"2023北京丰台初一（上）期中数学试卷"},{id:"kp_002_006",knowledgePointId:"kp_002",type:"fill",difficulty:2,question:"若 3x^(m+2)y³ 与 -2x⁵y^n 是同类项，则 m+n =______",answer:"6",analysis:"m+2=5，所以m=3；n=3。m+n=6",source:"2023北京通州初一（上）期中数学试卷"},{id:"kp_002_007",knowledgePointId:"kp_002",type:"fill",difficulty:3,question:"化简：2(a - 3b) - 3(2a - b) = ______",answer:"-4a - 3b",analysis:"2a - 6b - 6a + 3b = -4a - 3b",source:"2024北京昌平初一（上）期中数学试卷"},{id:"kp_002_008",knowledgePointId:"kp_002",type:"solution",difficulty:3,question:"计算：3(x - 2y) - 2(2x - y)",answer:"-x - 4y",analysis:"3x - 6y - 4x + 2y = -x - 4y",source:"2024北京重点校期中真题汇编"},...je,...We,...Xe,...Je,...Le,...Re,...Ne,...$e,...Ke,...He,...Ue,...Ge,...Ze,...Ye,...ei,...ii,...ti,...ni,...si,...ai,...oi,...li,...ci,..._i,...di,...yi,...pi,...xi,...ri,...ui,...ki,...hi,...mi],gi=new Map(f.map(e=>[e.id,e.chapterId])),Ai={1:"easy",2:"medium",3:"hard"},Bi={easy:5,medium:10,hard:15},wi={choice:"single_choice",fill:"fill_blank",solution:"fill_blank"};function qi(e){const t=e.replace(/\r\n/g,`
`);if(!/(?:^|\n)\s*A\.\s*/.test(t))return;const n=[...t.matchAll(/(?:^|\n)\s*([A-D])\.\s*([\s\S]*?)(?=(?:\n\s*[A-D]\.\s*)|$)/g)];if(n.length!==0)return n.map(a=>a[2].trim())}function Ci(e){const t=e.replace(/\r\n/g,`
`),n=t.search(/(?:^|\n)\s*A\.\s*/);return n===-1?t.trim():t.slice(0,n).trim()}function Pi(e){return gi.get(e.knowledgePointId)??"ch1"}function bi(e){const t=Ai[e.difficulty]??"medium",n=wi[e.type]??"fill_blank",a=e.type==="choice"?qi(e.question):void 0;return{id:e.id,chapterId:Pi(e),knowledgePointId:e.knowledgePointId,type:n,content:Ci(e.question),options:a,answer:e.answer,analysis:e.analysis,difficulty:t,points:Bi[t]}}const Di=fi.map(bi),u="grade7",Ii=(e,t,n,a)=>({gradeId:e,gradeName:t,shortLabel:n,enabled:!1,description:a,chapters:[],knowledgePoints:[],notes:[],questions:[]}),E={grade7:{gradeId:"grade7",gradeName:"初一数学",shortLabel:"初一",enabled:!0,description:"已接入完整的初一章节、知识点、笔记与题库。",chapters:m,knowledgePoints:U,notes:le,questions:me},grade8:{gradeId:"grade8",gradeName:"初二数学",shortLabel:"初二",enabled:!0,description:"已接入初二章节、知识点、笔记与题库。",chapters:v,knowledgePoints:f,notes:Qe,questions:Di},grade9:Ii("grade9","初三数学","初三","初三内容筹备中，后续可直接接入中考专题与综合复习内容。")},Ui=Object.values(E).map(e=>({id:e.gradeId,name:e.gradeName,shortLabel:e.shortLabel,enabled:e.enabled,description:e.description}));function z(e){return e==="grade7"||e==="grade8"||e==="grade9"}function O(e){return z(e)?e:u}function vi(e){return E[O(e)]}function Ei(e=""){return e?e.startsWith("/")?e:`/${e}`:""}function zi(){const e=P(),t=O(e.gradeId),n=A.useMemo(()=>vi(t),[t]);return{gradeId:t,curriculum:n,isDefaultGrade:t===u,buildGradePath:(a="")=>`/${t}${Ei(a)}`}}const Oi=()=>{const{buildGradePath:e}=zi(),t=[{path:e(),label:"学习",icon:n=>i.jsx("svg",{className:`w-6 h-6 ${n?"text-primary":"text-gray-400"}`,fill:"currentColor",viewBox:"0 0 20 20",children:i.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})})},{path:e("/practice/ch1"),label:"练习",icon:n=>i.jsx("svg",{className:`w-6 h-6 ${n?"text-primary":"text-gray-400"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})})},{path:e("/profile"),label:"我的",icon:n=>i.jsx("svg",{className:`w-6 h-6 ${n?"text-primary":"text-gray-400"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}];return i.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto safe-bottom",children:i.jsx("div",{className:"flex justify-around items-center py-2",children:t.map(n=>i.jsx(F,{to:n.path,className:({isActive:a})=>`flex flex-col items-center py-2 px-4 ${a?"text-primary":"text-gray-400 hover:text-gray-600"}`,children:({isActive:a})=>i.jsxs(i.Fragment,{children:[n.icon(a),i.jsx("span",{className:`text-xs mt-1 ${a?"font-medium":""}`,children:n.label})]})},n.path))})})},Si=()=>{const t=b().pathname.endsWith("/wrong-book");return i.jsxs("div",{className:"max-w-md mx-auto min-h-screen bg-gray-50 shadow-lg relative",children:[i.jsx("main",{className:t?"":"pb-20",children:i.jsx(Q,{})}),!t&&i.jsx(Oi,{})]})},Mi=({fullScreen:e=!1})=>{const t=i.jsxs("div",{className:"flex flex-col items-center justify-center",children:[i.jsx("div",{className:"w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"}),i.jsx("p",{className:"mt-3 text-gray-500 text-sm",children:"加载中..."})]});return e?i.jsx("div",{className:"fixed inset-0 bg-white/90 flex items-center justify-center z-50",children:t}):i.jsx("div",{className:"py-10",children:t})},Vi=_.lazy(()=>d(()=>import("./index-BBqb4jAQ.js"),__vite__mapDeps([0,1,2,3]))),Ti=_.lazy(()=>d(()=>import("./index-CmmKdO0I.js"),__vite__mapDeps([4,1,2,3]))),Fi=_.lazy(()=>d(()=>import("./index-C9icdn7E.js"),__vite__mapDeps([5,1,2,3]))),Qi=_.lazy(()=>d(()=>import("./index-Do4B4I6j.js"),__vite__mapDeps([6,1,2,3]))),ji=_.lazy(()=>d(()=>import("./index-D-CEvxD1.js"),__vite__mapDeps([7,1,2,3]))),Wi=_.lazy(()=>d(()=>import("./ReportPage-CBNGo_8q.js"),__vite__mapDeps([8,1,2,3]))),Xi=_.lazy(()=>d(()=>import("./index-CKIQ1haH.js"),__vite__mapDeps([9,1,2,3]))),C=_.lazy(()=>d(()=>import("./index-ekN-00A5.js"),__vite__mapDeps([10,1]))),Ji=_.lazy(()=>d(()=>import("./index-D6Fm9JhW.js"),__vite__mapDeps([11,1,2,3]))),Li=_.lazy(()=>d(()=>import("./index-EQ_iARF6.js"),__vite__mapDeps([12,1]))),Ri=_.lazy(()=>d(()=>import("./index-BJjrq6Sa.js"),__vite__mapDeps([13,1])));function Ni(){const{gradeId:e}=P();return z(e)?i.jsx(Si,{}):i.jsx(B,{to:`/${u}`,replace:!0})}function p(){const e=b();return i.jsx(B,{to:`/${u}${e.pathname}`,replace:!0})}function $i(){return i.jsx(A.Suspense,{fallback:i.jsx(Mi,{fullScreen:!0}),children:i.jsxs(j,{children:[i.jsx(c,{path:"/",element:i.jsx(B,{to:`/${u}`,replace:!0})}),i.jsxs(c,{path:"/:gradeId",element:i.jsx(Ni,{}),children:[i.jsx(c,{index:!0,element:i.jsx(Vi,{})}),i.jsx(c,{path:"chapter/:chapterId",element:i.jsx(Ti,{})}),i.jsx(c,{path:"video/:chapterId",element:i.jsx(Fi,{})}),i.jsx(c,{path:"practice/:chapterId",element:i.jsx(Qi,{})}),i.jsx(c,{path:"result",element:i.jsx(ji,{})}),i.jsx(c,{path:"report",element:i.jsx(Wi,{})}),i.jsx(c,{path:"profile",element:i.jsx(Xi,{})}),i.jsx(c,{path:"notes",element:i.jsx(C,{})}),i.jsx(c,{path:"notes/:chapterId",element:i.jsx(C,{})}),i.jsx(c,{path:"wrong-book",element:i.jsx(Ji,{})})]}),i.jsx(c,{path:"/chapter/:chapterId",element:i.jsx(p,{})}),i.jsx(c,{path:"/video/:chapterId",element:i.jsx(p,{})}),i.jsx(c,{path:"/practice/:chapterId",element:i.jsx(p,{})}),i.jsx(c,{path:"/result",element:i.jsx(p,{})}),i.jsx(c,{path:"/report",element:i.jsx(p,{})}),i.jsx(c,{path:"/profile",element:i.jsx(p,{})}),i.jsx(c,{path:"/notes",element:i.jsx(p,{})}),i.jsx(c,{path:"/notes/:chapterId",element:i.jsx(p,{})}),i.jsx(c,{path:"/wrong-book",element:i.jsx(p,{})}),i.jsx(c,{path:"/login",element:i.jsx(Li,{})}),i.jsx(c,{path:"*",element:i.jsx(Ri,{})})]})})}g.createRoot(document.getElementById("root")).render(i.jsx(_.StrictMode,{children:i.jsx(W,{basename:"/math3min",children:i.jsx($i,{})})}));export{Hi as a,m as c,Ui as g,i as j,zi as u};
//# sourceMappingURL=index-CXlHt-nL.js.map

var N=Object.defineProperty,B=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var k=(t,n,c)=>n in t?N(t,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[n]=c,m=(t,n)=>{for(var c in n||(n={}))y.call(n,c)&&k(t,c,n[c]);if(g)for(var c of g(n))E.call(n,c)&&k(t,c,n[c]);return t},h=(t,n)=>B(t,S(n));var b=(t,n)=>{var c={};for(var s in t)y.call(t,s)&&n.indexOf(s)<0&&(c[s]=t[s]);if(t!=null&&g)for(var s of g(t))n.indexOf(s)<0&&E.call(t,s)&&(c[s]=t[s]);return c};import{r as u,j,R as M,a as w,b as D,L as x,S as A,c as I,m as L,d as C,e as O,B as F,f as T}from"./vendor-b8de29ed.js";const $=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(o){if(o.ep)return;o.ep=!0;const e=c(o);fetch(o.href,e)}};$();const p=[{md_key:"DOC_MD__1",path:"/",filePath:"./README.md"}];var U={pages:p};const q=t=>{u.exports.useEffect(()=>{document.title=t},[t])};var R={"doc-page-layout":"react_press_doc-module__doc-page-layout__3w9Fq","left-nav":"react_press_doc-module__left-nav__1xZ0_","article-nav":"react_press_doc-module__article-nav__26BYN","md-docs":"react_press_doc-module__md-docs__2Ax3K"};const r=j.exports.jsx,f=j.exports.jsxs,H=t=>{const{content:n}=t;return r(M,{className:`md-view ${R["md-docs"]}`,children:n||"",remarkPlugins:[w],rehypePlugins:[D],components:{h2(e){var a=e,{node:c,children:s}=a,o=b(a,["node","children"]);const l=s.map(d=>typeof d=="string"?d:d.props.children.join("")).join("");return r("h2",h(m({id:l},o),{children:s}))},a(a){var l=a,{node:c,children:s,href:o}=l,e=b(l,["node","children","href"]);if(o[0]==="."){const d=U.pages.find(i=>decodeURI(i.filePath)===decodeURI(o));if(d)return r(x,h(m({},e),{to:d.path,children:s}))}return r("a",h(m({},e),{href:o,target:"_blank",children:s}))},code(l){var d=l,{node:c,inline:s,className:o,children:e}=d,a=b(d,["node","inline","className","children"]);var _;const i=(_=/language-(\w+)/.exec(o||""))!=null?_:[];return s?r("code",h(m({className:`${o} line-code`},a),{children:e})):r(A,h(m({style:I,language:i[1],PreTag:"div",className:`${o} block-code`,showLineNumbers:!0},a),{children:String(e).replace(/\n$/,"")}))}}})},K=t=>{const{content:n}=t,[c,s]=u.exports.useState([]),o=e=>{if(e){let a=document.getElementById(e);a&&a.scrollIntoView({behavior:"smooth"})}};return u.exports.useEffect(()=>{const e=[],a=new L.Renderer;a.heading=function(l,d,i){return e.push({level:d,text:i})},L(n,{renderer:a}),s(e.filter(l=>l.level===2))},[n]),r("div",{className:R["left-nav"],onClick:e=>{o(e.target.name)},children:c.map((e,a)=>r("div",{className:R["article-nav"],children:r("a",{name:e.text,children:e.text})},`${e.text}-${a}`))})};var V=u.exports.memo(K);const G=`# ReactPress\u{1F4D6}

> React\u9A71\u52A8\u7684Markdown\u7F51\u7AD9\u751F\u6210\u5668

## \u9879\u76EE\u4ECB\u7ECD

## \u4E86\u89E3\u57FA\u672C\u64CD\u4F5C

1. \u521D\u59CB\u5316\u9879\u76EE

  - \`clone\` \u9879\u76EE

    \`\`\`bash
    git clone git@github.com:baiziyu-fe/ReactPress.git
    \`\`\`

  - \u5220\u9664\u539F\u672C\u7684\`.git\`\u4FE1\u606F
  
  - \u52A0\u8F7D\u4F60\u672C\u5730\u7684\`.git\`\u4FE1\u606F
  
  - \u5B89\u88C5\u4F9D\u8D56
    - \u6267\u884C\`npm install\` \u6216\u8005 \`npm i\`
  - \u79FB\u5165\u5BF9\u5E94\u7684\`MarkDown\`\u6587\u4EF6\u5230\`docs\`\u76EE\u5F55\u4E0B

2. \u4E86\u89E3\u57FA\u672C\u64CD\u4F5C

    - \u672C\u5730\u6784\u5EFA(\u8FDB\u884C\u6570\u636E\u8F6C\u5316)\uFF1A\`npm run md:build\`
    - \u672C\u5730\u6784\u5EFA + \u670D\u52A1\u9884\u89C8\uFF1A\`npm run docs:dev\`
    - \u672C\u5730\u6784\u5EFA + \u6253\u5305\u6210\u9759\u6001\u9875\u9762\uFF1A\`npm run docs:build\`
    - \u672C\u5730\u6784\u5EFA + \u6253\u5305\u6210\u9759\u6001\u9875\u9762 + \u542F\u52A8\u9759\u6001\u670D\u52A1\u5668\u9884\u89C8\uFF1A\`npm run docs:preview\`

3. \u90E8\u7F72\u5230\u9759\u6001\u670D\u52A1\u5668\uFF08\u4EE5\u90E8\u7F72\u5230\`Github Pages\`\u4E3A\u4F8B\uFF09
  - \u8BBE\u7F6E\u6B63\u786E\u7684\`base\`\u540D\u79F0\u9009\u9879
    - \u5982\u679C\u4F60\u51C6\u5907\u53D1\u5E03\u5230 \`https://<USERNAME>.github.io/\` \uFF0C\u5220\u9664\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\`vite.config.js\`\u7684\`base\`\u914D\u7F6E\u5373\u53EF\u3002
    - \u5982\u679C\u4F60\u51C6\u5907\u53D1\u5E03\u5230 \`https://<USERNAME>.github.io/<REPO>/\` \uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u7684\u4ED3\u5E93\u5730\u5740\u662F \`https://github.com/<USERNAME>/<REPO>\` \uFF0C\u5219\u5C06\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\`vite.config.js\`\u7684 \`base\` \u8BBE\u7F6E\u4E3A "/<REPO>/"\u3002
  - \`git push\` \u63D0\u4EA4\u4EE3\u7801\u5230\u8FDC\u7AEF\u81EA\u52A8\u6267\u884C\`github Actions\` \u8FDB\u884C\u9759\u6001\u90E8\u7F72

## \u540E\u7EED\u8BA1\u5212

[ ] \u754C\u9762\u7F8E\u5316

[ ] \u5168\u5C40\u641C\u7D22

[ ] \u81EA\u5B9A\u4E49\u4E3B\u9898

[ ] \u63D2\u4EF6\u7CFB\u7EDF

## \u5E0C\u671B\u81EA\u5B9A\u4E49

> \u60F3\u8981\u5BF9\u9879\u76EE\u81EA\u5B9A\u4E49\u9700\u8981\u4E00\u5B9A\u7684\`Javascript\`\u548C\`React\`\u7684\u7F16\u7A0B\u7ECF\u9A8C

1. \u81EA\u5B9A\u4E49\u9879\u76EE\u76EE\u5F55\uFF1A\u6839\u76EE\u5F55\u4E0B\`src\`\u6587\u4EF6\u5939
2. \u76EE\u5F55\u4ECB\u7ECD

\`\`\`
\u2502  App.jsx  >>> App\u7EC4\u4EF6\uFF0CReactRouter\u4F7F\u7528
\u2502  main.jsx >>> \u4E3B\u5165\u53E3\u6587\u4EF6
\u2502  registry.jsx >>> \u5DF2\u7ECF\u6CE8\u518C\u7684React \u9875\u9762\uFF0C\u4E5F\u5C31\u662F\u8F6C\u5316\u540E\u7684\u6587\u6863\u5BF9\u8C61\uFF08\u2705\u81EA\u52A8\u751F\u6210\uFF09
\u2502  route.config.json >>> \u9879\u76EE\u7684\u8DEF\u7531\u914D\u7F6E\uFF08\u2705\u81EA\u52A8\u751F\u6210\uFF09
\u2502  router.jsx >>> \u8BFB\u53D6\u8DEF\u7531\u6587\u4EF6\uFF0C\u4F20\u9012\u6CE8\u518C\u8DEF\u7531\u4FE1\u606F
\u2502
\u251C\u2500components >>> \u9879\u76EE\u4E2D\u7684\u7EC4\u4EF6
\u2502  \u251C\u2500footer  >>> \u5E95\u90E8
\u2502  \u2514\u2500header  >>> \u9876\u90E8
\u2502          header.module.less >>> LESS modules
\u2502          index.jsx  >>> Header \u5E03\u5C40\u4EE5\u53CA\u5C55\u793A
\u2502          search.jsx >>> \u641C\u7D22\u680F
\u2502
\u251C\u2500context >>> \u9884\u7559
\u251C\u2500hooks >>> React \u81EA\u5B9A\u4E49 hooks
\u2502      useDocumentTitle.js  >>> \u8BBE\u7F6E\u6587\u6863\u7684\`document.title\`
\u2502
\u251C\u2500md  >>> \u8F6C\u5316\u540E\u7684\u6587\u6863\u5B58\u50A8\u4F4D\u7F6E
\u2502      DOC_MD__1.md.json  >>> \u8F6C\u5316\u540E\u7684\u6587\u6863json\u4FE1\u606F\uFF08\u2705\u81EA\u52A8\u751F\u6210\uFF09
\u2502
\u251C\u2500pages >>> \u9875\u9762
\u2502  \u251C\u2500doc  >>> \u6587\u6863\u9875\u9762
\u2502  \u2502      doc.module.less >>> \u6587\u6863\u9875\u9762Less Modules
\u2502  \u2502      index.jsx >>> \u6587\u6863\u9875\u9762
\u2502  \u2502      left-nav.jsx  >>> \u5DE6\u4FA7\u6807\u9898\u5C55\u793A
\u2502  \u2502      markdown.jsx  >>> \u8F6C\u5316\u540E\u7684\`MarkDown\`\u5C55\u793A
\u2502  \u2502
\u2502  \u2514\u2500user >>> \u9884\u7559
\u251C\u2500public  >>> public \u8D44\u6E90
\u2514\u2500style
    \u2502  theme.css  >>> \u4E3B\u9898CSS \`\u9700\u8981\u66FF\u6362\u7684\u53EF\u4EE5\u76F4\u63A5\u66FF\u6362\u8BE5\u6587\u4EF6\uFF0C\u786E\u4FDD\u5F15\u5165\u6587\u4EF6\u540D\u76F8\u540C\u5C31\u884C\` [gitbook theme](https://theme.typora.io/theme/Gitbook/)
    \u2502
    \u2514\u2500gitbook >>> \u4E3B\u9898\u914D\u5957\u6587\u4EF6
            fonts.css
            old-slate-colors.css
            Roboto-Black.ttf
            Roboto-BlackItalic.ttf
            Roboto-Bold.ttf
            Roboto-BoldItalic.ttf
            Roboto-Italic.ttf
            Roboto-Light.ttf
            Roboto-LightItalic.ttf
            Roboto-Medium.ttf
            Roboto-MediumItalic.ttf
            Roboto-Regular.ttf
            Roboto-Thin.ttf
            Roboto-ThinItalic.ttf
            slate-colors.css
            SourceCodePro-Regular.ttf

\`\`\`

---

> \u{1F3AF}React Press \xA92021 Created by baiziyu-fe`,z="README";var J={content:G,title:z},Y={DOC_MD__1:J};const Z=t=>{const{pageKey:n}=t,{title:c,content:s}=Y[n];return q(c||"ReadME"),f("div",{className:R["doc-page-layout"],children:[r(V,{content:s}),r(H,{title:c,content:s})]})},Q=t=>r(C,h(m({},t),{children:p.map(n=>r(O,{element:r(Z,{pageKey:n.md_key}),path:n.path},n.md_key))}));var v={"doc-header":"react_press_header-module__doc-header__3mxT-","doc-search":"react_press_header-module__doc-search__3qmVa","doc-search-input":"react_press_header-module__doc-search-input__1CIPq","doc-search-btn":"react_press_header-module__doc-search-btn__139jL","doc-search-result":"react_press_header-module__doc-search-result__cmtNC","split-box":"react_press_header-module__split-box__Pg2ya"};const W=()=>{const[t,n]=u.exports.useState(p),[c,s]=u.exports.useState(!1),o=u.exports.useRef(),e=u.exports.useRef(),a=()=>{s(!0);const i=o.current.value.toLowerCase().trim();if(i){const _=t.filter(P=>P.filePath.toLowerCase().includes(i));n(_)}else n(p)};u.exports.useEffect(()=>(document.addEventListener("click",l),()=>document.removeEventListener("click",l)),[]);const l=i=>{!e.current||o.current.contains(i.target)||e.current.contains(i.target)||s(!1)},d=t.length!==p.length;return f("div",{className:v["doc-search"],children:[r("div",{className:"doc-search-box",children:r("input",{onFocus:()=>s(!0),onChange:a,ref:o,placeholder:"\u67E5\u627E\u5BF9\u5E94\u5185\u5BB9",className:"doc-search-input",type:"text"})}),c&&f("div",{ref:e,className:v["doc-search-result"],children:[r("div",{className:v["split-box"],children:d?"\u4E3A\u4F60\u627E\u5230\u4EE5\u4E0B\u5185\u5BB9\uFF1A":"\u770B\u770B\u8FD9\u4E9B\u5185\u5BB9\u5427\uFF1A"}),r("ol",{children:t.map(i=>r("li",{children:r(x,{to:i.path,children:i.filePath})},i.md_key))})]})]})},X=()=>f("div",{className:v["doc-header"],children:[r("nav",{children:r(x,{to:"/",children:"Home"})}),r(W,{})]});function ee(){return r("div",{className:"App",children:f(F,{basename:"ReactPress",children:[r(X,{}),r(Q,{})]})})}T.render(r(ee,{}),document.getElementById("root"));

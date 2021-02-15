(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(122)),i={slug:"1-3",title:"Remotion 1.3",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},c={permalink:"/blog/1-3",editUrl:"https://github.com/Jonnyburger/remotion/edit/main/packages/docs/blog/blog/2021-02-15-remotion-1-3.md",source:"@site/blog/2021-02-15-remotion-1-3.md",description:"Only 1 week after the initial launch, here is Remotion 1.3! In just 7 days, we have merged over 40 pull requests - just amazing! Let's go over the changes in this release.",date:"2021-02-15T00:00:00.000Z",tags:[],title:"Remotion 1.3",readingTime:3.11,truncated:!1,nextItem:{title:"Remotion 1.2",permalink:"/blog/1-2"}},p=[{value:"2x faster - again!",id:"2x-faster---again",children:[]},{value:"Plain-Javascript support",id:"plain-javascript-support",children:[]},{value:"Type-safe configuration file",id:"type-safe-configuration-file",children:[]},{value:"Easing API",id:"easing-api",children:[]},{value:"The small things",id:"the-small-things",children:[]},{value:"In case you missed it",id:"in-case-you-missed-it",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Only 1 week after the initial launch, here is Remotion 1.3! In just 7 days, we have merged over 40 pull requests - just amazing! Let's go over the changes in this release."),Object(o.b)("h2",{id:"2x-faster---again"},"2x faster - again!"),Object(o.b)("p",null,"2 days ago, the rendering time was cut in half, and in this release, we managed to half it again! Check out this benchmark of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion-wrapped"}),"Spotify Wrapped")," example:"),Object(o.b)("p",null,"Remotion 1.1"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"hyperfine --min-runs 5  'npm run build -- --overwrite --concurrency=16'\nBenchmark #1: npm run build -- --overwrite --concurrency=16\n  Time (mean \xb1 \u03c3):     98.972 s \xb1  0.650 s    [User: 123.329 s, System: 10.103 s]\n  Range (min \u2026 max):   97.951 s \u2026 99.540 s    5 runs\n")),Object(o.b)("p",null,"Remotion 1.3"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"hyperfine --min-runs 5  'npm run build -- --overwrite --concurrency=16'\nBenchmark #1: npm run build -- --overwrite --concurrency=16\n  Time (mean \xb1 \u03c3):     17.921 s \xb1  0.224 s    [User: 36.492 s, System: 3.482 s]\n  Range (min \u2026 max):   17.650 s \u2026 18.264 s    5 runs\n")),Object(o.b)("p",null,"From 98 to 18 seconds - that's 5.5 times faster! At the same time, we have reached an important milestone: This 19-second long 720p video was rendered faster than realtime. Granted, my computer is faster than most (8-core Intel i9-9900K chip), but still very impressive!"),Object(o.b)("p",null,"We achieved this performance gain through various Puppeteer rendering pipeline optimizations. Big shoutout to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jeetiss"}),"jeetiss")," who implemented a sophisticated performance optimization that doesn't require a page reload for each frame anymore."),Object(o.b)("h2",{id:"plain-javascript-support"},"Plain-Javascript support"),Object(o.b)("p",null,"My goal was to force Typescript on everybody - but I failed. Support for plain Javascript is now added! See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/javascript"}),"here")," how to enable it. Proceed carefully \ud83d\ude48"),Object(o.b)("h2",{id:"type-safe-configuration-file"},"Type-safe configuration file"),Object(o.b)("p",null,"Many options which you could pass in via CLI flags, you can now also add by adding a ",Object(o.b)("inlineCode",{parentName:"p"},"remotion.config.ts")," file in the repo. For example, if you want to increase the parallelism to the amount of threads you have and never want to write ",Object(o.b)("inlineCode",{parentName:"p"},"--overwrite"),", you can add the following to the config file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import os from 'os';\nimport {Config} from 'remotion';\n\nConfig.Rendering.setConcurrency(os.cpus().length);\nConfig.Output.setOverwriteOutput(true);\n")),Object(o.b)("p",null,"You can see all the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.remotion.dev/docs/config"}),"options on this page"),". The goal of making a config file in Typescript is to provide autocomplete, to easily highlight deprecated options and making it easier to show how to migrate in case the options change in the future."),Object(o.b)("h2",{id:"easing-api"},"Easing API"),Object(o.b)("p",null,"While there was an Easing API, it was undocumented. Learn which ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/easing"}),"Easing methods")," are available and how to use it with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/interpolate"}),Object(o.b)("inlineCode",{parentName:"a"},"interpolate()")),"!"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {interpolate, Easing} from 'remotion';\n\ninterpolate(frame, [0, 100], {\n  easing: Easing.bezier(0.8, 0.22, 0.96, 0.65),\n  extrapolateLeft: 'clamp',\n  extrapolateRight: 'clamp',\n})\n")),Object(o.b)("h2",{id:"the-small-things"},"The small things"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The exports of Remotion have been cleaned up and the internal stuff has been moved into ",Object(o.b)("inlineCode",{parentName:"p"},"Internals"),". You shouldn't rely on these APIs are you are at risk of them changing over time.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/83"}),"The bundling step now has a progress indicator."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config#setpixelformat"}),"You can now configure a different pixel format that will be passed to FFMPEG"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/95"}),"Class properties are now supported."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/91"}),"PNG sequences now have padded filenames (",Object(o.b)("inlineCode",{parentName:"a"},"element-0000.png")," instead of ",Object(o.b)("inlineCode",{parentName:"a"},"element-0.png"),") for better interoperability with ImageMagick and for ensuring the right order in file explorers"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/98"}),"Better error messages for when FFMPEG is not correctly linked on Windows"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/92"}),"Lots")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/93"}),"of")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/85"}),"spelling")," mistakes fixed!")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/78"}),"Added analytics for docs")," - You can see how many page views the Remotion docs get ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.splitbee.io/projects/remotion.dev"}),"here"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/97"}),"Fixed an issue with PowerShell"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/issues/69"}),'Fixed a puppeteer issue "Session closed. Most likely the page has been closed"'),"."))),Object(o.b)("h2",{id:"in-case-you-missed-it"},"In case you missed it"),Object(o.b)("p",null,"Another example was added - ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/JNYBGR/status/1360269270526136320"}),"Spotify Wrapped!")," This is a fully dynamic example where you can replace all data with a command line flag. There's a 2 hour tutorial on YouTube and the source code is on Github."))}l.isMDXComponent=!0}}]);
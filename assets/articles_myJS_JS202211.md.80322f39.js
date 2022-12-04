import{_ as s,c as n,o as a,b as p}from"./app.157a9db3.js";const C=JSON.parse('{"title":"JS 202211","description":"","frontmatter":{},"headers":[{"level":2,"title":"import \u548C require","slug":"import-\u548C-require","link":"#import-\u548C-require","children":[]}],"relativePath":"articles/myJS/JS202211.md"}'),l={name:"articles/myJS/JS202211.md"},o=p(`<h1 id="js-202211" tabindex="-1">JS 202211 <a class="header-anchor" href="#js-202211" aria-hidden="true">#</a></h1><p>\u672C\u6708\u5DE5\u4F5C\u7E41\u5FD9\uFF0C\u6CA1\u592A\u5728\u610F\u9047\u5230\u7684\u5947\u602A\u95EE\u9898\uFF0C\u968F\u4FBF\u8BB0\u5F55\u51E0\u70B9\u5427\u3002</p><h2 id="import-\u548C-require" tabindex="-1">import \u548C require <a class="header-anchor" href="#import-\u548C-require" aria-hidden="true">#</a></h2><ol><li><p>\u9075\u5FAA\u89C4\u8303\u4E0D\u540C\uFF1A</p><p>\u200B require/exports \u9075\u5FAA CommonJS</p><p>\u200B import/export \u9075\u5FAA ES6</p></li><li><p>\u52A0\u8F7D\u65F6\u673A\u4E0D\u540C</p><p>\u200B CommonJS \u52A0\u8F7D\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF08\u5373 module.exports \u5C5E\u6027\uFF09\uFF0C\u8BE5\u5BF9\u8C61\u53EA\u6709\u5728\u811A\u672C\u8FD0\u884C\u5B8C\u624D\u4F1A\u751F\u6210\u3002\u800C ES6 \u6A21\u5757\u4E0D\u662F\u5BF9\u8C61\uFF0C\u5B83\u7684\u5BF9\u5916\u63A5\u53E3\u53EA\u662F\u4E00\u79CD\u9759\u6001\u5B9A\u4E49\uFF0C\u5728\u4EE3\u7801\u9759\u6001\u89E3\u6790\u9636\u6BB5\u5C31\u4F1A\u751F\u6210\u3002- \u962E\u4E00\u5CF0</p></li><li><p>require\u8F93\u51FA\u7684\u662F\u4E00\u4E2A\u62F7\u8D1D\u503C\uFF0Cimport\u8F93\u51FA\u7684\u662F\u503C\u7684\u5F15\u7528</p><p>\u200B require \u8F93\u51FA\u7684\u662F\u503C\u7684\u62F7\u8D1D\uFF0C\u5916\u90E8\u7684\u4FEE\u6539\u4E0D\u4F1A\u5F71\u54CD\u8F93\u51FA\u6E90\u3002</p><p>\u200B import\u8F93\u51FA\u7684\u662F\u503C\u7684\u5F15\u7528\uFF0C\u5916\u90E8\u7684\u4FEE\u6539\u4F1A\u5F71\u54CD\u8F93\u51FA\u6E90\u3002</p></li><li><p>ES6 \u6A21\u5757\u652F\u6301\u5728 import \u5F15\u7528\u8BED\u53E5\u524D\u4F7F\u7528\u6A21\u5757\uFF0CCommonJS \u5219\u9700\u8981\u5148 require\u5F15\u7528 \u540E\u4F7F\u7528</p></li></ol><p>\u5BF9\u4E8E \u540E\u7AEF\u8BF7\u6C42\u63A5\u53E3api \u7684\u5F15\u5165\uFF0C\u4E4B\u524D\u5E72\u4E86\u633A\u8822\u7684\u4E8B\u60C5\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u5BFC\u51FA</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">getInfoApi</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// ......</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ......</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// \u5F15\u5165</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Api </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/api/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>\u4EE5\u81F3\u4E8E\uFF0C\u5728\u9875\u9762\u7684\u5C0F\u6A21\u5757\u4E2D\u5F15\u5165api\uFF0C\u4E5F\u4F1A\u6574\u4F53\u5F15\u5165\u3002</p><p><strong>\u5B8C\u5168\u5FD8\u4E86 export \u548C import \u8FD8\u6709\u8FD9\u4E00\u832C</strong></p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getInfoApi1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;"> 	</span><span style="color:#676E95;">// ......</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getInfoApi2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">anys</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;">// ......</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u9010\u4E2A\u5F15\u5165</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getInfoApi1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getInfoApi1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/api/index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u6574\u4F53\u5F15\u5165</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> MyApi </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/api/index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u59D1\u4E14\u5148\u8BB0\u5F55\u8FD9\u70B9\uFF0C\u7B49\u4EE3\u7801\u56DE\u987E\u540E\u770B\u770B\u80FD\u6709\u5565\u8865\u4E0A\u7684\u3002</p>`,10),e=[o];function t(r,c,D,i,F,y){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};

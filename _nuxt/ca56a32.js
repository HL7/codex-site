(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iNS42NTcyMyIgd2lkdGg9IjgiIGhlaWdodD0iOCIgcng9IjEiIHRyYW5zZm9ybT0icm90YXRlKC00NSAwIDUuNjU3MjMpIiBmaWxsPSIjNjI1RDVEIi8+Cjwvc3ZnPgo="},369:function(t,e,n){"use strict";var r=n(2),o=n(385);r({target:"String",proto:!0,forced:n(386)("link")},{link:function(t){return o(this,"a","href",t)}})},385:function(t,e,n){var r=n(4),o=n(23),c=n(12),l=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var x=c(o(t)),m="<"+e;return""!==n&&(m+=" "+n+'="'+d(c(r),l,"&quot;")+'"'),m+">"+x+"</"+e+">"}},386:function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},414:function(t,e,n){"use strict";n.r(e);n(369);var r={props:{item:{type:Object,required:!0}},computed:{textSize:function(){return(this.item.source+this.item.date).length>27?"text-[10px]":"text-[12px]"}}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-backgroundgrey border-t-4 border-lightbrown news-card"},[e("h1",{staticClass:"satoshi-bold font-black font-16px underline",attrs:{tabindex:"1"}},[e("a",{attrs:{target:"_blank",href:t.item.link}},[t._v(t._s(t.item.title))])]),t._v(" "),e("h2",{class:"flex py-2 font-bold text-newsgrey sm:text-[16px] "+t.textSize,attrs:{tabindex:"1"}},[t._v("\n    "+t._s(t.item.source)+"\n    "),e("img",{staticClass:"px-2",attrs:{src:n(366)}}),t._v("\n    "+t._s(t.item.date)+"\n  ")]),t._v(" "),e("p",{attrs:{tabindex:"1"}},[t._v(t._s(t.item.summary))])])}),[],!1,null,null,null);e.default=component.exports}}]);
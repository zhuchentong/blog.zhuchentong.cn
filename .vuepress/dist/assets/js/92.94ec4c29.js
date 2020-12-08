(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{409:function(n,e,t){"use strict";t.r(e);var a=t(39),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("今天来说说，"),t("code",[n._v("JSON.stringify")]),n._v("这个方法，一般我们使用JSON.stringify来将对象转换为字符串:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('var obj = {\n    a: 1,\n    b: 2,\n    c: 3\n}\n\nvar strObj = JSON.stringify(obj)\n\nconsole.log(strObj)  // {"a":1,"b":2,"c":3}\n')])])]),t("p",[n._v("这是我们一般常见的用法，但是他的问题是一些非数组类型的对象不能得到很好的转换支持。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('var obj = {\n  a: 1,\n  b: 2,\n  c: function() {\n    return this.a;\n  },\n  d: new Set([1, 2, 3])\n};\n\nvar strObj = JSON.stringify(obj);\n\nconsole.log(strObj);\t// {"a":1,"b":2,"d":{}}\n')])])]),n._v(" "),t("p",[n._v("可以看到"),t("code",[n._v("JSON.stringify")]),n._v("忽略了"),t("code",[n._v("c")]),n._v(", 并且将"),t("code",[n._v("d")]),n._v("转换为了空对象"),t("code",[n._v("{}")])]),n._v(" "),t("p",[n._v("我们需要更了解"),t("code",[n._v("JSON.stringify")]),n._v("来处理这个问题:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("JSON.stringify(value[, replacer [, space]])\n")])])]),t("p",[n._v("在"),t("code",[n._v("JSON.stringify")]),n._v("的"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"}},[n._v("MDN文档"),t("OutboundLink")],1),n._v("中描述了"),t("code",[n._v("JSON.stringify")]),n._v("方法共有三个参数，其中第二个参数是一个"),t("strong",[n._v("转换器")]),n._v(",可以对访问值进行对应的转换和处理，第三个参数是缩进字符，用于美化输出。")]),n._v(" "),t("p",[n._v("好的，那让我们来添加一个转换器用于处理之前的问题：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('var obj = {\n  a: 1,\n  b: 2,\n  c: function() {\n    return this.a;\n  },\n  d: new Set([1, 2, 3])\n};\n\nvar convert = (key, value) => {\n  if (value instanceof Function) return value.call(obj);\n  if (value instanceof Set) return [...value];\n\n  return value;\n};\n\nvar strObj = JSON.stringify(obj, convert);\n\nconsole.log(strObj);  // {"a":1,"b":2,"c":1,"d":[1,2,3]}\n')])])]),t("p",[n._v("可以看到现在打印的"),t("code",[n._v("c")]),n._v("值和"),t("code",[n._v("d")]),n._v("值已经出来了，其实就是我们自己去实现一个转换器来实现对应的转换功能。")]),n._v(" "),t("p",[n._v("还有第二个参数，可以修改我们的缩进符，他支持输入数字(数字大于10，只会生成10个占位符)，字符串(字符串长度大于10，只会截取前10个):")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('var obj = {\n  a: 1,\n  b: 2\n};\n\nvar strObj = JSON.stringify(obj, null, 2);\n\nconsole.log(strObj);\n\n{\n  "a": 1,\n  "b": 2\n}\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('var obj = {\n  a: 1,\n  b: 2\n};\n\nvar strObj = JSON.stringify(obj, null, \'-_-000\');\n\nconsole.log(strObj)\n\n{\n-_-000"a": 1,\n-_-000"b": 2\n}\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
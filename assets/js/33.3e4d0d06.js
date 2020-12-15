(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{373:function(t,s,a){"use strict";a.r(s);var n=a(33),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"动态库清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态库清单"}},[t._v("#")]),t._v(" 动态库清单")]),t._v(" "),a("p",[t._v("在工程规模足够复杂的项目中，要想清楚的知道哪些库引入了哪些动态库，对于开发者来说，也是一件麻烦的事件，为了方便开发者排查动态库相关的问题，*Booster 提供了 "),a("a",{attrs:{href:"https://github.com/didi/booster/blob/master/booster-task-list-shared-library",target:"_blank",rel:"noopener noreferrer"}},[t._v("booster-task-list-shared-library"),a("OutboundLink")],1),t._v(" 模块，用于列出工程中依赖的 "),a("em",[t._v("AAR")]),t._v(" 中使用的所有的动态库。")]),t._v(" "),a("h2",{attrs:{id:"如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),a("p",[t._v("在根工程的 "),a("em",[t._v("build.gradle")]),t._v(" 中引入 "),a("a",{attrs:{href:"https://github.com/didi/booster/blob/master/booster-task-list-shared-library",target:"_blank",rel:"noopener noreferrer"}},[t._v("booster-task-list-shared-library"),a("OutboundLink")],1),t._v(" 模块，如下所示：")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("buildscript "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ext "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        kotlin_version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.3.31'")]),t._v("\n        booster_version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1.0'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    repositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenLocal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("google")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jcenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://oss.sonatype.org/content/repositories/public/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://oss.sonatype.org/content/repositories/snapshots/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    dependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        classpath "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.android.tools.build:gradle:3.5.0'")]),t._v("\n        classpath "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"org.jetbrains.kotlin:kotlin-gradle-plugin:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("kotlin_version")]),t._v('"')]),t._v("\n        classpath "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.didiglobal.booster:booster-gradle-plugin:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("booster_version")]),t._v('"')]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 👇👇👇👇 引用这个模块 👇👇👇👇 */")]),t._v("\n        classpath "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.didiglobal.booster:booster-task-list-shared-library:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("booster_version")]),t._v('"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后，在命令行中执行 "),a("code",[t._v("listSharedLibraries")]),t._v(" 任务：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./gradlew listSharedLibraries\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
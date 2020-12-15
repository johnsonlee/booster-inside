(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{370:function(t,s,n){"use strict";n.r(s);var a=n(33),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"快速上手（进阶版）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速上手（进阶版）"}},[t._v("#")]),t._v(" 快速上手（进阶版）")]),t._v(" "),n("h2",{attrs:{id:"无侵入集成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#无侵入集成"}},[t._v("#")]),t._v(" 无侵入集成")]),t._v(" "),n("p",[t._v("通过 "),n("em",[t._v("Gradle")]),t._v(" 提供的 "),n("a",{attrs:{href:"https://docs.gradle.org/current/userguide/init_scripts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Initialization Scripts"),n("OutboundLink")],1),t._v("，这样可以在不修改工程的代码的情况下集成 "),n("em",[t._v("Booster")]),t._v(" 实现完全无侵入的性能优化，尤其是在 "),n("em",[t._v("CI")]),t._v(" 环境中。")]),t._v(" "),n("p",[n("em",[t._v("Gradle")]),t._v(" 支持两类接入 "),n("a",{attrs:{href:"https://docs.gradle.org/current/userguide/init_scripts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Initialization Scripts"),n("OutboundLink")],1),t._v(" 的方式：")]),t._v(" "),n("ol",[n("li",[t._v("命令行参数\n"),n("ul",[n("li",[t._v("通过 "),n("code",[t._v("-I")]),t._v(" 或者 "),n("code",[t._v("--init-script")]),t._v(" 指定 "),n("a",{attrs:{href:"https://docs.gradle.org/current/userguide/init_scripts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Initialization Scripts"),n("OutboundLink")],1),t._v(" 文件，这种方式比较灵活，而且能控制 "),n("a",{attrs:{href:"https://docs.gradle.org/current/userguide/init_scripts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Initialization Scripts"),n("OutboundLink")],1),t._v(" 的影响范围。")])])]),t._v(" "),n("li",[n("em",[t._v("Gradle")]),t._v(" 目录\n"),n("ul",[n("li",[t._v("在 "),n("code",[t._v("USER_HOME/.gradle/")]),t._v(" 目录下配置 "),n("code",[t._v("init.gradle")]),t._v(" 文件")]),t._v(" "),n("li",[t._v("在 "),n("code",[t._v("USER_HOME/.gradle/init.d/")]),t._v(" 目录下配置扩展名为 "),n("code",[t._v(".gradle")]),t._v(" 的文件（"),n("em",[t._v("Kotlin")]),t._v(" 则为 "),n("code",[t._v(".init.gradle.kts")]),t._v("）")]),t._v(" "),n("li",[t._v("在 "),n("code",[t._v("USER_HOME/init.d/")]),t._v(" 目录下配置扩展名为 "),n("code",[t._v(".gradle")]),t._v(" 的文件（"),n("em",[t._v("Kotlin")]),t._v(" 则为 "),n("code",[t._v(".init.gradle.kts")]),t._v("）")])])])]),t._v(" "),n("p",[t._v("以线程优化为例，在工程根目录创建 "),n("code",[t._v("init.gradle")]),t._v(" 文件，其内容如下：")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[t._v("allprojects "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" project "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n    buildscript "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("booster_version "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1.0'")]),t._v("\n        repositories "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenLocal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("google")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("jcenter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            maven "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://oss.sonatype.org/content/repositories/public'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        dependencies "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            classpath "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.didiglobal.booster:booster-gradle-plugin:'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("booster_version")]),t._v('"')]),t._v("\n            classpath "),n("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.didiglobal.booster:booster-transform-thread:'),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("booster_version")]),t._v('"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    repositories "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenLocal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("google")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("jcenter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        maven "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://oss.sonatype.org/content/repositories/public'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    project"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("afterEvaluate "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("project"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extensions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findByName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            project"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apply plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.didiglobal.booster'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这样，就可以通过命令行指定 "),n("a",{attrs:{href:"https://docs.gradle.org/current/userguide/init_scripts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Initialization Scripts"),n("OutboundLink")],1),t._v(" 参数的方式集成 "),n("em",[t._v("Booster")]),t._v(" 了：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("./gradlew -I init.gradle assembleDebug\n")])])]),n("p",[t._v("当然，也可以通过 "),n("em",[t._v("Gradle")]),t._v(" 目录的方式来接入 "),n("em",[t._v("Booster")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);
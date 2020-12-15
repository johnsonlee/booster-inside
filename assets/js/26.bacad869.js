(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{335:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"资源为-null-的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源为-null-的问题"}},[t._v("#")]),t._v(" 资源为 null 的问题")]),t._v(" "),a("p",[t._v("相信很多 "),a("em",[t._v("Android")]),t._v(" 开发者都遇到像这样的崩溃：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("java.lang.NullPointerException: Attempt to invoke virtual method 'android.content.res.AssetManager android.content.res.Resources.getAssets()' on a null object reference\n    at android.app.LoadedApk.getAssets(LoadedApk.java:581)\n    at android.app.LoadedApk.prepareResources(LoadedApk.java:643)\n    at android.app.LoadedApk.makeApplication(LoadedApk.java:636)\n    at android.app.ActivityThread.handleBindApplication(ActivityThread.java:4673)\n    at android.app.ActivityThread.access$1500(ActivityThread.java:162)\n    at android.app.ActivityThread$H.handleMessage(ActivityThread.java:1409)\n    at android.os.Handler.dispatchMessage(Handler.java:102)\n    at android.os.Looper.loop(Looper.java:135)\n    at android.app.ActivityThread.main(ActivityThread.java:5422)\n    at java.lang.reflect.Method.invoke(Native Method)\n    at java.lang.reflect.Method.invoke(Method.java:372)\n    at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:914)\n    at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:707)\n")])])]),a("h2",{attrs:{id:"根本原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根本原因"}},[t._v("#")]),t._v(" 根本原因")]),t._v(" "),a("p",[t._v("这种问题基本上都是发生在覆盖安装之后，"),a("em",[t._v("App")]),t._v(" 由 "),a("em",[t._v("Broadcast")]),t._v(" 唤起，由于系统 bug 导致加载了旧的 "),a("em",[t._v("APK")]),t._v("，一般表现出来的异常有：")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("Context.getResources()")]),t._v(" 返回 "),a("code",[t._v("null")])]),t._v(" "),a("li",[a("em",[t._v("Class.getResourceAsStream()")]),t._v(" 返回 "),a("code",[t._v("null")])]),t._v(" "),a("li",[a("em",[t._v("Context.getAssets()")]),t._v(" 抛出 "),a("code",[t._v("NullPointerException")])]),t._v(" "),a("li",[a("em",[t._v("Context.getSystemService(Context.AUDIO_SERVICE)")]),t._v(" 抛出 "),a("code",[t._v("NullPointerException")])])]),t._v(" "),a("h2",{attrs:{id:"解决思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[t._v("#")]),t._v(" 解决思路")]),t._v(" "),a("p",[t._v("像这样的系统 bug，可能跟系统版本有关，也没有什么通用的解决方案，所以 "),a("em",[t._v("Booster")]),t._v(" 的解决思路是，在 "),a("em",[t._v("Application")]),t._v(" 启动的时候，对 "),a("em",[t._v("Resources")]),t._v(" 和 "),a("em",[t._v("Assets")]),t._v(" 进行检查，如果 "),a("code",[t._v("Resources")]),t._v(" 或者 "),a("code",[t._v("AssetManager")]),t._v(" 为 "),a("code",[t._v("null")]),t._v("，直接杀进程：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResChecker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkRes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAssets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myPid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("w")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Process "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" is going to be killed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("killProcess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),a("p",[t._v("修复覆盖安装导致的 "),a("code",[t._v("NullPointerException")]),t._v(" 只需要引入 "),a("a",{attrs:{href:"https://github.com/didi/booster/blob/master/booster-transform-res-check",target:"_blank",rel:"noopener noreferrer"}},[t._v("booster-transform-res-check"),a("OutboundLink")],1),t._v(" 即可，如下所示：")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("buildscript "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ext "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        kotlin_version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.3.31'")]),t._v("\n        booster_version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1.0'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    repositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenLocal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("google")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jcenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://oss.sonatype.org/content/repositories/public/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://oss.sonatype.org/content/repositories/snapshots/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    dependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        classpath "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.android.tools.build:gradle:3.5.0'")]),t._v("\n        classpath "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"org.jetbrains.kotlin:kotlin-gradle-plugin:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("kotlin_version")]),t._v('"')]),t._v("\n        classpath "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.didiglobal.booster:booster-gradle-plugin:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("booster_version")]),t._v('"')]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 👇👇👇👇 引用这个模块 👇👇👇👇 */")]),t._v("\n        classpath "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.didiglobal.booster:booster-transform-res-check:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("booster_version")]),t._v('"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
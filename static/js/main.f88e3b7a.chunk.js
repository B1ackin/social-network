(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={nav:"Navbar_nav__39050",item:"Navbar_item__3kXBA",activeLink:"Navbar_activeLink__2ULO0"}},,function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__znGEb",dialogsItems:"Dialogs_dialogsItems__MkvMX",dialog:"Dialogs_dialog__vZvx9",messages:"Dialogs_messages__2FeeQ",message:"Dialogs_message__1KdUP"}},,,function(e,a,t){e.exports={postBlock:"MyPosts_postBlock__I1Dza",posts:"MyPosts_posts__1rcq0"}},,function(e,a,t){e.exports={item:"Post_item__-BLGl"}},,,function(e,a,t){},,,,function(e,a,t){e.exports={header:"Header_header__1i5OU"}},,function(e,a,t){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2SUc9"}},function(e,a,t){e.exports=t.p+"static/media/obl.5c924273.jpg"},function(e,a,t){e.exports=t(36)},,,,,function(e,a,t){},,,,,,function(e,a,t){e.exports={content:"Profile_content__-nV2b"}},function(e,a,t){"use strict";t.r(a);t(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=t(0),s=t.n(n),i=t(19),o=t.n(i),r=(t(29),t(20)),l=t.n(r);var c=function(){return s.a.createElement("header",{className:l.a.header},s.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Vkontakte.png/1200px-Vkontakte.png",alt:"logo"}))},m=t(6),d=t.n(m),u=t(7);var p=function(){return s.a.createElement("nav",{className:d.a.nav},s.a.createElement("div",{className:d.a.item},s.a.createElement(u.b,{to:"/profile",activeClassName:d.a.activeLink},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),s.a.createElement("div",{className:d.a.item},s.a.createElement(u.b,{to:"/dialogs",activeClassName:d.a.activeLink},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),s.a.createElement("div",{className:d.a.item},s.a.createElement(u.b,{to:"/news",activeClassName:d.a.activeLink},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")),s.a.createElement("div",{className:d.a.item},s.a.createElement(u.b,{to:"/music",activeClassName:d.a.activeLink},"\u041c\u0443\u0437\u044b\u043a\u0430")),s.a.createElement("div",{className:d.a.item},s.a.createElement(u.b,{to:"/settings",activeClassName:d.a.activeLink}," \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")))},g=(t(35),t(11)),v=t.n(g),E=t(13),f=t.n(E);var _=function(e){return s.a.createElement("div",{className:f.a.item},s.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnwyJfE07eNN3BV-nBAVSQaGKodNh-UyxjFbDEFwpNR-efHwjy&usqp=CAU"}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,"like")," ",e.likesCount))};var P=function(e){var a=e.posts.map((function(e){return s.a.createElement(_,{message:e.message,likesCount:e.likesCount})}));return s.a.createElement("div",{className:v.a.postBlock},s.a.createElement("div",null,s.a.createElement("h3",null,"My Posts")),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("textarea",{onChange:function(a){e.updateNewPostText(a.currentTarget.value)},value:e.newPostText})),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.addPost(e.newPostText)}},"Add post"))),s.a.createElement("div",{className:v.a.posts},a))},N=t(22),k=t.n(N),w=t(23),x=t.n(w);var h=function(){return s.a.createElement("div",null,s.a.createElement("img",{src:x.a}),s.a.createElement("div",{className:k.a.descriptionBlock},"avatar + description"))};var b=function(e){return s.a.createElement("div",null,s.a.createElement(h,null),s.a.createElement(P,{posts:e.profilePage.posts,addPost:e.addPost,newPostText:e.profilePage.newPostText,updateNewPostText:e.updateNewPostText}))},C=t(8),y=t.n(C),T=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:y.a.dialog},s.a.createElement(u.b,{to:a},e.name))},B=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:y.a.message},e.message))};var D=function(e){var a=e.dialogsPage.dialogsData.map((function(e){return s.a.createElement(T,{name:e.name,id:e.id})})),t=e.dialogsPage.messageData.map((function(e){return s.a.createElement(B,{message:e.message})})),n=s.a.createRef();return s.a.createElement("div",{className:y.a.dialogs},s.a.createElement("div",{className:y.a.dialogsItems},a),s.a.createElement("div",{className:y.a.messages},t,s.a.createElement("textarea",{ref:n}),s.a.createElement("button",{onClick:function(){var e;alert(null===(e=n.current)||void 0===e?void 0:e.value)}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))},I=t(1);var A=function(e){return s.a.createElement(u.a,null,s.a.createElement("div",{className:"app-all-wrapper"},s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(c,null),s.a.createElement(p,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(I.a,{path:"/profile",render:function(){return s.a.createElement(b,{profilePage:e.state.profilePage,addPost:e.addPost,updateNewPostText:e.updateNewPostText})}}),s.a.createElement(I.a,{path:"/dialogs",render:function(){return s.a.createElement(D,{dialogsPage:e.state.dialogsPage})}})))))},L={profilePage:{posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"Its my first post",likesCount:11},{id:2,message:"Its my first post",likesCount:11},{id:2,message:"Its my first post",likesCount:11}],newPostText:"IT-KAMASUTRA.COM"},dialogsPage:{dialogsData:[{id:1,name:"\u0418\u0433\u043e\u0440\u044c"},{id:2,name:"\u0412\u0430\u0441\u0438\u043b\u0438\u0439"},{id:3,name:"\u041f\u0435\u0442\u0440"},{id:4,name:"\u041c\u0438\u0445\u0430\u0438\u043b"},{id:5,name:"\u0415\u0432\u0433\u0435\u043d\u0438\u0439"}],messageData:[{id:1,message:"Hi"},{id:2,message:"How is you it-kamasutra"},{id:3,message:"Oh, my dear friend"}]}},M=function(){var e={id:5,message:L.profilePage.newPostText,likesCount:0};L.profilePage.posts.push(e),L.profilePage.newPostText="",H(L)},U=function(e){L.profilePage.newPostText=e,H(L)},H=function(e){o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(A,{state:e,addPost:M,updateNewPostText:U})),document.getElementById("root"))};H(L),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.f88e3b7a.chunk.js.map
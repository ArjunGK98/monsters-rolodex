(this.webpackJsonpmonster_app=this.webpackJsonpmonster_app||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),a=n.n(s),o=(n(12),n(4)),i=n(5),u=n(7),h=n(6),l=(n(13),n(14),n(15),n(0));var d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(l.jsx)("h2",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.email})]})};function j(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})}n(17);var m=function(e){var t=e.placeholder,n=e.changeHandler;return Object(l.jsx)("div",{className:"search",children:Object(l.jsx)("input",{type:"search",placeholder:t,onChange:n})})},p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).inputChangeHandler=function(t){console.log("input change handler"),e.setState({search_value:t.target.value})},e.state={monsters:[],search_value:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.search_value,r=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monsters Rolodex"}),Object(l.jsx)(m,{placeholder:"search monsters",changeHandler:this.inputChangeHandler}),Object(l.jsx)(j,{monsters:r})]})}}]),n}(r.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.8e7b1541.chunk.js.map
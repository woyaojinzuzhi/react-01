(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),l=n.n(r),c=n(5),u=n(1),i=n(2),s=n(4),d=n(3),m=(n(16),a.Component,o.a.createContext()),p=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Demo02"),o.a.createElement(m.Consumer,null,(function(e){return e.data.map((function(e){return o.a.createElement("li",{key:e},e)}))})))},h=function(e){return o.a.createElement("div",{style:{width:100,height:100,background:"red"}},o.a.createElement("ul",null,o.a.createElement(m.Consumer,null,(function(e){return e.data.map((function(e){return o.a.createElement("li",null,e)}))}))),o.a.createElement(p,null))};h.defaultProps={name:"tom"};var f=h;console.log(m);o.a.Component;var E=function(e,t){var n=function(n){Object(s.a)(r,n);var a=Object(d.a)(r);function r(){var e;return Object(u.a)(this,r),(e=a.call(this)).state={data:[]},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.data})}))}},{key:"render",value:function(){return o.a.createElement(e,Object.assign({},this.props,{data:this.state.data}))}}]),r}(a.Component);return n.displayName="withFetch(".concat(e.name,")"),n},v=(E((function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"\u6807\u9898"),o.a.createElement("div",null,e.data.content))}),"https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312"),E((function(e){return o.a.createElement("ul",null,e.data.map((function(e){return o.a.createElement("li",null,e.title)})))}),"https://cnodejs.org/api/v1/topics"),n(10),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(u.a)(this,n),t.call(this)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"inp"},"Todolist"),o.a.createElement("input",{value:this.props.inpValue,type:"text",onChange:function(t){return e.props.handleChange(t)}}),o.a.createElement("button",{onClick:function(){return e.props.addTodo()}},"\u6dfb\u52a0"))}}]),n}(a.Component)),b=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(u.a)(this,n),t.call(this)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.todos.filter((function(e){return!e.done})),t=this.props.todos.filter((function(e){return e.done}));return o.a.createElement("div",null,o.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c",e.length),o.a.createElement("ul",null,this.props.renderTodos(!1)),o.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210",t.length),o.a.createElement("ul",null,this.props.renderTodos(!0)))}}]),n}(a.Component),g=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).handleChange=function(e){a.setState({inpValue:e.target.value})},a.addTodo=function(){" "!=a.state.inpValue.slice(0,1)?(a.setState({todos:[{title:a.state.inpValue,done:!1}].concat(Object(c.a)(a.state.todos))}),a.state.inpValue=" "):alert("\u8f93\u5165\u4e0d\u80fd\u4e3a\u7a7a")},a.delTodo=function(e){a.setState({todos:a.state.todos.filter((function(t,n){return n!=e}))},(function(){localStorage.setItem("todos",JSON.stringify(a.state.todos))}))},a.toggle=function(e){var t=JSON.parse(JSON.stringify(a.state.todos));t[e].done=!t[e].done,a.setState({todos:t})},a.renderTodos=function(e){return a.state.todos.map((function(t,n){if(e==t.done)return o.a.createElement("li",null,o.a.createElement("input",{onClick:function(){return a.toggle(n)},checked:e,type:"checkbox"}),o.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.title}}),o.a.createElement("button",{onClick:function(){return a.delTodo(n)}},"\u5220\u9664"),o.a.createElement("br",null),o.a.createElement("br",null))}))},a.state={inpValue:"",todos:[{title:"1",done:!1},{title:"2",done:!0},{title:"3",done:!0},{title:"4",done:!1}]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");e&&this.setState({todos:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(){return localStorage.setItem("todos",JSON.stringify(this.state.todos)),!0}},{key:"render",value:function(){return o.a.createElement("div",{className:"tdl1"},o.a.createElement(v,{addTodo:this.addTodo,handleChange:this.handleChange}),o.a.createElement(b,{todos:this.state.todos,renderTodos:this.renderTodos}))}}]),n}(a.Component);l.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.04abe7b6.chunk.js.map
(this.webpackJsonprendon=this.webpackJsonprendon||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo_m.e2bc8e57.png"},,function(e){e.exports=JSON.parse('{"a":[{"title":"TASK 1","responsible":"Andres","description":"Tarea Nueva","priority":"high"},{"title":"TASK 2","responsible":"Luis","description":"Tarea Nueva","priority":"medium"},{"title":"TASK 3","responsible":"Jose","description":"Tarea Nueva","priority":"low"},{"title":"TASK 4","responsible":"Jonathan","description":"Tarea Nueva","priority":"low"},{"title":"TASK 5","responsible":"Jonathan","description":"Tarea Nueva","priority":"low"}]}')},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),i=(a(18),a(12)),s=a(2),c=a(3),d=a(5),m=a(4),u=a(1),p=a(6),h=a(9),b=a.n(h),v=(a(19),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Nav text-center"},r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("a",{href:"1",className:"text-white"},this.props.titulo,r.a.createElement("span",{className:"badge badge-pill badge-light m-2"},this.props.cantidad))))}}]),t}(r.a.Component)),E=a(10),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={title:"",responsible:"",description:"",priority:"low"},e.handleInput=e.handleInput.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleInput",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(E.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onAddTodo(this.state)}},{key:"render",value:function(){return r.a.createElement("div",{className:"card",onSubmit:this.handleSubmit},r.a.createElement("form",{className:"card-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"title",className:"form-control",placeholder:"Titulo",onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"responsible",className:"form-control",placeholder:"Responsable",onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"description",className:"form-control",placeholder:"Descripcion",onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{name:"priority",className:"form-control",onChange:this.handleInput},r.a.createElement("option",null,"low"),r.a.createElement("option",null,"medium"),r.a.createElement("option",null,"high"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Enviar")))}}]),t}(r.a.Component),N=a(11),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={todos:N.a},e.handleAddTodo=e.handleAddTodo.bind(Object(u.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleAddTodo",value:function(e){this.setState({todos:[].concat(Object(i.a)(this.state.todos),[e])})}},{key:"handleDelete",value:function(e){window.confirm("\xbfDesea eliminar la tarea?")&&this.setState({todos:this.state.todos.filter((function(t,a){return a!==e}))})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t,a){return r.a.createElement("div",{className:"col-md-3",key:a},r.a.createElement("div",{className:"card mt-4"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null," ",t.title),r.a.createElement("span",{className:"badge badge-pill badge-warning ml-2"},t.priority)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null," ",t.description),r.a.createElement("p",null,r.a.createElement("mark",null," ",t.responsible))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-danger",onClick:e.handleDelete.bind(e,a)}," Borrar"))))}));return r.a.createElement("div",{className:"App"},r.a.createElement(v,{titulo:"Tareas",cantidad:this.state.todos.length}),r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:b.a,className:"App-logo mt-4",alt:"logo"}),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement(f,{onAddTodo:this.handleAddTodo})),t)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.232a990c.chunk.js.map
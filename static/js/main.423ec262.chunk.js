(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),i=a(4),s=a(6),o=a(7),c=a(10),l=a(9),u=a(1),d=a(2),m=a.n(d),h=(a(15),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),b=(a(16),a(0)),p=function(e){var t=e.user;return Object(b.jsx)(b.Fragment,{children:t&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Name:"," ".concat(t.name)]}),Object(b.jsxs)("p",{children:["Email:",Object(b.jsx)("a",{href:"mailto",children:" ".concat(t.email)})]})]})})},j=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:e.title}),Object(b.jsx)("p",{children:e.completed?Object(b.jsx)("span",{className:"completed",children:"Completed"}):Object(b.jsx)("span",{className:"pending",children:"Pending"})}),e.user&&Object(b.jsx)(p,{user:e.user})]})},g=function(e){var t=e.todos;return Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(j,{title:e.title,completed:e.completed,user:e.user})},e.id)}))})},f=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],y=h.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{user:f.find((function(t){return t.id===e.userId}))||null})})),O=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={title:"",userName:"",todoList:Object(i.a)(y),formErrors:{title:"",user:""}},e.onTitleChange=function(t){e.setState((function(e){return{title:t.target.value,formErrors:Object(u.a)(Object(u.a)({},e.formErrors),{},{title:""})}}))},e.onSelectorChange=function(t){e.setState((function(e){return{userName:t.target.value,formErrors:Object(u.a)(Object(u.a)({},e.formErrors),{},{user:""})}}))},e.reset=function(){var t={userId:Number(e.state.userName),id:e.state.todoList.length+1,title:e.state.title,completed:!1,user:f.find((function(t){return t.name===e.state.userName}))||null};e.setState((function(e){return{todoList:[].concat(Object(i.a)(e.todoList),[t]),title:"",userName:""}}))},e.onInvalidTitle=function(){e.setState((function(e){return{formErrors:Object(u.a)(Object(u.a)({},e.formErrors),{},{title:"Please enter the title"})}}))},e.onInvalidUsername=function(){e.setState((function(e){return{formErrors:Object(u.a)(Object(u.a)({},e.formErrors),{},{user:"Please choose a user"})}}))},e.onSubmit=function(t){t.preventDefault(),e.state.title&&e.state.userName&&e.reset(),e.state.title||e.onInvalidTitle(),e.state.userName||e.onInvalidUsername()},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Add todo form"}),Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsx)("input",{type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.onTitleChange}),this.state.formErrors.title,Object(b.jsxs)("select",{name:"user",value:this.state.userName,onChange:this.onSelectorChange,children:[Object(b.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),f.map((function(e){return e&&Object(b.jsx)("option",{children:e.name},e.id)}))]}),this.state.formErrors.user,Object(b.jsx)("button",{type:"submit",children:"Add"})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"ToDo list: "}),this.state.todoList.length]}),Object(b.jsx)(g,{todos:this.state.todoList})]})}}]),a}(m.a.Component),x=O;r.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.423ec262.chunk.js.map
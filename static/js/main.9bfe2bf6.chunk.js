(this.webpackJsonpfoodify=this.webpackJsonpfoodify||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(8),n=s.n(i),r=(s(13),s(4)),l=s(2),o=s(5),j=s(0);var u=function(e){e.active;var t=e.setActive;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"custom-dish",children:Object(j.jsx)("button",{type:"button",className:"custom-btn",onClick:function(){t(!0)},children:"Add custom dish"})})})};var d=function(e){var t=e.active,s=e.setActive,c=Object(l.e)().pathname.split("/");return Object(j.jsx)("header",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsxs)("ul",{className:"navbar__nav",children:[Object(j.jsx)("li",{className:""===c[1]?"active":"",children:Object(j.jsx)(o.b,{to:"/",children:"Random dish"})}),Object(j.jsx)("li",{className:"favourites"===c[1]?"active":"",children:Object(j.jsx)(o.b,{to:"/favourites",children:"Favourites"})})]}),"favourites"===c[1]?Object(j.jsx)(u,{active:t,setActive:s}):null]})})})};s(15);var b=function(e){var t=e.strMeal,s=e.strMealThumb,c=e.strInstructions,a=e.strYoutube,i=e.className;return Object(j.jsx)("section",{className:i,children:Object(j.jsxs)("div",{className:"dish__card",children:[Object(j.jsx)("div",{className:"dish__img",children:Object(j.jsx)("img",{src:s||"https://brilliant24.ru/files/cat/template_01.png",alt:"dish-img"})}),Object(j.jsxs)("div",{className:"dish__description",children:[Object(j.jsx)("h2",{className:"dish__title",children:t}),Object(j.jsx)("p",{className:"dish__instruction",children:c}),a?Object(j.jsx)("div",{className:"dish__youtube",children:Object(j.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:"Watch it on YouTube!"})}):null]})]})})};var m=function(e){return Object(j.jsx)("div",{className:"skip",children:Object(j.jsx)("button",{type:"button",className:"skip__btn",onClick:e.getNewRecipe,children:"Skip"})})};var h=function(e){var t=e.getInfoRecipe,s=e.text,c=e.className;return Object(j.jsx)("div",{className:c,children:Object(j.jsx)("button",{type:"button",className:c+"__btn",onClick:function(){var e=JSON.parse(localStorage.getItem("favourites"))||[];e.push(t),localStorage.setItem("favourites",JSON.stringify(e))},children:s})})};var v=function(e){var t=e.randomRecipe.meals[0],s=t.strMeal,c=t.strMealThumb,a=t.strInstructions,i=t.strYoutube,n=t.idMeal,r=e.getRandomRecipe;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{idMeal:n,strMeal:s,strMealThumb:c,strInstructions:a,strYoutube:i,className:"random-dish"}),Object(j.jsx)("section",{className:"card-btns",children:Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)(m,{getNewRecipe:r}),Object(j.jsx)(h,{getInfoRecipe:e.randomRecipe.meals[0],text:"Like",className:"like"})]})})]})})};var O=function(e){var t=e.active,s=e.setActive,a=Object(c.useState)(""),i=Object(r.a)(a,2),n=i[0],l=i[1],o=Object(c.useState)(""),u=Object(r.a)(o,2),d=u[0],b=u[1];return Object(j.jsx)("div",{className:t?"custom active-custom":"custom",onClick:function(){return s(!1)},children:Object(j.jsxs)("div",{className:t?"custom__form active-custom":"custom__form",onClick:function(e){return e.stopPropagation()},children:[Object(j.jsx)("div",{className:"close",onClick:function(){return s(!1)},children:Object(j.jsx)("span",{children:"x"})}),Object(j.jsx)("h3",{children:"Add custom dish"}),Object(j.jsxs)("div",{className:"custom__inp",children:[Object(j.jsx)("input",{className:"form-title",placeholder:"Dish Title",value:n,onChange:function(e){l(e.target.value)}}),Object(j.jsx)("textarea",{className:"form-descripton",placeholder:"Dish descripton...",rows:"5",cols:"33",value:d,onChange:function(e){b(e.target.value)}}),Object(j.jsx)("button",{className:"form-btn",type:"button",onClick:function(){var e=JSON.parse(localStorage.getItem("favourites"))||[],t={idMeal:Math.random(),strMeal:n,strMealThumb:null,strInstructions:d,strYoutube:null};e.push(t),localStorage.setItem("favourites",JSON.stringify(e)),l(""),b(""),s(!1)},disabled:!n||!d,children:"Add custom Dish"})]})]})})};var x=function(e){var t=e.active,s=e.setActive,c=JSON.parse(localStorage.getItem("favourites"));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"favourites",children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"favourite__dishes",children:null!==c?c.map((function(e,t){var s=e.strMeal,c=e.strMealThumb,a=e.strInstructions,i=e.strYoutube;return Object(j.jsx)(b,{index:t,strMeal:s,strMealThumb:c,strInstructions:a,strYoutube:i,className:"favourite__dish"})})):Object(j.jsx)("div",{className:"no-recipe",children:" You have to add some kind of recipe to see it here!"})})}),Object(j.jsx)(O,{active:t,setActive:s})]})})};var f=function(){return Object(j.jsxs)("div",{className:"lds-roller",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})};var p=function(){var e={meals:[{}]},t=Object(c.useState)(!1),s=Object(r.a)(t,2),a=s[0],i=s[1],n=Object(c.useState)(e),u=Object(r.a)(n,2),b=u[0],m=u[1],h=Object(c.useState)(!1),O=Object(r.a)(h,2),p=O[0],N=O[1];function g(){fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(e){N(!0),m(e)}),(function(e){N(!0),console.log(e)}))}return Object(c.useEffect)((function(){g()}),[]),p?Object(j.jsxs)(o.a,{children:[Object(j.jsx)(d,{active:a,setActive:i}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(v,{randomRecipe:b||e,getRandomRecipe:g})}),Object(j.jsx)(l.a,{path:"/favourites",element:Object(j.jsx)(x,{active:a,setActive:i})})]})]}):Object(j.jsx)(f,{})};n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9bfe2bf6.chunk.js.map
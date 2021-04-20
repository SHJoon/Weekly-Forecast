(this["webpackJsonpweekly-forecast"]=this["webpackJsonpweekly-forecast"]||[]).push([[0],{15:function(e,t,n){e.exports={button:"Search_button__1eiXj"}},16:function(e,t,n){e.exports={title:"Forecast_title__3bM9_"}},21:function(e,t,n){},22:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(13),a=n.n(i),s=(n(21),n(22),n(3)),o=n(14),d=n.n(o),l=n(15),j=n.n(l),u=n(0),b=function(e){var t=e.setIsError,n=e.city,r=e.setCity,i=e.setForecast,a=e.setRenderedUnit,o=Object(c.useState)("imperial"),l=Object(s.a)(o,2),b=l[0],h=l[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),0!==n.length){t(!1);var c=encodeURIComponent(n);d.a.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(c,"&appid=").concat("2768d6698d5a9b6ed8518611cf5bf6de","&units=").concat(b)).then((function(e){if(200!==e.status)throw new Error;a("imperial"===b?"F":"C"),i(e.data),t(!1)})).catch((function(e){console.error(e),t(!0)}))}else t(!0)}(e)},children:[Object(u.jsx)("input",{className:"px-2",type:"text",placeholder:"Enter city name.",value:n,onChange:function(e){return r(e.target.value)}}),Object(u.jsxs)("label",{className:"px-2",children:[Object(u.jsx)("input",{type:"radio",name:"unit",checked:"imperial"===b,value:"imperial",onChange:function(e){return h(e.target.value)}}),"F"]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"unit",checked:"metric"===b,value:"metric",onChange:function(e){return h(e.target.value)}}),"C"]}),Object(u.jsx)("input",{className:"".concat(j.a.button," btn btn-primary mb-4"),type:"submit",value:"Retrieve forecast information"})]})})},h=n(42),O=function(e){var t=e.dailyReading,n=e.renderedUnit,c=new Date,r=1e3*t.dt;c.setTime(r);var i="owf owf-".concat(t.weather[0].id," owf-5x");return Object(u.jsx)("div",{className:"col-lg-2 col-md-5 col-sm-12 col-xs-12",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:h(c).format("dddd")}),Object(u.jsx)("p",{children:h(c).format("MMMM Do, h:mm a")})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("i",{className:i}),Object(u.jsxs)("h2",{children:[Math.round(t.main.temp)," \xb0",n]}),Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:t.weather[0].description})})]}),Object(u.jsx)("hr",{className:"mx-6"})]})})},m=n(16),x=n.n(m),f=function(e){var t=e.forecast,n=e.renderedUnit;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"display-2 jumbotron ".concat(x.a.title),children:"5-Day Forecast"}),"200"===(null===t||void 0===t?void 0:t.cod)?Object(u.jsxs)("span",{children:[Object(u.jsxs)("h5",{className:"display-4 mb-4",children:[t.city.name,", ",t.city.country]}),Object(u.jsx)("div",{className:"row justify-content-center",children:t.list.filter((function(e){return e.dt_txt.includes("18:00:00")})).map((function(e,t){return Object(u.jsx)(O,{dailyReading:e,renderedUnit:n},t)}))})]}):null]})},p=function(){return Object(u.jsx)("div",{style:{color:"red"},children:"Please enter a valid city"})},v=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),a=Object(s.a)(i,2),o=a[0],d=a[1],l=Object(c.useState)(null),j=Object(s.a)(l,2),h=j[0],O=j[1],m=Object(c.useState)("F"),x=Object(s.a)(m,2),v=x[0],y=x[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Weather Forecast"}),Object(u.jsx)(b,{setIsError:r,city:o,setCity:d,setForecast:O,setRenderedUnit:y}),n&&Object(u.jsx)(p,{}),Object(u.jsx)(f,{forecast:h,renderedUnit:v})]})};var y=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(v,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.6e1a0252.chunk.js.map
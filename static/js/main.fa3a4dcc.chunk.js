(this["webpackJsonpfrontend-developer-challenge"]=this["webpackJsonpfrontend-developer-challenge"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),r=n.n(i),s=n(18),o=(n(61),n(62),n(47)),l=n(6),A=n(50),d=n(10),j=n(13),u=(n(63),[{key:"tab1",text:"Upcoming Campaigns",isActive:!0},{key:"tab2",text:"Live Campaigns",isActive:!1},{key:"tab3",text:"Past Campaigns",isActive:!1}]),O=[{key:"th1",text:"Date"},{key:"th2",text:"Campaign"},{key:"th3",text:"View"},{key:"th4",text:"Action"}],h=(n(64),n(2));var m=function(){return Object(h.jsx)("div",{className:"header-container",children:Object(h.jsx)("div",{className:"logo-container",children:Object(h.jsxs)("div",{className:"logo-text",children:[Object(h.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-256/bluestacks-1-569566.png",srcSet:"https://cdn.iconscout.com/icon/free/png-512/bluestacks-1-569566.png 2x",alt:"Bluestacks Icon",className:"logo"}),Object(h.jsxs)("div",{className:"logo-content",children:[Object(h.jsx)("h2",{className:"white-color",children:"Blue Stacks"}),Object(h.jsx)("p",{className:"green-color",children:"Play Bigger"})]})]})})})};n(66);var g=function(e){var t=e.tabClickHandler,n=e.tabsConstantState;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"list",children:n.map((function(e,n){return Object(h.jsx)("span",{className:"".concat(e.isActive?"active green-color":"not-active text-blue"),onClick:function(){return t(n)},children:e.text},e.key)}))}),Object(h.jsx)("hr",{className:"grey-color"})]})},b=n(44),p=n.n(b);n(94);function f(e){var t=new Date(e);return function(e){switch(e){case 1:return"Jan";case 2:return"Feb";case 3:return"Mar";case 4:return"Apr";case 5:return"May";case 6:return"Jun";case 7:return"Jul";case 8:return"Aug";case 9:return"Sep";case 10:return"Oct";case 11:return"Nov";case 12:return"Dec"}}(parseInt(t.getMonth()+1))+" "+t.getFullYear()+", "+t.getDate()}function v(e,t){var n=new Date(t),a=new Date(e);return Math.round(Math.abs((n-a)/864e5))}var S=function(){return Object(h.jsx)("thead",{className:"text-blue",children:Object(h.jsx)("tr",{children:O.map((function(e,t){return Object(h.jsx)("th",{className:"".concat(0===t||2===t?"w-15":1===t?"w-30":"w-50"),children:e.text},e.key)}))})})},x=n(107),C=n(108);n(95);var M=function(e){var t=e.handleClose,n=e.show,a=e.selectedCampaign;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(x.a,{size:"sm",show:n,onHide:t,children:[Object(h.jsxs)(x.a.Body,{children:[Object(h.jsxs)("div",{className:"img-section",children:[Object(h.jsx)("img",{src:a.image_url,alt:"game-img"}),Object(h.jsxs)("div",{className:"img-detail",children:[Object(h.jsx)("h6",{children:a.name}),Object(h.jsx)("p",{children:a.region})]})]}),Object(h.jsx)("h3",{children:"Pricing"}),Object(h.jsxs)("div",{className:"price-container",children:[Object(h.jsxs)("div",{className:"price",children:[Object(h.jsx)("span",{children:"1 Week - 1 Month"}),Object(h.jsx)("span",{className:"price-value",children:null===a||void 0===a?void 0:a.Onew1m})]}),Object(h.jsxs)("div",{className:"price",children:[Object(h.jsx)("span",{children:"6 Months"}),Object(h.jsx)("span",{className:"price-value",children:null===a||void 0===a?void 0:a.Sixm})]}),Object(h.jsxs)("div",{className:"price",children:[Object(h.jsx)("span",{children:"1 Year"}),Object(h.jsx)("span",{className:"price-value",children:null===a||void 0===a?void 0:a.Oney})]})]})]}),Object(h.jsx)(x.a.Footer,{children:Object(h.jsx)(C.a,{variant:"secondary",onClick:t,children:"Close"})})]})})};function y(e){var t=e.showData,n=e.value,c=e.onChange,i=e.whichIsActiveTab,r=Object(a.useState)((new Date).toISOString()),s=Object(j.a)(r,2),o=s[0],l=s[1],A=Object(a.useState)(!1),d=Object(j.a)(A,2),u=d[0],O=d[1],m=Object(a.useState)(null),g=Object(j.a)(m,2),b=g[0],x=g[1];Object(a.useEffect)((function(){l(C(o))}),[]);var C=function(e){var t=new Date(e);return t.getFullYear()+","+parseInt(t.getMonth()+1)+","+t.getDate()};return Object(h.jsxs)("div",{className:"table-container",children:[Object(h.jsxs)("table",{children:[Object(h.jsx)(S,{}),Object(h.jsx)("tbody",{children:0!==(null===t||void 0===t?void 0:t.length)?null===t||void 0===t?void 0:t.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{className:"w-15 date-columns",children:[f(e.date)," ",Object(h.jsx)("div",{children:0===i?v(C(e.date),o)+" Days Ahead":1===i?"Live":v(C(e.date),o)+" Days Ago"})]}),Object(h.jsx)("td",{className:"w-30",children:Object(h.jsxs)("div",{className:"logo-text",children:[Object(h.jsx)("img",{src:e.image_url,alt:"game Icon",className:"logo"}),Object(h.jsxs)("div",{className:"logo-content",children:[Object(h.jsx)("p",{className:"item-name",children:e.name}),Object(h.jsx)("p",{className:"light-grey region",children:e.region})]})]})}),Object(h.jsxs)("td",{className:"view-column w-15",children:[Object(h.jsx)("img",{className:"dollar-icon",src:"data:image/png;base64,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"})," ",Object(h.jsx)("a",{onClick:function(){return t=e,O(!0),void x(t);var t},children:"View Pricing"})]}),Object(h.jsx)("td",{className:"action-column w-40",children:Object(h.jsxs)("div",{className:"actions-container",children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("img",{className:"file-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAB9sggoAAAAAXNSR0IArs4c6QAAAeRJREFUWAntWc8rRFEUPucaoyTFxoZGaoSdooYya/Z2fmRjMWxkaWVlQbIbI1L+BTsLaX4mlJQyP6SJUooUUWbmzXEuXr00TW65Y9K9i7n3nfPde7773e/N4l2Er5bIrPcWLFgggD4Aarfjv9Uj4J6/KzB8eLXZkivkJ/2dMyvl1hYyGU4FZ/MWHRHQqA5STgICXUhFWI6kgqtEhM6ccyykUki4xkGXM6F7TATz0XRoh+igZF3xeXxUq5tIqfVZsYlIOrl7crtR/z3PR0n934MVfSYaeXku7idutpqddQWb3eMM/MmYyJd/zcXCl9ttdv0P89sPf9oTdIP1lohkQj2SR/UQk2yIWsGiaDwTGij5RkiMrtbfPnUXv99uLLd+Xb5gVZwYIrKt4bkcMZnDcDIogdob/5M+EuL5Twox9qxiivHum9hDQz8hxhuoMvM7WFfXW2mIORRQHZqjNIqpKqCKNx4ziqkqoIo3HjOKqSqgijceM4qpKqCKNx4ziqkqoIo3HjOKqSqgijce+0+KYVZ1N7rx/OEuK/jnRHch5fURj4WrBpZ4YkF5sqYJfBl27caGHTHoDZwCwlyVkHsQKMZ83vEnPsnPZl8Lyisc/l7qsePae0QLCC4QKOZ21y76OqbvZM13qwGKnSD/URAAAAAASUVORK5CYII="})," ",Object(h.jsx)("span",{children:"CSV"})]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("img",{className:"report-icon",src:"data:image/png;base64,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"})," ",Object(h.jsx)("span",{children:"Report"})]}),Object(h.jsxs)("span",{children:[Object(h.jsx)(p.a,{onChange:function(t){return c(t,e.id)},value:n,format:"MM DD YYY",calendarIcon:Object(h.jsx)("img",{className:"calendar-icon",src:"data:image/png;base64,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"})})," ",Object(h.jsx)("span",{children:"Schedule Again"})]})]})})]},e.id)})):Object(h.jsx)("tr",{children:Object(h.jsx)("td",{children:"No Data Found"})})})]}),u&&Object(h.jsx)(M,{handleClose:function(){return O(!1)},show:u,selectedCampaign:b})]})}y.defaultProps={value:""};var B=y,w=n(36),N=n.n(w),k=n(46),K="API_DATA",G="API_LOADING",I="API_ERROR",L=n.p+"static/media/Bitmap.3ef629fb.png",D=n.p+"static/media/Bitmap2.bc5dc000.png",F=n.p+"static/media/Bitmap3.64d2d22b.png",V=n.p+"static/media/Bitmap4.602c179c.png",J=n.p+"static/media/Bitmap5.31091d04.png",U=n.p+"static/media/Bitmap6.13fad18a.png",T=n.p+"static/media/Bitmap8.70e33e05.png";var E=function(){var e=Object(s.b)(),t=Object(a.useState)(u),n=Object(j.a)(t,2),c=n[0],i=n[1],r=Object(s.c)((function(e){return e.campaigns.apiData})),o=Object(a.useState)([]),l=Object(j.a)(o,2),O=l[0],b=l[1],p=Object(s.c)((function(e){return e.campaigns.isApiLoading})),f=Object(a.useState)(new Date),v=Object(j.a)(f,2),S=v[0],x=v[1],C=Object(a.useState)(!1),M=Object(j.a)(C,2),y=M[0],w=M[1],E=Object(a.useState)(0),R=Object(j.a)(E,2),X=R[0],Z=R[1],Y=Object(a.useState)([]),W=Object(j.a)(Y,2),q=W[0],H=W[1];Object(a.useEffect)((function(){e(function(){var e=Object(k.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CAMPAIGN_".concat(G)}),e.next=3,new Promise((function(e){setTimeout((function(){e({data:[{id:"bs1",date:"2021-02-16T18:42:26.771Z",name:"MORTAL KOMBAT",region:"US",createdOn:1559807714999,price:"Price info of MORTAL KOMBAT",csv:"Some CSV link for MORTAL KOMBAT",report:"Some report link for MORTAL KOMBAT",image_url:L,Onew1m:"$ 100.00",Sixm:"$ 500.00",Oney:"$ 900.00"},{id:"bs2",date:"2019-08-07T18:30:00.000Z",name:"Auto Chess",region:"CA, FR",createdOn:1559806715124,price:"Price info of Auto Chess",csv:"Some CSV link for Auto Chess",report:"Some report link for Auto Chess Ques",image_url:D,Onew1m:"$ 200.00",Sixm:"$ 1000.00",Oney:"$ 2000.00"},{id:"bs3",date:"2021-02-13T18:42:26.771Z",name:"Garena Free Fire",region:"FR",createdOn:1559806711124,price:"Price info of Garena Free Fire",csv:"Some CSV link for Garena Free Fire",report:"Some report link for Garena Free Fire",image_url:F,Onew1m:"$ 150.00",Sixm:"$ 700.00",Oney:"$ 950.00"},{id:"bs4",date:"2021-06-23T18:30:00.000Z",name:"Shadow Fight 3",region:"JP",createdOn:1559806680124,price:"Price info of Shadow Fight 3",csv:"Some CSV link for Shadow Fight 3",report:"Some report link for Shadow Fight 3",image_url:V,Onew1m:"$ 300.00",Sixm:"$ 600.00",Oney:"$ 1000.00"},{id:"bs5",date:"2019-08-19T18:30:00.000Z",name:"Need for Speed\u2122 No Limits",region:"JP",createdOn:1559806680124,price:"Price info of Need for Speed\u2122 No Limits",csv:"Some CSV link for Need for Speed\u2122 No Limits",report:"Some report link for Need for Speed\u2122 No Limits",image_url:J,Onew1m:"$ 400.00",Sixm:"$ 800.00",Oney:"$ 1200.00"},{id:"bs6",date:"2021-07-20T18:30:00.000Z",name:"Summoners War",region:"JP",createdOn:1559806680124,price:"Price info of Summoners War",csv:"Some CSV link for Summoners War",report:"Some report link for Summoners War",image_url:U,Onew1m:"$ 300.00",Sixm:"$ 600.00",Oney:"$ 1300.00"},{id:"bs7",date:"2022-07-19T18:30:00.000Z",name:"Flow Free",region:"JP",createdOn:1559806680124,price:"Price info of Mancala Mix",csv:"Some CSV link for Mancala Mix",report:"Some report link for Mancala Mix",image_url:"data:image/png;base64,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",Onew1m:"$ 400.00",Sixm:"$ 800.00",Oney:"$ 2000.00"},{id:"bs8",date:"2022-03-19T18:30:00.000Z",name:"PUBG MOBILE",region:"JP",createdOn:1559806680124,price:"Price info of Mancala Mix",csv:"Some CSV link for Mancala Mix",report:"Some report link for Mancala Mix",image_url:T,Onew1m:"$ 900.00",Sixm:"$ 1800.00",Oney:"$ 2500.00"}]})}),500)}));case 3:n=e.sent;try{t({type:"CAMPAIGN_".concat(K),payload:n})}catch(n){t({type:"CAMPAIGN_".concat(I),payload:"something went wrong"})}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w(!0)}),[]),Object(a.useEffect)((function(){(null===r||void 0===r?void 0:r.data)&&0===O.length&&(H(null===r||void 0===r?void 0:r.data),b(null===r||void 0===r?void 0:r.data))}),[null===r||void 0===r?void 0:r.data]),Object(a.useEffect)((function(){0!==O.length&&y&&(P(),w(!1))}),[O,y]),Object(a.useEffect)((function(){P()}),[X]);var P=function(){0!==(null===q||void 0===q?void 0:q.length)&&(2===X?b(function(e){var t=[],n=new Date;return n.setHours(0,0,0,0),null===e||void 0===e||e.forEach((function(e){Date.parse(e.date)<n&&t.push(e)})),t}(q)):1===X?b(function(e){var t=[],n=new Date;return null===e||void 0===e||e.forEach((function(e){var a;(null===(a=new Date(e.date))||void 0===a?void 0:a.setHours(0,0,0,0))===n.setHours(0,0,0,0)&&t.push(e)})),t}(q)):0===X&&b(function(e){var t=[],n=new Date;return n.setHours(0,0,0,0),null===e||void 0===e||e.forEach((function(e){new Date(e.date).setHours(0,0,0,0)>n&&t.push(e)})),t}(q)))};return Object(h.jsxs)("div",{className:"dashboard-container",children:[Object(h.jsx)(m,{}),Object(h.jsxs)("div",{className:"dashboard-sub-container",children:[Object(h.jsx)("h1",{className:"dark-blue-color headline",children:"Manage Campaigns"}),Object(h.jsx)(g,{tabsConstantState:c,tabClickHandler:function(e){Z(e),i(c.map((function(t,n){return e===n?Object(d.a)(Object(d.a)({},t),{},{isActive:!0}):Object(d.a)(Object(d.a)({},t),{},{isActive:!1})})))}}),p?null:Object(h.jsx)(B,{showData:O,value:S,onChange:function(e,t){x(e);var n=Object(A.a)(q),a=n.findIndex((function(e){return e.id===t}));n[a].date=e.toISOString(),H(n),P()},whichIsActiveTab:X})]})]})};var R=function(){return Object(h.jsx)(o.a,{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",children:Object(h.jsx)(E,{})}),Object(h.jsx)(l.a,{path:"/dashboard",children:Object(h.jsx)(E,{})})]})})};var X=function(){return Object(h.jsx)(R,{})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},Y=n(17),W=n(48),q=n(49),H={isApiLoading:!1,apiData:null,isApiFailed:!1,apiError:null},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CAMPAIGN_".concat(G):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!0});case"CAMPAIGN_".concat(K):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!1,apiData:t.payload,isApiFailed:!1,apiError:null});case"CAMPAIGN_".concat(I):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!0,isApiLoading:!1,apiError:t.payload});default:return Object(d.a)({},e)}},Q=Object(Y.c)({campaigns:P}),z=Object(Y.d)(Q,Object(Y.a)(q.a,W.logger));n(101);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(s.a,{store:z,children:Object(h.jsx)(X,{})})}),document.getElementById("root")),Z()},61:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.fa3a4dcc.chunk.js.map
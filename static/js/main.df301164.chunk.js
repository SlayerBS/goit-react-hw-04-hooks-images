(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3j2i3","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__35aOh"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3xE3a",Modal:"Modal_Modal__1fXvi"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3lLan"}},26:function(e,t,a){e.exports={Button:"Button_Button__3Wfh6"}},29:function(e,t,a){e.exports={Loader:"Loader_Loader__2jeie"}},30:function(e,t,a){e.exports={App:"App_App__2Px-0",Error:"App_Error__g_D_o"}},35:function(e,t,a){},7:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__30I3Z",SearchForm:"SearchBar_SearchForm__LKwhm","SearchForm-button":"SearchBar_SearchForm-button__2Egq3","SearchForm-button-label":"SearchBar_SearchForm-button-label__3Xo0X","SearchForm-input":"SearchBar_SearchForm-input__1jSpm"}},77:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(6),o=a.n(c),s=(a(35),a(15)),i=a(4),u=a(5),l=a(2),m=a.n(l),b=a(7),j=a.n(b),h=a(1);function d(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(i.a)(a,2),c=n[0],o=n[1];return Object(h.jsx)("header",{className:j.a.Searchbar,children:Object(h.jsxs)("form",{className:j.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):u.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441")},children:[Object(h.jsx)("button",{type:"submit",className:j.a["SearchForm-button"],children:Object(h.jsx)("span",{className:j.a["SearchForm-button-label"],children:"Search"})}),Object(h.jsx)("input",{className:j.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.target.value.toLowerCase()),console.log(e.target.value)},value:c})]})})}d.protoType={onSubmit:m.a.func.isRequired};var p=a(12),f=a.n(p),g=function(e){var t=e.imageSrc,a=e.openModalImage;return Object(h.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(h.jsx)("img",{src:t,alt:"",className:f.a["ImageGalleryItem-image"],onClick:a})})},O=a(25),_=a.n(O),S=function(e){var t=e.images,a=e.modalImage;return Object(h.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL;return Object(h.jsx)(g,{imageSrc:r,openModalImage:function(){return a(n)}},t)}))})},x=a(26),v=a.n(x),y=function(e){var t=e.onClick;return Object(h.jsx)("button",{onClick:t,className:v.a.Button,children:"Load more"})},I=a(13),w=a.n(I),k=a(27),F=a(10),L=a.n(F);a(24);function N(){return(N=Object(k.a)(w.a.mark((function e(t,a){var r,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("",{params:{q:t,page:a}}).catch((function(e){u.b.error(e)}));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.hits);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}L.a.defaults.baseURL="https://pixabay.com/api",L.a.defaults.params={key:"4423902-dbd0f970c0cc60dbb84d66d4b",image_type:"photo",orientation:"horizontal",per_page:12};var E=a(28),G=a.n(E),C=a(29),B=a.n(C),M=(a(76),function(){return Object(h.jsxs)("div",{className:B.a.Loader,children:[Object(h.jsx)(G.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80}),";"]})}),q=a(14),A=a.n(q),R=document.querySelector("#modal-root");function T(e){var t=e.onClose,a=e.img;Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]);var n=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(h.jsx)("div",{className:A.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(h.jsx)("div",{className:A.a.Modal,children:Object(h.jsx)("img",{src:a,alt:""})})}),R)}var D=a(30),U=a.n(D);function X(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),o=Object(i.a)(c,2),l=o[0],m=o[1],b=Object(r.useState)(1),j=Object(i.a)(b,2),p=j[0],f=j[1],g=Object(r.useState)(!1),O=Object(i.a)(g,2),_=O[0],x=O[1],v=Object(r.useState)(!1),I=Object(i.a)(v,2),w=I[0],k=I[1],F=Object(r.useState)(""),L=Object(i.a)(F,2),E=L[0],G=L[1],C=Object(r.useState)(!1),B=Object(i.a)(C,2),q=B[0],A=B[1];Object(r.useEffect)((function(){console.log("searchQuery",l),l&&R(),a.length%12&&(console.log(a.length%12,a),A(!0))}),[l]);var R=function(){k(!0),function(e,t){return N.apply(this,arguments)}(l,p).then((function(e){if(0===e.length)return A(!1),void u.b.error('Search result by "'.concat(l,"' not successful. Enter the correct query."));12!==e.length&&(Object(u.b)("\u0424\u043e\u0442\u043e \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c"),A(!1)),n((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))})),f((function(e){return e+1})),A(!0)})).catch((function(e){return Object(u.b)(e)})).finally((function(){D(),k(!1)}))},D=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},X=function(){return x(!_)};return Object(h.jsxs)("div",{className:U.a.App,children:[Object(h.jsx)(u.a,{autoClose:3e3,position:"top-left"}),Object(h.jsx)(d,{onSubmit:function(e){n([]),m(e),f(1),A(!1)}}),a&&Object(h.jsx)("div",{children:Object(h.jsx)(S,{images:a,modalImage:function(e){G(e),X()}})}),w&&Object(h.jsx)(M,{}),q&&!w&&Object(h.jsx)(y,{onClick:R}),_&&Object(h.jsx)(T,{onClose:X,img:E})]})}o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(X,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.df301164.chunk.js.map
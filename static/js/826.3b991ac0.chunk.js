"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[826],{8826:function(e,s,n){n.r(s),n.d(s,{default:function(){return x}});var o=n(2791),r=n(7581),t=n(2022),l=n(885),a="Users_wrapper__-mfAI",i="Users_wrapper__img__d6mhr",u="Users_wrapper__inf__6BIIx",d="Users_form__PEycP",f="Users_users_button__60EOu",c=n(1902),h=n(3504),p=n(3879),m=n(184),_=function(e){var s=e.users,n=e.followThunk,r=e.load,t=e.onChange,_=e.disabled,x=(0,o.useState)(""),j=(0,l.Z)(x,2),w=j[0],g=j[1],b=s.filter((function(e){return e.name.indexOf(w)>-1})).map((function(e){return(0,m.jsxs)("div",{className:a,children:[(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)(h.OL,{to:"/Profile/".concat(e.id),children:(0,m.jsx)("img",{src:null!=e.photos.small?e.photos.small:c})}),(0,m.jsx)("button",{onClick:function(){n(e.id)},children:e.followed?"Follow":"Unfollow"})]}),(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)("h3",{children:e.name}),(0,m.jsx)("h3",{children:e.country}),(0,m.jsx)("h3",{children:e.city}),(0,m.jsx)("p",{children:e.description})]})]},e.id)}));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("form",{className:d,children:(0,m.jsx)("input",{type:"text",placeholder:"Start typing...",onChange:function(e){return g(e.target.value)}})}),r?(0,m.jsx)(p.Z,{}):b,(0,m.jsx)("button",{onClick:t,className:f,disabled:_,children:"Load more"})]})},x=(0,r.$j)((function(e){return{users:e.users.users,offset:e.users.offset,load:e.users.load,disabled:e.users.disabled}}),{followed:t.Gp,getUsers:t.Rf,getUsersButton:t.CW,followThunk:t.P$})((function(e){(0,o.useEffect)((function(){e.getUsers(e.offset)}),[]);return(0,m.jsx)(_,{users:e.users,followed:e.followed,offset:e.offset,load:e.load,disabled:e.disabled,onChange:function(){e.getUsersButton(e.offset)},followThunk:e.followThunk})}))},1902:function(e,s,n){e.exports=n.p+"static/media/atomic.59484dde9a3a2af06cb4.png"}}]);
//# sourceMappingURL=826.3b991ac0.chunk.js.map
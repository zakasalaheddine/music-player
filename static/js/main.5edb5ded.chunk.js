(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(3),r=a.n(n),o=a(11),i=a.n(o),s=a(2),l=a(4),p=a.n(l),u=a(5),d=a(12),b=a(27),h=function(){return[{name:"Cabin in the Woods",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",artist:"Philanthrope",audio:"https://mp3.chillhop.com/serve.php/?mp3=10315",color:["#ED632D","#B3786E"],id:Object(b.a)(),active:!0},{name:"Sleepover",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:"Nymano, JK the Sage",audio:"https://mp3.chillhop.com/serve.php/?mp3=10130",color:["#F4A49E","#5B518B"],id:Object(b.a)(),active:!1},{name:"Sodium",cover:"https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",artist:"Philanthrope",audio:"https://mp3.chillhop.com/serve.php/?mp3=9149",color:["#C7F1ED","#353C5C"],id:Object(b.a)(),active:!1},{name:"Bliss",cover:"https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",artist:"Misha, Jussi Halme",audio:"https://mp3.chillhop.com/serve.php/?mp3=9248",color:["#AC8CB1","#2A416D"],id:Object(b.a)(),active:!1},{name:"Brazil",cover:"https://chillhop.com/wp-content/uploads/2020/07/87506c6ad4c74ecfef7f61b52a4b3e0ab0564390-1024x1024.jpg",artist:"Monma, Misha, Jussi Halme",audio:"https://mp3.chillhop.com/serve.php/?mp3=8279",color:["#7469C6","#663F90"],id:Object(b.a)(),active:!1},{name:"Lmaallem",cover:"https://artwork.angham.me//webp/?id=850553",artist:"Saad Lamjarred",audio:"https://nadorzik.com/mp3/1/1bc852d22d2d3cc7e5e623f9e171c663.mp3",color:["#DE7D4E","#312623"],id:Object(b.a)(),active:!1},{name:"Canary Forest",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#185361","#7D4338"],id:Object(b.a)(),active:!1},{name:"Silience",cover:"https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",artist:"Toonorth",audio:"https://mp3.chillhop.com/serve.php/?mp3=8425",color:["#A46B46","#BCCC44"],id:Object(b.a)(),active:!1},{name:"Never Ending",cover:"https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",artist:"Sitting Duck, squeeda",audio:"https://mp3.chillhop.com/serve.php/?mp3=9652",color:["#6CCABC","#7B6247"],id:Object(b.a)(),active:!1},{name:"Paraglider",cover:"https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-1024x1024.jpg",artist:"Kendall Miles, H E R B",audio:"https://mp3.chillhop.com/serve.php/?mp3=9318",color:["#DC714B","#000000"],id:Object(b.a)(),active:!1}]},j="UPDATE_SONG_INFO",f="TOGGLE_IS_PLAYING",m="TOGGLE_LIBRARY_STATUS",v="SET_SONGS",g="SET_CURRENT_SONG",O={songs:h(),currentSong:h()[0],isPlaying:!1,libraryStatus:!1,songInfo:{current:0,duration:0,percentage:0}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case v:return Object(s.a)(Object(s.a)({},e),{},{songs:c});case g:return Object(s.a)(Object(s.a)({},e),{},{currentSong:c});case j:return Object(s.a)(Object(s.a)({},e),{},{songInfo:c});case f:return Object(s.a)(Object(s.a)({},e),{},{isPlaying:!e.isPlaying});case m:return Object(s.a)(Object(s.a)({},e),{},{libraryStatus:!e.libraryStatus});default:return e}},y=Object(n.createContext)(null),S=function(e){var t=e.children,a=Object(n.useReducer)(x,O),r=Object(d.a)(a,2),o=r[0],i=r[1];return Object(c.jsx)(y.Provider,{value:{state:o,dispatch:i},children:t})},k=function(){return Object(n.useContext)(y)},C=function(){var e=k(),t=e.state,a=t.songs,c=t.currentSong,n=e.dispatch,r=function(e){n({type:g,payload:e});var t=a.map((function(t){return e.id===t.id?Object(s.a)(Object(s.a)({},t),{},{active:!0}):Object(s.a)(Object(s.a)({},t),{},{active:!1})}));o(t)},o=function(e){n({type:v,payload:e})},i=function(){var e=Object(u.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.findIndex((function(e){return e.id===c.id})),"skip-forward"!==t){e.next=6;break}return e.next=4,r(a[(n+1)%a.length]);case 4:e.next=14;break;case 6:if("skip-back"!==t){e.next=14;break}if((n-1)%a.length!==-1){e.next=12;break}return e.next=10,r(a[a.length-1]);case 10:e.next=14;break;case 12:return e.next=14,r(a[(n-1)%a.length]);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{toggleIsPlaying:function(){n({type:f})},toggleLibraryStatus:function(){n({type:m})},changeSong:r,skipHandler:i,updateSongs:o,updateSongInfo:function(e){n({type:j,payload:e})}}};function w(e){var t=e.song,a=e.audioRef,n=t.cover,r=t.name,o=t.artist,i=t.active,s=C().changeSong,l=k().state.isPlaying,d=function(){var e=Object(u.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:l&&a.current.play();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"library-song ".concat(i?"selected":""),onClick:d,children:[Object(c.jsx)("img",{src:n,alt:r}),Object(c.jsxs)("div",{className:"song-description",children:[Object(c.jsx)("h3",{children:r}),Object(c.jsx)("h4",{children:o})]})]})}function N(e){var t=e.audioRef,a=k().state,n=a.libraryStatus,r=a.songs;return Object(c.jsxs)("div",{className:"library ".concat(n?"active-library":""),children:[Object(c.jsx)("h2",{children:"Library"}),Object(c.jsx)("div",{className:"library-songs",children:r.map((function(e){return Object(c.jsx)(w,{audioRef:t,song:e},e.id)}))})]})}var E=a(6),P=a(7);function I(){var e=C().toggleLibraryStatus;return Object(c.jsxs)("nav",{children:[Object(c.jsx)("h1",{children:"ZakaDEV Player"}),Object(c.jsxs)("button",{onClick:e,children:["Library",Object(c.jsx)(P.a,{icon:E.c})]})]})}function B(e){var t=e.audioRef,a=C(),n=a.toggleIsPlaying,r=a.skipHandler,o=k().state.isPlaying,i=function(){var e=Object(u.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(a);case 2:o&&t.current.play();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"play-control",children:[Object(c.jsx)(P.a,{className:"skip-back",icon:E.a,size:"2x",onClick:function(){return i("skip-back")}}),Object(c.jsx)(P.a,{onClick:function(){var e=t.current;o?e.pause():e.play(),n()},className:"play",icon:o?E.d:E.e,size:"2x"}),Object(c.jsx)(P.a,{className:"skip-forward",icon:E.b,size:"2x",onClick:function(){return i("skip-forward")}})]})}function R(e){var t=e.audioRef,a=k().state,n=a.currentSong.color,r=a.songInfo,o=C().updateSongInfo,i=r.current,l=r.duration,p=r.percentage,u=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},d={transform:"translateX(".concat(p,"%)")};return Object(c.jsxs)("div",{className:"player",children:[Object(c.jsxs)("div",{className:"time-control",children:[Object(c.jsx)("p",{children:u(i)}),Object(c.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(n[0],", ").concat(n[1]," )")},className:"track",children:[Object(c.jsx)("input",{min:0,max:l||0,value:i,onChange:function(e){t.current.currentTime=e.target.value,o(Object(s.a)(Object(s.a)({},r),{},{current:e.target.value}))},type:"range"}),Object(c.jsx)("div",{className:"animate-track",style:d})]}),Object(c.jsx)("p",{children:l?u(l):"0:00"})]}),Object(c.jsx)(B,{audioRef:t})]})}function T(){var e=k().state.currentSong,t=e.cover,a=e.name,n=e.artist;return Object(c.jsxs)("div",{className:"song-container",children:[Object(c.jsx)("img",{src:t,alt:a}),Object(c.jsx)("h2",{children:a}),Object(c.jsx)("h3",{children:n})]})}a(24);var L=function(){var e=Object(n.useRef)(null),t=k().state,a=t.libraryStatus,r=t.currentSong,o=t.songInfo,i=t.isPlaying,l=C(),d=l.skipHandler,b=l.updateSongInfo,h=function(){var t=Object(u.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d("skip-forward");case 2:i&&e.current.play();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(e){var t=e.target,a=t.currentTime,c=t.duration,n=Math.round(a),r=Math.round(c),i=Math.round(n/r*100);b(Object(s.a)(Object(s.a)({},o),{},{current:a,duration:c,percentage:i}))};return Object(c.jsxs)("div",{className:"app ".concat(a?"library-active":""),children:[Object(c.jsx)(I,{}),Object(c.jsx)(T,{}),Object(c.jsx)(R,{audioRef:e}),Object(c.jsx)(N,{audioRef:e}),Object(c.jsx)("audio",{onTimeUpdate:j,onLoadedMetadata:j,onEnded:h,src:r.audio,ref:e})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(S,{children:Object(c.jsx)(L,{})})}),document.getElementById("root")),D()}},[[25,1,2]]]);
//# sourceMappingURL=main.5edb5ded.chunk.js.map
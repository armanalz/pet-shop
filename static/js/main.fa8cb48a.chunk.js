(this["webpackJsonppet-shop"]=this["webpackJsonppet-shop"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/slide-0.48d68d38.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/slide-1.65c1ca31.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/slide-2.b05061fc.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/slide-3.c35f80ef.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/sprite.1b530fd3.svg"},48:function(e,t,a){e.exports=a(88)},53:function(e,t,a){},79:function(e,t,a){var i={"./img-0.jpg":80,"./img-1.jpg":81,"./img-2.jpg":82,"./img-3.jpg":83};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=79},80:function(e,t,a){e.exports=a.p+"static/media/img-0.4fab0456.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/img-1.699ce926.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/img-2.a3cdcd26.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/img-3.38ac1a55.jpg"},84:function(e,t,a){var i={"./slide-0.jpg":29,"./slide-1.jpg":30,"./slide-2.jpg":31,"./slide-3.jpg":32};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=84},88:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(6),s=a.n(r),l=(a(53),a(23)),c=a(24),o=a(34),m=a(35),d=a(43),p=a(36),u=a(44),f=a(37),g=a(38),h=a.n(g),E=function(e){return n.a.createElement("svg",{id:"".concat(e.id),className:"".concat(e.name),style:{fill:"".concat(e.fill)}},n.a.createElement("use",{xlinkHref:"".concat(h.a,"#").concat(e.name)}))},v=a(113),_=a(110),b=a(111),N=function(e){return n.a.createElement(v.a,{anchor:"left",open:e.open,onClose:function(){return e.onClose(!1)}},n.a.createElement(_.a,{component:"nav"},n.a.createElement(b.a,{button:!0,style:{color:"@dark-font",fontSize:"1.2rem",fontFamily:"@main-font",textTransform:"capitalize",fontWeight:"600",padding:"1.5rem 2.5rem"}},"dogs"),n.a.createElement(b.a,{button:!0,style:{color:"@dark-font",fontSize:"1.2rem",fontFamily:"@main-font",textTransform:"capitalize",fontWeight:"600",padding:"1.5rem 2.5rem"}},"articles"),n.a.createElement(b.a,{button:!0,style:{color:"@dark-font",fontSize:"1.2rem",fontFamily:"@main-font",textTransform:"capitalize",fontWeight:"600",padding:"1.5rem 2.5rem"}},"about"),n.a.createElement(b.a,{button:!0,style:{color:"@dark-font",fontSize:"1.2rem",fontFamily:"@main-font",textTransform:"capitalize",fontWeight:"600",padding:"1.5rem 2.5rem"}},"contact")))},y=a(42),S=a.n(y),k=a(40),j=a.n(k),w=a(112),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={i:0,loading:!1,openMenu:!1,drawerOpen:!1,startX:null,translate:0,blink:"",origin:" ",petSpecifications:{name:["vizsla","vadim","olian","fritz"],type:["hunting dog","domestic dog","bull dog","trier"],lifeSpan:["12-15","11-14","13-16","10-13"],temperment:["affectionate, energetic, faithful, calm, tender","vigorous, faithful, calm, tender","funny, faithful, calm, tender","strong, faithful, calm, tender"],size:["large","medium-sized","small","large"],maleWight:["65-77","45-66","41-62","60-71"],femaleWight:["61-73","42-63","37-58","56-67"],maleHeight:["42-45","22-25","18-21","38-41"],femaleHeight:["40-42","20-22","16-19","35-39"],description:["lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet","lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet","lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet","lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"]}},a.onLoadHandler=function(){a.setState({loading:!0})},a.renderThumb=function(e){var t=e.style,a=Object(c.a)(e,["style"]);return n.a.createElement("div",Object.assign({style:Object(l.a)({},t,{},{backgroundColor:"#FDFDFD",borderRadius:2})},a))},a.toggleDrawer=function(e){a.setState({drawerOpen:e})},a.sliderHandler=function(e){"right"===e.target.id&&a.state.i<3?a.setState({i:a.state.i+1,loading:!1}):"right"===e.target.id&&a.state.i>=3?a.setState({i:0,loading:!1}):"left"===e.target.id&&a.state.i>0?a.setState({i:a.state.i-1,loading:!1}):"left"===e.target.id&&a.state.i<=0&&a.setState({i:3,loading:!1})},a.touchStartHandler=function(e){var t=e.touches[0].clientX;a.setState({startX:t})},a.touchMoveHandler=function(e){var t=e.touches[0].clientX,i=t-a.state.startX;t>a.state.startX&&a.state.i>0?a.setState({translate:i,origin:"right"}):t<a.state.startX&&a.state.i<3?a.setState({translate:i,origin:"left"}):0!==a.state.i&&3!==a.state.i||a.setState({blink:"span"})},a.touchEndHandler=function(e){var t=e.changedTouches[0].clientX,i=a.state.startX,n=t;i-n>80&&a.state.i<3?a.setState({i:a.state.i+1,endX:null,startX:null,translate:0}):i-n>80&&a.state.i>=3?a.setState({endX:null,startX:null,translate:0,blink:""}):i-n<-80&&a.state.i>0?a.setState({i:a.state.i-1,endX:null,startX:null,translate:0}):a.setState({endX:null,startX:null,translate:0,blink:""})},a.renderTrackVertical=function(e){var t=e.style,a=Object(c.a)(e,["style"]),i=Object(l.a)({},t,{right:"35px",bottom:"60px",top:"60px",borderRadius:2,backgroundColor:"#555"});return n.a.createElement("div",Object.assign({style:i},a))},a.menuHandler=function(){a.setState({openMenu:!a.state.openMenu})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,i,r,s,c=this;return i=window.innerWidth*this.state.i,e=a(79)("./img-".concat(this.state.i,".jpg")),r=a(84)("./slide-".concat(this.state.i,".jpg")),s=window.innerWidth,t=this.state.openMenu?"scale(0) translateX(50px)":"scale(1) translateX(70px)",n.a.createElement("main",{className:"main_wrapper"},n.a.createElement("div",{className:"sidedrawer"},n.a.createElement(w.a,{"area-label":"Menue",color:"inherit",onClick:function(){return c.toggleDrawer(!0)},style:{background:"#FDFDFD"}},n.a.createElement(S.a,{style:{width:"26px",height:"24px"}})),n.a.createElement(N,{open:this.state.drawerOpen,onClose:function(e){return c.toggleDrawer(e)}})),n.a.createElement("div",{className:"description"},n.a.createElement("div",{className:"description_navbar"},n.a.createElement("div",{className:"description_navbar button",onClick:function(){return c.menuHandler()}},n.a.createElement("div",{className:"description_navbar button bar"}),n.a.createElement("div",{className:"description_navbar button bar",style:{visibility:this.state.openMenu?"visible":"hidden"}}),n.a.createElement("div",{className:"description_navbar button bar"})),n.a.createElement("div",{className:"description_navbar wrapper",style:{transform:t}},n.a.createElement("div",{className:"description_navbar item"},"dogs"),n.a.createElement("div",{className:"description_navbar item"},"articles"),n.a.createElement("div",{className:"description_navbar item"},"about"),n.a.createElement("div",{className:"description_navbar item"},"contact"))),n.a.createElement("div",{className:"craousel_controller left"},n.a.createElement("div",{id:"left",className:"craousel_controller_btn left",onClick:function(e){return c.sliderHandler(e)}},n.a.createElement(E,{id:"left",name:"left-arrow"}))),n.a.createElement("h1",{className:"description_title"},this.state.petSpecifications.name[this.state.i]),n.a.createElement("h4",{className:"description_subtitle"},this.state.petSpecifications.type[this.state.i]),n.a.createElement("div",{className:"description_specification"},n.a.createElement("p",{className:"description_specification_title"},"life span"),n.a.createElement("p",{className:"description_specification_value"},this.state.petSpecifications.lifeSpan[this.state.i]," years")),n.a.createElement("div",{className:"description_specification"},n.a.createElement("p",{className:"description_specification_title"},"temperment"),n.a.createElement("p",{className:"description_specification_value"},this.state.petSpecifications.temperment[this.state.i])),n.a.createElement("div",{className:"description_specification"},n.a.createElement("p",{className:"description_specification_title"},"size"),n.a.createElement("p",{className:"description_specification_value"},this.state.petSpecifications.size[this.state.i])),n.a.createElement("div",{className:"description_specification gender"},n.a.createElement("p",{className:"description_specification_title"}),n.a.createElement("div",{className:"description_specification_value wrapper"},n.a.createElement(E,{name:"shapes-and-symbols"}),n.a.createElement(E,{name:"shapes-and-symbols-1"}))),n.a.createElement("div",{className:"description_specification"},n.a.createElement("p",{className:"description_specification_title"},"wight"),n.a.createElement("div",{className:"description_specification_value wrapper"},n.a.createElement("p",{className:"description_specification_value"},this.state.petSpecifications.maleWight[this.state.i]," lb"),n.a.createElement("p",{className:"description_specification_value"},this.state.petSpecifications.femaleWight[this.state.i]," lb"))),n.a.createElement("div",{className:"description_specification"},n.a.createElement("p",{className:"description_specification_title"},"height"),n.a.createElement("div",{className:"description_specification_value wrapper"},n.a.createElement("p",{className:"description_specification_value"},this.state.petSpecifications.maleHeight[this.state.i]," in"),n.a.createElement("p",{className:"description_specification_value"},this.state.petSpecifications.femaleHeight[this.state.i]," in"))),n.a.createElement("div",{className:"description_footer"},n.a.createElement("p",{className:"description_footer_item"},"maintenance & care"),n.a.createElement("p",{className:"description_footer_item"},"learning & education"),n.a.createElement("p",{className:"description_footer_item"},"helas & diseases")))," ",n.a.createElement("div",{className:"picture"},n.a.createElement("div",{id:"right",className:"craousel_controller_btn right",onClick:function(e){return c.sliderHandler(e)}},n.a.createElement(E,{id:"right",name:"left-arrow"})),n.a.createElement(f.Scrollbars,{style:{flexBasis:"70vh",zIndex:"9",overflowX:"hidden"},renderView:function(e){return n.a.createElement("div",Object.assign({},e,{style:Object(l.a)({},e.style,{overflowX:"hidden"})}))},renderThumbVertical:this.renderThumb,renderTrackVertical:this.renderTrackVertical},n.a.createElement("div",{className:"picture_large ".concat(this.state.origin)},n.a.createElement("div",{className:"picture_large-slider",onTouchStart:function(e){return c.touchStartHandler(e)},onTouchMove:function(e){return c.touchMoveHandler(e)},onTouchEnd:function(e){return c.touchEndHandler(e)},style:{left:s<=900?"".concat(-i,"px"):"0",transform:s<=900?"translateX(".concat(this.state.translate,"px)"):""}},n.a.createElement("div",{className:"picture_large-item primary"},n.a.createElement("div",{className:"picture_large-item--blinker left",style:{animationName:this.state.blink}}),n.a.createElement("img",{className:"picture_large-item--img",onLoad:function(){return c.onLoadHandler()},style:{display:"".concat(this.state.loading?"block":"none")},src:s>900?r:a(29),alt:"First Slide"}),n.a.createElement("div",{className:"picture_large-spinner"},n.a.createElement(j.a,{size:50,color:"#EEE",loading:!this.state.loading}))),n.a.createElement("div",{className:"picture_large-item secondary"},n.a.createElement("img",{className:"picture_large-item--img",onload:function(){return c.onLoadHandler()},style:{display:"".concat(this.state.loading?"block":"none")},src:s>900?r:a(30),alt:"Second Slide"})),n.a.createElement("div",{className:"picture_large-item secondary"},n.a.createElement("img",{className:"picture_large-item--img",onload:function(){return c.onLoadHandler()},style:{display:"".concat(this.state.loading?"block":"none")},src:s>900?r:a(31),alt:"Third Slide"})),n.a.createElement("div",{className:"picture_large-item secondary"},n.a.createElement("img",{className:"picture_large-item--img",onload:function(){return c.onLoadHandler()},style:{display:"".concat(this.state.loading?"block":"none")},src:s>900?r:a(32),alt:"Forth Slide"}),n.a.createElement("div",{className:"picture_large-item--blinker right",style:{animationName:this.state.blink}}))),"   ")," "),n.a.createElement("div",{className:"picture_intro"},n.a.createElement("div",{className:"picture_intro_img"},n.a.createElement("img",{alt:"Small Bild",src:e})),n.a.createElement("div",{className:"picture_intro_txt"},this.state.petSpecifications.description[this.state.i])))," ")}}]),t}(i.Component);var O=function(){return n.a.createElement(x,null)};s.a.render(n.a.createElement(O,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.fa8cb48a.chunk.js.map
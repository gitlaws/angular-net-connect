import{$ as f,$a as d,Ea as l,Lb as k,Pa as _,Ra as s,Rb as w,Ta as u,Va as r,Wa as a,Xa as b,_a as C,ab as p,fb as m,ia as g,ja as h,nb as v,ya as x}from"./chunk-WFKPIHTV.js";function M(t,e){if(t&1&&(r(0,"figure",7),b(1,"img",8),a()),t&2){let c=e.$implicit,o=e.index,i=p();u("carousel__item--active",o===i.currentIndex),l(),s("src",c.src,x)("alt",c.alt)}}function y(t,e){if(t&1){let c=C();r(0,"span",9),d("click",function(){let i=g(c).index,n=p();return h(n.showSlide(i))}),a()}if(t&2){let c=e.index,o=p();u("carousel__indicator--active",c===o.currentIndex)}}var T=(()=>{let e=class e{constructor(){this.currentIndex=0,this.interval=8e3,this.items=[{src:"https://th.bing.com/th/id/OIG4.Xi5a.97_4DiriMNgneVr?pid=ImgGn",alt:"Technology bridge"},{src:"https://th.bing.com/th/id/OIG1.iJdYUNuvyFcoV1v7nyzD?pid=ImgGn",alt:"Scalable application"},{src:"https://th.bing.com/th/id/OIG4.z2QSfBUS1FBYeA_PAN55?w=1024&h=1024&rs=1&pid=ImgDetMain",alt:"Innovative technology"},{src:"https://th.bing.com/th/id/OIG1.IJeBxVtf0Tmcv85b6_Wn?w=1024&h=1024&rs=1&pid=ImgDetMain",alt:"Future technology"}]}ngOnInit(){this.intervalId=setInterval(()=>{this.nextSlide()},this.interval)}ngOnDestroy(){this.intervalId&&clearInterval(this.intervalId)}showSlide(o){this.currentIndex=o}nextSlide(){this.currentIndex=(this.currentIndex+1)%this.items.length}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-carousel"]],standalone:!0,features:[v],decls:9,vars:2,consts:[[1,"carousel"],[1,"carousel__inner"],["class","carousel__item",3,"carousel__item--active",4,"ngFor","ngForOf"],["type","button","aria-label","Previous slide",1,"carousel__control","carousel__control--prev",3,"click"],["type","button","aria-label","Next slide",1,"carousel__control","carousel__control--next",3,"click"],[1,"carousel__indicators"],["class","carousel__indicator",3,"carousel__indicator--active","click",4,"ngFor","ngForOf"],[1,"carousel__item"],[1,"carousel__image",3,"src","alt"],[1,"carousel__indicator",3,"click"]],template:function(i,n){i&1&&(r(0,"div",0)(1,"div",1),_(2,M,2,4,"figure",2),a(),r(3,"button",3),d("click",function(){return n.showSlide((n.currentIndex-1+n.items.length)%n.items.length)}),m(4," \u276E "),a(),r(5,"button",4),d("click",function(){return n.nextSlide()}),m(6," \u276F "),a(),r(7,"div",5),_(8,y,1,2,"span",6),a()()),i&2&&(l(2),s("ngForOf",n.items),l(6),s("ngForOf",n.items))},dependencies:[w,k],styles:[".carousel[_ngcontent-%COMP%]{padding:20px;border-radius:10px;position:relative;overflow:hidden}.carousel__inner[_ngcontent-%COMP%]{display:flex;transition:transform 8s ease-in-out;overflow:hidden;position:relative}.carousel__item[_ngcontent-%COMP%]{flex:0 0 100%;transition:transform 8s ease,opacity 8s ease;opacity:.5;background-color:#f5f5f5;border:1px solid #ddd;padding:20px;border-radius:10px;box-shadow:0 4px 8px #0000001a;min-width:100%}.carousel__item--active[_ngcontent-%COMP%]{border:2px solid #808080;opacity:1;transform:scale(1.05);transform:translate(-100%)}.carousel__image[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:5px}.carousel__control[_ngcontent-%COMP%]{background-color:gray;border:none;color:#fff;padding:10px;cursor:pointer;position:absolute;top:50%;transform:translateY(-50%);font-size:1.5rem;z-index:1}.carousel__control--prev[_ngcontent-%COMP%]{left:10px}.carousel__control--next[_ngcontent-%COMP%]{right:10px}.carousel__control[_ngcontent-%COMP%]:hover{background-color:#676767}.carousel__indicators[_ngcontent-%COMP%]{display:flex;justify-content:center;position:absolute;bottom:10px;width:100%}.carousel__indicator[_ngcontent-%COMP%]{width:10px;height:10px;background-color:#999;border-radius:50%;margin:0 5px;cursor:pointer;transition:background-color .3s ease}.carousel__indicator--active[_ngcontent-%COMP%]{background-color:#007bff}.carousel__inner[_ngcontent-%COMP%]{position:relative}.carousel__item[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;opacity:0;transition:opacity 8s ease-in-out}.carousel__item--active[_ngcontent-%COMP%]{opacity:1;position:relative}@media (max-width: 768px){.carousel[_ngcontent-%COMP%]{padding:10px}.carousel__control[_ngcontent-%COMP%]{padding:5px;font-size:1.2rem}}@media (max-width: 480px){.carousel[_ngcontent-%COMP%]{padding:5px}.carousel__control[_ngcontent-%COMP%]{padding:2px;font-size:1rem}}"]});let t=e;return t})();export{T as a};

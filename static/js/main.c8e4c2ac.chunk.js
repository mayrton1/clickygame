(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Shockwave","image":"/clickygame/assets/images/Shockwave.jpg","count":0},{"id":2,"name":"Megatron","image":"/clickygame/assets/images/megatron.jpg","count":0},{"id":3,"name":"Optimusprime","image":"/clickygame/assets/images/optimusprime.jpg","count":0},{"id":4,"name":"Galvatron","image":"/clickygame/assets/images/galvatron.jpg","count":0},{"id":5,"name":"Jazz","image":"/clickygame/assets/images/jazz.jpg","count":0},{"id":6,"name":"Starscream","image":"/clickygame/assets/images/starscream.jpg","count":0},{"id":7,"name":"Silverbolt","image":"/clickygame/assets/images/sliverbolt.jpg","count":0},{"id":8,"name":"Skywarp","image":"/clickygame/assets/images/skywarp.jpg","count":0},{"id":9,"name":"Soundwave","image":"/clickygame/assets/images/soundwave.jpg","count":0},{"id":10,"name":"Bumblebee","image":"./clickygame/assets/images/bumblebee.jpg","count":0},{"id":11,"name":"Scrapper","image":"/clickygame/assets/images/Scrapper.jpg","count":0},{"id":12,"name":"Shrapnel","image":"/clickygame/assets/images/Shrapnel.jpg","count":0}]')},,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),n=t(3),i=t.n(n),r=t(4),o=t(5),m=t(7),g=t(6),l=t(8),u=(t(14),function(e){return s.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:e.name,src:e.image})))}),d=(t(15),function(e){return s.a.createElement("div",{className:"wrapper"},e.children)}),p=(t(16),function(e){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"title"},e.children),s.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),h=t(1),f=(t(17),function(e){function a(){var e,t;Object(r.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(s)))).state={cards:h,score:0,highscore:0},t.gameOver=function(){return t.state.score>t.state.highscore&&t.setState({highscore:t.state.score},(function(){console.log(this.state.highscore)})),t.state.cards.forEach((function(e){e.count=0})),alert("Game Over :( \nscore: ".concat(t.state.score)),t.setState({score:0}),!0},t.clickCount=function(e){t.state.cards.find((function(a,c){if(a.id===e){if(0===h[c].count)return h[c].count=h[c].count+1,t.setState({score:t.state.score+1},(function(){console.log(this.state.score)})),t.state.cards.sort((function(){return Math.random()-.5})),!0;t.gameOver()}}))},t}return Object(l.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(d,null,s.a.createElement(p,{score:this.state.score,highscore:this.state.highscore},"Transformers clicky game"),this.state.cards.map((function(a){return s.a.createElement(u,{clickCount:e.clickCount,id:a.id,key:a.id,image:a.image})})))}}]),a}(c.Component));t(18);i.a.render(s.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.c8e4c2ac.chunk.js.map
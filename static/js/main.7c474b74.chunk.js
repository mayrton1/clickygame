(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Shockwave","image":"/assets/images/Shockwave.jpg","count":0},{"id":2,"name":"Megatron","image":"/assets/images/megatron.jpg","count":0},{"id":3,"name":"Optimusprime","image":"/assets/images/optimusprime.jpg","count":0},{"id":4,"name":"Galvatron","image":"/assets/images/galvatron.jpg","count":0},{"id":5,"name":"Jazz","image":"/assets/images/jazz.jpg","count":0},{"id":6,"name":"Starscream","image":"/assets/images/starscream.jpg","count":0},{"id":7,"name":"Silverbolt","image":"/assets/images/sliverbolt.jpg","count":0},{"id":8,"name":"Skywarp","image":"/assets/images/skywarp.jpg","count":0},{"id":9,"name":"Soundwave","image":"/assets/images/soundwave.jpg","count":0},{"id":10,"name":"Bumblebee","image":"/assets/images/bumblebee.jpg","count":0},{"id":11,"name":"Scrapper","image":"/assets/images/Scrapper.jpg","count":0},{"id":12,"name":"Shrapnel","image":"/assets/images/Shrapnel.jpg","count":0}]')},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(3),i=a.n(c),r=a(4),o=a(5),m=a(7),u=a(6),g=a(8),l=(a(14),function(e){return n.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})))}),d=(a(15),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),p=(a(16),function(e){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"title"},e.children),n.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),h=a(1),f=(a(17),function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={cards:h,score:0,highscore:0},a.gameOver=function(){return a.state.score>a.state.highscore&&a.setState({highscore:a.state.score},(function(){console.log(this.state.highscore)})),a.state.cards.forEach((function(e){e.count=0})),alert("Game Over :( \nscore: ".concat(a.state.score)),a.setState({score:0}),!0},a.clickCount=function(e){a.state.cards.find((function(t,s){if(t.id===e){if(0===h[s].count)return h[s].count=h[s].count+1,a.setState({score:a.state.score+1},(function(){console.log(this.state.score)})),a.state.cards.sort((function(){return Math.random()-.5})),!0;a.gameOver()}}))},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(d,null,n.a.createElement(p,{score:this.state.score,highscore:this.state.highscore},"Transformers clicky game"),this.state.cards.map((function(t){return n.a.createElement(l,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})})))}}]),t}(s.Component));a(18);i.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.7c474b74.chunk.js.map
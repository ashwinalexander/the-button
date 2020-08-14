(this["webpackJsonpashwin-alexander-button-game"]=this["webpackJsonpashwin-alexander-button-game"]||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},20:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(13),r=a.n(l),o=(a(19),a(1)),i=a(2),c=a(5),u=a(4),m=a(3),h=(a(20),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({playerName:t.target.value}),e.props.onValChange(t.target.value)},e.handleSubmit=function(t){e.state.playerName.trim().length<3||(t.preventDefault(),e.props.onSubmit(e.state.playerName))},e.state={playerName:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.userName;return s.a.createElement("div",{className:"loginComponent"},s.a.createElement("div",{className:"flexColumn"},s.a.createElement("form",{action:"submit",className:"flexColumn",onSubmit:function(e){return e.preventDefault()}},s.a.createElement("label",{htmlFor:"enterPlayerName"},"ENTER PLAYER NAME"),s.a.createElement("input",{onChange:this.handleChange,pattern:"^[A-Za-z0-9]{3,}$",title:"enter alphanumeric values with at least three characters",value:e,type:"text",id:"enterPlayerName",required:!0}),s.a.createElement("button",{onClick:this.handleSubmit},"START"))),s.a.createElement("div",{class:"instructions"},s.a.createElement("ul",null,s.a.createElement("li",null,"You will soon meet",s.a.createElement("span",{class:"stylisedButton"}," the button")," and a countdown timer."),s.a.createElement("li",null,"Press ",s.a.createElement("span",{class:"stylisedButton"},"the button")," whenever you wish ... but not too soon."),s.a.createElement("li",null,s.a.createElement("span",{class:"stylisedButton"},"The button")," can only be pressed once."),s.a.createElement("li",null,"Be warned, there are bots who might reset the timer."),s.a.createElement("li",null,"Your score will be inversely proportional to how fast you press",s.a.createElement("span",{class:"stylisedButton"}," The button"),"."))))}}]),a}(n.Component)),d=a(8),p=a.n(d);a(22);p.a.initializeApp({apiKey:"AIzaSyDiBZB5Uw7mgcJoFpRh0wSKU-ItAmVczvk",authDomain:"button-game-6b89f.firebaseapp.com",databaseURL:"https://button-game-6b89f.firebaseio.com",projectId:"button-game-6b89f",storageBucket:"button-game-6b89f.appspot.com",messagingSenderId:"556932643649",appId:"1:556932643649:web:770ada9a70d7ea82817fc0",measurementId:"G-0T1KXSW461"});var b=p.a,v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClick=function(e){clearInterval(n.secondVal),n.setState({message:n.props.value+", you scored "+100*(60-n.state.secondsVal)+" points"}),n.state.isGameOn&&(n.saveScoreToDB(n.props.value,100*(60-n.state.secondsVal)),n.setState({isGameOn:!1}))},n.state={secondsVal:60,botInterrupt:n.generateWeightedRandomValue(),message:"-",isGameOn:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.secondVal=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"formatForDisplay",value:function(e){var t=parseInt(e/60,10),a=parseInt(e%60,10);return(t=t<10?"0"+t:t)+":"+(a=a<10?"0"+a:a)}},{key:"generateWeightedRandomValue",value:function(){return Math.floor(60*Math.random())>6?Math.floor(13*Math.random()+43):Math.floor(55*Math.random()+1)}},{key:"countdownOrReset",value:function(e){return e===this.state.botInterrupt?(e=60,this.setState({botInterrupt:this.generateWeightedRandomValue(),message:"an impatient bot reset the timer!"})):e--,57===e&&this.setState({message:"-"}),e}},{key:"tick",value:function(){this.setState({secondsVal:this.countdownOrReset(this.state.secondsVal)})}},{key:"saveScoreToDB",value:function(e,t){b.database().ref().child("users").push({name:e,score:t})}},{key:"render",value:function(){return s.a.createElement("div",{className:"timerComponent"},s.a.createElement("div",{className:"flexColumn"},s.a.createElement("div",{className:"timerDisplay"},s.a.createElement("h2",null,this.formatForDisplay(this.state.secondsVal)," ")),s.a.createElement("div",{className:"buttonHolder"},s.a.createElement("button",{onClick:this.handleClick},"CLICK")),s.a.createElement("div",{className:"messageHolder"},s.a.createElement("h3",null," ",this.state.message," "))))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={highScores:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.database().ref("users").orderByChild("score").limitToLast(10).on("value",(function(t){var a=t.val(),n=[];for(var s in a){var l={id:s,user:a[s]};n.push(l)}e.setState({highScores:n})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"scoreComponent"},s.a.createElement("h3",null,"High Scores"),"\u200b \u200b",s.a.createElement("ul",null,this.state.highScores.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement("p",null,e.user.name," - ",e.user.score),"\u200b \u200b")}))),s.a.createElement("p",null,"Note: Top 10 scores appear in real-time in the list above"),"\u200b \u200b")}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleLoginClick=e.handleLoginClick.bind(Object(c.a)(e)),e.handleSubmitclick=e.handleSubmitclick.bind(Object(c.a)(e)),e.state={username:"",isLoggedIn:!1},e}return Object(i.a)(a,[{key:"handleLoginClick",value:function(e){this.setState({isLoggedIn:!1,username:e})}},{key:"handleSubmitclick",value:function(e){this.setState({isLoggedIn:!0,username:e})}},{key:"render",value:function(){var e=this.state.username;return s.a.createElement("div",{className:"appComponent wrapper"},s.a.createElement("nav",null,s.a.createElement("h1",null,"(Do Not) Press The Button")),this.state.isLoggedIn?"":s.a.createElement(h,{value:e,onValChange:this.handleLoginClick,onSubmit:this.handleSubmitclick}),this.state.isLoggedIn?s.a.createElement(v,{value:this.state.username}):null,this.state.isLoggedIn?s.a.createElement(f,null):null)}}]),a}(n.Component);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e90f91e7.chunk.js.map
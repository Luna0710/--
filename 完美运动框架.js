// JavaScript Document
function getStyle(obj,name){
		if(obj.currentStyle){
			return currentStyle[name];
			}
			else{
				return getComputedStyle(obj,false)[name];
				}
		}

function startMove(obj,	json,FnEnd){

	clearInterval(obj.timer);
	
	var cur=0;
	obj.timer=setInterval(function(){
		var stop=true;//假设所有的运动都到达目标点
		for(var attr in json){
			var cur=0;
		if(attr=='opacity'){
		 cur=parseFloat(getStyle(obj,attr))*100	;
			}
			else{
	 cur=parseInt(getStyle(obj,attr));
			}	
		var speed=(json[attr]-cur)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		if(cur!=json[attr]){
			stop=false;
			}
		
				if(attr=='opacity'){
					obj.style.filter='alpha(opacity:'+(cur+speed)+')';
					obj.style.opacity=(cur+speed)/100;						
					}
				else{
				obj.style[attr]=cur+speed+'px';	
				}
				}
		
		if(stop){
			clearInterval(obj);
			alert("aaa");
			}
		},30);
	}
	
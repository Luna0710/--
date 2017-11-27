/**
 * Created by Administrator on 2017/11/26.
 */
var dom=document.getElementById("clock");
var ctr=dom.getContext('2d');
var width=ctr.canvas.width;
var height=ctr.canvas.height;
var r=width/2;
var rem=width/200;
<!-- 设置时钟额边框-->
function drawBackground(){
    ctr.save();
    ctr.translate(r,r);
    ctr.beginPath();
    ctr.lineWidth=10*rem;
    ctr.arc(0,0,r-ctr.lineWidth/2,0,2*Math.PI,false);
    ctr.stroke();

    var hourNumbers=[3,4,5,6,7,8,9,10,11,12,1,2];
    ctr.font=20*rem+"px Arial";
    ctr.textAlign='center';
    ctr.textBaseline='middle';
    hourNumbers.forEach(function(number,i){
        var rad=2*Math.PI/12*i;
        var x=(Math.cos(rad)*(r-30*rem));
        var y=(Math.sin(rad)*(r-30*rem));
        ctr.fillText(number,x,y);
    });

    for(var i=0;i<60;i++){
        var rad=2*Math.PI/60*i;
        var x=(Math.cos(rad)*(r-18*rem));
        var y=(Math.sin(rad)*(r-18*rem));
        ctr.beginPath();
        if(i%5==0){
            ctr.arc(x,y,2,0,2*Math.PI,false);
            ctr.fillStyle="#000";
        }else{
            ctr.arc(x,y,2,0,2*Math.PI,false);
            ctr.fillStyle="#ccc";
        }
        ctr.fill();
    }
}
//绘画时钟
function drawHour(hour,minute){
    ctr.save();
    ctr.beginPath();
    var rad=2*Math.PI/12*hour;
    var mRad=2*Math.PI/12/60*minute;
    ctr.lineWidth=6*rem;
    ctr.lineCap="round";
    ctr.rotate(rad+mRad);
    ctr.moveTo(0,10);
    ctr.lineTo(0,-r/2);
    ctr.stroke();
    ctr.restore();
}
//绘画分钟
function drawMinute(minute){
    ctr.save();
    ctr.beginPath();
    var rad=2*Math.PI/60*minute;
    ctr.lineWidth=4*rem;
    ctr.lineCap="round";
    ctr.rotate(rad);
    ctr.moveTo(0,10);
    ctr.lineTo(0,-r+30*rem);
    ctr.stroke();
    ctr.restore();
}
//绘画秒钟
function drawSecont(secont){
    ctr.save();
    ctr.beginPath();
    ctr.fillStyle="#c14543";
    var rad=2*Math.PI/60*secont;
    ctr.lineWidth=3;
    ctr.lineCap="round";
    ctr.rotate(rad);
    ctr.moveTo(-2*rem,15*rem);
    ctr.lineTo(2*rem,15*rem);
    ctr.lineTo(1,-r+20*rem);
    ctr.lineTo(-1,-r+20*rem);
   ctr.fill();
    ctr.restore();
}
 function drawDot(){
     ctr.beginPath();
     ctr.fillStyle="#fff";
     ctr.arc(0,0,3*rem,0,2*Math.PI,false);
     ctr.fill();
 }

function draw(){
    ctr.clearRect(0,0,width,height);
    var now=new Date();
    var hour=now.getHours();
    var  minute= now.getMinutes();
    var secont=now.getSeconds()
    drawBackground();
    drawHour(hour,minute);
    drawMinute(minute);
    drawSecont(secont);
    drawDot();
    ctr.restore();
}



draw();
setInterval(draw,1000);


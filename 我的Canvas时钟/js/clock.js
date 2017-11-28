/**
 * Created by Administrator on 2017/11/26.
 */
var dom=document.getElementById("clock");
var ctr=dom.getContext('2d');
var width=ctr.canvas.width;
var height=ctr.canvas.height;
var r=width/2;

function drawBackground(){
   ctr.translate(r,r);
    ctr.beginPath();
    ctr.arc(0,0,r,0,2*Math.PI,false);
    ctr.stroke();

}
drawBackground();
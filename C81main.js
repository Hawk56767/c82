canvas=document.getElementById("draw");
ctx=canvas.getContext("2d");
var color="black";
var line_width=10;
var radius="40";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth="width_circle";
ctx.radius="radius_circle";
ctx.arc(150,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
circle(mouse_x,mouse_y);

};
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=10;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();

}
function l_width(){




}
function clear_area(){
ctx.clearRect(0,0,canvas.width,canvas.height)


}
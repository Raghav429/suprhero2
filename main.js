var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30 ;

player_x = 10;
player_y = 10;

var player_objects="";
var block_image_object = "";

function player_objects(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_objects = Img;

        player_objects.scaletoWidth(150);
        player_objects.scaletoHeight(140);
        player_objects.set({
            top:player_y,
            left:player_x

  
    });
    canvas.add(player_objects);
});
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed =='80')
    {
    console.log("p and shift pressed together");
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current-width").innerHTML = block_image_width;
document.getElementById("current-height").innerHTML = block_image_height;
}


if(e.shiftKey == true && keypressed =='77')
    {
    console.log("m and shift pressed together");
block_image_width = block_image_width - 10;
block_image_height = block_image_height - 10;
document.getElementById("current-width").innerHTML = block_image_width;
document.getElementById("current-height").innerHTML = block_image_height;
}


if(keypressed == '70')
{
  new_image('ironman_face.png')  
    console.log("f");
}



if(keypressed == '66')
{
  new_image('spiderman_body.png')  
    console.log("b");
}

if(keypressed == '76')
{
  new_image('hulk_legs.png')  
    console.log("l");
}

if(keypressed == '82')
{
  new_image('thor_right_hand')  
    console.log("r");
}


if(keypressed == '72')
{
  new_image('captain_america_left_hand.png')  
    console.log("h");
}

if(keypressed == '87')
{
     up()
    console.log("up");
}

if(keypressed == '83')
{
    down()
    console.log("down");
}

if(keypressed == '65')
{
    left()
    console.log("left");
}

if(keypressed == '68')
{
     right()
    console.log("right");
}


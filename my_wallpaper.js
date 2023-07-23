//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(171,202,225); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

let bodyX = 75
let bodyY = 75

fill (0,0,0) // Black

beginShape (); // Tail
vertex (bodyX+45,bodyY+105);
vertex (bodyX+100,bodyY+105);
vertex (bodyX+45,bodyY+90);
endShape (CLOSE);

fill (62,61,61) // Dark Grey
strokeWeight (0)

beginShape (); // Body
vertex (bodyX,bodyY);
vertex (bodyX+50,bodyY);
vertex (bodyX+65,bodyY+105);
vertex (bodyX-15,bodyY+105);
endShape (CLOSE);

fill (0,0,0) // Black
rect(bodyX,bodyY+60,10,50) // Left Leg
rect(bodyX+40,bodyY+60,10,50) // Right Leg

beginShape (); //Ear L
vertex (bodyX-10,bodyY-35);
vertex (bodyX+15,bodyY-35);
vertex (bodyX-10,bodyY+15);
endShape (CLOSE);

beginShape (); //Ear R
vertex (bodyX+60,bodyY-35);
vertex (bodyX+35,bodyY-35);
vertex (bodyX+60,bodyY+15);
endShape (CLOSE);

ellipse (bodyX+25,bodyY-25,50,30) //Head

beginShape (); // Face
vertex (bodyX,bodyY-20);
vertex (bodyX+50,bodyY-20);
vertex (bodyX+35,bodyY+30);
vertex (bodyX+15,bodyY+30);
endShape (CLOSE);

fill (62,61,61) // Dark Grey
triangle(bodyX+20,bodyY+15,bodyX+30,bodyY+15,bodyX+25,bodyY+25) // nose

//Eyes
fill (88,47,15) //Brown
ellipse (bodyX+15,bodyY-10,7.5,7.5)
ellipse (bodyX+35,bodyY-10,7.5,7.5)

fill (0,0,0) // Black
ellipse (bodyX+15,bodyY-10,5,5)
ellipse (bodyX+35,bodyY-10,5,5)

fill (255,255,255) // white
ellipse (bodyX+15,bodyY-12,2,2)
ellipse (bodyX+35,bodyY-12,2,2)

}


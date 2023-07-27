//your parameter variables go here!
  let Lily1x = 1;
  let Lily1y = 1;
  let Lily2x = 20
  let Lily2y = 4
  let Lily3x = 30
  let Lily3y = 40
  let Lily4x = 55
  let Lily4y = 50
  let Lily5x = 60
  let Lily5y = 75
  let Lily6x = 100
  let Lily6y = 85
  let Lily7x = 80
  let Lily7y = 115
  let Lily8x = 105
  let Lily8y = 115

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(38, 38, 43); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  Draw_Lily_of_the_Valley (); 
}

function Draw_Lily_of_the_Valley (){

//Branches
stroke (99,138,99)
strokeWeight (1.5)

line(50,40,69,43)
line(57,41,120,100) //Long Branch
line(120,100,160,200)//Long Branch
line(79,89,87,70)
line(100,82,100,89)
line(124,110,109,115)
line(124,110,149,124)
line(138,145,129,154)
line (138,145,154,154)


// colour and stroke
  strokeWeight(1)
  stroke (180, 180, 184)
  fill(225,225,225)


//lily 1
  beginShape ();
  vertex (Lily1x+39,Lily1y+49);
  vertex (Lily1x+39,Lily1y+65);
  vertex (Lily1x+44,Lily1y+59);
  vertex (Lily1x+49,Lily1y+64);
  vertex (Lily1x+54,Lily1y+59);
  vertex (Lily1x+59,Lily1y+64);
  vertex (Lily1x+59,Lily1y+49)
  endShape (CLOSE);
  ellipse(Lily1x+49,Lily1y+49,20,20)

//lily 2
  beginShape ();
  vertex (Lily2x+39,Lily2y+49);
  vertex (Lily2x+39,Lily2y+65);
  vertex (Lily2x+44,Lily2y+59);
  vertex (Lily2x+49,Lily2y+64);
  vertex (Lily2x+54,Lily2y+59);
  vertex (Lily2x+59,Lily2y+64);
  vertex (Lily2x+59,Lily2y+49)
  endShape (CLOSE);
  ellipse(Lily2x+49,Lily2y+49,20,20)

//lily 3
  beginShape ();
  vertex (Lily3x+39,Lily3y+49);
  vertex (Lily3x+39,Lily3y+65);
  vertex (Lily3x+44,Lily3y+59);
  vertex (Lily3x+49,Lily3y+64);
  vertex (Lily3x+54,Lily3y+59);
  vertex (Lily3x+59,Lily3y+64);
  vertex (Lily3x+59,Lily3y+49)
  endShape (CLOSE);
  ellipse(Lily3x+49,Lily3y+49,20,20)

//lily 4
  beginShape ();
  vertex (Lily4x+35,Lily4y+49);
  vertex (Lily4x+35,Lily4y+65);
  vertex (Lily4x+40,Lily4y+59);
  vertex (Lily4x+45,Lily4y+64);
  vertex (Lily4x+50,Lily4y+59);
  vertex (Lily4x+55,Lily4y+64);
  vertex (Lily4x+55,Lily4y+49)
  endShape (CLOSE);
  ellipse(Lily4x+45,Lily4y+49,20,20)

//lily 5
  beginShape ();
  vertex (Lily5x+39,Lily5y+49);
  vertex (Lily5x+39,Lily5y+65);
  vertex (Lily5x+44,Lily5y+59);
  vertex (Lily5x+49,Lily5y+64);
  vertex (Lily5x+54,Lily5y+59);
  vertex (Lily5x+59,Lily5y+64);
  vertex (Lily5x+59,Lily5y+49)
  endShape (CLOSE);
  ellipse(Lily5x+49,Lily5y+49,20,20)

//lily 6
  beginShape ();
  vertex (Lily6x+39,Lily6y+49);
  vertex (Lily6x+39,Lily6y+65);
  vertex (Lily6x+44,Lily6y+59);
  vertex (Lily6x+49,Lily6y+64);
  vertex (Lily6x+54,Lily6y+59);
  vertex (Lily6x+59,Lily6y+64);
  vertex (Lily6x+59,Lily6y+49)
  endShape (CLOSE);
  ellipse(Lily6x+49,Lily6y+49,20,20)

//lily 7
  beginShape ();
  vertex (Lily7x+39,Lily7y+49);
  vertex (Lily7x+39,Lily7y+65);
  vertex (Lily7x+44,Lily7y+59);
  vertex (Lily7x+49,Lily7y+64);
  vertex (Lily7x+54,Lily7y+59);
  vertex (Lily7x+59,Lily7y+64);
  vertex (Lily7x+59,Lily7y+49)
  endShape (CLOSE);
  ellipse(Lily7x+49,Lily7y+49,20,20)

//lily 8
  beginShape ();
  vertex (Lily8x+39,Lily8y+49);
  vertex (Lily8x+39,Lily8y+65);
  vertex (Lily8x+44,Lily8y+59);
  vertex (Lily8x+49,Lily8y+64);
  vertex (Lily8x+54,Lily8y+59);
  vertex (Lily8x+59,Lily8y+64);
  vertex (Lily8x+59,Lily8y+49)
  endShape (CLOSE);
  ellipse(Lily8x+49,Lily8y+49,20,20)



}

function Draw_Clouds (){

  
}


    





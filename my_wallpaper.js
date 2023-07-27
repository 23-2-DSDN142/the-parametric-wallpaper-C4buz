//your parameter variables go here!
  let Lily1x = 1;
  let Lily1y = 1;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(38, 38, 43); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  Draw_Wallpaper (); 
}

function Draw_Wallpaper (){
  Draw_Lilies_Stem ();
  Draw_Lilies ();


function Draw_Lilies () {
  
  // colour and stroke
  strokeWeight(0.5)
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
  vertex (Lily1x+57,Lily1y+54);
  vertex (Lily1x+57,Lily1y+70);
  vertex (Lily1x+62,Lily1y+64);
  vertex (Lily1x+67,Lily1y+69);
  vertex (Lily1x+72,Lily1y+64);
  vertex (Lily1x+77,Lily1y+69);
  vertex (Lily1x+77,Lily1y+54)
  endShape (CLOSE);
  ellipse(Lily1x+67,Lily1y+54,20,20)

//lily 3
  beginShape ();
  vertex (Lily1x+69,Lily1y+88);
  vertex (Lily1x+68,Lily1y+104);
  vertex (Lily1x+73,Lily1y+98);
  vertex (Lily1x+78,Lily1y+103);
  vertex (Lily1x+83,Lily1y+98);
  vertex (Lily1x+88,Lily1y+103);
  vertex (Lily1x+88,Lily1y+88)
  endShape (CLOSE);
  ellipse(Lily1x+78,Lily1y+88,20,20)

//lily 4
  beginShape ();
  vertex (Lily1x+89,Lily1y+98);
  vertex (Lily1x+89,Lily1y+114);
  vertex (Lily1x+94,Lily1y+108);
  vertex (Lily1x+99,Lily1y+113);
  vertex (Lily1x+104,Lily1y+108);
  vertex (Lily1x+109,Lily1y+113);
  vertex (Lily1x+109,Lily1y+98)
  endShape (CLOSE);
  ellipse(Lily1x+99,Lily1y+98,20,20)

//lily 5
  beginShape ();
  vertex (Lily1x+98,Lily1y+123);
  vertex (Lily1x+98,Lily1y+139);
  vertex (Lily1x+103,Lily1y+133);
  vertex (Lily1x+108,Lily1y+138);
  vertex (Lily1x+113,Lily1y+133);
  vertex (Lily1x+118,Lily1y+138);
  vertex (Lily1x+118,Lily1y+123)
  endShape (CLOSE);
  ellipse(Lily1x+108,Lily1y+123,20,20)

//lily 6
  beginShape ();
  vertex (Lily1x+132,Lily1y+135);
  vertex (Lily1x+132,Lily1y+151);
  vertex (Lily1x+137,Lily1y+145);
  vertex (Lily1x+142,Lily1y+150);
  vertex (Lily1x+147,Lily1y+145);
  vertex (Lily1x+152,Lily1y+150);
  vertex (Lily1x+152,Lily1y+135)
  endShape (CLOSE);
  ellipse(Lily1x+142,Lily1y+135,20,20)

//lily 7
  beginShape ();
  vertex (Lily1x+116,Lily1y+163);
  vertex (Lily1x+116,Lily1y+179);
  vertex (Lily1x+121,Lily1y+173);
  vertex (Lily1x+126,Lily1y+178);
  vertex (Lily1x+131,Lily1y+173);
  vertex (Lily1x+136,Lily1y+178);
  vertex (Lily1x+136,Lily1y+163)
  endShape (CLOSE);
  ellipse(Lily1x+126,Lily1y+163,20,20)

//lily 8
  beginShape ();
  vertex (Lily1x+143,Lily1y+170);
  vertex (Lily1x+144,Lily1y+186);
  vertex (Lily1x+148,Lily1y+180);
  vertex (Lily1x+154,Lily1y+185);
  vertex (Lily1x+158,Lily1y+180);
  vertex (Lily1x+163,Lily1y+185);
  vertex (Lily1x+163,Lily1y+170)
  endShape (CLOSE);
  ellipse(Lily1x+153,Lily1y+170,20,20)

}
  
function Draw_Lilies_Stem () { 
  
  stroke (99,138,99)
  fill (38, 38, 43);
  strokeWeight (1.5)
    
  beginShape ();
  curveVertex (50,40);
  curveVertex (50,40);
  curveVertex (60,30);
  curveVertex (75,42);
  curveVertex (75,42);
  endShape ();

  beginShape ();
  curveVertex (66,55);
  curveVertex (66,55);
  curveVertex (75,38);
  curveVertex (90,58);
  curveVertex (90,58);
  endShape ();

  beginShape ();
  curveVertex (78,89);
  curveVertex (78,89);
  curveVertex (83,59);
  curveVertex (94,64);
  curveVertex (94,64);
  endShape ();

  beginShape();
  curveVertex (100,99);
  curveVertex (100,99);
  curveVertex (98,75);
  curveVertex (103,76);
  curveVertex (103,76);
  endShape ();

  beginShape ();
  curveVertex (107,124);
  curveVertex (107,124);
  curveVertex (110,100);
  curveVertex (120,100);
  curveVertex (120,100);
  endShape ();

  beginShape ();
  curveVertex (127,164);
  curveVertex (127,164);
  curveVertex (125,125);
  curveVertex (132,125);
  curveVertex (132,125);
  endShape ();

  line (154,164,154,157)

  line (90,58,120,100)
  line (120,100,132,125)
  line (132,125,170,180)
}

function Draw_Leaf (){

  beginShape ()
  curvedVertex ()
}

}



  


    





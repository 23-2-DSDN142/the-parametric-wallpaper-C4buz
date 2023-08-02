//your parameter variables go here!
  let Lily1x = 15;
  let Lily1y = -15;
  let Leafx = 1;
  let Leafy = 1;

  let LilySize = 1    


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
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
  Draw_Lilies ();
  Draw_Lilies_Stem ();
  Draw_Leaf();


function Draw_Lilies () {
  
  // colour and stroke
  strokeWeight(0.5)
  stroke (180, 180, 184)
  fill(225,225,225)


//lily 1
  beginShape ();
  vertex (Lily1x+58,Lily1y+60);
  vertex (Lily1x+58,Lily1y+77);
  vertex (Lily1x+63,Lily1y+70);
  vertex (Lily1x+68,Lily1y+75);
  vertex (Lily1x+73,Lily1y+70);
  vertex (Lily1x+78,Lily1y+75);
  vertex (Lily1x+78,Lily1y+60)
  endShape (CLOSE);
  ellipse(Lily1x+68,Lily1y+60,20,15)  


//lily 2
  beginShape ();
  vertex (Lily1x+39,Lily1y+59);
  vertex (Lily1x+39,Lily1y+75);
  vertex (Lily1x+44,Lily1y+69);
  vertex (Lily1x+49,Lily1y+74);
  vertex (Lily1x+54,Lily1y+69);
  vertex (Lily1x+59,Lily1y+74);
  vertex (Lily1x+59,Lily1y+59)
  endShape (CLOSE);
  ellipse(Lily1x+49,Lily1y+59,20,15)

//lily 3
  beginShape ();
  vertex (Lily1x+66,Lily1y+86);
  vertex (Lily1x+66,Lily1y+102);
  vertex (Lily1x+71,Lily1y+96);
  vertex (Lily1x+76,Lily1y+101);
  vertex (Lily1x+81,Lily1y+96);
  vertex (Lily1x+86,Lily1y+101);
  vertex (Lily1x+86,Lily1y+86)
  endShape (CLOSE);
  ellipse(Lily1x+76,Lily1y+86,20,15)

//lily 4
  beginShape ();
  vertex (Lily1x+87,Lily1y+98);
  vertex (Lily1x+87,Lily1y+114);
  vertex (Lily1x+91,Lily1y+108);
  vertex (Lily1x+97,Lily1y+113);
  vertex (Lily1x+101,Lily1y+108);
  vertex (Lily1x+107,Lily1y+113);
  vertex (Lily1x+107,Lily1y+98)
  endShape (CLOSE);
  ellipse(Lily1x+97,Lily1y+98,20,15)

//lily 5
  beginShape ();
  vertex (Lily1x+102,Lily1y+122);
  vertex (Lily1x+102,Lily1y+138);
  vertex (Lily1x+107,Lily1y+132);
  vertex (Lily1x+112,Lily1y+137);
  vertex (Lily1x+117,Lily1y+132);
  vertex (Lily1x+122,Lily1y+137);
  vertex (Lily1x+122,Lily1y+122)
  endShape (CLOSE);
  ellipse(Lily1x+112,Lily1y+122,20,15)

//lily 6
  beginShape ();
  vertex (Lily1x+134,Lily1y+140);
  vertex (Lily1x+134,Lily1y+156);
  vertex (Lily1x+139,Lily1y+150);
  vertex (Lily1x+144,Lily1y+155);
  vertex (Lily1x+149,Lily1y+150);
  vertex (Lily1x+154,Lily1y+155);
  vertex (Lily1x+154,Lily1y+140)
  endShape (CLOSE);
  ellipse(Lily1x+144,Lily1y+140,20,15)

//lily 7
  beginShape ();
  vertex (Lily1x+121,Lily1y+167);
  vertex (Lily1x+121,Lily1y+183);
  vertex (Lily1x+126,Lily1y+177);
  vertex (Lily1x+131,Lily1y+182);
  vertex (Lily1x+136,Lily1y+177);
  vertex (Lily1x+141,Lily1y+182);
  vertex (Lily1x+141,Lily1y+167)
  endShape (CLOSE);
  ellipse(Lily1x+131,Lily1y+167,20,15)

//lily 8
  beginShape ();
  vertex (Lily1x+139,Lily1y+175);
  vertex (Lily1x+140,Lily1y+191);
  vertex (Lily1x+144,Lily1y+185);
  vertex (Lily1x+150,Lily1y+190);
  vertex (Lily1x+154,Lily1y+185);
  vertex (Lily1x+159,Lily1y+190);
  vertex (Lily1x+159,Lily1y+175)
  endShape (CLOSE);
  ellipse(Lily1x+149,Lily1y+175,20,15)

}
  
function Draw_Lilies_Stem () { 
  
  stroke (99,138,99)
  noFill (38, 38, 43);
  strokeWeight (1.5)
    
  beginShape ();
  curveVertex (Lily1x+49,Lily1y+52);
  curveVertex (Lily1x+49,Lily1y+52);
  vertex (Lily1x+54,Lily1y+31);
  vertex (Lily1x+80,Lily1y+46);
  vertex (Lily1x+80,Lily1y+46);
  endShape ();

  beginShape ();
  curveVertex (Lily1x+68,Lily1y+53);
  curveVertex (Lily1x+68,Lily1y+53);
  curveVertex (Lily1x+71,Lily1y+36);
  curveVertex (Lily1x+84,Lily1y+51);
  curveVertex (Lily1x+84,Lily1y+51);
  endShape ();

  beginShape ();
  curveVertex (Lily1x+76,Lily1y+79);
  curveVertex (Lily1x+76,Lily1y+79);
  curveVertex (Lily1x+82,Lily1y+64);
  curveVertex (Lily1x+91,Lily1y+59);
  curveVertex (Lily1x+91,Lily1y+59);
  endShape ();

  beginShape();
  curveVertex (Lily1x+97,Lily1y+91);
  curveVertex (Lily1x+97,Lily1y+91);
  curveVertex (Lily1x+99,Lily1y+66);
  curveVertex (Lily1x+104,Lily1y+74);
  curveVertex (Lily1x+104,Lily1y+74);
  endShape ();

  beginShape ();
  curveVertex (Lily1x+112,Lily1y+116);
  curveVertex (Lily1x+112,Lily1y+116);
  curveVertex (Lily1x+114,Lily1y+99);
  curveVertex (Lily1x+119,Lily1y+93);
  curveVertex (Lily1x+119,Lily1y+93);
  endShape ();

  beginShape ();
  curveVertex (Lily1x+144,Lily1y+133);
  curveVertex (Lily1x+144,Lily1y+133);
  curveVertex (Lily1x+145,Lily1y+123);
  curveVertex (Lily1x+147,Lily1y+130);
  curveVertex (Lily1x+147,Lily1y+130);
  endShape ();

  beginShape ();
  curveVertex (Lily1x+131,Lily1y+160);
  curveVertex (Lily1x+131,Lily1y+160);
  curveVertex (Lily1x+134,Lily1y+146);
  curveVertex (Lily1x+158,Lily1y+156);
  curveVertex (Lily1x+158,Lily1y+156);
  endShape ();

  beginShape ();
  curveVertex (Lily1x+149,Lily1y+168);
  curveVertex (Lily1x+149,Lily1y+168);
  curveVertex (Lily1x+156,Lily1y+159);
  curveVertex (Lily1x+161,Lily1y+171);
  curveVertex (Lily1x+161,Lily1y+171);
  endShape ();

  beginShape ();
  curveVertex (Lily1x+80,Lily1y+46);
  curveVertex (Lily1x+80,Lily1y+46);
  curveVertex (Lily1x+134,Lily1y+111);
  curveVertex (Lily1x+157,Lily1y+151);
  curveVertex (Lily1x+163,Lily1y+191);
  curveVertex (Lily1x+163,Lily1y+191);
  endShape ();
  
}

function Draw_Leaf (){
  
  fill (99,138,99);
  stroke (62, 87, 62)
  strokeWeight (1);

 //1
  beginShape ();
  curveVertex (Leafx+38,Leafy+190);
  curveVertex (Leafx+38,Leafy+190);
  curveVertex (Leafx+27,Leafy+170);
  curveVertex (Leafx+31,Leafy+150);
  curveVertex (Leafx+31,Leafy+150);
  endShape (CLOSE);

  beginShape ();
  curveVertex (Leafx+38,Leafy+190);
  curveVertex (Leafx+38,Leafy+190);
  curveVertex (Leafx+42,Leafy+170);
  curveVertex (Leafx+31,Leafy+150);
  curveVertex (Leafx+31,Leafy+150);
  endShape (CLOSE);

  //2
  beginShape ();
  curveVertex (Leafx+57,Leafy+165);
  curveVertex (Leafx+57,Leafy+165);
  curveVertex (Leafx+39,Leafy+150);
  curveVertex (Leafx+32,Leafy+130);
  curveVertex (Leafx+32,Leafy+130);
  endShape (CLOSE);

  beginShape ();
  curveVertex (Leafx+57,Leafy+165);
  curveVertex (Leafx+57,Leafy+165);
  curveVertex (Leafx+50,Leafy+143);
  curveVertex (Leafx+32,Leafy+130);
  curveVertex (Leafx+32,Leafy+130);
  endShape (CLOSE);
  
  //3
  beginShape ();
  curveVertex (Leafx+8,Leafy+165);
  curveVertex (Leafx+8,Leafy+165);
  curveVertex (Leafx+24,Leafy+150);
  curveVertex (Leafx+28,Leafy+130);
  curveVertex (Leafx+28,Leafy+130);
  endShape (CLOSE);

  beginShape ();
  curveVertex (Leafx+8,Leafy+165);
  curveVertex (Leafx+8,Leafy+165);
  curveVertex (Leafx+11,Leafy+143);
  curveVertex (Leafx+28,Leafy+130);
  curveVertex (Leafx+28,Leafy+130);
  endShape (CLOSE);

  //4
  beginShape ();
  curveVertex (Leafx+6,Leafy+133);
  curveVertex (Leafx+6,Leafy+133);
  curveVertex (Leafx+25,Leafy+121);
  curveVertex (Leafx+31,Leafy+103);
  curveVertex (Leafx+31,Leafy+103);
  endShape (CLOSE);

  beginShape ();
  curveVertex (Leafx+6,Leafy+133);
  curveVertex (Leafx+6,Leafy+133);
  curveVertex (Leafx+13,Leafy+114);
  curveVertex (Leafx+31,Leafy+103);
  curveVertex (Leafx+31,Leafy+103);
  endShape (CLOSE);

  //5
  beginShape ();
  curveVertex (Leafx+57,Leafy+134);
  curveVertex (Leafx+57,Leafy+134);
  curveVertex (Leafx+51,Leafy+116);
  curveVertex (Leafx+35,Leafy+104);
  curveVertex (Leafx+35,Leafy+104);
  endShape (CLOSE);

  beginShape ();
  curveVertex (Leafx+57,Leafy+134);
  curveVertex (Leafx+57,Leafy+134);
  curveVertex (Leafx+38,Leafy+122);
  curveVertex (Leafx+35,Leafy+104);
  curveVertex (Leafx+35,Leafy+104);
  endShape (CLOSE);

  //6
  beginShape ();
  curveVertex (Leafx+58,Leafy+111);
  curveVertex (Leafx+58,Leafy+111);
  curveVertex (Leafx+53,Leafy+93);
  curveVertex (Leafx+38,Leafy+81);
  curveVertex (Leafx+38,Leafy+81);
  endShape (CLOSE);

  beginShape ();
  curveVertex (Leafx+58,Leafy+111);
  curveVertex (Leafx+58,Leafy+111);
  curveVertex (Leafx+43,Leafy+99);
  curveVertex (Leafx+38,Leafy+81);
  curveVertex (Leafx+38,Leafy+81);
  endShape (CLOSE);

  //7
  beginShape ();
  curveVertex (Leafx+8,Leafy+105);
  curveVertex (Leafx+8,Leafy+105);
  curveVertex (Leafx+29,Leafy+95);
  curveVertex (Leafx+34,Leafy+80);
  curveVertex (Leafx+34,Leafy+80);
  endShape (CLOSE);

  beginShape ();
  curveVertex (Leafx+8,Leafy+105);
  curveVertex (Leafx+8,Leafy+105);
  curveVertex (Leafx+18,Leafy+87);
  curveVertex (Leafx+34,Leafy+80);
  curveVertex (Leafx+34,Leafy+80);
  endShape (CLOSE);

  curveVertex(  )

}
}




  


    





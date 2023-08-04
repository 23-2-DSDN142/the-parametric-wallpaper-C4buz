//your parameter variables go here!

//test
let Lily1x = 15;
let Lily1y = 5;

let Leafx = 8;
let Leafy = 10;

let Leaf2x = 135;
let Leaf2y = -75;

let LeafOutline = 1;

let Butterflyx = 10;
let Butterflyy = 2;

let bluex = 0;
let bluey = 0;

let blue2x = -65;
let blue2y = -120;

let petalsize = 6;
let middlesize =3;

let heartx = 0;
let hearty = -25;

let butterfly = true;  

let background_colour = (38,38,43);
let leaf_colour= (99,138,99);
let leaf_stroke_colour = (62,87,62);
let butterflycolour = ("#a7c7cc");
let heartleaf_colour = (182,212,165);

function setup_wallpaper(pWallpaper) {
pWallpaper.output_mode(GRID_WALLPAPER);
pWallpaper.resolution(NINE_LANDSCAPE);
pWallpaper.show_guide(false); //set this to false when you're ready to print

//Grid settings
pWallpaper.grid_settings.cell_width  = 200;
pWallpaper.grid_settings.cell_height = 200;
pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
background(background_colour); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
Draw_Butterfly();
Draw_Lilies ();
Draw_Lilies_Stem ();
Draw_Leaf();
Draw_Leaf2();
DrawTinyFlower ();
DrawHeartLeaf ();
}
function Draw_Lilies () {

// colour and stroke
strokeWeight(0.5)
stroke (180, 180, 184)
fill(220, 231, 232)


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

stroke (99,138,99);
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

fill(99,138,99)
beginShape ();
curveVertex (Lily1x+163,Lily1y+191);
curveVertex (Lily1x+163,Lily1y+191);
curveVertex (Lily1x+166,Lily1y+189);
curveVertex (Lily1x+160,Lily1y+155);
curveVertex (Lily1x+143,Lily1y+124);
curveVertex (Lily1x+143,Lily1y+124);
curveVertex (Lily1x+157,Lily1y+150);
curveVertex (Lily1x+157,Lily1y+150);
endShape ();


}
function Draw_Leaf (){

fill (99,138,99);
stroke (62, 87, 62)
strokeWeight (LeafOutline);

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

//Stalk
noFill ();
strokeWeight (2)

beginShape ();
curveVertex (Leafx+31,Leafy+150);
curveVertex (Leafx+31,Leafy+150);
curveVertex (Leafx+30,Leafy+130);
curveVertex (Leafx+37,Leafy+70);
curveVertex (Leafx+37,Leafy+70);
endShape ();
}
function Draw_Leaf2(){
fill (99,138,99);
stroke (62, 87, 62)
strokeWeight (LeafOutline);

//1
beginShape ();
curveVertex (Leaf2x+25,Leaf2y+190);
curveVertex (Leaf2x+25,Leaf2y+190);
curveVertex (Leaf2x+20,Leaf2y+168);
curveVertex (Leaf2x+31,Leaf2y+150);
curveVertex (Leaf2x+31,Leaf2y+150);
endShape (CLOSE);

beginShape ();
curveVertex (Leaf2x+25,Leaf2y+190);
curveVertex (Leaf2x+25,Leaf2y+190);
curveVertex (Leaf2x+35,Leaf2y+170);
curveVertex (Leaf2x+31,Leaf2y+150);
curveVertex (Leaf2x+31,Leaf2y+150);
endShape (CLOSE);

//2
beginShape ();
curveVertex (Leaf2x+60,Leaf2y+165);
curveVertex (Leaf2x+60,Leaf2y+165);
curveVertex (Leaf2x+42,Leaf2y+150);
curveVertex (Leaf2x+35,Leaf2y+130);
curveVertex (Leaf2x+35,Leaf2y+130);
endShape (CLOSE);

beginShape ();
curveVertex (Leaf2x+60,Leaf2y+165);
curveVertex (Leaf2x+60,Leaf2y+165);
curveVertex (Leaf2x+53,Leaf2y+143);
curveVertex (Leaf2x+35,Leaf2y+130);
curveVertex (Leaf2x+35,Leaf2y+130);
endShape (CLOSE);

//3
beginShape ();
curveVertex (Leaf2x+10,Leaf2y+160);
curveVertex (Leaf2x+10,Leaf2y+160);
curveVertex (Leaf2x+26,Leaf2y+145);
curveVertex (Leaf2x+30,Leaf2y+125);
curveVertex (Leaf2x+30,Leaf2y+125);
endShape (CLOSE);

beginShape ();
curveVertex (Leaf2x+10,Leaf2y+160);
curveVertex (Leaf2x+10,Leaf2y+160);
curveVertex (Leaf2x+13,Leaf2y+138);
curveVertex (Leaf2x+30,Leaf2y+125);
curveVertex (Leaf2x+30,Leaf2y+125);
endShape (CLOSE);

//4
beginShape ();
curveVertex (Leaf2x+1,Leaf2y+133);
curveVertex (Leaf2x+1,Leaf2y+133);
curveVertex (Leaf2x+20,Leaf2y+121);
curveVertex (Leaf2x+26,Leaf2y+103);
curveVertex (Leaf2x+26,Leaf2y+103);
endShape (CLOSE);

beginShape ();
curveVertex (Leaf2x+1,Leaf2y+133);
curveVertex (Leaf2x+1,Leaf2y+133);
curveVertex (Leaf2x+8,Leaf2y+114);
curveVertex (Leaf2x+26,Leaf2y+103);
curveVertex (Leaf2x+26,Leaf2y+103);
endShape (CLOSE);

//5
beginShape ();
curveVertex (Leaf2x+57,Leaf2y+132);
curveVertex (Leaf2x+57,Leaf2y+132);
curveVertex (Leaf2x+51,Leaf2y+114);
curveVertex (Leaf2x+32,Leaf2y+102);
curveVertex (Leaf2x+32,Leaf2y+102);
endShape (CLOSE);

beginShape ();
curveVertex (Leaf2x+57,Leaf2y+132);
curveVertex (Leaf2x+57,Leaf2y+132);
curveVertex (Leaf2x+38,Leaf2y+120);
curveVertex (Leaf2x+32,Leaf2y+102);
curveVertex (Leaf2x+32,Leaf2y+102);
endShape (CLOSE);

//6
beginShape ();
curveVertex (Leaf2x+58,Leaf2y+100);
curveVertex (Leaf2x+58,Leaf2y+100);
curveVertex (Leaf2x+43,Leaf2y+83);
curveVertex (Leaf2x+28,Leaf2y+81);
curveVertex (Leaf2x+28,Leaf2y+81);
endShape (CLOSE);

beginShape ();
curveVertex (Leaf2x+58,Leaf2y+100);
curveVertex (Leaf2x+58,Leaf2y+100);
curveVertex (Leaf2x+38,Leaf2y+96);
curveVertex (Leaf2x+28,Leaf2y+81);
curveVertex (Leaf2x+28,Leaf2y+81);
endShape (CLOSE);

//7
beginShape ();
curveVertex (Leaf2x-2,Leaf2y+105);
curveVertex (Leaf2x-2,Leaf2y+105);
curveVertex (Leaf2x+19,Leaf2y+95);
curveVertex (Leaf2x+24,Leaf2y+80);
curveVertex (Leaf2x+24,Leaf2y+80);
endShape (CLOSE);

beginShape ();
curveVertex (Leaf2x-2,Leaf2y+105);
curveVertex (Leaf2x-2,Leaf2y+105);
curveVertex (Leaf2x+8,Leaf2y+87);
curveVertex (Leaf2x+24,Leaf2y+80);
curveVertex (Leaf2x+24,Leaf2y+80);
endShape (CLOSE);

//Stalk
noFill ();
strokeWeight (2)

beginShape ();
curveVertex (Leaf2x+31,Leaf2y+150);
curveVertex (Leaf2x+31,Leaf2y+150);
curveVertex (Leaf2x+32,Leaf2y+120);
curveVertex (Leaf2x+26,Leaf2y+80);
curveVertex (Leaf2x+26,Leaf2y+80);
endShape ();


}
function DrawTinyFlower (){
//Blue Flower Lower
//Branches
strokeWeight (1)
stroke (99,138,99);
noFill (38, 38, 43);

beginShape ();
curveVertex (bluex+85,bluey+135.5);
curveVertex (bluex+85,bluey+135.5);
curveVertex (bluex+95,bluey+170);
curveVertex (bluex+95,bluey+195);
curveVertex (bluex+95,bluey+195);
endShape ();

line (bluex+80,bluey+187.5,bluex+95,bluey+190);
line (bluex+112,bluey+174.5,bluex+96,bluey+185);
line (bluex+78,bluey+168.5,bluex+95.5,bluey+180);
line (bluex+107,bluey+155.5,bluex+95,bluey+170);
line (bluex+77,bluey+152.5,bluex+92,bluey+160);
line (bluex+97,bluey+142.5,bluex+90,bluey+151)


//1
fill (117,162,203);
strokeWeight (0);
ellipse (bluex+80,bluey+185,petalsize,petalsize);
ellipse (bluex+77.8,bluey+186.7,petalsize,petalsize);
ellipse (bluex+82.3,bluey+186.7,petalsize,petalsize);
ellipse (bluex+81.5,bluey+189.5,petalsize,petalsize);
ellipse (bluex+78.5,bluey+189.5,petalsize,petalsize);
fill (255,255,255)
ellipse(bluex+80,bluey+187.5,middlesize,middlesize);

//2
fill (117,162,203);
strokeWeight (0);
ellipse (bluex+112,bluey+172,petalsize,petalsize);
ellipse (bluex+109.8,bluey+173.7,petalsize,petalsize);
ellipse (bluex+114.3,bluey+173.7,petalsize,petalsize);
ellipse (bluex+113.5,bluey+176.5,petalsize,petalsize);
ellipse (bluex+110.5,bluey+176.5,petalsize,petalsize);
fill (255,255,255)
ellipse(bluex+112,bluey+174.5,middlesize,middlesize);

//3
fill (117,162,203);
strokeWeight (0);
ellipse (bluex+78,bluey+166,petalsize,petalsize);
ellipse (bluex+75.8,bluey+167.7,petalsize,petalsize);
ellipse (bluex+80.3,bluey+167.7,petalsize,petalsize);
ellipse (bluex+79.5,bluey+170.5,petalsize,petalsize);
ellipse (bluex+76.5,bluey+170.5,petalsize,petalsize);
fill (255,255,255)
ellipse(bluex+78,bluey+168.5,middlesize,middlesize);

//4
fill (117,162,203);
strokeWeight (0);
ellipse (bluex+107,bluey+153,petalsize,petalsize);
ellipse (bluex+104.8,bluey+154.7,petalsize,petalsize);
ellipse (bluex+109.3,bluey+154.7,petalsize,petalsize);
ellipse (bluex+108.5,bluey+157.5,petalsize,petalsize);
ellipse (bluex+105.5,bluey+157.5,petalsize,petalsize);
fill (255,255,255)
ellipse(bluex+107,bluey+155.5,middlesize,middlesize);

//5
fill (117,162,203);
strokeWeight (0);
ellipse (bluex+77,bluey+150,petalsize,petalsize);
ellipse (bluex+74.8,bluey+151.7,petalsize,petalsize);
ellipse (bluex+79.3,bluey+151.7,petalsize,petalsize);
ellipse (bluex+78.5,bluey+154.5,petalsize,petalsize);
ellipse (bluex+75.5,bluey+154.5,petalsize,petalsize);
fill (255,255,255)
ellipse(bluex+77,bluey+152.5,middlesize,middlesize);

//6
fill (117,162,203);
strokeWeight (0);
ellipse (bluex+97,bluey+140,petalsize,petalsize);
ellipse (bluex+94.8,bluey+141.7,petalsize,petalsize);
ellipse (bluex+99.3,bluey+141.7,petalsize,petalsize);
ellipse (bluex+98.5,bluey+144.5,petalsize,petalsize);
ellipse (bluex+95.5,bluey+144.5,petalsize,petalsize);
fill (255,255,255)
ellipse(bluex+97,bluey+142.5,middlesize,middlesize);

//7
fill (117,162,203);
strokeWeight (0);
ellipse (bluex+85,bluey+133,petalsize,petalsize);
ellipse (bluex+82.8,bluey+134.7,petalsize,petalsize);
ellipse (bluex+87.3,bluey+134.7,petalsize,petalsize);
ellipse (bluex+86.5,bluey+137.5,petalsize,petalsize);
ellipse (bluex+83.5,bluey+137.5,petalsize,petalsize);
fill (255,255,255)
ellipse(bluex+85,bluey+135.5,middlesize,middlesize);


//Blue Flower Upper
strokeWeight (1)
stroke (99,138,99);
noFill (38, 38, 43);

beginShape ();
curveVertex (blue2x+95,blue2y+132.5);
curveVertex (blue2x+95,blue2y+132.5);
curveVertex (blue2x+90,blue2y+162);
curveVertex (blue2x+95,blue2y+195);
curveVertex (blue2x+95,blue2y+195);
endShape ();

line (blue2x+79,blue2y+182.5,blue2x+94,blue2y+190);
line (blue2x+108,blue2y+176,blue2x+93.5,blue2y+185);
line (blue2x+78,blue2y+163.5,blue2x+91,blue2y+175);
line (blue2x+107,blue2y+160.5,blue2x+91,blue2y+170);
line (blue2x+80,blue2y+143.5,blue2x+90,blue2y+160);
line (blue2x+100,blue2y+147.5,blue2x+91.5,blue2y+151)

//1
fill (117,162,203);
strokeWeight (0);
ellipse (blue2x+80,blue2y+180,petalsize,petalsize);
ellipse (blue2x+77.8,blue2y+181.7,petalsize,petalsize);
ellipse (blue2x+82.3,blue2y+181.7,petalsize,petalsize);
ellipse (blue2x+81.5,blue2y+184.5,petalsize,petalsize);
ellipse (blue2x+78.5,blue2y+184.5,petalsize,petalsize);
fill (255,255,255)
ellipse(blue2x+80,blue2y+182.5,middlesize,middlesize);

//2
fill (117,162,203);
strokeWeight (0);
ellipse (blue2x+107,blue2y+175,petalsize,petalsize);
ellipse (blue2x+104.8,blue2y+176.7,petalsize,petalsize);
ellipse (blue2x+109.3,blue2y+176.7,petalsize,petalsize);
ellipse (blue2x+108.5,blue2y+179.5,petalsize,petalsize);
ellipse (blue2x+105.5,blue2y+179.5,petalsize,petalsize);
fill (255,255,255)
ellipse(blue2x+107,blue2y+177.5,middlesize,middlesize);

//3
fill (117,162,203);
strokeWeight (0);
ellipse (blue2x+78,blue2y+161,petalsize,petalsize);
ellipse (blue2x+75.8,blue2y+162.7,petalsize,petalsize);
ellipse (blue2x+80.3,blue2y+162.7,petalsize,petalsize);
ellipse (blue2x+79.5,blue2y+165.5,petalsize,petalsize);
ellipse (blue2x+76.5,blue2y+165.5,petalsize,petalsize);
fill (255,255,255)
ellipse(blue2x+78,blue2y+163.5,middlesize,middlesize);

//4
fill (117,162,203);
strokeWeight (0);
ellipse (blue2x+107,blue2y+158,petalsize,petalsize);
ellipse (blue2x+104.8,blue2y+159.7,petalsize,petalsize);
ellipse (blue2x+109.3,blue2y+159.7,petalsize,petalsize);
ellipse (blue2x+108.5,blue2y+162.5,petalsize,petalsize);
ellipse (blue2x+105.5,blue2y+162.5,petalsize,petalsize);
fill (255,255,255)
ellipse(blue2x+107,blue2y+160.5,middlesize,middlesize);

//5
fill (117,162,203);
strokeWeight (0);
ellipse (blue2x+80,blue2y+141,petalsize,petalsize);
ellipse (blue2x+77.8,blue2y+142.7,petalsize,petalsize);
ellipse (blue2x+82.3,blue2y+142.7,petalsize,petalsize);
ellipse (blue2x+81.5,blue2y+145.5,petalsize,petalsize);
ellipse (blue2x+78.5,blue2y+145.5,petalsize,petalsize);
fill (255,255,255)
ellipse(blue2x+80,blue2y+143.5,middlesize,middlesize);

//6
fill (117,162,203);
strokeWeight (0);
ellipse (blue2x+100,blue2y+145,petalsize,petalsize);
ellipse (blue2x+97.8,blue2y+146.7,petalsize,petalsize);
ellipse (blue2x+102.3,blue2y+146.7,petalsize,petalsize);
ellipse (blue2x+101.5,blue2y+149.5,petalsize,petalsize);
ellipse (blue2x+98.5,blue2y+149.5,petalsize,petalsize);
fill (255,255,255)
ellipse(blue2x+100,blue2y+147.5,middlesize,middlesize);

//7
fill (117,162,203);
strokeWeight (0);
ellipse (blue2x+95,blue2y+130,petalsize,petalsize);
ellipse (blue2x+92.8,blue2y+131.7,petalsize,petalsize);
ellipse (blue2x+97.3,blue2y+131.7,petalsize,petalsize);
ellipse (blue2x+96.5,blue2y+134.5,petalsize,petalsize);
ellipse (blue2x+93.5,blue2y+134.5,petalsize,petalsize);
fill (255,255,255)
ellipse(blue2x+95,blue2y+132.5,middlesize,middlesize);


//background arc =true (if statements (if true) for backdrop stuff)

}
function Draw_Butterfly(){

if (butterfly == true){
stroke (17, 36, 46)
strokeWeight (0.5);

//TopWing
fill (butterflycolour);

beginShape ();
curveVertex (Butterflyx+90,Butterflyy+35);
curveVertex (Butterflyx+90,Butterflyy+35);
curveVertex (Butterflyx+80,Butterflyy+10);
curveVertex (Butterflyx+95,Butterflyy+8);
curveVertex (Butterflyx+108,Butterflyy+15);
curveVertex (Butterflyx+100,Butterflyy+40);
curveVertex (Butterflyx+100,Butterflyy+40);
endShape();

//LowerWing
fill (butterflycolour);

beginShape ();
curveVertex (Butterflyx+92,Butterflyy+36);
curveVertex (Butterflyx+92,Butterflyy+36);
curveVertex (Butterflyx+110,Butterflyy+20);
curveVertex (Butterflyx+115,Butterflyy+35);
curveVertex (Butterflyx+95,Butterflyy+40);
curveVertex (Butterflyx+95,Butterflyy+40);
endShape();

//body
fill(194, 180, 153);
stroke (48, 35, 11)
strokeWeight (0);

beginShape ();
curveVertex (Butterflyx+88,Butterflyy+33);
curveVertex (Butterflyx+88,Butterflyy+33);
curveVertex (Butterflyx+103,Butterflyy+43);
curveVertex (Butterflyx+103,Butterflyy+45);
curveVertex (Butterflyx+90,Butterflyy+38);
curveVertex (Butterflyx+89,Butterflyy+33);
curveVertex (Butterflyx+89,Butterflyy+33);
endShape();


//antennae
strokeWeight (1)
stroke(135, 127, 120);
line (Butterflyx+88,Butterflyy+35,Butterflyx+86,Butterflyy+30)
line (Butterflyx+88,Butterflyy+36,Butterflyx+83,Butterflyy+32)
}
else{
  
}
}
function DrawHeartLeaf (){

strokeWeight (1.5)
stroke(92, 125, 74)

line (heartx+194.6,hearty+197,heartx+194.6,hearty+137)

fill (182, 212, 165)

//1
beginShape ();
curveVertex (heartx+195,hearty+187);
curveVertex (heartx+195,hearty+187);
curveVertex (heartx+185,hearty+178);
curveVertex (heartx+190,hearty+175);
curveVertex (heartx+194,hearty+178);
curveVertex (heartx+195,hearty+187);
curveVertex (heartx+195,hearty+187);
endShape ();

beginShape ();
curveVertex (heartx+195,hearty+187);
curveVertex (heartx+195,hearty+187);
curveVertex (heartx+195,hearty+178);
curveVertex (heartx+200,hearty+175);
curveVertex (heartx+204,hearty+178);
curveVertex (heartx+195,hearty+187);
curveVertex (heartx+205,hearty+187);
endShape ();

//2
beginShape ();
curveVertex (heartx+195,hearty+172);
curveVertex (heartx+195,hearty+172);
curveVertex (heartx+185,hearty+163);
curveVertex (heartx+190,hearty+160);
curveVertex (heartx+194,hearty+163);
curveVertex (heartx+195,hearty+172);
curveVertex (heartx+195,hearty+172);
endShape ();

beginShape ();
curveVertex (heartx+195,hearty+172);
curveVertex (heartx+195,hearty+172);
curveVertex (heartx+195,hearty+163);
curveVertex (heartx+200,hearty+160);
curveVertex (heartx+204,hearty+163);
curveVertex (heartx+195,hearty+172);
curveVertex (heartx+205,hearty+172);
endShape ();

//3
beginShape ();
curveVertex (heartx+195,hearty+157);
curveVertex (heartx+195,hearty+157);
curveVertex (heartx+185,hearty+148);
curveVertex (heartx+190,hearty+145);
curveVertex (heartx+194,hearty+148);
curveVertex (heartx+195,hearty+157);
curveVertex (heartx+195,hearty+157);
endShape ();

beginShape ();
curveVertex (heartx+195,hearty+157);
curveVertex (heartx+195,hearty+157);
curveVertex (heartx+195,hearty+148);
curveVertex (heartx+200,hearty+145);
curveVertex (heartx+204,hearty+148);
curveVertex (heartx+195,hearty+157);
curveVertex (heartx+205,hearty+157);
endShape ();

//4
beginShape ();
curveVertex (heartx+195,hearty+142);
curveVertex (heartx+195,hearty+142);
curveVertex (heartx+185,hearty+133);
curveVertex (heartx+190,hearty+130);
curveVertex (heartx+194,hearty+133);
curveVertex (heartx+195,hearty+142);
curveVertex (heartx+195,hearty+142);
endShape ();

beginShape ();
curveVertex (heartx+195,hearty+142);
curveVertex (heartx+195,hearty+142);
curveVertex (heartx+195,hearty+133);
curveVertex (heartx+200,hearty+130);
curveVertex (heartx+204,hearty+133);
curveVertex (heartx+195,hearty+142);
curveVertex (heartx+205,hearty+142);
endShape ();



}





  


    





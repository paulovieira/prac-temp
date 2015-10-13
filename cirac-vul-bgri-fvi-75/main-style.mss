/*
Map {
  background-color: #b8dee6;
}

#countries {
  ::outline {
    line-color: #85c5d3;
    line-width: 2;
    line-join: round;
  }
  polygon-fill: #fff;
}
*/

/* set border of the BGRI according to the zoom */

#cirac_vul_bgri_fvi_75[zoom<=10] {
  line-color: black;
  line-width:0.0;
}

#cirac_vul_bgri_fvi_75[zoom=11] {
  line-color: black;
  line-width:0.3;
}

#cirac_vul_bgri_fvi_75[zoom=12] {
  line-color: #434343;
  line-width:0.5;
}

#cirac_vul_bgri_fvi_75[zoom>=13] {
  line-color:#434343;
  line-width:0.6;
}

/* 
 
Set fill color of the BGRI according to the vulnerability value. The scale has 4 values:

baixo 3-5 #38A800
moderado 6-7 #FFFF00
elevado 8-10 #FF9500
muito elevado 11-12 #FF0000
 
*/

#cirac_vul_bgri_fvi_75[value>=3][value<=5] {
  polygon-opacity:1;
  polygon-fill:#38A800;
}

#cirac_vul_bgri_fvi_75[value>=6][value<=7] {
  polygon-opacity:1;
  polygon-fill:#FFFF00;
}

#cirac_vul_bgri_fvi_75[value>=8][value<=10] {
  polygon-opacity:1;
  polygon-fill:#FF9500;
}

#cirac_vul_bgri_fvi_75[value>=11][value<=12] {
  polygon-opacity:1;
  polygon-fill:#FF0000;
}

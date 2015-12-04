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

@low: #38A800;
@moderate: #FFFF00;
@high: #FF9500;
@very_high: #FF0000;
@border: #434343;


#cirac_vul_bgri_fvi_n {
  
  [value>=3][value<=5] {
    polygon-fill:@low;
  }
  
  [value>=6][value<=7] {
    polygon-fill:@moderate;
  }
  
  [value>=8][value<=10] {
    polygon-fill:@high;
  }

  [value>=11][value<=12] {
    polygon-fill:@very_high;
  }
  
}

/* set borders according to the zoom */

/* no border (because the color of the border is the same as the color of the polygon, 
and we are actually using a border with width 1) */
#cirac_vul_bgri_fvi_n[zoom<=10] {

  line-width: 1.0;
  
  [value>=3][value<=5] {
    line-color: @low;
  }
  
  [value>=6][value<=7] {
    line-color: @moderate;
  }
  
  [value>=8][value<=10] {
    line-color: @high;
  }

  [value>=11][value<=12] {
    line-color: @very_high;
  }
}

#cirac_vul_bgri_fvi_n[zoom>=11] {
  line-color: @border;
  line-width:0.1;
}

#cirac_vul_bgri_fvi_n[zoom>=12] {
  line-color: @border;
  line-width:0.4;
}

#cirac_vul_bgri_fvi_n[zoom>=13] {
  line-color: @border;
  line-width:0.5;
}

#cirac_vul_bgri_fvi_n[zoom>=14] {
  line-color: @border;
  line-width:0.7;
}

#cirac_vul_bgri_fvi_n[zoom>=15] {
  line-color: @border;
  line-width:0.8;
}

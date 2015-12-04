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


#cirac_vul_cp4_sf75 {
  
  [value=1] {
    polygon-fill:@low;
  }
  
  [value=2] {
    polygon-fill:@moderate;
  }
  
  [value=3] {
    polygon-fill:@high;
  }

  [value=4] {
    polygon-fill:@very_high;
  }
  
}

/* set borders according to the zoom */

#cirac_vul_cp4_sf75[zoom>=6] {
  line-color: @border;
  line-width:0.3;
}

#cirac_vul_cp4_sf75[zoom>=10] {
  line-color: @border;
  line-width:0.4;
}

#cirac_vul_cp4_sf75[zoom>=13] {
  line-color: @border;
  line-width:0.5;
}

#cirac_vul_cp4_sf75[zoom>=14] {
  line-color: @border;
  line-width:0.7;
}

#cirac_vul_cp4_sf75[zoom>=15] {
  line-color: @border;
  line-width:0.8;
}

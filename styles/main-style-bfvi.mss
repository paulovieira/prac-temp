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


#cirac_vul_cp4_bfvi {
  
  [value>=1][value<=3] {
    polygon-fill:@low;
    line-color:@low;
  }
  
  [value=4] {
    polygon-fill:@moderate;
    line-color:@moderate;
  }
  
  [value>=5][value<=6] {
    polygon-fill:@high;
    line-color:@high;
  }

  [value>=7][value<=8] {
    polygon-fill:@very_high;
    line-color:@very_high;
  }
  
}

/* set borders according to the zoom */

#cirac_vul_cp4_bfvi [zoom>=8][value>=0] {
  line-color: @border;
  line-width:0.3;
}

#cirac_vul_cp4_bfvi[zoom>=10][value>=0] {
  line-color: @border;
  line-width:0.4;
}

#cirac_vul_cp4_bfvi[zoom>=12][value>=0] {
  line-color: @border;
  line-width:0.5;
}

#cirac_vul_cp4_bfvi[zoom>=14][value>=0] {
  line-color: @border;
  line-width:0.7;
}


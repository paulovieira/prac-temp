#!/bin/bash

# automatic generate mbtiles for a bunch of map projects 

export TILEMILL_FILES_DIR="/home/pvieira/tilemill-files"
export TILEMILL_COMMAND="/home/pvieira/clima-app/tilemill-clima/index.js"

project_name=()

# list all projects: "ls -ltra /home/pvieira/tilemill-files/project/cirac*"
project_name+=("cirac_vul_cp4_bfvi")
project_name+=("cirac_vul_cp4_bfvi75")
project_name+=("cirac_vul_cp4_cfvi_75")
project_name+=("cirac_vul_cp4_cfvi_mode")
project_name+=("cirac_vul_cp4_e")
project_name+=("cirac_vul_cp4_e75")
project_name+=("cirac_vul_cp4_fvi")
project_name+=("cirac_vul_cp4_fvi75")
project_name+=("cirac_vul_cp4_sf")
project_name+=("cirac_vul_cp4_sf75")
project_name+=("cirac_vul_cp4_ssi")
project_name+=("cirac_vul_cp4_ssi75")
project_name+=("cirac_vul_cp4_tf")
project_name+=("cirac_vul_cp4_tf75")

l=${#project_name[@]}

for (( i=0; i < $l; i++ )) do

    eval $(echo $TILEMILL_COMMAND \
        export \
        ${project_name[$i]} \
        $TILEMILL_FILES_DIR/export/${project_name[$i]}.mbtiles \
        --format=mbtiles \
        --minzoom=8 \
        --maxzoom=9 \
        --bbox="-9.5691,36.8928,-6.1194,42.2244" \
        --metatile=1 \
        --scale=1 \
        --files=$TILEMILL_FILES_DIR \
        --verbose=on )

done



#        --bbox=[-9.5691,36.8928,-6.1194,42.2244] \
#       --bbox="-9.5691,36.8928,-6.1194,42.2244" \

# --format=mbtiles \
# --minzoom=7 \
# --maxzoom=11 \
# --metatile=1 \
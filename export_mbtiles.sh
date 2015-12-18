#!/bin/bash

# automatic generate mbtiles for a bunch of map projects 

export TILEMILL_COMMAND="/home/pvieira/clima-app/tilemill-clima/index.js"
export TILEMILL_FILES_DIR="/home/pvieira/tilemill-files"
export OUTPUT_DIR="/home/pvieira/github/cirac/tiles"


project_name=()

# list all projects: "ls -ltra /home/pvieira/tilemill-files/project/cirac*"

# project_name+=("cirac_vul_cp4_bfvi")
# project_name+=("cirac_vul_cp4_bfvi75")
# project_name+=("cirac_vul_cp4_cfvi_75")
# project_name+=("cirac_vul_cp4_cfvi_mode")
# project_name+=("cirac_vul_cp4_e")
# project_name+=("cirac_vul_cp4_e75")
# project_name+=("cirac_vul_cp4_fvi")
# project_name+=("cirac_vul_cp4_fvi75")
# project_name+=("cirac_vul_cp4_sf")
# project_name+=("cirac_vul_cp4_sf75")
# project_name+=("cirac_vul_cp4_ssi")
# project_name+=("cirac_vul_cp4_ssi75")
# project_name+=("cirac_vul_cp4_tf")
# project_name+=("cirac_vul_cp4_tf75")

# project_name+=("cirac_vul_freg_sf")
# project_name+=("cirac_vul_freg_sf75")
# project_name+=("cirac_vul_freg_e75")
# project_name+=("cirac_vul_freg_e")
# project_name+=("cirac_vul_freg_tf75")
# project_name+=("cirac_vul_freg_tf")
# project_name+=("cirac_vul_freg_ssi75")
# project_name+=("cirac_vul_freg_ssi")
# project_name+=("cirac_vul_freg_bfvi75")
# project_name+=("cirac_vul_freg_bfvi")
# project_name+=("cirac_vul_freg_fvi75")
# project_name+=("cirac_vul_freg_fvi")
# project_name+=("cirac_vul_freg_cfvi_75")
# project_name+=("cirac_vul_freg_cfvi_mode")

# project_name+=("cirac_vul_bgri_cfvi")
# project_name+=("cirac_vul_bgri_cfvi75")
# project_name+=("cirac_vul_bgri_bfvi_75")
# project_name+=("cirac_vul_bgri_bfvi_n")
# project_name+=("cirac_vul_bgri_e")
# project_name+=("cirac_vul_bgri_e75")
# project_name+=("cirac_vul_bgri_fvi_75")
# project_name+=("cirac_vul_bgri_fvi_n")
# project_name+=("cirac_vul_bgri_sf")
# project_name+=("cirac_vul_bgri_sf75")
# project_name+=("cirac_vul_bgri_ssi")
# project_name+=("cirac_vul_bgri_ssi75")
# project_name+=("cirac_vul_bgri_tf")
# project_name+=("cirac_vul_bgri_tf75")


project_name+=("cirac_risk_lx_fixed_assets_i_b")
project_name+=("cirac_risk_lx_fixed_assets_i_g")
project_name+=("cirac_risk_lx_fixed_assets_ni_b")
project_name+=("cirac_risk_lx_fixed_assets_ni_g")
project_name+=("cirac_risk_lx_res_inventory_b")
project_name+=("cirac_risk_lx_res_inventory_g")
project_name+=("cirac_risk_lx_stocks_b")
project_name+=("cirac_risk_lx_stocks_g")
project_name+=("cirac_risk_lx_structure")
project_name+=("cirac_risk_lx_t100")
project_name+=("cirac_risk_lx_t500")
project_name+=("cirac_risk_lx_t50")

l=${#project_name[@]}

for (( i=0; i < $l; i++ )) do

    eval $(echo $TILEMILL_COMMAND \
        export \
        ${project_name[$i]} \
        $OUTPUT_DIR/${project_name[$i]}.mbtiles \
        --format=mbtiles \
        --minzoom=6 \
        --maxzoom=16 \
        --bbox="-9.5691,36.8928,-6.1194,42.2244" \
        --metatile=1 \
        --scale=1 \
        --files=$TILEMILL_FILES_DIR \
        --verbose=on )

done


# vulnerability maps, zoom 17 - 19, for lisbon/alges only
# center=...
# bbox="-9.2865,38.6819,-9.0871,38.7598")

# for (( i=0; i < $l; i++ )) do

#     eval $(echo $TILEMILL_COMMAND \
#         export \
#         ${project_name[$i]} \
#         $OUTPUT_DIR/${project_name[$i]}_lisbon_alges_z17_z19.mbtiles \
#         --format=mbtiles \
#         --minzoom=17 \
#         --maxzoom=19 \
#         --bbox="-9.2865,38.6819,-9.0871,38.7598" \
#         --metatile=1 \
#         --scale=1 \
#         --files=$TILEMILL_FILES_DIR \
#         --verbose=on )

# done



# vulnerability maps, zoom 17 - 19, for coimbra only
# center=...
# bbox="-8.473,40.1627,-8.3499,40.2393"


# vulnerability maps, zoom 17 - 19, for porto only
# center=-8.63,41.1447,13
# bbox="-8.7847,41.0575,-8.5073,41.2121"



# risk maps for 
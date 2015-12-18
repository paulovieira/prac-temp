// menu definition

Cirac.mapsMenu = [
    {
        groupName: "Mapas base",
        maps: [{
                mapId: "mapquest",
                radio: true,
                inputName: "base-layers"
            }, {
                mapId: "esri-world-imagery",
                radio: true,
                inputName: "base-layers"
            }, {
                mapId: "esri-world-shaded-relief",
                radio: true,
                inputName: "base-layers"
            }, {
                mapId: "esri-world-gray-canvas",
                radio: true,
                inputName: "base-layers"
            }, 
            // {
            //     mapId: "mapquest-places",
            //     radio: false
            // },
            {
                mapId: "hydda-roads",
                radio: false
            }
        ]
    },

    {
    "groupName": "Índice Básico de Vulnerabilidade a Inundação",
    "maps": [
        {
            mapId: "cirac_vul_cp4_bfvi75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_cp4_bfvi",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_bfvi75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_bfvi",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_bfvi_75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_bfvi_n",
            radio: true,
            inputName: "cirac-layers"
        },
        ]
    },

    {
    "groupName": "Índice de Vulnerabilidade a Inundação",
    "maps": [
        {
            mapId: "cirac_vul_cp4_fvi75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_cp4_fvi",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_fvi75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_fvi",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_fvi_75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_fvi_n",
            radio: true,
            inputName: "cirac-layers"
        },
        ]
    },

    {
    "groupName": "Índice Combinado de Vulnerabilidade a Inundação",
    "maps": [
        {
            mapId: "cirac_vul_cp4_cfvi_75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_cp4_cfvi_mode",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_cfvi_75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_cfvi_mode",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_cfvi75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_cfvi",
            radio: true,
            inputName: "cirac-layers"
        },
        ]
    },

    {
    "groupName": "Exposição",
    "maps": [
        {
            mapId: "cirac_vul_cp4_e75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_cp4_e",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_e75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_e",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_e75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_e",
            radio: true,
            inputName: "cirac-layers"
        },
        ]
    },

    {
    "groupName": "Suscetibilidade Física",
    "maps": [
        {
            mapId: "cirac_vul_cp4_sf75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_cp4_sf",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_sf75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_sf",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_sf75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_sf",
            radio: true,
            inputName: "cirac-layers"
        },
        ]
    },

    {
    "groupName": "Suscetibilidade Social",
    "maps": [
        {
            mapId: "cirac_vul_cp4_ssi75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_cp4_ssi",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_ssi75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_ssi",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_ssi75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_ssi",
            radio: true,
            inputName: "cirac-layers"
        },
        ]
    },

    {
    "groupName": "Precipitação",
    "maps": [
        {
            mapId: "cirac_vul_cp4_tf75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_cp4_tf",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_tf75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_freg_tf",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_tf75",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac_vul_bgri_tf",
            radio: true,
            inputName: "cirac-layers"
        },
        ]
    },

    // maps for the case study
    {
    "groupName": "Análise de risco: Lisboa / Algés",
    "maps": [
        ]
    },

    {
    "groupName": "Análise de risco: Coimbra",
    "maps": [
        ]
    },

    {
    "groupName": "Análise de risco: Porto / Gaia",
    "maps": [




/*
        {
            mapId: "cirac_vul_bgri_tf75_lisbon_alges_z17_z19",
            radio: true,
            inputName: "cirac-layers"
        },
        {
            mapId: "cirac-risk-lx-t500",
            radio: true,
            inputName: "cirac-layers"
        },
*/
    ]
    }
];





Cirac.namesMapping = {
    "cirac_vul_cp4_sf75": "por código postal (percentil 75)",
    "cirac_vul_cp4_sf": "por código postal (moda)",
    "cirac_vul_cp4_e75": "por código postal (percentil 75)",
    "cirac_vul_cp4_e": "por código postal (moda)",
    "cirac_vul_cp4_tf75": "por código postal (percentil 75)",
    "cirac_vul_cp4_tf": "por código postal (moda)",
    "cirac_vul_cp4_ssi75": "por código postal (percentil 75)",
    "cirac_vul_cp4_ssi": "por código postal (moda)",
    "cirac_vul_cp4_bfvi75": "por código postal (percentil 75)",
    "cirac_vul_cp4_bfvi": "por código postal (moda)",
    "cirac_vul_cp4_fvi75": "por código postal (percentil 75)",
    "cirac_vul_cp4_fvi": "por código postal (moda)",
    "cirac_vul_cp4_cfvi_75": "por código postal (percentil 75)",
    "cirac_vul_cp4_cfvi_mode": "por código postal (moda)",

    "cirac_vul_freg_sf75": "por freguesia (percentil 75)",
    "cirac_vul_freg_sf": "por freguesia (moda)",
    "cirac_vul_freg_e75": "por freguesia (percentil 75)",
    "cirac_vul_freg_e": "por freguesia (moda)",
    "cirac_vul_freg_tf75": "por freguesia (percentil 75)",
    "cirac_vul_freg_tf": "por freguesia (moda)",
    "cirac_vul_freg_ssi75": "por freguesia (percentil 75)",
    "cirac_vul_freg_ssi": "por freguesia (moda)",
    "cirac_vul_freg_bfvi75": "por freguesia (percentil 75)",
    "cirac_vul_freg_bfvi": "por freguesia (moda)",
    "cirac_vul_freg_fvi75": "por freguesia (percentil 75)",
    "cirac_vul_freg_fvi": "por freguesia (moda)",
    "cirac_vul_freg_cfvi_75": "por freguesia (percentil 75)",
    "cirac_vul_freg_cfvi_mode": "por freguesia (moda)",

    "cirac_vul_bgri_sf75": "por BGRI (percentil 75)",
    "cirac_vul_bgri_sf": "por BGRI (moda)",
    "cirac_vul_bgri_e75": "por BGRI (percentil 75)",
    "cirac_vul_bgri_e": "por BGRI (moda)",
    "cirac_vul_bgri_tf75": "por BGRI (percentil 75)",
    "cirac_vul_bgri_tf": "por BGRI (moda)",
    "cirac_vul_bgri_ssi75": "por BGRI (percentil 75)",
    "cirac_vul_bgri_ssi": "por BGRI (moda)",
    "cirac_vul_bgri_bfvi_75": "por BGRI (percentil 75)",
    "cirac_vul_bgri_bfvi_n": "por BGRI (moda)",
    "cirac_vul_bgri_fvi_75": "por BGRI (percentil 75)",
    "cirac_vul_bgri_fvi_n": "por BGRI (moda)",
    "cirac_vul_bgri_cfvi75": "por BGRI (percentil 75)",
    "cirac_vul_bgri_cfvi": "por BGRI (moda)",
};

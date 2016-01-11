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
            }, 
            // {
            //     mapId: "esri-world-gray-canvas",
            //     radio: true,
            //     inputName: "base-layers"
            // }, 
            // {
            //     mapId: "mapquest-places",
            //     radio: false
            // },
        ]
    },

    {
    "groupName": "Precipitação Média Anual",
    "maps": [
        {
            mapId: "pma-santamaria",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "pma-saomiguel",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "pma-terceira",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "pma-faial",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "pma-pico",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "pma-saojorge",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "pma-graciosa",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "pma-flores",
            radio: false,
            inputName: "acores"
        },
        ]
    },
    
    {
    "groupName": "Carta de Ocupação do Solo",
    "maps": [
        {
            mapId: "ocup-solo-santamaria",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "ocup-solo-saomiguel",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "ocup-solo-terceira",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "ocup-solo-faial",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "ocup-solo-pico",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "ocup-solo-saojorge",
            radio: false,
            inputName: "acores"
        },
        // {
        //     mapId: "ocup-solo-graciosa",
        //     radio: false,
        //     inputName: "acores"
        // },
        {
            mapId: "ocup-solo-flores",
            radio: false,
            inputName: "acores"
        },
        {
            mapId: "ocup-solo-corvo",
            radio: false,
            inputName: "acores"
        },
        ]
    },

];





Cirac.namesMapping = {

    "cirac_vul_cp4_sf75": {
        name: "por código postal (percentil 75)",
        group: "Suscetibilidade Física"
    },
    "cirac_vul_cp4_sf": {
        name: "por código postal (moda)",
        group: "Suscetibilidade Física"
    },
    "cirac_vul_cp4_e75": {
        name: "por código postal (percentil 75)",
        group: "Exposição"
    },
    "cirac_vul_cp4_e": {
        name: "por código postal (moda)",
        group: "Exposição"
    },
    "cirac_vul_cp4_tf75": {
        name: "por código postal (percentil 75)",
        group: "Precipitação"
    },
    "cirac_vul_cp4_tf": {
        name: "por código postal (moda)",
        group: "Precipitação"
    },
    "cirac_vul_cp4_ssi75": {
        name: "por código postal (percentil 75)",
        group: "Suscetibilidade Social"
    },
    "cirac_vul_cp4_ssi": {
        name: "por código postal (moda)",
        group: "Suscetibilidade Social"
    },
    "cirac_vul_cp4_bfvi75": {
        name: "por código postal (percentil 75)",
        group: "Índice Básico de Vulnerabilidade a Inundação"
    },
    "cirac_vul_cp4_bfvi": {
        name: "por código postal (moda)",
        group: "Índice Básico de Vulnerabilidade a Inundação"
    },
    "cirac_vul_cp4_fvi75": {
        name: "por código postal (percentil 75)",
        group: "Índice de Vulnerabilidade a Inundação"
    },
    "cirac_vul_cp4_fvi": {
        name: "por código postal (moda)",
        group: "Índice de Vulnerabilidade a Inundação"
    },
    "cirac_vul_cp4_cfvi_75": {
        name: "por código postal (percentil 75)",
        group: "Índice Combinado de Vulnerabilidade a Inundação"
    },
    "cirac_vul_cp4_cfvi_mode": {
        name: "por código postal (moda)",
        group: "Índice Combinado de Vulnerabilidade a Inundação"
    },



    "cirac_vul_freg_sf75": {
        name: "por freguesia (percentil 75)",
        group: "Suscetibilidade Física"
    },
    "cirac_vul_freg_sf": {
        name: "por freguesia (moda)",
        group: "Suscetibilidade Física"
    },
    "cirac_vul_freg_e75": {
        name: "por freguesia (percentil 75)",
        group: "Exposição"
    },
    "cirac_vul_freg_e": {
        name: "por freguesia (moda)",
        group: "Exposição"
    },
    "cirac_vul_freg_tf75": {
        name: "por freguesia (percentil 75)",
        group: "Precipitação"
    },
    "cirac_vul_freg_tf": {
        name: "por freguesia (moda)",
        group: "Precipitação"
    },
    "cirac_vul_freg_ssi75": {
        name: "por freguesia (percentil 75)",
        group: "Suscetibilidade Social"
    },
    "cirac_vul_freg_ssi": {
        name: "por freguesia (moda)",
        group: "Suscetibilidade Social"
    },
    "cirac_vul_freg_bfvi75": {
        name: "por freguesia (percentil 75)",
        group: "Índice Básico de Vulnerabilidade a Inundação"
    },
    "cirac_vul_freg_bfvi": {
        name: "por freguesia (moda)",
        group: "Índice Básico de Vulnerabilidade a Inundação"
    },
    "cirac_vul_freg_fvi75": {
        name: "por freguesia (percentil 75)",
        group: "Índice de Vulnerabilidade a Inundação"
    },
    "cirac_vul_freg_fvi": {
        name: "por freguesia (moda)",
        group: "Índice de Vulnerabilidade a Inundação"
    },
    "cirac_vul_freg_cfvi_75": {
        name: "por freguesia (percentil 75)",
        group: "Índice Combinado de Vulnerabilidade a Inundação"
    },
    "cirac_vul_freg_cfvi_mode": {
        name: "por freguesia (moda)",
        group: "Índice Combinado de Vulnerabilidade a Inundação"
    },




    "cirac_vul_bgri_sf75": {
        name: "por BGRI (percentil 75)",
        group: "Suscetibilidade Física"
    },
    "cirac_vul_bgri_sf": {
        name: "por BGRI (moda)",
        group: "Suscetibilidade Física"
    },
    "cirac_vul_bgri_e75": {
        name: "por BGRI (percentil 75)",
        group: "Exposição"
    },
    "cirac_vul_bgri_e": {
        name: "por BGRI (moda)",
        group: "Exposição"
    },
    "cirac_vul_bgri_tf75": {
        name: "por BGRI (percentil 75)",
        group: "Precipitação"
    },
    "cirac_vul_bgri_tf": {
        name: "por BGRI (moda)",
        group: "Precipitação"
    },
    "cirac_vul_bgri_ssi75": {
        name: "por BGRI (percentil 75)",
        group: "Suscetibilidade Social"
    },
    "cirac_vul_bgri_ssi": {
        name: "por BGRI (moda)",
        group: "Suscetibilidade Social"
    },
    "cirac_vul_bgri_bfvi_75": {
        name: "por BGRI (percentil 75)",
        group: "Índice Básico de Vulnerabilidade a Inundação"
    },
    "cirac_vul_bgri_bfvi_n": {
        name: "por BGRI (moda)",
        group: "Índice Básico de Vulnerabilidade a Inundação"
    },
    "cirac_vul_bgri_fvi_75": {
        name: "por BGRI (percentil 75)",
        group: "Índice de Vulnerabilidade a Inundação"
    },
    "cirac_vul_bgri_fvi_n": {
        name: "por BGRI (moda)",
        group: "Índice de Vulnerabilidade a Inundação"
    },
    "cirac_vul_bgri_cfvi75": {
        name: "por BGRI (percentil 75)",
        group: "Índice Combinado de Vulnerabilidade a Inundação"
    },
    "cirac_vul_bgri_cfvi": {
        name: "por BGRI (moda)",
        group: "Índice Combinado de Vulnerabilidade a Inundação"
    },



    "cirac_risk_lx_fixed_assets_i_b": {
        name: "Activos Fixos Industriais (cave)",
        group: "Risco"
    },
    "cirac_risk_lx_fixed_assets_i_g": {
        name: "Activos Fixos Industriais (rés-do-chão)",
        group: "Risco"
    },
    "cirac_risk_lx_fixed_assets_ni_b": {
        name: "Activos Fixos Não Industriais (cave)",
        group: "Risco"
    },
    "cirac_risk_lx_fixed_assets_ni_g": {
        name: "Activos Fixos Não Industriais (rés-do-chão)",
        group: "Risco"
    },
    "cirac_risk_lx_res_inventory_b": {
        name: "Conteúdo Residencial (cave)",
        group: "Risco"
    },
    "cirac_risk_lx_res_inventory_g": {
        name: "Conteúdo Residencial (rés-do-chão)",
        group: "Risco"
    },
    "cirac_risk_lx_stocks_b": {
        name: "Stocks (cave)",
        group: "Risco"
    },
    "cirac_risk_lx_stocks_g": {
        name: "Stocks (rés-do-chão)",
        group: "Risco"
    },
    "cirac_risk_lx_structure": {
        name: "Estrutura",
        group: "Risco"
    },



    "cirac_risk_lx_t50": {
        name: "Período de retorno: 50 anos",
        group: "Inundação"
    },
    "cirac_risk_lx_t100": {
        name: "Período de retorno: 100 anos",
        group: "Inundação"
    },
    "cirac_risk_lx_t500": {
        name: "Período de retorno: 500 anos",
        group: "Inundação"
    },
};







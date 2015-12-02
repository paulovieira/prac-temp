
1) execute shp2pgsql
shp2pgsql -D -I -s 4326                 "/path/to/shape_file.shp" geo.shape_file | psql --dbname=150608

NOTE: the table name (in the "geo" schema) should be in lower case


2) create row in the shapes table

select * from shapes_create('{"srid":4326,"description":{"en":""},"schema_name":"geo","table_name":"shape_file","file_id":2145,"owner_id":1}')


3) style + legend + interactivity


4) export to mbtiles: 8-15 (or only 8-9 to begin)


5) copy-paste the .mml file from the project 


5a) re-use the following (use a simple script to read/write)

    bounds
    center
    minzoom
    maxzoom
    name
    description
    legend

5b) add these:
    id (same as the file name)
    isCirac: true,
    tiles (same as the file name)
    grids (same as the file name)
    template (copy from template_teaser.template_teaser)


    
--
priority:
---

Combined Flood Vulnerability Index by Parish (Mode)
Combined Flood Vulnerability Index by Parish (75 percentile)
Combined Flood Vulnerability Index by Zip Code (Mode)
Combined Flood Vulnerability Index by Zip Code (75 percentile)

1, #38A800, "Baixa Suscetibilidade Física, Exposição e Precipitação"
2, #66BF00, "Baixa Suscetibilidade Física e Precipitação, Exposição elevada"
3, #9BD900, "Baixa Suscetibilidade Física e Exposição e elevada Precipitação"
4, #DEF200, "Baixa Suscetibilidade Física e elevada Exposição e Precipitação"
5, #FFDD00, "Elevada Suscetibilidade Física e baixa Exposição e Precipitação"
6, #FF9100, "Elevada Suscetibilidade Física e Exposição e baixa Precipitação"
7, #FF4800, "Elevada Suscetibilidade Física e Precipitação e baixa Exposição"
8, #FF0000, "Elevada Suscetibilidade Física, Exposição e Precipitação"

---

Physical Susceptibility Index (Parish)
Physical Susceptibility Index p75 (Parish)
Physical Susceptibility Index (zip code)
Physical Susceptibility Index p75 (zip code)

"low", #38A800, "baixo"
"moderate", #FFFF00, "moderado"
"high", #FF9500, "elevado"
"very high", #FF0000, "muito elevado"


---

Precipitation Index (Parish)
Precipitation Index p75 (Parish)
Precipitation Index (zip code)
Precipitation Index p75 (zip code)

"low", #38A800, "baixo, 380-730 mm/ano"
"moderate", #FFFF00, "moderado, 730-930 mm/ano"
"high", #FF9500, "elevado, 930-1270 mm/ano"
"very high", #FF0000, "muito elevado, 1270-3500 mm/ano"

---

Social Susceptibility Index (Parish)
Social Susceptibility Index p75 (Parish)
Social Susceptibility Index (zip code)
Social Susceptibility Index p75 (zip code)

"low", #38A800, "baixo"
"moderate", #FFFF00, "moderado"
"high", #FF9500, "elevado"
"very high", #FF0000, "muito elevado"

---

Exposure (Parish)
Exposure (zip code)
Exposure P75 (Parish)
Exposure P75 (zip code)

"low", #38A800, "baixo"
"moderate", #FFFF00, "moderado"
"high", #FF9500, "elevado"
"very high", #FF0000, "muito elevado"

---

Basic Flood Vulnerability Index (Parish)
Basic Flood Vulnerability Index P75 (Parish)
Basic Flood Vulnerability Index (zip code)
Basic Flood Vulnerability Index P75 (zip code)

1-3, #38A800, "baixo"
4, #FFFF00, "moderado"
5-6, #FF9500, "elevado"
7-8, #FF0000, "muito elevado"

---

Flood Vulnerability Index (Parish)
Flood Vulnerability Index P75 (Parish)
Flood Vulnerability Index (zip code)
Flood Vulnerability Index p75 (zip code)

3-5, #38A800, "baixo"
6-7, #FFFF00, "moderado"
8-10, #FF9500, "elevado"
11-12, #FF0000, "muito elevado"


    

--

shp2pgsql -D -I -s 4326      "/home/pvieira/cirac/SERVIDOR/CIRAC/outputs/mapas/vulnerabilidade/Indice-Vulnerabilidade/Map-SHP/BGRI/Indice-de-vulnerabilidade/cirac_vul_bgri_FVI_N.shp" geo.cirac_vul_bgri_fvi_n | psql --dbname=150608

select * from shapes_create('{"srid":4326,"description":{"en":""},"schema_name":"geo","table_name":"cirac_vul_bgri_fvi_n","file_id":1,"owner_id":1}')

--


shp2pgsql -D -I -s 4326  \
"/home/pvieira/cirac/SERVIDOR/CIRAC/outputs/mapas/vulnerabilidade/Indice-Vulnerabilidade/Map-SHP/BGRI/Indice-de-vulnerabilidade/Percentile-75/cirac_vul_bgri_FVI_75.shp" geo.cirac_vul_bgri_fvi_75 | psql --dbname=150608

select * from shapes_create('{"srid":4326,"description":{"en":""},"schema_name":"geo","table_name":"cirac_vul_bgri_fvi_75","file_id":1,"owner_id":1}')

--





Quando se selecciona um layer do cirac, já nao é possível voltar a nao ver esse layer
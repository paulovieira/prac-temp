
151204
 - (update the shapes_create script)
 - (for CP4) 
    - create the legends and interaction
    - run tilemill on the cp4 maps
    - check that maps can be seen well
    - verify the maps against the current verision in the cirac website

 - repeat for freguesias and bgri (step 3 + the above steps)



7 groups

        Índices de Vulnerabilidade a Inundações

        Basic Flood Vulnerability Index
        Flood Vulnerability Index
        Combined Flood Vulnerability

        ---

        Componentes

        Social Susceptibility Index
        Physical Susceptibility Index
        Exposure Index
        Precipitation Index
        
- 7 groups
- p75/moda
- 3 escalas espaciais: código postal/freguesa/bgri

7 x 2 x 3 = 42 mapas


a) código postal, p75


b) código postal, mode

c) freguesia, p75
d) freguesia, mode

d) bgri, p75
e) bgri, mode




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



    

--

shp2pgsql -D -I -s 4326      "/home/pvieira/cirac/SERVIDOR/CIRAC/outputs/mapas/vulnerabilidade/Indice-Vulnerabilidade/Map-SHP/BGRI/Indice-de-vulnerabilidade/cirac_vul_bgri_FVI_N.shp" geo.cirac_vul_bgri_fvi_n | psql --dbname=150608

select * from shapes_create('{"srid":4326,"description":{"en":""},"schema_name":"geo","table_name":"cirac_vul_bgri_fvi_n","file_id":1,"owner_id":1}')

--


shp2pgsql -D -I -s 4326  \
"/home/pvieira/cirac/SERVIDOR/CIRAC/outputs/mapas/vulnerabilidade/Indice-Vulnerabilidade/Map-SHP/BGRI/Indice-de-vulnerabilidade/Percentile-75/cirac_vul_bgri_FVI_75.shp" geo.cirac_vul_bgri_fvi_75 | psql --dbname=150608

select * from shapes_create('{"srid":4326,"description":{"en":""},"schema_name":"geo","table_name":"cirac_vul_bgri_fvi_75","file_id":1,"owner_id":1}')

--





- Quando se selecciona um layer do cirac, já nao é possível voltar a nao ver esse layer

- pr para o plugin geocoding com http://dev.virtual ... em vez de //dev.virtual...




-- RISK

50 year flood
100 year flood
500 year flood
Annual Damage - Industrial fixed assets - Basement (Permillage)
Annual Damage - Industrial fixed assets - Ground floor (Permillage)
Annual Damage - No industrial fixed assets - Basement (Permillage)
Annual Damage - No industrial fixed assets - Ground floor (Permillage)
Annual Damage - Residential Inventory - Basement (Permillage)
Annual Damage - Residential Inventory - Ground floor (Permillage)
Annual Damage - Stocks - Basement (Permillage)
Annual Damage - Stocks - Ground floor (Permillage)
Annual Damage - Structure (Permillage)




LISBON
center: -9.1393,38.7238,13
bounds: -9.1674,38.6997,-9.1168,38.7522





Suscetibilidade Física por BGRI (percentil 75)
Suscetibilidade Física por BGRI (moda)

Suscetibilidade Social por BGRI (percentil 75)
Suscetibilidade Social por BGRI (moda)

Exposição por BGRI (percentil 75)
Exposição por BGRI (moda)

Precipitação por BGRI (percentil 75)
Precipitação por BGRI (moda)

Índice Básico de Vulnerabilidade a Inundação por BGRI (percentil 75)
Índice Básico de Vulnerabilidade a Inundação por BGRI (moda)

Índice de Vulnerabilidade a Inundação por BGRI (percentil 75)
Índice de Vulnerabilidade a Inundação por BGRI (moda)

Índice Combinado de Vulnerabilidade a Inundação por BGRI (percentil 75)
Índice Combinado de Vulnerabilidade a Inundação por BGRI (moda)




Suscetibilidade Física
---

A suscetibilidade a inundações deve ser visto como a propensão de uma área a ser afectada pelas cheias e é atribuída pelas características intrínsecas do território tais como declives, geologia, rede fluvial e uso do solo. A Suscetibilidade Física a inundações deriva principalmente de características inerentes a uma bacia específica.<br><br>

As variáveis e respetivos conjuntos de dados foram baseados em três critérios:
<ol style="list-style-type: lower-alpha">
<li>capacidade de incorporar a influência de parâmetros em ambas as inundações progressivas e rápidas;</li>
<li>minimização do número de variáveis para contribuir para a transparência de índice</li>
 <li>homogeneidade dos dados (por exemplo, origem, resolução espacial) em todo o território Português.</li>
 </ol>

Três variáveis foram escolhidas:
<ol style="list-style-type: lower-roman">
<li>a acumulação de fluxo</li>
<li>uma matriz de custo de distâncias</li>
<li>o número de fluxo</li>
</ol>
 
Os dois primeiros descrevem o potencial de acumulação de água no leito do rio e áreas adjacentes, enquanto o último avalia a permeabilidade do solo com base no uso do solo e da geologia.<br><br>

Com base nos dados históricos espaciais de inundação o Índice de Suscetibilidade Física (PSI) foi reclassificado em quatro classes distintas para distinguir entre áreas potenciais para acumulação de água mais elevada, como margens de rios e áreas adjacentes, e áreas menos suscetíveis a inundações, como topos das montanhas.<br><br>

O mapa final de suscetibilidade física identifica como altamente suscetíveis as bacias dos principais rios portugueses (Tejo, Douro, Vouga, Mondego e Sado), em especial as áreas mais próximas à foz do rio. Algumas grandes cidades como Lisboa, Coimbra, Aveiro, Setúbal, Faro e Porto e algumas pequenas bacias na parte sul de Portugal (Algarve) também estão identificados como altamente suscetíveis a inundações (classes 3 e 4). <br><br>

Isso mostra a sensibilidade do índice para identificar também áreas propensas a enchentes, caracterizadas por superfícies artificiais altamente impermeabilizadas situadas em regiões planas nas proximidades de cursos de água relevantes. <br><br>

A região do Alentejo é também classificada como altamente suscetível (classe 3), devido às suas características topográficas e geológicas, uma vez que a maior parte do território é plano, com uma densidade de rede hidrográfica alta e solos rochosos impermeáveis (xisto e mármore) ou argilosos. Neste último caso, estes valores de elevada suscetibilidade física podem não ser totalmente traduzidos para uma frequência elevada de inundações, visto que esta região é caracterizada por regimes baixos de precipitação na maior parte do ano.



Suscetibilidade Social
---

A suscetibilidade social a inundações é definida como a predisposição da sociedade para ser afetada, resistir, adaptar-se ou recuperar quando expostos a uma inundação. <br><br>

O Índice de Suscetibilidade Social (SSI) foi desenvolvido com base num conjunto de cerca de 50 variáveis retiradas do censo Português para descrever as características funcionais e sócio-económicas atuais que determinam a capacidade de uma população para lidar com inundações, tais como, idade, escolaridade, rendimento, função do prédio e tipologia e meio urbano / rural. <br><br>

A partir desse conjunto de dados original, um subconjunto menor de 14 indicadores foi selecionado e agregado de acordo com a sua relevância para caracterizar os três componentes principais de vulnerabilidade social a inundações: 
<ol style="list-style-type: lower-alpha">
<li>as condições regionais</li>
<li>idade</li>
<li>condições de exclusão social</li>
</ol>

O componente de suscetibilidade social do FVI demonstra uma capacidade maior de lidar com as inundações em áreas costeiras, principalmente associados às áreas mais urbanizadas com educação e rendimentos mais elevados. <br><br>

Valores de suscetibilidade sociais mais elevados estão localizados em regiões mais do interior, com foco nas regiões Norte e Centro e parte do Norte e Sul do Alentejo. Como esperado, as áreas metropolitanas de Lisboa e Porto têm os valores mais baixos de SSI, principalmente devido ao seu mais elevado rendimento per capita, educação e menor desemprego.



Exposição
--

Exposição (E) é representada pela densidade de edifícios no território Português derivada dos dados recolhidos no censo nacional, em 2001, pelo Instituto Nacional de Estatística (INE). Cada unidade estatística espacial, que se assemelha a um quarteirão em áreas urbanas, tem o nome de "Base Geográfica de Referenciação de Informações" (BGRI).<br><br>

O componente de Exposição destaca as regiões urbanas e peri-urbanas entre Viana do Castelo e Setúbal, com maior incidência nas áreas metropolitanas de Lisboa e Porto. Reflete duas realidades diferentes de morfologia urbana, com valores de exposição superiores na região do litoral norte, que estão relacionadas com a expansão urbana nos arredores de grandes cidades como Porto, Aveiro, Braga e Viana do Castelo, enquanto que na área metropolitana de Lisboa estão associados a uma ocupação mais compacta e densa.




Precipitação
--

Portugal é geralmente caracterizado pelo clima mediterrâneo, mas com a influência Atlântica devido à sua posição geográfica.<br><br>

No litoral norte predomina o clima temperado mediterrânico com influência atlântica e maiores volumes de precipitação, enquanto que a região Nordeste é dominada pelo clima mediterrânico com influência continental e, consequentemente, com menos precipitação anual. No Sul de Portugal as características do clima mediterrânico temperado são mais pronunciados atingindo até três vezes menos precipitação anual do que no litoral norte.<br><br> 

A ligação entre as inundações e a precipitação depende do tipo de inundação (rápida ou inundação progressiva), as características da bacia, a saturação do solo e nas zonas costeiras da altura da maré. A combinação destas características determina que, para a mesma quantidade de chuva é possível ter uma inundação ou não. As principais dificuldades neste trabalho para estabelecer a ligação entre precipitação e inundações foi que, numa abordagem geral e qualitativa, é muito difícil colocar todas essas dependências num índice, uma vez que não são estáticas no tempo.<br><br>

A precipitação como um componente do Índice de Vulnerabilidade de Inundação
teve como objetivo fornecer informações adicionais sobre a distribuição geográfica da normal de precipitação (ver "normais climatológicas" no glossário), sendo que as regiões com maior pluviosidade anual têm mais probabilidade de reunir todos os elementos necessários para ter inundações. <br><br>

Este índice representa a média da precipitação total anual entre 1961 e 1990 dividido em quatro classes que refletem as influências atlânticas e continentais do clima mediterrânico temperado e os efeitos da topografia na precipitação.



Índice Básico de Vulnerabilidade a Inundação
--

<div style="font-size: 110%; font-weight: bold;">Índice Básico de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição</div><br>

<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias, devido à sua localização.<br><br>

<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Público em geral; Proteção civil;





Índice de Vulnerabilidade a Inundação
--

<div style="font-size: 110%; font-weight: bold;">Índice de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição + Suscetibilidade Social</div><br>

<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias e à capacidade da população de lidar com isso.<br><br>

<b>Aplicação alvo / interessados:</b> Administração local e nacional pública; Proteção civil;




Índice Combinado de Vulnerabilidade a Inundação
--


<div style="font-size: 110%; font-weight: bold;">Índice Combinado de Vulnerabilidade a Inundação = Suscetibilidade Física &cap; Exposição &cap; Precipitação</div><br>

<b>Características do índice:</b> Intersecção das características de suscetibilidade física, exposição e precipitação num índice combinado. Com esta abordagem combinada é possível ponderar a contribuição de cada componente de vulnerabilidade.<br><br>

<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Companhias de seguros;


mapas com values invalidos (0)

cirac_vul_freg_sf75
cirac_vul_freg_e75
cirac_vul_freg_tf75
cirac_vul_freg_ssi75
cirac_vul_freg_ssi
cirac_vul_freg_bfvi75
cirac_vul_freg_fvi75
cirac_vul_freg_cfvi_75
    cirac_vul_bgri_e75
    cirac_vul_bgri_tf75
cirac_vul_bgri_ssi75
cirac_vul_bgri_cfvi

  [value<=0][value>=5] {
    polygon-fill:white;
    line-color: white;
  }
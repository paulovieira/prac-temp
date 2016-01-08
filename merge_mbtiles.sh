cp tiles/cirac_risk_*lisbon_alges.mbtiles ./tiles/backup/
cp tiles/cirac_risk_*coimbra.mbtiles ./tiles/backup/
cp tiles/cirac_risk_*porto.mbtiles ./tiles/backup/

cd ./tiles/backup


echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_risk_lx_fixed_assets_i_g_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_risk_lx_fixed_assets_i_g_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_risk_lx_fixed_assets_i_g_lisbon_alges.mbtiles

cp cirac_risk_lx_fixed_assets_i_g_lisbon_alges.mbtiles ../cirac_risk_lx_fixed_assets_i_g.mbtiles





echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_risk_lx_fixed_assets_i_b_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_risk_lx_fixed_assets_i_b_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_risk_lx_fixed_assets_i_b_lisbon_alges.mbtiles

cp cirac_risk_lx_fixed_assets_i_b_lisbon_alges.mbtiles ../cirac_risk_lx_fixed_assets_i_b.mbtiles




echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_risk_lx_fixed_assets_ni_g_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_risk_lx_fixed_assets_ni_g_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_risk_lx_fixed_assets_ni_g_lisbon_alges.mbtiles

cp cirac_risk_lx_fixed_assets_ni_g_lisbon_alges.mbtiles ../cirac_risk_lx_fixed_assets_ni_g.mbtiles





echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_risk_lx_fixed_assets_ni_b_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_risk_lx_fixed_assets_ni_b_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_risk_lx_fixed_assets_ni_b_lisbon_alges.mbtiles

cp cirac_risk_lx_fixed_assets_ni_b_lisbon_alges.mbtiles ../cirac_risk_lx_fixed_assets_ni_b.mbtiles







echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_risk_lx_res_inventory_b_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_risk_lx_res_inventory_b_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_risk_lx_res_inventory_b_lisbon_alges.mbtiles

cp cirac_risk_lx_res_inventory_b_lisbon_alges.mbtiles ../cirac_risk_lx_res_inventory_b.mbtiles






echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_risk_lx_res_inventory_g_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_risk_lx_res_inventory_g_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_risk_lx_res_inventory_g_lisbon_alges.mbtiles

cp cirac_risk_lx_res_inventory_g_lisbon_alges.mbtiles ../cirac_risk_lx_res_inventory_g.mbtiles






echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_risk_lx_stocks_b_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_risk_lx_stocks_b_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_risk_lx_stocks_b_lisbon_alges.mbtiles

cp cirac_risk_lx_stocks_b_lisbon_alges.mbtiles ../cirac_risk_lx_stocks_b.mbtiles







echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_risk_lx_stocks_g_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_risk_lx_stocks_g_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_risk_lx_stocks_g_lisbon_alges.mbtiles

cp cirac_risk_lx_stocks_g_lisbon_alges.mbtiles ../cirac_risk_lx_stocks_g.mbtiles





echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_risk_lx_structure_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_risk_lx_structure_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_risk_lx_structure_lisbon_alges.mbtiles

cp cirac_risk_lx_structure_lisbon_alges.mbtiles ../cirac_risk_lx_structure.mbtiles







echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_risk_lx_t100_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_risk_lx_t100_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_risk_lx_t100_lisbon_alges.mbtiles

cp cirac_risk_lx_t100_lisbon_alges.mbtiles ../cirac_risk_lx_t100.mbtiles







echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_risk_lx_t500_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_risk_lx_t500_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_risk_lx_t500_lisbon_alges.mbtiles

cp cirac_risk_lx_t500_lisbon_alges.mbtiles ../cirac_risk_lx_t500.mbtiles







echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_risk_lx_t50_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_risk_lx_t50_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_risk_lx_t50_lisbon_alges.mbtiles

cp cirac_risk_lx_t50_lisbon_alges.mbtiles ../cirac_risk_lx_t50.mbtiles
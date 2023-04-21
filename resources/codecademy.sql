/*POSTGRES USER*/
ALTER DATABASE api OWNER TO codecademy;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO codecademy;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO codecademy;

/*CODECADEMY USER*/
DROP TABLE IF EXISTS "plant" CASCADE;
DROP TABLE IF EXISTS "order" CASCADE;
DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS "order_plant" CASCADE;
DROP TABLE IF EXISTS "cart" CASCADE;
DROP TABLE IF EXISTS "cart_plant" CASCADE;

CREATE TABLE "user" (
  "user_id" SERIAL PRIMARY KEY,
  "name" VARCHAR(50) NOT NULL,
  "email"  VARCHAR(50) UNIQUE NOT NULL,
  "password" VARCHAR(30) NOT NULL,
  "phone" VARCHAR(20) UNIQUE NOT NULL
);

CREATE TABLE "plant" (
  "plant_id" SERIAL PRIMARY KEY,
  "name" VARCHAR(50) UNIQUE NOT NULL,
  "family" VARCHAR(50) NOT NULL,
  "gender" VARCHAR(50) NOT NULL,
  "specie" VARCHAR(50) UNIQUE NOT NULL,
  "price" NUMERIC CHECK ("price" > 0) NOT NULL,
  "stock" NUMERIC CHECK ("stock" > 0) NOT NULL
);

CREATE TABLE "order" (
  "order_id" SERIAL PRIMARY KEY,
  "user_id" INTEGER REFERENCES "user"("user_id") NOT NULL,
  "status" VARCHAR(50) CHECK("status" IN ('pendiente', 'completado', 'cancelado')) NOT NULL
);

CREATE TABLE "cart" (
  "cart_id" SERIAL PRIMARY KEY,
  "user_id" INTEGER REFERENCES "user"("user_id") NOT NULL,
  "status" VARCHAR(50) CHECK("status" IN ('pendiente', 'completado', 'cancelado')) NOT NULL
);

CREATE TABLE "order_plant" (
  "order_plant_id" SERIAL PRIMARY KEY,
  "order_id" INTEGER REFERENCES "order"("order_id") NOT NULL,
  "plant_id" INTEGER REFERENCES "plant"("plant_id") NOT NULL,
  "quantity"  NUMERIC CHECK ("quantity" > 0) NOT NULL
);

CREATE TABLE "cart_plant" (
  "cart_plant_id" SERIAL PRIMARY KEY,
  "cart_id" INTEGER REFERENCES "cart"("cart_id") NOT NULL,
  "plant_id" INTEGER REFERENCES "plant"("plant_id") NOT NULL,
  "quantity"  NUMERIC CHECK ("quantity" > 0) NOT NULL
);

INSERT INTO "plant"(plant_id, name, family, gender, specie, price, stock)
  VALUES ( nextval('plant_plant_id_seq'), 'Orejas de Shrek', 'Crassulaceae', 'Crassúla Ovata Gollum', 'Ovata', 30, 5 );

INSERT INTO "plant"(plant_id, name, family, gender, specie, price, stock)
  VALUES ( nextval('plant_plant_id_seq'), 'Rosario', 'Senecio', 'Asteraceae', 'Senecio Rowleyanus', 40, 4);

INSERT INTO "plant"(plant_id, name, family, gender, specie, price, stock)
  VALUES ( nextval('plant_plant_id_seq'), 'Uña de señorita', 'Crassulaceae', 'Sempervivum', 'Perennes Crassas', 20, 5);

INSERT INTO "plant"(plant_id, name, family, gender, specie, price, stock)
  VALUES ( nextval('plant_plant_id_seq'), 'Echeveria Conchita', 'Crassulaceae', 'Sempervivum', 'Perennes Crassas', 20, 5);
 


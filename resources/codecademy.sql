/*POSTGRES USER*/
ALTER DATABASE api OWNER TO codecademy;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO codecademy;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO codecademy;

/*CODECADEMY USER*/
DROP TABLE IF EXISTS "items" CASCADE;
DROP TABLE IF EXISTS "orders" CASCADE;
DROP TABLE IF EXISTS "users" CASCADE;
DROP TABLE IF EXISTS "orders_items" CASCADE;
DROP TABLE IF EXISTS "carts" CASCADE;
DROP TABLE IF EXISTS "carts_items" CASCADE;

CREATE TABLE "users" (
  "user_id" serial PRIMARY KEY,
  "name" varchar,
  "email" varchar,
  "password" varchar,
  "phone" integer
);

CREATE TABLE "orders" (
  "order_id" serial PRIMARY KEY,
  "status" varchar,
  "total" numeric,
  "user_id" integer
);

CREATE TABLE "items" (
  "item_id" serial PRIMARY KEY,
  "name" varchar,
  "price" numeric,
  "description" varchar
);

CREATE TABLE "orders_items" (
  "order_item_id" serial PRIMARY KEY,
  "order_id" integer,
  "item_id" integer,
  "quantity" integer,
  "price" numeric
);

CREATE TABLE "carts" (
  "cart_id" serial PRIMARY KEY,
  "user_id" integer
);

CREATE TABLE "carts_items" (
  "cart_item" serial PRIMARY KEY,
  "item_id" integer,
  "cart_id" integer
);

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE "orders_items" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("order_id");

ALTER TABLE "orders_items" ADD FOREIGN KEY ("item_id") REFERENCES "item" ("item_id");

ALTER TABLE "carts" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE "carts_items" ADD FOREIGN KEY ("item_id") REFERENCES "item" ("item_id");

ALTER TABLE "carts_items" ADD FOREIGN KEY ("cart_id") REFERENCES "cart" ("cart_id");

INSERT INTO "items"
  VALUES (nextval('items_items_id_seq'),'RAM MEMORY', 2000, 'Awesome');
DROP TABLE "item" CASCADE;
DROP TABLE "order" CASCADE;
DROP TABLE "user" CASCADE;
DROP TABLE "order_item" CASCADE;
DROP TABLE "cart" CASCADE;
DROP TABLE "cart_item" CASCADE;

CREATE TABLE "user" (
  "user_id" serial PRIMARY KEY,
  "name" varchar,
  "email" varchar,
  "password" varchar,
  "phone" integer
);

CREATE TABLE "order" (
  "order_id" serial PRIMARY KEY,
  "status" varchar,
  "total" numeric,
  "user_id" integer
);

CREATE TABLE "item" (
  "item_id" serial PRIMARY KEY,
  "name" varchar,
  "price" numeric,
  "description" varchar
);

CREATE TABLE "order_item" (
  "order_item_id" serial PRIMARY KEY,
  "order_id" integer,
  "item_id" integer,
  "quantity" integer,
  "price" numeric
);

CREATE TABLE "cart" (
  "cart_id" serial PRIMARY KEY,
  "user_id" integer
);

CREATE TABLE "cart_item" (
  "cart_item" serial PRIMARY KEY,
  "item_id" integer,
  "cart_id" integer
);

ALTER TABLE "order" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE "order_item" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("order_id");

ALTER TABLE "order_item" ADD FOREIGN KEY ("item_id") REFERENCES "item" ("item_id");

ALTER TABLE "cart" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE "cart_item" ADD FOREIGN KEY ("item_id") REFERENCES "item" ("item_id");

ALTER TABLE "cart_item" ADD FOREIGN KEY ("cart_id") REFERENCES "cart" ("cart_id");

INSERT INTO "item"
  VALUES (1,'RAM MEMORY', 2000, 'Awesome');
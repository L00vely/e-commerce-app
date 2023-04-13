CREATE TABLE "category" (
  "category_id" integer PRIMARY KEY,
  "description" varchar,
  "code" varchar
);

CREATE TABLE "brand" (
  "brand_id" integer PRIMARY KEY,
  "name" varchar,
  "description" varchar
);

CREATE TABLE "client" (
  "client_id" inter PRIMARY KEY,
  "name" varchar,
  "address" varchar,
  "email" varchar,
  "phone" integer
);

CREATE TABLE "order" (
  "order_id" integer PRIMARY KEY,
  "date" datetime,
  "status" varchar,
  "address" varchar,
  "client_id" integer
);

CREATE TABLE "product" (
  "product_id" integer PRIMARY KEY,
  "name" varchar,
  "available_stock" integer,
  "photo" bytea,
  "category_id" integer,
  "brand_id" integer
);

CREATE TABLE "orders_products" (
  "order_id" integer,
  "product_id" integer,
  "quantity" integer,
  "price" float,
  PRIMARY KEY ("order_id", "product_id")
);

CREATE TABLE "payment" (
  "payment_id" integer PRIMARY KEY,
  "method" varchar,
  "quantity" float,
  "date" datetime,
  "order_id" integer
);

ALTER TABLE "order" ADD FOREIGN KEY ("client_id") REFERENCES "client" ("client_id");

ALTER TABLE "product" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("category_id");

ALTER TABLE "product" ADD FOREIGN KEY ("brand_id") REFERENCES "brand" ("brand_id");

ALTER TABLE "order" ADD FOREIGN KEY ("order_id") REFERENCES "payment" ("order_id");

ALTER TABLE "orders_products" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("order_id");

ALTER TABLE "orders_products" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("product_id");

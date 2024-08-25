-- Connect to PostgreSQL and run these commands:



CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  usage TEXT NOT NULL,
  price NUMERIC NOT NULL,
  image_url TEXT NOT NULL
);

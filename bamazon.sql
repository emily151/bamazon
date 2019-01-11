DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45),
    department_name VARCHAR(45),
    price decimal(4,2),
    stock_quantity INT,
    PRIMARY KEY (id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES
("Mac glossy lip stick", "MakeUp", 2.99, 11),
("Michael Kors purse", "Accessory", 4.89, 15),
("Digital hand keyboard", "Electronics", 10.45, 10),
("Lamp", "Home Decor", 35.99, 50),
("Nail polish", "MakeUp", 6.54, 80),
("res skirt", "Clothing", 1.99, 10),
("Dog house", "Home Decor", 15.98, 20),
("Cat litter", "Pets", 5.09, 15),
("Dog toy", "Pets", 55.99, 90),
("Bird cage", "Pets", 10.55, 10);
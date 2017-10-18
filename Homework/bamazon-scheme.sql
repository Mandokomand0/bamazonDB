DROP DATABASE IF EXISTS bamazondb;

create database bamazondb;

use bamazondb;

create table products(
id int auto_increment not null PRIMARY KEY,
product_name varchar(300) not null,
department_name varchar(300) not null,
price decimal (10,2) not null,
stock_quantity int not null
);

Insert into products (product_name, department_name, price, stock_quantity)
values ("Chocolate", "Food", 3.12, 400);

Insert into products (product_name, department_name, price, stock_quantity)
values ("Perfect Ramen", "Food", 10.00, 400);

Insert into products (product_name, department_name, price, stock_quantity)
values ("NVIDIA GTX 20,000", "Future Technology", 10000000.01, 2);

Insert into products (product_name, department_name, price, stock_quantity)
values ("Personal Super A.I. Personality", "Future Technology", 0.99, 2);

Insert into products (product_name, department_name, price, stock_quantity)
values ("Craven Edge", "Magical Artifacts", 10000.53, 1);

Insert into products (product_name, department_name, price, stock_quantity)
values ("Bag of Holding", "Magical Artifacts", 10.99, 1000);

Insert into products (product_name, department_name, price, stock_quantity)
values ("'Proof' the Earth is Flat", "Conspiracy 'Evidence'", 0.01, 30000);

Insert into products (product_name, department_name, price, stock_quantity)
values ("Oswald's Magic Bullet", "Conspiracy 'Evidence'", 1.00, 1);

Insert into products (product_name, department_name, price, stock_quantity)
values ("Cookies", "Food", 5.30, 30);

Insert into products (product_name, department_name, price, stock_quantity)
values ("Portal Gun", "Future Technology", 999999.91, 4);
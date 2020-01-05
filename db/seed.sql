create table website_users (
    user_id serial primary key,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(100),
    password varchar(254)
);

create table website_products(
    product_id serial primary key,
    name varchar(100),
    price INT,
    sizes varchar(3),
    images text
);

create table website_order(
    order_id serial primary key,
    product_id int references website_products(product_id),
    qty int
);


create table website_cart (
    card_id serial primary key,
    user_id int references website_users(user_id),
    order_id int references website_order(order_id)
);


create table website_shipping (
    shipping_id serial primary key,
    card_id int references website_cart(cart_id),
    address varchar(250),
    shipping_type varchar(50)
); 


create table website_payments (
    payment_id serial primary key,
    user_id int references website_users(user_id),
    card_number varchar(20),
    name_on_card varchar(40),
    exp_date varchar(10),
    security_code int
);
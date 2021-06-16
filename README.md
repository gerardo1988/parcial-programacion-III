# parcial-programacion-III

tablas

sequelize model:generate --name Brands --attributes name:string

sequelize model:generate --name Category --attributes name:string

sequelize model:generate --name size --attributes type:string

sequelize model:generate --name Gender --attributes type:string

sequelize model:generate --name Rol --attributes description:string

sequelize model:generate --name Address --attributes street:string, number:integer

sequelize model:generate --name State --attributes description:string

sequelize model:generate --name Payment --attributes type:string

sequelize model:generate --name User --attributes firts_name:string,last_name:string,username:string,email:string, password:string,addressId:integer

sequelize model:generate --name UserRol --attributes userId:integer,rolId:integer

sequelize model:generate --name Order --attributes number:integer,date:date,total:double,userId:integer,stateId:integer,paymentId:integer

sequelize model:generate --name Shipping --attributes street:string,number:integer,orderId:integer
sequelize model:generate --name Product --attributes name:string,price:double,stock_min:integer,stock_max:integer,brandId:integer,categoryId:intege,sizeId:integer,genderId,integer

sequelize model:generate --name OrderDetail --attributes quantity:double,subtotal:double,productId:integer
sequelize model:generate --name Image --attributes name:string, productId:integer

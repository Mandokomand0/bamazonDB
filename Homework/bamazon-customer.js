//required packages
var mysql = require("mysql");
var inquirer = require("inquirer");
//mysql connection information
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazondb'
});
var stock = 0;
var id = 0;
var price = 0;
var total = 0;
//test connection
// connection.connect(function(err){
//     if(err) throw err;
//     console.log("connected!  yay!");
//     //startShopping();
// });


// var dataTable = ;
// var productsTable ={};

// var productsRow = [];
// var porductName = [];

// productsTable.productsRow = productID;
// productsTable.productsRow.productName = table productName;
// for (var i = 1 ; dataTable.length = i; i++) {
// 	var productID = i;
// 	var productName ="";
// 	var productMatch = "\n" + productID + " " + productName;
// 	productsTable.push(productMatch) 	
// } productsTable.push(productMatch)
//var display = {};
function bringInDisplayTable(){
	var productsTable = "";
    var sql = "select id, product_name FROM products";
    connection.query(sql, function(err, result){
        //console.log(result);
        //var displayObject = JSON.parse(result);
        var display = JSON.stringify(result);
        
        var productMatch = {};
        for (var i = 0; i < result.length; i++) {
          console.log("ID: " + result[i].id + " " + result[i].product_name);
        }
   //      for (var i = 0 ; result.length = i; i++) {
			// var productID = display[i].id;
			// console.log(productID);
			// var productName = display[i].name;
			// console.log(productName);
			// var productList = "\n" + productID + " " + productName;
			// productMatch.push(productList);
			// //console.log(productMatch);
			//console.log(display);
			//console.log(productMatch);
		//}
		//console.log(productMatch);
        //console.log(JSON.stringify(result.replace("{"id":", "\n").replace("{", "").replace("[", "").replace("]", "".replace(','))));
        //console.log(products);
        //createProduct();
        //console.log(display);
        startShopping();
        // connection.end();
    });
}
var viewedProduct = "";

bringInDisplayTable();
 
function startShopping() {

	inquirer.prompt([
	{
		name: "productID",
		message: "What Product would you like to investigate?\nPlease type the ID number of the product you would like to view."
	}
	])
	.then(function(req){
		//console.log(req.productID);
		id = req.productID;
		var sql = "select * FROM products where id = " + req.productID;
    		connection.query(sql, function(err, result){
    			var viewedProduct = result;
    			//console.log(viewedProduct);
        	console.log("The " + result[0].product_name + ", is worth about $" + result[0].price + " and we only have " + result[0].stock_quantity);
        	stock = result[0].stock_quantity;
        	price = result[0].price;

        	inquirer.prompt([
	{
		name:"desiredAmount",
		message: "This is a wonderful product. How may would you like to purchase?"
	}
	]).then(function(req) {

		var desiredQuantity = req.desiredAmount;
		//console.log(results[0].stock_quantity);
		//console.log(stock);
		var remaining = stock - desiredQuantity;
		total = price * desiredQuantity;
		//console.log(remaining);
		if (remaining < 0) {
			console.log("Sorry we could not complete your order. The desired quantity is not in our inventory. Please try again later.");
			bringInDisplayTable();
			
		} else{
			//var sql = "UPDATE products SET stock_quantity = " + remaining + " WHERE id = " + id + ";"
			inquirer.prompt([
				{
					name: "checkout",
					type: "rawlist",
					choices: ["yes", "No, I shall resist the earge to buy anything!"],
					message: "The total purchase cost of your request is " + total + ".\nWould you like to continue with your purchase?",
					confirm: (Boolean)
				}
				]).then(function(sale){
					if (sale.checkout === "yes") {
						var sql = "UPDATE products SET stock_quantity = " + remaining + " WHERE id = " + id + ";"
						connection.query(sql, function(err, result){

						});
						console.log("Thank you for your purchase. We appreciate your patronage.\nWe have now have only " + remaining + " in stock! Your purchase request will be completed in 364 days, 23 hours, 59 minutes and 59 seconds." );
					connection.end();
				} else {
					console.log("We are sorry you don't want our fabulous product... You cannot escape until you buy something");
					bringInDisplayTable();
				}
				 	
				})
		
			
		}

		
	})
        	
	});
})
}


// function purchaseWindow() {
// 	inquirer.prompt([
// 	{
// 		name:"desiredAmount",
// 		message: "This is a wonderful product. How may would you like to purchase?"
// 	}
// 	]).then(function(req) {
// 		var desiredQuantity = req.desiredAmount;
// 		var sql = "select * FROM products where id = " + req.productID;
//     		connection.query(sql, function(err, result){
//     			var viewedProduct = result;
//     			console.log(viewedProduct);
//     		})
// 	})
// }





//	var sql = "select * FROM products where id = " + req.productID;
  //   		connection.query(sql, function(err, result){
    			
    		
  //   		})
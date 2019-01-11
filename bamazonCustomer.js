var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1Farrah274_",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  bamazonApp();
});

function bamazonApp() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) {
      console.log(err);
    }
    for (var i = 0; i < res.length; i++) {
      console.log(
        "ID: " +
          res[i].id +
          "   " +
          "Product Name: " +
          res[i].product_name +
          "   " +
          "Price: " +
          res[i].price +
          "\n"
      );
    }
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is Product ID number?",
          name: "productID"
        },
        {
          type: "input",
          message: "How many units would you like to buy?",
          name: "number"
        }
      ])
      .then(function(reply) {
        for (var i = 0; i < res.length; i++) {
          if (parseInt(reply.productID) === res[i].id) {
            console.log(
              "[Shcopping Cart]: " + res[i].product_name + " " + res[i].price
            );

            if (parseInt(reply.number) < res[i].stock_quantity) {
              var total = reply.number * res[i].price;

              console.log("Lucky you! we have the product");

              console.log("SALE TOTAL: " + total);

              stopConnection();
            } else {
              console.log("INSUFFICIENT QUANTITIY!");
              bamazonApp();
            }
          }
        }
      });
  });
}

function stopConnection() {
  connection.end();
}

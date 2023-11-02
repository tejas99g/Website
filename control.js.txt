exports.vehicle = function(req, res){                   
var table = document.getElementById('vehiclesTB');//how to read this 
table in ejs
for (var i = 1; i < table.rows.length; i++) {
if (table.rows[i].cells.length) {
var vehicleTag = (table.rows[i].cells[0].textContent.trim());
var vehicleMake = (table.rows[i].cells[1].textContent.trim());
var vehicleModel = (table.rows[i].cells[2].textContent.trim());
var price = (table.rows[i].cells[3].textContent.trim());
var quantity = (table.rows[i].cells[4].textContent.trim());                
     }
}

var sql = 'insert into Vehicle(make, model, price, quantity) values 
(?,?,?,?,?)';
pool.query(sql,[vehicleMake, vehicleModel, price, quantity], 
(err,data)=>{
if(err){
    console.log(err);            
    return
 }else{
    console.log(data);                        
     }      
 };
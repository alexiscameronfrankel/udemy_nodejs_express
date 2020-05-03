const express = require("express")
const bodyParser = require("body-parser"); //works with express, and has a few modes 

const app = express(); 
app.use(bodyParser.urlencoded({extended: true})); //urlencoded (you could also do .JSON if it was that kind of file) take info from html form...extended allows us to post that info...BODYPARSER MAKES YOU USE THIS 

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html"); //__dirname gets you to the root versus relative path..you can append file path to it
})

app.get("/bmicalculator", function(req, res){ 
    res.sendFile(__dirname + "/bmiCalculator.html"); //__dirname gets you to the root versus relative path..you can append file path to it
})


app.post("/", function(req, res){

console.log(req.body);

    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    let result = num1 + num2; 


    res.send("The result of the calculation is " + result);
});

app.post("/bmicalculator", function(req, res){

    console.log(req.body);
    
        let weight = parseFloat(req.body.weight)*0.453592;
        let height = parseFloat(req.body.height)*0.3048;
        let bmi = weight/(height*height); 
    
        res.send("The result of the calculation is " + bmi.toFixed(2));
    });

app.listen(3000, function(){
    console.log("Server is started on port 3000.");
})
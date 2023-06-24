const express = require('express')
const app = express()
const bodyparser=require('body-parser');
const port = 3000

//to use the body parser
app.use(bodyparser.json())


//creating the first middleware
// function middlewar1(req,res,next){
//   console.log(" from inside the middleware we are getting alam zia");
//   next();
// }
// //now registering the middle ware 
// app.use(middlewar1)

//program for the sum
function CalculatedSum(counter){
  var sum=0;
  for(var i=0;i<counter;i++){
    sum=sum+i;
  }
  return sum;
}

function HandleFirstRequest(req,res){
  console.log(req.body);

  var counter=req.body.counter;
 // var counter=req.query.counter;  
  // console.log(req.query.counter2);
  // console.log(req.query.counter3);
  
    var TotalSum=CalculatedSum(counter);
      console.log(TotalSum);
 
  
   //res.send("the sum is "+answer);
   var answerObject={
    sum: TotalSum
   }

   //var answer="the sum is "+TotalSum;
    res.status(200).send(answerObject);
}
app.post('/', HandleFirstRequest);
function HandlePostRequest(){
  console.log("hello alam ");
}
//app.post('/', HandlePostRequest);
function started(){
  console.log(`we are working on the port no ${port}`);
}

app.listen(port, started);
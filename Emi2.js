// listen for submit

document.getElementById("loan-form").addEventListener("submit",computeResults);
document.getElementById("loan-form").addEventListener("submit",clear);

var slider1 = document.getElementById("amount");
var slider2 = document.getElementById("interest");
var slider3 = document.getElementById("year");
var output1 = document.getElementById("demo1");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
  var out1=output1;
}
slider2.oninput = function() {
  output2.innerHTML = this.value;
  var out2=output2;
}
slider3.oninput = function() {
  output3.innerHTML = this.value;
  var out3=output3;
}

function computeResults(e) {  

  
  // if(isNaN(e)){

  //   //dispaly error msg
  //   errorManage.innerHTML="Oops! Value for input fields is not given. please proovide the value for all inputs";

    const UIamount = slider1.value;
    const UIinterest = slider2.value;
    const UIyears = slider3.value;
  
    const principal = parseFloat(UIamount);
    const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
    const calculatedPayments = parseFloat(UIyears) * 12;
  
    //Compute monthly Payment
  
    const x = Math.pow(1 + CalculateInterest, calculatedPayments);
    const monthly = (principal * x * CalculateInterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2);
  
    //Compute Interest
  
    const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);
  
    //Compute Total Payment
  
    const totalPayment = (monthly * calculatedPayments).toFixed(2);
  
    //Show results
  
    document.getElementById("monthlyPayment").innerHTML = "₹ " + monthlyPayment;
  
    document.getElementById("totalInterest").innerHTML = "₹ " + totalInterest;
  
    document.getElementById("totalPayment").innerHTML = "₹ " + totalPayment;
      e.preventDefault();

      //grab clearbutton
var clearbutton = document.getElementById('clear');
clearbutton.addEventListener('click',reload); }
  

  function Clear(){
   
  
    document.getElementById("amount").value="";
document.getElementById("interest").value="";
document.getElementById("years").value="";
//  document.getElementById("demo1").value="";
//  document.getElementById("demo2").value="";
//  document.getElementById("demo3").value="";
document.getElementById("monthlyPayment").innerText="";
document.getElementById("totalInterest").value="";
document.getElementById("totalPayment").value="";


}

//reload the page
function reload(){
    location.reload()
}

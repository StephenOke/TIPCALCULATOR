
document.querySelector('#tip-form').onchange = function(){
    
    var bill = Number(document.getElementById('billTotal').value);
    var tip = document.getElementById('tipInput').value;
    document.getElementById('tipOutput').innerHTML = `${tip}%`;
    var tipValue = bill * (tip/100)
    var finalBill = bill + tipValue
  console.log(finalBill)
  var tipAmount = document.querySelector('#tipAmount')
  
  var totalBillWithTip = document.querySelector('#totalBillWithTip')
  
  tipAmount.value = tipValue.toFixed(2);
   totalBillWithTip.value =finalBill.toFixed(2);
  
   //Show Results
   if(tip > 1 && tip <19 ){
    document.getElementById('chatter').innerHTML = 'Dont be wierd, add some more'
   }else if(tip > 20 && tip < 29){
    document.getElementById('chatter').innerHTML = 'You are very appreciated!'
   }else if(tip >=30 && tip <39){
    document.getElementById('chatter').innerHTML = 'Okay wow thanks!!'
   }else if(tip >= 40 && tip <49){
    document.getElementById('chatter').innerHTML = 'Okay..CHILL'
   }else if(tip >= 50 && tip <59){
    document.getElementById('chatter').innerHTML = 'DO NOT LIE TO ME!'
   }else if(tip >= 60 && tip <69){
    document.getElementById('chatter').innerHTML = 'looks like you wanna get married *Wink Wink*'
   }else if(tip >= 70 && tip <79){
    document.getElementById('chatter').innerHTML = 'Are we related or sumn?!'
   }else if(tip >= 80 && tip <=99){
    document.getElementById('chatter').innerHTML = 'if you dont stop now, i will be calling the authorities!'
   } else if(tip == 100){
    document.getElementById('chatter').innerHTML = 'i cant believe all it took you was a sandwich and some fries to get you like this'
   }
  
    document.getElementById('results').style.display='block'
  }
 
 
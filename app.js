$(document).ready(function(){
  function convertToRoman(num) {
  //make X
  var roman='';
  var arr=[];
  var remain;
  var numstring='';
  
  //turn num into string, then array
  numstring=num.toString();
  arr=numstring.split('').reverse();
  var arr0=arr[0];
  switch (arr0){
    case "1":
      roman='I';
      break;
    case "2":
      roman='II';
      break;
    case '3':
      roman='III';
      break;
      case "4":
      roman='IV';
      break;
      case "5":
      roman='V';
      break;
      case "6":
      roman='VI';
      break;
      case "7":
      roman='VII';
      break;
      case "8":
      roman='VIII';
      break;
    case "9":
      roman='IX';
  }
  var arr1=arr[1];
  switch (arr1){
    case "1":
      roman='X' + roman;
      break;
    case "2":
      roman='XX'+roman;
      break;
    case "3":
      roman='XXX'+roman;
      break;
    case "4":
      roman='XL'+roman;
      break;
    case "5":
      roman='L'+roman;
      break;
    case "6":
      roman='LX'+roman;
      break;
    case "7":
      roman='LXX'+roman;
      break;
    case "8":
      roman='LXXX'+roman;
      break;
    case "9":
      roman='XC'+roman;
      break;
      
  }
  var arr2=arr[2];
  switch (arr2){
    case "5":
      roman='D'+roman;
      break;
    case "6":
      roman='DC'+roman;
      break;
    case "7":
      roman='DCC'+roman;
      break;
    case "8":
      roman='DCCC'+roman;
      break;
    case "9":
      roman='CM'+roman;
      break;
  }
  var arr3=arr[3];
  switch (arr3){
    case "1":
      roman='M'+roman;
      break;
    case "2":
      roman='MM'+roman;
      break;
    case "3":
      roman='MMM'+roman;
      break;
  }
   
 return roman;
}
  
  //get input to convert
  $("#submitbutton").click(function(){
  
  var searchterm = document.getElementById('userInput');
  
  searchterm=searchterm.value;
    
   var converted= convertToRoman(searchterm);
  
    $("#converted").html(converted);
    

});

});

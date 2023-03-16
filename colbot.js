var gg= true;
var helpList = [" Say \"end\" to exit."," Say \"math\" to display math commands "," Say \"number list\" to make a number list and display the list and total","Say \"item list\" to make an item list and display the list","\"write\" "," \"write\" "];
var mathBoolean=false;
while(gg)
{
var input = prompt("What may I help you with? Say \"Help\" for a list of commands : ");

if (input==null)
{
  unknown();
}
else
{
  input.toLowerCase();
}
  
find(input);

}

function help()
{
  alert("I am here to help.\n"+printList()+"\n PRESS OK");
}

function end()
{
  gg=false;
}


function printList()
{
  var string="";
 for(var i=0; i<helpList.length;i++)
 {
   string+=helpList[i]+"\n";
 }
 return string;
}


function find(input)
{
  if(input=="help")
  {
    
  help();
  }
  else if(input=="end"||input=="stop")
  {
    end();
  }
    else if(input=="math")
  {
    mathFun();
    
  }
  else if((input=="find x"||input=="solve for input")&&(mathBoolean))  
  {
    
    return(findX());
  }
  else if((input=="pick a random number"||input=="random number"||input=="rand num"||input=="randnum"||input=="random num")&&(mathBoolean))  
  { 
    return(pickRanNum());
  }
  else if(input==null)
  {
    unknown();
  }
  else
  {
    unknown();
  }
}


function unknown()
{
  alert("Unknown command. Check Spelling and CAPS. \n PRESS OK ");
}



//Calculate Area
function mathFun()
{
  var input = prompt(("What math operation should I do. I can... \n solve for x \n pick a random number")).toLowerCase();
 
 if (input==null)
{
  unknown();
}
else
{
  input.toLowerCase();
}
  
  mathBoolean=true;

prompt(find(input));
mathBoolean=false;
}
function findX()
{
  var a = prompt("Enter  the a value");
  var b = prompt("Enter  the b value");
  var c = prompt("Enter  the c value");
 var result = (((-1*b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    var result2 = (((-1*b) - Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    
    return "x = "+result + " and x = " + result2;
}

function pickRanNum()
{
  var x = prompt("Enter the first number in range: ");
  var y = prompt("Enter the second number in range: ");
  var range = y-x;
  return "Your random number between "+x+" and "+y+" is "+ Math.floor(Math.random()*range+x)+"\n PRESS OK";
}

//END Calculate

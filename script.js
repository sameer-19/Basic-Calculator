var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
display.innerText=0;
// console.log(buttons.length)
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if(value=='+')
        {
            operator= '+';
            if(operand1==0) operand1= parseFloat(display.textContent);
            else operand2= parseFloat(display.textContent);
            display.innerText="";
            // display.innerText+="+";
        }
        else if(value=='-')
        {
            operator= '-';
            if(operand1==0) operand1= parseFloat(display.textContent);
            else operand2= parseFloat(display.textContent);
            display.innerText="";
            // display.innerText+="-";
        }
        else if(value=='*')
        {
            operator= '*';
            if(operand1==0) operand1= parseFloat(display.textContent);
            else operand2= parseFloat(display.textContent);
            display.innerText="";
            // display.innerText+="*";
        }
        else if(value=='/')
        {
            operator= '/';
            if(operand1==0) operand1= parseFloat(display.textContent);
            else operand2= parseFloat(display.textContent);
            display.innerText="";
            // display.innerText+="/";
        }
        else if(value=='=')
        {
            operand2= parseFloat(display.textContent);
            if(operand2==0 && operator=='/') { display.innerText="Error";operand1=0;operator=null; }
            else if(operand2==null)
            {
                display.innerText="Error";operand1=0;operator=null;
            }
            else{ var result= eval(operand1+""+operator+""+operand2);
            display.innerText=result;
            operand1=result;}
            operand2=null;
        }
        else if(value==';')
        {
            display.innerText=0;
            operand1=0;
            operand2=null;
            operator=null;
        }
        else if(value==',')
        {
            operand1= parseFloat(display.textContent);
            operator="/";
            operand2=100;
            var result=eval(operand1+""+operator+""+operand2);
            display.innerText=result;
            operand2=null;
            operator=null;
        }
        else{
            if(display.innerText=='0') display.innerText=value; 
            else display.innerText+=value;
        }
    });
}
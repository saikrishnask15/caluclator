const display=document.querySelector("#display");
const button_ac=document.querySelector("#button-ac");
const button_del=document.querySelector("#button-del");
const button_mod=document.querySelector("#button-mod");
const button_div=document.querySelector("#button-div");

const button7=document.querySelector("#button7");
const button8=document.querySelector("#button8");
const button9=document.querySelector("#button9");
const button_plus=document.querySelector("#button-plus");

const button4=document.querySelector("#button4");
const button5=document.querySelector("#button5");
const button6=document.querySelector("#button6");
const button_mul=document.querySelector("#button-mul");

const button3=document.querySelector("#button3");
const button2=document.querySelector("#button2");
const button1=document.querySelector("#button1");
const button_minus=document.querySelector("#button-minus");

const button_0=document.querySelector("#button-0");
const button_00=document.querySelector("#button-00");
const button_pulstop=document.querySelector("#button-pulstop");
const submit_button=document.querySelector("#submit-button");

button_ac.onclick=button_Ac;
button_del.onclick=button_Del;
button_mod.onclick=button_Mod;
button_div.onclick=button_Div;
button7.onclick=button_7;
button8.onclick=button_8;
button9.onclick=button_9;
button_plus.onclick=button_Plus;
button4.onclick=button_4;
button5.onclick=button_5;
button6.onclick=button_6;
button_mul.onclick=button_Mul;
button3.onclick=button_3;
button2.onclick=button_2;
button1.onclick=button_1;
button_minus.onclick=button_Minus;
button_0.onclick=button_zero;
button_pulstop.onclick=button_Pulstop;
submit_button.onclick=Submit_button;

 function button_Ac(){
    display.value ="";
 }
 function button_Del(){
     display.value =display.value.toString().slice(0,-1);
    
 }

 function button_Mod(){
    display.value +="%";
 }

 function button_Div(){
    display.value +="/";
 }

 function button_7(){
    display.value +="7";
 }
 function button_8(){
    display.value +="8";
 }

 function button_9(){
    display.value +="9";
 }
 function button_Plus(){
    display.value +="+";
 }

 function button_4(){
    display.value +="4";
 }
 function button_5(){
    display.value +="5";
 }

 function button_6(){
    display.value +="6";
 }
 function button_Mul(){
    display.value +="*";
 }

 function button_3(){
    display.value +="3";
 }
 function button_2(){
    display.value +="2";
 }

 function button_1(){
    display.value +="1";
 }
 function button_Minus(){
    display.value +="-";
 }

 function button_zero(){
    display.value +="0";
 }
 button_00.onclick=Button_Dzero;
 function Button_Dzero(){
    display.value +="00";
 }
 
 function button_Pulstop(){
    display.value +=".";
 }
 function Submit_button(){
    try{
    display.value =eval(display.value);
    }
    catch(error){
        display.value="ERROR";
    }
    
 }









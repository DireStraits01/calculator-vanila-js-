let a = '';
let b = '';
let action = '';
let finish = false
const djigit = [ '1','2','3','4','5','6','7','8','9','0','.'];
const sign = ['+', '-', '/', '*', '+/-'];
const l = console.log
let out = document.querySelector('.screen p')


document.querySelector('.buttons').addEventListener('click', function(event){
  if (event.target.classList.contains('ac')){
      a = '';
      b = '';
      action = '';
      out.textContent = '0'
  }

   let key = event.target.textContent;
   if (djigit.includes(key)){
       if(b == '' && action == ''){
           a+=key;
           out.textContent = a
           l('a:',a)
       }
       else if (a != '' && b != '' && finish){
           b+=key;
           finish = false
           l('b:',b)
           out.textContent = b
       }
       else {
           b+=key;
           out.textContent = b
       }
   }
   if (sign.includes(key)){
       if (a != '' && b == '')
       {action=key;
        l('action:',action)
       out.textContent = action}
   }
   if (key == '='){
   switch(action){
       case '+': a = (+a)+(+b)
        break;    
       case '-':a = a - b
        break;
       case '*': a = a * b
        break;
       case '/': a = a / b
        break;   
     
   }  finish = true
      b = ''
      out.textContent = a
      
   }
   
})
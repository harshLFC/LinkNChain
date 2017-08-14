/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function randomArray(){
 var numberArray = [];
            for(var x=0;x<10;x++){
                numberArray[x] = 10+ Math.round(90* Math.random());
            }
        
            for(y=0;y<numberArray.length;y++){
           //     document.write("Example of array creation and display : ",numberArray[y]);
             //   document.write("<br>");
             var iil = document.getElementById("myOutputText");
             iil.innerHTML ="Example of array creation and display :"+numberArray[y];
              
    
        }
            }
//autosoma
function myFunction() {
    var checkboxes = document.getElementsByTagName("input");
    var total = 0;
    for(var i = 0; i < checkboxes.length; i++){
      if(checkboxes[i].checked){
        total += parseInt(checkboxes[i].value);


      }
    }  
    
 


let res = document.getElementById('soma')
res.innerHTML = 'R$ ' + total.toFixed(2);
}

function fechar(){
  location.replace("index.html");
}


        




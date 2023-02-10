//obter itens marcados
function obterMarcados() {

  location.replace("newindex.html");

     var listaMarcados = document.getElementsByTagName("input");

    var sum = 0;
    for (loop = 0; loop < listaMarcados.length; loop++) {

       var item = listaMarcados[loop];  
       if (checkBox.checked === false){
             alert  ("Escolha um ítem")      
         reseta()          

       }if (item.type == "checkbox" && item.checked){ 
         console.log(item.name);
         console.log(item.value);          
         sum += parseInt(item.value);  
   
       }      
    }
      console.log('A soma dos valores é:', sum);    
}

 
/*var resposta = document.getElementById('res') ;
//<input type="checkbox" name="option1" value="BATATA" >Option 1</input>

function verificar( nome, quantidade ) {  
     document.getElementById('res').style.background = 'white';
     document.getElementById('res').style.background = 'white';
     document.getElementById
     ('res').style.bottom = '18%';
     res.style.height = '60%';

    let el = document.getElementById('closed');   
    el.style.cssText = 
    'color: black;'+
    'background-color: rgb(247, 155, 36);'+
    'border: 1px solid black;'+
    'height: 30px;'+
    'padding: 15px;'
    
       saida = " <br> Você Pediu... <br>";
    
    // itera baseado na quantidade de elementos
    for ( i = 0; i < quantidade; i++ ) {
           
        // obtém cada elemento pelo id
   checkBox = document.getElementById( nome + ( i + 1 ) );

    // if (checkBox.checked === false){
    //      alert  ("Escolha um ítem")      
    // reseta()
    // }
 
        // se o checkbox estiver marcado, adiciona mais uma linha na string de saida.
        if (checkBox.checked) { 

            saida +="\n <br>" + checkBox.value;                  
                 
        } 
      }
            
    // mostra a saída
    resposta.innerHTML = (saida +  "<br><br> Seu pedido está em preparação....." );    
}
*/
function fechar(){
        document.getElementById("res").style.display = "none";
        document.getElementById("closed").style.display = "none";
        window.location.reload();
}





var resposta = document.getElementById('res');



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
   //  if (checkBox.value !== ""){
  //        alert  ("Escolha um ítem")      
    // reseta()
 //     }
        
        // se o checkbox estiver marcado, adiciona mais uma linha na string de saida.
        


        if (checkBox.checked ) {
            saida +="\n <br>" + checkBox.value;
        }  
      }

       
    // mostra a saída
    resposta.innerHTML = (saida +  "<br><br> Seu pedido está em preparação....." );
    
}

function fechar(){
        document.getElementById("res").style.display = "none";
        document.getElementById("closed").style.display = "none";
        window.location.reload();

     


}



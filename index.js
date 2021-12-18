let resposta = document.getElementById('res');


function verificar( nome, quantidade ) {
		
    saida = " <br> Você Pediu... <br>";
    
    // itera baseado na quantidade de elementos
    for ( i = 0; i < quantidade; i++ ) {

        // obtém cada elemento pelo id
        checkBox = document.getElementById( nome + ( i + 1 ) );
        if (checkBox.value !== ""){
            alert = ("jkhjh")
        }
        // se o checkbox estiver marcado, adiciona mais uma linha na string de saida.
        if ( checkBox.checked ) {
            saida +="\n <br>" + checkBox.value;
        }
    }    
    // mostra a saída
    resposta.innerHTML = (saida + "<br> Seu pedido está em preparação.....");
}
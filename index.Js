function Converter() {
    var valorElemento = document.getElementById ("valor");
    var valor = valorElemento.value;
    var valorDoRp = parseFloat (valor);
  
    var valorDoRp = (valorDoRp / 40.625)
    
    
    var elementoValorConvertido = document.getElementById ("Resultado")
    var Resultado = "O resultado em Real é de R$" + valorDoRp
    elementoValorConvertido.innerHTML = Resultado
   
  }

  
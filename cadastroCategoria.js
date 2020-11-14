function cadastrarCategoria(){
    var select = document.getElementById("listaCategorias")
    var option = select.options[select.selectedIndex]; 

    if(option.text == "Categoria principal"){
        window.alert("Categoria inválida");
    } else{
        window.alert("Funcionou")
    }
}
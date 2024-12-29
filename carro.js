var carritovisible = false;


if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready)

}else{
    ready();
}


function ready(){

    var botonesEliminarItem = document.getElementsByClassName("btn-eliminar");
    for(var i=0; i < botonesEliminarItem.length;i++){
        var button = botonesEliminarItem[i];
        button.addEventListener("click", eliminarItemCarrito);
    }
}



function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}



//actualizar total , al eliminar item de compra

function actualizarTotalCarrito(){
    //selecciono contenedor del carrito
    var carritoContenedor = document.getElementsByClassName("carrito") [0];
    var carritoItems = carritoContenedor.getElementsByClassName("carrito-item");
    var total = 0;

    //recorro cada elemento del carro para actualziar el total
    for(var i = 0; i < carritoItems.length; i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName("carrito-item-precio")[0];
        console.log(precioElemento);
        //quito el $ y el simbolo .
        var precio = parseFloat(precioElemento.innerText.replace("$","").replace(".",""));
        console.log(precio);
        var cantidadItem = item.getElementsByClassName("carrito-item-cantidad")[0];
        var cantidad = cantidadItem.value;
        console.log(cantidad);
        total = total + (precio * cantidad);

    }
    total = Math.round(total*100)/100;
    document.getElementsByClassName("carrito-precio-total")[0].innerText = total;
}
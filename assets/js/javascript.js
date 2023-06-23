function calcularTotal() {
    var circulo = document.querySelector('.circulo');
    var cantidad = document.querySelector('.cantidad');
    var total = document.querySelector('.total');
    var color = document.querySelector('#color');
    var quantity = document.querySelector('#quantity');
  
    circulo.style.backgroundColor = color.value;
    cantidad.innerHTML = quantity.value;
    total.innerHTML = '$' + ((quantity.value) * 10000000);
  }
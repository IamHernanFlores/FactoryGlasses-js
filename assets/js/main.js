/**Main */

const carro = new Carrito();
let productos = [];
$.ajax({
  type: "Get",
  url: "https://factory-glasses-16ff8-default-rtdb.firebaseio.com/.json",
  dataType: "json",
  success: function (data) {
    localStorage.setItem('Productos', JSON.stringify(data));
    productos = cargarProductos();
    const tiendahtml = document.getElementById('main-productos');
    const carritohtml = document.getElementById('carrito');


    if (carritohtml !== null) {
      carritohtml.removeChild(document.getElementById('carrito_compras'));
      carritohtml.removeChild(document.getElementById('carrito_vacio'));
      const summary = document.getElementById('summary');
      carritohtml.removeChild(summary);

      
      if (carro.carrito.length > 0) {
        const titulo = document.createElement('div');
        titulo.id = 'carrito_compras';
        titulo.className = 'content';
        titulo.innerHTML = tituloHTML();
        carritohtml.appendChild(titulo);
        const padre = document.getElementById('items');
        carro.carrito.forEach(element => {
          let plantilla = mostrarProductoCarrito(element);
          padre.innerHTML += plantilla;
        });
        titulo.appendChild(padre);
        summary.innerHTML = actualizarSummary(carro.carrito);
        carritohtml.appendChild(summary)
      } else {
        tituloVacio = document.createElement('h1');
        tituloVacio.id = "carrito_vacio";
        tituloVacio.innerHTML = '¡ CARRITO VACÍO VE A LA TIENDA A COMPRAR ALGO 😶!';
        carritohtml.appendChild(tituloVacio);
      }
    } else if (tiendahtml !== null) {
      let remover = $(".col-md-4");
      for (let i = 0; i < remover.length; i++) {
        tiendahtml.removeChild(remover[i]);
      }
      productos.forEach(element => {
        let plantilla = mostrarTienda(element);
        tiendahtml.innerHTML += plantilla;
      });
    }
  },
  error: function () {
    swal({
      title: "Error!",
      text: "No se encontro el archivo",
      icon: "error",
      button: false
    });
  }
});


/* SELECTOR* */

fvar;
x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);
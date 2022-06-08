const inputProducto = document.querySelector("#inputProducto");
const botonProducto = document.querySelector("#botonProducto");
const productoContainer = document.querySelector("productoContainer");

botonProducto.addEventListener('click', (e) =>{
    e.preventDefault();
    traerProductos(inputProducto.value);
})

function traerProductos(producto){

    fetch(`https://api.escuelajs.co/api/v1/products/${producto}/`)
    .then((resultado) => resultado.json())
    .then((data) => {
        crearProducto(data);
    });
}

function crearProducto(producto){
    const imagen = document.getElementById('productoImagen');
    imagen.src = producto.images[0];

    const nombre = document.getElementById('nombreProducto');
    nombre.textContent = producto.title;

    const descripcion = document.getElementById('descripcionProducto');
    descripcion.textContent = producto.description;

    const precio = document.getElementById('precioProducto');
    precio.textContent = producto.price;

    const categoria = document.getElementById('categoriaProducto');
    categoria.int = producto.category;
}

function añadirProducto(){
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}
function actualizarProducto(){
    fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}
function eliminarProducto(){
    fetch('https://fakestoreapi.com/products/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}

function listarProd(){
    
    const tit = document.getElementById('titulo');
    tit.textContent = producto.title;

    const prec = document.getElementById('precio');
    prec.textContent = producto.price;

    const cat = document.getElementById('categoria');
    cat.textContent = producto.category;
}



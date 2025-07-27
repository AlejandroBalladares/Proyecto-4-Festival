document.addEventListener('DOMContentLoaded', function(){
    cargarGaleria();
});



function cargarGaleria() {
    const galerias = document.querySelectorAll('.galeria-imagenes');
    const cantidad_imagenes = 16;
 
    galerias.forEach(galeria => {
        for (let i = 1; i <= cantidad_imagenes; i++) {
            const imagen = document.createElement('IMG');
            imagen.src = `src/img/grande/${i}.jpg`;
            imagen.alt = `Imagen galeria`;
 
            galeria.appendChild(imagen);
        }
    });
}
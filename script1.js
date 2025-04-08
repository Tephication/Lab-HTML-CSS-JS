document.getElementById("enviar").addEventListener('click', function(){
    const input = document.getElementById("nombre-saludo");
    const texto = input.value.trim ();

    if(texto) {
        const mensaje_usuario = document.createElement("p");
        mensaje_usuario.textContent = `¡Hola ${texto}, que bueno que hayas venido a visitarme!`;
        
        const contenedor = document.getElementById("mensaje");
        contenedor.innerHTML ="";
        contenedor.appendChild(mensaje_usuario);
        input.value= "";
        
    }
})
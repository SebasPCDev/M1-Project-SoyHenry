
    function agregarTarjeta() {

        //Obtener valores del formulario
        let nombre = document.getElementById('nombre').value;
        let descripcion = document.getElementById('descripcion').value;
        let imagen = document.getElementById('imagen').value;

        console.log(`${nombre} \n ${descripcion} \n ${imagen}`)

        //Crear tarjeta

        let tarjeta = document.createElement('div');
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <img src="${imagen}" alt="${nombre}">
        `;

        console.log(tarjeta)

        //agregar tarjeta al contenedor
        document.getElementById('tarjetas').appendChild(tarjeta);

        //Limpiar formulario
        document.getElementById('formulario').reset();

    }





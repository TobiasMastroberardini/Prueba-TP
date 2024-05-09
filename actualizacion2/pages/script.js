const transportesOrlando = [
    { nombre: 'Autobús', tarifa: '$2.00 por viaje' },
    { nombre: 'Tren SunRail', tarifa: '$2.00 - $5.00 según la distancia' },
    { nombre: 'Tranvía I-RIDE Trolley', tarifa: '$2.00 - $5.00 por día' },
    { nombre: 'Taxi', tarifa: 'Varía según la distancia y el servicio' },
    { nombre: 'Uber/Lyft', tarifa: 'Varía según la distancia y la demanda' }
];


const paises = [
    "Alemania",
    "Argentina",
    "Australia",
    "Brasil",
    "Canadá",
    "Chile",
    "China",
    "Colombia",
    "Corea del Sur",
    "Egipto",
    "España",
    "Estados Unidos",
    "Francia",
    "India",
    "Italia",
    "Japón",
    "México",
    "Reino Unido",
    "Rusia",
    "Sudáfrica",
    "Otro"
];


const parquesDisney = [
    {
        nombre: "Magic Kingdom",
        ubicacion: "Orlando, Florida, EE. UU.",
        atraccionesDestacadas: ["Space Mountain", "Pirates of the Caribbean", "Haunted Mansion"],
        añoApertura: 1971,
        url: "magicKingdom.html",
        preciosEntrada: {
            adultos: "$109 USD",
            niños: "$103 USD",
            adolescentes: "$107 USD"
        }
    },
    {
        nombre: "Disneyland",
        ubicacion: "Orlando, Florida, EE. UU.",
        atraccionesDestacadas: ["Pirates of the Caribbean", "Splash Mountain", "Indiana Jones Adventure"],
        añoApertura: 1955,
        url: "disneyLand.html",
        preciosEntrada: {
            adultos: "$109 USD",
            niños: "$103 USD",
            adolescentes: "$107 USD"
        }
    },
    {
        nombre: "Disney's Animal Kingdom",
        ubicacion: "Orlando, Florida, EE. UU.",
        atraccionesDestacadas: ["Expedition Everest", "Avatar Flight of Passage", "Kilimanjaro Safaris"],
        añoApertura: 1998,
        url: "disneyAnimalKingdom.html",
        preciosEntrada: {
            adultos: "$109 USD",
            niños: "$103 USD",
            adolescentes: "$107 USD"
        }
    },
    {
        nombre: "Epcot",
        ubicacion: "Orlando, Florida, EE. UU.",
        atraccionesDestacadas: ["Test Track", "Soarin'", "Spaceship Earth"],
        añoApertura: 1982,
        url: "epcot.html",
        preciosEntrada: {
            adultos: "$109 USD",
            niños: "$103 USD",
            adolescentes: "$107 USD"
        }
    }
];


const navUl = document.getElementById('nav-ul');
const menuToggle = document.getElementById('menu-toggle');
const screenWidth = window.innerWidth;
const tablaTransporte = document.getElementById('tabla-transporte');

document.addEventListener('DOMContentLoaded', mostrarOcultarMenu(navUl, menuToggle, screenWidth));
document.addEventListener('DOMContentLoaded', transicionEntreSections);


// Funciones que solo se deben ejecutar en el archivo index.html
if (window.location.pathname.includes('/index.html')) {

    document.addEventListener('DOMContentLoaded', function () {
        transportesOrlando.forEach(function (transporte) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
            <td>${transporte.nombre}</td>
            <td>${transporte.tarifa}</td>
        `;
            tablaTransporte.appendChild(fila);
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const listaParques = document.getElementById("lista-parques");

        parquesDisney.forEach(function (parque) {
            const itemLista = document.createElement("li");
            itemLista.innerHTML = `
        <a href=${parque.url}
            <strong>${parque.nombre}</strong></a> - Ubicación: ${parque.ubicacion}<br>
            Año de Apertura: ${parque.añoApertura}<br>
            Atracciones Destacadas: ${parque.atraccionesDestacadas.join(", ")}
        `;
            listaParques.appendChild(itemLista);
        });
    });

}


// Funciones que solo se deben ejecutar en el archivo contacto.html
if (window.location.pathname.includes('/contacto.html')) {

    document.addEventListener("DOMContentLoaded", function () {
        listarPaises(paises);
    });

    function listarPaises(paises) {
        paises.forEach(function (pais) {
            const opcion = document.createElement('option');
            opcion.value = pais;
            opcion.textContent = pais;

            const selectPais = document.getElementById('pais');

            selectPais.appendChild(opcion);
        });
    }

    document.getElementById('form-contacto').addEventListener('submit', function (event) {
        event.preventDefault();

        var nombre = document.getElementById('nombre').value.trim();
        var email = document.getElementById('email').value.trim();
        var telefono = document.getElementById('telefono').value.trim();
        var genero = document.querySelector('input[name="genero"]:checked');
        var pais = document.getElementById('pais').value;
        var preferencia1 = document.getElementById('opcion1').checked;
        var preferencia2 = document.getElementById('opcion2').checked;
        var preferencia3 = document.getElementById('opcion3').checked;
        var imagen = document.getElementById('imagen-form').value.trim();

        // Resetear errores
        document.querySelectorAll('.error').forEach(function (span) {
            span.textContent = '';
        });

        var isValid = true;

        if (nombre === '') {
            document.getElementById('errorNombre').textContent = 'Por favor, ingresa tu nombre.';
            isValid = false;
        }

        if (email === '') {
            document.getElementById('errorEmail').textContent = 'Por favor, ingresa tu email.';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('errorEmail').textContent = 'Por favor, ingresa un email válido.';
            isValid = false;
        }

        if (telefono === '') {
            document.getElementById('errorTelefono').textContent = 'Por favor, ingresa tu teléfono.';
            isValid = false;
        } else if (!/^\d{10}$/.test(telefono)) {
            document.getElementById('errorTelefono').textContent = 'Por favor, ingresa un teléfono válido de 10 dígitos.';
            isValid = false;
        }

        if (!genero) {
            document.getElementById('errorGenero').textContent = 'Por favor, selecciona tu género.';
            isValid = false;
        }

        if (pais === '') {
            document.getElementById('errorPais').textContent = 'Por favor, selecciona tu país.';
            isValid = false;
        }

        if (!preferencia1 && !preferencia2 && !preferencia3) {
            document.getElementById('errorPreferencias').textContent = 'Por favor, selecciona al menos una preferencia.';
            isValid = false;
        }

        if (imagen === '') {
            document.getElementById('errorImagen').textContent = 'Por favor, selecciona una imagen.';
            isValid = false;
        }

        if (isValid) {
            // Aquí puedes enviar el formulario
            console.log('Formulario válido. Enviando...');
        }


    });
}


// Funciones que solo se deben ejecutar en los archivos de parques
if (window.location.pathname.includes('/disneyAnimalKingdom.html') ||
    window.location.pathname.includes('/magicKingdom.html') ||
    window.location.pathname.includes('/disneyLand.html') ||
    window.location.pathname.includes('/epcot.html')) {

    function listarPreciosParques(parques) {
        // Obtener el nombre de la página actual
        var paginaActual = window.location.pathname;

        // Verificar en qué página estamos y obtener el índice del parque correspondiente
        var indiceParque = 0; // Por defecto, el primer parque
        if (paginaActual.includes('magicKingdom.html')) {
            indiceParque = 0;
        } else if (paginaActual.includes('disneyLand.html')) {
            indiceParque = 1;
        } else if (paginaActual.includes('disneyAnimalKingdom.html')) {
            indiceParque = 2;
        } else if (paginaActual.includes('epcot.html')) {
            indiceParque = 3;
        }

        // Obtener el parque actual y sus precios de entrada
        var parqueActual = parques[indiceParque];
        var preciosEntrada = parqueActual.preciosEntrada;

        // Mostrar los precios de entrada en la consola o en la página
        console.log(`Precios de entrada para ${parqueActual.nombre}:`);
        console.log(`- Adultos: ${preciosEntrada.adultos}`);
        console.log(`- Niños: ${preciosEntrada.niños}`);
        console.log(`- Adolescentes: ${preciosEntrada.adolescentes}`);
    }

    // Llama a la función con la lista de parques
    listarPreciosParques(parquesDisney);
}

// Funciones que deben ejecutarse en todas las paginas
function mostrarOcultarMenu(navUl, menuToggle, screenWidth) {
    if (screenWidth < 768) {

        menuToggle.style.display = "flex";
        menuToggle.addEventListener('click', function () {

            if (navUl.style.display === 'flex') {
                navUl.style.display = 'none';
                menuToggle.innerHTML = "Abrir menu";
            } else {
                navUl.style.display = 'flex';
                navUl.style.flexDirection = 'column'
                menuToggle.innerHTML = "Cerrar menu";
            }
        });
    } else {
        menuToggle.style.display = "none";
        navUl.style.display = "flex";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var navUl = document.getElementById('nav-ul');

    function toggleMenu() {
        navUl.classList.toggle('hidden');
    }
    menuToggle.addEventListener('click', toggleMenu);

    var navLinks = document.querySelectorAll('#nav-ul a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navUl.classList.add('hidden');
        });
    });
});

var links = document.querySelectorAll('.nav-a');
if (screenWidth < 768) {
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            cerrarMenu(navUl, menuToggle);
        });
    });
}

function cerrarMenu(navUl, menuToggle) {
    navUl.style.display = "none";
    menuToggle.innerHTML = "Abrir menu";
}

function transicionEntreSections() {
    var enlacesNav = document.querySelectorAll('nav-a');

    enlacesNav.forEach(function (enlace) {
        enlace.addEventListener('click', function (evento) {
            evento.preventDefault();

            var destino = this.getAttribute('href');
            var seccionDestino = document.querySelector(destino);

            if (seccionDestino) {
                window.scrollTo({
                    top: seccionDestino.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}
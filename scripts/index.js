
//Creación de las clases
class Activity {
    constructor({ id, title, description, imgUrl }) {
        this.id = id,
            this.title = title,
            this.description = description,
            this.imgUrl = imgUrl
    }
}
class Repository {
    constructor() {
        this.activities = []
    }
    getAllActivities() {
        return this.activities
    }
    createActivity(activity) {
        const newActivity = new Activity(activity)
        this.activities.push(newActivity)

    }
    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id)
    }
}

//Inicializo una nueva instancia de la clase Repository
const NewRepo = new Repository();

//Declaración de la función que agrega una tarjeta
function addCard(obj) {

    const { id, title, description, imgUrl } = obj // Declaración de variables por destructuting
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const deleteImg = document.createElement('img')
    img.src = imgUrl;
    deleteImg.src = "assets/bin.png"
    deleteImg.className = "delete-img"
    deleteImg.id = id


    h3.innerHTML = title;
    p.innerHTML = description;

    let newCard = document.createElement('div');
    let divImgContainer = document.createElement('div')
    divImgContainer.className = "container-image"


    newCard.appendChild(h3);
    newCard.appendChild(p);
    newCard.appendChild(divImgContainer);
    divImgContainer.appendChild(img)
    divImgContainer.appendChild(deleteImg)
    newCard.className = "tarjeta"
    newCard.id = id;


    return newCard;
}
//Declaración de la función que convierte la tarjeta en HTML
function convert() {

    let contenedor = document.getElementById('tarjetas')
    contenedor.innerHTML = "";


    let activities = NewRepo.getAllActivities();
    let mapping = activities.map(addCard)  //La variable mapping guarda un arreglo con los elementos que retorna AddCard

    //el bucle foreach recorre cada elemento del mapping y da un appendchild al contendor
    mapping.forEach(element => {
        contenedor.appendChild(element);
    })

}
//funcion para eliminar tarjetas
function deleteImg(id) {


    let activityToDelete = NewRepo.getAllActivities();
    console.log("estoy en delete")
}

//Declaración de la función manejadora al evento del botón.
function handler() {

    listaActividades = NewRepo.getAllActivities();
    console.log(listaActividades)

    //extraer lo valores de los inputs
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;

    //Esto me valida si algún input está vacío, generando un alert en caso de que informe. 
    //Si hay algo vacío, detiene el proceso.
    let mensaje = "";
    if (!nombre.trim()) {
        mensaje = mensaje + " nombre,"
    }
    if (!descripcion.trim()) {
        mensaje = mensaje + " descripcion,"
    }
    if (!imagen.trim()) {
        mensaje = mensaje + " imagen,"
    }
    if (mensaje) {
        let msg = mensaje.slice(0, -1);

        alert(`Te hace falta un: ${msg}`)
        document.getElementById('formulario').reset();
        return false;
    }
    NewRepo.createActivity({ id: Date.now(), title: nombre, description: descripcion, imgUrl: imagen });
    convert();

    //capturo el input delete



    document.getElementById('formulario').reset();
    //reinicio del formulario
}

const form = document.getElementById("formulario")
form.addEventListener("submit", function (e) {
    e.preventDefault()
})


/* clickDelete.addEventListener("clic", function () {
    console.log("hice click")

}) */






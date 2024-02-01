

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
        console.log(this.activities)
        this.activities.push(newActivity)

    }
    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id)
    }
}
//Inicializo una nueva instancia de la clase Repository
const NewRepo = new Repository();


function addCard(obj) {

    const { title, description, imgUrl } = obj

    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const img = document.createElement('img')
    img.src = imgUrl;

    h3.innerHTML = title;
    p.innerHTML = description;

    let newCard = document.createElement('div');
    let divImgContainer = document.createElement('div')
    divImgContainer.className = "container-image"

    newCard.appendChild(h3);
    newCard.appendChild(p);
    newCard.appendChild(divImgContainer);
    divImgContainer.appendChild(img)
    newCard.className = "tarjeta"

    return newCard;
}

function convert() {

    let contenedor = document.getElementById('tarjetas')
    contenedor.innerHTML = "";


    let activities = NewRepo.getAllActivities();
    let mapping = activities.map(addCard)


    mapping.forEach(element => {
        contenedor.appendChild(element);
    })

}

function handler() {

    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;
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
    document.getElementById('formulario').reset();
}



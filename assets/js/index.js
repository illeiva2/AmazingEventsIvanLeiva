// const container = document.getElementById("card-container");
// const max = document.getElementById("max")
// const min = document.getElementById("min")
// const larger = document.getElementById("larger")
// const inputText = document.getElementById('search');
// const containerChecksPlace = document.getElementById("check-place");
// const containerChecks = document.getElementById("check");
// const containerChecksCategory = document.getElementById("check-category");
// const detContainer = document.getElementById("container");
// const upStats = document.getElementById("upcoming-statistics")
// const pastStats = document.getElementById("past-statistics")
// let arrayOfEvents = [];
// let arrayOfEvent = [];
// let urlDetails = ""

// function createCards(arrayEvent, container) {
//     if (arrayEvent == 0) {
//         container.innerHTML = `<h2 class="display-1 fw-bolder text-white text-center bg-danger rounded-3">No results to display</h2>`
//         return
//     }
//     let html = ''
//     arrayEvent.forEach(eventt => html += createCard(eventt))
//     container.innerHTML = html
// }

// function createCard(eventt) {
//     return `<div class="card h-100 row py-3" style="width: 18rem">
//         <img src="${eventt.image}" class="card-img-top" alt="${eventt.name}">
//         <div class="card-body d-flex flex-column justify-content-between">
//             <h5 class="card-title fs-3">${eventt.name}</h5>
//             <div class="d-flex justify-content-between">
//                 <p>${eventt.price} US$</p>
//                 <a href="${urlDetails}?id=${eventt._id}" class="btn btn-primary flex-end">Details</a>
//             </div>
//         </div>
//     </div>`
// }

// function filterByCategory(array) {
//     let arrayCheck = Array.from(document.querySelectorAll("input[type='checkbox']"))
//         .filter(check => check.checked)
//         .map(checked => checked.value);
//     if (arrayCheck.length == 0) {
//         return array;
//     }
//     return array.filter(element => {
//         return arrayCheck.some(category => element.category.includes(category)) ||
//             arrayCheck.some(place => element.place.includes(place));
//     });
// }

// function filterByText(array, text) {
//     const lowercaseText = text.toLowerCase();
//     return array.filter(element => element.name.toLowerCase().includes(lowercaseText));
// }

// function createCheckboxes(array, category) {
//     let html = '';
//     if (category === 'Place') {
//         let place = [...new Set(array.map(elemento => elemento.place))]
//         place.forEach(place => (html += createCheckbox(place)));
//         containerChecksPlace.innerHTML = html;
//     } else if (category === 'Category') {
//         let place = [...new Set(array.map(elemento => elemento.category))]
//         place.forEach(place => (html += createCheckbox(place)));
//         containerChecksCategory.innerHTML = html;
//     }
// }

// function createCheckbox(data) {
//     return `<li class="d-flex justify-content-between px-2"><div class="form-check form-switch">
//       <input class="form-check-input" type="checkbox" value="${data}" role="switch" id="${data}">
//       <label class="form-check-label" for="${data}">${data}</label>
//     </div></li>`;
// }

function createCardDetails(eventt) {
    let cardDetail = document.createElement("div")
    cardDetail.className = "card"
    cardDetail.style.maxWidth = "80%"
    cardDetail.style.minHeight = "20rem"
    cardDetail.style.padding = "0.5rem"
    cardDetail.innerHTML = `<div class="card-body">
    <h5 class="card-title">${eventt.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${eventt.description}</h6>
    <p class="card-text">Date: ${eventt.date}</p>
    <p class="card-text">Category: ${eventt.category}</p>
    <p class="card-text">Price: ${eventt.price}</p>
    <p class="card-text">Place: ${eventt.place}</p>
    <p class="card-text">Capacity: ${eventt.capacity}</p>
    <p class="card-text">Estimated: ${eventt.estimate}</p>
  </div>`
    detContainer.appendChild(cardDetail)
}

// fetch("https://mindhub-xj03.onrender.com/api/amazing")
//     .then(response => response.json())
//     .then(datos => {
//         arrayOfEvent = datos
//         if (document.title === "Home") {
//             arrayOfEvents = arrayOfEvent.events;
//             urlDetails = "./assets/pages/details.html"
//             createFilters()
//         } else if (document.title === "Past Events") {
//             urlDetails = "../pages/details.html"
//             arrayOfEvents = arrayOfEvent.events.filter(evento => evento.date < arrayOfEvent.currentDate);
//             createFilters()
//         } else if (document.title === "Upcoming Events") {
//             urlDetails = "../pages/details.html"
//             arrayOfEvents = arrayOfEvent.events.filter(evento => evento.date > arrayOfEvent.currentDate);
//             createFilters()
//         } else if (document.title === "Details") {
//             const queryString = location.search
//             const params = new URLSearchParams(queryString)
//             const id = params.get("id")
//             let eventt = arrayOfEvent.events.find((even) => even._id == id)
//             createCardDetails(eventt)
//         } else if (document.title === "Stats") {
//             let arrayPast = arrayOfEvent.events.filter(evento => evento.date < arrayOfEvent.currentDate);
//             let arrayUp = arrayOfEvent.events.filter(evento => evento.date > arrayOfEvent.currentDate);
//             console.log(maxPercent(arrayPast));
//             max.innerHTML = `${maxPercent(arrayPast)}`
//             min.innerHTML = `${minPercent(arrayPast)}`
//             larger.innerHTML = `${largerCap(arrayOfEvent.events)}`
//             createTable(arrayUp, "Upcoming")
//             createTable(arrayPast, "Past")
//         } else {
//             arrayOfEvents = arrayOfEvent.events;
//             urlDetails = "./details.html"
//         }
//     })
//     .catch(error => console.log(error))

// function maxPercent(array) {
//     let percentage = 0;
//     let currency = 0;
//     let name = ""
//     for (element of array) {
//         currency = (((element.assistance / element.capacity) * 100).toFixed(2))
//         if (currency > percentage) {
//             percentage = currency
//             name = element.name
//         }
//     }
//     return name
// }

// function minPercent(array) {
//     let percentage = Infinity;
//     let currency = 0;
//     let name = ""
//     for (element of array) {
//         currency = (((element.assistance / element.capacity) * 100).toFixed(2))
//         if (currency < percentage) {
//             percentage = currency
//             name = element.name
//         }
//     }
//     return name
// }

// function createFilters() {
//     createCheckboxes(arrayOfEvents, "Category");
//     createCheckboxes(arrayOfEvents, "Place");
//     createCards(arrayOfEvents, container)

//     inputText.addEventListener("input", () => {
//         let filtro = filterByText(arrayOfEvents, inputText.value);
//         let filtro2 = filterByCategory(filtro);
//         createCards(filtro2, container);
//     });

//     containerChecks.addEventListener("change", () => {
//         let filtro = filterByCategory(arrayOfEvents);
//         let filtro2 = filterByText(filtro, inputText.value);
//         createCards(filtro2, container);
//     });

// }

// function largerCap(array) {
//     let object = array.reduce((minObject, object) => object.capacity > minObject.capacity ? object : minObject, array[0]);
//     return object.name
// }

// function createTable(array, category) {
//         let html = '';
//             let cat = [...new Set(array.map(elemento => elemento.category))]
//             let subArray = []
//             cat.forEach(type => {
//                 let revenues = 0
//                 let percentage = 0
//                 subArray = array.filter(only => only.category === type)
//                 for (let eventt of subArray) {
//                     if (category === "Upcoming") {
//                         revenues += eventt.price * eventt.estimate
//                         percentage = percentage + Number(((eventt.estimate / eventt.capacity) * 100).toFixed(2))
//                     } else {
//                         revenues += eventt.price * eventt.assistance
//                         percentage = percentage + Number(((eventt.assistance / eventt.capacity) * 100).toFixed(2))
//                     }
//                 }
//                 percentage = percentage / subArray.length
//                 html += createTableText(type, revenues, percentage.toFixed(2))
//             });
//             if (category === "Upcoming") {
//                 upStats.innerHTML = html;
//             } else {
//                 pastStats.innerHTML = html;
//             }
            
    
// }
// function createTableText(data, revenues, percentage) {
//     return `<tr>
//     <td>${data}</td>
//     <td>$ ${revenues.toLocaleString('de-DE')}</td>
//     <td>% ${percentage}</td>
//     </tr>`
// }



  const { createApp } = Vue

  createApp({
    data() {
      return {
        events: [],
        category: [],
        places: []
      }
    },
    mounted() {

    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            fetch("https://mindhub-xj03.onrender.com/api/amazing")
            .then(response => response.json())
            .then(data => {
                this.events = data.events
                console.log(this.events);
            })
        }
    }
  }).mount('#app')

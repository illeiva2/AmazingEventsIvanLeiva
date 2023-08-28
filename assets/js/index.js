const docLocation = document.getElementById("index-container") ? "i" :
                 document.getElementById("past-container") ? "p" :
                 document.getElementById("upcoming-container") ? "u" :
                 false;

let containerI = document.getElementById("index-container");
let containerP = document.getElementById("past-container");
let containerU = document.getElementById("upcoming-container");

const pEvents = []
const uEvents = []

for (even of data.events) {
    if (even.date > data.currentDate) {
        uEvents.push(even)
    }
    else {
        pEvents.push(even)
    }
}

function createCard(min, max) {
    if (docLocation === "i") {
        containerI.innerHTML = "";
        for (eventt of data.events) {
            if (min === 0 && max === 0) {
                createEventCard(eventt);
            } else if (eventt.price > min && eventt.price <= max) {
                createEventCard(eventt);
            }
        }
    }
    else if (docLocation === "p") {
        containerP.innerHTML = "";
        for (eventt of pEvents) {
            if (min === 0 && max === 0) {
                createEventCard(eventt);
            } else if (eventt.price > min && eventt.price <= max) {
                createEventCard(eventt);
            }
        }
    }
    else if (docLocation === "u") {
        containerU.innerHTML = "";
        for (eventt of uEvents) {
            if (min === 0 && max === 0) {
                createEventCard(eventt);
            } else if (eventt.price > min && eventt.price <= max) {
                createEventCard(eventt);
            }
        }
    }
}

function createEventCard(eventt) {
    const card = document.createElement("div");
    card.classList = "row py-3";
    card.style.width = "18rem";
    card.innerHTML = `<div class="card h-100">
        <img src="${eventt.image}" class="card-img-top" alt="${eventt.name}">
        <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title fs-3">${eventt.name}</h5>
            <div class="d-flex justify-content-between">
                <p>${eventt.price} US$</p>
                <a href="#" class="btn btn-primary flex-end">Details</a>
            </div>
        </div>
    </div>`;
    docLocation === "i"? containerI.appendChild(card) : docLocation === "u"? containerU.appendChild(card) : containerP.appendChild(card);
}

createCard(0, 0)

const low = document.getElementById('low');
const mid = document.getElementById('mid');
const high = document.getElementById('high');

low.addEventListener('change', function () {
    if (this.checked) {
        createCard(0, 50);
    }
    else {
        createCard(0, 0)
    }
});

mid.addEventListener('change', function () {
    if (this.checked) {
        createCard(50, 225);
    }
    else {
        createCard(0, 0)
    }
});

high.addEventListener('change', function () {
    if (this.checked) {
        createCard(225, Infinity);
    }
    else {
        createCard(0, 0)
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const carList = document.getElementById("car-list")
    const cars = JSON.parse(localStorage.getItem("cars")) || []

    if (cars.length === 0){
        carList.innerHTML = "<p>No cars available at the moment.</p>"
        return
    }
    cars.forEach((car, index) => {
        const card = document.createElement("div")
        card.className = "car-card"

        const thePrice = !isNaN(car.price) ? Number(car.price).toLocaleString() : "N/A"
        const transmission = car.transmission || "Not specified"


        card.innerHTML = `
        <img src="${car.photo}" alt="${car.make} ${car.model}" style= "width:100%; max-height: 200px; object-fit: cover;">
        <h3>${car.make} ${car.model}</h3>
        <p><strong>Price:</strong> KES ${thePrice}</p>
        <p><strong>Transmission:</strong> ${transmission}</p>
        <p><strong>Dealer:</strong> ${car.dealerName}</p>
        <p><strong>Location:</strong> ${car.dealerLocation}</p>
        <p><strong>Phone:</strong> ${car.dealerPhone}</p>
        
        <div class="car-buttons">
            <a href="tel:${car.dealerPhone}" class="btn contact-btn">Contact Dealer</a>
            <button class="btn remove-btn" data-index="${index}">Remove Listing</button>
        </div>    
        `
        carList.appendChild(card)
    })
    carList.addEventListener("click", (event1) => {
        if (event1.target.classList.contains("remove-btn")) {
            const index = parseInt(event1.target.dataset.index)
            cars.splice(index, 1)
            localStorage.setItem("cars", JSON.stringify(cars))
            location.reload()
        }
    })
})
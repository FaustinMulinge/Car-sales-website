document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("form")

    form.addEventListener("submit", function(event){
        event.preventDefault()

        const make = document.getElementById("make").value.trim()
        const model = document.getElementById("model").value.trim()
        const price = document.getElementById("price").value.trim()
        const photo = document.getElementById("photo").value.trim()
        const transmission = document.querySelector('input[name="Transmission"]:checked')?.value || 'Not specified'
        const dealerName = document.getElementById("dealerName").value.trim()
        const dealerLocation = document.getElementById("dealerLocation").value.trim()
        const dealerPhone = document.getElementById("dealerPhone").value.trim()

        const car = {
            make,
            model,
            price,
            photo,
            transmission,
            dealerName,
            dealerLocation,
            dealerPhone
        }
        const cars = JSON.parse(localStorage.getItem("cars")) || []
        cars.push(car)
        localStorage.setItem("cars", JSON.stringify(cars))

        alert("Car listing added successfully!")
        form.reset()

        window.location.href = "availablecars.html"
    })
})
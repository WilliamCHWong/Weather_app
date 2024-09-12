const weatherForm = document.querySelector(".weatherform")
const cityInput = document.querySelector(".cityinput")
const card = document.querySelector(".card")
const apiKey = "ae1c6a5a5db98dd133765440e5297628"

weatherForm.addEventListener("submit", event => {
    // prevent refreshing the page
    event.preventDefault();
    const city = cityInput.value;
    if (city) {
        
    }else{
        displayError("Please enter a city");
    }

})

async function getWeatherData(city){

}

function displayWeatherInfo(data){
    
}

function getWeatherEmoji(weatherId){
    
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
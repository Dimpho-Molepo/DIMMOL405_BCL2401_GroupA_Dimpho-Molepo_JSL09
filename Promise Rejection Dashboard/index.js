// Fetch a random landscape nature photo and set it as the background image
try {
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature");
    if (!res.ok) {
        throw Error("Something went wrong"); // If the API call fails, throw an error
    }
    const data = await res.json();
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `Image By: ${data.user.name}`;
} catch (err) {
    // If the API call fails, use a default background image
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`;
    document.getElementById("author").textContent = `Image by: Dodi Achmad`;
}

// Fetch Dogecoin data and display it
try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/ethereum");
    if (!res.ok) {
      throw Error("Something went wrong"); // If the API call fails, throw an error
    }
    const data = await res.json();
    document.getElementById("crypto-top").innerHTML = `
      <img src=${data.image.small} />
      <span>${data.name}</span>
    `;
    document.getElementById("crypto").innerHTML += `
      <p>🎯: R${data.market_data.current_price.zar}</p>
      <p>👆: R${data.market_data.high_24h.zar}</p>
      <p>👇: R${data.market_data.low_24h.zar}</p>
    `;
} catch (err) {
    console.error(err); // If the API call fails, log the error to the console
}

// Display the current time and update ot every second
const getCurrentTime = () => {
    const date = new Date();
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", { timeStyle: "short" });
}
setInterval(getCurrentTime, 1000);

// Fetch the current weather data based on the user's location
navigator.geolocation.getCurrentPosition(async position => {
    try {
        const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`);
        if (!res.ok) {
            throw Error("Weather data not available"); // If the API call fails, throw an error
        }
        const data = await res.json();
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("weather").innerHTML = `
            <img src=${iconUrl} />
            <p class="weather-temp">${Math.round(data.main.temp)}º</p>
            <p class="weather-city">${data.name}</p>
        `;
        } catch (err) {
        console.error(err); // If the API call fails, log the error to the console
        }
});

// 🟥 Extra feature
// Fetch a random Stoic quote and display it
try {
    const quote = await fetch(`https://stoic.tekloon.net/stoic-quote`);
    if (!quote.ok) {
      throw Error("Something went wrong"); // If the API call fails, throw an error
    }
    const data = await quote.json();
    document.getElementById("quote-text").textContent = `${data.quote} - ${data.author}`;
} catch (err) {
    console.error(err); // If the API call fails, log the error to the console
}
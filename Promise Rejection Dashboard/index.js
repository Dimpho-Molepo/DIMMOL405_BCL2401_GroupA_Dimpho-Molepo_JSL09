try {
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature");
    const data = await res.json();
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `Image By: ${data.user.name}`;
} catch (err) {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`;
    document.getElementById("author").textContent = `Image by: Dodi Achmad`;
}


try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin");
    if (!res.ok) {
      throw Error("Something went wrong");
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
    console.error(err);
}
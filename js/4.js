const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

const now = new Date();

const upcomingCities = Object.keys(concerts)
    .filter(city => concerts[city] > now)
    .sort((a, b) => concerts[a] - concerts[b]); 
console.log(upcomingCities);

document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById('4');
    outputDiv.innerHTML = `<p>Upcoming concerts: ${upcomingCities.join(', ')}</p>`;
});

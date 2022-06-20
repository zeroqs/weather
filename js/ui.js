export class Ui {
    constructor() {
        this.contentDay = document.querySelector('.weather-day-now')
        this.contentForecast = document.querySelector('.weather-forecast')
        this.city = document.querySelector('.weather-content')
    }



    createDay(data) {
        this.contentDay.innerHTML = `
        <div class="short-forecast flex items-center flex-auto flex-wrap">
            <img class="" src="${data.current.condition.icon}" alt="img-weather">
            <h1 class="font-bold text-2xl">${data.current.condition.text}</h1>
        </div>
        <div class="temp text-xl font-semibold">
            ${data.current.feelslike_c}&#176;
        </div>
        `;
    }

    createForecast(dataForecast) {
        const days = [
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
            'Воскресенье'
          ];
        dataForecast.forEach((item) => {
            let date = new Date(item.date)
            let card = document.createElement('div')
            card.innerHTML = `
            <div class="card-weather flex flex-col justify-center items-center min-w-[120px]">
                <h2 class="font-semibold text-xl">${days[date.getDay()]}</h2>
                <img src="${item.day.condition.icon}" alt="">
                <h3 class="font-semibold text-xl">${Math.floor(item.day.maxtemp_c)}&#176;</h3>
                <h4 class="font-semibold text-lg text-slate-300">${Math.floor(item.day.mintemp_c)}&#176;</h4>
            </div>
            `;
            this.contentForecast.appendChild(card);
        })
        
    }
    clearUI() {
        this.contentDay.innerHTML = "";
        this.contentForecast.innerHTML = "";
      }
}
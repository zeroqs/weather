import {Fetch} from './fetch.js'
import {Ui} from './ui.js'

const ft = new Fetch()
const ui = new Ui()
window.addEventListener('click', (e) => {
    if (e.path[0].value) {
        let city = e.path[0].value;
        let cityRu = e.path[0].value;
        ft.getData(city).then((data) => {
            ui.clearUI()
            ui.createDay(data)
            ui.createForecast(data.forecast.forecastday)
        })
    }
})





export class Fetch {
  async getData(city) {
    const key = "3445d5b067c440e597a230627221906"
    const response =  await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7&aqi=no&alerts=no`)
    const data = await response.json()
    return await data
    }
}
export const weatherObj = {
  weather: document.querySelector(".weather"),
  temp: document.querySelector(".temp"),
  curLat: "",
  curLon: "",
  url: "",
  getWeather(position) {
    this.curLat = position.coords.latitude;
    this.curLon = position.coords.longitude;
    (this.url = `api.openweathermap.org/data/2.5/weather?lat=${this.curLat}&lon=${this.curLon}&appid=59cd4115a815a56a919458303f2f2979`),
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => {
          console.dir(data);
          data.nameForm, data.weather[0].main;
        });
  },
  errWeather() {
    console.log("error");
  },
};

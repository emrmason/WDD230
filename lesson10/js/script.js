const apiURL = "api.openweathermap.org/data/2.5/weather?id=5861897&appid=6029cdcec6e4ff661fe81b24b74ac429";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.table(jsonObject);
  });
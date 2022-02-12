//alert('Hello from my extension!');
const url=window.location.href,
      urlServer = 'http://127.0.0.1:4777/ch_fc/set_url',
      data = { url: url };
//console.log(url);
const request = new Request(urlServer,{
  method: 'POST', // или 'PUT'
  body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
  headers: {
    'Content-Type': 'application/json'
  }
});
try {
  fetch(request)
    .then((response) => {
      response.json().then((response2) => {
        console.log(response2);
      });
    })
    .then((data) => {
      console.log(data);
    });
} catch (error) {
  console.error('Ошибка:', error);
}

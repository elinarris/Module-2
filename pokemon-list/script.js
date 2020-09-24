const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const dataForJSON = xhr.responseText;
    const data = JSON.parse(dataForJSON);
    showData(data.objects[0].pokemon);
    // return showData(data);
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    return console.log(xhr.responseText);
  }
};

function showData(pokemon) {
  for (let i = 0; i < pokemon.length; i++) {
    const h1 = document.createElement("h1");
    h1.textContent = pokemon[i].name;
    document.body.appendChild(h1);
  }
}

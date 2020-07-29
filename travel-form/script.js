const form = document["my-form"];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = form["first-name"].value;
  const lastName = form["last-name"].value;

  const age = form.age.value;

  const gender = form.gender.value;

  const location = form.states.value;

  let input = [];

  for (i = 0; i < form.diet.length; i++) {
    if (form.diet[i].checked) {
      input.push(form.diet[i].value);
    }
  }

  const preferredDiet = input;

  alert(`  Name: ${firstName} ${lastName}
  Age: ${age}
  Sex: ${gender}
  Location: ${location}
  Diet: ${preferredDiet}`);
});

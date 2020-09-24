const todoForm = document.todoForm;

const complete = {
  completed: true,
  title: "Completed",
};

function createTodo(data) {
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const delButton = document.createElement("button");
  const input = document.createElement("input");
  input.type = "checkbox";

  h1.textContent = data.title;
  h2.textContent = data.price;
  h3.textContent = data.description;
  img.src = data.imgUrl;
  delButton.textContent = "delete";
  input.textContent = data.completed;

  document.body.append(h1);
  document.body.append(h2);
  document.body.append(h3);
  document.body.append(img);
  document.body.append(delButton);
  document.body.append(input);

  

  delButton.addEventListener("click", function () {
    axios
      .delete("https://api.vschool.io/PaulaDavis/todo/" + data._id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  });

  input.addEventListener("change", function () {
    axios
      .put("https://api.vschool.io/PaulaDavis/todo/" + data._id, complete)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  });
}

axios
  .get("https://api.vschool.io/PaulaDavis/todo")
  .then((response) => createManyTodos(response.data))
  .catch((error) => console.log(error));

function postTodo(data) {
  axios
    .post("https://api.vschool.io/PaulaDavis/todo", data)
    .then((response) => createTodo(response))
    .catch((error) => console.log(error));
}

function createManyTodos(manyDatas) {
  for (let i = 0; i < manyDatas.length; i++) {
    createTodo(manyDatas[i]);
  }
  console.log(manyDatas);
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTodo = {
    title: todoForm.title.value,
    completed: todoForm.completed.value,
    price: todoForm.price.value,
    description: todoForm.description.value,
    imgUrl: todoForm.imgUrl.value,
  };

  console.log(newTodo);

  createTodo(newTodo);

  postTodo(newTodo);
});

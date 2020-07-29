const button = document.getElementById("button");
let count = 0;

setTimeout(()=>{
    alert(`${count.valueOf()}`);
    }, 15000);

button.addEventListener("click", function (event) {
  count++;

  localStorage.setItem("count", count);
});
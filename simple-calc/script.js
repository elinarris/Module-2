const firstForm = document["multiplication"];
const secondForm = document["addition"];
const thirdForm = document["subtraction"];

//multiplication form below
firstForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const num1 = firstForm.first.value;
  const num2 = firstForm.second.value;

  alert(`You want to multiply ${num1} and ${num2}.`);

  function product(Num1, Num2) {
    const result = parseInt(Num1) * parseInt(Num2);
    return result;
  }

  const prod = product(num1, num2);

  //DOM part//
  const p = document.createElement("p");
  p.textContent = `Answer: ${prod}`;
  document.querySelector('#div1').append(p);
  //end of DOM//

  firstForm.first.value = "";
  firstForm.second.value = "";
});

//addition form below
secondForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const num1 = secondForm.first.value;
  const num2 = secondForm.second.value;

  alert(`You want to add ${num1} and ${num2}.`);

  function sum(x, y) {
    const result = parseInt(x) + parseInt(y);
    return result;
  }

  const Sum = sum(num1, num2);

  //DOM begins//
  const p = document.createElement("p");
  p.textContent = `Answer: ${Sum}`;
  document.querySelector('#div2').append(p);
  //DOM ends//

  secondForm.first.value = "";
  secondForm.second.value = "";
});

//subtraction form below
thirdForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const num1 = thirdForm.firstNum.value;
  const num2 = thirdForm.secondNum.value;

  alert(`You want to subtract ${num1} from ${num2}.`);

  function difference(num1, num2) {
    diffrnc = parseInt(num1) - parseInt(num2);
    return diffrnc;
  }

  const diff = difference(num1, num2);

  //DOM BEGINS//
  const p = document.createElement("p");
  p.textContent = `Answer: ${diff}`;
  document.querySelector('#div3').append(p);
  //DOM ENDS//

  thirdForm.firstNum.value = "";
  thirdForm.secondNum.value = "";
});

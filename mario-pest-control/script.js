const form = document["main"];

form.addEventListener ("submit", function(event) {
  event.preventDefault();

  const Goombas = form.goombas.value
  const Bob = form.bombs.value
  const Cheep = form.cheeps.value

  function theMath (x, y, z) {

    const baddies = [
      { name: "Goombas", price: 5 },
      { name: "Bob-ombs", price: 7 },
      { name: "Cheep-cheeps", price: 11 },
    ];

     if (x, y, z === Goombas, Bob, Cheep) {
       x = baddies[0].price * form.goombas.value
       y = baddies[1].price * form.bombs.value
       z = baddies[2].price * form.cheeps.value
     } else {
       alert('You got nothing.')
     }

    const allAdded = parseInt(x) + parseInt(y) + parseInt(z)
    return allAdded
  };

  const total = theMath(Goombas, Bob, Cheep);

  //dom below
  const p = document.createElement('p');
  p.textContent = `Total: ${total} Coins`;
  const bottomDiv = document.querySelector('#subtotal');
  bottomDiv.append(p);

  form.goombas.value = "";
  form.bombs.value = "";
  form.cheeps.value = "";
  });

 
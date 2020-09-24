const gameActive = true;

class Player {
  constructor(name, totalCoins, status, hasStar) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
  }
  setName(namePicked) {
    return (this.name = namePicked);
  }
  gotHit(currentStatus) {
    return (this.status = currentStatus);
  }
  addCoin() {
    return this.totalCoins++;
  }
  printInventory() {
    return console.log(`
    Name: ${this.name}
    Status: ${this.status}
    Total Coins: ${this.totalCoins}
    Star: ${this.hasStar}`);
  }
  gotPoweredUp() {
    return (this.hasStar = true);
  }
  bigBig() {
    return console.log(`${Player.name} is BIG!`);
  }
  smallGuy() {
    return console.log(`${Player.name} is small.`);
  }
  dead() {
    return (gameActive = false);
  }
  randomRange() {
    Math.floor(Math.random() * 3);
    if (randomRange() === 0) {
      return gotHit();
    } else if (randomRange() === 1) {
      return gotPoweredUp();
    } else if (randomRange() === 2) {
      return addCoin();
    }
  }
  otherFunc() {
    if (this.status === "Powered Up") {
      gotPoweredUp();
    } else if (this.status === "Big") {
      bigBig();
    } else if (this.status === "Small") {
      smallGuy();
    } else if (this.status === "Dead") {
      dead();
    }
  }
}

const Elinarris = new Player("Paula Davis", 37, "Big", false);

console.log(Elinarris.name);
console.log(Elinarris.totalCoins);
console.log(Elinarris.status);
console.log(Elinarris.hasStar);
console.log(Elinarris.setName("Luigi"));
console.log(Elinarris.gotHit("Powered Up"));
console.log(Elinarris.printInventory());
console.log(Elinarris.status);
console.log(randomRange());

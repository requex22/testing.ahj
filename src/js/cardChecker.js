export default class cardChecker {
  constructor() {
    this.buttonClick();
  }

  buttonClick() {
    const btn = document.querySelector("button");
    const inpt = document.querySelector("input");

    btn.addEventListener("click", () => {
      this.lunCheck(inpt.value);
      this.cardCheck(inpt.value);
    });
  }

  lunCheck(value) {
    if (value.length < 4) {
      return alert("Слишком короткий номер карты");
    } else {
      const arr = (value + "")
        .split("")
        .reverse()
        .map((x) => parseInt(x));

      const lastDigit = arr.splice(0, 1)[0];
      let sum = arr.reduce(
        (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
        0
      );
      sum += lastDigit;
      return sum % 10 === 0;
    }
  }

  cardCheck(value) {
    const visaElectron = document.querySelector('[data-name="visa-electron"]');
    const masterCard = document.querySelector('[data-name="mastercard"]');
    const discover = document.querySelector('[data-name="discover"]');
    const americanExpress = document.querySelector(
      '[data-name="american-express"]'
    );

    if (
      value.indexOf("4844") === 0 ||
      value.indexOf("4026") === 0 ||
      value.indexOf("417500") === 0 ||
      value.indexOf("4508") === 0 ||
      value.indexOf("4913") === 0 ||
      value.indexOf("4917") === 0
    ) {
      visaElectron.classList.add("span-visible");
      return "visa";
    } else if (
      value.indexOf("51") === 0 ||
      value.indexOf("52") === 0 ||
      value.indexOf("53") === 0 ||
      value.indexOf("54") === 0 ||
      value.indexOf("55") === 0 ||
      value.indexOf("222100") === 0
    ) {
      masterCard.classList.add("span-visible");
      return "mc";
    } else if (value.indexOf("34") === 0 || value.indexOf("37") === 0) {
      americanExpress.classList.add("span-visible");
      return "ae";
    } else if (
      value.indexOf("637") === 0 ||
      value.indexOf("638") === 0 ||
      value.indexOf("639") === 0
    ) {
      discover.classList.add("span-visible");
      return "ds";
    }
  }
}

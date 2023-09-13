document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top;

        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    });
  });
});

const priceInJPY = 5000;

const currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);

let priceInIDR = priceInJPY * currency.get("JPY");
console.log(priceInIDR + " " + priceInJPY + " " + currency.get("JPY"));

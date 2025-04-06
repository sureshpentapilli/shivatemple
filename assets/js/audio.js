window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('sticky-top');
    } else {
      navbar.classList.remove('sticky-top');
    }
  });


  document.getElementById("slot").addEventListener("change", function () {
    const slot = this.value;
    const priceSection = document.getElementById("priceSection");
    const priceDisplay = document.getElementById("priceDisplay");
    let price = 0;

    if (slot.endsWith("1")) price = 1000;
    else if (slot.endsWith("2")) price = 5000;
    else if (slot.endsWith("3")) price = 10000;
    else if (slot.endsWith("4")) price = 100000;

    priceDisplay.textContent = `₹${price.toLocaleString()}`;
    priceSection.classList.remove("d-none");
  });

  document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const bookingData = {
      slot: document.getElementById("slot").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      location: document.getElementById("location").value,
      price: document.getElementById("priceDisplay").textContent
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    window.location.href = "thank-you.html";
  });


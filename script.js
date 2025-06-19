function generateBook(event) {
  event.preventDefault();

  let output = document.querySelector(".book-recommendation");
  output.innerHTML = ""; // Clear previous text

  new Typewriter(output, {
    strings: "Love Hypothesis",
    autoStart: true,
    delay: 25,
  });
}

let bookForm = document.querySelector("#book-form");
bookForm.addEventListener("submit", generateBook);

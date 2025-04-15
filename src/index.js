function movieRecs(event) {
  event.preventDefault();

  new Typewriter("#movieRecs", {
    strings:
      "“Clueless” (1995) – A classic! Funny, stylish, and surprisingly heartfelt.",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let movieRecsElement = document.querySelector("#movie-recs-form");
movieRecsElement.addEventListener("submit", movieRecs);

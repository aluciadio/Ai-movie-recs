function movieRecs(response) {
  new Typewriter("#movieRecs", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function getRecs(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "caccbbtca33o481dda0074f34f777ffb";
  let context =
    "You are a movie expert and love talking about movies.Please give 2 recomendations and ALWAYS separate each line with a <br />. Make sure to follow the user instructions.";
  let prompt = `User instructions: ${instructionsInput.value}`;
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let movieRecsElement = document.querySelector("#movieRecs");
  movieRecsElement.classList.remove("hidden");
  movieRecsElement.innerHTML =
    "📝Getting your recomendations, <small> 4-5 seconds<small>";

  axios.get(url).then(movieRecs);
}

let movieRecsElement = document.querySelector("#movie-recs-form");
movieRecsElement.addEventListener("submit", getRecs);

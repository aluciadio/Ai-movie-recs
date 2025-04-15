function movieRecs(response) {
  console.log("getting the recomendations");
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

  axios.get(url).then(movieRecs);

  console.log("Thinking");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
}

let movieRecsElement = document.querySelector("#movie-recs-form");
movieRecsElement.addEventListener("submit", getRecs);

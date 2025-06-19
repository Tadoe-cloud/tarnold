function displayPoem(response) {
  
  document.querySelector("#loading").classList.add("hidden");

  
  document.querySelector(".submit-button").disabled = false;

  
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  
  document.querySelector("#poem").scrollIntoView({ behavior: "smooth" });
}

function generatePoem(event) {
  event.preventDefault();


  let instructionsInput = document.querySelector("#user-instructions");
  let topic = instructionsInput.value.trim();

  if (!topic) {
    alert("Please enter a topic for your poem.");
    return;
  }

  
  document.querySelector("#poem").innerHTML = "";
  document.querySelector("#loading").classList.remove("hidden");
  document.querySelector(".submit-button").disabled = true;


  let apiKey = "69d4501e3519toa844fc8e50131f90ba";
  let prompt = `User instructions: Generate a poem about ${topic}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions. Do not include the title to the Poem. Sign the poem with 'Tadoe' inside a <strong> element at the end of the poem and not at the beginning.";


  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem).catch(function (error) {
    document.querySelector("#loading").classList.add("hidden");

}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);


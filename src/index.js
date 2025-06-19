Function displayPoem(response){

  console.log("poem generated");
  
  new Typewriter('#poem', {
  strings: response.data.answer
  autoStart: true,
   delay: 1,
   cursor: "",
});
}
Function generatePoem(event){
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
 let apiKey = "69d4501e3519toa844fc8e50131f90ba";
  let prompt = 'User instructions: Generate a poem about ${instructionsInput.value}';
  let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions. Do not include the title to the Poem. Sign the poem with 'Tadoe'inside a strong> element at the end of the poem and not at the beginning ";
  console.log("Generating poem");
  console.log('Prompt: ${prompt}');
  console.log('Context: ${context}');
  axios.get(apiURL).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit",generatePoem);

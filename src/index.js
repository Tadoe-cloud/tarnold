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
 let apiKey = "69d4501e3519toa844fc8e50131f90ba";
  let prompt = "Generate a poem about Flowers";
  let context = "";
  let apiURL = "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}";
  console.log("generating poem");
  axios.get(apiURL).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit",generatePoem);

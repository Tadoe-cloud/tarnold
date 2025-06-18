Function generatePoem(event){
  event.preventDefault();

  alert("Generating Poem");
}
let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit",generatePoem);

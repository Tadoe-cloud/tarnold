Function generatePoem(event){
  event.preventDefault();

 new Typewriter('#poem', {
  strings:"A wreathèd garland of deservèd praise",
  autoStart: true,
   delay: 1,
   cursor: "",
});
}
let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit",generatePoem);

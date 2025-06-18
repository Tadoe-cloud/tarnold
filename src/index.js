Function generatePoem(event){
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "A wreathèd garland of deservèd praise";
}
let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit",generatePoem);

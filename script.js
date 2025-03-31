// SELECT ADD AND REMOVE BUTTONS AND CONTAINER
let Button = document.querySelector("#addGrid");
let rmButton = document.querySelector("#removeGrid");
let container = document.querySelector("#container");

let contSize = 300;

// CONTAINER SIZE FIXED
container.style.width = `${contSize}px`;
container.style.height = `${contSize}px`;

// BUTTON THAT ADDS A GRID ACCORDING TO THE USERS INPUT
Button.addEventListener("click", () => {
  let gen = prompt("how many grids do you want?"); //Input a number between  1 - 100

  for (i = 0; i < gen * gen; i++) {
    let div = document.createElement("div");
    container.append(div);

    div.classList.toggle("item");

    // CALCULATION TO GET THE SIZE OF EACH DIV SQUARE HEIGHT & WIDTH
    let divsize = contSize / gen;

    div.style.width = `${divsize}px`;
    div.style.height = `${divsize}px`;
    div.style.boxSizing = "border-box";
    div.style.border = "1px solid black";

    // BUTTON EVENT THAT REMOVES THE GRID
    rmButton.addEventListener("click", () => {
      div.remove();
    });
  }

  let item = document.querySelectorAll(".item");

  // ITERATE THROUGH ALL ELEMENTS AND APPLY THE RANDOM COLOR FUNCTION ON MOUSE OVER EVENT
  item.forEach((Element) => {
    Element.addEventListener("mouseover", changeBgC);
  });

  // FUNCTION THAT GENERATES A RANDOM COLOR
  function changeBgC(raw) {
    let range = Math.floor(Math.random() * 16777215).toString(16);
    let c = "#" + range;
    raw.target.style.backgroundColor = c;
  }

  // // CHANGE OPACITY BY 10%
  // function darken(dark) {
  //   dark.target.style.opacity = "+50%";
  // }

  // item.forEach((Element) => {
  //   Element.addEventListener("mouseover", darken);
  // });
});

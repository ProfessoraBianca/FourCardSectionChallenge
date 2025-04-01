const img = document.querySelector("#btnImage");
const texts = document.querySelector(".texts");
const para = document.querySelectorAll(".parag");
const card = document.querySelectorAll(".cards");
const imageSources = ["1.png" , "2.png"];
img.addEventListener("click", function(){
    if (img.src.includes("1.png")){
        img.setAttribute("src", '2.png');
        document.body.style.backgroundColor = "rgb(44, 45, 48)";
        texts.style.color = "white";
        para.forEach((par) => par.style.color = "rgb(212, 212, 212)");
        card.forEach((cards) => cards.style.backgroundColor = "rgb(44, 45, 48)");
        card.forEach((cards) => cards.style.color = "white");
    } else {
        img.setAttribute("src", '1.png');
        document.body.style.backgroundColor = "initial";
        texts.style.color = "initial";
        card.forEach((cards) => cards.style.backgroundColor = "initial");
        card.forEach((cards) => cards.style.color = "initial");
        para.forEach((par) => par.style.color = "initial");
    }
});

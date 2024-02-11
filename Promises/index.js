let btnText = document.querySelector(".btntxt");
let btnHtml = document.querySelector(".btnhtml");
let contentText = document.querySelector(".content")

let string = `<p>Loreem gujkuikul hkiyikyuty </p><strong>Good Grace</strong >`;



btnText.addEventListener("click", () => {
    contentText.innerText=string;
});
btnHtml.addEventListener("click", () => {

    contentText.innerHTML=string;
});
   
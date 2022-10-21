const btn = document.querySelector(".btn");
const ul = document.querySelector(".ul");
const getImage = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      const newLi = document.createElement("li");
      newLi.innerHTML = `<div id='container'>
            <div class='container'>
            <div class='img_div'><img src='${data.message}'/><div>
            
            </div>
            </div>`;
      ul.appendChild(newLi);
    })
    .catch((er) => console.log(er));
};
btn.addEventListener("click", getImage);

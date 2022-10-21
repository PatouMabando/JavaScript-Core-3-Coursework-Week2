const btn = document.querySelector(".btn");
const ul = document.querySelector(".ul");
const getImage = () => {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((res) => res.json())
    .then((data) => {
      const newLi = document.createElement("li");
      newLi.innerHTML = `<div id='container'>
            <div class='container'>
            <div class='img_div'><img src='${data.img}'/><div>
            
            </div>
            </div>`;
      ul.appendChild(newLi);
    })
    .catch((er) => console.log(er));
};
btn.addEventListener("click", getImage);

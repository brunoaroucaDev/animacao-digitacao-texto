const text = document.querySelector(".dynamic-text");
const array = ["Developer", "Frontend", "Ui Design", "Freelancer"];

const textLoad = () => {
  array.forEach((item, index) => {
    const temp = 4000 * index;

    setTimeout(() => {
      text.textContent = item;
    }, temp);
  });
};
textLoad();
setInterval(textLoad, 16000);

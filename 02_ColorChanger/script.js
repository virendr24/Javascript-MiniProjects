const changeBtn = document.getElementById("changeBtn");
const colorCode = document.getElementById("colorCode");

function getRandomColor(){
  const letters = "0123456789ABCDEF";
  let color = "#";
   for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
changeBtn.addEventListener("click",() => 
{
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = `Current Color:${newColor}`;
});
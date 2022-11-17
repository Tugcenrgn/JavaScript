const tabsBox = document.querySelector(".tabs-box");
const arrowIcons = document.querySelectorAll(".icon i");
const allTabs = document.querySelectorAll(".tab");

let isDragging = false; //it's false by default so that the dragging function does not work when the mouse is not click

const handleIcons = () => {
  let scrollValue = Math.round(tabsBox.scrollLeft);
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  //if the scrollValue is greater than zero the icon will be appear else disappear
  arrowIcons[0].parentElement.style.display = scrollValue > 0 ? "flex" : "none";
  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth > scrollValue ? "flex" : "none";
};

//this function works if icons clicked. if the clicked icon has the left id, reducing from the scrollLeft func else adding
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
    setTimeout(() => handleIcons(), 50); //calling handleIcons funciton after 50miliseconds
  });
});

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
  });
});

//Function that will run when dragged with the mouse.
const dragging = (e) => {
  if (!isDragging) return; //if it's false the function will return
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons();
};

const notDragging = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousedown", () => (isDragging = true)); //if mouse clicked the isDragging will be changed to true
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", notDragging); //if mouse is not click anymore the isDragging veriable will be changged to false

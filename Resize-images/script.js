const uploadBox = document.querySelector(".upload-box");
const previewImg = uploadBox.querySelector("img");
const fileInput = uploadBox.querySelector("input");
const widthInput = document.querySelector(".width input");
const heightInput = document.querySelector(".height input");
const ratioInput = document.querySelector(".ratio input");
const downloadBtn = document.querySelector(".download-btn");
const qualityInput = document.querySelector(".quality input");

let ogImageRatio;

const loadFile = (e) => {
  const file = e.target.files[0];
  if (!file) return; //return if user has not selected any files
  previewImg.src = URL.createObjectURL(file); //creates a URL of the passed object
  previewImg.addEventListener("load", () => {
    //natural.. property returns the original width or height of an image
    widthInput.value = previewImg.naturalWidth;
    heightInput.value = previewImg.naturalHeight;
    ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
    document.querySelector(".wrapper").classList.add("active"); //once image loaded adding active class in the wrapper
  });
};

widthInput.addEventListener("keyup", () => {
  //Updating height value according to ratio checkbox
  const height = ratioInput.checked
    ? widthInput.value / ogImageRatio
    : heightInput.value;
  heightInput.value = Math.floor(height);
});

heightInput.addEventListener("keyup", () => {
  //Updating width value according to ratio checkbox
  const width = ratioInput.checked
    ? heightInput.value * ogImageRatio
    : widthInput.value;
  widthInput.value = Math.floor(width);
});

const resizeAndDownload = () => {
  const canvas = document.createElement("canvas");
  const a = document.createElement("a");
  const ctx = canvas.getContext("2d"); //getContext method returns a drawing context on the canvas
  //if quality box is checked pass 0.7 to imgQuality else pass 1.0
  //1.0 is 100% 0.7 is 70%
  const imgQuality = qualityInput.checked ? 0.7 : 1.0;

  //setting canvas height and width according to the input values
  canvas.width = widthInput.value;
  canvas.height = heightInput.value;

  //drawImage(image, x-coordinate, y-coordinate, width, height)
  ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);

  a.href = canvas.toDataURL("image/jpeg", imgQuality);
  a.download = new Date().getTime(); //passing current time as download value
  document.body.appendChild(canvas); //clicking a element so the file download
  a.click();
};

downloadBtn.addEventListener("click", resizeAndDownload);
uploadBox.addEventListener("click", () => fileInput.click()); //this is for click the fileInput when clicking the uploadbox
fileInput.addEventListener("change", loadFile);

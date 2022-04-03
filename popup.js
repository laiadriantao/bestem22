import html2canvas from 'html2canvas';

// Initialize button with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

function takeScreenshot(){

  //taking screenshot of video stream container
  html2canvas(document.querySelector("#video-stream-container")).then(function(canvas) {
    document.body.appendChild(canvas);
    var a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'screenshot.png';
    a.click();
  });

}

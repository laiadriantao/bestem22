//function to make a screenshot of the current page
import html2canvas from 'html2canvas';

//take a screenshot of the current page
export function takeScreenshot() {
  html2canvas(document.body).then(function(canvas) {
    //document.body.appendChild(canvas);
    var a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'screenshot.png';
    a.click();
  });
}



var ctx, img, imgd, pixelArray, str;

window.onload = function() {
  console.log("1")
  ctx = document.getElementById('cnv').getContext('2d');
  console.log("2")
  img = document.getElementById("test1");
  console.log("3")
  ctx.drawImage(img,0,0);
  console.log("3")
  imgd = ctx.getImageData(0, 0, width, height);
  console.log("4")
  pixelArray = imgd.data;
  console.log("5")
  str = canvasArrToString(pixelArray);
  console.log("done done")
}

function canvasArrToString(a) {
  var s = "";
  // Removes alpha to save space.
  for (var i = 0; i < pix.length; i += 4) {
    console.log(i);
    s += (String.fromCharCode(pix[i]) +
      String.fromCharCode(pix[i + 1]) +
      String.fromCharCode(pix[i + 2]));
  }
  console.log("done" + s);
  return s;
}

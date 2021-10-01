window.onload = function () {
    initColorPicker();
};

function initColorPicker() {
    let colorBox = document.getElementById("color-box")
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPickers = document.getElementByClassName("picker");
    setColorPickerEventListeners(colorBox, rgb, colorPicker);
}

function setColorPickerEventListeners(element, colors, pickerElements) {
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerLen; i++) {
        pickerElements[i].addEventListener('change', () => {
            console.log("Red value: ", rgb.red.value);
            let red = colors.red.value;
            let green = colors.green.value;
            let blue = colors.blue.value;
            setElementBGColor(element, red, green, blue );
            setDisplayValues( red, green, blue)
        });
    }
}

function setBoxBGColor(bgElement, red, green, blue) {
    let rgbVal = [red, green, blue].join(',');
    bgElement.style.backgroundColor = "rgb(" + rgbVal + ")";
}

function setDisplayValues(red, green, blue) {
   let redVal = document.getElementByIh("redVal");
   let greenVal = document.getElementByIh("greenVal");
   let blueVal = document.getElementByIh("blueVal");

   redVal.innerText = red;
   greenVal.innerText = green;
   blueVal.innerText = blue;
}
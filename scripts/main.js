// Get relevant elements from index
var inputArraySize = document.getElementById('arraySize');
var inputArrayGenerate = document.getElementById("arrayGenerate");
let arrayContainer = document.getElementById("arrayContainer");

var algorithmButtons = document.querySelectorAll(".algorithm button");

// Set array variables
var divSizes = [];
var divs = [];
var spacing = 0.1;

// Setup running code
window.onload = generateArray();

// Add event to button/slider
inputArrayGenerate.addEventListener("click", generateArray);
inputArraySize.addEventListener("input", generateArray);
for(let i = 0; i < algorithmButtons.length; i++)
{
    algorithmButtons[i].addEventListener("click", runAlgorithm);
}

function generateArray()
{
    arrayContainer.innerHTML = "";
    for(let i = 0; i < inputArraySize.value; i++)
    {
        divSizes[i] = Math.floor(Math.random() * 0.5 * (inputArraySize.max - inputArraySize.min)) + 10;
        divs[i] = document.createElement("div");
        arrayContainer.appendChild(divs[i]);
        divs[i].style = "margin:0%" + spacing + "%; background-color:gray; width:" + (100 / inputArraySize.value - (2 * spacing)) + "%; height:" + (divSizes[i]) + "%;";
    }
}

function disableButtons()
{
    for(let i = 0; i < algorithmButtons.length; i++)
    {
        algorithmButtons[i].disabled = true;
    }

    inputArraySize.disabled = true;
    inputArrayGenerate.disabled = true;
}

function runAlgorithm()
{
    disableButtons();

    this.classList.add("selected");
    switch(this.innerHTML)
    {
        case "Selection":
            Selection();
            break;
        case "Bubble":
            Bubble();
            break;
        case "Insertion":
            Insertion();
            break;
        case "Merge":
            Merge();
            break;
        case "Quick":
            Quick();
            break;
        case "Heap":
            Heap();
            break;
        case "Counting":
            Counting();
            break;
        case "Radix":
            Radix();
            break;
        case "Bucket":
            Bucket();
            break;
    }
}
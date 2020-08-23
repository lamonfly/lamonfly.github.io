let inputSolveSpeed = document.getElementById("solveSpeed");
var timeDelay =  Math.abs(inputSolveSpeed.value - inputSolveSpeed.max);

inputSolveSpeed.addEventListener("input", setDelay);

function setDelay()
{
    // Make high number faster and low number slower
    // Scaled by array size
    timeDelay =  Math.abs(inputSolveSpeed.value - inputSolveSpeed.max);
}

function updateDiv(container, height, color)
{
    container.style=" margin:0% " + spacing + "%; width:" + (100 / inputArraySize.value - ( 2 * spacing)) + "%; height:" + height + "%; background-color:" + color + ";";
}

function enableButtons()
{
    for(let i = 0; i < algorithmButtons.length; i++)
    {
        algorithmButtons[i].classList = [];

        algorithmButtons[i].disabled = false;
    }

    inputArraySize.disabled = false;
    inputArrayGenerate.disabled = false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
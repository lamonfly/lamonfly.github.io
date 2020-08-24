async function Bubble(){
    for (let i = 0; i < inputArraySize.value - 1; i++)
    {
        // last I elements are already in place
        for (var j = 0; j < inputArraySize.value - i - 1; j++)
        {
            updateDiv(divs[j],divSizes[j], "darkslategray");
            await sleep(timeDelay);

            if (divSizes[j] > divSizes[j + 1])
            {
                updateDiv(divs[j+1],divSizes[j+1], "lightslategray");
                updateDiv(divs[j],divSizes[j], "lightslategray");
                // swap
                var temp = divSizes[j];
                await sleep(timeDelay);

                divSizes[j] = divSizes[j + 1];
                await sleep(timeDelay);

                divSizes[j + 1] = temp;
                await sleep(timeDelay);

                updateDiv(divs[j+1],divSizes[j+1], "lightslategray");
                updateDiv(divs[j],divSizes[j], "lightslategray");
            }
            updateDiv(divs[j], divSizes[j], "gray");
        }
        // j is now biggest recently ordered
        updateDiv(divs[j], divSizes[j], "black");
    }
    updateDiv(divs[0], divSizes[0], "black");

    enableButtons();
}
async function Insertion()
{
    for(var j = 0; j < inputArraySize.value; j++)
    {
        updateDiv(divs[j], divSizes[j], "darkslategray");

        var key = divSizes[j];
        await sleep(timeDelay);
        let i = j - 1;
        await sleep(timeDelay);

        // Move elements of divSizes[0..i-1], that are greater than key, to one
        // position ahead of their current position
        while( i >= 0 && divSizes[i] > key)
        {
            updateDiv(divs[i], divSizes[i], "darkslategray");
            if (j != i+1)
                updateDiv(divs[i+1], divSizes[i+1], "black");

            divSizes[i+1] = divSizes[i];
            await sleep(timeDelay);
            await sleep(timeDelay);
            await sleep(timeDelay);
    
            updateDiv(divs[i], divSizes[i], "gray");
            i--;
        }

        if (i >= 0)
        updateDiv(divs[i], divSizes[i], "gray");
        updateDiv(divs[i+1], divSizes[i+1], "darkslategray");
        divSizes[i+1] = key;
        await sleep(timeDelay);
        await sleep(timeDelay);

        // Mark left side as sorted
        for(var t = 0; t < j; t++)
        {
            updateDiv(divs[t], divSizes[t], "black");
        }

        await sleep(timeDelay);
    }
    updateDiv(divs[j-1], divSizes[j-1], "black");

    enableButtons();
}
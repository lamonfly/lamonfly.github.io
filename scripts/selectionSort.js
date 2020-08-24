async function Selection()
{
    for(var i = 0; i < inputArraySize.value - 1; i++)
    {
        updateDiv(divs[i], divSizes[i], "lightslategray");

        indexMin = i;
        await sleep(timeDelay);

        // One by one move boundary of unsorted subarray 
        for(let j = i + 1; j < inputArraySize.value; j++)
        {
            updateDiv(divs[j], divSizes[j], "darkslategray");
            await sleep(timeDelay);
            
            // Find the minimum element in unsorted array
            if(divSizes[j] < divSizes[indexMin])
            {
                if (indexMin != i)
                    updateDiv(divs[indexMin], divSizes[indexMin], "gray");
                indexMin = j;
                await sleep(timeDelay);
                updateDiv(divs[indexMin], divSizes[indexMin], "lightslategray");
            }
            else
            {
                updateDiv(divs[j], divSizes[j], "gray");
            }
            await sleep(timeDelay);
        }

        updateDiv(divs[indexMin], divSizes[indexMin], "darkslategray");
        updateDiv(divs[i], divSizes[i], "darkslategray");

        // Swap the found minimum element with the first element
        var temp = divSizes[indexMin];
        await sleep(timeDelay);

        divSizes[indexMin] = divSizes[i];
        await sleep(timeDelay);
        
        divSizes[i] = temp;
        await sleep(timeDelay);

        updateDiv(divs[indexMin], divSizes[indexMin], "gray");
        updateDiv(divs[i], divSizes[i], "black");
        await sleep(timeDelay);
    }

    updateDiv(divs[i], divSizes[i],"black");

    enableButtons();
}
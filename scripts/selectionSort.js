async function Selection()
{
    for(var i = 0; i < divSizes.length - 1; i++)
    {
        updateDiv(divs[i], divSizes[i], "lightslategray");

        indexMin = i;
        await sleep(timeDelay);

        for(let j = i + 1; j < divSizes.length; j++)
        {
            updateDiv(divs[j], divSizes[j], "darkslategray");
            await sleep(timeDelay);
            
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
        }

        updateDiv(divs[indexMin], divSizes[indexMin], "darkslategray");
        updateDiv(divs[i], divSizes[i], "darkslategray");

        var temp = divSizes[indexMin];
        await sleep(timeDelay);

        divSizes[indexMin] = divSizes[i];
        await sleep(timeDelay);
        
        divSizes[i] = temp;
        await sleep(timeDelay);

        updateDiv(divs[indexMin], divSizes[indexMin], "gray");
        updateDiv(divs[i], divSizes[i], "black");
    }

    updateDiv(divs[i], divSizes[i],"black");

    enableButtons();
}
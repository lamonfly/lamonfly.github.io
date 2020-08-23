let pivotIndex = 0;

async function Quick()
{
    await quickSort(0, divSizes.length - 1);

    enableButtons();
}

async function quickPartition (left, right)
{
    let pivot = divSizes[right];
    let i = left - 1;
    updateDiv(divs[right], divSizes[right], "darkslategray");
    await sleep(timeDelay);
    await sleep(timeDelay);

    for(let j = left; j <= right-1; j++)
    {
        updateDiv(divs[j], divSizes[j], "darkslategray");

        if (divSizes[j] < pivot)
        {
            i++;
            updateDiv(divs[i], divSizes[i], "lightslategray");
            updateDiv(divs[j], divSizes[j], "lightslategray");

            let temp = divSizes[i];
            divSizes[i] = divSizes[j];
            divSizes[j] = temp;
            await sleep(timeDelay);
            await sleep(timeDelay);

            updateDiv(divs[i], divSizes[i], "gray");
            updateDiv(divs[j], divSizes[j], "darkslategray");
            await sleep(timeDelay);
        }
    }
    updateDiv(divs[right], divSizes[right], "lightslategray");
    updateDiv(divs[i+1], divSizes[i+1], "lightslategray");

    let temp = divSizes[right];
    divSizes[right] = divSizes[i+1];
    divSizes[i+1] = temp;
    await sleep(timeDelay);
    await sleep(timeDelay);

    updateDiv(divs[right], divSizes[right], "lightslategray");
    updateDiv(divs[i+1], divSizes[i+1], "lightslategray");

    for(let t = left; t <= i + 1; t++)
    {
        updateDiv(divs[t], divSizes[t], "black");
    }

    pivotIndex = i + 1;
    await sleep(timeDelay);
}

async function quickSort(left, right)
{
    if(left < right)
    {
        await quickPartition(left, right);     
        await quickSort(left, pivotIndex - 1);
        await quickSort(pivotIndex + 1, right);
    }
 }
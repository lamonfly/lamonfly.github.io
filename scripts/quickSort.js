let pivotIndex = 0;

async function Quick()
{
    await quickSort(0, inputArraySize.value - 1);

    enableButtons();
}

async function quickPartition (left, right)
{
    // pivot (Element to be placed at right position)
    let pivot = divSizes[right];
    let i = left - 1;
    updateDiv(divs[right], divSizes[right], "darkslategray");
    await sleep(timeDelay);
    await sleep(timeDelay);

    for(let j = left; j <= right-1; j++)
    {
        updateDiv(divs[j], divSizes[j], "darkslategray");

        // If current element is smaller than the pivot
        if (divSizes[j] < pivot)
        {
            i++; // increment index of smaller element
            await sleep(timeDelay);
            updateDiv(divs[i], divSizes[i], "lightslategray");
            updateDiv(divs[j], divSizes[j], "lightslategray");

            // Swap
            let temp = divSizes[i];
            divSizes[i] = divSizes[j];
            divSizes[j] = temp;
            await sleep(timeDelay);
            await sleep(timeDelay);

            updateDiv(divs[i], divSizes[i], "gray");
            updateDiv(divs[j], divSizes[j], "darkslategray");
            await sleep(timeDelay);
        }
        await sleep(timeDelay);
    }
    updateDiv(divs[right], divSizes[right], "lightslategray");
    updateDiv(divs[i+1], divSizes[i+1], "lightslategray");

    // Swap
    let temp = divSizes[right];
    divSizes[right] = divSizes[i+1];
    divSizes[i+1] = temp;
    await sleep(timeDelay);
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
        // pivot index is partioning index, divSizes[pivotIndex] now at right place
        await quickPartition(left, right);     
        await quickSort(left, pivotIndex - 1);
        await quickSort(pivotIndex + 1, right);
        await sleep(timeDelay);
    }
 }
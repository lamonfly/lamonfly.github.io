async function Merge()
{
    await mergePartition(0, inputArraySize.value - 1);

    enableButtons();
}

// Sort two section of array (should be small or pre sorted to make it faster)
async function mergeSort(left, middle, right)
{
    let sorted = [], p = left, q = middle + 1;
    await sleep(timeDelay);
    await sleep(timeDelay);
    await sleep(timeDelay);

    for (let i = left; i <= right; i++){
        if (p > middle){
            updateDiv(divs[q], divSizes[q], "darkslategray");
            sorted.push(divSizes[q++]);
        }
        else if (q > right){
            updateDiv(divs[p], divSizes[p], "darkslategray");
            sorted.push(divSizes[p++]);
        }
        else if (divSizes[p] < divSizes[q]){
            updateDiv(divs[p], divSizes[p], "darkslategray");
            sorted.push(divSizes[p++]);
        }
        else{
            updateDiv(divs[q], divSizes[q], "darkslategray");
            sorted.push(divSizes[q++]);
        }
        await sleep(timeDelay);
        await sleep(timeDelay);
        await sleep(timeDelay);
    }

    for (let i  = 0; i < sorted.length; i++){
        divSizes[left] = sorted[i];
        updateDiv(divs[left], divSizes[left], "black");
        await sleep(timeDelay);
        left++;
        await sleep(timeDelay);
        await sleep(timeDelay);
    }
}

// Create sequence of function call on slices of array
async function mergePartition(left, right)
{
    if (right > left){
        const middle = Math.floor((right + left) / 2);
        await sleep(timeDelay);
        await mergePartition(left, middle);
        await mergePartition(middle + 1, right);

        await mergeSort(left, middle, right);
        await sleep(timeDelay);
    }
}
async function  Counting() {
    // Find largest element in array
    let max = 0;

    for (let i = 0; i < inputArraySize.value; i++){
        updateDiv(divs[i], divSizes[i], "darkslategray");
        await sleep(timeDelay);

        updateDiv(divs[i], divSizes[i], "gray");
        if (divSizes[max] < divSizes[i]){
            updateDiv(divs[max], divSizes[max], "gray");
            max = i;
            updateDiv(divs[max], divSizes[max], "darkslategray");
            await sleep(timeDelay);
        }
        await sleep(timeDelay);
    }

    // initialize count array with all zeros
    let count = new Array(divSizes[max] + 1).fill(0);
    await sleep(timeDelay);

    // find total of each unique element and store it
    for (let i = 0; i < inputArraySize.value; i++){
        count[divSizes[i]]++;
        updateDiv(divs[i], divSizes[i], "lightslategray");
        await sleep(timeDelay);
        await sleep(timeDelay);
    }

    // find the cumulative sum and store it in count array
    for (let i = 1; i < count.length; i++){
        count[i] += count[i-1];
        await sleep(timeDelay);
        await sleep(timeDelay);
    }

    // find the index of each element of the original array in count array, and place the elements in output array
    let output = new Array(inputArraySize.value + 1);
    for (let i = inputArraySize.value - 1; i >= 0; i--) {
        output[count[divSizes[i]] - 1] = divSizes[i];
        updateDiv(divs[i], divSizes[i], "gray");
        await sleep(timeDelay);

        count[divSizes[i]]--;
        await sleep(timeDelay);
        await sleep(timeDelay);
    }

    // copy sorted elements into original array
    for (let i = 0; i < inputArraySize.value; i++){
        divSizes[i] = output[i];
        updateDiv(divs[i], divSizes[i], "black");
        await sleep(timeDelay);
        await sleep(timeDelay);
    }

    enableButtons();
}
async function Radix() {
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
    }

    // Do counting sort for every digit
    for (let exp = 1; divSizes[max]/exp > 0; exp *= 10){
        await countSort(exp);
    }
    
    enableButtons();
}

async function countSort(exp) {
    let output = new Array(inputArraySize.value);
    let i;
    let count = new Array(10).fill(0);
    await sleep(timeDelay);
  
    // Store count of occurrences in count[] 
    for (i = 0; i < inputArraySize.value; i++){
        count[(divSizes[i]/exp)%10]++;
        updateDiv(divs[i], divSizes[i], "darkslategray")
        await sleep(timeDelay);
        updateDiv(divs[i], divSizes[i], "gray")
    }

    // Change count[i] so that count[i] now contains actual 
    // position of this digit in output[] 
    for (i = 1; i < 10; i++){
        count[i] += count[i-1];
        await sleep(timeDelay);
    }

    // Build the output array 
    for (i = inputArraySize.value - 1; i >= 0; i--) 
    { 
        output[count[(divSizes[i]/exp)%10]-1] = divSizes[i]; 
        count[(divSizes[i]/exp)%10]--;
        updateDiv(divs[i], divSizes[i], "lightslategray");
        await sleep(timeDelay);
        await sleep(timeDelay);
    }

    console.log(divSizes);
    console.log(output);
    // copy sorted elements into original array
    for (let i = 0; i < inputArraySize.value; i++){
        divSizes[i] = output[i];
        updateDiv(divs[i], divSizes[i], "black");
        await sleep(timeDelay);
    }
}
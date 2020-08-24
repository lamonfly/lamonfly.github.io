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
    for (let exp = 1; Math.floor(divSizes[max]/exp) > 0; exp *= 10){
        await countSort(exp);
        await sleep(timeDelay);
    }
    
    enableButtons();
}

async function countSort(exp) {
    let output = new Array(parseInt(inputArraySize.value));
    let i;
    let count = new Array(10).fill(0);
    await sleep(timeDelay);
    await sleep(timeDelay);
    await sleep(timeDelay * 10);

    for (i = 0; i < inputArraySize.value; i++){
        updateDiv(divs[i], divSizes[i], "darkslategray");
        count[(Math.floor(divSizes[i]/exp) % 10)]++;
        await sleep(timeDelay);
        await sleep(timeDelay);
        updateDiv(divs[i], divSizes[i], "gray");
    }

    for (i = 1; i < 10; i++){
        count[i] += count[i-1];
        await sleep(timeDelay);
        await sleep(timeDelay);
    }

    for (i = inputArraySize.value - 1; i >= 0; i--){
        updateDiv(divs[i], divSizes[i], "darkslategray");
        output[count[Math.floor((divSizes[i]/exp)%10)] - 1] = divSizes[i];
        count[(Math.floor(divSizes[i]/exp)%10)]--;
        await sleep(timeDelay);
        await sleep(timeDelay);
        await sleep(timeDelay);
        updateDiv(divs[i], divSizes[i], "gray");
    }

    for (i = 0; i < inputArraySize.value; i++){
        divSizes[i] = output[i];
        updateDiv(divs[i], divSizes[i], "black");
        await sleep(timeDelay);
        await sleep(timeDelay);
    }
}
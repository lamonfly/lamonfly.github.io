async function Bucket() {
    // Create n buckets
    let buckets = new Array(parseInt(inputArraySize.value)).fill([]);
    await sleep(timeDelay);

    // Put array elements in different buckets
    for (let i = 0; i < inputArraySize.value; i++){
        let idx = inputArraySize.value * divSizes[i]; // index in bucket
        buckets[idx % inputArraySize.value].push(divSizes[i]);
        updateDiv(divs[i], divSizes[i], "darkslategray");
        await sleep(timeDelay);
        await sleep(timeDelay);
        await sleep(timeDelay);
        await sleep(timeDelay);
        updateDiv(divs[i], divSizes[i], "gray");
    }

    // Sort individual bucket
    for (let i = 0; i < inputArraySize.value; i++){
        buckets[i].sort();
        await sleep(timeDelay * buckets[i].length * Math.log(buckets[i].length));
        await sleep(timeDelay);
    }

    // Concatenate all buckets into divSizes[]
    let index = 0;
    loop:
    for (let i = 0; i < inputArraySize.value; i++){
        for (let j = 0; j < buckets[i].length; j++){
            divSizes[index] = buckets[i][j];
            if (inputArraySize.value > index)
                updateDiv(divs[index], divSizes[index], "black");
            else
                break loop;
            await sleep(timeDelay);
            index++;
            await sleep(timeDelay);
            await sleep(timeDelay);
        }
        await sleep(timeDelay);
    }

    enableButtons();
}
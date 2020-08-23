async function Heap() {
    await heapPartition();

    enableButtons();
}

async function heapPartition() {
    let n = divSizes.length;

    // Build heap
    for (let i = n / 2 - 1; i >= 0; i--){
        updateDiv(divs[i], divSizes[i], "darkslategray");
        await heapify(n, i);
        updateDiv(divs[i], divSizes[i], "gray");
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--){
        updateDiv(divs[i], divSizes[i], "darkslategray");
        updateDiv(divs[0], divSizes[0], "darkslategray");
        await sleep(timeDelay);

        // Move current root to end
        let temp = divSizes[0];
        divSizes[0] = divSizes[i];
        divSizes[i] = temp;
        await sleep(timeDelay);

        updateDiv(divs[0], divSizes[0], "darkslategray");
        updateDiv(divs[i], divSizes[i], "darkslategray");
        await sleep(timeDelay);

        // Call max heapify on the reduced heap
        await heapify(i, 0);
        updateDiv(divs[i], divSizes[i], "black");
    }

    updateDiv(divs[0], divSizes[0], "black");
}

async function heapify(n, i) {
    let largest = i; // Initialize largest as root
    let left  = 2*i + 1;
    let right = 2*i + 2;
    await sleep(timeDelay);
    await sleep(timeDelay);

    // if left child is larger than root
    if (left < n && divSizes[left] > divSizes[largest]){
        updateDiv(divs[largest], divSizes[largest], "gray");
        largest = left;
        updateDiv(divs[largest], divSizes[largest], "darkslategray");
    }
    await sleep(timeDelay);

    // if right child is larger than root
    if (right < n && divSizes[right] > divSizes[largest]){
        updateDiv(divs[largest], divSizes[largest], "gray");
        largest = right;
        updateDiv(divs[largest], divSizes[largest], "darkslategray");
    }
    await sleep(timeDelay);

    if (largest != i){
        updateDiv(divs[largest], divSizes[largest], "lightslategray");
        updateDiv(divs[i], divSizes[i], "lightslategray");
        await sleep(timeDelay);

        let temp = divSizes[i];
        divSizes[i] = divSizes[largest];
        divSizes[largest] = temp;
        updateDiv(divs[largest], divSizes[largest], "lightslategray");
        updateDiv(divs[i], divSizes[i], "lightslategray");
        await sleep(timeDelay);

        updateDiv(divs[largest], divSizes[largest], "gray");
        updateDiv(divs[i], divSizes[i], "gray");
        await sleep(timeDelay);

        // Recursively heapify the affected sub-tree;
        updateDiv(divs[largest], divSizes[largest], "darkslategray");
        await heapify(n, largest);
        updateDiv(divs[largest], divSizes[largest], "gray");
    }
    await sleep(timeDelay);
}
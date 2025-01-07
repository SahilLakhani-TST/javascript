const cutPieces = (fruit) => {
    return fruit * 4;
}

const fruitProcessor = (apples, oranges) => {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} peices of orange`;
    return juice;
}

console.log(fruitProcessor(2,3));
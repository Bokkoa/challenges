function maximumUnits(boxTypes: number[][], truckSize: number): number {
    const sortedBoxes = boxTypes.sort((a, b) => a[1] > b[1] ? -1 : 1);

    let quantity = 0, temp = 0;

    for(const box of sortedBoxes){
        if(temp == truckSize) break;

        if(temp + box[0] > truckSize) {
            let diff = truckSize - temp;
            
            quantity += diff * box[1];

            break;
        } else {
            quantity += box[1] * box[0];
            temp += box[0]
        }

    }

    return quantity
};

console.log(maximumUnits([[1,3],[2,2],[3,1]], 4));
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));
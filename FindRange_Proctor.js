const array = [28, 43, -12, 30, 4, 0, -36];

const MinMax = () => {
    let min = array [0], max = array [0];

    for (let i =1; i < array.length; i++){
        let value = array[i]
        min = (value<min) ? value : min
        max = (value>max) ? value : max
    }
    return [min, max];
}
const [LoopMin, LoopMax] = MinMax();
console.log (`Minimum: ${LoopMin}, Maximum: ${LoopMax}`);
//comment for github
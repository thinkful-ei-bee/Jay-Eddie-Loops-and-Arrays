function max(numbers){
let i = 0;
let greatest = numbers[0];
while(i < numbers.length) {
    if (numbers[i] >= greatest) {
        greatest = numbers[i];
    }
    i++;
}
return greatest;
}

function min(numbers){
    let i=0;
    let smallest = number[0];
    while (i < numbers.length){
        if (number[i] <=smallest){
            smallest = number[i];
        }
        i++;
    }
    return smallest;
}


function average(numbers){
    let total = 0;
    numbers.forEach(num => total += num)
    return total / numbers.length;
}

average([1,3,5]);
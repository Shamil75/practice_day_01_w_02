var array = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let bigname = array[0];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(bigname.length < element.length){
        bigname = element;
    }
}

console.log(bigname);
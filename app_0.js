
const result = 80;

if(result <= 32){
    console.log('Fail');
}
else if(result > 32 && result <= 39 ){
    console.log('C');
}
else if(result > 39 && result <= 59){
    console.log('B');
}
else if(result > 59 && result <= 69){
    console.log('A-');
}
else if(result > 69 && result <= 79){
    console.log('A');
}
else if(result > 79 && result <= 100){
    console.log('A+');
}
else{
    console.log('Invalid');
}



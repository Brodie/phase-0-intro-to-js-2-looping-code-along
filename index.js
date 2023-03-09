// Code your solutions in this file
function writeCards(name, event){
    let array = [];
    for (let n = 0; n < name.length; n++){
     array[n] = (`Thank you, ${name[n]}, for the wonderful ${event} gift!`);
    }
return array
}

function countDown(num){
    console.log(num)
    while (num !== 0){
        num--
        console.log(num)
    }
}
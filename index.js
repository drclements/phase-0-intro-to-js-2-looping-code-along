// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i= 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);


function writeCards(names, eventName) {
    const message = []
    for (let i = 0; i < names.length; i++){
      message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return message;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))


function countDown(number) {
    let i = 10
    while (i >= 0) {
    console.log(i--)
}
return number
}

countDown()

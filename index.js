function writeCards(names, event) {
  const newArray = [];
  for (let i = 0; i < names.length; i++){
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    

}
return newArray;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown (num){
  while (num >=0){
    console.log(num--);
  }

}

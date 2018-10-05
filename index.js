function iterativeLog(array) {
  array.forEach(()=> {
    for(let i=0;i<array.length;i++) {
      console.log(${i}: ${array[i]});
    }
  })
}

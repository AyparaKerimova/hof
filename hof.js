//Part-1

let stocks = [{symbol:"x",price:10,sector:"A"},{symbol:"y",price:14,sector:"B"},{symbol:"z",price:20,sector:"C"}]

//Part-2

const priceStocks = (stock) => {
  stocks[0]['price']=12  //update
  return stock
}

console.log(priceStocks(stocks));

function random() {
let randomly = stocks[Math.floor(Math.random() * stocks.length)]
console.log(randomly)
}

random() 
setInterval(() => {
  random()
}, 3000);

console.log(setInterval)
//Part-3

const lessthan15 = stocks.filter((prices) =>prices.price < 15)

console.log(lessthan15)

//Part-4

setTimeout(() => {
  for (let i=0;i<stocks.length;i++){
    newstock=stocks[i]
    if (newstock['price']!=stocks['price']){
      console.log('price alert')
    }
  }
  return newstock
}, 2000);

console.log(setTimeout) 





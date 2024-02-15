const customers: object[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
    { id: 3, name: 'Saul', email: 'saul@example.com', location: { city: 'California', country: 'USA' } },
    { id: 4, name: 'Walter', email: 'walter@example.com', location: { city: 'Memphis', country: 'USA' } },
    { id: 5, name: 'Tom', email: 'tom@example.com', location: { city: 'London', country: 'England' } },
  ];
  
  const orders: object[]= [
    { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
    { orderId: 103, customerId: 3, product: 'Mouse', quantity: 3, price: 90 },
    { orderId: 104, customerId: 4, product: 'Video-card', quantity: 1, price: 400 },
    { orderId: 105, customerId: 5, product: 'Tv', quantity: 2, price: 2000 },
  ];

//Customer Email List: Use map to create an array of all customer emails.

const customerEmail: string[]= customers.map((customer:any)=>{
   return customer.email
})
console.log('show emails',customerEmail)

//High-Value Orders: Use filter to find all orders with a total value (quantity * price) greater than $1000.

const totalValue: any = orders.filter((order:any)=>order.quantity*order.price>1000)
console.log('total Value:',totalValue)

//Find Customer by Name: Use find to retrieve the customer object for a customer named "Alice".

const findName:any = customers.find((customer: any)=>customer.name==='Alice')
console.log('find name:',findName)

//Index of a Specific Order: Use findIndex to find the index of the order with orderId 102.

const findIndexOrder: number = orders.findIndex((order:any)=>order.orderId===102)
console.log('find index:',findIndexOrder)

//Check for Orders in a Specific Country: Use some to check if there are any orders from customers located in "USA".
const checkCountry: any = customers.some((customer:any)=> customer.location.country === 'USA')
console.log('Find Country:',checkCountry)

//Print Order Summaries: Use forEach to print a summary for each order in the format "Order [orderId] by [customerName]: [quantity] x [product] for $[price] each."

const customerName:any = orders.forEach((order:any,customer:any) => 
  {return customer.id === order.customerId});
  console.log(`Order ${order.orderId} by ${customerName}: ${order.quantity} x ${order.product} for $${order.price} each.`);

//Sort Customers by Name: Use sort to create a new array of customers sorted alphabetically by name.

const sortAlphabet:any = customers.sort((a:any,b:any)=> {
    if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    });
console.log(sortAlphabet) 


/* eslint-disable no-restricted-globals */
const worker = () => {
    self.addEventListener('message', e => {
        const orders = e.data;
        console.log("oooooooooooooooooooooooooooooooooo")
        console.log(e)
        let totalSales = 0.0;
      
        orders?.content.map((order) => {
          if (order.orderStatus === "DELEVERED" || order.orderStatus === "SHIPPED" || order.orderStatus === "CONFIRMED") 
          {
            totalSales += order.discountedPrice;

          }
    
        });
      
        postMessage(totalSales);
    });
};

export default worker;
// onmessage = function(e) {

// }


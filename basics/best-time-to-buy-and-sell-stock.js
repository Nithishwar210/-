/** 
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        
        if(prices[i] < buyPrice) {
            buyPrice = prices[i];
            continue
        }

        maxProfit = Math.max(maxProfit,prices[i] - buyPrice)
        
    }
    return maxProfit
};

console.log(maxProfit([7,6,4,3,1]));

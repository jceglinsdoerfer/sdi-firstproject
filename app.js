
//the fetch
function currentPrices (){
    return fetch('https://api.coinlore.net/api/ticker/?id=90,80,58,518,2710,48543,33285,2,46971,257')
        .then(response => {
            if(!response.ok){
                throw new Error('No information can be found!')
            }
            return response.json()
        })
        .then(coins => {
            printAllNames(coins);
            returnValue(coins);

        })
        .catch(error => console.log(error))    
}


currentPrices();
function printAllNames(coins){
    const emptyCoinList = document.querySelector(".listofcoins")
    for (let i = 0; i < coins.length; i++) {
       var listItem = document.createElement("li") 
       listItem.innerText =` ${coins[i].name}: $${coins[i].price_usd} `     
       emptyCoinList.appendChild(listItem)
    }
}
let numberInputed = 0;
let priceOfCoin = 0;
function returnValue(coins) {
    let selection = document.getElementById("myDropdown");
    selection.addEventListener('change', (event) => {
        const selectedCoinID = event.target.value;
        console.log(selectedCoinID);
        selectedPrice(selectedCoinID);
        })
        function selectedPrice (selectedCoinID) {
            console.log('hello');
            return fetch(`https://api.coinlore.net/api/ticker/?id=${selectedCoinID}`)
        .then(response => {
            console.log(selectedCoinID);
            if(!response.ok){
                throw new Error('No information can be found!')
            }
            return response.json()
        })
        .then(selectedCoinsData => {
            console.log(selectedCoinsData) 
            return selectedCoinsData;   
        })
        .then(coinValue => {
            console.log(coinValue[0].price_usd);
            priceOfCoin = coinValue[0].price_usd
            console.log(numberInputed, priceOfCoin)
            var totalValue = Math.ceil(numberInputed * priceOfCoin);
            console.log(totalValue);
            const outputList = document.getElementById("output-list");
            var outputTotalValue = document.createElement("li")
            outputTotalValue.innerText = ` $${totalValue} `
            outputList.appendChild(outputTotalValue);
            return priceOfCoin;
        })
        .catch(error => console.log(error))
        }
    }
    const numberSelection = document.getElementById('numberInput');
        numberInput.addEventListener('input', (event) => {
        numberInputed = event.target.valueAsNumber;
        console.log(numberInputed);    


        
})

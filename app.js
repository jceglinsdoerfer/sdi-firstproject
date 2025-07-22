
//the fetch to get the top 10 crypto currencies
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

//this loops through the fetch data and creates an object with the name and price
currentPrices();
function printAllNames(coins){
    const emptyCoinList = document.querySelector(".listofcoins")
    for (let i = 0; i < coins.length; i++) {
       var listItem = document.createElement("li") 
       listItem.innerText =`${coins[i].name}  $${(coins[i].price_usd)}`     
       emptyCoinList.appendChild(listItem)
    }
}
//these two variables are global in order to have access outside of the functions
let numberInputed = 0;
let priceOfCoin = 0;
function returnValue(coins) {
    let selection = document.getElementById("myDropdown");
    //event listener to get the selected crypto coin
    selection.addEventListener('change', (event) => {
        const selectedCoinID = event.target.value;
        selectedPrice(selectedCoinID);
        })
        function selectedPrice (selectedCoinID) {
            return fetch(`https://api.coinlore.net/api/ticker/?id=${selectedCoinID}`)
        .then(response => {
            if(!response.ok){
                throw new Error('No information can be found!')
            }
            return response.json()
        })
        .then(coinValue => {
            priceOfCoin = coinValue[0].price_usd
            var totalValue = Math.ceil(numberInputed * priceOfCoin);
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
          


        
})


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
            let priceOfCoin = coinValue[0].price_usd
            return priceOfCoin;
        })
        .catch(error => console.log(error))
        }
        
        }
    let numberSelection = document.getElementById("numberInput");
        selection.addEventListener('change', (event) => {
        const numberInputed = event.target.value;
        console.log(numberInputed);    

        
})
//     var valueOfCoins = document.querySelector(".valueOfCoins")
//     valueOfCoins.innerText= ` ${numberOfCoins * } `
//     let numberOfCoins = document.querySelector('.numberinput')
//     numberOfCoins.addEventListener("input", (eventObject) => dataForValue.appendChild(numberOfCoins))
//     // numberOfCoins = eventObject.target.value
//     console.log(numberOfCoins)
    
//     const coinSelected = document.querySelector(".myDropDown")
//     const coinSelectedPrice = [];
//     for (let i = 0; i < coins.length; i++) {
//         if (coins[i].name === coinSelected) {
//             coinSelectedPrice.push(coins[i].price_usd)
//             console.log(coinSelected)
//         }
//     }
//     const producet OfCoins = numberOfCoins * coinSelected;    
//     dataForValue.appendChild(valueOfCoins);
//     valueOfCoin.innerText = ` ${valueOfCoins} `


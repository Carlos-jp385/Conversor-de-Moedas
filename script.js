const convertButton = document.querySelector(".convert-button")

function convertValue() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
  const currencyValueConverted = document.querySelector(".currency-value")


  const dolarToday = 5.2

  const convertedValue = inputCurrencyValue / dolarToday

 currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
   style: "currency",
   currency:"BRL"
 }).format(inputCurrencyValue)

 currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
   style: "currency",
   currency:"USD"
 }).format(convertedValue)


  console.log(convertValue)
}

convertButton.addEventListener("click", convertValue)
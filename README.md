# Project Description

This project is an off-shoot/extra-credit from the React's Documentation "Thinking in React" and Udemy's React Nanodegree's "Contacts" exercise. This is my attempt at adhering to the Single Responsibility Principle and Component/Function composition. 

## What it does ... 

In the search bar, the user can input a stock's ticker/symbol and the app will render a list view that itself is a just an accumulation of list items. Each list item contains the stock's ticker, it's current price, it's debt/equity ratio and a buy/sell/hold recommendation. All of this information is fetched from yahoo-finance's API. 

Additionally, each list item has both a "See More" and "Remove" button. 

### `See More`

If the user clicks the "See More" button, a modal window is rendered. This modal window displays some of the stock's pertinent info like it's company's full name, total cash, total debt, revenue, etc. 


### `Remove`

If the user clicks the "Remove" button, the list item is removed from the list view. 

## How it does it ... 

First the user inputs a stock's ticker and this input, which is saved in state, is fed to the "getStockTickerInfo" function. This function makes a call to the yahoo-finance API and requests data about the stock. The API then sends a response to the browser with the requested data. The requested data is then fed to the "parseStockData" function. The function, in turn, maps/parses the yahoo-finance API's response to a temporary Object. Finally, by using the spread operator, the mapped object is added to an array that is saved in state. 
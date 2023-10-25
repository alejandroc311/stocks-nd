## What it does ... 

In the search bar, the user can input a stock's ticker/symbol and the app will render a list view that itself is a just an accumulation of list items. Each list item contains the stock's ticker, it's current price, it's debt/equity ratio and a buy/sell/hold recommendation. All of this information is fetched from yahoo-finance's API. 

Additionally, each list item has both a "See More" and "Remove" button. 

### `See More`

If the user clicks the "See More" button, a modal window is rendered. This modal window displays some of the stock's pertinent info like it's company's full name, total cash, total debt, revenue, etc. 

#### `The "See More Modal"`

The "See More Modal" allows a user to select the data he or she wishes to actually see from the stock. As the user selects the data he or she wishes to see, a list view of the data the user wishes to see is rendered. 


### `Remove`

If the user clicks the "Remove" button, the list item is removed from the list view. 


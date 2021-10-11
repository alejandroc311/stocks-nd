
import { useEffect, useState } from 'react';
import yahooFinance from "yahoo-finance";

import './App.css';
import SearchForm from './Components/SearchForm';
import StockListView from './Components/StockListView';
function App() {
  const [isFormSubmittable, setisFormSubmittable] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [stockLists, setStockLists] = useState([]);
  function parseStockData(stockData){
    const parsedStockData = {
      name: stockData.price.longName, ticker: stockData.price.symbol, debtToEquity: stockData.financialData.debtToEquity, recommendation: stockData.financialData.recommendationKey.toUpperCase()
    };
      console.log(parsedStockData);
      setStockLists([...stockLists, parsedStockData]);
  }
  function getStockTickerInfo(){
    yahooFinance.quote({
      symbol: userInput,
      modules: ["summaryDetail", "financialData", "price"]
    }, (error, results) => {
      parseStockData(results);
    });
  }
  function handleSubmit(event){
    //TODO get stock ticker from yahoo-finance api
    console.log("Submit fired!");
    getStockTickerInfo();
    setUserInput("");
  }
  function handleUserInput(name, value){
    console.log(value);
    //TODO evaluate which input the name belongs to
    setUserInput(value); 
  }
  function checkIsFormSubmittable() {
    userInput.length >= 4 && userInput.length <= 6 ? setisFormSubmittable(true) : setisFormSubmittable(false)
  }
  useEffect(() => {
    checkIsFormSubmittable();
    console.log(stockLists);
  },[userInput, isFormSubmittable, stockLists]);
  return (
    <div className="App">
      <SearchForm onSubmit={handleSubmit} onChange={handleUserInput} userInput={userInput} isFormSubmittable={isFormSubmittable} />
      <StockListView stockList={stockLists}/>
    </div>
  );
}

export default App;

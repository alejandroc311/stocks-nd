
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
      name: stockData.financialData.currentPrice, longName: stockData.price.longName, ticker: stockData.price.symbol, debtToEquity: stockData.financialData.debtToEquity, recommendation: stockData.financialData.recommendationKey.toUpperCase(), totalCash: stockData.financialData.totalCash, totalDebt: stockData.financialData.totalDebt, grossRevenue: stockData.financialData.totalRevenue, grossProfit: stockData.financialData.grossProfits, operatingCashflow: stockData.financialData.operatingCashflow, freeCashflow: stockData.financialData.freeCashflow
    };
      console.log(parsedStockData);
      setStockLists([...stockLists, parsedStockData]);
  }
  function getStockTickerInfo(){
    yahooFinance.quote({
      symbol: userInput,
      modules: ["summaryDetail", "financialData", "price"]
    }, (error, results) => {
      error ? console.log(error) : parseStockData(results)
      
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
  function handleRemoveClick(name){
    console.log(name);
    setStockLists(stockLists.filter(stock => stock.ticker !== name));
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
      <StockListView stockList={stockLists} onRemoveClick={handleRemoveClick}/>
    </div>
  );
}
export default App;

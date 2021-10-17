
import { useEffect, useState } from 'react';
import yahooFinance from "yahoo-finance";

import './App.css';
import SearchForm from './Components/SearchForm';
import StockListView from './Components/StockListView';
function App() {
  const [isFormSubmittable, setisFormSubmittable] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [stockLists, setStockLists] = useState([]);
  
  function getStockTickerInfo(){
    yahooFinance.quote({
      symbol: userInput,
      modules: ["summaryDetail", "financialData", "price"]
    }, (error, results) => {
      error ? console.log(error) : setStockLists([...stockLists, results])
      
    });
  }
  function handleSubmit(event){
    console.log("Submit fired!");
    getStockTickerInfo();
    setUserInput("");
  }
  function handleUserInput(name, value){
    console.log(value);
    setUserInput(value); 
  }
  function handleRemoveClick(name){
    //TODO Improve filter method
    console.log(name);
    setStockLists(stockLists.filter(stock => stock.price.symbol !== name));
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

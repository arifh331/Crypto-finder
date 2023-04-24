
import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios'
import Coins from './components/Coins';



function App() {

  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord,setSearchWord]=useState("")

  useEffect(()=>{
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0')
    .then((response)=>{
      setListOfCoins(response.data.coins)
      console.log(response.data)
    })

  },[])
  
  const filteredCoins =listOfCoins.filter((coin)=>{
   return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  })

  return (
    <div className='App'>
      {/* This is the div for the header/navbar */}
      <div className="cryptoHeader">

      <input type="text" placeholder='Bitcoin...'
      onChange={(event)=>{
      setSearchWord(event.target.value) 
      }}
      />
      </div>

      

      <div className="cryptoDisplay"></div>
      {filteredCoins.map((coins)=>{
        return <Coins name={coins.name} icon={coins.icon} price={coins.price} symbol={coins.symbol}/>
      })}



    </div>
  )}
export default App;

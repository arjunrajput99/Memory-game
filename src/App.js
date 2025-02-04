// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './Components/SingleCard';

const cardImages =[
  {src:"/img/helmet-1.png",matched:false},
  {src:"/img/potion-1.png",matched:false},
  {src:"/img/ring-1.png",matched:false},
  {src:"/img/scroll-1.png",matched:false},
  {src:"/img/shield-1.png",matched:false},
  {src:"/img/sword-1.png",matched:false},
]
function App() {

  const [cards,setcards] = useState([])
  const [turns,setTurns] =useState(0)
  const [choiceOne,setChoiceOne] = useState(null)
  const [choiceTwo,setChoiceTwo] = useState(null)
  // const [choiceThree,setChoiceThree] = useState(null)
  const [disabled,setDisabled] = useState(false)

  //SHUGFFLE CARDS
  const shuffleCards = () =>{
    const shuffleCards = [...cardImages,...cardImages]
    .sort(()=>Math.random()-0.5)
    .map((card)=>({...card,id:Math.random()/100}))

    setcards(shuffleCards)
    setTurns(0)
 }

 //handle choice
 const handleChoice = (card) =>{
  // console.log(card)
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card) 
  // choiceTwo ? setChoiceThree(card): setChoiceTwo(card)
 }
 console.log(cards) 

 //comparing  selected choices 
 useEffect(()=>{
  if(choiceOne && choiceTwo){
    // setDisabled(true)
    if(choiceOne.src===choiceTwo.src){
      // console.log("cards matched")
      // resetTurns()
      setcards((prevCards)=>{
        return prevCards.map((card)=>{
          if(card.src == choiceOne.src)
          {
          return {...card,matched:true}
          }
      
          else{
            if(card.src == choiceTwo.src)
            {
              return {...card,matched:true}
            } 
          // else{
            // if(card.src==choiceThree.src)
            // {
            //   return{...card,matched:true}
            // }
            else{
           return card
            }
        }
      
      // }
      })
    })
    resetTurns() 
  }
    else{
      // resetTurns()
      // console.log("cards not matched")
      // resetTurns()
      setTimeout(()=>resetTurns(),1000)
    }
  }
 },[choiceOne,choiceTwo])

 //reset choices and turns
 const resetTurns =() =>{
  setChoiceOne(null)
  setChoiceTwo(null)
  // setChoiceThree(null)
  setDisabled(false)
  setTurns((prevTurns) =>(prevTurns+1))
 }
  // console.log(cards,turns)
  return (
    <div className="App">
      <h1>MEMORY GAME</h1>
      <button onClick={shuffleCards}>NEW GAME</button>   

      <div className='card-grid'>
        {cards.map((card)=>{
          return(
            <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            flipped={card===choiceOne|| card===choiceTwo || card.matched}
            disabled={disabled}
              />
          )})}
      </div>
      <p>TURNS -{turns}</p>
    </div>
  );
}

export default App;
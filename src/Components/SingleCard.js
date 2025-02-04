import './SingleCard.css'

export default function SingleCard({card,handleChoice,flipped}) {

    const handleClick =() =>{
        handleChoice(card)
    }
  return (
    <div className='card'>
        <div className={flipped ? "flipped " : ""}>
    {/* // <div className='card'key={card.id}> */}
            <img className='front' src={card.src} alt='front image'/>
            <img 
            className='back' 
            src='/img/cover.png' 
            alt='back image'
            onClick={handleClick}/>
            </div>
            </div>   
  )
}

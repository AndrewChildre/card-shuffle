
import React, {useState, useEffect} from 'react';

const Deck2 = () => {
    const [cardsx, setCardsx] = useState(null)

    const getCards = ()=>{
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=10')
        .then((res) => res.json())
        .then(res => {
            console.log(res);
            setCardsx(res)
        })
    }
    useEffect(()=>{
        getCards()

    },[])
    return (

        <div>

            <div className='card-dis'>
                {cardsx && cardsx.cards.map((card, index) => {
                    return(
                        <div key={index}>
                        <img  src={card.image} alt="" />

                        </div>
                    )
                })}
            </div>
        
           {/* <p>{card ? <h1><img src={card.cards[1].image}/></h1> : null}</p>
           <button onClick={getCards}>get  card</button> */}
        


        </div>
    );
};

export default Deck2;
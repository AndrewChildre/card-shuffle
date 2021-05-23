import React, { useState, useEffect } from 'react';

const Deck = () => {
	const [cardsx, setCardsx] = useState(null);

	const getCards = () => {
		fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=10')
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setCardsx(res);
			});
	};
	useEffect(() => {
		getCards();
	}, []);
	return (
		<div>
			<div className='card-dis'>
				{cardsx &&
					cardsx.cards.map((card, index) => {
						return (
							<div key={index}>
								<img src={card.image} alt='' />
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Deck;

import Profile from './Profile';
import Card from './Card';
import CardsSection from './CardsSection';

export default function Main(props) {
  return (
    <main className="main">
      <Profile {...props}/>
      <CardsSection>
        {props.cards.map(card => {
            return <Card key={card._id} {...card} onCardDelete={props.onCardDelete} onCardClick={props.onCardClick}/>
          })
        }
      </CardsSection>
    </main>
  )
}
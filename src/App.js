import './App.css';
import { useState } from 'react';

const ideas = {
  goingOut: [
    'Mini golf',
    'Bowling',
    'Cinema',
    'Nearby town',
    'Explore nature',
    'Chinese',
    'Thai',
    'Indian',
    'Korean',
    'Italian',
    'Mexican',
    'Try new restaurant',
    'Go to a bar',
  ],
  stayingIn: [
    'Painting',
    'Build a fort and watch a movie',
    'Make a time capsule',
    'Scavenger hunt',
    'Spa day',
    'Build lego',
    'Cook a new dish',
    "Watch Ryan's favourite movie",
    "Watch Itha's favourite movie",
    'Watch favourite Harry Potter movie',
    'Murder mystery night',
    'Do arts and crafts youtube tutorial',
    'Learn a new dance',
    'Make origami',
    'DIY ice cream making',
    'Watch a classic Disney movie',
    'Watch action movie from Disney Plus (not marvel)',
    'Watch a marvel movie',
    'Watch a romantic comedy',
    'Homemade Pizza night',
    'Wine and karaoke',
    'Plan a trip',
    'Make a bucket list',
    'Make your own recipe',
    'Play a board game',
  ],
  expensive: [
    'Take a pottery class',
    'Go stay at a hotel',
    'Go to far city',
    'Go to a top rated restaurant',
    'Rock paper scissor date',
    'Glamping',
    'Wine tasting',
    'Petting zoo',
    'Massage',
    'Pedicure',
    'Axe throwing',
    'Go kart',
    'Otherworld',
    'Clays',
    'London Dungeon',
    'Paintball or Lazer tag',
    'Escape room',
    'Cooking class',
  ],
};

const getRandomItem = items => items[Math.floor(Math.random() * items.length)];
function App() {
  const [item, setItem] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <div className="IandR">Itha + Ryan</div>
        <div className="buttonGroup">
          <div className="goBtn" onClick={() => setItem(getRandomItem(ideas.goingOut))}>
            Going out
          </div>
          <div
            className="siBtn"
            onClick={() => setItem(getRandomItem(ideas.stayingIn))}
          >
            Staying in
          </div>
          <div
            className="exBtn"
            onClick={() => setItem(getRandomItem(ideas.expensive))}
          >
            Expensive
          </div>
        </div>
        <div className="theItem">{item}</div>
        <div>
          <div
            className="GMABtn"
            onClick={() =>
              setItem(
                getRandomItem([
                  ...ideas.stayingIn,
                  ...ideas.goingOut,
                  ...ideas.expensive,
                ])
              )
            }
          >
            GIVE ME ANYTHING
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import data from './gallery.json';
import Card from './assets/components/Card';

function App() {
  return (
    <main>
      {data.hits.map((card) => {
        return (
          <Card
            key={card.id}
            previewURL={card.previewURL}
            link={card.webformatURL}
            text={card.user}
          />
        );
      })}
    </main>
  );
}

export default App;

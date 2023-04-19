import './style.css';
import Header from '../../components/header'
import Controls from '../../components/controls';
import Card from '../../components/card'
import { musics } from '../../musics'
import { useState } from 'react'

function Home() {
  const [musicsData, setMusicsData] = useState([...musics])
  const [currentMusic, setCurrentMusic] = useState({ id: 0, title: '', artist: '' })

  function setMusic(music) {
    setCurrentMusic(music);
  }

  return (
    <div className="container">
      <Header />
      <main>
        <h2>The Best Play List</h2>
        <div className='container-cards'>
          {musicsData.map((music) => (
            <div
              onClick={() => setMusic(music)}
              key={music.id}
            >
              <Card
                title={music.title}
                cover={music.cover}
                description={music.description}
              />
            </div>
          ))}
        </div>
      </main>
      <Controls
        currentMusic={currentMusic}
      />
    </div>
  );
}

export default Home;

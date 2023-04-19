import './style.css';
import Header from '../../components/header'
import Controls from '../../components/controls';
import Card from '../../components/card'
import { musics } from '../../musics'
import { useRef, useState } from 'react'

function Home() {
  const [musicsData, setMusicsData] = useState([...musics])
  const [currentMusic, setCurrentMusic] = useState({ id: 0, title: '', artist: '' })
  const audioRef = useRef(null)
  const [iconBtn, setIconBtn] = useState('pause')

  function setMusic(music) {
    audioRef.current.src = music.url;
    setIconBtn('play')
    setCurrentMusic(music);
  }

  function handleChangeMusic(option) {
    if (currentMusic.id === 0) {
      return;
    }

    const newMusicId = option === 'next'
      ? currentMusic.id + 1
      : currentMusic.id - 1

    const otherMusic = musicsData.find((music) => music.id === newMusicId)

    if (!otherMusic) {
      return;
    }

    setMusic(otherMusic)
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
        audioRef={audioRef}
        currentMusic={currentMusic}
        iconBtn={iconBtn}
        setIconBtn={setIconBtn}
        handleChangeMusic={handleChangeMusic}
      />

      <audio ref={audioRef} />
    </div>
  );
}

export default Home;

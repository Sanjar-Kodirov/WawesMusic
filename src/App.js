import React, {useState, useRef} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import './styles/app.scss'
import data from './data'
import Library from './components/Library'
import Nav from './components/Nav'

function App() {
  const audioRef = useRef(null) 
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
  })
  const [libraryStatus, setLibraryStatus] = useState(false);
  function handlerTimeUpdate(e){
        let currentTime = e.target.currentTime;
        let duration = e.target.duration;
        setSongInfo({
            ...songInfo,
            currentTime: currentTime,
            duration: duration
        })
  }
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library 
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        songs={songs}  
        audioRef={audioRef}
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying}
        setCurrentSong={setCurrentSong} />  
      <audio 
        onTimeUpdate={handlerTimeUpdate} 
        onLoadedMetadata = {handlerTimeUpdate}
        ref={audioRef} 
        src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default App;

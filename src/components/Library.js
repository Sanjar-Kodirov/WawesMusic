import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import "../styles/_library.scss"
import LibrarySong  from './LibrarySong'

const Library = ({songs, setCurrentSong, setIsPlaying, audioRef, isPlaying,setSongs,libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>library</h2>
            <div className="library-songs">
                { songs.map( song => {
                    return (
                        <LibrarySong 
                            setSongs={setSongs}
                            songs={songs}
                            setIsPlaying={setIsPlaying}
                            setCurrentSong={setCurrentSong}
                            id={song.id} 
                            song={song} 
                            audioRef={audioRef}
                            isPlaying={isPlaying}
                        />
                    )

                } ) }
            </div>
        </div>
    )
}

export default Library

import React from 'react'


const LibrarySong = ({song, songs,id, setCurrentSong, isPlaying, audioRef ,setSongs}) => {
    function songSelectHandler(){
        const selectedSong = songs.filter( el => el.id == id )
        setCurrentSong(selectedSong[0])
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then(() => {
                    audioRef.current.play()
                })
            }
        }
        audioRef.current.play()
        const newSong = songs.map(song => {
            if(song.id === id){
                return{
                    ...song,
                    active: true,
                }
            }else{
                return{
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSong)
    }
    return (
        <div onClick={songSelectHandler} className={`library-song ${ song.active == true ? "selected" : ""}`}>
            <img src={song.cover} alt=""/>
            <div className="songDescription">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;
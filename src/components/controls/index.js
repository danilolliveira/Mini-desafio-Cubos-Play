import './style.css'
import StopIcon from '../../assets/stop.svg'
import PreviousIcon from '../../assets/previous.svg'
import PlayIcon from '../../assets/play.svg'
import PauseIcon from '../../assets/pause.svg'
import NextIcon from '../../assets/next.svg'
import { useRef, useState } from 'react'



export default function Controls({ audioRef, currentMusic, iconBtn, setIconBtn, handleChangeMusic }) {

    let intervalProgress = null;

    const progressRef = useRef(null)

    function playPause() {
        intervalProgress = setInterval(() => {
            if (audioRef.current.paused) {
                clearInterval(intervalProgress)
            }

            const duration = audioRef.current.duration / 60;
            const currentProgres = ((audioRef.current.currentTime / 60) * 100) / duration

            progressRef.current.style.width = `${currentProgres}%`
        }, 500);

        if (audioRef.current.paused) {
            audioRef.current.play();
            setIconBtn('pause')
            return;
        }
        audioRef.current.pause();
        setIconBtn('play')


    }

    return (
        <div className='container-controls'>
            <div className='preview-names'>
                <h2> {currentMusic.title} </h2>
                <strong> {currentMusic.artist} </strong>
            </div>

            <div className='container-player'>
                <div className='container-buttons'>
                    <img
                        src={StopIcon}
                        alt="Stop Button"
                        className='btn-control'
                    />
                    <img
                        src={PreviousIcon}
                        alt="Previous Button"
                        className='btn-control'
                        onClick={() => handleChangeMusic('previous')}
                    />
                    <img
                        src={iconBtn === 'pause' ? PauseIcon : PlayIcon}
                        alt=""
                        className='btn-play-pause'
                        onClick={() => playPause()}
                    />
                    <img
                        src={NextIcon}
                        alt="Next Button"
                        className='btn-control'
                        onClick={() => handleChangeMusic('next')}
                    />
                </div>

                <div className='container-progress'>
                    <strong className='start'>0</strong>

                    <div className='container-line'>
                        <div className='progress-line'></div>
                        <div
                            className='progress-line-color'
                            ref={progressRef}
                        ></div>
                    </div>

                    <strong className='end'>3:45</strong>
                </div>
            </div>
            <div className='empty'>

            </div>

        </div>
    )
}
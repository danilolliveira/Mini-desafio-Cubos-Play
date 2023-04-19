import './style.css'
import StopIcon from '../../assets/stop.svg'
import PreviousIcon from '../../assets/previous.svg'
import PlayIcon from '../../assets/play.svg'
import PauseIcon from '../../assets/pause.svg'
import NextIcon from '../../assets/next.svg'



export default function Controls({ currentMusic }) {
    return (
        <div className='container-controls'>
            <div className='preview-names'>
                <h2> {currentMusic.title} </h2>
                <strong> {currentMusic.artist} </strong>
            </div>

            <div className='container-player'>
                <div className='container-buttons'>
                    <img src={StopIcon} alt="Stop Button" className='btn-control' />
                    <img src={PreviousIcon} alt="Previous Button" className='btn-control' />
                    <img src={PauseIcon} alt="" className='btn-play-pause' />
                    <img src={NextIcon} alt="Next Button" className='btn-control' />
                </div>

                <div className='container-progress'>
                    <strong className='start'>0</strong>

                    <div className='container-line'>
                        <div className='progress-line'></div>
                        <div className='progress-line-color'></div>
                    </div>

                    <strong className='end'>3:45</strong>
                </div>
            </div>
            <div className='empty'>

            </div>

        </div>
    )
}
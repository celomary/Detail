import {useRef, useState, useEffect} from 'react';
import '../styles/Video.scss';
const Video = ({src, className, controls, autoplay, loop})=>{
    const video = useRef(null);
    const [paused, setPaused] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(0.0);
    const [muted, setMuted] = useState({muted: false, lastValue: 0});
    useEffect(()=>{
        if (video.current)
        {
            if (autoplay)
            {
                video.current.volume = 0;
                video.current.autoplay  = true;
                setPaused(false);
                setMuted({muted: true, lastValue: 1});
            }
            if (loop)
            {
                video.current.loop = true;
            }
            if (controls)
            {
                video.current.addEventListener('timeupdate', ()=>{
                    setCurrentTime(()=> video.current.currentTime);
                })
                video.current.addEventListener('ended', ()=>{
                    setPaused(true);
                })

                video.current.addEventListener('volumechange', ()=>{
                    setVolume(()=> video.current.volume);
                })
                setVolume(video.current.volume);
                return ()=>{
                    video.current.removeEventListener('timeupdate', ()=>{
                        setCurrentTime(()=> video.current.currentTime);
                    });
                    video.current.removeEventListener('ended', ()=>{
                        setPaused(true);
                    });
                    video.current.removeEventListener('volumechange', ()=>{
                        setVolume(()=> video.current.volume);
                    });
                }
            }

        }
    }, []);
    return <div className={`video-container ${className}`}>
        <video ref={video}>
            <source src={src} />
        </video>
        {controls && <div className='controls'>
            <div className="play-pause-controller">
            <span className="material-symbols-rounded" onClick={()=>{
                if (paused)
                    video.current.play();
                else
                    video.current.pause();
                setPaused(pause => !paused);
            }}>
            {
                !paused ? <>pause</>: <>play_arrow</>
            }
            </span>
            </div>
            <div className="progress-controller">
                <div className='duration-progress'>
                <div className="time">
                        <p>{video.current && video.current.currentTime ? currentTime.toFixed(2) : '__:__'} / {video.current && video.current.duration ? video.current.duration.toFixed(2) : '__:__'}</p>
                    </div>
                    <div className='progress-bar'>
                        <input type='range' min='0' max='100' step="0.1"  onChange={(e)=>{
                            video.current.currentTime = parseFloat(e.target.value) * video.current.duration / 100;
                        }}/>
                        <div className="current_progress" style={{width: `${!video.current ? 0  :  Math.floor(currentTime / video.current.duration * 100)}%`}}/>
                    </div>
                </div>
                <div className="volume-progress">
                <div className="volume-icon">
                        <span className="material-symbols-rounded" onClick={()=>{
                            if (!muted.muted)
                            {
                                setMuted(state => ({muted: !muted.muted, lastValue: volume}));
                                video.current.volume = 0;
                            }
                            else {
                                video.current.volume = muted.lastValue;
                                setMuted(state => ({muted: !muted.muted, lastValue: 0}));

                            }
                        }}>
                            {
                                muted.muted ?<>volume_off</>:<>volume_up</>
                            }
                        </span>
                    </div>
                    <div className="volume-progressbar">
                        <input type='range' min='0' max='100' step="0.1" onChange={(e)=>{
                            video.current.volume = parseFloat(e.target.value) / 100;
                            if (muted.muted)
                            {
                                setMuted({muted: false, lastValue: 0})
                            }
                        }}/>
                        <div className="current_progress" style={{width: `${Math.round(volume * 100)}%`}} />
                    </div>

                </div>
            </div>
        </div>
        }
    </div>
}

export default Video;
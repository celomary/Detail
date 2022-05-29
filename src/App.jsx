import { useState, useEffect } from 'react'
import './App.scss'
import Header from './components/Header'
import Video from './components/Video'
import introduction from './assets/first.mp4';
import second from './assets/second.mp4';
import third from './assets/third.mp4';
import fourth from './assets/fourth.mp4';
import fifth from './assets/fifth.mp4';
import sixth from './assets/sixth.mp4';
import zoom from './assets/zoom.png';
import framer from './assets/framer.png';
import meet from './assets/meet.png';
import twitch from './assets/twitch.png';
import youtube from './assets/youtube.png';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [ref, inView] = useInView({threshold: .8});
  const [videoRef, videoInView] = useInView();
  const [platformRef, platformInView] = useInView({threshold: 0.8});
  const [smallRef1, smallInView1] = useInView({threshold: .8});
  const [smallRef2, smallInView2] = useInView({threshold: .8});
  const [smallRef3, smallInView3] = useInView({threshold: .8});
  const [smallRef4, smallInView4] = useInView({threshold: .8});
  const [smallRef5, smallInView5] = useInView({threshold: .8});
  const [lastRef, lastInView] = useInView({threshold: .9});

  const controls = useAnimation();
  const videoControls = useAnimation();
  const platfromControls = useAnimation();
  const smallControls1 = useAnimation();
  const smallControls2 = useAnimation();
  const smallControls3 = useAnimation();
  const smallControls4 = useAnimation();
  const smallControls5 = useAnimation();
  const lastControls = useAnimation();

  /* Variants */
  const firstSectionParentVariant = {
    show: {
      transition : {
        staggerChildren: 0.3,
      }

    }
  }
  const firstSectionVariant = {
    hide: {
      translateY: '-100%',
      opacity: 0,
    },
    show: {
      translateY: '0%',
      opacity: 1,

      transition:{
        type: "tween",
        staggerChildren: 1,
        delayChildren: 0.1,
      }
    }
  };

  const mainVideoVariant = {
    small: {
      scale: 0.7,
      opacity: 0
    },
    normal: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
        delay: .5
      }
    }
  };

  const platfromParentVariants = {
    show: {
      transition: {
       staggerChildren: .2,
      }
    }
  }
  const platformVariants = {
    hide: {
      opacity: 0,
      rotateZ: '25deg'
    },
    show: {
      opacity: 1,
      rotateZ: '0deg',
      transition: {
        type: 'spring',
      }
    }
  }

  const smallLeftVariants = {
    init: {
      translateX: '-100%',
      opacity: 0,
    },
    show: {
      translateX: '0%',
      opacity: 1,
    }
  }

  const smallRightVariants = {
    init: {
      translateX: '100%',
      opacity: 0,
    },
    show: {
      translateX: '0%',
      opacity: 1,
    }
  }

  const lastVariants = {
    init: {
      opacity: 0,
    },
    animate: {
      rotate: ['-15deg', '0deg', '15deg', '0deg'],
      opacity: 1,
      transition : {
        type: 'spring',
      }
    }
  }

  /* EFFECTS */
  useEffect(()=>{
    if (inView)
    {
      controls.start('show');
    }
  }, [inView, controls]);
  useEffect(()=>{
    if (videoInView)
    {
      videoControls.start('normal');
    }
  }, [videoInView, videoControls]);
  
  useEffect(()=>{
    if (platformInView)
    {
      platfromControls.start('show');
    }
  }, [platformInView, platfromControls])


  useEffect(()=>{
    if (smallInView1) {
      smallControls1.start('show');
    }
  }, [smallInView1, smallControls1]);

  useEffect(()=>{
    if (smallInView2) {
      smallControls2.start('show');
    }
  }, [smallInView2, smallControls2]);

  useEffect(()=>{
    if (smallInView3) {
      smallControls3.start('show');
    }
  }, [smallInView3, smallControls3]);

  useEffect(()=>{
    if (smallInView4) {
      smallControls4.start('show');
    }
  }, [smallInView4, smallControls4]);

  useEffect(()=>{
    if (smallInView5) {
      smallControls5.start('show');
    }
  }, [smallInView5, smallControls5]);


  useEffect(()=>{
    if (lastInView)
    {
      lastControls.start('animate');
    }
  }, [lastInView, lastControls])
  return (
    <div className="App">
      <MobileMenu className={showMenu ? 'show-menu': ''} setShowMenu={setShowMenu}/>
      <div className="app-container">
      <Header setShowMenu={setShowMenu}/>
      <motion.div className="main-video" ref={videoRef} animate={videoControls} initial="small" variants={mainVideoVariant}>
      <Video src={introduction} className='introduction' controls autoplay />
      </motion.div>
      <motion.div className="first-section" ref={ref} animate={controls} initial="hide" variants={firstSectionParentVariant}>
        <motion.h1 variants={firstSectionVariant}>Cinematic video made simple</motion.h1>
        <motion.p variants={firstSectionVariant}>Record and stream high-quality video with your Mac. Detail works with your iPhone, iPad, built-in webcam, or any other camera.</motion.p>
        <motion.button className='body-button' variants={firstSectionVariant}>TRY DETAIL FREE</motion.button>
      </motion.div>
      <motion.div className="platform-section" ref={platformRef} animate={platfromControls} variants={platfromParentVariants} initial='hide'>
          <motion.h1 variants={platformVariants}>Detail works with
the platforms you love</motion.h1>
          <motion.div className="platforms">
            <motion.div variants={platformVariants} className="platform">
              <img src={zoom} alt="platform logo" />
            </motion.div>
            <motion.div className="platform" variants={platformVariants}>
              <img src={framer} alt="platform logo" />
            </motion.div>
            <motion.div className="platform" variants={platformVariants}>
              <img src={meet} alt="platform logo" />
            </motion.div>
            <motion.div className="platform" variants={platformVariants}>
              <img src={twitch} alt="platform logo" />
            </motion.div>
            <motion.div className="platform" variants={platformVariants}>
              <img src={youtube} alt="platform logo" />
            </motion.div>
          </motion.div>
          <motion.p variants={platformVariants}><a href="#">Find out more</a></motion.p>
      </motion.div>
      <motion.div className="small-section" ref={smallRef1} animate={smallControls1} initial="init">
        <div className="container-section">
        <motion.div className="text-side" variants={smallLeftVariants}>
            <h1><span className="marker1">The power</span> of a production studio without the price tag</h1>
            <p>Easily add text, titles, and images to make your videos come to life. Combine cameras, Scenes and overlays for truly cinematic content.</p>
          </motion.div>
          <motion.div className="video-side" variants={smallRightVariants}>
            <Video src={second}  autoplay loop />
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="small-section" ref={smallRef2} animate={smallControls2} initial="init">
        <div className="container-section">
          <motion.div className="video-side" variants={smallLeftVariants}>
            <Video src={third} width={'100%'} height={'auto'} autoplay loop />
          </motion.div>
          <motion.div className="text-side" variants={smallRightVariants}>
            <h1>Make every shot <span className="marker2">the perfect shot</span></h1>
            <p>With AI-powered face detection and buttery smooth Auto Framing, you're always in shot. No more static performances or presentations — move around the room and the camera comes with you.</p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="small-section" ref={smallRef3} animate={smallControls3} initial="init">
        <div className="container-section">
          <motion.div className="text-side" variants={smallLeftVariants}>
            <h1><span className="marker3">Instantly</span><br/>
upgrade your camera</h1>
            <p>The best camera is the one you have with you. Use your iPhone as an HD webcam for livestreaming video calls, or recording. Connect via USB for the best image quality or go wireless to shoot cinematic video on the move.</p>
          </motion.div>
          <motion.div className="video-side" variants={smallRightVariants}>
            <Video src={fourth} loop autoplay />
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="small-section" ref={smallRef4} animate={smallControls4} initial="init">
        <div className="container-section">
          <motion.div className="video-side" variants={smallLeftVariants}>
            <Video src={fifth}  autoplay loop />
          </motion.div>
          <motion.div className="text-side" variants={smallRightVariants}>
            <h1><span className="marker4">Simple</span> but powerful controls</h1>
            <p>With a beautifully designed interface and intuitive controls, Detail gives you all the tools you need to create stunning video, without getting in your way.</p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="small-section" ref={smallRef5} animate={smallControls5} initial="init">
        <div className="container-section">
          <motion.div className="text-side" variants={smallLeftVariants}>
            <h1><span className="marker5">Multi-camera</span> made easy</h1>
            <p>Connect multiple cameras, shoot from different angles, and switch between them while you record or stream.</p>
          </motion.div>
          <motion.div className="video-side" variants={smallRightVariants}>
            <Video src={sixth} loop autoplay />
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="last-section" animate={lastControls} initial="init" ref={lastRef}>
        <div className="content">
          <motion.h1 variants={lastVariants}>Tell your story
with Detail.</motion.h1>
<motion.button className="body-button" variants={lastVariants}>TRY DETAIL FREE</motion.button>
        </div>
      </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default App

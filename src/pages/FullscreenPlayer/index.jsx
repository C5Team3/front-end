/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-console */
import React, { useContext, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { PlayerContainer } from "../../containers/LayoutContainers";
import FullscreenPlayer from "../../components/FullscreenPlayer";
import { Context } from "../../utils/Context";

const FullscreenPlayerPage = (props) => {
  const audioRef = useRef();
  const {
    songData,
    queue,
    setSongData,
    playerStatus,
    setPlayerStatus,
    autoplay,
    setAutoplay,
    track,
    setTrack,
  } = useContext(Context);

  useEffect(() => {
    audioRef.current.src = songData.songURL;
  }, [songData.songURL]);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlayerStatus("play");
      setAutoplay(true);
    } else {
      audioRef.current.pause();
      setPlayerStatus("pause");
      setAutoplay(false);
    }
  };

  const nextSong = () => {
    if (!audioRef.current.paused) {
      togglePlay();
    }
    if (track < queue.length - 1) {
      setSongData({
        ...songData,
        songTitle: `${queue[track + 1].title}`,
        songURL: `${queue[track + 1].preview}`,
      });
      setAutoplay(true);
      setTrack(track + 1);
      setPlayerStatus("play");
    } else {
      setSongData({
        ...songData,
        songTitle: `${queue[0].title}`,
        songURL: `${queue[0].preview}`,
      });
      setTrack(0);
    }
  };

  const previousSong = () => {
    if (!audioRef.current.paused) {
      togglePlay();
    }
    if (track > 0) {
      setSongData({
        ...songData,
        songTitle: `${queue[track - 1].title}`,
        songURL: `${queue[track - 1].preview}`,
      });
      setAutoplay(true);
      setTrack(track - 1);
      setPlayerStatus("play");
    }
  };

  return ReactDOM.createPortal(
    <PlayerContainer playerDisplay={props.playerDisplay}>
      <audio ref={audioRef} autoPlay={autoplay} />
      <FullscreenPlayer
        minimizePlayer={props.minimizePlayer}
        songData={songData}
        playerStatus={playerStatus}
        togglePlay={togglePlay}
        nextSong={nextSong}
        previousSong={previousSong}
      />
    </PlayerContainer>,
    document.getElementById("player")
  );
};

export default FullscreenPlayerPage;

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

import HomeNavbar from "./components/navBars/homeNavbar";

const Game = () => {
  const ref = React.useRef();
  const onLoad = () => {
    const url = ref.current.contentWindow.location.href;
  };
  return (
    <>
      <HomeNavbar className="" />
      <div className="">
        <iframe
          style={{ width: "100%", height: "600px", overflow: "hidden" }}
          display="initial"
          position="relative"
          scrolling="no"
          onLoad={onLoad}
          src="../NFT"
          ref={ref}
        ></iframe>
      </div>
      {/* // <Unity
    //   unityProvider={unityProvider}
    //   style={{ width: 800, height: 600 }}
    //   src=" http://127.0.0.1:8080"
    // /> */}
    </>
  );
};

export default Game;

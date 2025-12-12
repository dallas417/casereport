import "./Init.css";
import fbiSeal from "../../assets/fbi.png";
import "../../assets/animate.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Init() {
    const navigate = useNavigate(); 

    const sealRef = useRef(null);
    const [animationComplete, setAnimationComplete] = useState(false); 

    const promptSignIn = () => {
        if (animationComplete) return navigate("/signin");
        sealRef.current.style.animation = "flipOutX 3s forwards";
        setAnimationComplete(true);
    }

    return (
        <div className="app">
            <img className="seal" src={fbiSeal} onAnimationEnd={promptSignIn} ref={sealRef}/>
        </div>
    )
}
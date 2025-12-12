import "./Dash.css";
import annagarcia from "../../assets/annagarcia.png";
import "../../assets/animate.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../utils/Auth";

export default function App() {
    const navigate = useNavigate(); 

    const { loading, session } = Auth();
    const [ready, setReady] = useState(false);
    
    useEffect(() => {
        if (loading) return; 
        if (!session) return navigate("/init");
        setReady(true); 
    }, [loading]);

    const goToCase = () => {
        navigate("/93-2003-XC");
    }

    if (!ready) return null; 
  return (
    <div className="fbi-system">
      <div className="scan-line"></div>
      
      <header className="system-header">
        <span className="bureau-title">FEDERAL BUREAU OF INVESTIGATION</span>
        <span className="system-status">SYSTEM STATUS: SECURE // LEVEL 4</span>
      </header>

      <main className="dossier-container">
        <div className="case-card">
          <div className="stamp-overlay">CONFIDENTIAL</div>
          
          <div className="mugshot-wrapper">
            <img src={annagarcia} alt="Subject: Anna Garcia" className="mugshot" />
            <div className="reticle"></div>
          </div>

          <div className="case-details">
            <h1 className="subject-name">SUBJECT: GARCIA, ANNA</h1>
            <div className="meta-data">
              <p><strong>CASE ID:</strong> 93-2003-XC</p>
              <p><strong>STATUS:</strong> <span className="status-indicator">ACTIVE INVESTIGATION</span></p>
              <p><strong>DOB:</strong> 9/11/2004 </p>
            </div>
            
            <button className="access-btn" onClick={goToCase}>
              ACCESS CASE FILE_
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
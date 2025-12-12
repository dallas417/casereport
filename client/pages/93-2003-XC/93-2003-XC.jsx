import React from 'react';
import './AnnaGarciaCase.css';

import piedmontHeadShot from "../../assets/piedmont.png";
import diazHeadShot from "../../assets/diaz.png";
import opalHeadShot from "../../assets/opal.png";
import hallHeadShot from "../../assets/hall.png";
import greeneHeadShot from "../../assets/greene.png";
import placeholderCrimeScene from "../../assets/crimescene.png";

const AnnaGarciaCase = () => {
  return (
    <div className="case-file-container">
      <div className="scan-overlay"></div>
      
      {/* --- Top System Bar --- */}
      <header className="db-header">
        <div className="db-left">
          <span className="blinkers"> --- </span> SECURE DATABASE CONNECTION ESTABLISHED. ACCESS LEVEL: AGENT
        </div>
        <div className="db-right">
          CASE ID: 93-2003-XC | STATUS: CLOSED (PENDING REVIEW)
        </div>
      </header>

      <main className="case-grid">
        
        {/* === LEFT COLUMN: Main Narrative & Forensics === */}
        <div className="grid-col-left">
          
          {/* --- Case Title Header --- */}
          <section className="panel case-title-panel">
            <h1>
              <span className="prefix">SUBJECT DECEASED:</span> GARCIA, ANNA
            </h1>
            <div className="closed-stamp">CASE CRACKED MS Z</div>
          </section>

           {/* --- Section 1: Initial Incident Report --- */}
          <section className="panel narrative-panel">
             <h2 className="panel-header">Create Initial Incident Report [Log 10:00 HRS]</h2>
             <div className="panel-content courier-text">
                <p><strong>TIMELINE OF INITIAL RESPONSE:</strong> At approximately 1000 hours local time, emergency services (911 dispatch) received a distress communication from an individual identifying as Taylor Diaz (Age: 19, Occupation: College Student). The caller reported discovering a lifeless body within the premises of the Gentry Life Science Building on campus grounds.</p>
                <p>The decedent was visually identified by the caller as Anna Garcia, a fellow classmate. Local law enforcement assets were immediately deployed, arriving on campus at 1010 hours to secure the perimeter and establish a sterile crime scene. Emergency Medical Technicians (EMTs) arrived concurrently at 1010 hours to assess the subject.</p>
             </div>
          </section>

          {/* --- Section 2: Decedent Profile --- */}
          <section className="panel profile-panel">
            <h2 className="panel-header">Subject Profile Data</h2>
            <div className="data-grid">
                <div className="data-point"><span className="label">Name:</span> Anna Garcia</div>
                <div className="data-point"><span className="label">Age:</span> 20</div>
                <div className="data-point"><span className="label">Height:</span> 5' 6" (167.6 cm)</div>
                <div className="data-point"><span className="label">Weight:</span> 135 lbs (61.2 kg)</div>
                <div className="data-point full-width"><span className="label">Occupation:</span> Undergraduate College Student; Part-time research assistant at Gentry Life Science Laboratory.</div>
            </div>
          </section>

           {/* --- Section 3: Crime Scene & Forensics Narrative --- */}
           <section className="panel forensics-panel">
            <h2 className="panel-header">Forensic & Environmental Analysis</h2>
            <div className="panel-content courier-text">
                <p><strong>SCENE CONDITIONS:</strong> The decedent was located inside the Gentry Life Science research lab. Ambient room temperature at the time of processing was recorded at a constant 70°F (21.1°C). </p>
                
                <div className="crime-scene-image-container">
                    <img src={placeholderCrimeScene} alt="Crime Scene Data" className="evidence-img" />
                    <span className="img-caption">FIG 1.A - PRIMARY LOCATION [GENTRY LAB]</span>
                </div>

                <p><strong>PHYSIOLOGICAL STATE UPON RECOVERY:</strong> EMT assessment at 1010 hours confirmed absence of vital signs. Subsequent forensic examination noted the body was in a state of full rigor mortis, indicating a significant time interval since death. Algor Mortis protocol was initiated: Rectal temperature recorded at 1130 hours was 78.2°F (25.7°C). </p>
                <p><strong>TRAUMA ASSESSMENT:</strong> Visual inspection revealed significant blunt force trauma to the cranial region. A substantial laceration with surrounding contusion was noted on the head, consistent with an uncontrolled fall striking laboratory equipment or flooring.</p>
                <p><strong>BIOLOGICAL EVIDENCE:</strong> Pooling blood was discovered adjacent to the cranial wound. Samples collected (Evidence ID# B-119A) yielded a complete DNA profile matching that of the decedent, Anna Garcia. No foreign DNA was detected in the immediate blood spatter.</p>
            </div>
          </section>

           {/* --- Section 4: Toxicology --- */}
           <section className="panel toxicology-panel alert-border">
            <h2 className="panel-header alert-text">CRITICAL: Toxicology Report Summary</h2>
             <div className="panel-content courier-text">
                 <p>Post-mortem biochemical analysis returned critical findings. Screening detected the presence of Acetaminophen (Tylenol) Garcia's system. The presecene of Acetaminophen was not immeditealy notable, given it's standard therapeutic concentration, but became a particular calamatiy given other substances found in the decendents system. </p>
                 <p className="highlight-alert"><strong>FATAL ANOMALY DETECTED:</strong> Further spectrometry confirmed lethal concentrations of Potassium Cyanide within the decedent's system.</p>
                 <p><strong>INVESTIGATIVE CONCLUSION:</strong> The mechanism of death is determined to be acute cyanide poisoning, introduced via a tampered Acetaminophen capsule ingested by the subject. The head trauma is considered secondary to the incapacitation caused by the poison. Subsequent investigation into the Tylenol supply chain and the listed Persons of Interest conclusively determined that none of the immediate suspects had direct involvement with the introduction of the cyanide agent into the specific bottle utilized by the decedent. Garcia likely died </p>
             </div>
           </section>

        </div> {/* End Left Col */}


        {/* === RIGHT COLUMN: Subjects of Interest === */}
        <div className="grid-col-right">
           <section className="panel poi-panel sticky-panel">
            <h2 className="panel-header">Persons of Interest (P.O.I.) Matrix</h2>
            <div className="polygraph-summary">
                <strong>INTERROGATION STATUS:</strong> All identified subjects have submitted to standard polygraph examination procedures.
                <br/><span className="status-ok">[RESULT: NO DECEPTION INDICATED FOR ALL SUBJECTS]</span>
            </div>

            <div className="poi-grid">
                {/* POI 1 */}
                <div className="poi-card">
                    <img src={piedmontHeadShot} alt="Eric Piedmont" className="mugshot-small"/>
                    <div className="poi-data">
                        <h3>Eric Piedmont</h3>
                        <p className="redacted-text">[20-year-old college student. He was Anna's boyfriend. Individuals note tha Anna and Eric had been arguing before Anna's death, but seemed to have worked things out. Piedmont is of good character and indicates nothing suspicious.]</p>
                    </div>
                </div>
                 {/* POI 2 */}
                 <div className="poi-card">
                    <img src={opalHeadShot} alt="Dr Elsie Opal" className="mugshot-small"/>
                    <div className="poi-data">
                        <h3>Dr. Elsie Opal</h3>
                        <p className="redacted-text">[50-year-old college professor. Anna and Opal had a good relationship. Before Garcia's murder she requested a letter of recommendation from Opal. Although Opal declined, she is still of good character and indicates nothing suspoicious.]</p>
                    </div>
                </div>
                 {/* POI 3 */}
                 <div className="poi-card">
                    <img src={hallHeadShot} alt="Dominique Hall" className="mugshot-small"/>
                    <div className="poi-data">
                        <h3>Dominique Hall</h3>
                        <p className="redacted-text">[19-year-old college student. Was a classmate of Anna Garcia. Garica and Hall and a competitive relationship. Before Garcia's murder, both her and hall had been competeing for a prestigious scholarship which Garcia won. However, no evidence connects Hall to Garcia's murder. </p>
                    </div>
                </div>
                 {/* POI 4 */}
                 <div className="poi-card">
                    <img src={diazHeadShot} alt="Taylor Diaz" className="mugshot-small"/>
                    <div className="poi-data">
                        <h3>Taylor Diaz</h3>
                        <p className="redacted-text">[19-year-old college studnet. He was a classmate and friend of Anna Garcia. Diaz found the decendent after she had passed away in the research lab and immediatley notified law enforcement.]</p>
                    </div>
                </div>
                 {/* POI 5 */}
                 <div className="poi-card">
                    <img src={greeneHeadShot} alt="Sam Greene" className="mugshot-small"/>
                    <div className="poi-data">
                        <h3>Sam Greene</h3>
                        <p className="redacted-text">[20-year-old college student. Greene and Garcia were teammates on the same soccer team. Individuals note that Garcia and Greene were arguing a soccer tournment before Garcia's death. Garcia also collided with Greene during a soccer practice shortly before her passing.]</p>
                    </div>
                </div>
                {/* Empty slot for layout balance if needed, or add 6th later */}
                 <div className="poi-card empty-slot">
                    <div className="poi-data">
                        <h3>[SUSPECTS PRESUMED INNOCENT UNLESS PROVEN GUILTY]</h3>
                    </div>
                </div>

            </div>
           </section>
        </div>

      </main>
    </div>
  );
};

export default AnnaGarciaCase;

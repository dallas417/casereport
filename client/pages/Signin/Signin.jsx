import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { supabase } from "../../assets/supabase";
import { Auth } from "../../utils/Auth";
import Swal from "sweetalert2";
import * as EmailValidator from "email-validator"; 
import "./Signin.css"; 
import "../../assets/animate.css";
import "sweetalert2/dist/sweetalert2.min.css";

export default function Signin() {
    const navigate = useNavigate();  
    const emailRef = useRef(null); 
    const passwordRef = useRef(null); 
    const signinButtonRef = useRef(null);
    const [emailErrorAnim, setEmailErrorAnim] = useState(false); 
    const [passwordErrorAnim, setPasswordErrorAnim] = useState(false);
    const [signingIn, setSigningIn] = useState(false); 
    const { loading, session } = Auth(); 
    const [ready, setReady] = useState(false);

    const signinNotification = Swal.mixin({
        toast: true,
        position: 'top-end', 
        showConfirmButton: false,
    });

    useEffect(() => {
        if (loading) return; 
        if (session) return navigate("/");
        setReady(true); 
    }, [loading]);

    const verifyFormat = (e) => {
        e.preventDefault();

        let email = emailRef.current?.value; 
        let password = passwordRef.current?.value; 

        if (EmailValidator.validate(email) && email != "" && password != "" && navigator.onLine) {
            signin(email, password);
            return; 
        }

        if (!EmailValidator.validate(email) || email === "") setEmailErrorAnim(true); 
        if (password === "") setPasswordErrorAnim(true);
        if (navigator.onLine !== null && !navigator.onLine) { 
            signinNotification.fire({
                title: "Check your connection", 
                icon: "warning",
                timer: 3000,
            });
        }; 
    };

    const handleEmailAnimationEnd = () => setEmailErrorAnim(false); 
    const handlePasswordAnimationEnd = () => setPasswordErrorAnim(false);

    const signin = async (email, password) => {
        if (signingIn) return; 
        setSigningIn(true); 
        signinNotification.fire({
            title: "Signing in...",
            icon: "info",
        })
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        console.log(data);
        if (data.session) {
            Swal.fire({
                title: "Access Granted",
                text: "You can now access and view case reports assigned to you!",
                icon: "success",
                timer: 3000,
                showConfirmButton: false,
            });
            setTimeout(() => { navigate("/"); }, 3000);  
        };
        if (error) {
            if (error.message === "Invalid login credentials") error.message = "Access Denied";
            signinNotification.fire({
                title: error.message,
                icon: "error",
                timer: 3000,
            });
            setSigningIn(false);
        };
    };

    if (!ready) return null; 
    return (
        <div id="page-wrapper" className="signin-page"> 
            <main className="signin-wrapper"> 
                <h1 className="signin-header"> Sign in </h1>
                <p> To continue to FBI's Case Reports </p>
                <form onSubmit={verifyFormat}>  
                    <label htmlFor="emailInput">Email</label>
                    <input className={`${emailErrorAnim ? "rubberBand" : ""} signin-email-input`} type="email" ref={emailRef} onAnimationEnd={handleEmailAnimationEnd}/>
                    <label htmlFor="passwordInput">Password</label>
                    <input className={`${passwordErrorAnim ? "rubberBand" : ""} signin-password-input`} type="password" ref={passwordRef} onAnimationEnd={handlePasswordAnimationEnd} /> 
                    <button className={`${signingIn ? "disabled" : ""} signin-button`} ref={signinButtonRef}>Sign In</button>
                </form>
            </main>
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import './styles.css';

function LoadingScreen({ isLoading }) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])

    return (
        <div className={`text-container ${isLoading ? "top-minus-9999" : "bottom-0"}`}>
            <h1 className={`outline-text ${show ? "show" : ""}`}>QUIRK & QUILL STUDIOS</h1>
        </div>
    );
}

export default LoadingScreen;

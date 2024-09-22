import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button
// is clicked, automatically focus the text input field using useRef.

const UseRef = () => {
    const textRef = useRef();

    useEffect(() => {
        textRef.current.focus();
    }, []);

    const handleButtonClick = () => {
        textRef.current.focus()
    };

    return (
        <div>
            <input ref={textRef} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
}

export default UseRef;
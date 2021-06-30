import { useState, useEffect } from "react";

const useMouseCoordinates = () => {
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: null, y: null });

    const updateMouseCoordinates = e => {
        setMouseCoordinates({ 
            x: e.clientX / window.innerWidth - 0.5, 
            y: -(e.clientY / window.innerHeight - 0.5)
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMouseCoordinates);
        return () => window.removeEventListener("mousemove", updateMouseCoordinates);
    }, []);

    return mouseCoordinates;
};

export default useMouseCoordinates;
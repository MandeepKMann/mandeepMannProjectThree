// IMPORTS
import { useState, useEffect } from "react"
// CSS
import "../styles/BackToTopButton.css"


// Done with help from Daman and https://www.youtube.com/watch?v=pKbNCWb6USQ
const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [] )

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="scrollUp">
            {backToTopButton && (
                <button
                    className="toTop"
                    onClick={scrollUp}
                >
                    ^
                </button>
            )}
        </div>
    )
}

export default BackToTopButton
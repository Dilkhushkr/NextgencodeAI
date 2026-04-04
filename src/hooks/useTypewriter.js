import { useState, useEffect } from "react";

/**
 * Custom hook for typewriter text animation
 * @param {string[]} words - Array of words/phrases to cycle through
 * @param {number} typeSpeed - Speed of typing in ms
 * @param {number} deleteSpeed - Speed of deleting in ms
 * @param {number} pauseTime - Pause between words in ms
 */
export function useTypewriter(words = [], typeSpeed = 80, deleteSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return text;
}

export default useTypewriter;

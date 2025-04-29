'use client';

import { useEffect, useState } from "react";

const TypingAnimation = ({text}: {text: string}) => {
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 150;
        const timeout = setTimeout(() => {
            if (!isDeleting) {
              setCurrentText(text.substring(0, index + 1));
              setIndex(index + 1);
      
              if (index === text.length) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
              }
            } else {
              setCurrentText(text.substring(0, index - 1));
              setIndex(index - 1);
      
              if (index === 0) {
                setIsDeleting(false);
              }
            }
          }, typingSpeed);
      
          return () => clearTimeout(timeout);
    }, [index, isDeleting]);

    return(
        <div className="text-2xl mt-10">
      {currentText}
      {'|'}
      </div>
    );


}



export default TypingAnimation;
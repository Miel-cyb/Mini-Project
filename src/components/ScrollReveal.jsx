import  { useRef, useEffect} from 'react';

const ScrollReveal = ({ children,  threshold= 0.1, className= "", delay=0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("reveal-visible");
          }, delay);
          observer.unobserve(entry.target);
        }
      })
    },
      {
        threshold,
      },
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

    

  return (
    <div
      ref={ref}
      className={`reveal-hidden ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;

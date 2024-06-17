import { useEffect, useRef } from "react";

export default function useSequenceScroll() {
  const dom = useRef();

  useEffect(() => {
    const { current } = dom;
    window.addEventListener("scroll", () => {
      console.log(current.getBoundingClientRect());
    });
  }, []);

  return { ref: dom };
}

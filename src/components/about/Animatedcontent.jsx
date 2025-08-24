import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
    children,
    distance = 50,
    direction = "vertical", // "vertical" or "horizontal"
    reverse = false,
    duration = 0.8,
    ease = "power3.out",
    initialOpacity = 0,
    animateOpacity = true,
    scale = 1,
    threshold = 0.1,
    delay = 0,
    onComplete,
}) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const axis = direction === "horizontal" ? "x" : "y"; // choose x or y
        const offset = reverse ? -distance : distance; // reverse for left/up
        const startPct = (1 - threshold) * 100;

        // initial state
        gsap.set(el, {
        [axis]: offset,
        scale,
        opacity: animateOpacity ? initialOpacity : 1,
        });

        // animate when scrolled into view
        gsap.to(el, {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        duration,
        ease,
        delay,
        onComplete,
        scrollTrigger: {
            trigger: el,
            start: `top ${startPct}%`,
            toggleActions: "play none none none",
            once: true, // only run once
        },
        });

        return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        gsap.killTweensOf(el);
        };
    }, [
        distance,
        direction,
        reverse,
        duration,
        ease,
        initialOpacity,
        animateOpacity,
        scale,
        threshold,
        delay,
        onComplete,
    ]);

    return <div ref={ref}>{children}</div>;
};

export default AnimatedContent;

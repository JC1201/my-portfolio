import { useEffect, useRef } from "react";

export function PixelReveal({ src, width = 400, height = 300, duration = 1500 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = src;

    img.onload = () => {
      const start = performance.now();
      const maxPixel = 60; // starting pixel size (chunky look)

      const animate = (time) => {
        let progress = (time - start) / duration;
        if (progress > 1) progress = 1;

        // Ease-out cubic (starts fast, ends smooth)
        const easeOut = 1 - Math.pow(1.1 - progress, 3);

        // Pixel size goes from 40 → 1 smoothly
        const pixelSize = maxPixel * (1 - easeOut) + 1;

        ctx.clearRect(0, 0, width, height);

        // Disable smoothing to make blocky effect
        ctx.imageSmoothingEnabled = false;

        // Draw pixelated version
        ctx.drawImage(img, 0, 0, width / pixelSize, height / pixelSize);
        ctx.drawImage(
          canvas,
          0,
          0,
          width / pixelSize,
          height / pixelSize,
          0,
          0,
          width,
          height
        );

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Final sharp draw
          ctx.imageSmoothingEnabled = true;
          ctx.drawImage(img, 0, 0, width, height);
        }
      };

      requestAnimationFrame(animate);
    };
  }, [src, width, height, duration]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        borderRadius: "20px",
        width: `${width}px`,   // display size
        height: `${height}px`,
        display: "block",
        margin: "auto",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      }}
    />
  );
}

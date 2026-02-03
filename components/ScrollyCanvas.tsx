"use client";

import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ScrollyCanvas({ numFrames = 120, children }: { numFrames?: number; children?: React.ReactNode }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll();

    // Map scroll (0 to 1) to frame index (0 to numFrames - 1)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, numFrames - 1]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i < numFrames; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    const zeroPad = i.toString().padStart(3, "0");
                    img.src = `/sequence/frame_${zeroPad}.png`; // Assumes standardized naming
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = (e) => {
                        console.error(`Failed to load frame ${i}`, e);
                        // Resolve anyway to avoid blocking everything
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, [numFrames]);

    const renderFrame = useCallback(
        (index: number) => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            const img = images[index];

            if (!canvas || !ctx || !img) return;

            // Handle High DPI
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            // Object-cover logic
            const targetRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;
            let renderWidth, renderHeight, offsetX, offsetY;

            if (imgRatio > targetRatio) {
                renderHeight = canvas.height / dpr;
                renderWidth = renderHeight * imgRatio;
                offsetY = 0;
                offsetX = (canvas.width / dpr - renderWidth) / 2;
            } else {
                renderWidth = canvas.width / dpr;
                renderHeight = renderWidth / imgRatio;
                offsetX = 0;
                offsetY = (canvas.height / dpr - renderHeight) / 2;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
        },
        [images]
    );

    // Render on scroll change
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!isLoaded) return;
        const index = Math.min(numFrames - 1, Math.max(0, Math.floor(latest)));
        requestAnimationFrame(() => renderFrame(index));
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded, renderFrame]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded && typeof frameIndex.get() === 'number') {
                renderFrame(Math.floor(frameIndex.get()));
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, renderFrame, frameIndex]);

    return (
        <div className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="block w-full h-full object-cover" />
                {children}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background text-foreground z-50 transition-opacity duration-300">
                        <p className="animate-pulse tracking-widest text-sm uppercase">Loading Sequence...</p>
                    </div>
                )}
            </div>
        </div>
    );
}

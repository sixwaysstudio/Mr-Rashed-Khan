"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useTransform, MotionValue } from "framer-motion";

interface ScrollSequenceProps {
    frameCount: number;
    progress: MotionValue<number>;
    onProgress?: (progress: number) => void;
    onLoaded?: () => void;
    blurAmount?: number;
}

export default function ScrollSequence({ frameCount, progress, onProgress, onLoaded, blurAmount = 0 }: ScrollSequenceProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const bgCanvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    // Load images
    useEffect(() => {
        let isMounted = true;
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let loadedCount = 0;

            const updateProgress = () => {
                const percentage = (loadedCount / frameCount) * 100;
                if (onProgress) onProgress(percentage);
            };

            const promises: Promise<void>[] = [];

            for (let i = 0; i < frameCount; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    // Current format: /vid/ezgif-frame-001.webp
                    // Prefix with repo name for GitHub Pages
                    const paddedIndex = (i + 1).toString().padStart(3, "0");
                    img.src = `/Mr-Rashed-Khan/vid/ezgif-frame-${paddedIndex}.webp`;
                    img.onload = () => {
                        if (isMounted) {
                            loadedImages[i] = img;
                            loadedCount++;
                            updateProgress();
                            resolve();
                        }
                    };
                    img.onerror = (e) => {
                        console.error(`Failed to load image ${i}`, e);
                        if (isMounted) {
                            loadedCount++;
                            updateProgress();
                            resolve();
                        }
                    };
                });
                promises.push(promise);
            }

            try {
                await Promise.all(promises);
                if (isMounted) {
                    setImages(loadedImages);
                    setLoaded(true);
                    if (onLoaded) onLoaded();
                }
            } catch (error) {
                console.error("Error loading images", error);
            }
        };

        loadImages();

        return () => { isMounted = false; };
    }, [frameCount, onProgress, onLoaded]);

    // Draw frame based on external scroll progress
    const currentIndex = useTransform(progress, [0, 1], [0, frameCount - 1]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        const bgCanvas = bgCanvasRef.current;
        const bgCtx = bgCanvas?.getContext("2d");

        // Guard clause
        if (!canvas || !ctx || !images.length) return;

        const imgIndex = Math.round(index);
        const img = images[imgIndex];

        if (!img) return;

        // --- Main Canvas Drawing ---
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        // Cover logic
        if (canvasRatio > imgRatio) {
            drawHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
        }

        // Mobile Zoom Adjustment: Scale down to 85% to show more context (requested by user)
        if (canvas.width < 768) {
            const scale = 0.7;
            drawWidth *= scale;
            drawHeight *= scale;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = (canvas.height - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

        // --- Ambient Background Drawing ---
        if (bgCanvas && bgCtx) {
            bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
            // Draw stretched to fill the screen behind the main canvas
            bgCtx.drawImage(img, 0, 0, bgCanvas.width, bgCanvas.height);
        }
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (loaded) {
            requestAnimationFrame(() => renderFrame(latest));
        }
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
            if (bgCanvasRef.current) {
                bgCanvasRef.current.width = window.innerWidth;
                bgCanvasRef.current.height = window.innerHeight;
            }

            if (images.length > 0) {
                const currentFrame = currentIndex.get();
                renderFrame(currentFrame);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [loaded, images]);


    return (
        <div className="w-full h-full relative overflow-hidden bg-black">
            {/* Ambient Background Canvas - YouTube Style */}
            <canvas
                ref={bgCanvasRef}
                className="absolute inset-0 w-full h-full object-cover blur-[80px] opacity-70 scale-110 pointer-events-none"
            />

            {/* Main Canvas */}
            <canvas
                ref={canvasRef}
                className="relative w-full h-full object-cover z-10"
                style={{ filter: `blur(${blurAmount}px)` }}
            />
        </div>
    );
}

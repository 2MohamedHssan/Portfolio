'use client';
import { useEffect, useState } from 'react';

export default function IntroMask({ children, onFinish }) {
    const [clipStyle, setClipStyle] = useState('circle(0% at 50% 50%)');

    useEffect(() => {
        setTimeout(() => setClipStyle('circle(150% at 50% 50%)'), 0);
        setTimeout(() => onFinish(), 800);
    }, []);

    return (
        <div
            className="fixed inset-0 z-[9999] bg-[#0f172a] text-white overflow-hidden transition-all duration-[1600ms] ease-in-out"
            style={{
                clipPath: clipStyle,
                WebkitClipPath: clipStyle,
            }}
        >
            {children}
        </div>
    );
}

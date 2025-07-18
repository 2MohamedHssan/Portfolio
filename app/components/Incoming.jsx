'use client';
import { useEffect, useState } from 'react';

export default function IntroMask({ children, onFinish }) {
    const [clipStyle, setClipStyle] = useState('circle(0% at 50% 50%)');

    useEffect(() => {
        setTimeout(() => setClipStyle('circle(150% at 50% 50%)'), 0);
        setTimeout(() => onFinish(), 5000);
    }, []);

    return (
        <div
            className="fixed inset-0 z-[9999] bg-purple-700 text-white overflow-hidden transition-all duration-[1600ms] linear"
            style={{
                clipPath: clipStyle,
                WebkitClipPath: clipStyle,
            }}
        >
            {children}
        </div>
    );
}

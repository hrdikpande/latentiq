import React from 'react';
import { cn } from '../lib/utils'; // Assuming you have a utility for class names, if not I'll just use template literals

interface LogoProps {
    variant?: 'typographic' | 'geometric' | 'icon-only';
    className?: string;
    showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ variant = 'geometric', className, showText = true }) => {

    // Brand Colors
    const primaryColor = '#3b82f6'; // Electric Blue

    if (variant === 'typographic') {
        return (
            <div className={cn("flex items-center tracking-tighter font-bold font-sans", className)}>
                <span className="text-white text-2xl">LATENT</span>
                <span className="text-primary text-2xl">IQ</span>
            </div>
        );
    }

    if (variant === 'geometric') {
        return (
            <div className={cn("flex items-center gap-3", className)}>
                {/* Abstract Geometric Icon - Refined */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0">
                    <rect x="2" y="2" width="28" height="28" rx="8" stroke={primaryColor} strokeWidth="2" fill="none" className="opacity-50" />
                    <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="2" />
                    <circle cx="16" cy="16" r="2" fill={primaryColor} className="animate-pulse" />
                    <path d="M16 2 L16 8" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M16 24 L16 30" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M2 16 L8 16" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M24 16 L30 16" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                {showText && (
                    <div className="flex flex-col justify-center">
                        <span className="text-2xl font-bold tracking-tight text-white leading-none">
                            Latent<span className="text-primary">IQ</span>
                        </span>
                    </div>
                )}
            </div>
        );
    }

    // Default / Icon Only
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="2" y="2" width="28" height="28" rx="8" stroke={primaryColor} strokeWidth="2" fill="none" className="opacity-50" />
            <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="2" />
            <circle cx="16" cy="16" r="2" fill={primaryColor} />
        </svg>
    );
};

export default Logo;

'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import countdownConfig from '@/config/countdown.json';

interface Sponsor {
    src: string;
    alt: string;
    size: number;
    dark: boolean;
}

interface EventConfig {
    title: string;
    description: string;
    date: string;
    time: string;
    round: string;
    quotes?: string[];
}

// Parse Indian date/time format to timestamp
const parseIndianDateTime = (date: string, time: string): number => {
    // Parse date: "08 April 2026" -> parts
    const months: { [key: string]: number } = {
        'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5,
        'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11
    };
    
    const dateParts = date.split(' ');
    const day = parseInt(dateParts[0]);
    const month = months[dateParts[1].toLowerCase()];
    const year = parseInt(dateParts[2]);
    
    // Parse time: "5:00 PM" -> hours, minutes
    const timeParts = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!timeParts) return Date.now();
    
    let hours = parseInt(timeParts[1]);
    const minutes = parseInt(timeParts[2]);
    const period = timeParts[3].toUpperCase();
    
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    
    // Create date in IST
    const targetDate = new Date(year, month, day, hours, minutes, 0);
    return targetDate.getTime();
};

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', mins: '00', secs: '00' });
    const [isLive, setIsLive] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Config from JSON
    const event = countdownConfig.event as EventConfig;
    const targetTime = parseIndianDateTime(event.date, event.time);
    const eventTitle = event.title;
    const eventDescription = event.description;
    const eventRound = event.round;
    const eventQuotes = event.quotes ?? [];
    const sponsors = countdownConfig.sponsors as Sponsor[];
    const quoteOfTheMoment = eventQuotes.length > 0
        ? eventQuotes[Math.floor(Date.now() / 60000) % eventQuotes.length]
        : "";

    const tenSecondAudioRef = useRef<HTMLAudioElement | null>(null);
    const tenSecondSoundPlayedRef = useRef<boolean>(false);
    const previousDistanceRef = useRef<number>(Number.POSITIVE_INFINITY);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const audio = new Audio('/sounds/10sec.mp3');
        audio.volume = 1;
        audio.preload = 'auto';
        tenSecondAudioRef.current = audio;

        const unlock = () => {
            audio.load();
            // Prime playback on first user gesture so later play() is allowed.
            audio.play()
                .then(() => {
                    audio.pause();
                    audio.currentTime = 0;
                })
                .catch(() => {});
            document.removeEventListener('click', unlock);
        };
        document.addEventListener('click', unlock);
        return () => document.removeEventListener('click', unlock);
    }, []);

    const playTenSecondSound = useCallback(() => {
        if (tenSecondSoundPlayedRef.current || !tenSecondAudioRef.current) return;
        tenSecondAudioRef.current.currentTime = 0;
        tenSecondAudioRef.current.play()
            .then(() => {
                tenSecondSoundPlayedRef.current = true;
            })
            .catch(() => {});
    }, []);

    useEffect(() => {
        const pad = (n: number) => String(n).padStart(2, '0');
        const updateTimer = () => {
            const now = Date.now();
            const dist = targetTime - now;
            const previousDist = previousDistanceRef.current;

            // Trigger reliably in the 10-second window even with timer drift.
            if (!tenSecondSoundPlayedRef.current && previousDist > 10000 && dist <= 10999 && dist > 0) {
                playTenSecondSound();
            }

            if (dist <= 0) { setIsLive(true); return true; }
            setIsLive(false);
            if (dist > 10000) {
                tenSecondSoundPlayedRef.current = false;
            }
            setTimeLeft({
                days:  pad(Math.floor(dist / 864e5)),
                hours: pad(Math.floor((dist % 864e5) / 36e5)),
                mins:  pad(Math.floor((dist % 36e5)  / 6e4)),
                secs:  pad(Math.floor((dist % 6e4)   / 1e3)),
            });
            previousDistanceRef.current = dist;
            return false;
        };
        const hasEnded = updateTimer();
        if (hasEnded) return;
        const interval = setInterval(() => { if (updateTimer()) clearInterval(interval); }, 1000);
        return () => clearInterval(interval);
    }, [targetTime]);

    if (!isMounted) return null;

    const timeUnits = [
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.mins, label: "Minutes" },
        { value: timeLeft.secs, label: "Seconds" },
    ];

    return (
        <>
            <style>{`
                @import url('https://api.fontshare.com/v2/css?f[]=satoshi@700,900&f[]=departure-mono@400&display=swap');
                .font-satoshi   { font-family: 'Satoshi', sans-serif; }
                .font-departure { font-family: 'Departure Mono', monospace; }
                
                @keyframes live-flash {
                    0%,100% { opacity: 1; }
                    50%      { opacity: 0.55; }
                }
                .live-flash { animation: live-flash 1.6s ease-in-out 3; }

                /* Sponsor strip */
                .sponsor-strip {
                    overflow-x: auto;
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .sponsor-strip::-webkit-scrollbar { display: none; }
                .sponsor-logo-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 56px;
                    flex-shrink: 0;
                }
                .sponsor-logo {
                    opacity: 1;
                    transition: opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease;
                    object-fit: contain;
                    max-width: 140px;
                    display: block;
                    filter: drop-shadow(0 0 4px rgba(255,255,255,0.10));
                }
                .sponsor-logo:hover {
                    transform: scale(1.06);
                    filter: drop-shadow(0 0 10px rgba(255,255,255,0.25));
                }

                /* ── Large screen / TV mode (≥ 1600px) ────────────────────── */
                @media (min-width: 1600px) {
                    .sponsor-logo-wrap    { height: 80px; }
                    .sponsor-logo         { max-width: 200px; }
                    .tv-strip-gap         { gap: 88px !important; padding: 18px 56px 32px !important; }
                    .tv-header-img        { height: 30px !important; opacity: 0.85 !important; }
                    .tv-h2               { font-size: 24px !important; opacity: 0.8 !important; }
                    .tv-h1               { font-size: 88px !important; }
                    .tv-subtitle         { font-size: 22px !important; letter-spacing: 0.28em !important; opacity: 0.9 !important; }
                    .tv-live             { font-size: 88px !important; }
                    .tv-live-sub         { font-size: 18px !important; }
                    .tv-card-wrap        { width: 168px !important; height: 180px !important; }
                    .tv-card-num         { font-size: 72px !important; }
                    .tv-card-lbl         { font-size: 14px !important; letter-spacing: 0.2em !important; }
                    .tv-card-gap         { gap: 22px !important; }
                    .tv-content          { gap: 28px !important; padding-top: 88px !important; }
                    .tv-title-block      { margin-top: -4px !important; }
                    .tv-mtop             { margin-top: 20px !important; }
                    .tv-subtitle-gap     { margin-top: 32px !important; }
                }
            `}</style>

            <div className="relative min-h-screen bg-[#141419] flex flex-col items-center justify-center overflow-hidden selection:bg-[#05C770] selection:text-white">

                {/* ── Sponsor / Partner strip ── */}
                {sponsors.length > 0 && (
                    <div
                        className="fixed top-0 left-0 right-0 z-30 sponsor-strip"
                        style={{ background: 'linear-gradient(to bottom, rgba(14,14,18,0.8) 0%, rgba(14,14,18,0.0) 100%)' }}
                    >
                        <div
                            className="tv-strip-gap"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '64px',
                                padding: '14px 40px 22px',
                                minWidth: 'max-content',
                                margin: '0 auto',
                            }}
                        >
                            {sponsors.map((s) => (
                                <div className="sponsor-logo-wrap" key={s.alt}>
                                    <img
                                        src={s.src}
                                        alt={s.alt}
                                        className="sponsor-logo"
                                        style={{
                                            height: `${s.size}px`,
                                            width: 'auto',
                                            filter: s.dark
                                                ? 'brightness(0) invert(1) drop-shadow(0 0 4px rgba(255,255,255,0.10))'
                                                : 'brightness(1) contrast(1.05) drop-shadow(0 0 4px rgba(255,255,255,0.10))',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Mesh */}
                <svg className="fixed inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="mesh" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#2e2e35" strokeWidth="1" />
                        </pattern>
                        <linearGradient id="meshFade" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="60%" stopColor="white" stopOpacity="1" />
                            <stop offset="88%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <mask id="meshMask">
                            <rect width="100%" height="100%" fill="url(#meshFade)" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mesh)" mask="url(#meshMask)" />
                </svg>

                {/* Bottom green zone — reduced intensity */}
                <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-0" style={{ height: '50%', background: 'radial-gradient(ellipse 120% 100% at 50% 100%, rgba(0,22,16,0.92) 0%, rgba(0,32,20,0.7) 40%, rgba(0,40,40,0.35) 65%, transparent 85%)' }} />
                {/* Bloom shifted up toward content */}
                <div className="fixed bottom-[-60px] left-1/2 -translate-x-1/2 w-[900px] h-[380px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at center bottom, rgba(5,199,112,0.32) 0%, rgba(5,199,112,0.10) 55%, transparent 80%)', filter: 'blur(36px)' }} />
                {/* Horizon line */}
                <div className="fixed bottom-[80px] left-0 right-0 h-[1px] pointer-events-none z-0" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(5,199,112,0.15) 25%, rgba(5,199,112,0.6) 50%, rgba(5,199,112,0.15) 75%, transparent 100%)', boxShadow: '0 -4px 24px rgba(5,199,112,0.18)' }} />
                <svg className="fixed bottom-0 left-0 right-0 h-[160px] w-full pointer-events-none z-0" viewBox="0 0 800 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gfade" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#003333" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {[0, 80, 160, 240, 320, 400, 480, 560, 640, 720, 800].map(x => (
                        <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="url(#gfade)" strokeWidth="1" />
                    ))}
                </svg>

                {/* Main content */}
                <div className="tv-content relative z-10 flex flex-col items-center gap-6 py-12 px-6" style={{ paddingTop: '60px' }}>

                    {/* Header — subtle eyebrow */}
                    <div className="flex items-center gap-2.5">
                        <img src="/image.png" alt="HackerRank Campus Crew" className="tv-header-img w-auto object-contain" style={{ height: 'clamp(16px,2.2vw,24px)', opacity: 0.75 }} />
                        <h2 className="tv-h2 font-satoshi font-black text-white/65 text-center leading-none tracking-widest uppercase" style={{ fontSize: 'clamp(13px,1.8vw,20px)' }}>
                            {eventDescription}
                        </h2>
                    </div>

                    {/* Main title — dominant focal point */}
                    <div className="tv-title-block flex flex-col items-center" style={{ marginTop: '-4px' }}>
                        <h1 className="tv-h1 font-satoshi font-black text-white text-center leading-none tracking-tight" style={{ fontSize: 'clamp(36px,6vw,72px)' }}>
                            {eventTitle.split(' ').map((word, index) => {
                                // Check if word contains a number (likely version like "1.0", "2.0")
                                const hasNumber = /\d/.test(word);
                                return hasNumber ? (
                                    <span key={index} className="text-[#05C770]" style={{ textShadow: '0 0 30px rgba(5,199,112,0.25)' }}> {word}</span>
                                ) : (
                                    <span key={index}> {word}</span>
                                );
                            })}
                        </h1>
                    </div>

                    {/* Countdown cards — always visible, flash on live */}
                    <div className="tv-mtop flex items-center justify-center" style={{ marginTop: '12px' }}>
                        <div className={`flex flex-col items-center${isLive ? ' live-flash' : ''}`}>
                            <div className="tv-card-gap flex gap-4 sm:gap-5 items-stretch">
                                {timeUnits.map(({ value, label }, index) => (
                                    <TimeCard key={index} value={value} label={label} />
                                ))}
                            </div>
                            
                            {/* Current Round - displayed below timer */}
                            {eventRound && (
                                <div className="tv-subtitle tv-subtitle-gap font-departure text-white uppercase text-center mt-8" style={{ fontSize: 'clamp(15px,1.7vw,22px)', letterSpacing: '0.25em', opacity: 0.95, fontWeight: 500 }}>
                                    {eventRound}
                                </div>
                            )}
                            {quoteOfTheMoment && (
                                <p className="text-white/70 text-center mt-4 px-4" style={{ fontSize: 'clamp(12px,1.2vw,16px)', fontFamily: "'Outfit', sans-serif" }}>
                                    "{quoteOfTheMoment}"
                                </p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

interface TimeCardProps {
    value: string;
    label: string;
}

const TimeCard = ({ value, label }: TimeCardProps) => (
    <div
        className="tv-card-wrap group cursor-default"
        style={{
            width: 'clamp(86px, 10vw, 136px)',
            height: 'clamp(94px, 11vw, 148px)',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '14px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 18px 50px rgba(0,0,0,0.55), 0 0 28px rgba(5,199,112,0.15), inset 0 1px 0 rgba(255,255,255,0.12)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
        }}
    >
        <div className="tv-card-num font-satoshi font-black text-[#05C770] leading-none tracking-tighter tabular-nums" style={{ fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
            {value}
        </div>
        <div className="tv-card-lbl font-departure text-white/60 mt-2 uppercase" style={{ fontSize: 'clamp(9px,0.9vw,12px)', letterSpacing: '0.2em' }}>
            {label}
        </div>
    </div>
);

export default CountdownTimer;

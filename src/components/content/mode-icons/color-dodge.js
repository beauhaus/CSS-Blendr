import React from 'react';
import styled from 'styled-components'

const ColorDodgeWrapper = styled.g`
.st2,
.st3,
.st4,
.st6,
.st7{fill:none;stroke:#000;stroke-width:2;}
.st3,
.st4,
.st6,
.st7{stroke-width:3}
.st4,
.st6,
.st7{stroke:#fff}
.st6,
.st7{stroke-width:5}
.st7{stroke:#000}
`

const ColorDodgeIcon = () => (
    <ColorDodgeWrapper>
        <filter id="ball-blur">
            <feGaussianBlur stdDeviation="6 0"></feGaussianBlur>
        </filter>
        {/* <circle id="BG" cx="150" cy="150" r="150" fill="#382e20" /> */}
        <linearGradient id="matrix-grad" x1="0" x2="300.2134" y1="150" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2c5838" />
            <stop offset=".4129" stopColor="#547c5f" />
            <stop offset=".7887" stopColor="#73977d" />
            <stop offset="1" stopColor="#7ea188" />
        </linearGradient>
        <circle cx="150" cy="150" r="150" fill="url(#matrix-grad)" />
        <g id="face_1_">
            <path id="faceback_1_" fill="#fff" stroke="#fff" d="M159.15 218.02c-1.47-11.89.9-95.46-12-93.94l-28.29 5.38-29.62 11.79c-3.17.21-5.56 3.02-5.34 6.28l4.02 60.43c.22 3.26 2.96 5.72 6.13 5.51l30.08 8.36 29.69 2.47c3.16-.22 5.55-3.03 5.33-6.28z" />
            <g id="brows_1_">
                <path d="M95.98 145.47c-1.03-6.71 2.39-11.7 8.44-13.49M94.1 185.58c.39 8.08 4.92 11.64 11.75 10.68" className="st2" />
            </g>
            <path id="mouth_1_" d="M139.5 144.66s7.2 13.78 7.7 21.37c.5 7.59-5.87 6.12-5.87 6.12s-7.2-5.7-7.7-13.3c-.51-7.59 5.87-14.19 5.87-14.19z" className="st2" />
            <path id="glasses_1_" d="M114.63 199.49c-5.14.38-9.88-7.16-10.59-16.85-.55-7.51 1.48-14.11 4.81-16.86v-5.51c-4.07-1.77-7.45-8.34-8.04-16.39-.71-9.68 2.87-17.85 8-18.23 5.14-.38 9.88 7.17 10.59 16.85.52 6.95-1.19 13.12-4.09 16.19v6.55c3.75 2.19 6.76 8.45 7.32 16.02.71 9.69-2.86 17.85-8 18.23z" />
        </g>
        <g id="blenderbody_1_">
            <g id="base_1_">
                <path d="M174.68 216.82c-.21-29.1-2.13-58.08-5.78-86.95-.14-2.03-1.85-3.58-3.83-3.45-8.06-2.88 4.11 88.85 2.44 90.88.25 4.76 7.56 4.31 7.17-.48z" className="st3" />
                <path d="M168.05 225.4c-.72-33.01-2.91-65.93-6.56-98.74-.36-5.05-12.26-4.26-11.95.79 0 0 6.65 6.22 8.83 49.74 4.22 49.2-8.47 50.05 2.96 52.36 2.84.16 7.04-1.22 6.72-4.15z" className="st3" />
            </g>
            <g id="pitcher_1_">
                <path d="M5.14 119.19c12.17-1.26 47.05 8.35 48.73 10.91 1.29 1.97 2.72 6.54 3.72 7.15 2.42 1.49 8.32 3.1 8.32 3.1-7.79-5.11-4.45-8.02-11.96-17.71-16.43-6.53-35.65-11.13-48.78-8.78" className="st4" />
                <path d="M88.74 213.65c-.22-11.49-.15-69.74-7.78-72.02-1.65.11-2.85 2.18-2.69 4.62 2.43 22.77 3.96 45.38 4.51 67.79.32 5.73 6.4 5.36 5.96-.39z" className="st3" />
                <path d="M28.56 232.11s37.06-8.63 54.22-18.06l-3.51-67.86C53 134.42 30.24 127.37 4.63 126.62M74.24 197.66c-9.95 7.54-40.92 21-53.38 22.79M20.91 221.19l-1.23-18.42M30.81 218.53l-.6-9.06M38.55 214.8l-.61-9.07M46.31 211.45l-.49-7.37M54.05 207.72l-.61-9.07M59.83 204.63l-.39-5.9M67.57 200.9l-.88-13.27M74.28 196.79l-.6-9.07" className="st4" />
            </g>
            <path id="cape_1_" stroke="#000" strokeWidth="5" d="M45.44 228.05c-10.05-2.49-24.14-16.28-34.19-18.77.93 1.97 2.66 10.43-2.16 16.84 9.67-1.57 6.44 22.65.5 31.07 5.94-1.95 18.05 3.7 13.21 14.2 13.73-7.27 21-1.62 23.42 1.62 7.27-3.23 23.65.01 29.66-4.49 8.87-6.64 9.65-27.93 26.34-32.32s8.43-14.35 8.43-14.35c-9.12-2.06-9.82-2.33-20.09-9.54-.02-.01-32.99 18.72-45.12 15.74z" />
            <g id="arms_1_">
                <path d="M44.28 246.08l5.65-4.85-1.24-5.69c.56 1.57 1.12 3.14 1.68 4.7 17.65-1.56 51.84-10.1 73.28-20.99M125.03 128.18l-16.15-54.1 7.27-8.08-7.27 8.08-7.27-5.66" className="st6" />
                <path d="M272.73 233.16l-8.21-.81-2.23-58.95-88 21" className="st7" />
                <path d="M227.98 214.58l-5.96-3.23 11.93-62.18-58.91 24.23" className="st7" />
            </g>
        </g>
        <g id="matrix_trail_1_" opacity=".51">
            <linearGradient id="SVGID_1_" x1="272.5718" x2="282.4023" y1="106.5157" y2="106.5157" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="277.49" cy="106.52" fill="url(#SVGID_1_)" rx="4.92" ry="22" />
            <linearGradient id="SVGID_2_" x1="106.0369" x2="115.8674" y1="106.5157" y2="106.5157" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="110.95" cy="106.52" fill="url(#SVGID_2_)" rx="4.92" ry="17.88" />
            <linearGradient id="SVGID_3_" x1="95.3127" x2="106.9306" y1="106.5157" y2="106.5157" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="101.12" cy="106.52" fill="url(#SVGID_3_)" rx="5.81" ry="21.14" />
            <linearGradient id="SVGID_4_" x1="83.6262" x2="98.372" y1="106.5157" y2="106.5157" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="91" cy="106.52" fill="url(#SVGID_4_)" rx="7.37" ry="26.83" />
            <linearGradient id="SVGID_5_" x1="70.2657" x2="88.1393" y1="106.5157" y2="106.5157" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="79.2" cy="106.52" fill="url(#SVGID_5_)" rx="8.94" ry="32.52" />
            <linearGradient id="SVGID_6_" x1="183.2287" x2="191.0763" y1="105.7535" y2="105.7535" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="187.15" cy="105.75" fill="url(#SVGID_6_)" rx="3.92" ry="12.84" />
            <linearGradient id="SVGID_7_" x1="265.7326" x2="277.5292" y1="106.5157" y2="106.5157" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="271.63" cy="106.52" fill="url(#SVGID_7_)" rx="5.9" ry="27.64" />
            <linearGradient id="SVGID_8_" x1="225.9126" x2="233.7601" y1="105.7535" y2="105.7535" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="229.84" cy="105.75" fill="url(#SVGID_8_)" rx="3.92" ry="12.84" />
            <linearGradient id="SVGID_9_" x1="212.9435" x2="222.774" y1="106.5157" y2="106.5157" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="217.86" cy="106.52" fill="url(#SVGID_9_)" rx="4.92" ry="17.88" />
            <linearGradient id="SVGID_10_" x1="208.0562" x2="219.674" y1="106.5157" y2="106.5157" gradientTransform="translate(44.1818)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="258.05" cy="106.52" fill="url(#SVGID_10_)" rx="5.81" ry="21.14" />
            <linearGradient id="SVGID_11_" x1="189.521" x2="199.3515" y1="106.5157" y2="106.5157" gradientTransform="translate(-66)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="128.44" cy="106.52" fill="url(#SVGID_11_)" rx="4.92" ry="17.88" />
            <linearGradient id="bullet_2_" x1="149.0592" x2="158.8898" y1="106.5157" y2="106.5157" gradientTransform="translate(97.7273)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse id="bullet_1_" cx="251.7" cy="106.52" fill="url(#bullet_2_)" rx="4.92" ry="17.88" />
            <linearGradient id="SVGID_12_" x1="378.9539" x2="388.7844" y1="106.5157" y2="106.5157" gradientTransform="matrix(.7991 0 0 1 -157.6797 0)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="149.06" cy="106.52" fill="url(#SVGID_12_)" rx="3.93" ry="17.88" />
            <linearGradient id="SVGID_13_" x1="198.5703" x2="208.4009" y1="106.5157" y2="106.5157" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="203.49" cy="106.52" fill="url(#SVGID_13_)" rx="4.92" ry="17.88" />
            <linearGradient id="SVGID_14_" x1="168.1695" x2="179.9661" y1="106.5157" y2="106.5157" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="174.07" cy="106.52" fill="url(#SVGID_14_)" rx="5.9" ry="27.64" />
            <linearGradient id="SVGID_15_" x1="160.5595" x2="170.8074" y1="106.5157" y2="106.5157" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="165.68" cy="106.52" fill="url(#SVGID_15_)" rx="5.12" ry="24.01" />
            <linearGradient id="SVGID_16_" x1="153.5067" x2="162.6159" y1="622.8035" y2="622.8035" gradientTransform="matrix(1 0 0 -1 0 729.3192)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="158.06" cy="106.52" fill="url(#SVGID_16_)" rx="4.55" ry="21.34" />
            <linearGradient id="SVGID_17_" x1="134.4472" x2="142.2947" y1="105.7535" y2="105.7535" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="138.37" cy="105.75" fill="url(#SVGID_17_)" rx="3.92" ry="12.84" />
            <linearGradient id="SVGID_18_" x1="237.3458" x2="245.1933" y1="105.7535" y2="105.7535" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c2914" />
                <stop offset="1" stopColor="#91ba9d" />
            </linearGradient>
            <ellipse cx="241.27" cy="105.75" fill="url(#SVGID_18_)" rx="3.92" ry="12.84" />
        </g>

        <g filter="url(#ball-blur)">
            <path fill="red" d="M32.17 79.23c-11.92 9.3-16.05 20.55-15.59 32.95 6.71-6 19.45-9.95 36.68-12.36.02-2.45.76-4.54 2.45-6.18-8.4-8.35-16.55-15.05-23.54-14.41z" />
            <path fill="#ff0" d="M32.27 79.23c11.21-6.08 22.22-6.68 33.05-2.06-.07 4.31-1.25 9.33-3.33 14.91-2.72-.63-4.84-.18-6.28 1.57-9.33-9.75-17.1-14.39-23.44-14.42z" />
            <path fill="#086dff" d="M65.12 77.17c.38 2.66-.4 7.3-3.04 14.91 3.44 1.3 5.09 3.63 5.69 6.57 9.53.27 15.03 1.25 15.99 3.04-2.66-10.51-8.59-18.87-18.64-24.52z" />
            <path fill="#fbb03b" d="M67.67 98.74c9.58.27 15.33 1.26 15.99 2.94 1.89 14.05-3.66 23.13-10.49 31.38 1.78-5.98-.24-14.65-8.92-28.05 2.23-1.93 3.63-3.98 3.42-6.27z" />
            <path fill="#f0f" d="M64.24 105.02c-2.3.9-4.62 1.02-6.96 0-7.86 18.78-13.52 27.48-19.91 34.23 12.27 4.26 24.11 2.43 35.5-5.79 2.54-5.63-.01-14.87-8.63-28.44z" />
            <path fill="#1fff89" d="M53.16 99.92c1.2 2.29 2.57 4.01 4.12 5.1-4.14 11.47-11.09 22.87-19.81 34.23-10.19-5.28-17.73-13.64-20.89-27.07 5.42-5.39 17.51-9.49 36.58-12.26z" />
        </g>
        <ellipse cx="60.51" cy="98.94" fill="#fff" rx="7.45" ry="7.16" />
    </ColorDodgeWrapper>)

export default ColorDodgeIcon;

/*


*/
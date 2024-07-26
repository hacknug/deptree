import { defineConfig } from '@twind/core';
import presetTailwind from '@twind/preset-tailwind';

export const twindConfig = defineConfig({
    darkMode: 'class',
    presets: [presetTailwind()],
    ignorelist: ['dark', 'loader', 'preact-hint'],
    hash: false,
    theme: {
        colors: {
            primary: '#FFC799',
            red: '#ff4444',
            content: {
                DEFAULT: '#161616',
                dark: '#EEE',
            },
            page: {
                DEFAULT: '#EFEFEF',
                dark: '#101010',
            },
            card: {
                DEFAULT: '#E7E7E7',
                dark: '#161616',
            },
            input: {
                DEFAULT: '#fff',
                dark: '#ccc',
            },
            resultBorder: '#8b8b8b94',
            highlightContent: {
                DEFAULT: '#117958',
                dark: '#61C9A8',
            },
            highlight: {
                DEFAULT: '#f8f8f8',
                dark: '#282828',
            },
            replacement: {
                native: '#F66151',
                micro: '#F9F06B',
                preferred: '#99C1F1',
            },
            white: {
                muted: '#999',
            },
            transparent: 'transparent',
        },
        fontSize: {
            xs: '.75rem',
            base: '1rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.5rem',
        },
    },
    variants: [['hocus', '&:hover,&:focus-visible']],
});
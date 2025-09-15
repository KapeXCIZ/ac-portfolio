'use client'

import { useEffect, useMemo, useState } from "react";

class TxtClass {
    txt: string;

    public constructor(txt: string) {
        this.txt = txt;
    }

    public getTxt(): string {
        return this.txt;
    }

    public write(period: number, wrapperId: number, onComplete?: () => void): number[] {
        const timers: number[] = [];
        let cumulativeDelay = 0;

        for (let i = 0; i < this.txt.length; i++) {
            const jitter = Math.round(Math.random() * 200) - 100; // -100 .. +100 ms
            const delayForChar = Math.max(10, period + jitter);  // intervallo effettivo per questo char
            cumulativeDelay += delayForChar;                      // accumula i ritardi

            const snapshot = this.txt.substring(0, i + 1);       // evita problemi di closure

            const t = window.setTimeout(() => {
                const d = document.getElementById("typewrite" + wrapperId);
                if (d) d.textContent = snapshot;

                // se è l'ultimo carattere, pianifica chiamata finale onComplete
                if (i === this.txt.length - 1) {
                    const tEnd = window.setTimeout(() => onComplete?.(), 1500);
                    timers.push(tEnd);
                }
            }, cumulativeDelay); // ← qui usiamo cumulativeDelay (con jitter)

            timers.push(t);
        }

        return timers;
    }
}

export default function Typewrite({ phrases, period, id }: { phrases: string[]; period: number; id: number }) {


    const [currentText, setCurrentText] = useState<number>(0);
    const txts: TxtClass[] = useMemo(() => {
        return phrases.map((phrase) => new TxtClass(phrase));
    }, [phrases]);

    useEffect(() => {
        const advanceTextNumber = (): void => {
            setCurrentText(prev => (prev < phrases.length - 1 ? prev + 1 : 0));
        }
        const timers = txts[currentText].write(period, id, advanceTextNumber);
        return () => timers.forEach(t => window.clearTimeout(t));
    }, [currentText, txts, period, id, phrases.length])

    return (
        <span id={`typewrite${id}`}>

        </span>
    )
};

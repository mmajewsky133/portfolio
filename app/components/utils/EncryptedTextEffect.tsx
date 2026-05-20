import { useRef, useState } from "react";
import { motion } from "framer-motion"

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 60;

const CHARS = "~!@#$%^&*()_+{}:<>?`-=/"

export default function EncryptedTextEffect({targetText}: {targetText: string}) {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const [text, setText] = useState(targetText)

    const scramble = () => {
        let pos = 0

        intervalRef.current = setInterval(() => {
            const scrambled = targetText.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char
                    }

                    const randomCharIndex = Math.floor(Math.random() * CHARS.length)
                    const randomChar = CHARS[randomCharIndex]

                    return randomChar
                })
                .join("")
            
            setText(scrambled)
            pos++

            if (pos >= targetText.length * CYCLES_PER_LETTER) {
                stopScramble()
            }
        }, SHUFFLE_TIME)
    }

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined)

        setText(targetText)
    }

    return (
        <motion.text
            whileTap={{
                scale: 0.975,
            }}
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
        >
            {text}
        </motion.text>
    )
}

"use client"

import Image from "next/image";
import BingoBox from "@/components/BingoBox";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const ANIMATIONS =  {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0 }},
    exit: { opacity: 0, transition: { delay: 0} }
}

export default function Home() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setCompleted(checked1 && checked2 && checked3 && checked4 && checked5 && checked6);
    }, [checked1, checked2, checked3, checked4, checked5, checked6])

    return (
        <div className={`flex flex-col h-full w-full items-center justify-center p-5`}>

            <motion.div
                className={`mb-10`}
                initial={ANIMATIONS.initial}
                animate={ANIMATIONS.animate}
                exit={ANIMATIONS.exit}
            >
                <Image src={`/henkel-bingo.png`} alt={`Henkel Bingo`} width={400} height={200}/>
            </motion.div>

            <AnimatePresence mode="wait">

            { !completed && (
                <motion.div
                    className="w-full md:w-[600px] md:h-[400px] grid grid-cols-3 grid-rows-2 gap-2"
                    key={0}
                    initial={ANIMATIONS.initial}
                    animate={ANIMATIONS.animate}
                    exit={ANIMATIONS.exit}
                >
                    <BingoBox value={"Check 1"} enabled={checked1} setEnabled={setChecked1} x={3} />
                    <BingoBox value={"Check 2"} enabled={checked2} setEnabled={setChecked2} x={2} />
                    <BingoBox value={"Check 3"} enabled={checked3} setEnabled={setChecked3} x={3} />
                    <BingoBox value={"Check 4"} enabled={checked4} setEnabled={setChecked4} x={4} />
                    <BingoBox value={"Check 5"} enabled={checked5} setEnabled={setChecked5} x={3}/>
                    <BingoBox value={"Check 6"} enabled={checked6} setEnabled={setChecked6} x={2}/>
                </motion.div>
            )}

            { completed && (
                <motion.div
                    className={`flex flex-col space-y-5 w-full md:w-[600px] md:h-[400px] items-center justify-start py-10`}
                    key={1}
                    initial={ANIMATIONS.initial}
                    animate={ANIMATIONS.animate}
                    exit={ANIMATIONS.exit}
                >
                    <div className={`text-2xl text-gray-700 font-bold`}>Congratulations!</div>
                    <div className={`bg-white p-2 px-4 rounded-md font-bold text-red-600 hover:text-white hover:bg-red-600 transition-all duration-300 border-red-600 border-2 cursor-pointer`}>Click here</div>
                </motion.div>
            )}

            </AnimatePresence>

        </div>
    );
}

import Image from "next/image";

type Props = {
    value: string
    enabled: boolean,
    setEnabled: (value: boolean) => void,
    x: number,
}

import { motion } from "framer-motion";

const ANIMATIONS =  {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0 }},
    exit: { opacity: 0 }
}

export default function BingoBox(props: Props) {
    return (
        <div
            className={`flex w-full h-full items-center justify-center hover:backdrop-blur hover:bg-slate-100 transition-all duration-300 aspect-square rounded-md border-2 border-slate-300`}
            onClick={() => props.setEnabled(!props.enabled)}
        >
            {props.value}

        { props.enabled && (
            <motion.div
                key={0}
                initial={ANIMATIONS.initial}
                animate={ANIMATIONS.animate}
                exit={ANIMATIONS.exit}

                className={`fixed top:0 left:0 w-full flex items-center justify-center text-red-600 font-bold text-9xl`}>
                    <Image src={`/x${props.x}.png`} alt={"X"} width={100} height={100}/>
            </motion.div>
        )}

        </div>
    );
}

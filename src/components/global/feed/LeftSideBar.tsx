import React from 'react'
import { AiFillHome, AiOutlineHome, AiOutlineDesktop, AiFillClockCircle } from 'react-icons/ai'
import { RiArrowDownSLine } from 'react-icons/ri'

const styles = {
    container: 'container flex flex-col p-6 gap-2 items-center justify-center max-w-[4ch] bg-yellow-400 rounded-2xl border-2 border-zinc-950 shadow-md',
    btn: 'text-zinc-950 bg-zinc-100 active:rotate-180 transition-all duration-500',
}

export default function LeftSideBar() {
    return (
        <div className={styles.container}>
            <div className={styles.btn} >
                <AiFillHome size={30} />
            </div>
            <div className={styles.btn}>
                <AiOutlineDesktop size={30} />
            </div>
            <div className={styles.btn}>
                <RiArrowDownSLine size={25} />
            </div>
        </div>
        
    )
}

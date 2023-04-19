import React, { useState } from 'react'
// import { GrFacebook } from 'react-icons/gr'
import { SiDatadog } from 'react-icons/si'
import { AiFillHome, AiOutlineHome, AiFillPlayCircle, AiOutlinePlayCircle, AiFillMessage, AiOutlineMessage, AiFillBell, AiOutlineBell } from 'react-icons/ai'
import { HiFlag, HiOutlineFlag, HiUserGroup, HiOutlineUserGroup } from 'react-icons/hi'
import { IoCartSharp, IoCartOutline, IoSearchSharp, IoSearchOutline } from 'react-icons/io5'
import { FcGoogle } from 'react-icons/fc'
import { GrAppsRounded } from 'react-icons/gr'
import LoginBtn from '../LoginBtn'



const styles = {
  container: {
    base: 'container flex flex-col items-center justify-center mx-auto p-2 gap-2 gap-y-2 bg-zinc-200 transition-all duration-500',
    adapt: 'md:flex-row  sm:flex-row md:rounded-b-xl sm:rounded-b-xl',
  },
  dogIcon: 'text-2xl text-zinc-950 hidden md:block sm:block',
  dogIconSize: 40,
  searchInput: 'flex-1 py-2 bg-zinc-100 text-zinc-950 text-center rounded-full border-2 border-zinc-950 shadow-md focus:outline-none',
  middleBtnContainer: 'flex gap-2 md:ml-2',
  btn: 'flex items-center justify-center w-10 h-10 text-zinc-950 bg-zinc-100 rounded-full border-2 border-zinc-950 shadow-md hover:shadow-lg active:translate-y-1 active:shadow-none  transition-all duration-200',
  rightBtnContaner: 'flex gap-2 md:ml-10',
  btnSize: 20,
}

export default function Header() {

  const [home, setHome] = React.useState(false)

  // Click  Buttons
  const handleHomeClick = () => {
    setHome(!home)
  }

  return (
    <div className={`${styles.container.base}${styles.container.adapt}`}>
      {/* LeftSide */}
      <div className={styles.dogIcon}>
        <SiDatadog size={styles.dogIconSize} />
      </div>
      <input className={styles.searchInput} type="text" placeholder="Search Docebook" />
      {/* MiddleSide */}
      <div className={styles.middleBtnContainer}>

        <button onClick={handleHomeClick} type='button' title='home' className={styles.btn}>
          {home ? <AiFillHome size={styles.btnSize} /> : <AiOutlineHome size={styles.btnSize} />}
        </button>
        <div className={styles.btn}>
          <HiOutlineFlag size={styles.btnSize} />
        </div>
        <div className={styles.btn}>
          <AiOutlinePlayCircle size={styles.btnSize} />
        </div>
        <div className={styles.btn}>
          <IoCartOutline size={styles.btnSize} />
        </div>
        <div className={styles.btn}>
          <HiOutlineUserGroup size={styles.btnSize} />
        </div>
      </div>
      {/* RightSide */}
      <div className={styles.rightBtnContaner}>
        {/* <div className={styles.btn}>
          <GrAppsRounded size={styles.btnSize} />
        </div>
        <div className={styles.btn}>
          <AiOutlineBell size={styles.btnSize} />
        </div>
        <div className={styles.btn}>
          <AiOutlineMessage size={styles.btnSize} />
        </div> */}
        {/* <div className={styles.btn}> */}
          <LoginBtn />
        {/* </div> */}
        {/* <LoginBtn /> */}
      </div>

    </div>
  )
}
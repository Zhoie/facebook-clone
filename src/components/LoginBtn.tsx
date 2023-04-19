import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { useSession, signIn, signOut } from 'next-auth/react'

const styles = {
    btn: 'flex items-center justify-center w-10 h-10 text-zinc-950 bg-zinc-100 rounded-full border-2 border-zinc-950 shadow-md hover:shadow-lg active:translate-y-1 active:shadow-none  transition-all duration-200',
    btnSize: 20,
}

export default function LoginBtn() {

    const { data: session } = useSession()

    if (session) {
        return (
            <div>
                <button className={styles.btn} type='button' title='sign out' onClick={() => signOut()}>
                    <RiLogoutBoxRLine size={styles.btnSize} />
                </button>
            </div>
        )
    }

    return (
        <div>
            <button className={styles.btn} type='button' title='sign in with google account' onClick={() => signIn()}>
                <FcGoogle size={styles.btnSize} />
            </button>
        </div>

    )
}

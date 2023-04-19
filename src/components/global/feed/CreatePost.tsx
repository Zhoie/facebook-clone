import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { AiFillPicture, AiOutlinePicture } from 'react-icons/ai'
import { useSession, signIn, signOut } from 'next-auth/react'

import { GrSend } from 'react-icons/gr'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

import { db, app } from '@/db/firebase'
import { toast } from 'react-hot-toast'

import { useRouter } from 'next/router'


const styles = {
    container: 'flex flex-row p-2 m-2 gap-2 bg-zinc-200 rounded-full rounded-zinc-950 items-center ',
    image: 'w-10 h-10 p-1 rounded-full',
    input: 'w-full ml-1 h-8 text-zinc-950 bg-zinc-50 shadow-md rounded-full text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white',
    btn: 'flex items-center p-2 justify-center w-10 h-10 text-zinc-950 bg-zinc-100 rounded-full border-2 border-zinc-950 shadow-md hover:shadow-lg active:translate-y-1  transition-all duration-200',
}

export default function CreatePost() {

    const { data: session } = useSession()

    const [postText, setPostText] = useState('')
    const router = useRouter()
    const captionRef = useRef(null)
    const [isSending, setIsSending] = useState(false)

    const sendPost = async () => {

        if (!isSending) {
            setIsSending(true)
            toast.error('please wait')
            return
        }else if (!postText) {
            toast.error('please enter some thing on mind')
            return
        } 


        const docRef = await addDoc(collection(db, 'posts'), {
            postText: postText,
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
            timestamp: serverTimestamp(),
        })
        setIsSending(false)
        toast.success('post created successfully')


    }


    const stories = [
        {
            name: 'Elon Musk',
            src: 'https://links.papareact.com/4zn',
            profile: 'https://links.papareact.com/kxk',
        },
    ]

    if (!session) return null

    return (

        <div className={styles.container}>

            {/* <Image className={styles.image} src={stories[0].profile} width={80} height={80} alt={stories[0].name} /> */}

            {/* <input className={styles.input} type='text'  placeholder={session?.user?.name ? `what on your mind ${session?.user.name}?` : 'sign in to say something?'} /> */}
            <input className={styles.input} type='text' value={postText} placeholder='some thing on mind ?' onChange={(e) => setPostText(e.target.value)} />

            <button type='button' title='picture' className={styles.btn} >
                <AiOutlinePicture size={20} />
            </button>
            <button onClick={sendPost} type='button' title='send' className={styles.btn}  >
                <GrSend size={20} />
            </button>

        </div>


    )
}

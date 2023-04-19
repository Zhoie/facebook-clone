import React from 'react'
import Image from 'next/image'
import { AiOutlineDelete } from 'react-icons/ai'
import { useSession } from 'next-auth/react'


import { doc, deleteDoc, where, getDocs, query } from 'firebase/firestore'

import { collection, Timestamp } from 'firebase/firestore'

import { db } from '@/db/firebase'

const styles = {
    container: ' p-1 break-words ',
    post: 'text-2xl',
    posterContainer: 'mt-6 flex flex-row items-center justify-center gap-8',
    name: 'text-4xl',
    image: '',
    imageSize: 20,
    deleteBtn: 'flex p-2 items-center justify-center w-10 h-10 text-zinc-950 bg-zinc-100 rounded-full border-2 border-zinc-950 shadow-md hover:shadow-lg active:translate-y-1  transition-all duration-200',
}

interface StoryProps {
    name: string
    email: string
    post: string
    image: string
    timestamp: Timestamp
}

export default function Story({ name, post, image, email,timestamp }: StoryProps) {

    const { data: session } = useSession()
    //delete post

    const deletePost = async () => {
        if (session?.user?.email === email) {
            console.log(timestamp)
            // console.log(name)
            if (timestamp) { // add null check for timestamp
                const q = query(collection(db, 'posts'), where('timestamp', '==', timestamp))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => {
                    deleteDoc(doc.ref)
                })
            }
        } else {
            alert('you are not allowed to delete this post')
        }
    }

    return (
        <div className={styles.container}>
            <p className={styles.post}>{post}</p>
            <div className={styles.posterContainer}>
                <div className={styles.image}>
                    <Image src={image} width={styles.imageSize} height={styles.imageSize} alt={name} />
                </div>
                <h3>{name}</h3>
                <button onClick={deletePost} className={styles.deleteBtn} type='button' title='delete'>
                    <AiOutlineDelete size={styles.imageSize} />
                </button>
            </div>

        </div>
    )
}

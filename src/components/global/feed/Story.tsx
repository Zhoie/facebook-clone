import React from 'react'
import Image from 'next/image'

const styles = {
    container: 'p-1 break-words',
    post: 'text-2xl',
    posterContainer: 'mt-6 flex flex-row gap-2',
    name: 'text-4xl',
    image: 'rounded-full border-4 border-zinc-950'
}

interface StoryProps {
    name: string
    post: string
    image: string
}

export default function Story({ name, post, image }: StoryProps) {
    return (
        <div className={styles.container}>
            <p className={styles.post}>{post}</p>
            <div className={styles.posterContainer}>
                <Image src={image} width={20} height={20} alt={name} />
                <h3>{name}</h3>

            </div>

        </div>
    )
}

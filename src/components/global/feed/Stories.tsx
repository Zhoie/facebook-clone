import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import Story from './Story'
import { db } from '@/db/firebase'
import { Timestamp, onSnapshot } from 'firebase/firestore'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const styles = {
  container: {
    base: 'grid grid-flow grid-cols-1 overflow-x-auto m-2 gap-2 rounded-2xl p-6 bg-zinc-200 border-zinc-950',
    baseAdapt: 'sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  },
  storyboardContainer: ' bg-zinc-200 shadows-2xl bg-zinc-50 rounded-xl border-2 border-zinc-950 trans duration-500',
  // storyboard: {
  //   image: 'rounded-xl filter brightness-75 hover:brightness-100 transition duration-150 transform  cursor-pointer',
  //   name: 'text-zinc-950',
  // },
}

interface StoryType {
  name: string
  email: string
  image: string
  postText: string
  timestamp: Timestamp
  id: string
}

export default function Stories() {

  const [stories, setStories] = useState<StoryType[]>([])



  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const sortedStories = snapshot.docs
        .map((doc) => doc.data() as StoryType)
        .sort((a, b) => b.timestamp?.toMillis() - a.timestamp?.toMillis())

      setStories(sortedStories)

      console.log(sortedStories)
    })

    return unsubscribe
  }, [])


  return (
    <div className={`${styles.container.base}&${styles.container.baseAdapt}`}>

      {stories.map((story, index) => (
        <div className={styles.storyboardContainer} key={index}>
            <p>{story.id}</p>
            
          <Story name={story.name} timestamp={story.timestamp} email={story.email} image={story.image} post={story.postText} />
          {/* <Image className={styles.storyboard.image} src={story.profile} width={400} height={400} alt={story.name} /> */}
          {/* <h1 className={styles.storyboard.name}>{story.name}</h1> */}
        </div>
      ))}

    </div>
  )
}

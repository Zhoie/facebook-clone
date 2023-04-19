import React,{useEffect, useState} from 'react'
import Image from 'next/image'

import Story from './Story'
import { db } from '@/db/firebase'
import { onSnapshot } from 'firebase/firestore'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const styles = {
  container: {
    base: 'grid grid-flow grid-cols-2 overflow-x-auto m-2 gap-2 rounded-2xl p-6 bg-zinc-200 border-zinc-950',
    baseAdapt:'sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  },
  storyboardContainer: ' bg-zinc-200 shadows-2xl bg-zinc-50 rounded-xl border-2 border-zinc-950',
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
  timestamp: string
}

export default function Stories() {

  const [stories, setStories] = useState<StoryType[]>([])


  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      setStories(snapshot.docs.map((doc) => doc.data() as StoryType))
    })
    return unsubscribe

  }, [])
  

  return (
    <div className={`${styles.container.base}&${styles.container.baseAdapt}`}>

      {stories.map((story, index) => (
        <div className={styles.storyboardContainer} key={index}>

          <Story name={story.name} image={story.image} post={story.postText}/>
          {/* <Image className={styles.storyboard.image} src={story.profile} width={400} height={400} alt={story.name} /> */}
          {/* <h1 className={styles.storyboard.name}>{story.name}</h1> */}
        </div>
      ))}

    </div>
  )
}

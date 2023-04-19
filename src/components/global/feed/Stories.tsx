import React from 'react'
import Image from 'next/image'

const styles = {
  container: {
    base: 'grid grid-cols-3 m-2 gap-2 rounded-2xl p-6 bg-white border-gray-200',
    baseAdapt:'sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7',
  },
  storyboardContainer: 'flex items-center justify-center bg-zinc-200 shadows-2xl rounded-xl',
  storyboard: {
    image: 'rounded-xl filter brightness-75 hover:brightness-100 transition duration-150 transform  cursor-pointer',
    name: 'text-zinc-950',
  },
}


export default function Stories() {

  const stories = [
    {
      name: 'Elon Musk',
      src: 'https://links.papareact.com/4zn',
      profile: 'https://links.papareact.com/kxk',
    },
    {
      name: 'Mark Zuckerberg',
      src: 'https://links.papareact.com/xql',
      profile: 'https://links.papareact.com/snf',
    },
    {
      name: 'Bill Gates',
      src: 'https://links.papareact.com/4u4',
      profile: 'https://links.papareact.com/zvy',
    },    {
      name: 'Elon Musk',
      src: 'https://links.papareact.com/4zn',
      profile: 'https://links.papareact.com/kxk',
    },
    {
      name: 'Mark Zuckerberg',
      src: 'https://links.papareact.com/xql',
      profile: 'https://links.papareact.com/snf',
    },
    {
      name: 'Bill Gates',
      src: 'https://links.papareact.com/4u4',
      profile: 'https://links.papareact.com/zvy',
    },{
      name: 'Elon Musk',
      src: 'https://links.papareact.com/4zn',
      profile: 'https://links.papareact.com/kxk',
    },
    {
      name: 'Mark Zuckerberg',
      src: 'https://links.papareact.com/xql',
      profile: 'https://links.papareact.com/snf',
    },
    {
      name: 'Bill Gates',
      src: 'https://links.papareact.com/4u4',
      profile: 'https://links.papareact.com/zvy',
    },    {
      name: 'Elon Musk',
      src: 'https://links.papareact.com/4zn',
      profile: 'https://links.papareact.com/kxk',
    },
    {
      name: 'Mark Zuckerberg',
      src: 'https://links.papareact.com/xql',
      profile: 'https://links.papareact.com/snf',
    },
    {
      name: 'Bill Gates',
      src: 'https://links.papareact.com/4u4',
      profile: 'https://links.papareact.com/zvy',
    },
  ];

  return (
    <div className={`${styles.container.base}&${styles.container.baseAdapt}`}>

      {stories.map((story, index) => (
        <div className={styles.storyboardContainer} key={index}>
          <Image className={styles.storyboard.image} src={story.profile} width={400} height={400} alt={story.name} />
          {/* <h1 className={styles.storyboard.name}>{story.name}</h1> */}
        </div>
      ))}

    </div>
  )
}

import React from 'react'
import LeftSideBar from './feed/LeftSideBar'
import Stories from './feed/Stories'
import CreatePost from './feed/CreatePost'

const styles = {
  container: 'flex flex-row w-full mx-auto bg-gray-700 pt-40 md:pt-16 sm:pt-16',
  leftsideBar: 'hidden md:block sm:block',
  createrPost: 'fixed flex flex-col w-full z-50 bottom-0 left-0 right-0 bg-gray-700 z-50',
  stories: 'flex flex-col w-full  duration-500',

  
}

export default function Feed() {
  return (

    <div className={styles.container}>
      {/* LeftSidebar */}
      {/* <div className={styles.leftsideBar}>
        <LeftSideBar />
      </div> */}

      {/* CreatePost */}
      <div className={styles.createrPost}>
        <CreatePost />
      </div>

      {/* Stories */}
      <div className={styles.stories}>
        <Stories />
        {/* CreatePost */}

      </div>

      <div>

      </div>

      {/* RightSidebar */}

    </div>


  )
}

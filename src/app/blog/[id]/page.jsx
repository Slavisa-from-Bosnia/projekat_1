import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cashe: "no-store",
  });
  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          {data.title}
        </h1>
        <p className={styles.desc}>
          {data.desc}
        </p>
        <div className={styles.author}>
          <Image 
          src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          width={40}
          height={40}
          className={styles.avatar}
          />
          <span className={styles.username} >Hej pa to sam ja!</span>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
        src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt=""
        fill={true}
        className={styles.image}
        />
      </div>
    </div>
  )
}

export default BlogPost
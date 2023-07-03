import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className= {styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          fill={true}
          alt="" 
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Bla bla bla bla
          </h1>
          <h2 className={styles.imgDesc}>
            Duži tekst ide ovdje
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Ko sam ja
          </h1>
          <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat alias ullam exercitationem et id asperiores consectetur, rerum temporibus deserunt neque veniam adipisci sit distinctio, sequi recusandae fugit porro fuga reprehenderit.
        
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos optio cumque eius! Quis, odio officia error architecto soluta rem corporis commodi laboriosam, ut unde ea maiores animi eaque sed!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi aspernatur molestiae voluptatibus! Aperiam, nemo reiciendis veniam nam dolorem tempora nesciunt ipsam! Error fuga obcaecati molestiae, beatae accusamus repellat officiis.
            <br />
            <br /> - Dynamic Websites -Fast and Handy Mobile
            <br />
            <br /> - Fast and Handy 
            <br />
            <br /> - Mobile Apps            
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About

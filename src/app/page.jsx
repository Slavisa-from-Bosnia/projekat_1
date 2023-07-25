import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className= {styles.container}>
      <div className= {styles.item}>
        <h1 className= {styles.title}>
          Naslov će stojati ovdje
        </h1>
        <p className= {styles.desc}>
          Opisni tekst će stajati ovdje
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className= {styles.item}>
        <Image src={Hero} alt='alternativni tekst' className= {styles.img}/>
      </div>
    </div>
    
  )
}

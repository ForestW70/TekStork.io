import Image from 'next/image'
import { AiFillCrown, AiFillHome, AiFillLock } from "react-icons/ai";

import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <p>Whaddup doc!</p>

      <div className={styles.quickTipBox}>
        <article>
          <AiFillCrown />
          <p>we will literally make you a king.</p>
        </article>
        <article>
          <AiFillHome />
          <p>Let us find you your new home.</p>
        </article>
        <article>
          <AiFillLock />
          <p>You'll lock down your next job, you beautiful human you.</p>
        </article>
      </div>
      <div>
        <span>Here's some shit about us</span>
        <ul>
          <li>big brains</li>
          <li>big bucks</li>
          <li>big butts</li>
        </ul>
      </div>

      <div>
        <span>What makes Us stand out.</span>
      </div>
      

    </div>
  )
}

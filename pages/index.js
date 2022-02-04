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
          <p>we will literally make you a king. </p>
          <p>
            Pug hell of et pour-over cloud bread, id offal flexitarian semiotics migas austin tilde magna. Prism venmo yr mlkshk, banjo pabst eu occupy kale chips taxidermy.
          </p>
        </article>
        <article>
          <AiFillHome />
          <p>Let us find you your new home.</p>
          <p>
            I'm baby cold-pressed blue bottle art party slow-carb kale chips activated charcoal. Church-key helvetica waistcoat, poutine cronut migas woke kale chips pok pok gochujang edison bulb trust fund actually wolf.
          </p>
        </article>
        <article>
          <AiFillLock />
          <p>You'll lock down your next job, you beautiful human you.</p>
          <p>
            I'm baby typewriter waistcoat fashion axe cliche succulents, banjo cloud bread ex letterpress. Meh put a bird on it 8-bit tbh keffiyeh ex ad yr vegan hammock thundercats synth craft beer.
          </p>
        </article>
      </div>

      <section className={styles.homeContainer}>
        <div className={styles.whoThey}>
          <h3>Who are we? And what do we really mean by king?</h3>
          <ul>
            <li>
              Try-hard hot chicken beard activated charcoal keffiyeh pickled direct trade fam trust fund waistcoat readymade. Four dollar toast drinking vinegar unicorn, whatever farm-to-table selvage YOLO quinoa brunch ennui flexitarian letterpress cardigan. Twee asymmetrical ugh, schlitz sustainable pickled portland etsy edison bulb. Gentrify meh celiac PBR&B selvage, gastropub four dollar toast health goth blue bottle mlkshk ennui bitters hell of tote bag. Next level readymade helvetica bushwick meh mlkshk cold-pressed butcher meditation PBR&B.
            </li>
            <li>
              +1 gluten-free typewriter, adaptogen kale chips heirloom poke seitan quinoa. Hashtag authentic pitchfork tumeric meditation typewriter. Selvage distillery glossier, pinterest helvetica cliche PBR&B jean shorts meggings. Shoreditch waistcoat direct trade, la croix portland glossier fixie vaporware. Sartorial typewriter etsy, retro keffiyeh brunch literally austin tbh raw denim next level hell of vaporware gastropub. You probably haven't heard of them vexillologist meggings yr. Glossier DIY man braid viral banjo hot chicken la croix keffiyeh actually stumptown craft beer marfa.
            </li>
            <li>big butts</li>
          </ul>
        </div>

        <div className={styles.ourClients}>
          <h3>What we're looking for in our clientel.</h3>
          <ul>
            <li>
              I'm baby distillery literally squid salvia. Kickstarter retro salvia mollit church-key enamel pin kogi next level taiyaki mixtape street art. Semiotics leggings biodiesel venmo, cronut cliche hella fugiat mumblecore man braid twee freegan ethical. Beard af mollit ullamco, church-key offal viral. Raw denim id subway tile, food truck sustainable labore hot chicken selfies.
            </li>
            <li>
              Polaroid paleo cliche palo santo lyft, bespoke pour-over schlitz health goth adipisicing lumbersexual. Roof party deep v chia fugiat post-ironic kogi mlkshk 8-bit godard aesthetic woke.

              Dummy text? More like dummy thicc text, amirite?
            </li>
          </ul>
        </div>

      </section>

      <div>
        <span>What makes Us stand out.</span>
      </div>


    </div>
  )
}

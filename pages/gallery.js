import Link from 'next/link'
import styles from '../styles/gallery.module.css'
import Image from 'next/image'
export default function Gallery(){

    let imgarray = ["/logo.jpeg","/roti.jpg"]
    return(
        <div className={styles.container}>
            <h1>Gallery</h1>
            <div className={styles.gallery}>
            {imgarray.map((img,id)=>(
                    <div className={styles.logo}>
                    <Image
                      src={img}
                      alt="logo"
                      width={300}
                      height={300}
                      />
                </div>
            ))}
            </div>
            <Link href="/">
                <button className={styles.backButton}>Back to Home</button>
            </Link>
        </div>
        )
}
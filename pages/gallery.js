import Link from 'next/link'
import styles from '../styles/gallery.module.css'
import Image from 'next/image'
export default function Gallery(){

    let imgarray = ["/logo.jpeg","/roti.jpg","/roll.jpg","/gallery1.jpg","/gallery2.jpg","/gallery3.jpg",
                    "/gallery4.jpg","/gallery5.jpg","/gallery6.jpg","/gallery7.jpg","/gallery8.jpg",
                    "/gallery9.jpg","/gallery10.jpg","/gallery11.jpg","/gallery12.jpg"
                    ]
    return(
        <div className={styles.container}>
            <h1>Gallery</h1>
            <div className={styles.gallery}>
            {imgarray.map((img,id)=>(
                    <div className={styles.logo}>
                    <Link href={img}>
                    <img
                      src={img}
                      alt="galleryimg"
                      width={300}
                      height={300}
                      />
                    </Link>    
                    
                </div>
            ))}
            </div>

            <div>
                <Link href="/">
                    <button className={styles.backButton}>Back to Home</button>
                </Link>
            </div>
            
        </div>
        )
}
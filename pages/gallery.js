import Link from 'next/link'
import styles from '../styles/gallery.module.css'
import Image from 'next/image'
export default function Gallery(){

    let imgarray = ["/logo.jpeg","/roti.jpg","/roll.jpg","/gallery1.jpg","/gallery2.jpg","/gallery3.jpg",
                    "/gallery4.jpg","/galleryvid.mp4","/gallery5.jpg","/gallery6.jpg","/gallery7.jpg","/gallery8.jpg",
                    "/gallery9.jpg","/gallery10.jpg","/gallery11.jpg","/gallery12.jpg","/gallery13.jpg","/gallery14.jpeg",
                    "/gallery15.jpeg","/gallery16.jpeg","/gallery17.jpeg","/gallery18.jpeg","/gallery19.jpeg"
                    
                    ]
    return(
        <div className={styles.container}>
            <h1>Gallery</h1>
            <div className={styles.gallery}>
            {imgarray.map((img,id)=>(
                    <div className={styles.logo} key={img}>
                    <Link href={img}>
                    {img.includes(".mp4")?
                    <video width="300" height="300" autoPlay muted loop={true}>
                    <source src={img} type="video/mp4"></source>
                  Your browser does not support the video tag.
                    </video>
                    
                    :
                    
                    
                    <img
                      src={img}
                      alt="galleryimg"
                      width={300}
                      height={300}
                      />}
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
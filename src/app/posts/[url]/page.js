import { getPost } from "@/app/_lib/api_helper";
import Image from "next/image";
import styles from '@/app/styles/post.module.css'
import { formatDate } from "@/app/_lib/helpers";
import { notFound } from "next/navigation";

export async function generateMetadata({ params}) {
    // read route params
    const id = params.url
      
    return {
        title:  `GuitarLA - ${id}`,
        description: `GuitarLA, guitarras venta de guitarras, entrada ${id}`,
      }
  }
   
const Post = async ({params}) => {

    const post = await getPost(params.url);
    if (post.data.length === 0) {
        notFound();
    }
    const {title, content, image, publishedAt} = post.data[0]?.attributes;


    const imageDestruct = image?.data[0].attributes.url;
    return (
        <article className={styles.post + ' ' + styles['mt-3']}>
            <Image width={1000} height={1000} className='imagen' src={imageDestruct} alt={`Imagen de ${title}`} />
            <div className={styles.contenido}>
                <h3 className="heading">{title}</h3>
                <p className={styles.fecha}>{formatDate(publishedAt)}</p>
                <p className={styles.texto}>{content}</p>
            </div>
        </article>
  )
}

export default Post

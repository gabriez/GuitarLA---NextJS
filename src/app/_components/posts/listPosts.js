import LayoutContent from "../layout"
import Link from "next/link"
import Image from "next/image";
import styles from '@/app/styles/post.module.css'
import { formatDate } from "@/app/_lib/helpers";

const ListPosts = ({posts}) => {

  return (
    <LayoutContent title={'Nuestro blog'} conditional={'main'} >
        <div className={styles.blog}>
            {
                posts?.length > 0 && 
                posts.map(post => {
                    const imageDestruct = post.attributes.image.data[0].attributes.formats.small.url;
                    return (
                        <article className={styles.post + ' postList'} key={post.id}>
                            <Image width={1000} height={1000} className={styles.imagen} src={imageDestruct} alt={`Imagen de ${post.attributes.title}`} />
                            <LayoutContent title={post.attributes.title} conditional={'div'}>
                                <p className={styles.fecha}>{formatDate(post.attributes.publishedAt)}</p>
                                <p className={styles.resumen}>{post.attributes.content}</p>
                                <Link className="enlace" href={`/posts/${post.attributes.url}`}>Lee el post</Link>
                            </LayoutContent>
                        </article>
                    )
                }
             )    
            }
        </div>
    </LayoutContent>
  )
}

export default ListPosts

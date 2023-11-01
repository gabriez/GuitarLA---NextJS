import ListPosts from '@/app/_components/posts/listPosts'
import { getPosts } from '../_lib/api_helper'
export const metadata = {
    title: 'GuitarLA - Nuestro Blog',
    description: 'GuitarLA, blog de musica, venta de guitarra'
  }

const Posts = async () => {
    const posts = await getPosts();

    return (
        <ListPosts posts={posts.data}/>
    )
}

export default Posts

import ListGuitars from './guitars/listGuitars'
import ListPosts from './posts/listPosts'
import Course from './course/course'
import { getPosts, getGuitars, getCourse } from '@/app/_lib/api_helper'
const Home = async () => {
  const [posts, guitars, course] = await Promise.all([getPosts(), getGuitars(), getCourse()]);

  return (
    <>
      <ListGuitars guitars={guitars} />
      <Course course={course}/>
      <ListPosts posts={posts}/>
    </>
  )
}

export default Home

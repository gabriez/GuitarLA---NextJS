

// import Home from './_components/home'
import ListGuitars from './_components/guitars/listGuitars';
import ListPosts from './_components/posts/listPosts';
import Course from './_components/course/course';
import { getPosts, getGuitars, getCourse } from '@/app/_lib/api_helper'

export default async function Index() {
  const [posts, guitars, course] = await Promise.all([getPosts(), getGuitars(), getCourse()]);

  return (
    <>
      <ListGuitars guitars={guitars.data} />
      <Course course={course}/>
      <ListPosts posts={posts.data}/>
    </>
  )
 
  // return (
  //   <Home/>
      
   
  // )
}

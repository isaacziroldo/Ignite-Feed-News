

import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css'

import './Global.css'
import { Sidebar } from './components/Sidebar';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/isaacziroldo.png",
      name: "Isaac Ziroldo",
      role: "Web Developer",
    },
    content: [
      {type: 'paragraph', content:"Fala galeraa ๐" },
      {type: 'paragraph', content:"Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐"},
      {type: 'link', content:"๐ jane.design/doctorcare" }
    ],
    publishedAt: new Date('2023-01-15 21:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "Joรฃo Antรดnio",
      role: "DBA",
    },
    content: [
      {type: 'paragraph', content:"Fala galeraa ๐" },
      {type: 'paragraph', content:"Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐"},
      {type: 'link', content:"๐ jane.design/doctorcare" }
    ],
    publishedAt: new Date('2023-01-29 17:00:00')
  },
]


export function App()  {
  return (
    <div>

      <Header />
         
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => {
              return (

                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content as []}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

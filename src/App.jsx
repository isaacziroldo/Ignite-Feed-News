

import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css'
import './Global.css'
import { Sidebar } from './components/Sidebar';


export function App()  {
  return (
    <div>

      <Header />
         
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author='Isaac Ziroldo'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dolore molestias, veritatis in aspernatur sed cumque cum animi temporibus, optio aliquid earum. A error voluptatum accusamus. Voluptatem voluptates nemo nostrum!'
          />

          <Post 
            author='Janilo'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dolore molestias, veritatis in aspernatur sed cumque cum animi temporibus, optio aliquid earum. A error voluptatum accusamus. Voluptatem voluptates nemo nostrum!'
          />
        </main>
      </div>
    </div>
  )
}



import { Header } from './components/Header';
import { Post } from './Post';
import './Global.css'


export function App()  {
  return (
    <div>

      <Header />
      
      <Post 
        author='Isaac Ziroldo'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quasi nesciunt fuga odit nobis soluta, labore praesentium, dolores in beatae nemo aliquam aliquid nihil nulla eaque dolorem obcaecati dolore accusantium?'
      />

<Post 
        author='Kézia Ziroldo'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quasi nesciunt fuga odit nobis soluta, labore praesentium, dolores in beatae nemo aliquam aliquid nihil nulla eaque dolorem obcaecati dolore accusantium?'
      />
    </div>
  )
}

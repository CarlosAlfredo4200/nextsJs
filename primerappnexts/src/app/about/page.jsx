"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
    const router = useRouter()
  return (
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint numquam totam illum atque nesciunt tempora dolorum corrupti quam sequi, adipisci, illo, voluptatibus aliquid velit magnam provident suscipit rem nulla qui quo aliquam et aspernatur. Laudantium, unde. Minus dolorem maxime est sit deserunt, eveniet magnam iste laboriosam. Quos repudiandae corrupti nemo dolorum similique libero voluptate, laborum voluptas veritatis veniam, distinctio ipsa? Est pariatur nam totam ex, consequatur, eos assumenda ab alias numquam vel, dolore quae. Repellendus, vero. Fugit nam sapiente nihil pariatur dolorum laborum obcaecati ex amet, ipsa possimus esse voluptas unde beatae quia provident molestias labore debitis libero aliquid qui.</p>
         
 

    <button className='button-animation' onClick={()=> {
        router.push('/');
    }}>Home</button>
                
        </div>
  )
}

export default About
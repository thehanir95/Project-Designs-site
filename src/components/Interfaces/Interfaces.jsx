import React from 'react'
import './interfaces.css'
import IMG1 from '../../assets/fos.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Food Ordering System',
    github: 'https://github.com/thehanir95/Single-Page-Application.git',
    demo: 'https://www.figma.com/file/DvlWHGp7z143c30GDDjQqN/Food-Ordering-App?type=design&node-id=0%3A1&t=kBkwYTJJVaRBKXjd-1'
  }
]


const Interfaces = () => {
  return (
    <section id='design'>
      <h5>What I do</h5>
      <h2>UI Designs</h2>

      <div className='container design_container'>
        {
          data.map(({id, image, title,github, demo}) => {
            return(
              <article className='design_item' key={id}>
                <div className='design_item-image'>
                  <img src={image} alt="IMG1" />
                </div>
                <h3>{title}</h3>
                <div className='design_item-cta'>
                <a href={demo} className='btn' target='_blank'>Go to Screens</a>
                <a href="https://drive.google.com/file/d/1iS0CG3cBmXOQB9kqPmHqZmdj7qlS3dTB/view?usp=share_link" className='btn btn-primary' target='_blank'>Download Design PDF</a>  
                </div>
              </article>
            )
          })
        }
             
      </div>
    </section>
  ) 
}

export default Interfaces
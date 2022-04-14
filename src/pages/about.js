import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore numquam officia dolor eos rerum consequuntur quas nam
              vero labore excepturi, animi saepe quod aliquam perferendis
              dolorum, quidem laboriosam unde sunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              doloribus rerum itaque saepe sint in qui quaerat. Iure distinctio
              officiis vel temporibus! Est harum maxime ullam voluptas possimus
              totam porro?
            </p>
            <Link to='/contact' className='btn'>
              Contact
            </Link>
          </article>
          <StaticImage
            src='../assets/images/about.jpeg'
            alt='Person Poouring Salt in bowl'
            className='about-img'
            placeholder='blurred'
          />
        </section>
      </main>
    </Layout>
  )
}

export default About

import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
            <h3>Want To Get in Touch?</h3>
            <p>
              I'm baby poutine roof party trust fund, microdosing godard master
              cleanse mumblecore dreamcatcher literally fingerstache ugh
              hashtag.
            </p>
            <p>
              Scenester austin sustainable humblebrag, intelligentsia prism
              meggings. Kickstarter chartreuse farm-to-table tbh narwhal
              adaptogen
            </p>
            <p>
              chambray raw denim hoodie. Poutine glossier slow-carb salvia
              crucifix thundercats, pickled XOXO.
            </p>
          </article>
          <article>
            <form action='' className='form contact-form'>
              <div className='form-row'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' />
              </div>
              <div className='form-row'>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' id='email' />
              </div>
              <div className='form-row'>
                <label htmlFor='message'>Message</label>
                <textarea
                  name='message'
                  id='message'
                  cols='30'
                  rows='10'
                ></textarea>
              </div>
              <button type='submit' className='btn block'>
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact

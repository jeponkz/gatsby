import React from 'react'

const Footer = () => {
  return (
    <footer className='page-footer'>
      <p>
        &copy; {new Date().getFullYear()} <span>SimplyRecipes</span> Built with{' '}
        <a href='gatsbyjs.com'>GatsbyJS</a>
      </p>
    </footer>
  )
}

export default Footer

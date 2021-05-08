import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubMenu } = useGlobalContext()

  return (
    <section className='hero' onMouseOver={closeSubMenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Stripe styled navbar menus with the cool hover effect</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium atque temporibus officiis, nulla necessitatibus aperiam,
            totam adipisci aspernatur, excepturi rerum quidem incidunt beatae
            placeat magnam.
          </p>
          <button className='btn'>Start now</button>
          <p className='reference'>
            Check out the original{' '}
            <a href='https://stripe.com/' target='_blank' rel='noreferrer'>
              Stripe's site
            </a>{' '}
            to see the idea for the cool Navbar
          </p>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero

import { useState } from 'react'
import Logo from './logo'
import '../tailwind/output.css'
import './App.scss'

import SectionImage1 from "../images/section-image-1.svg"
import SectionImage2 from "../images/section-image-2.svg" 
import SectionImage3 from "/images/section-image-3.svg"
import SectionImage4 from "../images/section-image-4.svg"
import stars from "../images/stars.svg"

import HeroClouds from '../images/hero-coulds.svg'
import HeroImg1 from '../images/hero-image-1.svg'
import HeroImg2 from '../images/hero-image-2.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <Destructure />
    </main>
  )
}

const Navbar = () => {

  const Navbutton = (props : any) => {
    return (
      <a className='font-semibold mx-4 px-1 hover:cursor-pointer hover:underline' href={props.link}>{props.text}</a>
    )
  }

  return (
    <div className='w-screen flex flex-col justify-center align-center items-center h-4 mdlg:h-20'>  
      <nav className='hidden mdlg:flex flex-row items-center justify-between p-5 w-4/6'>
        <Logo />
        <div className='flex flex-row items-center justify-center text-sm'>
          <Navbutton text='Download' />
          <Navbutton text='Nitro' />
          <Navbutton text='Safety' />
          <Navbutton text='Support' />
          <Navbutton text='Blog' />
          <Navbutton text='Careers' />
        </div>
        <Button elClasses='light-btn' text='Open Discord' />
      </nav>
    </div>
  )
}

const Button = (props : any) => {
  return (
    <a className={` mx-2 my-4 ${props.elClasses}`} href={props.link}>
      {props.text}
    </a>
  )
}

const Destructure = () => {
  return (
    <div>
      <section className='heroSection bg-blurple minh-40 text-bright'>
        <div className='flex justify-center items-center'>
          <Navbar />
        </div>
        <div className='xl:px-44'>
          <article className='text-center px-12 xlg:px-96 pt-32 flex flex-col justify-center'>
            <h1 className='text-bright'>IMAGINE A PLACE...</h1>
            <br />
            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <div className='flex flex-col md:flex-row items-center justify-center text-xl p-6'>
              <Button elClasses='light-btn' text='Download' />
              <Button elClasses='dark-btn' text='Open Discord in your browser' />
            </div>
          </article>
        </div>
      </section>
      <section className='bg-white sect'>
        <img src={SectionImage1} className='sectImg' />
        <article className='sectArticle'>
          <h2>
            Create an <br /> invite-only place where you belong
          </h2>
          <br />
          <p>
            Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
          </p>
        </article>
      </section>
      <section className='bg-offWhite sect'>
        <article className='sectArticle'>
          <h2>
            <br /> <br />
            Where hanging <br /> out is easy
          </h2>
          <br />
          <p>
            Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
          </p>
        </article>
        <img src={SectionImage2} className='sectImg' />
      </section>
      <section className='bg-white sect'>
        <img src={SectionImage3} className='sectImg' />
        <article className='sectArticle'>
          <h2>
            <br /> <br />
            From few to a <br /> fandom
          </h2>
          <br />
          <p>
            Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
          </p>
        </article>
      </section>
      <section className='bg-offWhite flex flex-col justify-center items-center py-32'>
        <article className='text-center m-4'>
          <h2 className='font-extrabold'>
            RELIABLE TECH FOR STAYING CLOSE
          </h2>
          <br />
          <p>
            Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
          </p>
        </article>
        <img src={SectionImage4} className='w-1/2 pb-10' />
        <img src={stars} alt="" />
        <h3 className='text-center xlg:text-left'>Ready to start your journey?</h3>
        <Button elClasses='blurple-btn' text='Download' />
      </section>
    </div>
  )
}

export default App;

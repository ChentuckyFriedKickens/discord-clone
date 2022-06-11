import { useState } from 'react'
import Logo from './logo'
import '../tailwind/output.css'

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
    <nav className='flex flex-row items-center justify-between p-5 w-4/6'>
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
  )
}

const Button = (props : any) => {
  return (
    <a className={` mx-2 ${props.elClasses}`} href={props.link}>
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
        <div className='px-44'>
          <article className='text-center px-96 pt-32 flex flex-col justify-center'>
            <h1 className='text-bright'>IMAGINE A PLACE...</h1>
            <br />
            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <div className='flex flex-row items-center justify-center text-xl p-6'>
              <Button elClasses='light-btn' text='Download' />
              <Button elClasses='dark-btn' text='Open Discord in your browser' />
            </div>
          </article>
        </div>
      </section>
      <section className='bg-white flex flex-row justify-center py-32'>
        <img src="../images/section-image-1.svg" className='w-1/3' />
        <article className='w-1/5 mx-20 pt-6'>
          <h2>
            Create an <br /> invite-only <br /> place where you <br /> belong
          </h2>
          <br />
          <p>
            Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
          </p>
        </article>
      </section>
      <section className='bg-offWhite flex flex-row justify-center py-32'>
        <article className='w-1/5 mx-20 pt-6'>
          <h2>
            <br /> <br />
            Where hanging <br /> out is easy
          </h2>
          <br />
          <p>
            Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
          </p>
        </article>
        <img src="../images/section-image-2.svg" className='w-1/3' />
      </section>
      <section className='bg-white flex flex-row justify-center py-32'>
        <img src="../images/section-image-3.svg" className='w-1/3' />
        <article className='w-1/5 mx-20 pt-6'>
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
      <section className='bg-white flex flex-row justify-center py-32'>
        <article className='w-1/5 mx-20 pt-6'>
          <h2>
            <br /> <br />
            From few to a <br /> fandom
          </h2>
          <br />
          <p>
            Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
          </p>
        </article>
        <img src="../images/section-image-4.svg" className='' />
      </section>
    </div>
  )
}

export default App;

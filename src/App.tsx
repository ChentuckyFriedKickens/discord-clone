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
      <a className='font-semibold mx-5 px-1 hover:cursor-pointer hover:underline' href={props.link}>{props.text}</a>
    )
  }

  return (
    <nav className='flex flex-row items-center justify-around p-5'>
      <Logo />
      <div className='flex flex-row items-center justify-center'>
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
    <a className={`${props.elClasses}`} href={props.link}>
      {props.text}
    </a>
  )
}

const Destructure = () => {
  return (
    <div>
      <section className='heroSection bg-blurple minh-40 text-bright'>
        <Navbar />
        <div className='px-48'>
          <article className='text-center px-96 pt-32 flex flex-col justify-center'>
            <h1 className='text-bright'>IMAGINE A PLACE...</h1>
            <br />
            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <div></div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default App;

// for some custom styles
import './App.css'

import { AboutMe } from './components/About-me'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

/* 

  Frontend:

    Skills:

      Fix the footer icons

    Change the url to my email
    Create a new work gmail account once you have a new sim-card
    
    
  Backend:

    Handle mails
    Ensure security

*/

function App() {
  return (
    <div className='flex flex-col gap-y-14'>
      <header className='overflow-x-clip'>
        <Header />
      </header>

      <main className='overflow-x-clip'>
        <AboutMe />

        <Skills />

        <Projects />

        <Contacts />
      </main>

      <footer className='mb-12 sm:mb-24 lg:mb-32'>
        <Footer />
      </footer>
    </div>
  )
}

export default App

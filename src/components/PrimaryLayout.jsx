import Footer from "./Footer"
import Header from "./Header"

const PrimaryLayout = ({children}) => {
  return (
    <div className="flex flex-col items-center h-screen">
      <header className="w-full">
        <Header/>
      </header>
      <main className="w-full flex h-screen justify-center overflow-y-scroll">
        {children}
      </main>
      <footer className="w-full">
        <Footer/>
      </footer>
    </div>
  )
}

export default PrimaryLayout
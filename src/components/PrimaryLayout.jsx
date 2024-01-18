import Footer from "./Footer"
import Header from "./Header"

const PrimaryLayout = ({children}) => {
  return (
    <div className="flex flex-col items-center h-fit">
      <header className="w-full">
        <Header/>
      </header>
      <main className="w-4/6">
        {children}
      </main>
      <footer className="w-full">
        <Footer/>
      </footer>
    </div>
  )
}

export default PrimaryLayout
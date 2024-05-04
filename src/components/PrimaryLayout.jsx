import { useContext, useEffect } from "react"
import Footer from "./Footer"
import Header from "./Header"
import { getUser } from "../services/usersServices"
import { logInData } from "../App"

const PrimaryLayout = ({children}) => {
  
  const {setLogedInUser} = useContext(logInData)

  useEffect(() => {//this is for stay sign in when usr will reload the page or just shut down without logout
    const handleUser = async ()=>{
      const userData = JSON.parse(localStorage.getItem('user_data'))
      if(userData){
        const user = await getUser(userData.id)
        setLogedInUser(user?.data)
      }
    }
    handleUser()
  }, [])
  
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
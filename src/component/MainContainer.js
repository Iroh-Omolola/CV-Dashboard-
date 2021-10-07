import {useState}from 'react'
import Header from './layout/Header'
import Main from './Main'

const MainContainer = () => {
    const [nav, setnav] = useState(false); 

  const displayNav=()=>{
    setnav(!nav)
    console.log(nav)
  }

    return (
        <div className='main-body'>
           <Header  showNav={displayNav}/>
            <Main isShow={nav}/>
        </div>
    )
}

export default MainContainer

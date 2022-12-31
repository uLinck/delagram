import {useEffect, useState, useMemo } from "react"
import Cookies from "universal-cookie"

const HomeTest = (props) => {
  const [user, setUser] = useState(props.loggedUser)

  const cookies = new Cookies()
  const [count, setCount] = useState(getCount(cookies));

  // cookies.set("myCat", "Pacman", { path: '/'})

  useEffect(() => setCountCookie(cookies, count), [cookies, count])

  useEffect(() => { 
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      console.log(loggedInUser)
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, [])



  const increment = () => setCount((currentCount) => currentCount + 1)
  const decrement = () => setCount((currentCount) => currentCount - 1)

  return (
    <div className="counter">
      <h1 className="count">{count}</h1>
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>Decrement</button>
    </div>
  )
}

const getCount = (cookies) => {
  let count = cookies.get("count") 
  if(count != null) {
    return parseInt(count)
  } 
  else {
    cookies.set("count", 0, { path: '/' })
    return 0
  }
}

const setCountCookie = (cookies, count) => {
  cookies.set("count", count, { path: '/' })
}

export default HomeTest
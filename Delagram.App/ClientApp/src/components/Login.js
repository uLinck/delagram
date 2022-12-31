import { useEffect, useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { LoginUser } from '../HttpClient'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState()

  const handleSubmit = async e => {
    e.preventDefault()
    let response = await LoginUser(username, password) 

    setUser(response)
    localStorage.setItem('user', JSON.stringify(response))
    console.log(response)
  } 

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      console.log(loggedInUser)
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, [])

  const logout = () => {
    setUser()
    setUsername("")
    setPassword("")
    localStorage.clear()
  }

  if (user) {
    return (
      <div>
        <div>{ user.username } is logged in</div>
        <Button onClick={logout}>Logout</Button>
      </div>
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor='username'>Username: </Label>
        <Input
          type='text'
          value={ username }
          placeholder='Enter a username'
          onChange={({ target }) => setUsername(target.value)} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor='password'>Password: </Label>
        <Input
          type='password'
          value={ password }
          placeholder='Enter a password'
          onChange={({ target }) => setPassword(target.value)} />
      </FormGroup>
      <Button type='submit'>Login</Button>
    </Form>
  )
}

export default Login
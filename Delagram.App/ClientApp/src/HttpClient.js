const Fetch = async (endpoint, method, object) => {
  const rawResponse = await fetch(`https://localhost:7221/${endpoint}`, {
    method: `${method}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InJvYmluIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNjcyNTIzMDMzLCJleHAiOjE2NzI1MjY2MzMsImlhdCI6MTY3MjUyMzAzM30.RllKCZoGzJY8JRDpF8T41AKXlQwzDz5Qw8Jie_i1pbE'
    },
    body: JSON.stringify(object),
    credentials: 'omit'
  })

  return await rawResponse.json()
}

export const LoginUser = async (username, password) => {
  return await Fetch('Login/Login', 'POST', {
    username: username,
    password: password
  })
}


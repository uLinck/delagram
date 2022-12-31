const Fetch = async (endpoint, method, object) => {
  const rawResponse = await fetch(`https://localhost:7221/${endpoint}`, {
    method: `${method}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InJvYmluIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNjcyNTE3NDM5LCJleHAiOjE2NzI1MjEwMzksImlhdCI6MTY3MjUxNzQzOX0.VH5grfO7bQV3gfn0mi4bsYAYRfMzwOjw4iH57OeDS1U'
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


import { Route, Routes } from 'react-router-dom'

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path="/welcome/new-user" element={<p>Welcome new user!</p>}/>
      </Routes>
    </section>
  )
}

export default Welcome
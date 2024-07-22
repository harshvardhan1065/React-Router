import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data , setdata] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com.users/hiteshhoudhary')
    //   .then(response => response.json)
    //   .then(data => {
    //     setdata(data)
    //   })
    // }, [third])
    
  return (
    <div className=' text-center m-4 p-4 bg-gray-600 text-white text-3xl '>Github Followers : {data.followers}</div>
  )
}

export default Github
 
export const GithubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteschoudhary')
    return response.json()
}

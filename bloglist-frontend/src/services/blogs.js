import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addBlog = async (title, author, url, user) => {
  const config = {
    headers : {
      'Authorization': user.user.token
    }
  }
  const newBlog = {
    title,
    author,
    url
  }
  try {
    const request = await axios.post(baseUrl, newBlog, config)
    return "Blog Added"
  } catch {
    return "Bad Request"
  }
}

export default { getAll, addBlog}
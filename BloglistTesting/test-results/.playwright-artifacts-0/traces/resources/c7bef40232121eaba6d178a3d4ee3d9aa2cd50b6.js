import axios from "/node_modules/.vite/deps/axios.js?v=b835e62f"
const baseUrl = 'http://localhost:3003/api/blogs'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addBlog = async (title, author, url, user) => {
    const config = {
        headers : {
            'Authorization': user.token
        }
    }
    const newBlog = {
        title,
        author,
        url
    }
    return await axios.post(baseUrl, newBlog, config)
}

const likeBlog = async (blog, user) => {
    const config = {
        headers : {
            'Authorization': user.token
        }
    }
    const Blog = {
        ...blog,
        likes: blog.likes + 1
    }
    await axios.put(`${baseUrl}/${blog.id}`, Blog)

}

const deleteBlog = async (blog) => {
    await axios.delete(`${baseUrl}/${blog.id}`)
}
export default { getAll, addBlog, likeBlog, deleteBlog }
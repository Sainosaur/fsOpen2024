import { GET_GENRE, GET_GENRE_BOOKS } from "../queries"
import { useQuery } from '@apollo/client'

const RenderBooks = ({favGenre}) => {
    const listResult = useQuery(GET_GENRE_BOOKS, {
        variables: {
            Genre: favGenre
        }, fetchPolicy: 'network-only'
    })
    if (listResult.loading) {
        return (<h1>Loading... </h1>)
    }
    const bookList = listResult.data.allBooks
    return (
        <table>
            <tbody>
            <tr>
                <th></th>
                <th>author</th>
                <th>published</th>
            </tr>
            {bookList.map((a) => (
                <tr key={a.title}>
                <td>{a.title}</td>
                <td>{a.author.name}</td>
                <td>{a.published}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

const Recommended = () => {
    const meResult = useQuery(GET_GENRE)
    if (meResult.loading) {
        return (<h1>Loading</h1>)
    }
    return (
        <div>
            <h1>recommendations</h1>
            <h2>Books found in your favourite genre</h2>
            <RenderBooks favGenre={meResult.data.me.favouriteGenre}/>
        </div>

    )
}

export default Recommended
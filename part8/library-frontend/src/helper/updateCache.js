const { GET_BOOKS } = require('../queries')

const updateCache = (data, client) => {
    client.cache.updateQuery({ query: GET_BOOKS }, ({ allBooks }) => ({
        // Prevents any duplication
          allBooks: allBooks.includes(data.data.bookAdded) ? null : allBooks.concat(data.data.bookAdded)
      }))
}

module.exports = updateCache
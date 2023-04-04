const pool = require('../Configs/db')


// Get all albums

const getAlbums = async (request, response) => {
    pool.query('SELECT * FROM Album ORDER BY album_id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

// Get user by Id
const getAlbumById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM Album WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// Post a new user
const createAlbum = (request, response) => {
    const { name, description, image } = request.body

    pool.query('INSERT INTO Album (name, description, image) VALUES ($1, $2, $3) RETURNING *', [name, description, image], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Album added with ID: ${results.rows[0].id}`)
    })
}

// Update an album
const updateAlbum = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, description, image } = request.body

    pool.query(
        'UPDATE Album SET name = $1, description = $2, image = $3 WHERE id = $4',
        [name, description, image, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Album modified with ID: ${id}`)
        }
    )
}

// Delete an album

const deleteAlbum = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM Album WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Album deleted with ID: ${id}`)
    })
}

// Export the functions
module.exports = {
    getAlbums,
    getAlbumById,
    createAlbum,
    updateAlbum,
    deleteAlbum
}

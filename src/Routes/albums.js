const {router} = require('../index');
const app = require('../index')



router.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

router.get('api/v1/albums', db.getAlbums); // Get all albums
router.get('api/v1/albums/:id', db.getAlbumById); // Get album by id
router.post('api/v1/albums', db.createAlbum); // Post a new album
router.put('api/v1/albums/:id', db.updateAlbum); // Update an album
router.delete('api/v1/albums/:id', db.deleteAlbum); // Delete an album
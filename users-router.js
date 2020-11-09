let {getUsers, addUser, deleteUser,getUser,updateUser} = require('./repository');
let express = require('express');
let router = express.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', async (req, res) => {
    let users = await getUsers()

    if (!!req.query.search) {
        users = users.filter(u => u.name.indexOf(req.query.search) > -1)
    }
    res.send((users))
})

router.get('/:id', async (req, res) => {
    let userId = req.params.id
    let user = await getUser(userId)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})

router.delete('/:id', async (req, res) => {
    let userId = req.params.id
    let users = await deleteUser(userId)
    res.send(204)
})

router.post('/', async (req, res) => {
    let name = req.body.name;
     await addUser(name)
    res.send({success: true})
})

router.put('/', async (req, res) => {
    let name = req.body.name;
    let id = req.body.id;
     await updateUser(id,name)
    res.send({success: true})
})

module.exports = router;


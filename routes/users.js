const router = require('koa-router')()
const Person = require('../dbs/models/person');
router.prefix('/users')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

router.get('/addPerson', async function (ctx, next) {
    const person = new Person({
        name: 'lipeng',
        age: '25'
    });
    await person.save();
    ctx.body = {
        code: 0
    }
})

module.exports = router

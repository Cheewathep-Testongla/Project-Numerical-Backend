const jsonServer = require('json-server')
const auth = require('json-server-auth')
const app = jsonServer.create()
const router = jsonServer.router('./Chapter.json')
const middlewares = jsonServer.defaults({noCors:true})
var cors = require("cors");
// const rules = auth.rewriter({
//     "root-equation":660,
//     "linear":660,
//     "polation":660,
// })
app.db = router.db
app.use(cors())
// app.use(rules)
app.use(auth)
app.use(middlewares);
app.use(router)
app.listen(3001,()=>
{
    console.log("JSON SERVER is running!!!");
})
const jsonServer = require('json-server')
const auth = require('json-server-auth')
const app = jsonServer.create()
const router = jsonServer.router('./Chapter.json')
const middlewares = jsonServer.defaults({noCors:true})
var cors = require("cors");
const rules = auth.rewriter({
    "Numerical_Method":660,
    "users":660
})
app.db = router.db
app.use(cors())
app.use(rules)
app.use(auth)
app.use(middlewares);

// Swagger Doc
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./Cheewathep-Testongla-NumericalAPI-0.1-resolved.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router)
// Set Port 3001 to star heroku
app.listen(process.env.PORT || 3001,()=>
{
    console.log("SERVER IS RUNNING!!!");
})
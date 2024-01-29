const JSONServer=require('json-server')

const StudServer=JSONServer.create()

const router=JSONServer.router("db.json")

const middleware=JSONServer.defaults()

const PORT=3000||process.env.PORT

StudServer.use(middleware)
StudServer.use(router)
StudServer.listen(PORT,()=>{
    console.log(`Server has started at Port ${PORT} and waiting for client request...`);
})
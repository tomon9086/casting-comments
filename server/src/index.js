const Koa = require("koa")
const Router = require("koa-router")
const bodyParser = require("koa-bodyparser")
const logger = require("koa-logger")
const cors = require("@koa/cors")

const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.use(logger())
app.use(router.routes())
if(process.env.NODE_ENV !== "production") {
	router.use(cors())
}

router.get("/ping", ctx => {
	ctx.body = "pong"
})

app.listen(8081)

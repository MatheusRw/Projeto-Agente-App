import Fastify from "fastify";

const app = Fastify({
    logger: true,
});


app.listen({port:Number(process.env.PORT) || 3333}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    app.log.info(`Server is running on ${address}`);
});


app.get("/", (req,res) => {
    res.send("Hello World");
});

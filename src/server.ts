import Fastify from "fastify";
import { planRoutes } from "./routes/plan";

//inicializa o fastfiy
const app = Fastify({
    logger: true,
});


//primeira rota
app.get("/", (req,res) => {
    res.send("Hello World");
});

app.register(planRoutes);


//inicialziza a api 
app.listen({ port: Number(process.env.PORT) || 3333, host: "0.0.0.0"})
    .then(() => {
        console.log(`Server is running on port ${process.env.PORT || 3333}`);
    }).catch((err) => {
        console.error("Error starting server:", err);
        process.exit(1);
    })




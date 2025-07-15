import express       from "express";
import rateLimit     from "express-rate-limit";
import helmet        from "helmet";
import morgan        from "morgan";
// import session       from "express-session";
import swaggerJSDoc  from 'swagger-jsdoc';
import swaggerUi     from 'swagger-ui-express';
import routes        from "../routes/router.mjs";
import { err }       from "../middlewares/error.middleware.mjs";
import { config }    from "dotenv"; config();

const app = express();

app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15min
    limit: 100,
    legacyHeaders: false,
    message: "Too many requests, please try again later.",
}));
app.use(helmet());
app.use(express.json());

// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 60000,
//         httpOnly: process.env.NODE_ENV === "production", 
//         secure: process.env.NODE_ENV === "production",
//     },
// }));

app.use(morgan(
    (process.env.NODE_ENV === "production")? "combined" : "tiny"
));

app.use('/api', routes);


// Swagger config
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Inventory management system API',
            version: '1.0.0',
            description: 'Inventory management system API using Express and Swagger',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [{ bearerAuth: [] }],
        servers: [
            {
                url: `${process.env.URL}:${process.env.port || 3000}`,
            },
        ],
    },
    apis: ['../routes/*.mjs'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
if (process.env.NODE_ENV !== 'production') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.use(err);

export default app;
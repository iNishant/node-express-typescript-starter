import express, { Request, Response } from "express";
const helmet = require("helmet");

const app = express();

app.use(helmet());

const port = 8080;

app.get( "/", ( req: Request, res: Response ) => {
    res.send( "Hello world!" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
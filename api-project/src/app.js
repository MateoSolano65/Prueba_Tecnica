const express = require( 'express' );
const usuarioRoutes = require( './routes/userRoutes' );

const app = express();

app.use( express.json() );
app.use( '/api/usuarios', usuarioRoutes );

const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {
  console.log( `Server is running on port ${ PORT }` );
} );

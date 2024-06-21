const pool = require( '../models/database' );

const getUsuarios = async ( req, res ) => {
  try {
    const [ rows ] = await pool.query( 'SELECT * FROM usuarios' );
    res.status( 200 ).json( rows );
  } catch ( err ) {
    res.status( 500 ).json( { error: err.message } );
  }
};

const getUsuarioById = async ( req, res ) => {
  const { id } = req.params;
  try {
    const [ rows ] = await pool.query( 'SELECT * FROM usuarios WHERE id_usuario = ?', [ id ] );
    if ( rows.length > 0 ) {
      res.status( 200 ).json( rows[ 0 ] );
    } else {
      res.status( 404 ).json( { message: 'Usuario not found' } );
    }
  } catch ( err ) {
    res.status( 500 ).json( { error: err.message } );
  }
};

const createUsuario = async ( req, res ) => {
  const { nombre, email } = req.body;
  try {
    const [ result ] = await pool.query( 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)', [ nombre, email ] );
    res.status( 201 ).json( { id: result.insertId, nombre, email } );
  } catch ( err ) {
    res.status( 500 ).json( { error: err.message } );
  }
};

const updateUsuario = async ( req, res ) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  try {
    const [ result ] = await pool.query( 'UPDATE usuarios SET nombre = ?, email = ? WHERE id_usuario = ?', [ nombre, email, id ] );
    if ( result.affectedRows > 0 ) {
      res.status( 200 ).json( { id, nombre, email } );
    } else {
      res.status( 404 ).json( { message: 'Usuario not found' } );
    }
  } catch ( err ) {
    res.status( 500 ).json( { error: err.message } );
  }
};

const deleteUsuario = async ( req, res ) => {
  const { id } = req.params;
  try {
    const [ result ] = await pool.query( 'DELETE FROM usuarios WHERE id_usuario = ?', [ id ] );
    if ( result.affectedRows > 0 ) {
      res.status( 200 ).json( { message: 'Usuario deleted' } );
    } else {
      res.status( 404 ).json( { message: 'Usuario not found' } );
    }
  } catch ( err ) {
    res.status( 500 ).json( { error: err.message } );
  }
};

module.exports = {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario
};

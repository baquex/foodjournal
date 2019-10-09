module.exports = function(app, jwt,database,mysql){

//START TOKEN VALIDATOR=======================================================================
  function verifyToken(req, res, next) {
    // check header or url parameters or post parameters for token
    const token = req.headers['x-access-token'];
    
    // decode token
    if (token) {
      // verifies token, secret and checks expiration, if good, do stuff with decoded payload
      jwt.verify(token, 'superSecret', function(err, decoded) {			
        if (err) {
          if(token == 'REQUESTGUESTUSER'){
            next();
          } else {
            return res.json({ success: false, message: 'Failed to authenticate token.' });		
          }
        
        } else {
          req.decoded = decoded;	
          next();
        }
      });
    } else {
      // if there is no token return an error
      return res.status(403).send({ 
        success: false, 
        message: 'No token provided.'
      }) 
    }
  };
 //END TOKEN VALIDATOR=======================================================================

  // This route uses verifyToken() as a middleware, without it the route is not 'secure'
  app.get('/',verifyToken, function (req, res){
    res.send({
      message: 'my msge'
    });
  });

  //Auth test, gets all users from users table, no token validation
  app.get('/authTest', function(req, res){
    const connection = mysql.createConnection({...database});  
  
    connection.query('select * from users', function(err, resp){
      if (err) throw err;
      else {
        res.send({
          resp
        });
      }
    });

    connection.end();    
  });


  // 404 -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.send('ERROR NO TIENES ACCESO'); 
	});

};
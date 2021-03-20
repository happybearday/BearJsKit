import app from './Server';
// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
   //logger.info('Express server started on port: ' + port);
   console.log('Express server started on port: http://localhost:' + port);
});
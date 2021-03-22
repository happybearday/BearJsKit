import app from "./Server";
import { APP_PORT } from "./helpers/params";
// Start the server
const port = Number(APP_PORT || 3000);
app.listen(port, () => {
  //logger.info('Express server started on port: ' + port);
  console.log("Express server started on port: http://localhost:" + port);
});

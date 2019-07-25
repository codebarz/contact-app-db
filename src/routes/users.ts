import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  res.send('respond with a resource');
});

export default router;

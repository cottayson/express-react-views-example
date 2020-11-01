import express from 'express';
const router = express.Router();

const staticProperties = { name: 'John' };

router.get('/', function (req, res) {
  res.render('index',
    Object.assign(
      staticProperties,
      {
        info: `, your random key is: ${Math.random()}`,
      }
  ));
});

export default router;
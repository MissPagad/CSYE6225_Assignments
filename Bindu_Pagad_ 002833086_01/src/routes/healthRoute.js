import express from 'express';
import { healthCheck } from '../controllers/healthController.js';

const router = express.Router();

router.all('/healthz', (req, res) => {
  console.log('In all method');
  
  // If not a GET method, 405 error code
  if (req.method !== 'GET') {
    console.log('In get method');
    return res.status(405).send();
  }
  
  // Return only for GET method
  healthCheck(req, res);
});
router.use((req, res) => {
  res.status(404).send();
});

export default router;


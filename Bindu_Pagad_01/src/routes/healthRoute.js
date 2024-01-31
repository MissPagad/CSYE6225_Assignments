import express from 'express';
import { healthCheck } from '../controllers/healthController.js';

const router = express.Router();

router.all('/healthz', (req, res) => {
  console.log('In all method');
  try {
  // If not a GET method, 405 error code
  if (req.method !== 'GET') {
    console.log('In get method');
    return res.status(405).json();
  }
  
  // Return only for GET method
  healthCheck(req, res);
} catch (error) {
  console.error('HealthCheck error');
  res.status(500).json();
}
});

router.use((req, res) => {
  res.status(404).json();
});

export default router;


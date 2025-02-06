// sanityClient.ts
import { createClient } from '@sanity/client';
// import dotenv from "dotenv"

// dotenv.config()
export const client = createClient({
  projectId: 'vqqtwreq', // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2025-02-06',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token:"skOcvRmPa6qBuh2xjXtGotUkDboLrH5axrYTmicnprYwdy6qBbocx7Crc0uypJSvPbB27dzkgXMPVDGiND1fbbihWWObK5pc6QN0FXgKPlzWlFu5EIM5ybHkYe1LibJuG6mXIm091Ijo2q6t1bfgpfAhqEfPuuRe9VE7zeyjZhv1O8p0aX2N",
});
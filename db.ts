import { neonConfig } from '@neondatabase/serverless';

// if (process.env.VERCEL_ENV === 'development') {
//   neonConfig.wsProxy = (host) => `${host}:54330/v1`;
//   neonConfig.useSecureWebSocket = false;
//   neonConfig.pipelineTLS = false;
//   neonConfig.pipelineConnect = false;
// }
//neonConfig.wsProxy = (host) => `${host}:54330/v1`;
neonConfig.wsProxy = (host, port) =>
  `my-wsproxy.example.com/v1?address=${host}:${port}`;
neonConfig.useSecureWebSocket = false;
neonConfig.forceDisablePgSSL = false;
neonConfig.pipelineTLS = false;
neonConfig.pipelineConnect = false;

export * from '@vercel/postgres';

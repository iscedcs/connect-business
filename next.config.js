/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
     dest: "public",
     disable:
          process.env.NODE_ENV === "development"
     // disable is help to disable PWA in deployment mode
});


// const nextConfig = {
//      images: {
//           remotePatterns: [
//                {
//                     protocol: 'https',
//                     hostname: '**',
//                     port: '',
//                     pathname: '/**'
//                }
//           ]
//      }
// }

module.exports = withPWA({
     swcMinify: true,
     reactStrictMode: true,
     typescript: {
          ignoreBuildErrors: false,
     },
     eslint: {
          ignoreDuringBuilds: true,
     },
     images: {
          remotePatterns: [
               {
                    protocol: 'https',
                    hostname: '**',
                    port: '',
                    pathname: '/**'
               }
          ]
     }
     // write additional configuration here.
});

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      
        formats:['image/webp']
      },
      images:{
        domains:["lh3.googleusercontent.com","firebasestorage.googleapis.com"]
      }
}

module.exports = nextConfig

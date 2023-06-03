/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ['d205bpvrqc9yn1.cloudfront.net', 'firebasestorage.googleapis.com']
  },
  env:{
    tmdbApiKey: ['b976c85658ffab05600e4ade8e894259'],    
    apiUrl: 'https://api.themoviedb.org/3',
    image_base_url: 'https://image.tmdb.org/t/p'
  }
  
}

module.exports = nextConfig




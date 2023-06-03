/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ['d205bpvrqc9yn1.cloudfront.net', 'firebasestorage.googleapis.com']
  },
  env:{
    tmdbApiKey: ['74ff21f793mshfb4a5f778d00548p1ea89bjsn1b638d79e405'],    
    apiUrl: 'https://api.themoviedb.org/3',
    image_base_url: 'https://image.tmdb.org/t/p'
  }
  
}

module.exports = nextConfig




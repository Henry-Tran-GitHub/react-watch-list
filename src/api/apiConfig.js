const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '1cc28d7cb8202fa7566afa90c4a8b9f4',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

const api_WatchList_Config = {
    baseUrl: 'http://localhost:8079/api/',
}

export {apiConfig , api_WatchList_Config};
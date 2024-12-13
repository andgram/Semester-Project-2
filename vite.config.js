export default {
  root: './',
  build: {
    outDir: 'dist',
    target: 'es2022',
    rollupOptions: {
      input: {
        main: './index.html',
        auctionList: './auction/list/index.html',
        auctionDetails: './auction/details/index.html',
        profile: './profile/index.html',
        createAuction: './auction/create/index.html',
        login: './auth/login/index.html',
        register: './auth/register/index.html',
      },
    },
  },
  server: {
    historyApiFallback: true,
    open: true,
  },
};

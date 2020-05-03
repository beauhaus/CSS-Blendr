module.exports = {
  siteMetadata: {
    title: "CSS Blendr",
    description: "A Web Appliance for learning css mix-blend-modes"
  },
    plugins: [
      'gatsby-plugin-sass',
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-plugin-layout',
        options: {
          component: require.resolve('./src/components/layout.js'),
        },
      },
    ],
  };
  
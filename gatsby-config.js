module.exports = {
  siteMetadata: {
    title: 'MyData Scotland',
    author: 'Will Abramson',
    description: 'A Scottish community of the data conscious individuals, part of the MyData Global organisation and movement.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'MyData Scotland Hub',
        short_name: 'MyData Scotland',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/mydata/mydata-logothumb.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'YOUR MAILCHIMP FORM ENDPOINT', // add your MC list endpoint here; see instructions below
      },
    }

  ],
}

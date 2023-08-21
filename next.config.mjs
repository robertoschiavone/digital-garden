/** @type {import("next").NextConfig} */

const config = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  headers: async () => [
    {
      source: "/(.*?)",
      headers: [
        {
          // This prevents your site from being embedded on other websites.
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          // Don't let the browser guess what type of content you are linking.
          // This requires that you properly label the content type in linked
          // content.
          key: "X-Content-Type-Options",
          value: "nosniff"
        },
        {
          // Control what information is passed along when a visitor clicks on
          // links in your site. The value same-origin means that, if a visitor
          // to your webpage navigates clicks on a URL that is not on your site,
          // no information is passed along.
          key: "Referrer-Policy",
          value: "same-origin"
        }
      ]
    }
  ]
}
export default config

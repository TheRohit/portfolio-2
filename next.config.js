/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/wassup/:match*",
        destination: "https://portfolio.rohitm.dev/_vercel/insights/:match*",
      },
    ];
  },
};

module.exports = nextConfig;

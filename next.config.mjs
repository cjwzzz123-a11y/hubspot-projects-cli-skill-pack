/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/hubspot-cli-v8-node-20-ci-checklist",
        destination: "/hubspot-cli-node-ci-preflight",
        permanent: true,
      },
      {
        source: "/hubspot-projects-cli-faq",
        destination: "/answers",
        permanent: true,
      },
      {
        source: "/download-kit",
        destination: "/gumroad",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

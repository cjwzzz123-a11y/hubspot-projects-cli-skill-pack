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
    ];
  },
};

export default nextConfig;

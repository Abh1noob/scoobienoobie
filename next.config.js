/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip environment validation.
 * This is especially useful for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["via.placeholder.com"],
  },

  async redirects() {
    return [
      {
        source: "/services",
        destination: "/services/upcoming",
        permanent: false,
      },
      {
        source: "/:path*/inspection",
        destination: "/:path*/inspection/tires",
        permanent: false,
      },
    ];
  },
};

export default config;

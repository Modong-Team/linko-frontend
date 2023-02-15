/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/landing',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;

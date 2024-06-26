/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        serverActions: true,
    },
    images: {
        domains: ['assets.st-note.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'xedelvngwdwaijrohoks.supabase.co',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/zenn/image/upload/**',
            },
            {
                protocol: 'https',
                hostname: 'zenn.dev',
                port:"",
            },
            {
                protocol: 'https',
                hostname: 'assets.st-note.com',
                port:"",
            },
            {
                protocol: 'https',
                hostname: 'skillicons.dev',
                port:"",
            },
        ],
        dangerouslyAllowSVG: true,
    },
    // issue https://github.com/vercel/next.js/discussions/49432
    webpack: config => {
        /* On `node-fetch` v2, that `supabase-js` uses,
        `encoding` package was optionally required for `.textConverted`
        which means it wasn't in `node-fetch` deps.
        See: https://github.com/node-fetch/node-fetch/issues/412.
        Since `encoding` is not part of the deps by default, when using with webpack,
        it will raise a warning message.
        This can be ignored as it doesn't prevent anything to work well. */
        config.ignoreWarnings = [
            { module: /node_modules\/node-fetch\/lib\/index\.js/ },
            { file: /node_modules\/node-fetch\/lib\/index\.js/ },
        ];
        return config;
    }
}

module.exports = nextConfig

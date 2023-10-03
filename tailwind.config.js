/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "nkt-blue": "#0075ff",
                "nkt-second": "#75b6ff",
            },
        },
        fontFamily: {
            notosans: ["Noto Sans JP", "sans-serif"],
        },
    },
    plugins: [],
};

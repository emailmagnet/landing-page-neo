/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['"Wix Madefor Display"', "sans-serif"],
            },
            colors: {
                emGreen: "#96bf48",
                emBlue: "#479ccf",
                emDark: "#2d3538",
                emLight: "#f5f5f5",
                emSoft: "#f2f7fa",
                emTextSecondary: "#666666",
            },
        },
    },
    plugins: [],
}

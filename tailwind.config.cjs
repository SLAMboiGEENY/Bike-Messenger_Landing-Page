/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js,jsx,ts,tsx"],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'purple': '#3f3cbb',
                'midnight': '#121063',
                'metal': '#565584',
                'tahiti': '#3ab7bf',
                'silver': '#ecebff',
                'bubble-gum': '#ff77e9',
                'bermuda': '#78dcca',
            },
            fontFamily: {
                sans: ["Sofia Sans", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                "custom-img": "url('/nycalt.jpg')",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"),
            require("flowbite/plugin"),
            require("@tailwindcss/typography"),
        ],
};

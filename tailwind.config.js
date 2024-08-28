/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        //add screen size
        // sm - small screen
        // md - medium screen
        // lg - large screen
        // xl - extra large screen
        sm: "480px",
        md: "786px",
        lg: "976px",
        xl: "1440px",
        extend: {
            colors: {
                lightBlue: "#6F6AF7",
                lightPurple: "#E5D8FF",
                lighterBlue: "#929DFF",
                lightIndigo: "#734CF2",
                violet: "#D288FF",
                black: "#000000",
                blue: "#483EFF",
                paleBlue: "rgba(188, 224, 246, 1)",
                white: "#FFFFFF",
                whiteGlow: "#FFFAE4 ",
                lightViolet: "rgba(229, 216, 255, 1)",
            },
        }
    },
    plugins: [],
}
/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
    plugins: [require("@tailwindcss/typography")],
    theme: {
        colors: {
            bg: "#151515", /* Chinese Black */
            fg: "#DDDDDD", /* Gainsboro */
            gray: "#CCCCCC", /* Chinese Silver */
            red: "#FA5E4F" /* Dark Candy Apple Red */
        }
    }
}

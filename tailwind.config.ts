import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-100': '#F1F1F1', // Defining the custom color
        'custom-yellow': '#E9AF0A',
      },
      borderColor: {
        'grey-100': 'var(--grey-100, #F1F1F1)', // Adding the custom border color using CSS variable
      },
      boxShadow: {
        'custom-black': '0px 9px 40px 0px #0000001B',
        'custom-white': '0px 4px 4px 0px #00000040',
        'shadow-lg': '0px 40px 72px -12px  #10192824',
     
      },

      backgroundImage: {
        'hero-left': "url('data:image/svg+xml;utf8,<svg width=\"1440\" height=\"960\" viewBox=\"0 0 1440 960\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g filter=\"url(%23filter0_f_40_22459)\"><ellipse cx=\"228.487\" cy=\"467.093\" rx=\"526.841\" ry=\"590.606\" transform=\"rotate(19.4448 228.487 467.093)\" fill=\"%23C1BDE9\"/></g><defs><filter id=\"filter0_f_40_22459\" x=\"-1205.94\" y=\"-1016.95\" width=\"2868.85\" height=\"2968.08\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/><feGaussianBlur stdDeviation=\"450\" result=\"effect1_foregroundBlur_40_22459\"/></filter></defs></svg>')",
        'hero-right': "url('data:image/svg+xml;utf8,<svg width=\"1440\" height=\"960\" viewBox=\"0 0 1440 960\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g filter=\"url(%23filter0_f_40_22461)\"><ellipse cx=\"1403.4\" cy=\"530.304\" rx=\"526.841\" ry=\"590.606\" transform=\"rotate(19.4448 1403.4 530.304)\" fill=\"%23E9AF0A\"/></g><defs><filter id=\"filter0_f_40_22461\" x=\"-2131.02\" y=\"-3053.74\" width=\"7068.85\" height=\"7168.08\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/><feGaussianBlur stdDeviation=\"1500\" result=\"effect1_foregroundBlur_40_22461\"/></filter></defs></svg>')",
      },
    },
  },
  plugins: [],
};
export default config;

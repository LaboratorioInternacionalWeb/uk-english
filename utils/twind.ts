import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
};
if (IS_BROWSER) setup({
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        'proxima-nova': '"Proxima Nova"',
      },
    },
  },
  preflight: {
    // Import external stylesheet
    '@import': `url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap')`,
    // Declare font face
    '@font-face': [
      {
        fontFamily: 'Proxima Nova',
        fontWeight: '400',
        src: 'url(/fonts/proxima-nova/400-regular.woff) format("woff")',
      },
      {
        fontFamily: 'Proxima Nova',
        fontWeight: '500',
        src: 'url(/fonts/proxima-nova/500-medium.woff) format("woff")',
      },
    ],
  },
});

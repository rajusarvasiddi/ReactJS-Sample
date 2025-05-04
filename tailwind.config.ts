// import type { Config } from 'tailwindcss';
// import withMT from '@material-tailwind/react/utils/withMT';

// export default withMT({
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// } as Config);

    /** @type {import('tailwindcss').Config} */
    const withMT = require("@material-tailwind/react/utils/withMT");
    module.exports = withMT({
      content: ["./src/**/*.{js,jsx,ts,tsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
      theme: {
        extend: {},
      },
      plugins: [
        require('flowbite/plugin')
      ],
    });
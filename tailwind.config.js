module.exports = {
  content: [
    './**.html',
    './*/**{.html,tsx,ts}',
    './src/components/**{.tsx,jsx,ts,js}'
  ],
  theme: {
    extend: {
      screens: {
        xlg : '1600px',        
      },
      colors: {
      blurple : '#404eed',
      bright : '#fff',
      dark : '#23272a',
      offWhite : '#f6f6f6',
    },},
  },
  plugins: [],
}

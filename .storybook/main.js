module.exports = {
  stories: ["../src/**/*.stories.(ts|tsx|js|jsx|mdx)", "../stories/*.stories.(ts|tsx|js|jsx|mdx)"],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ],
};
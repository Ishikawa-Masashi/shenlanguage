/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  gettingStartedSidebar: [
    { type: "autogenerated", dirName: "./content/getting-started" },
  ],
  docsSidebar: [
    { type: "category", label: "Components", items: ["components/index"] },
    { type: "autogenerated", dirName: "./content/docs/hooks" },
    {
      type: "autogenerated",
      dirName: "./content/styled-system",
    },
  ],
  communitySidebar: [
    {
      type: "autogenerated",
      dirName: "./content/community",
    },
  ],
};

module.exports = sidebars;

module.exports = {
  //... existing
  parserOptions: {
    sourceType: "module",
  },
  parser: "babel-eslint",
  plugins: ["import"],
  rules: {
    // this is for sorting WITHIN an import
    "sort-imports": [
      "error",
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    // this is for sorting imports
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          "internal",
          ["sibling", "parent"],
          "index",
        ],
        pathGroups: [
          {
            pattern: "@(react|react-native)",
            group: "external",
            position: "before",
          },
          {
            pattern: "@src/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal", "react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};

// {
//   "parser": "babel-eslint",
//   "parserOptions": {
//     "sourceType": "module"
// },
//   "extends": [],
//   "plugins": ["simple-import-sort"],
//   "rules": {
//     "simple-import-sort/imports": "error",
//     "simple-import-sort/exports": "error"
//   },
//   "overrides": [
//     {
//       "files": ["**/*.js","**/*.ts", "**/*.jsx"],
//       "rules": {
//         "simple-import-sort/imports": [
//           "error",
//           {
//             "groups": [
//               // `react` first, `next` second, then packages starting with a character
//               ["^react$", "^next", "^[a-z]"],
//               // Packages starting with `@`
//               ["^@"],
//               // Packages starting with `~`
//               ["^~"],
//               // Imports starting with `../`
//               ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
//               // Imports starting with `./`
//               ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
//               // Style imports
//               ["^.+\\.s?css$"],
//               // Side effect imports
//               ["^\\u0000"]
//             ]
//           }
//         ]
//       }
//     }
//   ]
// }

// {
//   "import/order": [
//     "error",
//     {
//       "groups": ["builtin", "external", "internal"],
//       "pathGroups": [
//         {
//           "pattern": "react",
//           "group": "external",
//           "position": "before"
//         }
//       ],
//       "pathGroupsExcludedImportTypes": ["react"],
//       "newlines-between": "always",
//       "alphabetize": {
//         "order": "asc",
//         "caseInsensitive": true
//       }
//     }
//   ],
// }

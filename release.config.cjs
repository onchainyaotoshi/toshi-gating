module.exports = {
  "branches": [
    "main",
    {
      "name": "alpha",
      "prerelease": true
    },
    {
      "name": "beta",
      "prerelease": true
    }
  ],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",[
    "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md",
        "changelogTitle": "# Semantic Versioning Changelog"
      }
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        "assets": [
          [
            "package.json", 
            "README.md",
            "LICENSE",
            "CHANGELOG.md",
            "dist/**/*"
          ]
        ],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/github"
  ]
}
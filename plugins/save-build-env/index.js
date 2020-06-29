const fs = require('fs');

module.exports = {
  onPreBuild: ({ constants }) => {
    const path = `functions/env.json`;
    const keys = Object.keys(process.env);
    fs.writeFileSync(path, JSON.stringify(process.env));
    console.log(`Wrote ${keys.length} envs to ${path}`);
  },
}

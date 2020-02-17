const directConnect = true;
const specs = ["spec/*.spec.js"];
const framework = "mocha";
const mochaOpts = {
  reporter: "dot",
  slow: 3000
};

const onPrepare = () => {
  /* eslint-disable-next-line global-require */
  require("esm");
};

const headed = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome"
  },
  framework,
  mochaOpts,
  onPrepare
};

const headless = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--no-sandbox", "--disable-gpu"]
    }
  },
  framework,
  mochaOpts,
  onPrepare
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;

const axios = require("axios");
const core = require("@actions/core");
const exec = require("@actions/exec");
const github = require("@actions/github");

async function run() {
  const github_token = core.getInput("github_token", { required: true });

  const workflowRef = core.getInput("workflowRef", { required: true });
  const workflowName = core.getInput("workflowName", { required: true });
  const workflowPath = core.getInput("workflowPath", { required: true });

  const wf = `https://api.github.com/repos/${workflowPath}/actions/workflows/${workflowName}/dispatches`;
  const payload = { "ref": workflowRef, "input": { "message": "" } };
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${github_token}`,
    "Accept": "application/vnd.github.v3+json",
  };

  try {
    await axios.post(wf, payload, { headers });
  } catch (error) {
    console.error(error.message);
  }
}

run();


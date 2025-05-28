# Vanilla Wtf Dispatcher

Simple Workflow Dispatcher to invoke a workflow_dispatch withing the project

- github_token: **provide the pat or token for further request ex. {{ secrets.GITHUB_TOKEN }}**
- workflowRef: **provide workflow branch ref ex. "main" or {{ github.ref_name }}**
- workflowName: **provide workflow file name ex. ci.yml**
- workflowPath: **provide the repository path ex. username/repository**

```yml
- name: Workflow Dispatcher
  uses: gh-actions-projects/vanilla-wtf-dispatcher@0.0.1
  with:
    github_token: "${{ secrets.GITHUB_TOKEN }}"
    workflowRef: "${{ github.ref_name }}"
    workflowName: "ci.yml"
    workflowPath: "username/nodejs-express-api-app"
```

### Href

> `https://api.github.com/repos/${workflowPath}/actions/workflows/${workflowName}/dispatches`
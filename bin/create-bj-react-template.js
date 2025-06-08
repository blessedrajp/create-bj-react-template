#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectName = process.argv[2];
if (!projectName) {
  console.error("❌ Please provide a project name.");
  process.exit(1);
}

const targetPath = path.join(process.cwd(), projectName);
const templatePath = path.join(__dirname, "../template");

fs.cpSync(templatePath, targetPath, { recursive: true });

console.log(`✅ Project "${projectName}" created successfully!`);

execSync(`cd ${projectName} && npm install`, { stdio: "inherit" });

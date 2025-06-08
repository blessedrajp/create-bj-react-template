# Create BJ React Template CLI
A custom CLI tool to generate React projects with pre-configured Redux Toolkit and Material UI (MUI).

# 📦 Features
Redux Toolkit (v2.8.2) pre-installed

Material UI (MUI) (v7.1.0) for UI components

React-Redux (v9.2.0) integration

Quick project scaffolding

# 🚀 Installation
Globally Install the CLI
```bash
npm install -g create-bj-react-template 
```
Create a New Project
```bash
create-bj-react-template my-react-app 
```
This will generate a new React project with:

Redux Toolkit setup

MUI configured

Basic folder structure

# 🔧 Usage
1. Run the CLI
bash
create-bj-react-template <project-name>
Example:

bash
create-bj-react-template my-app
2. Navigate to the Project
bash
cd my-app
3. Install Dependencies
(Optional: If not auto-installed)

bash
npm install
4. Start the Development Server
```bash
npm start
```
📂 Generated Project Structure
text
my-app/
├── src/
│   ├── store/         # Redux Toolkit store
│   ├── components/    # MUI-based components
│   ├── features/      # Redux slices
│   └── App.js         # Main entry with MUI theme
├── package.json       # Pre-configured with Redux + MUI
└── ...                # Standard React files
🔌 Included Dependencies
Package	Version	Purpose
@mui/material	^7.1.0	Material UI components
@reduxjs/toolkit	^2.8.2	Redux state management
react-redux	^9.2.0	React bindings for Redux
# 🛠 Development
Modify the Template
Clone the CLI repo:

```bash
git clone 
```
Edit the template files in templates/.

Republish:

bash
npm version patch && npm publish
# 📜 License
MIT © Blessed Raj P

# ❓ Support
For issues, open a ticket in the GitHub repo.

# ✨ Happy Coding!
Run create-bj-react-template --help for CLI options.
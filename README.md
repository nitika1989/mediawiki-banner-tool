**Title: 🟢 MediaWiki Banner Creation Tool**

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


**📝 1. Project Overview**

# MediaWiki Banner Creation Tool

This project is part of my Outreachy contribution to build a dynamic **MediaWiki Frontend Web Application**.

### 🎯 Objectives:
1. Set up the infrastructure for a Frontend Web Application using React.
2. Implement dynamic banner customization using JavaScript.
3. Use Git for version control and push code to a public GitHub repository.
4. Enable users to modify banner properties without reloading the page.



### 🛠️ Tools Used:
- **Frontend Framework**: React (via Create React App)
- **Version Control**: Git & GitHub
- **Testing Framework**: Jest (for unit testing)
- **Development Environment**: VS Code
- **PAWS Notebook**: For documenting my progress



# Step 1: Set up a React project
npx create-react-app banner-tool

# Step 2: Navigate to project directory
cd banner-tool

# Step 3: Initialize Git and link to GitHub
git init
git remote add origin https://github.com/yourusername/banner-tool.git

# Step 4: Start the development server
npm start


## 📈 Progress So Far:
- [x] Set up React infrastructure with `create-react-app`.
- [x] Initialized Git and linked to GitHub repository.
- [x] Implemented a dynamic banner component.
- [x] Created a form to customize the banner text and color.
- [ ] Add unit tests for the banner component.


 ** Key Features Implemented**
Dynamic Banner Customization

Users can change:
Background color of the banner.
Banner text in real time.
Image displayed on the banner.
Changes are reflected instantly without reloading the page.
Responsive Design

A full-width banner adapts seamlessly to any screen size, ensuring an optimal display on desktops, tablets, and mobile devices.
Interactive Form

Users interact with an intuitive form to adjust banner properties:
Text input to change the message.
Color picker for the background.
Image URL input to swap banner visuals.
Modern Tech Stack

Built using React for efficient UI rendering and state management.
Supports unit testing with Jest and React Testing Library to ensure code quality.




## 🚧 Challenges Faced:
1. **Error: Cannot push to GitHub (non-fast-forward error)**  
   ✅ Solution: Used `git pull origin main --rebase` to sync with the remote branch.

2. **Script Execution Disabled**  
   ✅ Solution: Enabled script execution by running:
   
   Notebook Link
https://hub-paws.wmcloud.org/user/Nitika%20Vasishtha/lab/tree/MediaWiki.ipynb
  

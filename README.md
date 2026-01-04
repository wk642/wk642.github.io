# Winnie Kelley's Portfolio 
**Software Engineer | A11y & Game Dev Enthusiast | Aspiring Technical Program Manager**

>**Status: 🚧 Portfolio Actively Under Construction 🚧**
Feel free to checkout my progress and follow along
---

## 🎯 Mission
Hi, I'm Winnie! I’m currently a **Software Engineer at Sony**. I built this portfolio because I didn't just want a "digital resume." I wanted to build a system that reflects my technical skills while adding my creativity and unique perspective.

To me, **Accessibility (A11y)** isn't a boring checklist; it’s about making sure *everyone* can join the party.

---

## 🧠 My Thought Process
1. From Code to Creativity
I believe that how an engineer organizes their "backstage" code is just as creative as the design on the "front stage." By keeping things modular, I’m building for a future where I can "snap in" a custom Game Engine or a TPM Roadmap without breaking the core experience.

2. The A11y Framework (Technical Standard)
Accessibility is my foundation for better code. I built a custom A11y Framework that handles global state for fluid scaling. This allows the entire website to resize proportionally—ensuring the site remains perfectly organized and professional-looking for every user, regardless of their visual needs.

3. Cognitive Load Reduction I prioritize reducing 'mental processing power'—the noise a user has to filter to find what they need. I’ve translated this into my engineering by building interfaces that are so clear they speak for themselves.

> The Lexend Choice: I chose the Lexend font because it was specifically designed to help people read faster. I’m aware of the challenges faced by users with dyslexia, and Lexend’s unique spacing makes it easier for the brain to recognize letters.

> Visual Quiet: I use generous spacing and a "less-is-more" approach to create a calm digital environment. This reduces distractions and naturally prepares the site for a mobile-friendly experience, where clarity is essential.

## 🏗️ Project Architecture
I’ve architected this project using a Modular Design powered by the Single Responsibility Principle (SRP).

Modular Architecture: The site is built like a set of LEGO blocks. The A11y Framework is an independent system, allowing me to update the visual design or the accessibility logic separately without things breaking.

Below is the current archietecture (will update before new features are added)
```text
src/
├── assets/  #images, icons, pdf resume
├── data/    #text & content storage
│   ├── resumeData.ts         
│   └── aboutContent.ts       
├── components/      #Reusable components
│   ├── layout/        #Resuable Wrappers
│   ├── a11y/             #A11y framework
│   │   ├── A11yMenu.tsx    #UI Dashboard
│   │   ├── A11yContext.tsx #Global State
│   │   ├── FontScalar.tsx     #Font size
│   │   ├── ThemeToggle.tsx   #Light/Dark
│   │   ├── ColorFilter.tsx    #Contrasts
│   │   └── LexendSwitch.tsx   #Cognitive
│   ├── roadmap/    #TPM Progress Tracker
│   └── game/           #Work in progress
├── hooks/                  #gets content 
│   ├── use-a11y.ts    #for a11y features
│   └── useContent.ts         #for resume
├── pages/             
│   ├── Home.tsx            
│   ├── About.tsx            
│   ├── Resume.tsx            
│   └── RoadmapPage.tsx       
├── App.tsx             
└── index.css           
```
___
## 🗺️ The Roadmap (Work In Progress)
I treat my portfolio like a living product. This roadmap tracks my progress as I ship new features using an MVP approach.

### 🛠️ Phase 1: The Setup
> Goal: Setting up the project and tools

[x] Initialize Project: Create a new React app with Vite and TypeScript.

[ ] Install Styling: Setup Tailwind 

[ ]Create folders for assets, data, components/a11y, etc.

[ ] Setup Routing: Install react-router-dom / navigation

### 🚀 Phase 2: Content & Tracker
> Goal: Goal: Launch the MVP (About, Resume, and Live Tracker)

[ ] The Roadmap: Build RoadmapPage.tsx to display this checklist live.

[ ] The About Page

[ ] The Resume Page

[ ] Create use-content.ts

### 🧠 Phase 3: The Logic
> Goal: The "Brain"—build the logic that drives the A11y Framework.

[ ] Create the Data Source: Populate data/resumeData.ts with your raw facts.

[ ] Build the A11y Hub (A11yContext.tsx):

[ ] State for fontSize.

[ ] State for Lexend font.

[ ] State for light / dark theme.

[ ] Create use-a11y.ts to update user choices.

### 🎨 Phase 4: The Framework 
> Create the a11y Framework

[ ] Typography Implementation: Set up Lexend font-switching logic.

[ ] Fluid Scaling: Ensure the entire site layout reacts to font-size changes.

[ ] Build the A11yMenu.tsx: 
  - [ ] Create the Font Size slider.
  - [ ] Create the Lexend toggle.
  - [ ] Create the Color Filter dropdown.

### 🕹️ Phase 5: The Game & Launch
> Goal: Create the game part of this portfolio

[ ] Create a basic HTML5 Canvas in components/game/Engine.tsx.

[ ] Ensure game colors/assets respond to the A11y Framework settings.

[ ] Lighthouse Audit
___
## 🛠️ Tech Stack
Framework: React + TypeScript 

Styling: Tailwind CSS + A11y 
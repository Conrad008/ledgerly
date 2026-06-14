## ledgerly | Expense traker

Ledgerly is a modern, lightweight daily expense tracking web application. Designed with a clean Tailwind UI 
layout and robust architectural state management, it allows users to log financial items, 
view calculated balances in Kenyan Shillings (KSH), and selectively filter histories
based on context-specific category tags.

## project overview

Ledgerly is a lightweight, responsive personal finance tracking web application 
designed to help users take control of their daily spending habits. 
The application features a clean, modern user interface built with HTML5 and 
Tailwind CSS, backed by an object-oriented JavaScript engine and a fully automated Jest testing suite

## features

* **KSH Localization:** All calculations, balance tracking, and history logs in Kenyan Shillings.
* **Persistent Storage:** Harnesses browser `localStorage` matrices to preserve expense histories across sessions and hard updates.
* **Semantic Filtering:** Sort through log feeds by categories such as Food & Dining, Transport, Entertainment, Utilities, Education, and more.
* **Robust Core Logic:** Built with object-oriented JavaScript classes supporting array transformations and mathematical reductions.
* **Test-Driven Architecture:** Backed by an automated unit testing suite utilizing Jest and isolated browser DOM environments.

## project structure
```

ledgerly/
├── node_modules/       
├── index.html            # main HTML layout structure
├── style.css             # Tailwind or custom CSS stylesheets
├── script.js             # Combined application file (Classes + UI logic)
├── script.test.js        # Your Jest unit testing suite
├── package.json          # Node config
├── package-lock.json     # Lockfile generated automatically by npm
├── LICENSE               # project certification
└── README.md             # Project documentation 

```

## tech stack
**HTML5**
**JavaScript (ES6+)**
**Tailwind CSS (via CDN)**
**custom css**
**Node.js**
**Jest**
**JSDOM**
**git**
**vercel**

## getting started

**Prerequisites**
Any modern web browser (Chrome, Firefox, Safari, or Edge).

Installation
1. **Clone the repository:**
   
```bash
   git clone https://github.com/Conrad008/ledgerly.git
   cd ledgerly
```

2. **Open the project:**
Simply open the index.html file in your preferred browser to view the current build.


## Collaboration & Contribution

We welcome contributions from the community and the team to help make ledgerly the blueprint for mordern expense trackers
## How to Contribute

1. **Fork the Repository:** Create your own copy of the project to work on.

2. **Create a Feature Branch:**

```bash
git checkout -b feature/AmazingFeature

```
3. **Commit Your Changes:**

```bash
    git commit -m 'Add some AmazingFeature'
```

4.  **Push to the Branch:**
```bash
    git push origin feature/AmazingFeature
```

5.  **Open a Pull Request:** Describe your changes and submit for review.

**Coding Standards**
*   Ensure all HTML is semantic and well-commented.
*   Maintain the **zinc & white ** color palette for all UI additions.
*   Test responsiveness across multiple screen sizes before submitting.


## author
**conrad kipngeno**

## license

This project is licensed under the MIT license.
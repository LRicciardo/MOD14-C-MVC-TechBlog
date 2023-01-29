# MOD14-C-MVC-TechBlog
CMS-style blog site where developers can publish their blog posts and comment on other developer's posts

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Creates the CRUD processes for and Internet retail produce database management application

## Table of Contents
  
- [User Story](#userstory)
- [Acceptance Criteria](#acceptance-criteria)
- [Visual Documentation](#visual-documentation)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Feature](#features)
- [How to Contribute](#contribute)
- [How to Test](#test)
- [Contact Info](#contact)

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```


## Visual Documentation

The following video shows the application being used from Insomnia app:

DEMO video 1: The GET functions for Category, Product, and Tag tables.

[![A DEMO video 1: The GET functions for Category, Product, and Tag tables.](./assets/images/13-orm-homework-demo-01-sm.gif)](https://drive.google.com/file/d/1-ChrH9NOEWzQyPIfhW-zl0HFe7Zm80KC/view?usp=share_link)

***

A DEMO video 2: The GET by Id functions for Category, Product, and Tag tables.

[![A DEMO video 2: The GET by Id functions for Category, Product, and Tag tables.](./assets/images/13-orm-homework-demo-01-sm.gif)](https://drive.google.com/file/d/1dmQe1YpSUbcl8dGH-m9CDf4-FJksNojM/view?usp=share_link)

***

A DEMO video 3: The POST, PUT and DELETE functions for Category, Product, and Tag tables.

[![A DEMO video 3: The POST, PUT and DELETE functions for Category, Product, and Tag tables.](./assets/images/13-orm-homework-demo-01-sm.gif)](https://drive.google.com/file/d/1BXKKZZqOBH0nvKGfsKHHius-8LXPyVN9/view?usp=share_link)


## Visual Database Schema

The following is a visual representation of the ecommerce_db database schema.

![database schema](./assets/images/MOD13-C-ORM-E-Commerce-Back-End-sm.png)

## Installation

Initialize npm to produce the package.json file.
Type npm install to install the following: MySQL2, sequelize, express, dotenv.
 
In the command line, type npm start.
USES Insomnia to perform CRUD tasks


## Usage
- JavaScript with Node.js - base coding language
- express - to create the routers/endpoints
- dotenv - to hide the environmental variables (password/database)
- MySQL2 package - as the database dialect
- sequelize - to interpret the SQL commands
- Insomnia app - to perform the CRUD functions to the database 

## Credits

I would like to thank Erik Hoversten for tutoring me though the async/await, constructor functions, Trey Eckels for teaching about modules and everything else, my family for putting up with this crazy.

## License

This application is using the The MIT License License. Click on the badge  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  to follow the link to the license.

---

## Features



## How to Contribute

This application follows the [Contributor Covenant](https://www.contributor-covenant.org/).

If you would like to contribute it, you can create an issue on GitHub repository at https://github.com/LRicciardo/MOD14-C-MVC-TechBlog. 

## Tests


  
## Contact Info

This application follows the [Contributor Covenant](https://www.contributor-covenant.org/).

If you would like to contact me about an issue, you can send an email to Liane.Ricciardo@gmail.com.

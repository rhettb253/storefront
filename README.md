# Online Store Application using Vite with Redux Toolkit

## Overview

This project is an online store application built using Vite for the front-end and Redux Toolkit for state management. It provides users with the ability to browse various product categories, view products within selected categories, and shop in an intuitive, user-friendly interface.

## User Stories

The application satisfies the following user/developer stories:

1. As a user, I expect to see a list of available product categories in the store so that I can easily browse products.

2. As a user, I want to choose a category and see a list of all available products matching that category.

3. As a user, I want a clean, easy-to-use user interface so that I can shop the online store with confidence.

## Redux Store Configuration

### Categories

- State contains a list of categories along with the active category.
- Each category comprises a normalized name, display name, and description.
- An action triggers a reducer to modify the active category.
- The reducer updates the active category upon dispatch of this action.

### Products

- State maintains a list of all products.
- Each product contains attributes such as category association, name, description, price, and inventory count.
- An action is triggered upon changing the active category.
- Multiple reducers can respond to the same action.
- A reducer filters the products list based on the active category.

### Active Category

- State stores the active category.
- Other components, such as product listings, reference this state to display products based on the selected category.

## Getting Started

### Installation

Clone the repository.

### Install dependencies:

npm install

### Running the Application

npm run dev

This command starts the development server and launches the application in your browser. You can view it at http://localhost:5173.

## Credits

- The banner image by Elaine Casap on unsplash.

- Red apple photo by Tobi on Unsplash
  
## License

This project is licensed under the MIT - see the LICENSE.md file for details.
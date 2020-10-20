# Store-Manager
Store Manager is an app that helps store owners manage sales and product inventory records. 
This application is for use by a store attendant and store owner.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Ensure you have `node` and `npm` installed.
Clone the repo and install all dependencies using `npm install`.
Checkout to  the `develop`  branch.
Go to the `package.json` file and change the start command to `ng serve`  
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Login credentials:
`email: vitalispaul48@live.com`
`password: manu2012`

This repo uses the Store Manager API as its backend

[Store Manager API](https://github.com/Paulstar200/Store-Manager-API-V2)

# Tests
End to End tests have been set up using Cypress.
To test, run `npx open cypress`

# Features
1. Store Owner can create a store attendant.
2. Store Owner can create a product.
3. Store Owner can delete a product.
4. Store Owner can modify a product.
5. Store attendant can make a sale.
6. Store Owner and attendant can get all products in stock.
7. Store Owner and store attendant can view all the sales records

# Using the application
1. Navigate to the site using the following url: https://storemanager-angular.herokuapp.com/
2. Login as the Admin using the following email and password.
`email: vitalispaul48@live.com`
`password: manu2012`
3. Post a product by going to the `Create product` link.
4. Modify or delete a product by navigating to the `Modify/Delete product` link.
5. View sales records by navigating to the `View sales records` link.
6. Create a new user with the role of `attendant` once you log in, by going to the `Sign Up Employee` link on the admin dashboard. Access the attendant dashboard by logging in as the newly created attendant.
7. Make a sale by navigating to the `sell` link on the navigation bar.

# Author
Paul Vitalis Onyango

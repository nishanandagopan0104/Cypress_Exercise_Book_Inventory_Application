import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import bookInventoryLoginPage from "../../pageObjects/bookInventoryLoginPage";
import bookInventoryHomePage from "../../pageObjects/bookInventoryHomePage";


const objBookLoginPage = new bookInventoryLoginPage();
const objBookHomePage  = new bookInventoryHomePage();

//before function to load the data files to test files
let data; //closure variable
before(() => {
  cy.fixture("bookInventoryTestData").then((fData) => {
    data = fData;
    cy.log("Data Loaded successfully");
  });
});


//This function navigates to Books Inventory Application
Given("I open the website for Books Inventory Application", () => {
    objBookLoginPage.openWebsiteBookInventoryApplication(data.url);
});

//This function verifies the title and login page is displayed
Then("I verify the login page is displayed", () => {
    objBookLoginPage.verifyTitleAndLoginPage();
});

//This function logins to the application
When("I enter the username as {} and password as {} and click on the Login button", (username,password) => {
    objBookLoginPage.loginToBookInventoryApplication(username,password);
});

//This function verifies the welcome page after login to application
Then("I verify the Welcome page with the welcome message, book list, add book button and Logout button", () => {
  objBookHomePage.verifyHomePageUIAfterLogin();
});

//This function add new book to list
When("I click on Add book and enter the title as {}, author as {}, genre as {}, ISBN as {}, publication date as {} and price as {} and click on Add Book button", (title,author,genre,isbn,publicationDate,price) => {
  objBookHomePage.addNewBookToList(title,author,genre,isbn,publicationDate,price);
});

//This function verifies the book is added to the Book list
Then("I verify the book {} is added to the Book list", (title) => {
 objBookHomePage.verifyNewBookAdded(title);
});

//This function edits the existing book details
When("I click on Edit button and update title as {}, author as {}, genre as {}, ISBN as {}, publication date as {} and price as {} and click on Save Changes button", (title,author,genre,isbn,publicationDate,price) => {
  objBookHomePage.editBookDetails(title,author,genre,isbn,publicationDate,price);
});

//This function verifies the updated book details
Then("I verify the book details are updated with title as {}, author as {}, genre as {}, ISBN as {}, publication date as {} and price as {}", (title,author,genre,isbn,publicationDate,price) => {
  objBookHomePage.verifyUpdatedBookDetails(title,author,genre,isbn,publicationDate,price);
});

//This function delete the newly added book
When("I click on Delete button against newly added book", () => {
  objBookHomePage.deleteBookFromList();
});

//This function verifies that the deleted book is not visible
Then("I verify the book with title as {} do not exist in book list", (title) => {
  objBookHomePage.verifyDeletedBookNotExist(title);
});

//This function click on logout button to logout from application
When("I click on Log Out button", () => {
  objBookHomePage.logOutFromBookInventoryApp();
});

//This function verify the error messages
Then("I verify the error heading as {} and message as {}", (heading,message) => {
  objBookHomePage.verifyErrorMessage(heading,message);
});

//This function click on Add book without entering fields
When("I click on Add book and click add book without entering any text fields", () => {
  objBookHomePage.AddBookWithoutData();
});

//This function enters the title that exceeds character length
When("I click on Add book and enter the title that exceeds character length as {}", (title) => {
  objBookHomePage.addBookWithTitleExceedsCharacterLength(title);
});

//This function verifies the inline errors
Then("I verify the inline error as {}", (error) => {
  objBookHomePage.verifyInlineErrors(error);
});

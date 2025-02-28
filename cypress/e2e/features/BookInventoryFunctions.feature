Feature: Login to the Books Inventory Application

Scenario Outline: Verify the authorized users are permitted to access the books catalog and make changes
Given I open the website for Books Inventory Application
Then I verify the login page is displayed
When I enter the username as <username> and password as <password> and click on the Login button
Then I verify the Welcome page with the welcome message, book list, add book button and Logout button
When I click on Add book and enter the title as The Alchemist, author as Paulo Coelho, genre as Fiction, ISBN as 9780694001111, publication date as 01/01/1988 and price as 10 and click on Add Book button
Then I verify the book The Alchemist is added to the Book list
When I click on Edit button and update title as The Alchemist New, author as Paulo Coelho New, genre as Fiction New, ISBN as 9780694001122, publication date as 01/01/1989 and price as 15 and click on Save Changes button
Then I verify the book details are updated with title as The Alchemist New, author as Paulo Coelho New, genre as Fiction New, ISBN as 9780694001122, publication date as 01/01/1989 and price as 15
When I click on Delete button against newly added book
Then I verify the book with title as The Alchemist New do not exist in book list
When I click on Log Out button
Then I verify the login page is displayed

Examples: 
    |username|password         |
    |admin1  | securePassword  |
    |admin2  | securePassword  |  
    |admin3  | securePassword  |
    |admin4  | securePassword  |
    |admin5  | securePassword  |
    |admin6  | securePassword  |
    |admin7  | securePassword  |
    |admin8  | securePassword  |
    |admin9  | securePassword  |
    |admin10 | securePassword  |

Scenario Outline: Verify only authorized users are permitted to login to the Books Inventory Application
Given I open the website for Books Inventory Application
Then I verify the login page is displayed
When I enter the username as <username> and password as <password> and click on the Login button
Then I verify the error heading as There is a problem with your submission and message as Invalid username or password. Please try again.
 
Examples: 
     |username|password |
     |user1   |Password1|
     |user2   |Password2|  

Scenario Outline: Verify the mandatory errors on adding a book
Given I open the website for Books Inventory Application
Then I verify the login page is displayed
When I enter the username as <username> and password as <password> and click on the Login button
Then I verify the Welcome page with the welcome message, book list, add book button and Logout button
When I click on Add book and click add book without entering any text fields
Then I verify the error heading as Please correct the following errors and message as Title is required.
Then I verify the error heading as Please correct the following errors and message as Author is required.
Then I verify the error heading as Please correct the following errors and message as Genre is required.
Then I verify the error heading as Please correct the following errors and message as ISBN is required.
Then I verify the error heading as Please correct the following errors and message as Publication Date is required.
Then I verify the error heading as Please correct the following errors and message as Price is required.

Examples:
    |username|password         |
    |admin1  | securePassword  |
    |admin2  | securePassword  |

Scenario Outline: Verify the authorized users are permitted to access the books catalog and make changes
Given I open the website for Books Inventory Application
Then I verify the login page is displayed
When I enter the username as <username> and password as <password> and click on the Login button
Then I verify the Welcome page with the welcome message, book list, add book button and Logout button
When I click on Add book and enter the title that exceeds character length as TheAlchemistTheAlchemistTheAlchemist
Then I verify the inline error as Title cannot exceed 30 characters

Examples:
    |username|password         |
    |admin1  | securePassword  |
    |admin2  | securePassword  |

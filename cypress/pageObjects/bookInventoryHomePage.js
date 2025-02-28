class bookInventoryHomePage{
//Verify home page UI after login
    verifyHomePageUIAfterLogin(){
        cy.contains("Welcome, Admin!").should("be.visible");
        cy.log("Verified welcome message on login");
        cy.contains("Book List").should("be.visible");
        cy.log("Verified Book List is visible");
        cy.xpath("//button[contains(text(),'Add Book')]",{timeout:6000}).should("be.visible");
        cy.log("Verified Add Book button is visible");
        cy.xpath("//button[contains(text(),'Log Out')]",{timeout:6000}).should("be.visible");
        cy.log("Verified Add Book button is visible");
    }

//Add new books to the list
    addNewBookToList(title,author,genre,isbn,publicationDate,price){
        cy.xpath("//button[contains(text(),'Add Book')]",{timeout:4000}).click();
        cy.log("Clicked on Add book button");
        cy.contains("Add a New Book").should("be.visible");
        cy.log("Verified Add a New Book page is visible");
        cy.get('input#title').type(title);
        cy.log("Entered book title as"+title);
        cy.get('input#author').type(author);
        cy.log("Entered book author as"+author);
        cy.get('select').select(genre);
        cy.log("Selected genre as"+genre);
        cy.get('input#isbn').type(isbn);
        cy.log("Entered book isbn as"+isbn);
        cy.get('input#publicationDate').type(publicationDate);
        cy.log("Entered book publication Date as"+publicationDate);
        cy.get('input#price').type(price);
        cy.log("Entered book price as"+price);
        cy.xpath("//button[contains(text(),'Add Book')]",{timeout:4000}).click();
        cy.log("Clicked on Add book button");
    }

//Verify newly added book is visible
    verifyNewBookAdded(title){
        cy.xpath("//table//tr[last()]//td[1]",{timeout:4000})
        .contains(title)
        .should("be.visible");
        cy.log("Newly added book is visible in the list");
    }

//Edit recently added book
    editBookDetails(title,author,genre,isbn,publicationDate,price){
        cy.xpath("//table//tr[last()]//td[7]//button[contains(text(),'Edit')]",{timeout:4000}).click();
        cy.log("Clicked on Edit button");
        cy.contains("Edit book details").should("be.visible");
        cy.log("Verified Edit book details page is visible");
        cy.get('input#edit-title').clear().type(title);
        cy.log("Updated book title as"+title);
        cy.get('input#edit-author').clear().type(author);
        cy.log("Updated book author as"+author);
        cy.get('input#edit-genre').clear().type(genre);
        cy.log("Updated genre as"+genre);
        cy.get('input#edit-isbn').clear().type(isbn);
        cy.log("Updated book isbn as"+isbn);
        cy.get('input#edit-publicationDate').clear().type(publicationDate);
        cy.log("Updated book publication Date as"+publicationDate);
        cy.get('input#edit-price').clear().type(price);
        cy.log("Updated book price as"+price);
        cy.get('button#save-changes',{timeout:4000}).click();
        cy.log("Clicked on save changes button");

    }

//verify updated book details
    verifyUpdatedBookDetails(title,author,genre,isbn,publicationDate,price){
        cy.xpath("//table//tr[last()]//td[1]",{timeout:4000})
        .contains(title)
        .should("be.visible");
        cy.log("Updated title is visible in the list");
        cy.xpath("//table//tr[last()]//td[2]",{timeout:4000})
        .contains(author)
        .should("be.visible");
        cy.log("Updated author is visible in the list");
        cy.xpath("//table//tr[last()]//td[3]",{timeout:4000})
        .contains(genre)
        .should("be.visible");
        cy.log("Updated genre is visible in the list");
        cy.xpath("//table//tr[last()]//td[4]",{timeout:4000})
        .contains(isbn)
        .should("be.visible");
        cy.log("Updated isbn is visible in the list");
        cy.xpath("//table//tr[last()]//td[5]",{timeout:4000})
        .contains(publicationDate)
        .should("be.visible");
        cy.log("Updated publication Date is visible in the list");
        cy.xpath("//table//tr[last()]//td[6]",{timeout:4000})
        .contains(price)
        .should("be.visible");
        cy.log("Updated price is visible in the list");

    }

//delete the book from the list
    deleteBookFromList(){
        cy.xpath("//table//tr[last()]//td[7]//button[contains(text(),'Delete')]",{timeout:4000}).click();
        cy.log("Clicked on Delete button");
    }

//verify deleted book is not visible in book list
    verifyDeletedBookNotExist(title){
        cy.xpath("//table//tr[last()]//td[1][contains(text(),'"+title+"')]",{timeout:4000})
        .should('not.exist');
        cy.log("Newly added book is visible in the list");
    }
//Log out from the application
    logOutFromBookInventoryApp(){
        cy.xpath("//button[contains(text(),'Log Out')]").click();
        cy.log("Clicked on Log out button");
    }

//Verify error messages
    verifyErrorMessage(heading,message){
        cy.xpath("//div[@role='alert']//h3")
        .contains(heading)
        .should("be.visible");
        cy.log("Verified error heading");
        cy.xpath("//div[@role='alert']//li")
        .contains(message)
        .should("be.visible");
        cy.log("Verified error message");
    }

//Add book without entering data
    AddBookWithoutData(){
        cy.xpath("//button[contains(text(),'Add Book')]",{timeout:4000}).click();
        cy.log("Clicked on Add book button");
        cy.contains("Add a New Book").should("be.visible");
        cy.log("Verified Add a New Book page is visible");
        cy.xpath("//button[contains(text(),'Add Book')]",{timeout:4000}).click();
        cy.log("Clicked on Add book button");
    }

 //Add new books to the list
    addBookWithTitleExceedsCharacterLength(title){
        cy.xpath("//button[contains(text(),'Add Book')]",{timeout:4000}).click();
        cy.log("Clicked on Add book button");
        cy.contains("Add a New Book").should("be.visible");
        cy.log("Verified Add a New Book page is visible");
        cy.get('input#title').type(title);
        cy.log("Entered book title");

        }

//verify Inline errors
verifyInlineErrors(error){
    cy.get('p#title-error').contains(error).should("be.visible");
    cy.log("Verified inline error")
}


}
export default bookInventoryHomePage
class bookInventoryLoginPage{

    openWebsiteBookInventoryApplication(url){
        cy.visit(url);
        cy.log("Opened Book Inventory Application website");
    }

    verifyTitleAndLoginPage(){
        cy.title().should('eq', 'Books Inventory App');
        cy.log("Title is verified as Books Inventory App");
        cy.contains("Login").should("be.visible");
    }

    loginToBookInventoryApplication(username,password){
        cy.get('#username').type(username);
        cy.log("Entered username as"+username);
        cy.get('#password').type(password);
        cy.log("Entered password as"+password);
        cy.get('#login-button').click();
        cy.log("Clicked on Login button");

    }
}
export default bookInventoryLoginPage
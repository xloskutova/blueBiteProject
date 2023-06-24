import Raffle from '../../utils/pages/raffle'

describe('Elements', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Raffle Page should be dispalyed', () => {
        Raffle.beVisible(Raffle.page);
    })

    it('Form Header text should be visible', () => {
        Raffle.beVisible(Raffle.formHeaderText);
    })

    it('Name field should be visible', () => {
        Raffle.beVisible(Raffle.nameInputField);
    })

    it('Email field should be visible', () => {
        Raffle.beVisible(Raffle.emailInputField);
    })

    it('Age field should be visible', () => {
        Raffle.beVisible(Raffle.ageInputFiled);
    })

    it('Reason field should be visible', () => {
        Raffle.beVisible(Raffle.reasonInputField);

    })

    it('Submit button should be visible', () => {
        Raffle.beVisible(Raffle.submitBtn);
    })
})

describe('Values', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Form Header should have text = "Enter chance to win!"', () => {
        cy.get(Raffle.formHeaderText).should('have.text', Raffle.expected.formHeaderText);
    })

    it('Name Field label should = "Name*"', () => {
        Raffle.checkText(Raffle.nameLabel, Raffle.expected.nameLabelText);
    })

    it('Email Field label should = "Email*"', () => {
        Raffle.checkText(Raffle.emailLabel, Raffle.expected.emailLabelText);
    })

    it('Age Field label should = "Age*"', () => {
        Raffle.checkText(Raffle.ageLabel, Raffle.expected.ageLabelText);
    })

    it('Reason Field label should = "Reason"', () => {
        Raffle.checkText(Raffle.reasonLabel, Raffle.expected.reasonLabelText);
    })

    it('Submit button text and color verification', () => {
        cy.get(Raffle.submitBtn).then(button => {
            cy.wrap(button).should('have.text', Raffle.expected.submitBtnText)
            cy.wrap(button).should('have.css', 'background-color', Raffle.expected.submitBtnBackgroundColor)
        })
    })
})    

describe('Functionality', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('When input fields are focused the inputs should turn blue', () => {
        cy.get(Raffle.nameInputField).click()
    
        cy.get(Raffle.nameInputField)
            .should('have.css', 'outline-color', Raffle.expected.fieldFocusColor);
    
        cy.get(Raffle.form).find('input').each(($els) => {
            cy.wrap($els).click()
            cy.wrap($els)
                .should('have.css', 'outline-color', Raffle.expected.fieldFocusColor);
        })
    })

    it('Positive scenario 1: Submiting only 1 request by entering all valid required information and verifying submission text', () => {
        let name = 'Sam'
        cy.get(Raffle.form).find('input').then(input => {
            cy.wrap(input)
            .first()
            .type(name)

            cy.wrap(input)
            .eq(1)
            .type('tester@test.com')

            cy.wrap(input)
            .eq(2)
            .type('19')
        })

        cy.get(Raffle.submitBtn).click()

        cy.xpath(Raffle.successfulSubmissionHeader).invoke('prop', 'innerText')
            .should('contain', Raffle.expected.successfulSubmissionHeaderText + name)

        cy.xpath(Raffle.successfulSubmissionMessage).invoke('prop', 'innerText')
        .should('contain', Raffle.expected.successfulSubmissionMessage(1))    
    })

    it('Positive scenario 2: Submiting 4 requests by entering all valid required information and verifying submission text', () => {
        let name = 'Sam'
        for(let i = 0; i < 4; i++){
        cy.get(Raffle.form).find('input').then(input => {
            cy.wrap(input)
            .first()
            .type(name)

            cy.wrap(input)
            .eq(1)
            .type('tester@test.com')

            cy.wrap(input)
            .eq(2)
            .type('19')
        })

        cy.get(Raffle.submitBtn).click()

        cy.xpath(Raffle.successfulSubmissionHeader).invoke('prop', 'innerText')
            .should('contain', Raffle.expected.successfulSubmissionHeaderText + name)

        cy.xpath(Raffle.successfulSubmissionMessage).invoke('prop', 'innerText')
        .should('contain', Raffle.expected.successfulSubmissionMessage(i + 1))  
        cy.reload()  
        }
    })

    it('Positive scenario 3: Submiting only 1 request by entering all valid information and verifying submission text', () => {
        let name = 'Tom'
        cy.get(Raffle.form).find('input').then(input => {
            cy.wrap(input)
            .first()
            .type(name)

            cy.wrap(input)
            .eq(1)
            .type('tester@test.com')

            cy.wrap(input)
            .eq(2)
            .type('19')

            cy.wrap(input)
            .eq(3)
            .type('Sneakers')
        })

        cy.get(Raffle.submitBtn).click()

        cy.xpath(Raffle.successfulSubmissionHeader).invoke('prop', 'innerText')
            .should('contain', Raffle.expected.successfulSubmissionHeaderText + name)

        cy.xpath(Raffle.successfulSubmissionMessage).invoke('prop', 'innerText')
        .should('contain', Raffle.expected.successfulSubmissionMessage(1))    
    })

    it('Entering invalid Age: 17 and verifying the message: ' + Raffle.expected.invalidAgeMessage, () => {
        let name = 'Sam'
        cy.get(Raffle.form).find('input').then(input => {
            cy.wrap(input)
            .first()
            .type(name)

            cy.wrap(input)
            .eq(1)
            .type('tester@test.com')

            cy.wrap(input)
            .eq(2)
            .type('17')
        })

        cy.get(Raffle.submitBtn).click()
        cy.xpath(Raffle.invalidAgeMessage).invoke('prop', 'innerText')
            .should('contain', Raffle.expected.invalidAgeMessage)
    })

    it('User enters invalid Age: 16 and should see the message: ' + Raffle.expected.invalidAgeMessage, () => {
        let name = 'Sam'
        cy.get(Raffle.form).find('input').then(input => {
            cy.wrap(input)
            .first()
            .type(name)

            cy.wrap(input)
            .eq(1)
            .type('tester@test.com')

            cy.wrap(input)
            .eq(2)
            .type('16')
        })

        cy.get(Raffle.submitBtn).click()
        cy.xpath(Raffle.invalidAgeMessage).invoke('prop', 'innerText')
            .should('contain', Raffle.expected.invalidAgeMessage)
    })

    it('User skipping Name field and providing valid email and age should see Name field turned red', () => {
        let name = 'Sam'
        cy.get(Raffle.form).find('input').then(input => {

            cy.wrap(input)
            .eq(1)
            .type('tester@test.com')

            cy.wrap(input)
            .eq(2)
            .type('19')
        })

        cy.get(Raffle.submitBtn).click()
        cy.get(Raffle.nameInputField)
            .should('have.css', 'outline-color', 'rgb(255, 0, 0)');
        
        cy.get(Raffle.nameLabel)
            .should('have.css', 'text-color', 'rgb(255, 0, 0)')    
    })

})

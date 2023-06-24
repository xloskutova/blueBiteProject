
//elements locators
const form = '#componentId-2'
const page = '#experience-app'
const formHeaderText = '.snippet__Body-sc-12bo3rm-0'
const nameInputField = '#input-3'
const emailInputField = '#input-4'
const ageInputFiled = '#input-8'
const reasonInputField = '#input-9'
const submitBtn = '[type="button"]'
const nameLabel = '[for="input-3"]'
const emailLabel = '[for="input-4"]'
const ageLabel = '[for="input-8"]'
const reasonLabel = '[for="input-9"]'
const successfulSubmissionHeader = '//div[@id="experience-app"]/div/div[2]/div[1]'
const successfulSubmissionMessage = '//div[@id="experience-app"]/div/div[2]/div[2]'
const invalidAgeMessage = '//div[@id="experience-app"]/div/div[2]/div'


//expected result
const expected = {
    formHeaderText: 'Enter chance to win!',
    nameLabelText: 'Name*',
    emailLabelText: 'Email*',
    ageLabelText: 'Age*',
    reasonLabelText: 'Reason',
    submitBtnText: 'Submit',
    submitBtnBackgroundColor: 'rgb(46, 113, 240)',
    fieldFocusColor: 'rgb(0, 95, 204)',
    successfulSubmissionHeaderText: 'Submission Confirmed, ',
    successfulSubmissionMessage: (number) => `The winner of the raffle will be managed independently and will be contacted via email. You have registed ${number} submissions.`,
    invalidAgeMessage: 'Must be 18 or older to enter.'
}
//functions
const beVisible = (selector) => cy.get(selector).should('be.visible')
const checkText = (selector, text) => cy.get(selector).should('have.text', text)

export default {
    expected,
    form,
    page,
    formHeaderText,
    nameInputField,
    emailInputField,
    ageInputFiled,
    reasonInputField,
    submitBtn,
    nameLabel,
    emailLabel,
    ageLabel,
    reasonLabel,
    successfulSubmissionHeader,
    successfulSubmissionMessage,
    invalidAgeMessage,
    beVisible,
    checkText
}
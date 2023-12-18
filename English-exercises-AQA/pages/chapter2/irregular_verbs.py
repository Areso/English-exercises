import allure

from locators.main_page_locators import PrepositionsLocators

from pages.chapter1.prepositions.Prepositions import PrepositionsPages


class IrregularVerbsPages(PrepositionsPages):
    locators = PrepositionsLocators()

    def check_irregular_verbs_options(self):
        amount_of_cards = self.get_amount_of_cards()
        for i in range(amount_of_cards):
            with allure.step('#' * 50):
                pass
            question = self.get_question_text()
            with allure.step(f'Question is: {question}'):
                pass
            with allure.step('Click button "Show answer".'):
                self.element_is_presence_and_clickable(self.locators.SHOW_ANSWER_BUTTON).click()
            correct_answer = self.element_is_visible(self.locators.CORRECT_ANSWER_TEXT).text
            with allure.step(f'Get correct answer: {correct_answer}.'):
                if ',' in correct_answer:
                    correct_answer = correct_answer.split(',')[0]
                # print('correct_answer after split', correct_answer)
            with allure.step(f'Enter correct answer: {correct_answer}.'):
                self.element_is_presence_and_clickable(self.locators.INPUT_PLACE).send_keys(correct_answer)
            with allure.step('Click button "Check answer".'):
                self.element_is_presence_and_clickable(self.locators.CHECK_ANSWER_BUTTON).click()
            with allure.step('Check answer is: "CORRECT".'):
                result = self.element_is_visible(self.locators.CORRECT_OR_WRONG).text
            with allure.step('Click button "Next card".'):
                self.element_is_presence_and_clickable(self.locators.NEXT_CARD_BUTTON).click()
            assert result == 'CORRECT'

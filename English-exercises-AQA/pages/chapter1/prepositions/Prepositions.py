import random

import allure
from selenium.webdriver.common.by import By

from locators.main_page_locators import PrepositionsLocators
from pages.base_page import BasePage


class PrepositionsPages(BasePage):
    locators = PrepositionsLocators()

    def get_amount_of_cards(self):
        amount = self.element_is_presence(self.locators.AMOUNT_OF_CARDS).text
        assert amount.isdigit()
        # print('Amount cards:', amount)
        return int(amount)

    def get_current_card_number(self):
        curd_number = int(self.element_is_presence(self.locators.CURRENT_CARD_NUMBER).text)
        return curd_number

    def get_question_text(self):
        question_text = self.element_is_presence(self.locators.QUESTION).text
        return question_text

    def check_radio_buttons(self):
        random_index = random.randint(0, len(self.elements_are_presence(
            (By.XPATH, '//div[@id="answer_radiobutton_div"] /input'))) - 1)
        selected_button = self.elements_are_presence(self.locators.LIST_OF_RADIO_BUTTONS)[random_index]
        selected_button.click()
        with allure.step(f"Customer selected: {selected_button.get_attribute('value')}."):
            all_options = [value.get_attribute('value') for value
                           in self.elements_are_presence(self.locators.LIST_OF_RADIO_BUTTONS)]
            # print('All options:', all_options)
            selected_button_value = selected_button.get_attribute('value')
            # print('Selected option:', selected_button_value)
            """Or we can use after click selected_button.is_selected()"""
            return selected_button_value, self.check_selected_radio_button(random_index)

    def check_answer(self):
        self.element_is_presence_and_clickable(self.locators.CHECK_ANSWER_BUTTON).click()
        answer = self.element_is_presence(self.locators.CORRECT_OR_WRONG).text
        # print('Correct or wrong answer:', answer)
        return answer

    def check_correct_answer(self):
        show_answer = self.element_is_presence_and_clickable(self.locators.SHOW_ANSWER_BUTTON)
        show_answer.click()
        correct_answer = self.element_is_presence(self.locators.CORRECT_ANSWER_TEXT).text
        # print(f'Correct answer: {correct_answer}')
        return correct_answer

    def click_next_card(self):
        button_next_card = self.element_is_presence_and_clickable(self.locators.NEXT_CARD_BUTTON)
        button_next_card.click()

    # Methods
    @staticmethod
    def check_main_options(main_page):
        """
        This method performs basic checks common to all cards.
        This is the display of elements and the ability to click on buttons.

        :param main_page: current driver state

        amount_of_cards -> int   &(show quantity of cards)

        question -> str   &(current question text)

        button_value -> str   &(value of selected button)

        result -> bool   &(will check if the element is actually selected (True or False))

        correct_or_wrong -> str   &(Shows the response value)

        correct_answer -> str    &(Shows correct answer)

        """
        amount_of_cards = main_page.get_amount_of_cards()
        for i in range(amount_of_cards):
            current_card_number = main_page.get_current_card_number()
            with allure.step(f'\n{current_card_number}. Check card.'):
                question = main_page.get_question_text()
            with allure.step(f'Question: {question}'):
                button_value, result = main_page.check_radio_buttons()
            with allure.step(f'Customer selected: {button_value}'):
                pass
            with allure.step(f'\n\nValue of button is: {result}'):
                pass
                correct_or_wrong = main_page.check_answer()
                correct_answer = main_page.check_correct_answer()
            with allure.step(f'Should be: {correct_answer}'):
                pass
                # print(f'Should be: {correct_answer}')
            with allure.step(f'Result should be:{correct_answer}'):
                assert result is True, 'Clicked button is not selected'
                try:
                    assert button_value == correct_answer and correct_or_wrong == 'CORRECT'
                    # print('\n', '#' * 10, 'Correct answer!', '#' * 10, '\n')
                    # print('#' * 10, "It's right answer.", '#' * 10)
                    # print('\n')
                except Exception as ex:
                    print(ex, '\n', '#' * 10, 'Wrong answer!', '#' * 10)
                main_page.click_next_card()
            with allure.step('*' * 90):
                pass

    @staticmethod
    def check_questions_no_repeated(main_page):
        """
        This method goes through all the cards and creates two dictionaries;
        all questions are added to one, only if they have not been repeated before.
        At the end of the cycle, the dictionaries are compared.
        :param main_page: current driver state

        :return: dict1, dict2
        """
        amount_of_cards = main_page.get_amount_of_cards()
        data1 = {}
        data2 = {}
        for _ in range(amount_of_cards):
            current_card_number = main_page.get_current_card_number()
            question = main_page.get_question_text()
            data1[current_card_number] = question
            if question not in list(data2.values()):
                data2[current_card_number] = question
            main_page.click_next_card()
        # pprint(data1)
        # pprint(data2)
        return data1, data2

    @staticmethod
    def check_args_is_not_presence(main_page):
        """
        This method checks that the card is not empty and >
        This method goes through all the cards and checks whether the (args) value
        from the devtools has reached the client.
        :param main_page:
        :return:
        """
        amount_of_cards = main_page.get_amount_of_cards()
        data = {}
        for _ in range(amount_of_cards):
            current_card_number = main_page.get_current_card_number()
            question = main_page.get_question_text()
            data[current_card_number] = question
            assert 'args' not in question, 'Args is presence'
            assert '1/N' not in question, 'No cards'
            main_page.click_next_card()

from selenium.webdriver.common.by import By


class PrepositionsLocators:
    # Chapter 1
    AMOUNT_OF_CARDS = (By.XPATH, '//span[@id="spnTotal"]')
    CURRENT_CARD_NUMBER = (By.XPATH, '//span[@id="spnCurPos"]')
    QUESTION = (By.XPATH, '//div[@id="question"]')
    LIST_OF_RADIO_BUTTONS = (By.XPATH, '// div[@id = "answer_radiobutton_div"] /input')
    RADIO_BUTTON_ON = (By.XPATH, '//input[@value="on"]')
    RADIO_BUTTON_AT = (By.XPATH, '//input[@value="at"]')
    RADIO_BUTTON_IN = (By.XPATH, '//input[@value="in"]')
    CORRECT_OR_WRONG = (By.XPATH, '//lbl[@id="resultLbl"] /span')
    CHECK_ANSWER_BUTTON = (By.XPATH, '//button[@id="checkBtn"]')
    SHOW_ANSWER_BUTTON = (By.XPATH, '//button[@id="showAnswerBtn"]')
    NEXT_CARD_BUTTON = (By.XPATH, '//button[@id="nextBtn"]')
    CORRECT_ANSWER_TEXT = (By.XPATH, '//lbl[@id="resultLbl"]')

    # Chapter 2
    INPUT_PLACE = (By.XPATH, '//input[@id="answer_text_field"]')

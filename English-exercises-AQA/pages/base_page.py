import random

import allure
from allure_commons.types import AttachmentType
from selenium.webdriver import Keys, ActionChains
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.ui import WebDriverWait as Wait


class BasePage:

    def __init__(self, driver, url):
        self.driver = driver
        self.url = url
        self.timeout = 5

    def get_current_url(self):
        get_url = self.driver.current_url
        print('Current url: ' + get_url)

    def open(self):
        with allure.step(f'Open page: {self.url}'):
            self.driver.get(self.url)

    def element_is_presence_and_clickable(self, locator):
        with allure.step(f'Check element is visible and clickable: {locator}'):
            return (Wait(self.driver, self.timeout).until(ec.visibility_of_element_located(locator),
                                                          message=f"Can't find element by locator {locator}") and
                    self.element_is_clickable(locator))

    def element_is_visible(self, locator):
        with allure.step(f'Check element is visible: {locator}'):
            self.go_to_element(self.element_is_presence(locator))
            return Wait(self.driver, self.timeout).until(ec.visibility_of_element_located(locator),
                                                         message=f"Can't find element by locator {locator}")

    def elements_are_visible(self, locator):
        with allure.step(f'Check elements are visible: {locator}'):
            return Wait(self.driver, self.timeout).until(ec.visibility_of_all_elements_located(locator),
                                                         message=f"Can't find elements by locator {locator}")

    def element_is_presence(self, locator):
        with allure.step(f'Check element is presence: {locator}'):
            return Wait(self.driver, self.timeout).until(ec.presence_of_element_located(locator),
                                                         message=f"Can't find element by locator {locator}")

    def elements_are_presence(self, locator):
        with allure.step(f'Check elements are presence: {locator}'):
            return Wait(self.driver, self.timeout).until(ec.presence_of_all_elements_located(locator),
                                                         message=f"Can't find elements by locator {locator}")

    def elements_is_not_visible(self, locator):
        with allure.step(f'Check elements is not visible: {locator}'):
            return Wait(self.driver, self.timeout).until(ec.invisibility_of_element(locator),
                                                         message=f"Can't find element by locator {locator}")

    @allure.step('Check element is clickable')
    def element_is_clickable(self, locator):
        with allure.step(f'Check elements are clickable: {locator}'):
            return Wait(self.driver, self.timeout).until(ec.element_to_be_clickable(locator),
                                                         message=f"Can't find element by locator {locator}")

    def go_to_element(self, element):
        with allure.step(f'Go to element: {element}'):
            return self.driver.execute_script("arguments[0].scrollIntoView({ block: 'center'});", element)

    def scroll_to_visible_element(self, locator):
        with allure.step(f'Scroll to element: {locator}'):
            self.go_to_element(self.element_is_presence(locator))
            return Wait(self.driver, self.timeout).until(ec.element_to_be_clickable(locator),
                                                         message=f"Can't find element by locator {locator}")

    @allure.step('Click enter to element')
    def click_enter_to_element(self, locator):
        allure.step(f'Click enter to {locator}')
        Wait(self.driver, self.timeout).until(ec.element_to_be_clickable(locator(Keys.RETURN)))

    @allure.step('Remove footer')
    def remove_footer(self):
        self.driver.execute_script("document.getElementsByTagName('footer')[0].remove();")
        print('\nRemove Footer')

    @allure.step('check_selected_radio_button')
    def check_selected_radio_button(self, index):
        result = self.driver.execute_script(f'return(document.getElementsByName("possibleAnswers")[{index}].checked)')
        with allure.step(f'Check value of selected button: {result}'):
            return result

    @allure.step('check_selected_radio_button')
    def get_entered_value(self):
        """This method returned entered value from input place"""
        result = self.driver.execute_script(f'return(document.querySelector("#answer_text_field").value)')
        with allure.step(f'Check value of selected button: {result}'):
            return result

    """"Данный метод убирает рекламный банер"""

    @allure.step('Remove fixedban')
    def remove_fixedban(self):
        self.driver.execute_script("document.getElementById('fixedban').style.display = 'none'")
        print('Remove Fixedban')

    @allure.step('Action double click')
    def action_double_click(self, element):
        with allure.step(f'Double click {element}'):
            action = ActionChains(self.driver)
            action.double_click(element).perform()

    @allure.step('Action right click')
    def action_right_click(self, element):
        with allure.step(f'Right click {element}'):
            action = ActionChains(self.driver)
            action.context_click(element).perform()

    @allure.step('Action one click')
    def action_one_click(self, element):
        action = ActionChains(self.driver)
        action.click(element).perform()

    @allure.step('Go to a new tab')
    def go_to_a_new_tab(self):
        self.driver.switch_to.window(self.driver.window_handles[1])

    @allure.step('Go to alert')
    def go_to_alert(self):
        return self.driver.switch_to.alert

    @allure.step('Go to frame')
    def go_to_frame(self, element):
        self.driver.switch_to.frame(element)

    @allure.step('Switch to default content')
    def switch_to_default_content(self):
        self.driver.switch_to.default_content()

    @allure.step('Random choice from elements list')
    def random_choice_from_elements_list(self, elements_list_locator):
        empty_list = []
        full_list = self.elements_are_presence(elements_list_locator)
        for t in full_list:
            empty_list.append(t.text)
        return random.choice(full_list)

    @allure.step('Action drag and drop offset')
    def action_drag_and_drop_offset(self, element, x_coord, y_coord):
        action = ActionChains(self.driver)
        action.drag_and_drop_by_offset(element, x_coord, y_coord)
        action.perform()

    @allure.step('Action move to element')
    def action_move_to_element(self, element):
        with allure.step(f'Move to {element}'):
            action = ActionChains(self.driver)
            action.move_to_element(element)
            action.perform()

    @allure.step('Action drag and drop element')
    def action_drag_and_drop_element(self, what, where):
        action = ActionChains(self.driver)
        action.drag_and_drop(what, where)
        action.perform()

    @allure.step('Attach screenshot')
    def attach_screenshot(self, element):
        """Create screenshot of current window and attach it in allure report
        Args:
         - file_name: str like 'Linkedin_button_not_found'
        """
        element_name = ''.join(element)
        allure.attach(self.driver.get_screenshot_as_png(), name=element_name, attachment_type=AttachmentType.PNG)

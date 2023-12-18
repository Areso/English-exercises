import allure
from pages.chapter1.prepositions.Prepositions import PrepositionsPages
from pages.chapter2.irregular_verbs import IrregularVerbsPages


@allure.suite('Synonyms')
class TestSynonyms:
    @allure.sub_suite('Test synonyms.')
    @allure.link('https://english.areso.pro/lesson.html?lesson=synonyms')
    class TestIrregularVerbs:
        url = 'https://english.areso.pro/lesson.html?lesson=synonyms'

        @allure.title('test_check_main_options')
        @allure.description('Check main page options.')
        @allure.severity('NORMAL')
        def test_check_main_options(self, driver):
            main_page = IrregularVerbsPages(driver, self.url)
            main_page.open()
            main_page.check_irregular_verbs_options()

        @allure.title('test_check_questions_no_repeated')
        @allure.description('Check questions no repeated.')
        @allure.severity('NORMAL')
        def test_check_questions_no_repeated(self, driver):
            main_page = PrepositionsPages(driver, self.url)
            main_page.open()
            data1, data2 = main_page.check_questions_no_repeated(main_page)
            assert data1 == data2, 'Question is repeated'

        @allure.title('test_args_is_not_presence')
        @allure.description('Check args is not presence.')
        @allure.severity('NORMAL')
        def test_args_is_not_presence(self, driver):
            main_page = PrepositionsPages(driver, self.url)
            main_page.open()
            main_page.check_args_is_not_presence(main_page)

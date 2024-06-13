import re # String handling library to allow several string operations
import random # It allows to choose the random response from the list of responses
import pandas as pd #Data manipulation and analysis

class RuleBot:
    ### Potential negative responses
    negative_responses = ("no", "nah", "sorry", "naw", "nope",
                          "No", "Nah", "Sorry", "Naw", "Nope")
    ### Exit conversation keywords
    exit_commands = ("quit", "pause", "exit", "goodbye", "bye", "later", "See you", "thank you", "thanks", "Thanks", "Thank you")
    ### Random stater questions
    random_questions = (
        "What do you want to check today?", "What do you want to check today?"
    )

    def __init__(self):
        self.query = {'browser_stats' : r'.*\s*stats',
                        'all_browsers' :r'.*\s*all',
                        'top3_stats' :r'.*\s*top'}

    def greet(self):
            self.name = input("what is your name?\n")
            will_help = input(
                f"Hi {self.name}, I am rulebot. How are you?\n")
            if will_help in self.negative_responses:
                print("Ok, Have a nice day!")
                return
            self.chat()

    def make_exit(self, reply):
        for command in self.exit_commands:
            if reply == command:
                print("Ok, Have a nice day!")
                return True

    def chat(self):
        reply = input(random.choice(self.random_questions)).lower()
        while not self.make_exit(reply):
            reply = input(self.match_reply(reply))

    def match_reply(self, reply):
        for key, value in self.query.items():
            intent = key
            regex_pattern = value
            found_match = re.match(regex_pattern, reply)
            if found_match and intent == 'browser_stats':
                return self.browser_stats()                
            elif found_match and intent == 'all_browsers':
                return self.all_browser_stats()
            elif found_match and intent == 'top3_stats':
                return self.top3_stats()
            if not found_match:
                return self.no_match_intent()

    def browser_stats(self):
        self.quarterName = input("Please choose the quarter(Q1/Q2/Q3/Q4) to get the stats.\n").title()
        data_files = 'Testdata.xlsx'
        df = pd.read_excel(data_files, sheet_name=self.quarterName, usecols=['Browser', 'visitors'])
        self.browserName = input("Please choose the browser to get the stats.\n").title()
        df2=df[df["Browser"] == self.browserName ] 
        print(df2)
        top3 = input("Do you want to see the top 3 browsers in the quater?.\n").title()
        if top3 in self.negative_responses:
                print("Ok, Have a nice day!")
        else:
            return self.top3_stats()


    def all_browser_stats(self):
        self.quarterName = input("Please choose the quarter(Q1/Q2/Q3/Q4) to get the stats.\n").title()
        data_files = 'Testdata.xlsx'
        df = pd.read_excel(data_files, sheet_name=self.quarterName, usecols=['Browser', 'visitors'])
        print(df)
        
    def no_match_intent(self):
        responses = ("Sorry I dont understand. Please type quit to exit the chat.\n", "Sorry, I dont understand. Please type quit to exit the chat.\n")
        return random.choice(responses)
    
    def top3_stats(self):
        self.quarterName = input("Please choose the quarter(Q1/Q2/Q3/Q4) to get the browsers.\n").title()
        data_files = 'Testdata.xlsx'
        df = pd.read_excel(data_files, sheet_name=self.quarterName, usecols=['Browser', 'visitors'])
        df2 = df.sort_values('visitors', ascending=False).head(3)
        print(df2)

AlienBot = RuleBot()
AlienBot.greet()
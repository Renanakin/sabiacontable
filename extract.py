from html.parser import HTMLParser
import sys

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
    
    def handle_data(self, data):
        if data.strip():
            self.text.append(data.strip())

with open('quienes_somos.html', 'r', encoding='utf-16') as f:
    html = f.read()

parser = MyHTMLParser()
parser.feed(html)
print('\n'.join(parser.text))

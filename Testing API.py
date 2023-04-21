import requests
import pprint

pp = pprint.PrettyPrinter(indent=4)
API_KEY = 'uM7tzmEFDrei+OnUuIm4xA==D54Vf7u6suCLl82P'

def Search(txt):
    api_url = 'https://api.api-ninjas.com/v1/exercises?name=Du'
    response = requests.get(api_url, headers={'X-Api-Key': API_KEY})
    if response.status_code == requests.codes.ok:
        pp.pprint(response.json())
    else:
        print("Error:", response.status_code, response.text)

while True:
    txt_input = input('>')
    if (txt_input == 'e'):
        break

    Search(txt_input)

    

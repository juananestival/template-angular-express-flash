import sqlite3
import os
from unittest import result
from flask import Flask, request, jsonify
from dotenv import load_dotenv

load_dotenv()
PORTFLASK = os.getenv("PORTFLASK")
app = Flask(__name__)
@app.route('/api/sample', methods=['GET', 'POST'])
def collection():
    if request.method == 'GET':
        pass  # Handle GET all Request. Pass is that will be implemented later
    elif request.method == 'POST':
        data = request.json
        #data = request.form
        print(data)
        result = ""
        #result = add_song(data['artist'], data['title'], data['rating'])
        return jsonify(result)




if __name__ == '__main__':
    app.debug = True
    app.run(port=PORTFLASK)

# helper functions

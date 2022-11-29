from typing import List, Dict
from flask import Flask, jsonify
import mysql.connector
import json

app = Flask(__name__)


def get_songs() -> List[Dict]:
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'knights'
    }

    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()

    cursor.execute('SELECT * FROM songs ORDER BY RAND() LIMIT 10')

    results = [{
      "artist_name": artist_name,
      "track_name": track_name,
      "track_id": track_id,
      "track_popularity": track_popularity,
      "artist_id": artist_id
    } for (artist_name, track_name, track_id, track_popularity, artist_id) in cursor]


    cursor.close()
    connection.close()

    return results

@app.route('/songs')
def index() -> json:
    results = get_songs()

    return jsonify(results)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
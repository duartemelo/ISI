from flask import Flask, request, jsonify, session
from flask.wrappers import Response
from flask_cors import CORS
import pymongo

import json

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

try:
    mongo = pymongo.MongoClient(
        host="localhost",
        port=27017,
        serverSelectionTimeoutMS = 1000
    )
    db = mongo.local
    mongo.server_info() # trigger exception if cannot connect to db
except:
    print("ERROR - Cannot connect to db")


# CORS

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE')
    return response


# GET TITLES
@app.route("/titles", methods=["GET"])
def get_titles():
    try:
        data = list(db.imdb_isi.find())
        # for title in data:
        #     title["_id"] = str(title["_id"])
        return Response(
            response = json.dumps(data),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response= json.dumps(
                {"message": "cannot read titles"}
            ),
            status=500,
            mimetype="application/json"
        )




####

if __name__ == "__main__":
    app.run(debug=True)


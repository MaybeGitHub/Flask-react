from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from libreria.euromillones import num_euro
from libreria.bonoloto import num_bonoloto
from libreria.primitiva import num_primitiva
from libreria.gordo import num_gordo



app = Flask(__name__)
CORS(app)

#miembro api route

@app.route("/")
def Loteria():
    return {"Loteria": ["Sin diversión no hay juego"]}

@app.route("/bonoloto", methods=["GET"])
def num_bonoloto_endpoint():
    sorteo = num_bonoloto()
    return sorteo

@app.route("/euromillones", methods=["GET"])
def num_euro_endpoint():
    data = num_euro()
    return data

@app.route("/primitiva", methods=["GET"])
def num_primitiva_endpoint():
    data = num_primitiva()
    return data

@app.route("/gordo", methods=["GET"])
def num_gordo_endpoint():
    data = num_gordo()
    return data




if __name__ =="__main__":
    app.run(debug=True)
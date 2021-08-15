from flask import Flask,abort
from flask.json import jsonify
from flask_cors import CORS
from db import projetos


app = Flask(__name__)
CORS(app)

@app.route('/topicos')
def topicos():
    return jsonify(
        {"content":projetos,
        "pageable": {
            "sort": {
            "sorted": True,
            "unsorted": False,
            "empty": False
        },
                "offset": 0,
                "pageNumber": 0,
                "pageSize": 10,
                "paged": True,
                "unpaged": False
            },
            "totalPages": 1,
            "totalElements": 3,
            "last": True,
            "number": 0,
            "sort": {
                "sorted": True,
                "unsorted": False,
                "empty": False
            },
            "size": 10,
            "numberOfElements": 3,
            "first": True,
            "empty": False})

@app.route('/topicos/<int:id_projeto>')
def topico_detalhe(id_projeto):
    try:
        projeto = next(
            filter(lambda proj:proj['id']==id_projeto,projetos)
            )
    except StopIteration:
        return abort(404)
    return jsonify(
        projeto
        )

@app.route('/login',methods=["POST"])
def login():
    # import pdb;pdb.set_trace()
    return "",200    
from flask import Flask, request
from replit import db

app = Flask(__name__)

@app.route("/add-link", methods=["POST"])
def add_link():
  link = request.json.get("link")
  if link not in db.values():
    db[len(db)] = link
    return "Link added to database."
  else:
    return "Link already in database."

if __name__ == "__main__":
  app.run(port=8000)
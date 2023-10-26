#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, render_template, jsonify
from flask_restful import Resource, Api
from flask_mail import Mail, Message
from sqlalchemy.exc import IntegrityError

# Local imports
from config import app, db  # Assuming 'app' and 'db' are defined in 'config.py'

# Instantiate REST API
api = Api(app)

# Instantiate Flask-Mail
mail = Mail(app)

# Views go here!
@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template("index.html")

class SendEmail(Resource):
    def post(self):
        try:
            data = request.get_json()
            full_name = data['full_name']
            email = data['email']
            message = data['message']

            msg = Message('Contact Form Submission', sender=email, recipients=["chernandez@qqstudios.net"])
            msg.body = f'Name: {full_name}\nEmail: {email}\nMessage: {message}'

            mail.send(msg)
            return {'message': 'Email sent successfully'}, 200  # Return a JSON-serializable dictionary
        except Exception as e:
            print(str(e))
            return {'message': 'Error sending email'}, 500  # Return a JSON-serializable dictionary


api.add_resource(SendEmail, '/send-email')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

# Standard library imports
from dotenv import load_dotenv
load_dotenv()
import os

# Remote library imports
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from sqlalchemy import MetaData

# Local imports

# Instantiate app, set attributes
app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/build',
    template_folder='../client/build'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['MAIL_SERVER'] = "mail.qqstudios.net"
app.config['PORT'] = 993
app.config['MAIL_USERNAME'] = "chernandez@qqstudios.net"
app.config['MAIL_PASSWORD'] = "Extra004!"
app.config['MAIL_USE_LTS'] = True
app.secret_key = 'yjekwsjrfy826592grhkljsdghfkuseygioebfoliwecvrg33p948576cnloutqovn'
app.json.compact = False

# Define metadata, instantiate db
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
migrate = Migrate(app)

# Instantiate REST API
api = Api(app)

# Instantiate CORS
CORS(app)
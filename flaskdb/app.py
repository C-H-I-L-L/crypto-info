from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy import func
import os

from flask_cors import CORS, cross_origin



app = Flask(__name__)
CORS(app, supports_credentials=True)

# making it possible to create a SQLite database
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Blog(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=False)
    content = db.Column(db.String(30000), unique=False)
    published = db.Column(db.Boolean, default=False, unique=False)
    featured_image = db.Column(db.String(250), unique=False)
    

    def __init__(self, id, title, content, published, featured_image):
        self.id = id
        self.title = title
        self.content = content
        self.published = published
        self.featured_image = featuredImage

class BlogSchema(ma.Schema):
    class Meta:
        #todo: figure out
        # how to contact cloudinary and store pictures

        fields = ('title', 'content', 'published', 'featured_image', 'id')



post_schema = BlogSchema()
posts_schema = BlogSchema(many=True)


@app.route('/blogPost', methods=["POST"])
@cross_origin(supports_credentials=True)
def add_post():
    title = request.json['title']
    content = request.json['content']
    published = request.json['published']
    featured_image = request.json['featured_image']

    new_post = Blog(title, content, published, featured_image)

    db.session.add(new_post)
    db.session.commit()

    post =  Blog.query.get(new_post.id)

    return post_schema.jsonify(post)

@app.route('/blogPosts', methods=["GET"])
def get_posts():
    all_posts = Blog.query.all()
    result = posts_schema.dump(all_posts)
    count = len(all_posts)
    return jsonify(result,count)

@app.route("/blogPost/<id>", methods=["GET"])
def get_post(id):
    post = Blog.query.get(id)
    return post_schema.jsonify(post)


@app.route('/blogPost/<id>', methods=["PUT"])
@cross_origin(supports_credentials=True)
def post_update(id):
    post = Blog.query.get(id)
    title = request.json['title']
    content = request.json['content']
    published = request.json['published']
    featured_image = request.json['featured_image']

    post.title = title
    post.content = content
    post.published = published
    post.featured_image = featured_image

    db.session.commit()
    return post_schema.jsonify(post)

@app.route("/blogPost/<id>", methods=["DELETE"])
@cross_origin(supports_credentials=True)
def post_delete(id):
    post = Blog.query.get(id)
    db.session.delete(post)
    db.session.commit()

    return "Guide was successfully DELTETED"


if __name__ == '__main__':
    app.run(debug=True)









from flask import Flask, render_template,url_for,request,redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app = Flask(__name__)#созданияе объекта по файлу app
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
db = SQLAlchemy(app)


class Article(db.Model):
    idd = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Article %r>' % self.idd


@app.route('/logoipsum',methods=['POST','GET'])#страничка главная
@app.route('/',methods=['POST','GET'])#страничка главная
@app.route('/home',methods=['POST','GET'])#страничка главная
def Home():
    if request.method == "POST":
        name = request.form['name']
        email = request.form['email']
        article = Article(name=name, email=email)
        if(article.name=="" or article.email==""):
            #return "При добавлении статьи возникли ошибки!"
            return render_template("home.html", pos=1,name="",email="")#, article=article)
        try:
            db.session.add(article)
            db.session.commit()
            #return redirect('/home')
            return render_template("home.html", pos=2,name=article.name,email=article.email)#, article=article)
        except:
            #return "При добавлении статьи возникли ошибки!"
            return render_template("home.html", pos=1,name="",email="")#, article=article)
    else:
        return render_template("home.html", pos=0,name="",email="")


@app.route('/services')#страничка услуги
def Services():
    return render_template("services.html")


@app.route('/about')#страничка о компании
def About():
    return render_template("about.html")


@app.route('/contacts')#страничка контакты
def Contacts():
    return render_template("contacts.html")


if __name__ == "__main__":
    app.run(debug=True)
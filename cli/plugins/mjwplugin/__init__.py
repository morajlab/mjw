from .controllers import mjw


def extend_app(app):
    app.extend("mjw", mjw)


def load(app):
    app.hook.register("post_setup", extend_app)

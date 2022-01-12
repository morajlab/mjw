import os
from .controllers.mjwtemplateplugin import MJWTemplateHandler


def extend_app(app):
    # app.extend('template', example_func)
    pass


def load(app):
    app.hook.register("post_setup", extend_app)

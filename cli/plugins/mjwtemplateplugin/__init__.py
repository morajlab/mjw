import os
from .controllers.mjwtemplateplugin import MJWTemplatePlugin


def add_template_dir(app):
    path = os.path.join(os.path.dirname(__file__), "templates")
    app.add_template_dir(path)


def load(app):
    app.handler.register(MJWTemplatePlugin)
    app.hook.register("post_setup", add_template_dir)

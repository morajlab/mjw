from cement.core.template import TemplateHandler


class MJWTemplateHandler(TemplateHandler):
    def copy(self, src, dest, data, force=False, exclude=None, ignore=None):
        print("This is `MJWTemplateHandler`")

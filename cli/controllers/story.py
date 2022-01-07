from cement import Controller, ex

class Story(Controller):
  class Meta:
    label = 'story'
    stacked_on = 'base'
    stacked_type = 'embedded'

  @ex(help='Story command help')
  def story(self):
    """Story docstring"""

    self.app.render({}, 'story/main.ts.jinja2')

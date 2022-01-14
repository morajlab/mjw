import subprocess
from cement import Controller, ex
from ..core.path import getNodeBinPath, getPipEnvBinPath, getCurrentAbsPath


class Format(Controller):
    class Meta:
        label = "format"
        stacked_on = "base"
        stacked_type = "embedded"

    @ex(
        help="Format command help",
        arguments=[
            (
                ["path"],
                {"help": "[file/dir/glob ...]", "default": ".", "nargs": "?"},
            ),
            (
                ["-t", "--type"],
                {
                    "help": "Formatter type",
                    "choices": ["prettier", "black"],
                    "action": "store",
                    "dest": "type",
                },
            ),
            (
                ["-w", "--watch"],
                {
                    "help": "Watch mode",
                    "action": "store_true",
                    "dest": "watch",
                },
            ),
        ],
    )
    def format(self):
        """Format docstring"""

        subprocess.run(
            [
                getNodeBinPath("prettier"),
                getCurrentAbsPath(self.app.pargs.path),
                "--write",
                "--ignore-unknown",
            ],
            check=True,
        )
        subprocess.run(
            [getPipEnvBinPath("black"), getCurrentAbsPath(self.app.pargs.path)],
            check=True,
        )

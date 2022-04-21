from git import Repo

def checkout(path, branch):
  entry_repo = Repo(path)
  entry_repo.git.checkout(branch)

from settings import Useful

sInitialRoute = './pages'
sFinalRoute = './web'

aIgnore = ['src']
Useful.deleteFilesOrDirectories(sFinalRoute, aIgnore)
Useful.loadPagefiles(sInitialRoute, sFinalRoute)

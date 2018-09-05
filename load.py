from settings import Useful

sTemplateRoute = './settings/index.html'
sInitialRoute = './pages'
sFinalRoute = './web'

aIgnore = ['src']
Useful.deleteFilesOrDirectories(sFinalRoute, aIgnore)
Useful.loadPagefiles(sInitialRoute, sFinalRoute, sTemplateRoute)

import sys
from settings import Useful

sTemplateRoute = './settings/index.html'
sInitialRoute = './pages'
sFinalRoute = './web'
aIgnore = ['src']

sArgv = sys.argv[1]

if sArgv == '-l':
	Useful.deleteFilesOrDirectories(sFinalRoute, aIgnore)
	Useful.loadPagefiles(sInitialRoute, sFinalRoute, sTemplateRoute)

	print('OK')
else:
	print('Incorrect command')

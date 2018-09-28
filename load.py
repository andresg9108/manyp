#!/usr/bin/env python
import sys
from settings import Useful

sTemplateRoute = './settings/index.html'
sInitialRoute = './pages'
sFinalRoute = './web'
sFileLog = './manyp.log'
aIgnore = ['src']

sArgv = sys.argv[1]

if sArgv == '-l':
	Useful.deleteFilesOrDirectories(sFinalRoute, aIgnore)
	Useful.loadPagefiles(sInitialRoute, sFinalRoute, sTemplateRoute)
	Useful.loadLogs(sFileLog)

	print('OK')
else:
	print('Incorrect command')

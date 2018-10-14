#!/usr/bin/env python
import sys
from settings import useful

sTemplateRoute = './settings/index.html'
sInitialRoute = './pages'
sFinalRoute = './web'
sFileLog = './manyp.log'
aIgnore = ['src']

sArgv = sys.argv[1]

if sArgv == '-l':
	useful.deleteFilesOrDirectories(sFinalRoute, aIgnore)
	useful.loadPagefiles(sInitialRoute, sFinalRoute, sTemplateRoute)
	useful.loadLogs(sFileLog)

	print('OK')
else:
	print('Incorrect command')

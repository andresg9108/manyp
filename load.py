#!/usr/bin/env python
import sys
from settings import Useful
from livereload import Server, shell

sTemplateRoute = './settings/index.html'
sInitialRoute = './pages'
sFinalRoute = './web'
aIgnore = ['src']

sArgv = sys.argv[1]

if sArgv == '-l':
	Useful.deleteFilesOrDirectories(sFinalRoute, aIgnore)
	Useful.loadPagefiles(sInitialRoute, sFinalRoute, sTemplateRoute)

	print('OK')
elif sArgv == '-s':
	# http://localhost:5500/
	server = Server()
	server.watch('docs/*.rst', shell('make html', cwd='docs'))
	server.serve(root='docs/_build/html')
else:
	print('Incorrect command')

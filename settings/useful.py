import glob, sys, shutil
from os import mkdir, remove, path, scandir, getcwd

def loadPagefiles(sInitialRoute, sFinalRoute, sTemplateRoute):
	sHead = 'head.html'
	sBody = 'body.html'
	sIndex = 'index.html'

	if not path.exists(sInitialRoute):
		mkdir(sInitialRoute)
	if not path.exists(sFinalRoute):
		mkdir(sFinalRoute)

	if not path.isfile(sInitialRoute+'/'+sHead):
		oFile = open(sInitialRoute+'/'+sHead,"w")
		oFile.close()
	if not path.isfile(sInitialRoute+'/'+sBody):
		oFile = open(sInitialRoute+'/'+sBody,"w")
		oFile.close()

	aContentHead = getFileContent(sInitialRoute+'/'+sHead)
	aContentBody = getFileContent(sInitialRoute+'/'+sBody)

	aContentIndex = getFileContent(sTemplateRoute)
	writeIndexFile(sFinalRoute+'/'+sIndex, aContentIndex, '', [])
	aContentIndex = getFileContent(sFinalRoute+'/'+sIndex)
	writeIndexFile(sFinalRoute+'/'+sIndex, aContentIndex, '<!--headHTML-->', aContentHead)
	aContentIndex = getFileContent(sFinalRoute+'/'+sIndex)
	writeIndexFile(sFinalRoute+'/'+sIndex, aContentIndex, '<!--bodyHTML-->', aContentBody)

	aInitialRoute = lsDirectories(sInitialRoute)
	for sRoute in aInitialRoute:
		sSonInitialRoute = sInitialRoute+'/'+sRoute
		sSonFinalRoute = sFinalRoute+'/'+sRoute
		loadPagefiles(sSonInitialRoute, sSonFinalRoute, sTemplateRoute)

def writeIndexFile(sRoute, aContentIndex, sTag, aContentTag):
	oFile = open(sRoute, "w")

	for sLine in aContentIndex:
		if(sLine.replace(" ","").replace("\n","") == sTag):
			sLine = ''
			for sContentTag in aContentTag:
				sLine = sLine + sContentTag
			sLine = sLine + '\n'
		oFile.write(sLine)
	
	oFile.close()

def getFileContent(sRoute):
	aContent = []
	if path.isfile(sRoute):
		oFile = open(sRoute, "r")
		aContent = oFile.readlines()
		oFile.close()
	return aContent

def deleteFilesOrDirectories(sRoute, aIgnore = []):
	aSonRoute = lsAll(sRoute)
	for sSonRoute in aSonRoute:
		bRemove = 1
		for sIgnore in aIgnore:
			if sSonRoute == sIgnore:
				bRemove = 0
		if bRemove == 1:
			deleteFileOrDirectory(sRoute+'/'+sSonRoute)

def deleteFileOrDirectory(sRoute):
	if not path.isfile(sRoute):
		shutil.rmtree(sRoute)
	else:
		remove(sRoute)

def lsDirectories(sRoute = getcwd()):
    return [oFile.name for oFile in scandir(sRoute) if not oFile.is_file()]

def lsFiles(sRoute = getcwd()):
    return [oFile.name for oFile in scandir(sRoute) if oFile.is_file()]

def lsAll(sRoute = getcwd()):
    return [oFile.name for oFile in scandir(sRoute)]
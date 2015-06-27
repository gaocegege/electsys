#!/usr/bin/python
# -*- coding: utf-8 -*-
from openpyxl import load_workbook
import codecs

def bi(i):
	return 'B' + str(i)

def fi(i):
	return 'F' + str(i)

def typo(s):
	if s == u'人文学科':
		return '1'
	elif s == u'社会科学':
		return '2'
	elif s == u'自然科学与工程技术':
		return '3'
	else:
		# how to handle the math class?
		return '?'

def writeItem(lesson, typo):
	pass

wb = load_workbook(filename = 'new.xlsx')
sheet = wb['Sheet1']


f = codecs.open('lessonList.js', 'w', 'utf-8')
f.write('GE_list = { \n')

i = 2
item = sheet[bi(i)]
itemClass = sheet[fi(i)]
while item.value != None:
	f.write('\'' + item.value + '\': ' + typo(itemClass.value) + ',\n')
	i = i + 1
	item = sheet[bi(i)]
	itemClass = sheet[fi(i)]

f.write('};')
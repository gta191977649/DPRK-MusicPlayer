# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
from Library import *
def test():
    file = Library()
    file.scan()
    #test
    lib = file.getLibrary()
    if lib:
        for folder,aublum in lib.items():
            for song in aublum:
                print(song["id"])
                print(song["path"])

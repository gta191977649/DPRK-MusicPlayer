import glob, os
from pathlib import Path

class Library():
    id = 0
    Lirary = {}
    def scan(self):
        for root,dirs, files in os.walk("./library"):
            for file in files:
                if file.endswith(".mp3"):
                    if root not in self.Lirary:
                        self.Lirary[root] = []
                    # append to library
                    self.Lirary[root].append({
                        "id": self.id,
                        "path": root+file,
                        "name" :file
                    })
                    self.id = self.id + 1

    def getLibrary(self):
        return self.Lirary


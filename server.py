from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from fastapi.staticfiles import StaticFiles


from Library import *
origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
app.mount("/library", StaticFiles(directory="library"), name="library")

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}\

@app.get("/api/lib", tags=["root"])
async def read_root() -> dict:
    file = Library()
    file.scan()
    #test
    lib = file.getLibrary()
    return lib

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=3001, reload=True)
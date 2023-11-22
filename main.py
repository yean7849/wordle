

from fastapi import FastAPI

app = FastAPI()


@app.get("/hello")
def read_root():
    return {"message": "안녕하세요 저는 최영수입니다"}

@app.get("/")
def sayWelcome():
    return {"message": "환영합니다!"}


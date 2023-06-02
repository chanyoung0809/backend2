const express = require('express')
const app = express()
const port = 3000
/* 포트 번호 변경해도 됨. localhost:3000 */

//ejs 파일 사용하고 싶다면 터미널에서 npm install ejs 이후 
app.set("view engine","ejs") //입력(안내서- 템플릿 엔진 사용)
app.use(express.static('public'));

// 라우터 설정
app.get('/', (req, res) => {
    // res.send("메인페이지 접속")
    res.render("index") // index.ejs를 랜더링해줘.
})
app.get('/sub', (req, res) => {
    // res.send("메인페이지 접속")
    res.render("sub") // sub.ejs를 랜더링해줘.
})

// 서버 시작시 사용되는 코드
app.listen(port, () => {
    console.log("서버 정상동작중")
})
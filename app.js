const express = require("express"); //express 모듈 세팅
const app = express();
const port = 3000;
const path = require("path");

//변수선언
let data = "";
let search_phone = "";
let user_id = "";
let user_pw = "";

// x-www-form-urlencoded 방식, 객체 형태로 결과가 나옴
app.use(express.urlencoded({ extended: true }));
//json
app.use(express.json());
app.use(express.static("static"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 페이지 로딩 함수
app.get("/", function (req, res) {
  res.render("join");
});

app.get("/searchingid", function (req, res) {
  res.render("searchingid");
});

app.get("/searchingpw", function (req, res) {
  res.render("searchingpw");
});

app.get("/membership", function (req, res) {
  res.render("membership");
});

//회원가입 폼 입력 후 버튼 클릭
app.post("/memberForm", function (req, res) {
  //data = req.body; //post
  let datamap = req.body;
  //console.log("datamap", datamap);

  data = {
    name: datamap.name,
    id: datamap.id,
    gender: datamap.gender,
    pw: datamap.pw,
    phone: datamap.phone_first + datamap.phone_sec + datamap.phone_thr,
    birth: datamap.birth_year + datamap.birth_month + datamap.birth_day,
  };

  //console.log("data", data);
  res.render("join");
});

app.get("/userinfo", function (req, res) {
  //id가 이미 있다면 넣지 않기
  res.json(data);
});

//회원가입에서 id 중복 여부 파악
app.get("/userid", function (req, res) {
  res.json(data.name);
});

//아이디 찾기 버튼 클릭
app.get("/search_id", function (req, res) {
  search_phone = req.query;
  console.log("res", search_phone);

  //res.json(data);
  //res.render("searchingid");
});

// app.get("/find_id", function (req, res) {
//   console.log("search_phone", search_phone);
//   res.json(search_phone);
// });

//로그인 페이지 로그인 버튼 클릭
app.post("/loginForm", function (req, res) {
  let user_data = req.body;
  user_id = user_data.id;
  user_pw = user_data.pw;

  //console.log("user_id", user_id);
  res.render("welcome", { id: user_id, pw: user_pw });
});

app.get("/login", function (req, res) {
  //user_pw = user_data.pw;
  res.json(user_id);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

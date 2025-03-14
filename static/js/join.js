// 변수 선언 - DOM
const search_id = document.querySelector(".search_id");
const search_pw = document.querySelector(".search_pw");
const search_membership = document.querySelector(".search_membership");
const id = document.getElementById("id");
const pw = document.getElementById("pw");
const login = document.getElementById("login");

let local_data_map = JSON.parse(localStorage.getItem("data")) || [];
let local_data_id = []; // id만 있는 배열
local_data_map.map((element) => {
  local_data_id.push(element.id);
});
let local_data_pw = []; // 비밀번호만 있는 배열
local_data_map.map((element) => {
  local_data_pw.push(element.pw);
});

let id_row = false;

let isIdValid = false;
let isPwValid = false;

// sub menu 이동 - 아이디
search_id.addEventListener("click", () => {
  console.log("아이디 찾기 클릭");
  window.location.href = "/searchingid";
});

// sub menu 이동 - 비밀번호
search_pw.addEventListener("click", () => {
  console.log("비밀번호 찾기 클릭");
  window.location.href = "/searchingpw";
});

// sub menu 이동 - 회원가입
search_membership.addEventListener("click", () => {
  console.log("회원가입 클릭");
  window.location.href = "/membership";
});

fetch("/userinfo")
  .then((response) => response.json())
  .then((data) => {
    const updata_data = JSON.parse(JSON.stringify(data)); // data 형태변환
    let local_data = JSON.parse(localStorage.getItem("data")) || [];

    // 해당 하는 값이 이미 로컬에 있는 경우 안됨
    let exists = local_data.some((item) => item.id === updata_data.id);

    if (!exists) {
      local_data.push(updata_data);
      localStorage.setItem("data", JSON.stringify(local_data)); // 로컬 스토리지 저장
    }
  })
  .catch((e) => {
    console.error("error", e);
  });

// 아이디 확인 함수
function printid() {
  let userid = id.value;
  //console.log("local_data_id.indexOf(userid)", local_data_id.indexOf(userid));
  if (local_data_id.indexOf(userid) >= 0) {
    //값이 있는경우
    //checkForm(local_data_id.indexOf(userid)); //몇번째 배열에 있는지 확인
    id_row = local_data_id.indexOf(userid);
  } else {
    login.disabled = true;
  }
}

// 비밀번호 확인 함수
function printpw() {
  let userpw = pw.value;
  if (local_data_pw.indexOf(userpw) === id_row) {
    login.disabled = false;
  } else {
    login.disabled = true;
  }
}
window.onload = function () {
  login.disabled = true;
};

// 변수 선언 - DOM
const search_id = document.querySelector(".search_id");
const search_pw = document.querySelector(".search_pw");
const search_membership = document.querySelector(".search_membership");
const id = document.getElementById("id");
const pw = document.getElementById("pw");
const login = document.getElementById("login");

let local_data_map = JSON.parse(localStorage.getItem("data")) || [];

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
  // 아이디를 로컬 데이터에서 찾기
  let found = false;
  local_data_map.forEach((element) => {
    if (userid === element.id) {
      console.log("아이디 찾음", element);
      isIdValid = true;
      found = true;
    }
  });

  if (!found) {
    isIdValid = false;
  }
  checkForm();
}

// 비밀번호 확인 함수
function printpw() {
  let userpw = pw.value;
  // 비밀번호를 로컬 데이터에서 찾기
  let found = false;
  local_data_map.forEach((element) => {
    if (userpw === element.pw) {
      console.log("비밀번호 찾음", element);
      isPwValid = true;
      found = true;
    }
  });

  if (!found) {
    isPwValid = false;
  }
  checkForm();
}

// 폼 유효성 검사
function checkForm() {
  if (isIdValid && isPwValid) {
    login.disabled = false; // 아이디와 비밀번호가 모두 유효하면 버튼 활성화
  } else {
    login.disabled = true; // 하나라도 유효하지 않으면 버튼 비활성화
  }
}

window.onload = function () {
  login.disabled = true; // 페이지 로드 시 버튼 비활성화
};

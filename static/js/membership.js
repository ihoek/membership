//변수 선언 - dom
const input_id = document.getElementById("input_id");
const input_pw = document.getElementById("input_pw");
const input_repw = document.getElementById("input_repw");
const btn_join = document.getElementById("btn_join");

let id = "";
let pw = "";
let repw = "";

let local_data = JSON.parse(localStorage.getItem("data"));
let local_data_id = [];
local_data.map((element) => {
  local_data_id.push(element.id);
});

let isIdValid = false; // 아이디 중복 체크 여부
let isPwValid = false; // 비밀번호 확인 여부

//아이디 중복 확인
function printId() {
  id = input_id.value;
  //console.log("id", id);
}

//비밀번호 중복 확인
function printpw() {
  const pw_pattern = document.querySelector(".pw_pattern");
  pw = input_pw.value;

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (regex.test(pw)) {
    pw_pattern.innerText = "";
  } else {
    pw_pattern.innerText =
      "비밀번호는 8자리 이상이며, 대소문자, 숫자, 특수문자를 포함해야 합니다.";
    pw_pattern.style.color = "red"; // 유효하지 않으면 빨간색 테두리
  }
}
function printRepw() {
  repw = input_repw.value;
}

function check_pw() {
  if (pw === repw) {
    alert("확인했습니다");
    isPwValid = true;
  } else {
    alert("비밀번호가 맞지 않습니다.");
    isPwValid = false;
  }
  checkForm();
}
function check() {
  // console.log("id", typeof id);
  // console.log("localid", typeof local_data_id);
  /*input에 있는 id를 가지고 와서 비교 후 alert을 띄움*/
  if (local_data_id.indexOf(id) >= 0) {
    isIdValid = false;
    alert("아이디가 이미 있습니다.");
  } else {
    isIdValid = true;
    alert("사용가능합니다.");
  }

  checkForm();
}

function checkForm() {
  if (isIdValid && isPwValid) {
    btn_join.disabled = false; // 아이디와 비밀번호가 모두 유효하면 버튼 활성화
  } else {
    btn_join.disabled = true; // 하나라도 유효하지 않으면 버튼 비활성화
  }
}

window.onload = function () {
  btn_join.disabled = true;
};

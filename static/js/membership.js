//변수 선언 - dom
const input_id = document.getElementById("input_id");
const input_pw = document.getElementById("input_pw");
const input_repw = document.getElementById("input_repw");

let id = "";
let pw = "";
let repw = "";

//아이디 중복 확인
function printId() {
  id = input_id.value;
  //console.log("id", id);
}

//비밀번호 중복 확인
function printpw() {
  pw = input_pw.value;
}
function printRepw() {
  repw = input_repw.value;
}

function check_pw() {
  if (pw === repw) {
    alert("확인했습니다");
  } else {
    alert("비밀번호가 맞지 않습니다.");
  }
}
function check() {
  /*input에 있는 id를 가지고 와서 비교 후 alert을 띄움*/
  let local_data = localStorage.getItem("data");
  console.log("local", JSON.parse(local_data));

  JSON.parse(local_data).map((element) => {
    if (Number(id) == Number(element.id)) {
      alert("아이디가 이미 있습니다.");
      return;
    } else {
      alert("사용가능합니다.");
      return;
    }
  });
}

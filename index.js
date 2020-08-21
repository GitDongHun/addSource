/*#1 JSON 발작버튼*/
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() { // 요청에 대한 콜백
  if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
    if (xhr.status === 200 || xhr.status === 201) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.responseText);
    }
  }
  if (xhr.readyState === xhr.UNSENT) {
    console.log('unsent');
  }
  if (xhr.readyState === xhr.OPENED) {
    console.log('opened');
  }
  if (xhr.readyState === xhr.HEADERS_RECEIVED) {
    console.log('headers received');
  }
  if (xhr.readyState === xhr.LOADING) {
    console.log('loading');
  }
};
xhr.open('GET', './index.json'); // 메소드와 주소 설정
xhr.send(); // 요청 전송 
// xhr.abort(); // 전송된 요청 취소

/*##1버튼클릭해서 온습도 표시하기*/
window.document.body.onclick = function () {
    try {
        var tmp = 0;
        var e = window.event;
        var btn = e.target || e.srcElement;
        var load = document.querySelector("#Rdiv");
        if (btn.id == "b1") { tmp = 1; }
        else if (btn.id == "b2") { tmp = 2; }
        else if (btn.id == "bx") { tmp = 0; }
        else { tmp = -1; }
        if (tmp > 0) {
            load.innerHTML = tmp + "번기기<br>";
            load.innerHTML += "<form action='./index.json' method='post' id='submiter'>";
            var what=document.querySelector("#submiter");
            what.innerHTML += "<label for='s1'>자동</label>";
            what.innerHTML += "<input type='radio' id='s1' name='n1' checked/> ";
            what.innerHTML += "<label for='s2'>수동</label>";
            what.innerHTML += "<input type='radio' id='s2' name='n1'/><br>"
            what.innerHTML += "<label for='c1'>온도: </label>";
            what.innerHTML += "<input type='number' id='c1' size='3'/><br>";
            what.innerHTML += "<label for='c2'>습도: </label>";
            what.innerHTML += "<input type='number' id='c2' size='3'/><br>";
            what.innerHTML += "<input type='submit'/>";
            load.innerHTML += "";
        } else if (tmp == 0) {
            load.innerHTML = "없음";
        }
    }
    catch{
        alert("펑");
    }

}
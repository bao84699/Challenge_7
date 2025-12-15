let cau = document.querySelectorAll("button");

cau.forEach( button => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "cau1":
                cau1();
                break;
            case "cau2":
                cau2();
                break;
            case "cau3":
                cau3();
                break;
            case "cau4":
                cau4();
                break;
            case "cau5":
                cau5();
                break;
            case "cau6":
                cau6();
                break;
            case "cau7":
                cau7();
                break;
            case "cau8":
                cau8();
                break;
            case "cau9":
                cau9();
                break;
            case "cau10":
                cau10();
                break;
            case "cau11":
                cau11();
                break;
            case "cau12":
                cau12();
                break;
            case "cau13":
                cau13();
                break;
            case "cau14":
                cau14();
                break;
            case "cau15":
                cau15();
                break;
        }
    })
})

function cau1() {
    document.getElementById("box1").style.display = "none";
    let notice = document.getElementById("notice");
    notice.style.opacity = "1";
    notice.style.display = "flex";
    let time = Number(prompt("Nhập thời gian(mili giây): "));
    while (isNaN(time) || time <= 0) {
        time = Number(prompt("Nhập lại thời gian(mili giây): "));
    }
    setTimeout(() => {
        notice.style.display = "none";
    }, time);
    setTimeout(() => {
        notice.style.display = "flex";
    }, 2000 + time);
}

function cau2() {
    document.getElementById("box1").style.display = "none";
    let notice = document.getElementById("notice");
    notice.style.opacity = "1";
    notice.style.display = "flex";
    let time = Number(prompt("Nhập thời gian(mili giây): "));
    while (isNaN(time) || time <= 0) {
        time = Number(prompt("Nhập lại thời gian(mili giây): "));
    }
    setTimeout(() => {
        notice.style.opacity = "0";
    }, time);
    setTimeout(() => {
        notice.style.opacity = "1";
    }, time + 2000);
}

function cau3() {
    let notice = document.getElementById("notice");
    notice.style.opacity = "1";
    notice.style.display = "flex";
    document.getElementById("box1").style.display = "none";
    let noidung = prompt("Nhập nội dung muốn thay đổi");
    document.getElementById("discript").textContent = noidung;
}

function cau4(){
    let notice = document.getElementById("notice");
    notice.style.display = "none";
    let title = document.querySelectorAll(".title1");
    document.getElementById("box1").style.display = "flex";
    setTimeout(()=>{
        title.forEach(i => {
            i.style.color = "#ff0000";
        })
    },2000)
}

function cau5() {
    let time = Number(prompt("Nhập thời gian(mili giây): "));
    setTimeout(()=>{
        document.body.style.backgroundColor = "#ffb3b3";
    }, time)
}

function cau6() {
    let time = Number(prompt("Nhập thời gian(mili giây): "));
    setTimeout(()=>{
        document.getElementById("clickme").style.backgroundColor = "#00b54b";
        document.getElementById("clickme").style.width = "65";
        document.getElementById("clickme").style.height = "150";
    }, time);
}

function cau7() {
    let input = prompt("Nhập vào giá trị cần kiểm tra (cách  nhau bởi dấu phẩy): ");
    if (input.includes("7")){
        alert("Boom !")
    }
    else {
        alert("Không có số 7 trong mảng !");
    }
}

function cau8() {
    let input = prompt("Nhập các giá trị, cách nhau bằng dấu phẩy:");
    let a = input.split(",");
    let result = {};
    for (let i = 0; i < a.length; i++) {
        let value = a[i].trim();

        if (result[value] === undefined) {
            result[value] = 1;
        } else {
            result[value]+=1;
        }
    }
    let out = "";
    for (let key in result) {
        out += key + " : " + result[key] + "\n";
    }
    alert(out);
    }

function cau9() {
    let n = Number(prompt("Nhập số cần kiểm tra:"));
    let s = 0;
    let d = n.toString();

    for (let i = 0; i < d.length; i++) {
        s += Number(d[i]) ** (i + 1);
    }

    if (s == n){
        alert("true");
    }
    else {
        alert("false");
    }
}

function cau10() {
    let str = prompt("Nhập chuỗi:");
    let c1 = prompt("Nhập ký tự thứ nhất:");
    let c2 = prompt("Nhập ký tự thứ hai:");

    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === c1) {
            result += c2;
        } else if (str[i] === c2) {
            result += c1;
        } else {
            result += str[i];
        }
    }

    alert(result);
}


function cau11() {
    let n = Number(prompt("Nhập số cần kiểm tra: "));
    if (n < 0) {
        alert("Không phải số pronic");
        return;
    }
    let kt = false;
    for (let k = 0; k * (k + 1) <= n; k++) {
        if (k * (k + 1) === n) {
            kt = true;
            break;
        }
    } 
    if (kt) {
        alert("true");
    } else {
        alert("false");
    }
}

function cau12() {
    let input = prompt("Nhập chuỗi cần chuyển đổi sang camelCase: ");
    if (typeof input !== 'string' || input.length === 0) {
        alert("Không hợp lệ !");
        return;
    }
    let chuoiThuong = input.toLowerCase();
    let chuoiCamelCase = chuoiThuong.replace(/[\s_]+(.)/g, (khopHoanToan, kyTuDau) => {
        return kyTuDau.toUpperCase();
    });

    alert(chuoiCamelCase);
}

function cau13() {
    let s = prompt("Nhập chuỗi cần kiểm tra: ");
    let nho = {};

    for (let i = 0; i < s.length; i++) {
        if (nho[s[i]]) {
            alert(s[i]);
            return;
        }
        nho[s[i]] = 1;
    }

    alert("-1");
}


function cau14() {
    let input = prompt("Nhập các từ, cách nhau bằng dấu phẩy:");
    if (!input) return;
    let arr = input.split(","); // tách từ theo dấu phẩy
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim(); // loại bỏ khoảng trắng
    }
    let count = {};
    let out = [];
    for (let i = 0; i < arr.length; i++) {
        let w = arr[i];
        if (count[w] === undefined) {
            count[w] = 1;
        } else {
            count[w] += 1;
        }
    }
    for (let w in count) {
        if (count[w] > 1) {
            out.push(w + "s");
        } else {
            out.push(w);
        }
    }
    let result = "";
    for (let i = 0; i < out.length; i++) {
        result += out[i];
        if (i < out.length - 1) {
            result += ", ";
        }
    }
    alert(result);
}

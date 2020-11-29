/* bài làm tôt lắm đúng công thức. các chứ số cố định nên gán vào một biến để có thể tái 
* sử dụng, dễ quản lí và nâng cấp về sau.
* chua hoan thành bai tập,vi người dùng bình thường sẽ không dùng đến màn hình console mà phải in ra màn hình
* ex: vảr firstMinusUberX = 8000;
* .....
*/
document
  .getElementsByClassName("contact100-form-btn")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("uberSUV").checked;
    document.getElementsByClassName("uberBlack").checked;
    var txtKm = document.getElementsByClassName("input100")[0].value;
    var txtTime = document.getElementsByClassName("input100")[1].value;
    function checkMoney(
      valueFirst,
      valueSecond,
      valueThird,
      valueWait,
      totalCheck
    ) {
      if (txtKm <= 1 && txtKm > 0) {
        totalCheck = valueFirst + valueWait;
        console.log(totalCheck + "vnđ");
      } else if (txtKm > 1 && txtKm <= 20) {
        totalCheck = valueSecond + valueFirst + valueWait;
        console.log(totalCheck + "vnđ");
      } else if (txtKm > 21) {
        totalCheck = valueThird + valueWait;
        console.log(totalCheck + "vnđ");
      }
    }
    if (
      document.getElementById("uberX").checked
    ) {
      checkMoney(
        8000,
        12000 * (txtKm - 1),
        8000 + 12000 * 19 + 10000 * (txtKm - 20),
        txtTime * 2000,
        0
      );
    } else if (
      document.getElementById("uberSUV").checked
    ) {
      checkMoney(
        9000,
        14000 * (txtKm - 1),
        9000 + 14000 * 19 + 12000 * (txtKm - 20),
        txtTime * 3000,
        0
      );
    } else if (
      document.getElementById("uberBlack").checked
    ) {
      checkMoney(
        10000,
        16000 * (txtKm - 1),
        10000 + 16000 * 19 + 14000 * (txtKm - 20),
        txtTime * 4000,
        0
      );
    } else {
      var nullAlert = alert("Vui lòng chọn loại xe");
      console.log(nullAlert);
    }
    if(txtKm == 0){
      var nullInfoAlert = alert("Vui lòng nhập số km và thời gian chờ");
      console.log(nullInfoAlert);
    }
  });

// function reset() {
//   //Make ccplayerList and baozimoplayerList invisible

//   $("#label4").css("display", "none");
//   $("#ccplayerList").css("display", "none");
//   $("#label5").css("display", "none");
//   $("#baozimoplayerList").css("display", "none");

//   $("#fanshuList").val("");
//   $("#winnerList").val("");
//   $("#cczmList").val("");
//   $("#ccplayerList").val("none");
//   $("#baozimoplayerList").val("none");

//   $("#fanshuList option").prop("disabled", false);
//   $("#winnerList option").prop("disabled", false);
//   $("#cczmList option").prop("disabled", false);

//   // Set the value to 'none' or 'NA' for other lists
// }

function fanshuControl() {
  const fanshuValue = $("#fanshuList").val();

  if (fanshuValue == "和局") {
    $("#ng, #ng1, #ng3").css("display", "block");
    $("#ng2, #mw, #se").css("display", "none");
    $("#mw1, #mw2, #mw3, #mw4, #mw5").css("display", "block");

    $("#label2, #winnerList, #label3, #cczmList, #form1Button").css(
      "display",
      "inline-block"
    );

    $(
      "#label6, #label7, #winner1List, #fanshu1List, #editbutton2, #okbutton2"
    ).css("display", "inline-block");
    $(
      "#label8, #label9, #winner2List, #fanshu2List, #editbutton3, #okbutton3"
    ).css("display", "inline-block");
    $(
      "#label10, #label11, #winner3List, #fanshu3List, #editbutton4, #okbutton4"
    ).css("display", "inline-block");
    $("#editbutton5, #form2Button").css("display", "inline-block");

    $("#winnerList option, #cczmList option").prop("disabled", true);

    $("#winnerList").val("none");
    $("#cczmList").val("NA");
  } else if (fanshuValue == "雞糊") {
    $("#ng, #ng1, #ng3").css("display", "block");
    $("#ng2, #mw, #se").css("display", "none");
    $("#mw1, #mw2, #mw3, #mw4, #mw5").css("display", "block");

    $("#label2, #winnerList, #label3, #cczmList, #form1Button").css(
      "display",
      "inline-block"
    );

    $(
      "#label6, #label7, #winner1List, #fanshu1List, #editbutton2, #okbutton2"
    ).css("display", "inline-block");
    $(
      "#label8, #label9, #winner2List, #fanshu2List, #editbutton3, #okbutton3"
    ).css("display", "inline-block");
    $(
      "#label10, #label11, #winner3List, #fanshu3List, #editbutton4, #okbutton4"
    ).css("display", "inline-block");
    $("#editbutton5, #form2Button").css("display", "inline-block");

    //$("#ccplayerList, #baozimoplayerList").val("none");
    $("#winnerList option, #cczmList option").prop("disabled", false);
    $("#winnerList, #cczmList").val("");
    $(
      "#winnerList option[value='none'], #cczmList option[value='NA'], #cczmList option[value='自摸'], #cczmList option[value='(包)自摸']"
    ).prop("disabled", true);
  } else if (fanshuValue == "雙響") {
    $("#ng, #ng1, #mw, #mw1").css("display", "block");
    $("#ng2, #ng3, #mw2, #mw3, #mw4, #mw5, #se").css("display", "none");

    $("#label2, #winnerList, #label3, #cczmList").css("display", "none");

    $("#cczmList, winnerList, #ccplayerList, #baozimoplayerList").val("");

    $(
      "#winnerList option, #cczmList option, #ccplayerList option, #baozimoplayerList option"
    ).prop("disabled", false);

    $(
      "#label12, #label13, #okbutton1, #ccplayerListSpecial, #cczmListSpecial"
    ).css("display", "inline-block");
    $(
      "#label6, #label7, #winner1List, #fanshu1List, #editbutton2, #okbutton2"
    ).css("display", "inline-block");
    $(
      "#label8, #label9, #winner2List, #fanshu2List, #editbutton3, #okbutton3"
    ).css("display", "inline-block");
    $(
      "#label10, #label11, #winner3List, #fanshu3List, #editbutton4, #okbutton4"
    ).css("display", "inline-block");
    $("#editbutton5, #form2Button").css("display", "inline-block");

    // $("#label10, #winner3List, #label11, #fanshu3List").css("display", "none");

    $(
      "#winner1List, #fanshu1List, #winner2List, #fanshu2List, #winner3List, #fanshu3List, #ccplayerListSpecial, #cczmListSpecial"
    ).prop("disabled", false);

    $(
      "#winner1List, #winner2List, #winner3List, #fanshu1List, #fanshu2List, #fanshu3List, #ccplayerListSpecial, #cczmListSpecial"
    ).val("");
  } else if (fanshuValue == "三響") {
    $("#ng, #ng1, #mw, #mw1").css("display", "block");
    $("#ng2, #ng3, #mw2, #mw3, #mw4, #mw5, #se").css("display", "none");

    $("#label2, #winnerList, #label3, #cczmList").css("display", "none");

    $("#cczmList, winnerList, #ccplayerList, #baozimoplayerList").val("");

    $(
      "#winnerList option, #cczmList option, #ccplayerList option, #baozimoplayerList option"
    ).prop("disabled", false);

    $(
      "#label12, #label13, #okbutton1, #ccplayerListSpecial, #cczmListSpecial"
    ).css("display", "inline-block");
    $(
      "#label6, #label7, #winner1List, #fanshu1List, #editbutton2, #okbutton2"
    ).css("display", "inline-block");
    $(
      "#label8, #label9, #winner2List, #fanshu2List, #editbutton3, #okbutton3"
    ).css("display", "inline-block");
    $(
      "#label10, #label11, #winner3List, #fanshu3List, #editbutton4, #okbutton4"
    ).css("display", "inline-block");
    $("#editbutton5, #form2Button").css("display", "inline-block");

    $(
      "#winner1List, #fanshu1List, #winner2List, #fanshu2List, #winner3List, #fanshu3List, #ccplayerListSpecial, #cczmListSpecial"
    ).prop("disabled", false);

    $(
      "#winner1List, #winner2List, #winner3List, #fanshu1List, #fanshu2List, #fanshu3List, #ccplayerListSpecial, #cczmListSpecial"
    ).val("");

    $(
      "#winner3List option[value='none'], #fanshu3List option[value='none']"
    ).prop("disabled", true);
  } else {
    $("#ng, #ng1, #ng3 #mw, #mw1").css("display", "block");
    $("#ng2, #mw, #se").css("display", "none");
    $("#mw1, #mw2, #mw3, #mw4, #mw5").css("display", "block");

    $("#label2, #winnerList, #label3, #cczmList, #ng3, #form1Button").css(
      "display",
      "inline-block"
    );

    $(
      "#label12, #label13, #okbutton1, #ccplayerListSpecial, #cczmListSpecial"
    ).css("display", "inline-block");
    $(
      "#label6, #label7, #winner1List, #fanshu1List, #editbutton2, #okbutton2"
    ).css("display", "inline-block");
    $(
      "#label8, #label9, #winner2List, #fanshu2List, #editbutton3, #okbutton3"
    ).css("display", "inline-block");
    $(
      "#label10, #label11, #winner3List, #fanshu3List, #editbutton4, #okbutton4"
    ).css("display", "inline-block");
    $("#editbutton5, #form2Button").css("display", "inline-block");

    $("#ccplayerList, #baozimoplayerList").val("none");
    $("#winnerList option, #cczmList option").prop("disabled", false);
    $("#winnerList, #cczmList").val("");
    $("#winnerList option[value='none'], #cczmList option[value='NA']").prop(
      "disabled",
      true
    );
  }
}

function cczmControl() {
  const cczmValue = $("#cczmList").val(); // Use .val() to get the selected value

  if (cczmValue == "自摸") {
    $("#ng2").css("display", "none");
    $("#ccplayerList, #baozimoplayerList").val("none");
  } else if (cczmValue == "打出" || cczmValue == "(包)出冲") {
    $("#ng2").css("display", "inline-block");
    $("#label5, #baozimoplayerList").css("display", "none");
    $("#baozimoplayerList").val("none");
    $("#label4, #ccplayerList").css("display", "inline-block");
    $("#ccplayerList").val("");
    $("#fanshuList option").prop("disabled", false);
    //$("#fanshuList option[value='和局']").prop("disabled", true);
  } else if (cczmValue == "(包)自摸") {
    $("#ng2").css("display", "inline-block");
    $("#label4, #ccplayerList").css("display", "none");
    $("#ccplayerList").val("none");
    $("#label5, #baozimoplayerList").css("display", "inline-block");
    $("#baozimoplayerList").val("");
  }
}

function winnerControl() {
  const winner = $("#winnerList").val(); // Get the selected value of winnerList

  $("#ccplayerList option, #baozimoplayerList option").prop("disabled", false);
  $(
    "#ccplayerList option[value='" +
      winner +
      "'], #ccplayerList option[value='none'], #baozimoplayerList option[value='" +
      winner +
      "'], #baozimoplayerList option[value='none']"
  ).prop("disabled", true);
}

function ccplayerControl() {
  const ccplayer = $("#ccplayerList").val(); // Get the selected value of winnerList

  $("#winnerList option").prop("disabled", false);
  $(
    "#winnerList option[value='" +
      ccplayer +
      "'], #winnerList option[value='none']"
  ).prop("disabled", true);
}

function baozimoplayerControl() {
  const baozimoplayer = $("#baozimoplayerList").val(); // Get the selected value of winnerList

  $("#winnerList option").prop("disabled", false);
  $(
    "#winnerList option[value='" +
      baozimoplayer +
      "'], #winnerList option[value='none']"
  ).prop("disabled", true);
}

function editGameAlert() {
  return confirm("遊戲最後一局的資料將被刪除, 確認修改？");
}

function endGame() {
  if (confirm("遊戲將會結束，所有資料將被刪除，確認結束？")) {
    window.close();
  } else {
    return;
  }
}

function showWinner1() {
  if (
    $("#cczmListSpecial").val() === null ||
    $("#cczmListSpecial").val() === "" ||
    $("#ccplayerListSpecial").val() === null ||
    $("#ccplayerListSpecial").val() === ""
  ) {
    alert("請選擇胡牌類型和輸家。");
  } else {
    $("#cczmListSpecial, #ccplayerListSpecial").prop("disabled", true);
    $("#mw2").css("display", "block");
    $("#editbutton2, #okbutton2").css("display", "inline-block");
    $("#okbutton1").css("display", "none");

    const ccplayerSpecial = $("#ccplayerListSpecial").val(); // Get the selected value of winnerList

    $("#winner1List option, #winner2List option, #winner3List option").prop(
      "disabled",
      false
    );

    if (ccplayerSpecial) {
      $("#winner1List option[value='" + ccplayerSpecial + "']").prop(
        "disabled",
        true
      );
      $("#winner2List option[value='" + ccplayerSpecial + "']").prop(
        "disabled",
        true
      );
      $("#winner3List option[value='" + ccplayerSpecial + "']").prop(
        "disabled",
        true
      );
    }
  }
}

function showWinner2() {
  if (
    $("#winner1List").val() === null ||
    $("#winner1List").val() === "" ||
    $("#fanshu1List").val() === null ||
    $("#fanshu1List").val() === ""
  ) {
    alert("請選擇贏家和番數。");
  } else {
    $("#winner1List, #fanshu1List").prop("disabled", true);
    $("#mw3").css("display", "block");
    $("#okbutton2, #editbutton2").css("display", "none");
    $("#okbutton3, #editbutton3").css("display", "inline-block");
    const winner1 = $("#winner1List").val(); // Get the selected value of winnerList

    if (winner1) {
      $("#winner2List option[value='" + winner1 + "']").prop("disabled", true);
      $("#winner3List option[value='" + winner1 + "']").prop("disabled", true);
    }
  }
}

function showWinner3() {
  if (
    $("#winner2List").val() === null ||
    $("#winner2List").val() === "" ||
    $("#fanshu2List").val() === null ||
    $("#fanshu2List").val() === ""
  ) {
    alert("請選擇贏家和番數。");
  } else {
    $("#winner2List, #fanshu2List").prop("disabled", true);
    if ($("#fanshuList").val() === "雙響") {
      $("#mw5").css("display", "block");
      $("#okbutton3, #editbutton3").css("display", "none");
    } else if ($("#fanshuList").val() === "三響") {
      $("#mw4").css("display", "block");
      $("#okbutton3, #editbutton3").css("display", "none");
      $("#okbutton4, #editbutton4").css("display", "inline-block");
      const winner2 = $("#winner2List").val(); // Get the selected value of winnerList

      if (winner2) {
        $("#winner3List option[value='" + winner2 + "']").prop(
          "disabled",
          true
        );
      }
    }
  }
}

function showForm2Button() {
  if (
    $("#winner3List").val() === null ||
    $("#winner3List").val() === "" ||
    $("#fanshu3List").val() === null ||
    $("#fanshu3List").val() === ""
  ) {
    alert("請選擇贏家和番數。");
  } else {
    $("#winner3List, #fanshu3List").prop("disabled", true);
    $("#mw5").css("display", "block");
    $("#okbutton4, #editbutton4").css("display", "none");
  }
}

function edit() {
  $("#mw2, #mw3, #mw4, #mw5").css("display", "none");
  $(
    "#winner1List, #winner2List, #winner3List, #fanshu1List, #fanshu2List, #fanshu3List, #ccplayerListSpecial, #cczmListSpecial"
  ).prop("disabled", false);
  $("#winner1List, #winner2List, #fanshu1List, #fanshu2List").val("");
  $("#winner3List, #fanshu3List").val("none");
  $("#okbutton1").css("display", "inline-block");
}

function specialEntry() {
  $("#ng, #mw").css("display", "none");
  $("#se").css("display", "block");
  $("#p1amount, #p2amount, #p3amount, #p4amount, #nextZhuang").val("");
}

function cancelSpecialEntry() {
  $("#mw, #se").css("display", "none");
  $("#ng").css("display", "block");
  $("#p1amount, #p2amount, #p3amount, #p4amount, #nextZhuang").val("");
}

function sumCheck(event) {
  const inputAmountSum =
    parseFloat($("#p1amount").val()) +
    parseFloat($("#p2amount").val()) +
    parseFloat($("#p3amount").val()) +
    parseFloat($("#p4amount").val());

  if (inputAmountSum !== 0) {
    const userConfirmed = confirm("输入的輸贏金額總和不等於零。繼續？");

    if (!userConfirmed) {
      event.preventDefault(); // Stop form submission
      return false;
    }

    return true; // Allow form submission if confirmed
  }
}

function shuffleornot() {
  $("#endorcontinue").css("display", "none");
  $("#shuffleornot").css("display", "block");
}

function noshuffle() {
  $("#shuffleornot").css("display", "none");
  $("#ng, #lastRow").css("display", "block");
}

function toshuffle() {
  // $("#shuffleornot").css("display", "none");
  // $("#howtoshuffle").css("display", "block");
}

// function showauto() {
//   $("#howtoshuffle").css("display", "none");
//   $("#auto").css("display", "block");
// }

// function showself() {
//   $("#howtoshuffle").css("display", "none");
//   $("#self").css("display", "block");
// }

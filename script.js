$(function () {
  //what radio value did they select?

  let userData = ["Email", "Password"];
  let userJSON = {
    email: "name@email.com",
    pswd: "pass"
  };

  $("#loadData").click(() => {
    console.log("in button click event");

    $("#email").val(userJSON.email);
    $("#pswd").val(userJSON.pswd);
  });
  
  $("#resetData").click(() => {
    console.log("in button click event");
    location.reload();
    console.log("Form Reset");
  });

  $(".reveal").on("click", function () {
    let $pwd = $("#pswd");

    if ($pwd.attr("type") === "password") {
      $pwd.attr("type", "text");
      $(this)
        .children("i")
        .addClass("bi-eye-slash-fill")
        .removeClass("bi-eye-fill");
    } else {
      $pwd.attr("type", "password");
      $(this)
        .children("i")
        .removeClass("bi-eye-slash-fill")
        .addClass("bi-eye-fill");
    }
  });

  $("input[type=radio]").on("change", function () {
    // var $this = $(this);
    // if ($this.is(":checked")) alert("a");

    let radioChoice = $("input[type=radio]:checked").val(); // A or B
    let newWordList = getWords(radioChoice);
    console.log(newWordList);

    let optionList = "";

    for (i = 0; i < newWordList.length; i++) {
      optionList += `<option value=" ${newWordList[i]} ">${newWordList[i]} </option>`;
    }
    console.log(optionList);

    $("#letterWordsSelect").empty().append(optionList);
  });

  $("#submitForm").on("click", (e) => {
    e.preventDefault();

    console.log("clicked the button");

    let dataStuff = `{ "letterSelected:" " ${$(
      "input[type=radio]:checked"
    ).val()} " }`;

    console.log(dataStuff);
    
    document.getElementById("subscription").reset();   
    $("#letterWordsSelect").empty().append(optionList);

    console.log("Form Reset");

  });
});

function getWords(letter) {
  console.log("in f/n getWords, here the paramter: ", letter);

  let petWordArray = ["cat", "dog", "fish", "bird"];
  let noPetWordArray = ["fruit", "pasta", "bbq", "tacos"];

  if (letter === "A") {
    return petWordArray;
  } else if (letter === "B") {
    return noPetWordArray;
  } else {
    return ["please select a letter"];
  }
  
}
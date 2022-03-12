document.querySelector("#textbtn").click();
document
  .querySelectorAll(
    "label input[style='font-size: 1.5em; width: 1em; height: 1em; float: left; margin-right: 0.5em;']"
  )
  .forEach((elem) => {
    elem.click();
  });
document.querySelector("input[value='Confirm & continue']").click();

let msg = `Hey, how is it going?`;

function executeOmegle() {
  // click recaptcha button
  setTimeout(() => {
    document.querySelector(".recaptcha-checkbox-border").click();
  }, 2000);
  document.querySelector(".disconnectbtn").click();
  document.querySelector(".chatmsg").innerHTML = msg;
  document.querySelector(".sendbtn").click();
}

setInterval(executeOmegle, 4000);


document.querySelector("#textbtn").click();
document
  .querySelectorAll(
    "label input[style='font-size: 1.5em; width: 1em; height: 1em; float: left; margin-right: 0.5em;']"
  )
  .forEach((elem) => {
    elem.click();
  });
document.querySelector("input[value='Confirm & continue']").click();

let i = 0;

// skip if first message of strangers matches this pattern/regex
let regex = /https?|www|.com|@|ig|insta|snap|whatsapp|wpp/i;

// skip if first message of stranger are one of this messages
let skipMsgs = [];

// first message that will be sent to stranger
let msg = 'Hoi';

function executeOmegle() {
  let status = document.querySelectorAll("p.statuslog");
  let lastStatus = status[status.length - 1];
  let msgs = document.querySelectorAll("p.strangermsg span");

  if (msgs.length <= 1) {
    document.querySelector(".chatmsg").innerHTML = msg;
    setTimeout(() => {
      document.querySelector(".sendbtn").click();
    }, 1000);
  }
  if (
    //lastStatus.innerText === "Stranger has disconnected." ||
    lastStatus.innerText.includes("disconnected") ||
    regex.test(msgs[0].innerText) ||
    skipMsgs.indexOf(msgs[0]) > -1
  ) {
    document.querySelector(".disconnectbtn").click();
  }
  i++;
}

let omegleBot = setInterval(executeOmegle, 1000);

function toggleBot() {
    if (omegleBot) {
        clearInterval(omegleBot);
        omegleBot = null;
        console.log("Bot deactivated.");
    } else {
        omegleBot = setInterval(executeOmegle, 1000);
        console.log("Bot activated.");
    }
}

document.addEventListener("keydown", e => {
    if (e.key === "F2") toggleBot();
});


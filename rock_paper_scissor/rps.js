const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const userOption = document.getElementById('user-option');
const comOption = document.getElementById('com-option');
const statusPara = document.getElementById('result-para');
let userSelection;
let comSelection;
let status;

function computer() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      comOption.setAttribute('src','./images/rock.jpg');
      comSelection = 0;
      break;
    case 1:
      comOption.setAttribute('src','./images/paper.jpg');
      comSelection = 1;
      break;
    case 2:
      comOption.setAttribute('src','./images/scissor.jpg');
      comSelection = 2;
      break;  
  }
}

function evaluate() {
  if (userSelection === 0) {
    if (comSelection === 0) {
      status = 'draw';
    } else if (comSelection === 1) {
      status = 'lost';
    } else if (comSelection === 2) {
      status = 'win';  
    }
  } else if (userSelection === 1) {
    if (comSelection === 0) {
      status = 'win';  
    } else if (comSelection === 1) {
      status = 'draw';
    } else if (comSelection === 2) {
      status = 'lost';
    }
  } else if (userSelection === 2) {
    if (comSelection === 0) {
        status = 'lost';  
      } else if (comSelection === 1) {
        status = 'win';
      } else if (comSelection === 2) {
        status = 'draw';
      }
  }
  statusPara.innerHTML = status;
}

function statusColor() {
  if (status === 'win') {
    statusPara.style.backgroundColor = 'green';
  } else if (status === 'lost') {
    statusPara.style.backgroundColor = 'red';
  } else {
    statusPara.style.backgroundColor = 'grey';
  }
}

rock.addEventListener('click', () => {
  userOption.setAttribute('src','./images/rock.jpg');
  userSelection = 0;
  computer();
  evaluate();
  statusColor();
});
paper.addEventListener('click', () => {
  userOption.setAttribute('src','./images/paper.jpg');
  userSelection = 1;
  computer();
  evaluate();
  statusColor();
});
scissor.addEventListener('click', () => {
  userOption.setAttribute('src','./images/scissor.jpg');
  userSelection = 2;
  computer();
  evaluate();
  statusColor();
});
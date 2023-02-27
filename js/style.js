let serialNumber = 0;
//traingel calculate
document.getElementById("firstCard").addEventListener("click", function () {
  serialNumber += 1;
  const tringelName = document.getElementById("title").innerText;
  const tringelFirst = getData("inputFild");
  const tringelSecond = getData("inputFillds");
  const totaltringel = 0.5 * tringelFirst * tringelSecond;
  const areaoftringel = totaltringel.toFixed(2);

  // validation of display data function for each

  if (validation(tringelFirst, tringelSecond)) {
    displayData(tringelName, areaoftringel);
    nullVelue("inputFild");
    nullVelue("inputFillds");
  } else {
    alert("please enter any valid number");
    serialNumber--;
  }
});

//rectengel calculate
document.getElementById("secondCard").addEventListener("click", function () {
  serialNumber += 1;
  const rectengelName = document.getElementById("rectengelTitle").innerText;
  const rectengelFirst = getData("firstInput");
  const rectengelSecond = getData("secondInput");
  const rectengelTotal = rectengelFirst * rectengelSecond;
  const areaofrectengel = rectengelTotal.toFixed(2);

  // validation of display data function for each

  if (validation(rectengelFirst, rectengelSecond)) {
    displayData(rectengelName, areaofrectengel);
    nullVelue("firstInput");
    nullVelue("secondInput");
  } else {
    alert("please enter any valid number");
    serialNumber -= 1;
  }
});

// Parallelogram calculate
document
  .getElementById("ParallelogramCard")
  .addEventListener("click", function () {
    serialNumber += 1;
    const ParallelogramName =
      document.getElementById("ParallelogramTitel").innerText;
    const ParallelogramFirst = getData("ParallelogramFirst");
    const ParallelogramSecond = getData("ParallelogramSecond");
    const ParallelogramTotal = ParallelogramFirst * ParallelogramSecond;
    const areaofparall = ParallelogramTotal.toFixed(2);

    // validation of display data function for each

    if (validation(ParallelogramFirst, ParallelogramSecond)) {
      displayData(ParallelogramName, areaofparall);
      nullVelue("ParallelogramFirst");
      nullVelue("ParallelogramSecond");
    } else {
      alert("please enter any valid number");
      serialNumber -= 1;
    }
  });

//Rombus calculate

document.getElementById("rombusCard").addEventListener("click", function () {
  serialNumber += 1;
  const rombusName = document.getElementById("rombusTitle").innerText;
  const rombusFirst = getData("rombusInput");
  const rombusSecond = getData("rombusSecond");
  const totalRombus = 0.5 * rombusFirst * rombusSecond;
  const areaofRombus = totalRombus.toFixed(2);

  // validation of display data function for each
  if (validation(rombusFirst, rombusSecond)) {
    displayData(rombusName, areaofRombus);
    nullVelue("rombusInput");
    nullVelue("rombusSecond");
  } else {
    alert("please enter any valid number");
    serialNumber -= 1;
  }
});

//Pentagon calculate
document.getElementById("PentagonCard").addEventListener("click", function () {
  serialNumber += 1;
  const pentagonName = document.getElementById("pentagonTitle").innerText;
  const pentagonFirst = getData("pentagonInput");
  const pentagonSecond = getData("pentagonSecond");
  const totalpentagon = 0.5 * pentagonFirst * pentagonSecond;
  const areaofpentagon = totalpentagon.toFixed(2);

  // validation of display data function for each

  if (validation(pentagonFirst, pentagonSecond)) {
    displayData(pentagonName, areaofpentagon);
    nullVelue("pentagonInput");
    nullVelue("pentagonSecond");
  } else {
    alert("please enter any valid number");
    serialNumber -= 1;
  }
});

// Ellipse calculate
document.getElementById("EllipseCard").addEventListener("click", function () {
  serialNumber += 1;
  const ellipseName = document.getElementById("ellipseTitle").innerText;
  const ellipseFirst = getData("ellipseInput");
  const ellipseSecond = getData("ellipseSecond");
  const totalellipse = 3.14 * ellipseFirst * ellipseSecond;
  const areaofellipse = totalellipse.toFixed(2);

  // validation of display data function for each

  if (validation(ellipseFirst, ellipseSecond)) {
    displayData(ellipseName, areaofellipse);
    nullVelue("ellipseInput");
    nullVelue("ellipseSecond");
  } else {
    alert("please enter any valid number");
    serialNumber -= 1;
  }
});

// common function to display data
function displayData(titleof, total) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serialNumber}</td>
    <td>${titleof}</td>
    <td>${total}</td>
    
    <td>
    <button class="btn btn-sm ">Covert to m<sup>2</sup></button>
    </td>
  `;

  container.appendChild(tr);
}

// common function to get data
function getData(id) {
  const getInput = document.getElementById(id).value;
  const commonGet = parseFloat(getInput);
  return commonGet;
}

//null value function
function nullVelue(id) {
  const nullString = document.getElementById(id);
  nullString.value = "";
}

// velidation of code

function validation(a, b) {
  if (a === 1 || b === 1) {
    return true;
  }
  if (isNaN(Number) != a && isNaN(Number) != b) {
    if (a >= 0 && b >= 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Random color selection on card

const generateColor = document.querySelectorAll(".generateColor");

generateColor.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    card.style.backgroundColor = "#" + randomColor;
  });

  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "#" + randomColor;
  });
});

// bloger page show with even handelar

document.getElementById("bolgerSite").addEventListener("click", function () {
  window.location.href = "/bloger.html";
});

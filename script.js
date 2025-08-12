const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const price = document.querySelectorAll(".price");
  let sum = 0;
  price.forEach(cell => {
    const val = parseFloat(cell.textContent);
    if (!isNaN(val)) {
      sum += val;
    }
  });
  let totalRow = document.getElementById("total");
  if (!totalRow) {
    totalRow = document.createElement("tr");
    totalRow.id = "total";
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2; 
    totalCell.textContent = `Total Price: ${sum}`;
    totalRow.appendChild(totalCell);
    document.querySelector("table").appendChild(totalRow);
  } else {
    totalRow.querySelector("td").textContent = `Total Price: ${sum}`;
  }
};

getSumBtn.addEventListener("click", getSum);

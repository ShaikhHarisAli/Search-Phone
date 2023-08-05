"use strict";

let arr = [
  {
    brand: "Samsung",
    model: "A30",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "A10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "A20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Vivo",
    model: "Y20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "Y11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "Y15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
  },
  {
    brand: "Motorola",
    model: "123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Iphone",
    model: "12",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "13",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "X",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
];
const company = document.getElementById("company");
const model = document.getElementById("model");
const table = document.getElementById("table");

function modelFunc() {
  const modelOptions = arr.filter((el) => el.brand === company.value);
  console.log(modelOptions);
  model.innerHTML = "";
  for (let i = 0; i < modelOptions.length; i++) {
    model.innerHTML += `<option unselected value="${modelOptions[i].model}">${modelOptions[i].model}</option>`;
  }
}

function search() {
  const filteredObj = arr
    .filter((el) => el.brand === company.value && el.model === model.value)
    .forEach((el) => {
      table.innerHTML = `<tr>
        <td><strong>BRAND</strong></td>
        <td>${el.brand}</td></tr>

        <tr><td><strong>MODEL</strong></td>
        <td>${el.model}</td></tr>

        <tr><td><strong>CAMERA</strong></td>
        <td>${el.camera}</td></tr>

        <tr><td><strong>RAM</strong></td>
        <td>${el.ram}</td></tr>

        <tr><td><strong>ROM</strong></td>
        <td>${el.rom}</td></tr>

        <tr><td><strong>PRICE</strong></td>
        <td>${el.price}</td></tr>`;
    });
}

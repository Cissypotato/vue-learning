<template>
  <div>
    <span>foo</span>
    <div class="wrapper">
      <div class="item"><p>1</p></div>
      <div class="item"><p>2</p></div>
      <div class="item"><p>3</p></div>
      <div class="item"><p>4</p></div>
      <div class="item"><p>5</p></div>
      <div class="item"><p>6</p></div>
      <div class="item"><p>7</p></div>
      <div class="item"><p>8</p></div>
      <div class="item"><p>9</p></div>
      <div class="item"><p>10</p></div>
      <div class="item"><p>11</p></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "grid",
  data() {
    return {};
  },
};
</script>

<style>
.wrapper {
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  border: 1px solid green;
  display: grid;
  /* grid-template-columns:33.33% 33.33% 33.33%; */
  /* grid-template-columns: repeat(auto-fill,100px 100px 100px); */
  /* grid-template-columns:1fr 1fr 1fr; */
  /* grid-template-columns: 50px auto 100px;  */
  grid-template-columns: [c1] 100px [c2] 100px [c3] 100px [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] 100px [r4];
  /* grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px; */

  /* grid-row-gap:20px ;
  grid-column-gap: 10px; */
  /* row-gap: 20px;
  column-gap: 10px; */
  grid-gap: 6px 6px;

  grid-template-areas: "a b c" "d e f" "g h i";

  /* grid-auto-flow: column; */

  /* justify-items: center; 
    align-items: center;
    place-items: center end;
  */

  grid-auto-rows: 50px;
}
.item {
  /* border: 1px solid red; */
}
.item:nth-child(1) {
  background: pink;
  /* grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3; */

  /* grid-column-start: c1;
  grid-column-end: c3;
  grid-row-start: r2;
  grid-row-end: r3; */

  /* grid-column-start:span 2; */

/* grid-column: 1/3;
grid-row: 2/4; */

/* grid-column: 1/span 2;
grid-row: 2/span 3; */

grid-area: f;
  
}
.item:nth-child(2) {
  background: rgb(192, 95, 111);
}
.item:nth-child(3) {
  background: rgb(122, 26, 42);
}
.item:nth-child(5) {
  background: green;
}
.item:nth-child(6) {
  background: rgb(6, 70, 6);
}
.item:nth-child(4) {
  background: rgb(181, 224, 181);
}
.item:nth-child(7) {
  background: rgb(238, 238, 177);
}
.item:nth-child(8) {
  background: rgb(241, 241, 72);
}
.item:nth-child(9) {
  background: rgb(143, 143, 0);
}
</style>
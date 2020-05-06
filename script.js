import "vis.min.js";
  
var el = document.getElementById("timeline");

var items = new vis.DataSet([
  { id: 1, content: "عطار", start: "524",end: "599" },
  { id: 2, content: "حافظ", start: "693" ,end: "768"},
  { id: 3, content: "سعدي", start: "589" ,end: "670"},
  { id: 4, content: "غزالي", start: "436" ,end:"489"},
  { id: 5, content: "رازي", start: "243" ,end: "304"},
  { id: 8, content: "جابر بن حیان", start: "0099" ,end: "193" },
  { id: 6, content: "سنايي", start: "458" ,end: "519"},
  { id: 7, content: "ابن سينا", start: "359" ,end: "416"}
]);
// Configuration for the Timeline
var options = {
  showCurrentTime: false,
  selectable: false,
  width: "100%",
  margin: {
    item: 10
  }
};
var timeline = new vis.Timeline(el, items, options);

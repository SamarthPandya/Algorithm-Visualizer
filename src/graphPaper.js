import "./graphPaper.css";

function createBox() {
  var all = [];
  for (var i = 0; i < 1150; i++) {
    all.push(i);
  }
  return (
    <div className="box" id="box">
      {all.map(function (item, i) {
        var i = String(Math.floor(item / 50));
        var j = String(item % 50);
        return <div data-row={i} data-col={j} className="cell"></div>;
      })}
    </div>
  );
}

export { createBox };

import "./console.css";
import { SortTimer } from "./App";
function Console() {
  var container = document.getElementById("console");
  return (
    <div className="cont">
      <div className="stats">
        <div className="swaps">
          <div className="swapLabel">Swaps</div>
          <div className="swapCount" id="swaps">
            0
          </div>
        </div>
        <div className="memAccess">
          <div className="memAccessLabel">Accesses</div>
          <div className="memAccessCount" id="mem">
            0
          </div>
        </div>
      </div>
      <div className="console" id="console"></div>
    </div>
  );
}

export default Console;

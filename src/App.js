import "./App.css";
import React from "react";
import Console from "./console";
import { useState } from "react";
import { insertionSort } from "./insertionSort";
import { BubbleSort } from "./bubbleSort";
import { heapSort } from "./heapSort";
import { quickSort } from "./quickSort";
import { selectionSort } from "./selectionSort";
import { cocktailShakerSort } from "./cocktailShakerSort";
import {
  randomArray,
  descendingArray,
  nearlySortedArray,
  nsa,
} from "./generator";
import { createBox } from "./graphPaper";

function App(props) {
  var m = 0;
  const [isPaused, setIsPaused] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [size, setSize] = useState(0);
  const [arr, setArr] = useState(0);
  const [algo, SetAlgo] = useState(0);
  const [delay, setDelay] = useState(1);
  const dels = [1, 100, 350, 500, 700];
  function Timer(props) {
    return (
      <div className="timer">
        <span className="digits">
          {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
          {("0" + ((props.time / 10) % 100)).slice(-2)}
        </span>
      </div>
    );
  }
  function StopWatch() {
    React.useEffect(() => {
      let interval = null;

      if (isActive && isPaused === false) {
        interval = setInterval(() => {
          setTime((time) => time + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
      return () => {
        clearInterval(interval);
      };
    }, [isActive, isPaused]);

    return (
      <div className="stop-watch">
        <Timer time={time} />
      </div>
    );
  }
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  if (m == 0) {
    function Preferences() {
      async function clearConsole() {
        var container = document.getElementById("console");
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
      function handleclick() {
        handleReset();
        clearConsole();
        document.getElementById("go").disabled = false;
        document.getElementById("range").disabled = false;
        document.getElementById("swaps").innerHTML = 0;
        document.getElementById("mem").innerHTML = 0;
        /*var container = document.getElementById("console");
      for (var i = 0; i < size; i++) {
        // Return a value from 1 to 100 (both inclusive)
        var value = Math.ceil(Math.random() * 100);

        // Creating element div
        var array_ele = document.createElement("div");

        // Adding class 'block' to div
        array_ele.classList.add("block");

        // Adding style to div
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.width = `${1000 / (11 * size - 1)}%`;
        array_ele.style.transform = `translate(${i * 110}%)`;

        // Creating label element for displaying
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        // Appending created elements to index.html
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
      }*/
        if (arr == 0) {
          descendingArray(size);
        } else if (arr == 1) {
          randomArray(size);
        } else if (arr == 2) {
          nsa(size);
        }
      }
      function handlePeriodChange(selVal) {
        this.props.handlePeriodChange(selVal);
      }

      return (
        <div className="preferences">
          <form className="preferences">
            <input
              placeholder="Size"
              id="size"
              type="Number"
              value={size}
              onChange={(e) =>
                e.target.value <= 1000 ? setSize(e.target.value) : setSize(1000)
              }
            ></input>
            <select
              onChange={(event) => {
                setArr(event.target.options.selectedIndex);
                console.log(arr);
              }}
            >
              <option value="Descending">Descending</option>
              <option value="Random">Random</option>
              <option value="Nearly Sorted">Sorted pieces</option>
            </select>
            <select
              onChange={(event) => {
                SetAlgo(event.target.options.selectedIndex);
                console.log(algo);
              }}
            >
              <option value="Quick sort">Quick sort</option>
              <option value="Insertion sort">insertion sort</option>
              <option value="Bubble sort">Bubble sort</option>
              <option value="selection sort">Selection sort</option>
              <option value="Heap sort">Heap sort</option>
              <option value="Cocktail sort">Cocktail sort</option>
            </select>
            <button
              type="button"
              id="generate"
              onClick={handleclick}
              defaultValue="false"
            >
              Generate
            </button>
            <button type="submit" id="go" onClick={part} defaultValue="false">
              go
            </button>
            <input
              id="range"
              type="range"
              min={1}
              max={5}
              step={1}
              value={delay}
              onChange={(event) => {
                setDelay(event.target.valueAsNumber);
              }}
            />
            <p>Delay = {delay * 10}x</p>
            {StopWatch()}
          </form>
        </div>
      );
      async function part() {
        document.getElementById("go").disabled = true;
        document.getElementById("range").disabled = true;
        document.getElementById("swaps").innerHTML = 0;
        handleStart();
        if (algo == 0) {
          await quickSort(0, size - 1, dels[delay - 1]);
        } else if (algo == 1) {
          await insertionSort(dels[delay - 1]);
          console.log("Stop");
        } else if (algo == 2) {
          await BubbleSort(dels[delay - 1]);
        } else if (algo == 3) {
          await selectionSort();
        } else if (algo == 4) {
          await heapSort(size, dels[delay - 1]);
        } else if (algo == 5) {
          await cocktailShakerSort(size, dels[delay - 1]);
        }
        setIsPaused(true);
        document.getElementById("go").disabled = false;
        document.getElementById("range").disabled = false;
      }
    }
    return (
      <div className="app" id="app">
        {Preferences()}
        <Console />
      </div>
    );
  } else {
    return <div className="app">{createBox()}</div>;
  }
}
export default App;

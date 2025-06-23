import React, { useEffect, useState, useRef } from "react";
import "./cardgame.css";

const LEVELS = {
  1: { size: 3, minTiles: 1, maxTiles: 3, time: 7 },
  2: { size: 4, minTiles: 3, maxTiles: 6, time: 6 },
  3: { size: 5, minTiles: 5, maxTiles: 9, time: 5 }
};

const THEMES = {
  red:    "#e74c3c",
  blue:   "#3498db",
  yellow: "#f1c40f"
};

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const generateSet = (size, count) => {
  const set = new Set();
  while (set.size < count) set.add(randInt(0, size * size - 1));
  return set;
};

function Tile({ idx, isFlashing, isSelected, disabled, onClick, themeColor }) {
  const background = isFlashing
    ? themeColor
    : isSelected
    ? "#7f8c8d"
    : "#ecf0f1";

  return (
    <button
      className="cg-tile"
      style={{ background }}
      disabled={disabled}
      onClick={() => !disabled && onClick(idx)}
    />
  );
}

function Board({
  size,
  flashingSet,
  selectionSet,
  handleTileClick,
  inputEnabled,
  themeColor
}) {
  const style = { gridTemplateColumns: `repeat(${size}, 60px)` };
  return (
    <div className="cg-board" style={style}>
      {Array.from({ length: size * size }, (_, idx) => (
        <Tile
          key={idx}
          idx={idx}
          isFlashing={flashingSet.has(idx)}
          isSelected={selectionSet.has(idx)}
          disabled={!inputEnabled}
          onClick={handleTileClick}
          themeColor={themeColor}
        />
      ))}
    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */
export default function Cardgame() {
  const [stage, setStage] = useState("menu");
  const [level, setLevel] = useState(1);
  const [theme, setTheme] = useState("red");

  const [round, setRound]   = useState(1);
  const [flashingSet, setFlashingSet] = useState(new Set());
  const [selectionSet, setSelectionSet] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(0);

  const timerRef = useRef(null);
  const themeColor = THEMES[theme];
  const { size }  = LEVELS[level];

  const clearTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const resetGame = () => {
    clearTimer();
    setStage("menu");
    setRound(1);
    setFlashingSet(new Set());
    setSelectionSet(new Set());
  };
  const startRound = (roundNumber, lvl) => {
    const cfg   = LEVELS[lvl];
    const count = randInt(cfg.minTiles, cfg.maxTiles);
    setFlashingSet(generateSet(cfg.size, count));
    setSelectionSet(new Set());
    setTimeLeft(cfg.time);
    setStage("flash");
    setTimeout(() => setStage("input"), 1000); // reveal pattern 1 s
  };
  const startGame = () => {
    setRound(1);
    startRound(1, level);
  };

  useEffect(() => {
    if (stage !== "input") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearTimer();
          setStage("gameover");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return clearTimer;
  }, [stage]);

  const handleTileClick = (idx) => {
    if (selectionSet.has(idx) || stage !== "input") return;

    // wrong pick
    if (!flashingSet.has(idx)) {
      clearTimer();
      setStage("gameover");
      return;
    }

    // correct pick
    const newSel = new Set(selectionSet).add(idx);
    setSelectionSet(newSel);

    // finished round
    if (newSel.size === flashingSet.size) {
      clearTimer();
      setStage("transition");
      setTimeout(() => {
        if (round === 10) {
          setStage("win");
        } else {
          const next = round + 1;
          setRound(next);
          startRound(next, level);
        }
      }, 600);
    }
  };

  return (
    //ONLY TOUCH HERE IF YOU WANT TO CHANGE BG
    <div className="cardgame-background">
      {/* ---------- MENU ---------- */}
      {stage === "menu" && (
        <div className="cg-screen cg-menu">
          <h1>CardGame: Memory Tiles</h1>
          <section>
            <h3>Select Level</h3>
            {[1, 2, 3].map((lvl) => (
              <button
                key={lvl}
                className={`cg-btn ${lvl === level ? "active" : ""}`}
                onClick={() => setLevel(lvl)}
              >
                {lvl}
              </button>
            ))}
          </section>
          <section>
            <h3>Select Theme</h3>
            {Object.keys(THEMES).map((th) => (
              <button
                key={th}
                className="cg-btn"
                style={{
                  background: THEMES[th],
                  opacity: th === theme ? 1 : 0.6,
                  color: th === "yellow" ? "#2c3e50" : "#fff"
                }}
                onClick={() => setTheme(th)}
              >
                {th}
              </button>
            ))}
          </section>
          <button className="cg-play" onClick={startGame}>
            PLAY
          </button>
        </div>
      )}

      {/* ---------- WIN / GAMEOVER ---------- */}
      {(stage === "win" || stage === "gameover") && (
        <div
          className={`cg-screen ${
            stage === "win" ? "cg-win" : "cg-loss"
          }`}
        >
          <h1>{stage === "win" ? "🎉 You Win!" : "Game Over"}</h1>
          <button className="cg-btn" onClick={resetGame}>
            Back to Menu
          </button>
        </div>
      )}

      {/* ---------- MAIN GAME ---------- */}
      {["flash", "input", "transition"].includes(stage) && (
        <div className="cg-screen cg-game">
          <h2>
            Round {round} / 10&nbsp;•&nbsp;Time&nbsp;{timeLeft}s
          </h2>

          <Board
            size={size}
            flashingSet={stage === "flash" ? flashingSet : new Set()}
            selectionSet={selectionSet}
            handleTileClick={handleTileClick}
            inputEnabled={stage === "input"}
            themeColor={themeColor}
          />
        </div>
      )}
    </div>
  );
}

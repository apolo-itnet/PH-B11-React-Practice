import { useState } from "react"

export default function Batsman (){

  const [runs, setRuns] = useState(0);
  const [fours, setFours] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [balls, setBalls] = useState(0.0);
  const [isOver, setIsOver] = useState(false);
  // const [strikeRate, setStrikeRate] = useState(0);
  // const [isStrike, setIsStrike] = useState(false);
  // const [isOut, setIsOut] = useState(false);
  // const [isNotOut, setIsNotOut] = useState(false);
  // const [isRetired, setIsRetired] = useState(false);
  // const [isDuck, setIsDuck] = useState(false);
  // const [isNoBall, setIsNoBall] = useState(false);
  // const [isWide, setIsWide] = useState(false);
  // const [isBye, setIsBye] = useState(false);
  // const [isMatchOver, setIsMatchOver] = useState(false);
  // const [isMatchStarted, setIsMatchStarted] = useState(false);
  // const [isMatchFinished, setIsMatchFinished] = useState(false);
  // const [isMatchTied, setIsMatchTied] = useState(false);
  // const [isMatchWon, setIsMatchWon] = useState(false);
  // const [isMatchLost, setIsMatchLost] = useState(false);
  // const [isMatchDrawn, setIsMatchDrawn] = useState(false);
  // const [isMatchAbandoned, setIsMatchAbandoned] = useState(false);
  // const [isMatchCancelled, setIsMatchCancelled] = useState(false);
  // const [isMatchPostponed, setIsMatchPostponed] = useState(false);
  // const [isMatchRescheduled, setIsMatchRescheduled] = useState(false);
  // const [isMatchDelayed, setIsMatchDelayed] = useState(false);
  // const [isMatchStartedTime, setIsMatchStartedTime] = useState(null);
  // const [isMatchFinishedTime, setIsMatchFinishedTime] = useState(null);
  // const [isMatchTieBreaker, setIsMatchTieBreaker] = useState(null);



  const handleSingle = ()=> {
    setRuns(runs + 1);
  }

  const handleFour = ()=> {
    setRuns(runs + 4);
    setFours(fours + 1);
  }

  const handleSix = ()=> {
    setRuns(runs + 6);
    setSixes(sixes + 1);
  }

  const handleBalls = () => {
    setBalls(balls + 1);

    const isOver = balls >= 6;
    setIsOver(isOver);

    if (isOver) {
      setBalls(0);
    } 

    setIsOver(isOver + 1);

  }
 

  return (
    <div>
      <h3>Bangladesh</h3>

      <h1>Score: {runs} </h1>
      <h2>Four: {fours} </h2>
      <h2>Six: {sixes} </h2>
      <h2>Ball : {balls} - Over : {isOver}</h2>
           
      {
        runs > 50 && <p>Bangladesh reach Score: 50</p>

      }

      <button onClick={handleBalls}>Balls</button>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>


  )

}
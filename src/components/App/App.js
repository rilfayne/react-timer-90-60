import React from 'react'
import './App.css'
import '../../vendor/normalize.css'
import '../../fonts/fonts.css'
import Timer from '../Timer/Timer'
import Button from '../Button/Button'

function App() {
    const [time, setTime] = React.useState(90)
    const [isLaunched, setIsLaunched] = React.useState(false)
    const [startTime, setStartTime] = React.useState(90)

    function handleTimeClick() {
        if (time === 90) {
            setTime(60)
            setStartTime(60)
        } else if (time === 60) {
            setTime(90)
            setStartTime(90)
        } else {
            return false
        }
    }

    function startTimer() {
        setIsLaunched(!isLaunched)
    }

    React.useEffect(()=>{
        if (isLaunched) {
            let myInterval = setInterval(() => {
                if (time > 0) {
                    setTime(time - 1)
                }
                if (time === 0) {
                    clearInterval(myInterval)
                }
            }, 1000)
            return ()=> {
                clearInterval(myInterval)
            }
        } else {
            setIsLaunched(false)
            setTime(startTime)
        }
    }, [isLaunched, time, startTime])

  return (
    <div className="page">
      <Timer
          isLaunched={ isLaunched }
          time={ time }
          onTimeClick={ handleTimeClick }
      />
      <div className="navigation">
        <Button
            onStartTimer={ startTimer }
            isLaunched={ isLaunched }
        />
      </div>
    </div>
  )
}

export default App

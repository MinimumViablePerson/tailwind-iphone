import { Background } from './components/Background'
import { Phone } from './components/Phone'
import { Display } from './components/Display'
import { TopInfo } from './components/TopInfo'
import { Lock } from './components/Lock'
import { TimeTop } from './components/TimeTop'
import { Time } from './components/Time'
import { Widgets } from './components/Widgets'
import { Notifications } from './components/Notifications'
import { LightAndCamera } from './components/LightAndCamera'
import { DraggingBar } from './components/DraggingBar'

function App () {
  return (
    <Background>
      <Phone>
        <Display>
          <TopInfo />
          <Lock />
          <TimeTop />
          <Time />
          <Widgets />
          <Notifications />
          <LightAndCamera />
          <DraggingBar />
        </Display>
      </Phone>
    </Background>
  )
}

export default App

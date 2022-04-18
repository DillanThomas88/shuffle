import {ReactComponent as Arrow} from './arrow-down.svg'
import {ReactComponent as Menu} from './menu.svg'
import {ReactComponent as Close} from './close.svg'
import {ReactComponent as Wormi} from './wormi.svg'
import {ReactComponent as Paint} from './paint.svg'
import {ReactComponent as Pause} from './pause.svg'
import {ReactComponent as Play} from './play.svg'
import {ReactComponent as Share} from './share.svg'

function SVG({title, classes, id}) {
    const svg = {
        arrow: <Arrow id={id} className={`${classes} scale-150`} />,
        menu: <Menu className={classes} />,
        close: <Close className={classes} />,
        wormi: <Wormi className={classes} />,
        paint: <Paint className={classes} />,
        pause: <Pause className={classes} />,
        play: <Play className={classes} />,
        share: <Share className={classes} />,
    }
    return(<>
        {svg[title]}
    </>)
}

export default SVG
import dollarIcon from '../../assets/Price.png'
import calendarIcon from '../../assets/calendar.png'
import fileIcon from '../../assets/file.png'
import reportIcon from '../../assets/statistics-report.png'

function Icons(props) {
    const { type } = props

    const showIcon = type => {
        switch (type) {
            case 'dollar':
                return dollarIcon
            case 'file':
                return fileIcon
            case 'report':
                return reportIcon
            case 'calendar':
                return calendarIcon

            default: return null;
        }
    }

    return showIcon(type)
}

export default Icons;
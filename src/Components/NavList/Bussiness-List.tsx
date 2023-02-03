import './navList.scss'
import { IconType } from "react-icons/lib";

type ListProps = {
  List:{
    id:number
    Logo: IconType;
    name: string
  }[]
}

export const BusinessList = (props: ListProps) => {
  return (
    <div className='nav'>
      {
        props.List.map(list => {
          return (        
          <ul className='sidebarList'>
                <li className='sidebarListItem'>
                  <div className='sidebarIcon'>{<list.Logo/>}</div>
                  <span className='sidebarListItemText'>{list.name}</span>
              </li>
          </ul> 
        )
      })
    }

    </div>
  )
}


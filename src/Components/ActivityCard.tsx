import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';




import Typography from '@mui/material/Typography'
import { FaWalking,FaRunning,FaCarCrash } from 'react-icons/fa'
import { GiPerson } from 'react-icons/gi'
import { IconType } from 'react-icons';
import { MdAccessibility} from "react-icons/md";


interface TitleProp {
    activityName?:string,
    icon:JSX.Element
}

export default function ActivityCard({ activityName,icon }: TitleProp) {
  return (

    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      

      <Typography variant="h5" component="div">
      {icon}
      </Typography>
      <Typography>
      { activityName}
        <br />
      
      </Typography>
    </CardContent>
  
  </Card>
  )
}

import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './TodoCard.css'

const TodoCard = (props) => {

    let id = props.id
    
    return (
        <div className='card-wrapper'>
            <Card sx={{ 
                display: 'flex',
                width: '25rem',
                
             }}>

                <CardContent sx={{
                    width :'50%'
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                </CardContent>

                <CardActions sx={{
                    display: 'flex',
                    
                    justifyContent: 'end'
                }}>
                    {props.isCompleted === false ? <Button size="small" onClick={()=>props.complete(id)}  sx={{
                        color:'black'
                    }}>Complete</Button>:<></>}
                    <Button size="small" onClick={()=>props.delete(id)} sx={{
                        color:'black'
                    }}>Delete</Button>
                </CardActions>
            </Card>
            </div>
    )
}

export default TodoCard;
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { List,
         ListItem,
         ListItemAvatar,
         Avatar,
         ListItemText,
         ListItemSecondaryAction,
         IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
  bullet: {
    display: 'inline-block',
    margin: '0 3px',
    transform: 'scale(0.8)',
  }
}))

const NoteList = ({ notes }) => {
  const classes = useStyles()

  const bull = <span className={classes.bullet}>•</span>

  return (
    <List>
      { notes.map(note => (
        <ListItem key={note.id} 
                  button
                  component={ Link }
                  to={`/${note.slug}`}
                  >
          <ListItemAvatar>
            <Avatar>{ note.title.charAt(0) }</Avatar>
          </ListItemAvatar>
          <ListItemText primary={note.title}
                        secondary={
                          <span>
                            { moment(note.modified).fromNow() }
                            { bull }
                            { note.tags.join(', ') }
                          </span>
                        }
                        />
          <ListItemSecondaryAction>
            <IconButton component={Link}
                        to={`/${note.slug}/edit`}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

export default NoteList;

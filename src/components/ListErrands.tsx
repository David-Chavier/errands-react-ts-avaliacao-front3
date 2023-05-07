import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { Avatar, ListItemAvatar } from '@mui/material';
import imgBase from '../images/imgBase.png';
import { useAppSelector } from '../store/hooks';
import React, { useState } from 'react';

import CustomizedDialogs from './Details';

export interface SearchReceived {
  GetSearch: string;
}

const ListErrands: React.FC<SearchReceived> = ({ GetSearch }) => {
  const loggedUser = useAppSelector(state => state.login);

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleOpenDialog = (id: string) => {
    setSelectedItemId(id);
    setOpenDialog(!openDialog);
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {openDialog && selectedItemId !== null && (
        <CustomizedDialogs noteId={selectedItemId} setStateModal={setOpenDialog} stateModal={openDialog} />
      )}

      {loggedUser.notes
        .filter(item => item.description.includes(GetSearch))
        .map((value, index) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton
                  id={index.toString()}
                  onClick={() => handleOpenDialog(index.toString())}
                  edge="end"
                  aria-label="comments"
                >
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemAvatar>
                  <Avatar alt={`Avatar n°${imgBase}`} src={imgBase} />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`(${index + 1}) ${value.description}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
};

export default ListErrands;

import React, { ReactElement } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

interface Props {
  icon: any;
  secondaryText: string;
  primaryText: string;
}

export default function ListItems({
  icon,
  primaryText,
  secondaryText,
}: Props): ReactElement {
  return (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
}

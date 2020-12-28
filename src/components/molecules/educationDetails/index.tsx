import React, { ReactElement } from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ScoreIcon from '@material-ui/icons/Score';
import DetailsIcon from '@material-ui/icons/Details';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { join } from 'lodash';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ListItems from '../../atoms/List/listItems';
import { educationData } from '../../../redux/actionTypes';

interface Props {
  classes: any;
  handleOpenList: (id: string) => void;
  openList: string | null;
  data: educationData;
}

export default function EducationDetailsBox({
  classes,
  handleOpenList,
  openList,
  data,
}: Props): ReactElement {
  return (
    <Paper className={classes.educationBox} key={data.id} elevation={3}>
      <Typography variant="h5">
        Graduate {data.degree} @ {data.university?.name}
      </Typography>
      <Typography variant="caption">
        From {data.startYear} to {data.endYear}
      </Typography>
      <List component="nav" aria-labelledby="list" className={classes.root}>
        <ListItems
          primaryText="Degree"
          secondaryText={data.degree}
          icon={<SchoolIcon />}
        />
        <ListItems
          primaryText="Feild Of Study"
          secondaryText={data.fieldOfStudy}
          icon={<MenuBookIcon />}
        />
        <ListItems
          primaryText="Grade"
          secondaryText={data.grade}
          icon={<ScoreIcon />}
        />
        <ListItems
          primaryText="Discription"
          secondaryText={data.discription}
          icon={<DetailsIcon />}
        />
        <ListItem button onClick={() => handleOpenList(data.id)}>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="University" secondary="Click To Expand..." />
          {openList === data.id ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openList === data.id} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemIcon>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText primary="Name" secondary={data.university?.name} />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemIcon>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText
                primary="Country"
                secondary={`${data.university?.country} (${data.university?.alpha_two_code})`}
              />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemIcon>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText
                primary="State"
                secondary={data.university?.['state-province']}
              />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemIcon>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText
                primary="Website"
                secondary={join(data.university?.web_pages, ', ')}
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Paper>
  );
}

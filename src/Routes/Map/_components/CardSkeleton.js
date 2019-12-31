import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
import { List, ListItem, ListItemIcon } from '@material-ui/core';
import {
  Restaurant,
  LocalOffer,
  RateReview,
  Directions,
  LocationOn,
  More
} from '@material-ui/icons';

const CardSkeleton = props => {
  const { classes } = props;

  return (
    <div className={classes.detailModalCard}>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        className={classes.cardImage}
      >
        <Skeleton disableAnimate height={'95%'} width={'100%'} variant='rect' />
      </div>
      <List dense className={classes.cardDescriptions}>
        <ListItem>
          <ListItemIcon>
            <Restaurant fontSize='small' />
          </ListItemIcon>
          <Skeleton disableAnimate variant='text' width={'100%'} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocalOffer fontSize='small' />
          </ListItemIcon>
          <Skeleton disableAnimate variant='text' width={'100%'} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RateReview fontSize='small' />
          </ListItemIcon>
          <Skeleton disableAnimate variant='text' width={'100%'} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Directions fontSize='small' />
          </ListItemIcon>
          <Skeleton disableAnimate variant='text' width={'100%'} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocationOn fontSize='small' />
          </ListItemIcon>
          <Skeleton disableAnimate variant='text' width={'100%'} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <More fontSize='small' />
          </ListItemIcon>
          <Skeleton disableAnimate variant='text' width={'100%'} />
        </ListItem>
      </List>
    </div>
  );
};

CardSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CardSkeleton;

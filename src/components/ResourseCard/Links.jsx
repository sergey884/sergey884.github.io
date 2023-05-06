import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ResourceIcon from './ResourceIcon';

export const Links = ({
  links = [],
  id,
}) => {

  return (
    <Box sx={{ minWidth: 275 }}>
      <List style={{ width: '100%', bgcolor: 'background.paper' }}>
        {links.length ? links.map((link, index) => {
          const {
            title,
            url,
            type,
          } = link;

          return (
            <Fragment key={`${id}_${index}`}>
              <ListItem>
                <ListItemAvatar>
                  <ResourceIcon type={type} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        <Link
                          href={url}
                          target="_blank"
                          rel="noopener"
                          underline="always"
                          color="inherit"
                        >
                          {url}
                        </Link>
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {links.length - 1 !== index ? <Divider variant="inset" component="li" /> : null}
            </Fragment>
          )
        })
          : null}
      </List>
    </Box>
  );
};

export default Links;
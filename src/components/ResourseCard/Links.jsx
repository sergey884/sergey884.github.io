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
  links
}) => {
  // console.log('Links state: ', links);

  return (
    <Box sx={{ minWidth: 275 }}>
      <List style={{ width: '100%', bgcolor: 'background.paper' }}>
        {links.length ? links.map((link, index) => {
          console.log('LINK: ', link);
          const {
            title,
            url,
            type,
          } = link;
          return (
            <>
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
            </>
          )
        })
          : null}
      </List>
    </Box>
  );
};

{/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography> */}
export default Links;
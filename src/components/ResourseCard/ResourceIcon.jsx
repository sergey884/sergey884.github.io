import Avatar from '@mui/material/Avatar';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArticleIcon from '@mui/icons-material/Article';
import BookIcon from '@mui/icons-material/Book';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppsIcon from '@mui/icons-material/Apps';

const IconList = {
  youtube: <YouTubeIcon />,
  video: <OndemandVideoIcon />,
  article: <ArticleIcon />,
  text: <ArticleIcon />,
  book: <BookIcon />,
  apps: <AppsIcon />
};

export const ResourceIcon = ({
  type
}) => {
  // console.log('Links state: ', links);

  return (
    <Avatar>
      {IconList[type]}
    </Avatar>
  );
};

export default ResourceIcon;
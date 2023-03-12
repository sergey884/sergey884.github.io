import Avatar from '@mui/material/Avatar';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArticleIcon from '@mui/icons-material/Article';
import BookIcon from '@mui/icons-material/Book';
import YouTubeIcon from '@mui/icons-material/YouTube';

const IconList = {
  youtube: <YouTubeIcon />,
  video: <OndemandVideoIcon />,
  article: <ArticleIcon />,
  text: <ArticleIcon />,
  book: <BookIcon />
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
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { ResourceCard } from '../ResourseCard';

export const ResourceList = () => {
  const { state } = useContext(AppContext);
  const { subtopics } = state;
  console.log('ResourceList: ', subtopics);

  return (
    <>
      {subtopics.length ? subtopics.map((topic) => {
        return (<ResourceCard key={topic.id} topic={topic} />);
      }) : null}
    </>
  );
};

export default ResourceList;
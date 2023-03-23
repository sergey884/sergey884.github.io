import javascript from "./javascript";
import nodejs from "./nodejs";
import performance from './performance';
import codingexercise from './codingexercises';
import architecture from './architecture';

export const materials = [
  {
    id: 'js',
    title: "Javascript",
    topics: javascript
  },
  {
    id: 'nodejs',
    title: "Node.js",
    topics: nodejs
  },
  {
    id: 'architecture',
    title: "Solution Architecture",
    topics: architecture
  },
  {
    id: 'performance',
    title: "Performance optimization",
    topics: performance
  },
  {
    id: 'codingexercise',
    title: "Coding exercises",
    topics: codingexercise
  },
];

export default materials;

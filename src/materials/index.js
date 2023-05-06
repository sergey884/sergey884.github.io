import javascript from "./javascript";
import nodejs from "./nodejs";
import performance from './performance';
import codingexercise from './codingexercises';
import architecture from './architecture';
import designPatterns from './designPatterns';
import oop from './oop';
import css from './css';
import usefulPlugins from './usefulPlugins';

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
    id: 'css',
    title: "CSS",
    topics: css
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
  {
    id: 'designpatterns',
    title: "Design Patterns",
    topics: designPatterns
  },
  {
    id: 'usefulplugins',
    title: "Useful Plugins",
    topics: usefulPlugins
  },
  {
    id: 'oop',
    title: "Object Oriented Programming",
    topics: oop
  },
];

export default materials;

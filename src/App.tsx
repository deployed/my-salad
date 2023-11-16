import Button from './components/Button';
import icon from './images/fruit-bowl.svg';

function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>My salad</h1>
      <Button onClick={() => alert('hello')} icon={icon}>
        TEST
      </Button>
    </div>
  );
}

export default App;

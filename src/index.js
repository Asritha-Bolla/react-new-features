import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import NoteApp from './components/NoteApp'

//react hooks are functions which provide extra functionality to functional components

// const App = (props) => {
//   //useState provides a way to store and maintain state in functional components (YAY!!)
//   //useState returns an array with current state value and a method to update that state value. You can name these two as you wish (YAY!)
//   //state does not need to be an object (YAY!)
//   //If you pass an object with multiple values to  useState, whenever you want to change a single value, you have to rewrite whole state object (changing what needs to be changed AND keeping the remaining same) and pass it to handler method unlike this.setState in class components
//   //Ex: const [value, setState] = useState({ count: 0, text: '', name: 'Ashu' })
//   //for changing count, setState({ count: count + 1, text: '', name: 'Ashu' }) like WTF!
//   //If you use setState({ count: count + 1 }) like we do in class comp's with this.setState, it rewrites the current state object (text and name are GONE!)
//   //workaround is setState({ ...value, count: count + 1 }). But not so nice to do this again and again (UGH!)
//   //You can't just directly update only the value that needs to be changed. This makes things difficult. So better not use object as current state in useState
//   //use separate useState calls to set separate values so that you can change either without affecting the other

//   //with useEffect hook, functional components can do things lifecyle methods in class components can do

//   const [count, setCount] = useState(props.count) //Array destructuring
//   const [text, setText] = useState('')

//   //these run in the order in which they are defined
//   useEffect(() => {
//     console.log('This runs once on intial render and also when any state or props changes')
//   })

//   useEffect(() => {
//     console.log('This runs only once on intial render')
//   }, []) //keeping second argument (i.e., dependencies) as [] => this useEffect runs on intial load and then DOESN'T run for ANY other change, i.e., works exactly like componentDidMount

//   useEffect(() => {
//     console.log('useEffect called!')
//     document.title = count
//   }, [count]) //as second (optional) argument, we can pass array of state/prop values for only which useEffect should run the fn inside it when those values change
//   //we can have multiple useEffect calls and pass only the values required, keeping the application fast (YAY!!)
//   //unlike lifecyle methods in which we can't restrict the values for which they should run


//   return (
//     <div>
//       <p>{text || 'count'}: {count}</p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   )
// }

// App.defaultProps = {
//   count: 0
// }


ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

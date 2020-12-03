import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Provider will going to allow us to provide the store to all other
// component that make up application
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configStore from '../src/store/configStore';
import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filter';
import getVisibleExpenses from './selectors/expenses';

const store = configStore()
store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 200 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1000, createdAt: 300 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
// store.dispatch(setTextFilter('bill'))
// setTimeout(() => store.dispatch(setTextFilter('Water')), 3000)
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expense, state.filter)
console.log(visibleExpenses)

// import React from 'react';
// import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
// import AddExpensePage from '../components/AddExpensePage';
// import EditExpensePage from '../components/EditExpensePage';
// import HelpPage from '../components/HelpPage';
// import NotFoundPage from '../components/NotFoundPage';
// import Header from '../components/Header';

// const Home = () => (
//   <div>
//     This is from my add expense component
//   </div>
// );

// const Portfolio = (props) => {
//   console.log(props)
//   return (
//     <div>
//     <h1>My Work</h1>
//       Checkout the following things i've done;
//       <NavLink to='/portfolio/:id' exact={true}>item One</NavLink>
//     </div>
//   )
// };

// const ItemOne = () => (
//   <div>
//   <h1>A Thing i've done</h1>
//   This page it for the item with id of  
//   </div>
// );

// const Contact = () => (
//   <div>
//   <h1>Contact Me</h1>
//     You can reach me at test@gmail.com
//   </div>
// );


// const NotFoundPage = () => (
//   <div>
//     404 - <Link to="/">Go home</Link>
//   </div>
// );

// const Header = () => (
//   <header>
//     <h1>Portfolio</h1>
//     <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
//     <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
//     <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
//   </header>
// );

// const routes =(
//   <BrowserRouter>
//     <div>
//       <Header />
//       <Switch>
//         <Route path="/" component={Home} exact={true} />
//         <Route path="/portfolio" component={Portfolio} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/portfolio/:id" component={ItemOne} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );

// Provider will take only one argunment that is store which is equal to store
const jsx = (
    <Provider store={store}>  
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

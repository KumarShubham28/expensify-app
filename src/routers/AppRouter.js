import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

// const AddExpensePage = () => (
//   <div>
//     This is from my add expense component
//   </div>
// );

// const EditExpensePage = (props) => {
//   console.log(props)
//   return (
//     <div>
//       This is from my edit expense component
//     </div>
//   )
// };

// const ExpenseDashboardPage = () => (
//   <div>
//     This is from my dashboard component!
//   </div>
// );

// const HelpPage = () => (
//   <div>
//     This is from my help component
//   </div>
// );

// const NotFoundPage = () => (
//   <div>
//     404 - <Link to="/">Go home</Link>
//   </div>
// );

// const Header = () => (
//   <header>
//     <h1>Expensify</h1>
//     <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
//     <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
//     <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
//     <NavLink to="/help" activeClassName="is-active">Help</NavLink>
//   </header>
// );

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

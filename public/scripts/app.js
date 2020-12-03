'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        // this.state = {
        //     options: props.options
        // }
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (error) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("unmount");
        }
    }, {
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            // this.setState(() => {
            //     return {
            //         options: []
            //     }
            // })
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(option) {
            if (!option) {
                return "Something went wrong please try again";
            } else if (this.state.options.indexOf(option) > -1) {
                return "Value already exists";
            }
            // this.setState((prevState) => {
            //     return {
            //         options: prevState.options.concat(option)
            //     }
            // })
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var num = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[num]);
        }
    }, {
        key: 'render',
        value: function render() {
            // const title = "Indecision";
            var subtitle = "Put your life in the hands of computers";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { handleRemoveAll: this.handleRemoveAll, options: this.state.options, handleDelete: this.handleDeleteOption }),
                React.createElement(AddOptions, { handleSubmit: this.handleSubmit })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                {
                    disabled: !props.hasOptions,
                    onClick: props.handlePick
                },
                'What should i do?'
            )
        );
    }
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleRemoveAll },
            'Remove All'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started'
        ),
        props.options.map(function (element) {
            return React.createElement(Option, { key: element, elementText: element, handleDelete: props.handleDelete });
        })
    );
};

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.state = {
            error: undefined
        };
        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleSubmit(option);
            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            props.elementText,
            React.createElement(
                'button',
                { onClick: function onClick() {
                        props.handleDelete(props.elementText);
                    } },
                'Delete'
            )
        )
    );
};
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleRemoveAll}>Remove All</button>
//                 {
//                     this.props.options.map((element) => <Option key={element} elementText={element} />)
//                 }
//             </div>
//         )
//     }
// }

// class Option extends React.Component {
//     print() {
//         console.log()
//     }
//     render() {
//         return (
//             <div>
//                 <p>{this.props.elementText}<button onClick={this.print}>Delete</button></p>
//             </div>
//         )
//     }
// }

// stateless function
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: </p>
//         </div>
//     );
// };

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     disabled={!this.props.hasOptions}
//                     onClick={this.props.handlePick}
//                 >
//                     What should i do?
//                 </button>
//             </div>
//         )
//     }
// }

// IndecisionApp.defaultProps ={
//     options:[]
// }

// Header.defaultProps = {
//     title: 'Indecision'
// }

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

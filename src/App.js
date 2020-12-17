import { Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPart from './components/mainPart/MainPart';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Page3 from './components/page3/Page3';
import ExchangeData from './assets/ExchangeData';

class App extends React.Component {
    state = {
        test: 'text from state',
        data: {},
        newData: {},
        dataFromApiReceived: false,
    };

    apiUrl = `https://v6.exchangerate-api.com/v6/aa7daac21e6dccc5d465cd13/latest/USD`;

    componentDidMount() {
        fetch(this.apiUrl)
            .then((response) => response.json())
            .then((dataFromApi) => {
                const newData = {};
                Object.keys(dataFromApi.conversion_rates).forEach((key) => {
                    if (key in ExchangeData) {
                        newData[ExchangeData[key]] =
                            dataFromApi.conversion_rates[key];
                    }
                });
                this.setState({
                    data: dataFromApi.conversion_rates,
                    dataFromApiReceived: true,
                    newData: newData,
                });
            });
    }

    logic = () => {
        if (this.state.dataFromApiReceived) {
            const whatWeHave = 'COW';
            const howMany = 5;
            const whatWeNeed = 'EGG';
            let howManyWeNeed = Math.round(
                (howMany * this.state.newData[whatWeHave]) /
                    this.state.newData[whatWeNeed]
            );
            console.log(howManyWeNeed);
        }
    };

    ratioFluctuation = () => {
        let newDataWithFluctuation = { ...this.state.newData };
        const min = -0.05;
        const max = 0.05;
        Object.keys(newDataWithFluctuation).forEach((key) => {
            newDataWithFluctuation[key] =
                newDataWithFluctuation[key] +
                (Math.random() * (max - min) + min);
        });
        console.log(this.state.newData);
        console.log(newDataWithFluctuation);
    };

    render() {
        this.logic();
        this.ratioFluctuation();
        return (
            <div className="App" className="background">
                <div className="app-main-div">
                    <Header />

                    <Switch>
                        <Route
                            path="/Page1"
                            render={(props) => (
                                <Page1 {...props} text={this.state.test} />
                            )}
                        />
                        <Route
                            path="/Page2"
                            render={(props) => <Page2 {...props} />}
                        />
                        <Route
                            path="/Page3"
                            render={(props) => <Page3 {...props} />}
                        />

                        <Route
                            exact
                            path="/"
                            render={(props) => <MainPart {...props} />}
                        />
                    </Switch>

                    <Footer />
                </div>
            </div>
        );
    }
}

/*
class App extends React.Component {
  state = {
    home : "Home text from props"
  }

  render() {
    return (
      <>
        <Navbar />

        <Switch>
          <Route
            exact path="/"
            render={props =>
              <Home {...props} text={this.state.home} />
            }
          
          />  
          <Route
            path="/about"
            render={props =>
              <About {...props} />
            }  
          />
          <Route
            path="/contact"
            render={props =>
              <Contact {...props} />
            }
          />
        </Switch> 
      </>
    )
  }
}

*/

export default App;

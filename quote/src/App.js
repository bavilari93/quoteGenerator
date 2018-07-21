import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                content: '',
                link: '',
                title: ''
            },
            hasQuote: false,
        }
    }

    getQuote() {
        fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
            .then((res) =>
                res.json()
            ).then(data => {
                    console.log(data[0]);
                    if (data[0].content && data[0].title && data[0].link) {
                        let { quote } = this.state;
                        quote.content = data[0].content;
                        quote.link = data[0].link;
                        quote.title = data[0].title;
                        this.setState({ quote }, () => {
                                if (this.state.hasQuote === false) {
                                    this.setState({
                                        hasQuote: true
                                    })
                                }
                            })
                    }else {
                      return console.error("no quote has been found")
                }
            }).catch(function(error) {
        console.log(error)
    });
}

render() {
    return ( <
        div className = "App" >
        <
        button type = 'submit'
        onClick = { this.getQuote} > Quote < /button> < /
        div >
    );
}
}

export default App;
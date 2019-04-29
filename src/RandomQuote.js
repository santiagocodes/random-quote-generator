






// import React, {Component} from 'react';

// class RandomQuote extends Component {
//     constructor() {
//         super();
//         this.state = {
//             random: {
//                 image: '',
//                 quote: '',
//                 character: ''
//             },
//             hasQuote: false
//         }
//         this.end = 'https://thesimpsonsquoteapi.glitch.me/quotes'
//     }

//     getRandomQuote = event => {
//         fetch(this.end)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data[0])
//             if (data[0].image && data[0].quote && data[0].character) {
//                 let {random} = this.state;
//                 random.image = data[0].image;
//                 random.quote = data[0].quote;
//                 random.character = data[0].character;
//                 this.setState({ random }), () => {
//                     if(this.state.hasQuote === false) {
//                     this.setState({hasQuote:true})
//                     }
//                 }
//             }
         
//         })
//     }

//  render() {
//         const { hasQuote } = this.state;
//         return (
//             <div>
//                 <h1>Random Simpsons Quote</h1>
//                 {hasQuote === true ? null : "no quote yet"}
//                 <br />
//                 <button onClick={this.getRandomQuote}>
//                 New Quote
//                 </button>
//             </div>
//         )
//     }
// }

// export default RandomQuote;
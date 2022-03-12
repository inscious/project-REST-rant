const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img id='homeImage' src='/images/pexels-San-Diego.jpg' alt='image of san diego'/>
                    <div>
                        Photo by <a href='https://www.pexels.com/@lucasfonseca' >Lucas Fonseca</a> on <a href='https://www.pexels.com/'>Pexels</a>
                    </div>
                </div>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
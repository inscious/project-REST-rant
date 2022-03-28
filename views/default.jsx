const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'/>
                <link rel='stylesheet' href='/css/style.css'/>
                <body>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/places">Places</a>
                            </li>
                            <li>
                                <a href="/places/new">Add Place</a>
                            </li>
                        </ul>
                    </nav>
                    {html.children}
                    {/* <footer className='footer'>
                        <div>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/saul-cortes-656b3a22b/">LinkedIn</a></li>
                            </ul>
                        </div>
                    </footer> */}
                </body>
            </head>
        </html>
    )
}



module.exports = Def
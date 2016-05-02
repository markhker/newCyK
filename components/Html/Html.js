
import React, { PropTypes } from 'react';
import GoogleAnalytics from '../GoogleAnalytics';
import config from '../../config';

function Html({ title, description, author, fbadmin, body, debug }) {
  return (
    <html className="no-js" lang="es_MX">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>{title || config.title}</title>
        <meta name="description" content={description || config.description} />
        <meta name="author" content={author || config.author} />
        <meta property="fb:admins" content={fbadmin || config.fbadmin} />
        <meta name="theme-color" content="#005ec4" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="image_src" href="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/favicon.png" />
        <link rel="icon" href="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/favicon.png" />
        <link rel="shortcut icon" href="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/favicon.png" />
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <script src={'/app.js?' + new Date().getTime()} />
        
        <meta property="og:title" content={description || config.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title || config.title} />
        <meta property="og:url" content="http://cyk.mx" />
        <meta property="og:description" content="Somos la empresa de desarrollo y tecnología innovadora en Cloud Computing capaz de llevar a tu compañía al siguiente nivel, llegando a mercados más grandes, mejorando su productividad, reduciendo costes e incrementando el valor total de tu organización" />
        <meta property="og:image" content="http://cloudandkloud.com/img/og_img.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="http://cyk.mx" />
        <meta name="twitter:description" content="Somos la empresa de desarrollo y tecnología innovadora en Cloud Computing capaz de llevar a tu compañía al siguiente nivel, llegando a mercados más grandes, mejorando su productividad, reduciendo costes e incrementando el valor total de tu organización" />
        <meta name="twitter:title" content={description || config.description} />
        <meta name="twitter:image" content="http://cloudandkloud.com/img/og_img.jpg"/>
        <meta name="twitter:creator" content="@cyk_mx"/>
        
      </head>
      <body>
       <GoogleAnalytics />
        <div id="app" dangerouslySetInnerHTML={{ __html: body }} />
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string.isRequired,
  debug: PropTypes.bool.isRequired,
};

export default Html;

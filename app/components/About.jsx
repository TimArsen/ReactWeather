var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>About</h1>
      <blockquote>This is a simple weather app that uses the <strong>OpenWeather API</strong> to pull current weather conditions for any location searched by the user.</blockquote> <blockquote>I built this app to better learn the frontend framework <strong>React</strong> and the CSS framework <strong>Foundation</strong>.</blockquote>
    </div>
  )
};

module.exports = About;

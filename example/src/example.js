var React = require('react');
var ReactDOM = require('react-dom');
var SocialButton = require('react-social-button');
import {PageHeader, ButtonToolbar} from 'react-bootstrap';

var App = React.createClass({
  getInitialState: function() {
    return {loading: false};
  },
	render () {
		return (
      <div className='container'>
        <PageHeader>React Bootstrap Social Buttons</PageHeader>
        <p className="lead">
          React component for <a href="https://lipis.github.io/bootstrap-social/">bootstrap-social</a>, based on the <a href="https://react-bootstrap.github.io/components.html#buttons">react-bootstrap</a> button.
        </p>
        <p>
          Pass the <code>social</code> name as a property, optionally pass <code>text</code> to be shown next to the logo, and <code>btnProps</code> to be passed to the underlying <code>Button</code>.
        </p>
        <p>
          Also replaces the logo with a spinner animation if <code>loading</code> is set to <code>true</code>.
        </p>
        <div className='well'>
          <ButtonToolbar>
            <SocialButton
              social='twitter'
              btnProps={{
                onClick: function(){alert('Callback called.');}
              }}/>
            <SocialButton
              social='twitter'
              btnProps={{
                disabled: true,
                onClick: function(){alert('Callback called.');}
              }}/>
            <SocialButton
              social='twitter'
              loading={true}
              btnProps={{
                onClick: function(){alert('Callback called.');}
              }}/>
            <SocialButton
              social='twitter'
              loading={true}
              btnProps={{
                disabled: true
              }}/>
          </ButtonToolbar>
        </div>
        <div className='well'>
          <ButtonToolbar className='p-y-1'>
            <SocialButton
              social='github'
              text='Sign in with GitHub'
              btnProps={{
                onClick: function(){alert('Callback called.');}
              }}/>
            <SocialButton
              social='github'
              text='Sign in with GitHub'
              btnProps={{
                disabled: true,
                onClick: function(){alert('Callback called.');}
              }}/>
            <SocialButton
              social='github'
              text='Waiting for authorization'
              loading={true}
              btnProps={{
                onClick: function(){alert('Callback called.');}
              }}/>
            <SocialButton
              social='github'
              text='Disabled button'
              loading={true}
              btnProps={{
                disabled: true
              }}/>
          </ButtonToolbar>
        </div>
        <p>
          See the <a href="https://github.com/AljoschaMeyer/react-social-button">GitHub repository</a> for actual documentation.
        </p>
      </div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));

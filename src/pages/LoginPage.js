import React, {Component} from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {userActions} from '../_actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this
      .props
      .dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({submitted: true});
    const {username, password} = this.state;
    const {dispatch} = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const {loggingIn} = this.props;
    const {username, password, submitted} = this.state;
    return (
      <div className='login-form'>
        {/*
            Heads up! The styles below are necessary for the correct render of this example.
            You can do same with CSS, the main idea is that all the elements up to the `Grid`
            below must have a height of 100%.
          */}
        <style>
          {
            ` body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
             `
          }</style>
        <Grid
          textAlign='center'
          style={{
          height: '100%'
        }}
          verticalAlign='middle'>
          <Grid.Column style={{
            maxWidth: 450
          }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='../assets/img/ods.jpg'/> {' '}Connexion Intranet
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input 
                  fluid 
                  icon='user' 
                  iconPosition='left' 
                  placeholder='Adresse E-mail'
                  name='username'
                  value={username}
                  onChange={this.handleChange}/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Mot de passe'
                  type='password'
                  name="password" 
                  value={password} 
                  onChange={this.handleChange}/>

                <Button color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 

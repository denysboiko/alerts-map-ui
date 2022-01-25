import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
    Button,
    Checkbox
} from 'semantic-ui-react'

import { Map } from './Map.js';

import {
    CheckboxesList
} from './Checkboxes.js'

export const countryOptions = [
    {key: 'ru', value: 'ru', flag: 'ru', text: 'Russia'},
    {key: 'ua', value: 'ua', flag: 'ua', text: 'Ukraine'},
    {key: 'us', value: 'us', flag: 'us', text: 'United States'}
]


export const partnerOptions = [
    {key: 'mc', value: 'ru', text: 'Mercy Corps'},
    {key: 'pin', value: 'ua', text: 'People In Need'},
    {key: 'sos', value: 'us', text: 'SOS Children\'s Villages International'},
    {key: 'unhcr', value: 'en', text: 'United Nations High Commissioner for Refugees'},
]


const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
    float: 'left',
    margin: '0em 3em 1em 0em',
}

const user = "Denys Boiko";
const header1 = "Cluster";

class App extends Component {

    state = {
        menuFixed: false,
        overlayFixed: false,
    };

    render() {

        const {menuFixed, overlayFixed, overlayRect} = this.state;

        return (

            <div className="App">

                <Menu
                    borderless
                    // fixed={menuFixed && 'top'}
                    style={menuFixed ? fixedMenuStyle : menuStyle}
                >
                    <Container fluid>
                        <Menu.Item>
                            <Image size='mini' src='http://react.semantic-ui.com/logo.png'/>
                        </Menu.Item>

                        <Menu.Item header>Alerts Map</Menu.Item>

                        <Menu.Item header>
                            <Button primary>Reset Filters</Button>
                            <Button primary>Add an Alert</Button>
                        </Menu.Item>


                        <Dropdown text={user} pointing className='link item'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Admin Panel</Dropdown.Item>
                                <Dropdown.Item>Change Password</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item as='a'>Blog</Menu.Item>
                        <Menu.Item as='a'>Articles</Menu.Item>
                        <Menu.Item>
                            <Menu.Menu position='right'>
                                <Dropdown inline options={countryOptions} defaultValue={countryOptions[0].value}/>
                            </Menu.Menu>
                        </Menu.Item>


                    </Container>
                </Menu>
                <Container fluid>
                    <Grid style={{height: '100vh'}}>
                        <Grid.Row>
                            <Grid.Column width={4}>

                                <Container className="aside-wrapper">

                                    <Header as='h2'>{header1}</Header>

                                    <CheckboxesList options={['One', 'Two', 'Three', 'Four', 'Five', 'Six']}/>

                                    <Header as='h2'>Partner</Header>
                                    <Dropdown placeholder='Select Country' fluid multiple search selection
                                              options={partnerOptions}/>

                                </Container>

                            </Grid.Column>
                            <Grid.Column width={12}>
                                {/*<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>*/}
                                <Map />
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                </Container>
            </div>
        );
    }
}

export default App;

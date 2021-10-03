import { shallow, ShallowWrapper } from 'enzyme';
import {Login} from '../src/screens';
import * as React from 'react';
import App from '../src/App';

const MockLoginScreen = ()=> {
    return <div>{'LoginScreen'}</ div>
};

describe( 'App suite', () =>{

    afterEach(() =>{
        jest.clearAllMocks();
    });

    beforeEach(() =>{
        jest.mock('../src/screens/Login/Login', () => <MockLoginScreen />);
    });

    it('Should render Router', () => {
        
        const component: ShallowWrapper = shallow(<App/>);
        const div = component.find('div').text();
        
    });

});
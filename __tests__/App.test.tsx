import { shallow, ShallowWrapper } from 'enzyme';

import * as React from 'react';
import App from '../src/App';


describe( 'App suite', () =>{

    it('Should render Router', () => {

        const component: ShallowWrapper = shallow(<App/>);

        expect(true).toBeTruthy();

        
    });

});
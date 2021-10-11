import { shallow, ShallowWrapper } from 'enzyme';
import { Form } from '../../../src/components';
import * as React from 'react';

describe( 'Form Component Suite', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should Render Correctly',() => {

        const component: ShallowWrapper = shallow(<Form type={'centered'}/>);

        expect( component.contains( <p>{'something'}</p> ) ).toEqual( true );

    });

});
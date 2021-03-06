import React, { Component } from 'react'
import {shallow} from 'enzyme'
import Search from '../components/Search';

import {findByTestAtrr} from '../../Utils';

const setUp = (props={}) => {
    const component = shallow(<Search {...props }/>);
    return component;
}

describe('Search component', () => {
    let component;// = setUp();
    beforeEach(() =>{
        component= setUp();
    })

    it("Should render the search button", ()=>{
        const wrapper  = findByTestAtrr(component,'search_button')
        expect(wrapper.length).toBe(1);
    })
})
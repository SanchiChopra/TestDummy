import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

// import renderer from "react-test-renderer";    //snapshot testing
import { create } from "react-test-renderer";
afterEach(cleanup);

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

it("renders button correctly", ()=> {
    const {getByTestId} = render(<Button label="click me please"> </Button>)
    expect(getByTestId('button')).toHaveTextContent("click me please")
});

it("renders button correctly", ()=> {
    const {getByTestId} = render(<Button label="save"> </Button>)
    expect(getByTestId('button')).toHaveTextContent("save")
});

it("matches snapshot", () => {
    const tree = create(<Button label = "save"> </Button>).toJSON();   
    //will convert it into a virtual DOM object and save it in tree object
    expect(tree).toMatchSnapshot(); 
    //it goes and looks into the folder structure, and looks for a folder called snapshot and inside that 
    //there should be a file called button.snapshot. It will create snapshot folder and file inside it because it is
    //currently not present. It renders the entire component we pass using this new created file
    //hence, it saved the snapshot
});
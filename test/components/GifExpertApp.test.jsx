import { describe, test, expect} from '@jest/globals';
import { render } from '@testing-library/react';
import { GifExpertApp } from "../../src/GifExpertApp";

describe('Pruebas en GifExpertApp', () => {

    test('debe hacer match con el snapshot',()=>{
        const  {container} = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();

    });

});
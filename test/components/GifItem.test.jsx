import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>',()=>{
    const title = 'Sailor Moon';
    const url = 'https://test-url.com/sailor-moon.jpg';

    test('debe hacer match con el snapshot',()=>{
        const { container } = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();

    })

});
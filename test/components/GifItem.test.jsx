import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>',()=>{
    const title = 'Sailor Moon';
    const url = 'https://test-url.com/sailor-moon.jpg';

    test('debe hacer match con el snapshot',()=>{
        const { container } = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el url indicado y alt',()=>{
        render(<GifItem title={title} url={url}/>);
        // screen.debug();
        const {src, alt} =  screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('debe mostrar el titulo en el componente',()=>{
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();   
        
    });

});
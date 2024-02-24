import { describe, test, expect} from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from "../../src/GifExpertApp";

describe('Pruebas en GifExpertApp', () => {

    test('debe hacer match con el snapshot',()=>{
        const  {container} = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();

    });

    test('debe eliminar la categoria seleccionada',()=>{
        render(<GifExpertApp/>);

        const deleteButton = screen.getByTestId(`deleteCategory-One Punch`);
        
        fireEvent.click(deleteButton);

        expect(screen.queryByText("One Punch")).not.toBeInTheDocument();

    });

});
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en el componente <AddCategory/>',()=>{

    test('debe cambiar el valor en la caja de texto',()=>{
        render(<AddCategory onNewCategories={()=>{}} />)

        const input = screen.getByRole( 'textbox')  // Buscamos por su role (que es un textbox)

        fireEvent.change(input, {target: {value: "Saitama"}});

        expect(input.value).toBe("Saitama");   // Comparamos que el value del

        // screen.debug();
    })

    test('debe llamar a onNewCategories si el input tiene un valor',()=>{

        const inputValue = 'Saitama';
        const onNewCategories= jest.fn();

        render(<AddCategory onNewCategories={onNewCategories} />);

        const input = screen.getByRole( 'textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, {target: {value: inputValue}});

        fireEvent.submit(form);

        // screen.debug();

        // expect(input.value).toBe('');
        
        expect(onNewCategories).toHaveBeenCalled();
        expect(onNewCategories).toHaveBeenCalledTimes(1);
        expect(onNewCategories).toHaveBeenCalledWith(inputValue);

    });

    test('no debe llamar el onNewCategories si el input esta vacio',()=>{
        
        const onNewCategories= jest.fn();

        render(<AddCategory onNewCategories={onNewCategories} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);     // Sin valor en el input

        expect(onNewCategories).not.toHaveBeenCalled();

    })
})
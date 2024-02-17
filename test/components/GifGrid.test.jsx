import { render, screen, expect } from "@testing-library/react";
import { describe, test } from '@jest/globals';
import { Gifgrid } from "../../src/components/GifGrid";

describe('Pruebas en el componente <GifGrid/>',()=>{
    const category = 'One Punch';

    test('Debe mostrar el loading inicialmente',()=>{
        render(<Gifgrid category={category}/>);

        expect(screen.getByText('Cargando...')).toBeInTheDocument();
        expect(screen.getByText(category));
        
    })
});

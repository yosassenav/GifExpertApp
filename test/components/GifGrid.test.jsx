import { render, screen } from '@testing-library/react';
import { describe, test, expect, jest } from '@jest/globals';
import { Gifgrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


jest.mock( '../../src/hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid/>', () => {
  const category = 'One Punch';

  test('Debe mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true,
  })

    render(<Gifgrid category={category} />);

    const loadingMessage = screen.getByText('Cargando...');
    expect(loadingMessage);
    expect(screen.getByText(category));
  });


  test('debe mostrar items cuando se cargan las imagenes useFetchGifs',()=>{
    const gifs = [
        {
            id: 1234567890,
            title: 'One Punch',
            url: 'https://localhost/image.jpg' 
        },
        {
            id: 1234567891,
            title: 'Sailor Moon',
            url: 'https://localhost/image2.jpg' 
        }
    ];


    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false,
  })
  
    render(<Gifgrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
})

});
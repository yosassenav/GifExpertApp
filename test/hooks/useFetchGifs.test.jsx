import { describe, test, expect} from '@jest/globals';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe regresar el estado inicial del hook useFetchGifs',()=>{
       const {result} = renderHook(() => useFetchGifs('One Punch'));

    //    console.log(result);

       const {images, isLoading} = result.current;
       expect(images.length).toEqual(0);
       expect(isLoading).toBeTruthy();

    });

    test('debe regresar un arreglo de imagenes e isLoading debe ser falso', async()=>{
        const {result} = renderHook(() => useFetchGifs('One Punch'));

        // evaluacion del hook useFetchGifs
        await waitFor(
            ()=>{ expect(result.current.images.length).toBeGreaterThan(0) }
        );

        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
});

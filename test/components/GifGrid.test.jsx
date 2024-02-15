import { render } from "@testing-library/react";
import { Gifgrid } from "../../src/components/GifGrid";

describe('Pruebas en el componente <GifGrid/>',()=>{
    const category = 'One Punch';

    test('Debe mostrar el loading inicialmente',()=>{
        render(<Gifgrid category={category}/>);
        
    })
});
  
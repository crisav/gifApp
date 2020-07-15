import React from 'react';
import GifGridItem from '../../components/GifGridItem';
import {shallow} from 'enzyme';

describe('Pruebas en <GifGridItem />', () => {

  const title = 'Un título';
  const url   = 'https://localhost/algo.jpg';
  const wrapper = shallow( <GifGridItem title={title} url={url} /> )
  
  test('debe de mostrar el componente correctamente', () => {

    expect( wrapper ).toMatchSnapshot();

  }); 

  test('debe de tener un párrafo con el title', () => {
    
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( title );

  });
  
  test('debe de tener l imagen igual al url y alt de los props ', () => {
    
    const img = wrapper.find('img');
    // .props() me permite ver las propiedades de una etiqueta .prop('src') si quiero filtrar una sola propiedad
    // console.log( img.props() );
    expect( img.prop('src') ).toBe( url );
    expect( img.prop('alt') ).toBe( title );

  });

  test('debe de tener animate__fadeIn', () => {
    
    const div = wrapper.find('div');
    // console.log( div.prop('className') );
    
    // mi solucion
    expect( div.prop('className') ).toContain('animate__fadeIn');

    // otra forma la solucion del profesor:
    const className = div.prop('className');
    expect( className.includes('animate__fadeIn') ).toBe( true );

  });
  
  

})

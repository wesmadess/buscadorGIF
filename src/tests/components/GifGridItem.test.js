import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem/>',()=>{

    const title = 'blase one punch man GIF';
    const url = 'https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=e69f9192jl7mju2h3onkv2ubbhnfyhosy9eevt5wj8cf4y8b&rid=giphy.gif';        
    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    
    test('Debe mostrar el componente correctamente',()=>{        
        expect(wrapper).toMatchSnapshot();        
    })   
    
    test('Debe de tener un párrafo con el title',()=>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })  

    test('Debe de tener la imagen igual al url y alt de los props',()=>{
        const img = wrapper.find('img');
        // console.log(img.prop('src'))
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })  

    test('Debe de tener animate__fadeIn',()=>{
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })  

})
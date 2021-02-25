import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />',()=>{
    
    const category = 'Onr Punch';
    
    test('Debe de mostrarse correctamente',()=>{
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true       
        });
        
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })    

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs',()=>{
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/imagen/uno.jpg',
            title: 'titulo'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false       
        });        

        const wrapper = shallow(<GifGrid category={category} />);        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })        

})
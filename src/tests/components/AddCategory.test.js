import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory />',()=>{

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Debe de mostrarse correctamente',()=>{
        expect(wrapper).toMatchSnapshot();
    })    

    test('Debe de cambiar la caja de texto',()=>{
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    })    

    test('No debe de postear la información con submit',()=>{
        wrapper.find('form').simulate('submit',{preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    })        

    test('Debe de llamar el setCategories y limpiar la caja de texto',()=>{
        const value = 'Hola Mundo';   
        // Simulación del inputChange
        wrapper.find('input').simulate('change', {target: {value} });
        // Simulación del submit
        wrapper.find('form').simulate('submit', {preventDefault(){} });
        // setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1); //se haya llamado al menos una vez
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //se haya llamado con una función
        // El valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');

    })      

})
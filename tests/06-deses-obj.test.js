import { send } from "vite"
import { usContext } from "../src/base-pruebas/06-deses-obj"
describe('Prueba de 06-deses-obj',()=>{
    test('Testear funcion usContext', ()=>{
        const sendThis = {
            clave:'Daniel',
            edad:10
        }
        const testSubje = {
            nombreClave:sendThis.clave,
            anios: sendThis.edad,
            latlng:{
                lat:14.1232,
                lng:-12.3232,
            }
        }
        const test = usContext(sendThis);
        expect(testSubje).toEqual(test);
    })
})
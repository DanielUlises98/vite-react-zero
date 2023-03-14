describe('Pruebas en <Democomponent / >',()=>{
    test ('Esta prueba no debe de fallar', ()=>{

        // 1 Initiatiliation 
        const message1 = 'Hola mundo';
        /// 2 stimulus
        const message2 = message1.trim();
    
        // observe behaviour 
        expect (message1).toBe( message2 );
    
    })
})


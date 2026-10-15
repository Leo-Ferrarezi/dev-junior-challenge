
import './style.css'
{/*import LogoHospital from '../';*/}


function Checkin() {

  return (
    <>
      <section id="center">

        <div className='primeira-linha'>
        
        <h5>Alternar Visão: </h5>
        <button className='button-totem' type='button'>Totem Check-in</button>
        <button className='button-recepecao' type='button'>Fila da Recepeção</button>
        </div>
       

        <div className='meu-nome'>Projeto por Leonardo Ferrarezi</div>

        <div className='container'>

          <div className='imagem-logo'>

           {/*<img src={LogoHospital} /> */}
          </div>

        <form>
        
        <h3 className='texto1'>Ola! <br></br>
          Boas Vindas ao totem <br></br> do hospital Osvaldo Cruz
        </h3>
        <h3 className='texto2'>Faça aqui o seu checkin</h3>

        <h6 className='textocpf'>Digite aqui o seu CPF</h6>
        <input className='manda-Cpf' type='text'/>
        <button className='botao-Enviar' type='submit'>Confirmar</button>

        </form>




        </div>
      </section>

      
      <section id="spacer"></section>
    </>
  )
}

export default Checkin

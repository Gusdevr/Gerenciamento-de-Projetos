import React from 'react'
import HeaderLogin from '../../components/HeaderLogin'
import Footer from '../../components/Footer'

import { ContentRegister } from './styles'

const Register = () => {
  return (
    <ContentRegister>
        <HeaderLogin />

        <div className='form-register'>

            <form>
                <h1>bem vindo ao gestilt</h1>

                <label htmlFor="email">E-mail</label>
                <input type="email" name='e-mail'/>
                <button>Próximo</button>

            </form>

        </div>

        <Footer />
    </ContentRegister> 
  )
}

export default Register
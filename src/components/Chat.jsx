import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import './style.css';

const SignupSchema = Yup.object().shape({
  nome: Yup.string()
    .min(100, <div><span id="circulo">teste</span><div className="texto-container"><label>Que satisfação, (nome). Agora que sei seu nome, qual cidade e estado você mora?</label></div></div>)
    .max(50, 'Too Long!')
    .required('Required'),
  cidade: Yup.string()
    .min(100, <div className="texto-container"><label>Legal, agora sabemos sua cidade e estado. Quando foi que você nasceu?</label></div>)
    .max(50, 'Too Long!')
    .required('Required'),
  date: Yup.date().default(function () {return new Date();})
    .max(100, <div className="texto-container"><label>Qual o seu e-mail?</label></div>)
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required')
});
const App = props =>{
    const [serverState, setServerState] = useState({ users: [] });
    const handleServerResponse = (ok, msg) => {
      setServerState({ok, msg});
    };
    const handleOnSubmit = (values, actions) => {
      axios({
        method: "POST",
        url: "http://localhost:3000/",
        data: values
      }).then(response => {
          actions.setSubmitting(false);
          actions.resetForm();
          handleServerResponse(true, "Thanks!");
        })
        .catch(error => {
          actions.setSubmitting(false);
          handleServerResponse(false, error.response.data.error);
        });
    };
  return (    
  <div>
    <img className="logo" src="https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=010" alt="logo"/>

    <Formik
      initialValues={{
        nome: '',
        cidade: '',
        date: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleOnSubmit}
    >
      
    {({ errors, touched, isSubmitting }) => (
        <div className="container-background">
          <div className="container-back-form">
            <div className="barra-superior">
              <div id="container-mensagens">
                <Form id="fs-frm" noValidate className="form">
                  <Field className="inputs" name="nome" placeholder="Nome e sobrenome"/>

                  {errors.nome && touched.nome ? ( <div>{errors.nome} </div> ) : null}

                  {errors.nome && touched.nome ? <Field className="inputs" name="cidade" placeholder="Cidade" /> : null}
                  
                  {errors.cidade && touched.cidade ? ( <div>{errors.cidade}</div> ) : null}

                  {errors.cidade && touched.cidade ? <Field className="inputs" name="date" type="date" /> : null}
                  
                  {errors.date && touched.date ? <div>{errors.date}</div> : null}

                  {errors.date && touched.date ? <Field className="inputs" name="email" type="email" /> : null}
                  
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}

                  {errors.nome && touched.nome && !errors.email && touched.email ? <div className="texto-container"><label>Fim</label></div>  : null}

                  <button type="submit" disabled={isSubmitting}>Enviar</button> 
                  {serverState && (
                      <p className={!serverState.ok ? "errorMsg" : ""}>
                        {serverState.msg}
                      </p>
                    )}           
                </Form>
              </div>
            </div>        
          </div>
        </div>
      )}
    </Formik>
  </div>

  );
};
 export default App;
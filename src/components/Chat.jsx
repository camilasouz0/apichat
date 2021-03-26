import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import balaofala from "../img/balao.png";
import './style.css';

const SignupSchema = Yup.object().shape({
  nome: Yup.string()
    .min(100, <div id="posicao"><img className="balao-fala" id="image"src={balaofala} /><label className="texto-container" id="texto">Que satisfação, (nome). Agora que sei seu nome, qual cidade e estado você mora?</label></div>)
    .max(50, 'Too Long!')
    .required('Required'),
  cidade: Yup.string()
    .min(100, <div id="posicao"><img className="balao-fala" id="image"src={balaofala} /><label className="texto-container" id="texto">Legal, agora sabemos sua cidade e estado. Quando foi que você nasceu?</label></div>)
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
  .min(100, 'Qual o seu e-mail?')
  .max(50, 'Too Long!')
  .required('Required'),
});

export const ValidationSchemaExample = () => (
  <div>
    <img className="logo" src="https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=010" alt="logo"/>
    <Formik
      initialValues={{
        nome: '',
        cidade: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <div className="container-background">
          <div className="container-back-form">
            <Form className="container-scroll">
              <Field className="input-color" name="nome" placeholder="Nome e sobrenome"/>
              {errors.nome && touched.nome ? ( <div>{errors.nome}</div> ) : null}
              {/* disabled={!errors.nome} */}
              {errors.nome && touched.nome ? <Field className="input-color" name="cidade" placeholder="Cidade"/> : null}
              
              { errors.cidade && touched.cidade ? ( <div>{errors.cidade}</div> ) : null}

              { errors.cidade && touched.cidade ? <Field className="input-color" name="email" type={"number"} /> : null}
              
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <button type="submit">Enviar</button>             
            </Form>           
          </div>
        </div>
      )}
    </Formik>
  </div>
);

 export default ValidationSchemaExample;
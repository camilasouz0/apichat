import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './style.css';

const SignupSchema = Yup.object().shape({
  nome: Yup.string()
    .min(100, <div className="texto-container"><label>Que satisfação, (nome). Agora que sei seu nome, qual cidade e estado você mora?</label></div>)
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

export const ValidationSchemaExample = () => (
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
      onSubmit={values => {
        console.log(values);
      }}
    >
      
    {({ errors, touched, isValidating}) => (
        <div className="container-background">
          <div className="container-back-form">
            <Form className="container-scroll">
              <Field className="input-color" name="nome" placeholder="Nome e sobrenome"/>

              {errors.nome && touched.nome ? ( <div>{errors.nome} </div> ) : null}

              {errors.nome && touched.nome ? <Field className="input-color" name="cidade" placeholder="Cidade" /> : null}
              
              {errors.cidade && touched.cidade ? ( <div>{errors.cidade}</div> ) : null}

              {errors.cidade && touched.cidade ? <Field className="input-color" name="date" type="date" /> : null}
              
              {errors.date && touched.date ? <div>{errors.date}</div> : null}

              {errors.date && touched.date ? <Field className="input-color" name="email" type="email" /> : null}
              
              {errors.email && touched.email ? <div>{errors.email}</div> : null}

              {errors.nome && touched.nome && !errors.email && touched.email ? <div className="texto-container"><label>Fim</label></div>  : null}

              <button type="submit">Enviar</button> 
                            
            </Form>
                    
          </div>
        </div>
      )}
    </Formik>
  </div>
);

 export default ValidationSchemaExample;